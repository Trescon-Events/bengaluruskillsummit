import React, { useState, useEffect, useMemo, useRef } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import initialFilters2026 from '../data/agenda_2026_filters.json';
import initialSessions2026 from '../data/agenda_2026_sessions.json';

const EVENT_ID_2026 = 'ab653814-9e72-4ba7-aa84-837e164a1735';

// Parse KonfHub timestamp (UTC without offset) into Date object
function parseKonfhubDate(raw) {
  if (!raw) return null;
  let s = String(raw).trim();
  if (!s.includes('Z') && !s.includes('+')) {
    s = s.replace(' ', 'T') + 'Z';
  }
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}

// Convert UTC timestamp to IST YYYY-MM-DD date key
function getIstDateKey(raw) {
  const d = parseKonfhubDate(raw);
  if (!d) return '';
  return d.toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
}

export default function Agenda2026({ isScreen = false }) {
  const [filtersData, setFiltersData] = useState(initialFilters2026 || []);
  const [sessionsData, setSessionsData] = useState(initialSessions2026 || []);
  const [activeDate, setActiveDate] = useState('2026-11-04');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedStage, setSelectedStage] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [activePopupId, setActivePopupId] = useState(null);
  const popupRefs = useRef({});

  // Background live sync with 2026 KonfHub API
  useEffect(() => {
    const headers = { Accept: 'application/json' };
    Promise.all([
      fetch(`https://api.konfhub.com/event/${EVENT_ID_2026}/public/filters`, { headers }).then(r => r.json()).catch(() => null),
      fetch(`https://api.konfhub.com/event/${EVENT_ID_2026}/sessions?sessions_to_return=all`, { headers }).then(r => r.json()).catch(() => null)
    ]).then(([liveFilters, liveSessions]) => {
      if (liveFilters && Array.isArray(liveFilters)) setFiltersData(liveFilters);
      if (liveSessions && Array.isArray(liveSessions)) setSessionsData(liveSessions);
    }).catch(err => {
      console.warn('KonfHub 2026 agenda sync warning:', err);
    });
  }, []);

  // Parse filters exactly as in PHP
  const { sessionTypes, stages, themes, stageTagIds, themeTagIds, sessionTypeTagIds } = useMemo(() => {
    let sTypes = [], stgs = [], thms = [];
    let sTypeIds = [], stgIds = [], thmIds = [];

    if (Array.isArray(filtersData)) {
      filtersData.forEach(filter => {
        const name = (filter.name || '').trim();
        if (name === 'Session Type') {
          sTypes = filter.tags || [];
          sTypeIds = sTypes.map(t => t.id);
        } else if (name === 'Stage') {
          stgs = filter.tags || [];
          stgIds = stgs.map(t => t.id);
        } else if (name === 'Theme') {
          thms = filter.tags || [];
          thmIds = thms.map(t => t.id);
        }
      });
    }

    // Theme map from sessions (as in PHP)
    const themeMap = {};
    if (Array.isArray(sessionsData)) {
      sessionsData.forEach(session => {
        if (!session.tags) return;
        session.tags.forEach(tag => {
          const tagId = tag.id;
          if (sTypeIds.includes(tagId) || stgIds.includes(tagId)) return;
          if (!themeMap[tagId]) themeMap[tagId] = tag.name;
        });
      });
    }

    const derivedThemes = Object.keys(themeMap)
      .sort((a, b) => themeMap[a].localeCompare(themeMap[b]))
      .map(id => ({ id, name: themeMap[id] }));

    return {
      sessionTypes: sTypes,
      stages: stgs,
      themes: derivedThemes.length > 0 ? derivedThemes : thms,
      stageTagIds: stgIds,
      themeTagIds: thmIds.concat(derivedThemes.map(t => t.id)),
      sessionTypeTagIds: sTypeIds
    };
  }, [filtersData, sessionsData]);

  // Group sessions by IST date and sort chronologically
  const { groupedSessions, dates } = useMemo(() => {
    const groups = {};
    if (Array.isArray(sessionsData)) {
      sessionsData.forEach(session => {
        if (session.start_timestamp) {
          const dateKey = getIstDateKey(session.start_timestamp);
          if (dateKey) {
            if (!groups[dateKey]) groups[dateKey] = [];
            groups[dateKey].push(session);
          }
        }
      });
    }

    // Sort sessions in each date group by start timestamp
    Object.keys(groups).forEach(dateKey => {
      groups[dateKey].sort((a, b) => {
        const da = parseKonfhubDate(a.start_timestamp);
        const db = parseKonfhubDate(b.start_timestamp);
        return (da ? da.getTime() : 0) - (db ? db.getTime() : 0);
      });
    });

    const sortedDates = Object.keys(groups).sort();
    return { groupedSessions: groups, dates: sortedDates };
  }, [sessionsData]);

  // Default to first date if available
  useEffect(() => {
    if (dates.length > 0 && !dates.includes(activeDate)) {
      setActiveDate(dates[0]);
    }
  }, [dates, activeDate]);

  // Escape key & outside click handlers for inline popup
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActivePopupId(null);
    };
    const handleClickOutside = (e) => {
      if (activePopupId !== null) {
        const popup = popupRefs.current[activePopupId];
        if (popup && !popup.contains(e.target) && !e.target.closest('.session-desc-link')) {
          setActivePopupId(null);
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePopupId]);

  const formatTimeRange = (startTimestamp, endTimestamp) => {
    try {
      const start = parseKonfhubDate(startTimestamp);
      const end = parseKonfhubDate(endTimestamp);
      if (!start || !end) return '';
      const formatOpts = { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true };
      const sStr = start.toLocaleTimeString('en-US', formatOpts).toLowerCase();
      const eStr = end.toLocaleTimeString('en-US', formatOpts).toLowerCase();
      return `${sStr} – ${eStr}`;
    } catch {
      return '';
    }
  };

  const formatDayLabel = (dateKey) => {
    try {
      const d = new Date(dateKey + 'T00:00:00');
      return d.toLocaleDateString('en-US', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    } catch {
      return dateKey;
    }
  };

  const formatTabLabel = (dateKey) => {
    try {
      const d = new Date(dateKey + 'T00:00:00');
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
    } catch {
      return dateKey;
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTheme('');
    setSelectedStage('');
    setSelectedType('');
  };

  // Filter sessions for active date
  const currentSessions = groupedSessions[activeDate] || [];
  const filteredSessions = currentSessions.filter(session => {
    const title = (session.session_title || '').toLowerCase();
    const speakerNames = (session.session_speakers || []).map(sp => (sp.name || '').toLowerCase()).join(' ');
    const tagIds = (session.tags || []).map(t => t.id);
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q || title.includes(q) || speakerNames.includes(q);
    const matchTheme = !selectedTheme || tagIds.includes(selectedTheme);
    const matchStage = !selectedStage || tagIds.includes(selectedStage);
    const matchType = !selectedType || tagIds.includes(selectedType);
    return matchSearch && matchTheme && matchStage && matchType;
  });

  return (
    <>
      <div id="ajax-content-wrap">
        <style>{`
          /* ============================================
             BSS 2026 AGENDA — Matching Exact Design
             Font: Comfortaa 400 | Size: 18px | Line-Height: 30px
             ============================================ */
          .agenda-page-wrap {
            font-family: 'Comfortaa', sans-serif !important;
            background: #ffffff;
            color: #111111;
            word-break: break-word;
            overflow-wrap: break-word;
          }

          /* HERO BANNER */
          .agenda-hero {
            position: relative;
            background: url('https://bengaluruskillsummit.com/wp-content/uploads/2025/09/agenda-banner.png') center center / cover no-repeat #0a2533;
            padding: 100px 15px 45px;
            text-align: center;
            overflow: hidden;
            width: 100%;
            box-sizing: border-box;
          }
          .agenda-hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(6,45,64,0.72) 100%);
          }
          .agenda-hero__inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; padding: 0 15px; }
          .agenda-hero__eyebrow {
            display: inline-block;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #ff6257;
            background: rgba(255,98,87,0.12);
            border: 1px solid rgba(255,98,87,0.40);
            padding: 5px 14px;
            border-radius: 2px;
            margin-bottom: 15px;
          }
          .agenda-hero h1 { font-size: 42px; font-weight: 700; line-height: 1.15; color: #fff; margin: 0 0 10px; font-family: 'Joost', sans-serif !important; }
          .agenda-hero h1 span { color: #ff6257; }
          .agenda-hero__sub { font-size: 15px; font-weight: 400; color: rgba(255,255,255,0.75); margin: 0; }
          .agenda-hero__accent-bar { width: 50px; height: 3px; background: #ff6257; margin: 18px auto 0; border-radius: 2px; }

          /* SECTION & CONTAINER */
          .agenda-section { background: #fff; padding: 35px 0 80px; width: 100%; box-sizing: border-box; }
          .agenda-section .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; box-sizing: border-box; }

          /* TABS */
          .date-tabs-wrap { display: flex; justify-content: center; gap: 10px; margin-bottom: 25px; flex-wrap: wrap; }
          .date-tab {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: rgba(17,17,17,0.55);
            background: #fff;
            border: 1px solid rgba(17,17,17,0.2);
            padding: 9px 24px;
            border-radius: 3px;
            cursor: pointer;
            transition: all 0.2s ease;
            white-space: nowrap;
            font-family: 'Comfortaa', sans-serif;
          }
          .date-tab:hover { color: #111; border-color: rgba(255,98,87,0.6); background: rgba(255,98,87,0.06); }
          .date-tab.active { color: #fff; background: #ff6257; border-color: #ff6257; }

          /* FILTERS BAR */
          .filters-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
            width: 100%;
          }
          .filter-search { position: relative; flex: 1 1 200px; min-width: 0; max-width: 250px; margin: 0; }
          .filter-search input {
            width: 100%;
            height: 44px;
            padding: 10px 38px 10px 14px;
            background: #f7f8fa;
            border: 1px solid #dde1e7;
            border-radius: 4px;
            color: #111;
            font-size: 13px;
            font-family: 'Comfortaa', sans-serif;
            outline: none;
            line-height: normal;
            box-sizing: border-box;
          }
          .filter-search input:focus { border-color: #ff6257; background: #fff; }
          .filter-search i { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: rgba(17,17,17,0.35); font-size: 13px; pointer-events: none; }

          .filter-select-wrap { position: relative; flex: 1 1 160px; min-width: 0; max-width: 210px; margin: 0; }
          .filter-select-wrap select {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 44px;
            padding: 10px 34px 10px 14px;
            background: #f7f8fa;
            border: 1px solid #dde1e7;
            border-radius: 4px;
            color: #111;
            font-size: 13px;
            font-family: 'Comfortaa', sans-serif;
            cursor: pointer;
            outline: none;
            line-height: normal;
            box-sizing: border-box;
          }
          .filter-select-wrap select:focus { border-color: #ff6257; background: #fff; }

          .filter-clear-btn {
            height: 44px;
            padding: 0 20px;
            background: #fff;
            border: 1px solid #dde1e7;
            border-radius: 4px;
            color: rgba(17,17,17,0.6);
            font-size: 13px;
            font-family: 'Comfortaa', sans-serif;
            font-weight: 600;
            cursor: pointer;
            white-space: nowrap;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            margin: 0;
            box-sizing: border-box;
          }
          .filter-clear-btn:hover { background: #f7f8fa; color: #111; }

          /* DAY DIVIDER */
          .day-divider { display: flex; align-items: center; gap: 14px; margin-bottom: 25px; }
          .day-divider__line { flex: 1; height: 1px; background: rgba(255,98,87,0.25); }
          .day-divider__label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #ff6257; white-space: nowrap; }

          /* SESSION CARDS — EXACT USER DESIGN */
          .session-card {
            position: relative;
            display: flex;
            flex-direction: row;
            border-bottom: 1px solid #f0f2f5;
            padding: 30px 0;
            width: 100%;
            text-align: left;
            align-items: flex-start;
          }
          .session-card:last-child { border-bottom: none; }

          /* LEFT META (Time & Stage) */
          .session-meta {
            flex: 0 0 220px;
            width: 220px;
            padding-right: 25px;
            padding-top: 2px;
            box-sizing: border-box;
          }
          .session-meta__time {
            display: flex;
            align-items: center;
            gap: 9px;
            font-size: 14px;
            font-weight: 600;
            color: #222222;
            margin-bottom: 8px;
            font-family: 'Comfortaa', sans-serif !important;
          }
          .meta-icon-time {
            color: #ff6257;
            font-size: 14px;
            display: inline-flex;
            align-items: center;
          }
          .session-meta__stage {
            display: flex;
            align-items: center;
            gap: 9px;
            font-size: 13px;
            font-weight: 400;
            color: #8c939d;
            font-family: 'Comfortaa', sans-serif !important;
          }
          .meta-icon-stage {
            color: #ff6257;
            font-size: 13px;
            display: inline-flex;
            align-items: center;
          }

          /* RIGHT BODY (Title & Tags) */
          .session-body {
            flex: 1;
            min-width: 0;
          }
          .session-title {
            font-family: 'Comfortaa', sans-serif !important;
            font-weight: 400 !important;
            font-size: 18px !important;
            line-height: 30px !important;
            color: rgb(10, 10, 10) !important;
            margin: 0 0 10px 0 !important;
            letter-spacing: -0.2px;
            text-transform: none !important;
          }

          /* TAGS — Light Pink Box & Red Text */
          .session-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 4px;
            margin-bottom: 12px;
          }
          .session-tag {
            font-family: 'Comfortaa', sans-serif !important;
            font-size: 11px !important;
            font-weight: 600 !important;
            letter-spacing: 0.2px !important;
            text-transform: none !important;
            padding: 4px 10px !important;
            border-radius: 2px !important;
            background-color: #fff1f0 !important;
            border: 1px solid #ffd8d6 !important;
            color: #ff6257 !important;
            line-height: 1.4 !important;
          }

          .session-desc-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.2px;
            text-transform: none !important;
            color: #ff6257;
            text-decoration: none;
            margin-top: 6px;
            margin-bottom: 12px;
            cursor: pointer;
            font-family: 'Comfortaa', sans-serif !important;
          }
          .session-desc-link:hover { text-decoration: underline; }

          /* SPEAKERS MINI GRID */
          .session-speakers-grid { display: flex; flex-wrap: wrap; gap: 14px; width: 100%; margin-top: 14px; }
          .session-speaker-card { display: flex; align-items: flex-start; gap: 10px; flex: 0 0 calc(50% - 7px); }
          .session-speaker-card__img, .session-speaker-card__img-placeholder {
            width: 52px;
            height: 52px;
            min-width: 52px;
            border-radius: 3px;
            object-fit: cover;
            flex-shrink: 0;
            border: 2px solid rgba(255,98,87,0.20);
          }
          .session-speaker-card__img-placeholder {
            background: #fff0ef;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(255,98,87,0.40);
            font-size: 18px;
          }
          .session-speaker-card__role { font-size: 9px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #ff6257; }
          .session-speaker-card__name { font-size: 13px; font-weight: 700; color: #111; line-height: 1.25; margin-bottom: 2px; }
          .session-speaker-card__designation, .session-speaker-card__org { font-size: 11px; line-height: 1.35; }
          .session-speaker-card__designation { color: rgba(17,17,17,0.50); }
          .session-speaker-card__org { color: rgba(17,17,17,0.70); font-weight: 600; }

          /* INLINE POPUP */
          .inline-session-popup {
            position: absolute;
            top: 15px;
            left: 50%;
            transform: translateX(-50%);
            width: 650px;
            max-width: 95%;
            background: #fff;
            border-top: 4px solid #ff6257;
            border-radius: 4px;
            box-shadow: 0 14px 45px rgba(0, 0, 0, 0.25);
            z-index: 1000;
            padding: 24px;
            text-align: left;
            animation: popIn 0.2s ease-out;
            box-sizing: border-box;
          }

          @keyframes popIn {
            from { opacity: 0; transform: translate(-50%, -8px); }
            to { opacity: 1; transform: translate(-50%, 0); }
          }

          .inline-session-popup__close {
            position: absolute;
            top: 10px;
            right: 12px;
            background: none;
            border: none;
            color: #888;
            font-size: 26px;
            line-height: 1;
            cursor: pointer;
          }
          .inline-session-popup__close:hover { color: #ff6257; }
          .inline-session-popup__eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #ff6257; margin-bottom: 6px; }
          .inline-session-popup__title {
            font-size: 17px;
            font-weight: 700;
            color: #111;
            margin-bottom: 12px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eaedf1;
            padding-right: 25px;
            line-height: 1.35;
            font-family: 'Comfortaa', sans-serif !important;
            text-transform: none !important;
          }
          .inline-session-popup__body { font-size: 13px; line-height: 1.65; color: rgba(17,17,17,0.75); max-height: 280px; overflow-y: auto; white-space: pre-line; }

          .no-results { text-align: center; padding: 40px 15px; color: rgba(17,17,17,0.35); font-size: 14px; }
          .no-results i { font-size: 30px; display: block; margin-bottom: 10px; color: rgba(255,98,87,0.25); }

          /* MOBILE OVERRIDES */
          @media (max-width: 767px) {
            .agenda-hero { padding: 80px 15px 35px; }
            .agenda-hero h1 { font-size: 26px; }
            .agenda-section { padding: 25px 0 90px; }
            .agenda-section .container { padding: 0 15px; }
            .filters-bar {
              display: flex;
              flex-direction: column;
              align-items: stretch;
              gap: 8px;
              margin-bottom: 25px;
            }
            .filter-search, .filter-select-wrap, .filter-clear-btn {
              flex: none;
              width: 100%;
              max-width: 100%;
              margin: 0 !important;
            }
            .session-card {
              flex-direction: column !important;
              display: block;
              padding: 20px 0;
            }
            .session-meta {
              width: 100%;
              padding-right: 0;
              padding-bottom: 10px;
              display: flex;
              flex-wrap: wrap;
              gap: 6px 16px;
            }
            .session-title { font-size: 16px !important; line-height: 26px !important; }
            .session-speakers-grid { gap: 10px; }
            .session-speaker-card { flex: 0 0 100%; }
            .inline-session-popup {
              width: 95%;
              left: 2.5%;
              transform: none;
              padding: 18px 14px;
            }
          }
        `}</style>

        <div className="agenda-page-wrap">
          {isScreen ? (
            <ScreenHeader active="AGENDA" />
          ) : (
            /* HERO BANNER */
            <div className="agenda-hero">
              <div className="container">
                <div className="agenda-hero__inner">
                  <div className="agenda-hero__eyebrow">Bengaluru Skill Summit 2026</div>
                  <h1>Full <span>Agenda</span></h1>
                  <p className="agenda-hero__sub">Voices Shaping the Future of Skills &nbsp;·&nbsp; Bengaluru</p>
                  <div className="agenda-hero__accent-bar"></div>
                </div>
              </div>
            </div>
          )}

          {/* MAIN AGENDA */}
          <div className="agenda-section">
            <div className="container">
              {dates.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 15px', color: '#555' }}>
                  <i className="fa fa-calendar-days" style={{ fontSize: '36px', color: '#ff6257', marginBottom: '15px', display: 'block' }}></i>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Agenda Coming Soon</h3>
                  <p style={{ fontSize: '13px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
                    The sessions for Bengaluru Skill Summit 2026 will appear here once the schedule is toggled to <strong>Show</strong> in the portal.
                  </p>
                </div>
              ) : (
                <>
                  {/* DATE TABS */}
                  <div className="date-tabs-wrap">
                    {dates.map(dateKey => (
                      <button
                        key={dateKey}
                        type="button"
                        className={`date-tab ${activeDate === dateKey ? 'active' : ''}`}
                        onClick={() => setActiveDate(dateKey)}
                      >
                        {formatTabLabel(dateKey)}
                      </button>
                    ))}
                  </div>

                  {/* FILTERS BAR */}
                  <div className="filters-bar">
                    <div className="filter-search">
                      <input
                        type="text"
                        placeholder="Search sessions or speakers…"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <i className="fa fa-magnifying-glass"></i>
                    </div>

                    <div className="filter-select-wrap">
                      <select
                        value={selectedTheme}
                        onChange={(e) => setSelectedTheme(e.target.value)}
                      >
                        <option value="">All Themes</option>
                        {themes.map(t => (
                          <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="filter-select-wrap">
                      <select
                        value={selectedStage}
                        onChange={(e) => setSelectedStage(e.target.value)}
                      >
                        <option value="">All Stages</option>
                        {stages.map(st => (
                          <option key={st.id} value={st.id}>{st.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="filter-select-wrap">
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                      >
                        <option value="">All Session Types</option>
                        {sessionTypes.map(st => (
                          <option key={st.id} value={st.id}>{st.name}</option>
                        ))}
                      </select>
                    </div>

                    <button type="button" className="filter-clear-btn" onClick={clearFilters}>
                      <i className="fa fa-xmark" style={{ marginRight: '6px' }}></i>Clear
                    </button>
                  </div>

                  {/* ACTIVE DATE SESSIONS */}
                  <div className="day-divider">
                    <div className="day-divider__line"></div>
                    <div className="day-divider__label">{formatDayLabel(activeDate)}</div>
                    <div className="day-divider__line"></div>
                  </div>

                  <div className="session-list">
                    {filteredSessions.length === 0 ? (
                      <div className="no-results">
                        <i className="fa fa-calendar-xmark"></i>
                        No sessions match your current filters.
                      </div>
                    ) : (
                      filteredSessions.map((session, sIdx) => {
                        const popupId = `agendaPopup_${activeDate}_${sIdx}`;
                        const isPopupOpen = activePopupId === popupId;
                        const speakers = session.session_speakers || [];
                        const stageTag = (session.tags || []).find(t => stageTagIds.includes(t.id));
                        const nonStageTags = (session.tags || []).filter(t => !stageTagIds.includes(t.id));

                        return (
                          <div key={session.session_id || sIdx} className="session-card">
                            <div className="session-meta">
                              <div className="session-meta__time">
                                <span className="meta-icon-time"><i className="fa-regular fa-clock"></i></span>
                                {formatTimeRange(session.start_timestamp, session.end_timestamp)}
                              </div>
                              {stageTag && (
                                <div className="session-meta__stage">
                                  <span className="meta-icon-stage"><i className="fa-solid fa-location-dot"></i></span>
                                  {stageTag.name}
                                </div>
                              )}
                            </div>

                            <div className="session-body">
                              <div className="session-title" style={{ textTransform: 'none', fontFamily: '"Comfortaa", sans-serif' }}>{session.session_title}</div>

                              {nonStageTags.length > 0 && (
                                <div className="session-tags">
                                  {nonStageTags.map(t => (
                                    <span key={t.id} className="session-tag">{t.name}</span>
                                  ))}
                                </div>
                              )}

                              {session.session_description && (
                                <>
                                  <a
                                    className="session-desc-link"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActivePopupId(isPopupOpen ? null : popupId);
                                    }}
                                  >
                                    <i className="fa fa-arrow-right"></i> View Description
                                  </a>

                                  {isPopupOpen && (
                                    <div
                                      ref={(el) => (popupRefs.current[popupId] = el)}
                                      className="inline-session-popup"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <button
                                        type="button"
                                        className="inline-session-popup__close"
                                        onClick={() => setActivePopupId(null)}
                                      >
                                        &times;
                                      </button>
                                      <div className="inline-session-popup__eyebrow">Session Description</div>
                                      <div className="inline-session-popup__title">{session.session_title}</div>
                                      <div className="inline-session-popup__body">{session.session_description}</div>
                                    </div>
                                  )}
                                </>
                              )}

                              {speakers.length > 0 && (
                                <div className="session-speakers-grid">
                                  {speakers.map((sp, spIdx) => {
                                    const isMod = (sp.tags || []).some(t => (t.name || '').toLowerCase() === 'moderator');
                                    return (
                                      <div key={sp.speaker_id || spIdx} className="session-speaker-card">
                                        {sp.image_url ? (
                                          <img
                                            className="session-speaker-card__img"
                                            src={sp.image_url}
                                            alt={sp.name}
                                          />
                                        ) : (
                                          <div className="session-speaker-card__img-placeholder">
                                            <i className="fa fa-user"></i>
                                          </div>
                                        )}
                                        <div className="session-speaker-card__info">
                                          <div className="session-speaker-card__role">{isMod ? 'Moderator' : 'Speaker'}</div>
                                          <div className="session-speaker-card__name">{sp.name}</div>
                                          {sp.designation && <div className="session-speaker-card__designation">{sp.designation}</div>}
                                          {sp.organisation && <div className="session-speaker-card__org">{sp.organisation}</div>}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}