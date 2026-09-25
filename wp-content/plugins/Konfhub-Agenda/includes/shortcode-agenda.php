<?php
function konfhub_agenda_shortcode($atts) {
$atts = shortcode_atts(array(
    'event_id'   => '',
    'event_slug' => '',
    'venue'      => '',
    // Default to WP timezone if set; otherwise use Asia/Kolkata (IST)
    'timezone'   => get_option('timezone_string') ? get_option('timezone_string') : 'Asia/Kolkata'
), $atts, 'konfhub_agenda');

    $event_id = sanitize_text_field($atts['event_id']);
    $event_slug = sanitize_text_field($atts['event_slug']);

    if (empty($event_id) || empty($event_slug)) {
        return '<p><strong>Error:</strong> Please provide both <code>event_id</code> and <code>event_slug</code> in the shortcode.<br>Example: <code>[konfhub_agenda event_id="abc123" event_slug="my-event"]</code></p>';
    }

    $sessions = wp_remote_get("https://api.konfhub.com/event/{$event_id}/sessions?sessions_to_return=all");
    $filters = wp_remote_get("https://api.konfhub.com/event/{$event_id}/public/filters");
    $speakers = wp_remote_get("https://api.konfhub.com/event/public/{$event_slug}/speakers");

    $track_date = '2025-05-31'; // Adjust if needed
    $tracks = wp_remote_get("https://api.konfhub.com/event/{$event_id}/public/tracks?track_date={$track_date}");


    ob_start();

    if (is_wp_error($sessions) || is_wp_error($filters) || is_wp_error($speakers)) {
        echo '<p>Unable to fetch agenda data. Please check your Event ID and Slug.</p>';
        return ob_get_clean();
    }

    $sessions_data = json_decode(wp_remote_retrieve_body($sessions), true);
    $filters_data = json_decode(wp_remote_retrieve_body($filters), true);
    $speakers_data = json_decode(wp_remote_retrieve_body($speakers), true);

    $tracks_data = json_decode(wp_remote_retrieve_body($tracks), true);



?>
<div class="agenda-section">
        <div class="agenda-date-download" style="justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 20px;">
        <div style="flex: 1;"></div>

        <div class="agenda-date-tabs" id="date-tabs" style="display: flex; gap: 10px; justify-content: center;"></div>
        <div class="agenda-download-wrapper">
        <button id="download-pdf" class="agenda-download-btn">
        <i class="fas fa-arrow-down" style="margin-right: 8px;"></i> Download PDF
        </button>
        </div>
    </div>
    <input type="hidden" id="filter-date" value="" />
    <div class="agenda-filters">
        <select id="filter-theme"><option value="">Thematic Tracks</option></select>
        <select id="filter-stage"><option value="">All Stages</option></select>
        <select id="filter-type"><option value="">All Sessions</option></select>
        <button id="clear-filters">Clear</button>
    </div>
    <div id="agenda-loader" class="agenda-loader" style="display: none;"></div>
    <div id="agenda-results"></div>
</div>

<script type="application/json" id="agenda-json-data"><?php echo json_encode($sessions_data); ?></script>
<script type="application/json" id="filters-json-data"><?php echo json_encode($filters_data); ?></script>
<script type="application/json" id="speakers-json-data"><?php echo json_encode($speakers_data); ?></script>
<script type="application/json" id="tracks-json-data"><?php echo json_encode($tracks_data); ?></script>
<input type="hidden" id="agenda-timezone" value="<?php echo esc_attr($atts['timezone']); ?>" />


<script>
document.addEventListener('DOMContentLoaded', function () {
    const sessions = JSON.parse(document.getElementById('agenda-json-data').textContent);

// -----------------------------
// Ensure sessions are sorted by start time (ascending)
// -----------------------------
function _parseTsToMs(ts) {
  if (!ts) return 0;
  try {
    return Date.parse(normalizeTs(ts));
  } catch (e) {
    return 0;
  }
}

function sortSessionsAscending(arr) {
  if (!Array.isArray(arr)) return;
  arr.sort((a, b) => {
    const aStart = _parseTsToMs(a.start_timestamp || a.start || '');
    const bStart = _parseTsToMs(b.start_timestamp || b.start || '');
    if (aStart !== bStart) return aStart - bStart;

    // tie-breaker: earlier end time first
    const aEnd = _parseTsToMs(a.end_timestamp || a.end || '');
    const bEnd = _parseTsToMs(b.end_timestamp || b.end || '');
    if (aEnd !== bEnd) return aEnd - bEnd;

    // final tie-breaker: session title (alphabetical)
    const aTitle = (a.title || a.session_title || '').toString();
    const bTitle = (b.title || b.session_title || '').toString();
    return aTitle.localeCompare(bTitle);
  });
}

// Apply sorting immediately so all downstream logic (tabs / rendering) sees sorted array
sortSessionsAscending(sessions);


    const filters = JSON.parse(document.getElementById('filters-json-data').textContent);
    const speakers = JSON.parse(document.getElementById('speakers-json-data').textContent);
    const tracks = JSON.parse(document.getElementById('tracks-json-data')?.textContent || '[]');

    const themeDropdown = document.getElementById('filter-theme');
    const stageDropdown = document.getElementById('filter-stage');
    const typeDropdown = document.getElementById('filter-type');
    const dateInput = document.getElementById('filter-date');
    const resultsContainer = document.getElementById('agenda-results');

    const tagMap = { Theme: new Map(), Stage: new Map(), "Session Type": new Map() };
    let hasStageTags = false;

    filters.forEach(filter => {
        const key = filter.name.trim();
        if (!tagMap[key]) return;

        filter.tags.forEach(tag => {
            const tagId = tag.id;
            const tagName = tag.name.trim();
            tagMap[key].set(tagId, tagName);
            const opt = new Option(tagName, tagId);
            if (key === "Theme") themeDropdown.appendChild(opt);
            if (key === "Stage") {
                stageDropdown.appendChild(opt);
                hasStageTags = true;
            }
            if (key === "Session Type") typeDropdown.appendChild(opt);
        });
    });

    // fallback to tracks if stage not populated
    if (!hasStageTags && Array.isArray(tracks)) {
        tracks.forEach(track => {
            const stageName = track.track_title;
            const opt = new Option(stageName, stageName);
            stageDropdown.appendChild(opt);

            (track.track_sessions || []).forEach(sess => {
                const match = sessions.find(s => s.session_id === sess.session_id);
                if (match) match._track_title = stageName;
            });
        });
    }


// ----------------------------
// TIMEZONE & NORMALIZATION HELPERS (COPY / PASTE THIS WHOLE BLOCK)
// ----------------------------
const TIMEZONE = (document.getElementById('agenda-timezone') && document.getElementById('agenda-timezone').value)
  || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';

/**
 * normalizeTs(ts)
 * - If ts already contains 'Z' or an offset, return unchanged.
 * - If ts is naive like "2025-11-05 03:30:00" we treat it as UTC -> append 'Z'.
 *   (KonfHub feed returns UTC naive timestamps.)
 */
function normalizeTs(ts) {
  if (typeof ts !== 'string') return ts;
  // already has Z or +HH:MM
  if ( /[zZ]$|[+-]\d{2}:?\d{2}$/.test(ts) ) return ts;
  // convert "YYYY-MM-DD HH:MM:SS" -> "YYYY-MM-DDTHH:MM:SSZ" (treat as UTC)
  return ts.replace(' ', 'T') + 'Z';
}

/**
 * formatDate(ts)
 * - Returns date in YYYY-MM-DD for the chosen display timezone.
 */
function formatDate(ts) {
  const iso = normalizeTs(ts);
  const d = new Date(iso);
  return new Intl.DateTimeFormat('en-CA', { timeZone: TIMEZONE }).format(d); // en-CA -> YYYY-MM-DD
}

/**
 * formatTime(ts)
 * - Returns localized time (e.g. "3:30 PM") for chosen TIMEZONE
 */
function formatTime(ts) {
  const iso = normalizeTs(ts);
  const d = new Date(iso);
  return d.toLocaleTimeString('en-US', {
    timeZone: TIMEZONE,
    hour: 'numeric',
    minute: '2-digit'
  });
}



function buildDateTabs() {
    const container = document.getElementById('date-tabs');
    container.innerHTML = '';
    const validDatesMap = new Map();
    const allFilterTagIds = new Set([
        ...tagMap.Theme.keys(),
        ...tagMap.Stage.keys(),
        ...tagMap["Session Type"].keys()
    ]);

    // Include all sessions when building date tabs (do not require tags)
    sessions.forEach(session => {
        const sessionDate = formatDate(session.start_timestamp);
        if (!validDatesMap.has(sessionDate)) {
            validDatesMap.set(sessionDate, []);
        }
        validDatesMap.get(sessionDate).push(session);
    });

    const validSortedDates = [...validDatesMap.keys()].sort();

    validSortedDates.forEach(date => {
        const btn = document.createElement('button');
        const display = new Date(date).toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
        btn.className = 'date-tab';
        btn.textContent = display;
        btn.onclick = () => {
            dateInput.value = date;
            document.querySelectorAll('.date-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSessions();
        };
        container.appendChild(btn);
    });

    if (validSortedDates.length) {
        // Do not preselect any date
        dateInput.value = '';
    }

    // already inside DOMContentLoaded block
    setTimeout(() => {
      try {
        const sessions = JSON.parse(document.getElementById('agenda-json-data')?.textContent || '[]');
        if (sessions.length) renderSessions?.();
      } catch (e) {
        console.error("Agenda init error:", e);
      }
    }, 200);



//        if (validSortedDates.length) {
//            dateInput.value = validSortedDates[0];
//            container.querySelector('button')?.classList.add('active');
//        }

    }

    function getSpeakerDetails(speakerRefs) {
        const ids = speakerRefs.map(ref => String(ref.speaker_id || ref));
        return ids.map(id => {
            const sp = speakers.find(s => String(s.speaker_id) === id);
            if (!sp) return '';
            const img = sp.image_url?.startsWith('http') ? sp.image_url : 'https://via.placeholder.com/100x100?text=Speaker';
            const name = sp.name || 'Unnamed';
            const role = sp.designation || '';
            const org = sp.organisation || '';
            const tagList = Array.isArray(sp.tags) ? sp.tags : Object.values(sp.tags || {});
            const tagName = tagList.length > 0 ? (typeof tagList[0] === 'string' ? tagList[0] : tagList[0].name) : 'Speaker';
            return `
              <div class="speaker-card">
                <img src="${img}" class="speaker-photo" alt="${name}">
                <div class="speaker-meta">
                  <div class="speaker-tag">${tagName.toUpperCase()}</div>
                  <div class="speaker-name">${name}</div>
                  <div class="speaker-role">${role}${org ? ', ' + org : ''}</div>
                </div>
              </div>
            `;
        }).join('');
    }

      const tagIdToFilterName = {};
      filters.forEach(filter => {
          filter.tags.forEach(tag => {
              tagIdToFilterName[tag.id] = filter.name.trim();
          });
      });


    function renderSessions() {
        resultsContainer.innerHTML = '';
        const loader = document.getElementById('agenda-loader');
        if (loader) loader.style.display = 'block';

        setTimeout(() => {
            const theme = themeDropdown.value;
            const stage = stageDropdown.value;
            const type = typeDropdown.value;
            const date = dateInput.value;

            const filtered = sessions.filter(s => {
                const tagIds = (s.tags || []).map(t => typeof t === 'object' ? t.id : null).filter(Boolean);
                return (!theme || tagIds.includes(theme)) &&
                    (!stage || tagIds.includes(stage) || s._track_title === stage) &&
                    (!type || tagIds.includes(type)) &&
                    (!date || formatDate(s.start_timestamp) === date);
            });

            resultsContainer.innerHTML = '';
            if (loader) loader.style.display = 'none';

            if (filtered.length === 0) {
                resultsContainer.innerHTML = '<div class="no-results">No sessions match your selected filters.</div>';
                return;
            }

            filtered.forEach(s => {
                const startTime = formatTime(s.start_timestamp);
                const endTime = formatTime(s.end_timestamp);

            let stageTags = [];

            // --- 1. Try Stage tags with filterType (well-structured tags)
            if (Array.isArray(s.tags)) {
              stageTags = s.tags.filter(t =>
                typeof t === 'object' &&
                t.name &&
                t.filterType === 'Stage'
              );
            }

            // --- 2. Fallback: Use _track_title if Stage tags not found
            if (stageTags.length === 0 && s._track_title) {
              stageTags = [{ name: s._track_title }];
            }

            // --- 3. Edge Case: tags present but no filterType field (e.g. plain strings or minimal objects)
            if (stageTags.length === 0 && Array.isArray(s.tags)) {
              const knownStageNames = new Set(
                filters.find(f => f.name === "Stage")?.tags.map(tag => tag.name.trim()) || []
              );

              stageTags = s.tags
                .map(t => (typeof t === 'string' ? t : t?.name || ''))
                .filter(n => knownStageNames.has(n.trim()))
                .map(n => ({ name: n.trim() }));
            }


                let themeTags = [];
                let typeTags = [];

                if (Array.isArray(s.tags)) {
                    themeTags = s.tags.filter(t =>
                        typeof t === 'object' &&
                        t.id &&
                        tagIdToFilterName[t.id] === 'Theme'
                    );
                    typeTags = s.tags.filter(t =>
                        typeof t === 'object' &&
                        t.id &&
                        tagIdToFilterName[t.id] === 'Session Type'
                    );
                }


                // Generate Add to Calendar button
                const icsData = `
                BEGIN:VCALENDAR
                VERSION:2.0
                PRODID:-//YourSite//Agenda//EN
                BEGIN:VEVENT
                UID:${s.session_id}@konfhub
                DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
                DTSTART:${new Date(s.start_timestamp + 'Z').toISOString().replace(/[-:]/g, '').split('.')[0]}Z
                DTEND:${new Date(s.end_timestamp + 'Z').toISOString().replace(/[-:]/g, '').split('.')[0]}Z
                SUMMARY:${s.session_title.replace(/\n/g, ' ')}
                DESCRIPTION:${(s.session_description || '').replace(/\n/g, ' ')}
                LOCATION:${(s.session_location || '').replace(/\n/g, ' ')}
                END:VEVENT
                END:VCALENDAR
                `.trim();

                const title = encodeURIComponent(s.session_title);
                const start = encodeURIComponent(s.start_timestamp);
                const end = encodeURIComponent(s.end_timestamp);
                const location = encodeURIComponent(s.session_location || "Event Venue");

                // Use webcal:// protocol for iOS compatibility
                const icsUrl = `webcal://${window.location.host}/calendar/download-ics.php?title=${title}&start=${start}&end=${end}&location=${location}`;

                // Combine all left-side tags + calendar button
                const tagHtmlLeft = `
                  ${[...stageTags, ...themeTags, ...typeTags].map(t => `<div class="session-tag session-tag-left">${t.name}</div>`).join('')}
                  <a href="${icsUrl}" class="add-to-calendar-btn"><i class="fa-solid fa-star"></i> Add to Calendar</a>
                `;

                const tagHtmlRight = s.tags.map(t => typeof t === 'object' ? t.name : t)
                    .map(n => `<span class="session-tag">${n}</span>`).join('');
                const card = document.createElement('div');
                card.className = 'agenda-card';
                card.innerHTML = `
                <div class="agenda-card-inner">
                    <div class="agenda-left">
                        <div class="session-time">🕒 ${startTime} – ${endTime}</div>
                        <div class="session-meta">📍 ${s.session_location || ''}</div>
                        <div class="session-left-tags">${tagHtmlLeft}</div>
                    </div>
                    <div class="agenda-right">
                        <div class="session-title">${s.session_title}</div>
                        <div class="session-description">${s.session_description || ''}</div>
                        <div class="session-tags">${tagHtmlRight}</div>
                        <div class="session-speakers">${getSpeakerDetails(s.session_speakers || [])}</div>
                    </div>
                </div>
                `;
                resultsContainer.appendChild(card);
            });
        }, 200);
    }

    document.getElementById('clear-filters').addEventListener('click', () => {
        themeDropdown.value = '';
        stageDropdown.value = '';
        typeDropdown.value = '';
        dateInput.value = '';
        document.querySelectorAll('.date-tab').forEach(b => b.classList.remove('active'));
        renderSessions();
    });

    [themeDropdown, stageDropdown, typeDropdown].forEach(drop => {
        drop.addEventListener('change', renderSessions);
    });

    buildDateTabs();
    renderSessions();

    document.getElementById('download-pdf').addEventListener('click', () => {
    window.print();
    });


});
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<?php
return ob_get_clean();
}

function konfhub_agenda_fix_theme_select2_conflict() {
  wp_add_inline_script('jquery', "
    jQuery(document).ready(function($) {
      // Wait for theme's Select2 init to finish
      setTimeout(function() {
        ['#filter-theme', '#filter-stage', '#filter-type'].forEach(function(id) {
          const el = $(id);
          if (el.data('select2')) {
            el.select2('destroy');
            el.removeAttr('data-select2-id'); // clean leftover
            el.next('.select2').remove(); // remove custom Select2 markup
            el.show(); // ensure native select is visible
          }
        });
      }, 500); // 500ms delay – can tweak if needed
    });
  ");
}

add_shortcode('konfhub_agenda', 'konfhub_agenda_shortcode');

add_action('wp_enqueue_scripts', 'konfhub_agenda_fix_theme_select2_conflict');