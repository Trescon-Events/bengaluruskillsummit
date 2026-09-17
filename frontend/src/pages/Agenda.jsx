import ScreenHeader from '../components/ScreenHeader';
import React, { useState, useEffect, useMemo } from 'react';
import initialFilters from '../data/agenda_filters.json';
import initialSessions from '../data/agenda_sessions.json';

const EVENT_ID = 'b1faf887-972e-4a9a-bd97-2229fd1395fa';

export default function Agenda({ isScreen = false }) {
  const [filtersData, setFiltersData] = useState(initialFilters || []);
  const [sessionsData, setSessionsData] = useState(initialSessions || []);
  
  // Selected date tab
  const [activeDate, setActiveDate] = useState('2025-11-04');
  
  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedStage, setSelectedStage] = useState('');
  const [selectedType, setSelectedType] = useState('');
  
  // Modal state
  const [modalSession, setModalSession] = useState(null);

  // Background live sync
  useEffect(() => {
    const headers = { Accept: 'application/json' };
    Promise.all([
      fetch(`https://api.konfhub.com/event/${EVENT_ID}/public/filters`, { headers }).then(r => r.json()).catch(() => null),
      fetch(`https://api.konfhub.com/event/${EVENT_ID}/sessions?sessions_to_return=all`, { headers }).then(r => r.json()).catch(() => null)
    ]).then(([liveFilters, liveSessions]) => {
      if (liveFilters && Array.isArray(liveFilters)) setFiltersData(liveFilters);
      if (liveSessions && Array.isArray(liveSessions)) setSessionsData(liveSessions);
    });
  }, [isScreen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalSession) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalSession]);

  // Extract filter tag groups exactly matching user's PHP logic
  const { sessionTypes, stages, themes, stageTagIds, sessionTypeTagIds, themeTagIds } = useMemo(() => {
    let sTypes = [], stg = [], sTypeIds = [], stgIds = [];

    if (Array.isArray(filtersData)) {
      filtersData.forEach(filter => {
        const name = (filter.name || '').trim();
        if (name === 'Session Type') {
          sTypes = filter.tags || [];
          sTypeIds = sTypes.map(t => t.id);
        } else if (name === 'Stage') {
          stg = filter.tags || [];
          stgIds = stg.map(t => t.id);
        }
      });
    }

    const themeMap = {};
    if (Array.isArray(sessionsData)) {
      sessionsData.forEach(session => {
        if (!session.tags) return;
        session.tags.forEach(tag => {
          if (sTypeIds.includes(tag.id) || stgIds.includes(tag.id)) return;
          if (!themeMap[tag.id]) themeMap[tag.id] = tag.name;
        });
      });
    }

    const thms = Object.keys(themeMap).map(id => ({ id, name: themeMap[id] }));
    thms.sort((a, b) => a.name.localeCompare(b.name));
    const thmIds = thms.map(t => t.id);

    return {
      sessionTypes: sTypes,
      stages: stg,
      themes: thms,
      stageTagIds: stgIds,
      sessionTypeTagIds: sTypeIds,
      themeTagIds: thmIds
    };
  }, [filtersData, sessionsData]);

  // Group sessions by date
  const groupedSessions = useMemo(() => {
    const groups = {};
    if (Array.isArray(sessionsData)) {
      sessionsData.forEach(session => {
        if (session.start_timestamp) {
          const dateKey = session.start_timestamp.slice(0, 10);
          if (!groups[dateKey]) groups[dateKey] = [];
          groups[dateKey].push(session);
        }
      });
    }
    // Sort keys
    const sorted = {};
    Object.keys(groups).sort().forEach(k => {
      sorted[k] = groups[k];
    });
    return sorted;
  }, [sessionsData]);

  const dates = Object.keys(groupedSessions);

  // Set active date to first available if not set
  useEffect(() => {
    if (dates.length > 0 && !dates.includes(activeDate)) {
      setActiveDate(dates[0]);
    }
  }, [dates, activeDate]);

  // Time formatting helper in Asia/Kolkata
  const formatTimeRange = (startTimestamp, endTimestamp) => {
    try {
      const start = new Date(startTimestamp);
      const end = new Date(endTimestamp);
      const formatOpts = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      };
      const sStr = start.toLocaleTimeString('en-US', formatOpts).toLowerCase();
      const eStr = end.toLocaleTimeString('en-US', formatOpts).toLowerCase();
      return `${sStr} – ${eStr}`;
    } catch {
      return '';
    }
  };

  // Day label helper
  const formatDayLabel = (dateKey) => {
    try {
      const d = new Date(dateKey + 'T00:00:00');
      return d.toLocaleDateString('en-US', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return dateKey;
    }
  };

  const formatTabLabel = (dateKey) => {
    try {
      const d = new Date(dateKey + 'T00:00:00');
      return d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short'
      });
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

  // Filter sessions for current active date
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
          /* =============================================
             BSS AGENDA — White theme
             Palette: #fff bg | #ff6257 accent | #111 text
             Font: Comfortaa
             ============================================= */
          .agenda-page-wrap {
            font-family: 'Comfortaa', sans-serif !important;
            background: #ffffff;
            color: #111111;
            word-break: break-word;
            overflow-wrap: break-word;
          }

          /* ---------- HERO BANNER ---------- */
          .agenda-hero {
            position: relative;
            background-image: linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(6,45,64,0.68) 100%), url('/bengaluruskillsummit.com/wp-content/uploads/2025/09/agenda-banner.webp');
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            padding: 130px 15px 70px;
            text-align: center;
            overflow: hidden;
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            box-sizing: border-box;
          }

          .agenda-hero__inner {
            position: relative;
            z-index: 1;
            max-width: 700px;
            margin: 0 auto;
            padding: 0 15px;
          }

          .agenda-hero__eyebrow {
            display: inline-block;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #ff6257;
            background: rgba(255,98,87,0.12);
            border: 1px solid rgba(255,98,87,0.40);
            padding: 6px 16px;
            border-radius: 2px;
            margin-bottom: 18px;
            font-family: 'Comfortaa', sans-serif;
          }

          .agenda-hero h1 {
            font-size: 50px;
            font-weight: 700;
            line-height: 1.15;
            color: #ffffff;
            margin: 0 0 14px;
            font-family: 'Comfortaa', sans-serif;
          }

          .agenda-hero h1 span {
            color: #ff6257;
          }

          .agenda-hero__sub {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255,255,255,0.75);
            margin: 0;
            font-family: 'Comfortaa', sans-serif;
          }

          .agenda-hero__accent-bar {
            width: 50px;
            height: 3px;
            background: #ff6257;
            margin: 20px auto 0;
            border-radius: 2px;
          }

          /* ---------- MAIN SECTION ---------- */
          .agenda-section {
            background: #ffffff;
            padding: 50px 0 70px;
            width: 100%;
          }

          .agenda-section .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box;
          }

          /* ---------- DATE TABS ---------- */
          .date-tabs-wrap {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-bottom: 40px;
            flex-wrap: wrap;
            padding: 0 5px;
          }

          .date-tab {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: rgba(17,17,17,0.65);
            background: transparent;
            border: 1px solid rgba(17,17,17,0.18);
            padding: 10px 26px;
            border-radius: 2px;
            cursor: pointer;
            transition: all 0.25s ease;
            white-space: nowrap;
            font-family: 'Comfortaa', sans-serif;
          }

          .date-tab:hover {
            color: #111;
            border-color: rgba(255,98,87,0.6);
            background: rgba(255,98,87,0.06);
          }

          .date-tab.active {
            color: #fff !important;
            background: #ff6257 !important;
            border-color: #ff6257 !important;
          }

          /* ---------- FILTERS ---------- */
          .filters-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
            justify-content: center;
            margin-bottom: 44px;
            width: 100%;
          }

          .filter-search {
            position: relative;
            flex: 1 1 200px;
            min-width: 0;
            max-width: 260px;
          }

          .filter-search input {
            width: 100%;
            padding: 11px 38px 11px 14px;
            background: #f7f8fa;
            border: 1px solid #dde1e7;
            border-radius: 2px;
            color: #111;
            font-size: 14px;
            font-family: 'Comfortaa', sans-serif;
            transition: border-color 0.2s;
            outline: none;
            box-sizing: border-box;
          }

          .filter-search input::placeholder {
            color: rgba(17,17,17,0.4);
          }

          .filter-search input:focus {
            border-color: #ff6257;
            background: #fff;
          }

          .filter-search i {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(17,17,17,0.4);
            font-size: 13px;
            pointer-events: none;
          }

          .filter-select-wrap {
            position: relative;
            flex: 1 1 160px;
            min-width: 0;
            max-width: 210px;
          }

          .filter-select-wrap select {
            width: 100%;
            padding: 11px 34px 11px 14px;
            background: #f7f8fa;
            border: 1px solid #dde1e7;
            border-radius: 2px;
            color: #111;
            font-size: 14px;
            font-family: 'Comfortaa', sans-serif;
            cursor: pointer;
            outline: none;
            transition: border-color 0.2s;
            box-sizing: border-box;
          }

          .filter-select-wrap select:focus {
            border-color: #ff6257;
            background: #fff;
          }

          .filter-clear-btn {
            flex: 0 0 auto;
            padding: 11px 22px;
            background: transparent;
            border: 1px solid #dde1e7;
            border-radius: 2px;
            color: rgba(17,17,17,0.65);
            font-size: 14px;
            font-family: 'Comfortaa', sans-serif;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            white-space: nowrap;
          }

          .filter-clear-btn:hover {
            background: #f7f8fa;
            color: #111;
            border-color: #aaa;
          }

          /* ---------- DAY DIVIDER ---------- */
          .day-divider {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 36px;
          }

          .day-divider__line {
            flex: 1;
            height: 1px;
            background: rgba(255,98,87,0.25);
            min-width: 0;
          }

          .day-divider__label {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #ff6257;
            white-space: nowrap;
            flex-shrink: 0;
          }

          /* ---------- SESSION CARD ---------- */
          .session-card {
            display: flex;
            flex-direction: row;
            gap: 0;
            border-bottom: 1px solid #eaedf1;
            padding: 30px 0;
            transition: background 0.2s;
            width: 100%;
            min-width: 0;
          }

          .session-card:hover {
            background: rgba(255,98,87,0.02);
          }

          .session-card:last-child {
            border-bottom: none;
          }

          /* LEFT META */
          .session-meta {
            flex: 0 0 200px;
            width: 200px;
            min-width: 0;
            padding-right: 24px;
            padding-top: 3px;
            box-sizing: border-box;
          }

          .session-meta__time {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 14px;
            font-weight: 600;
            color: #111;
            margin-bottom: 8px;
          }

          .meta-icon {
            color: #ff6257;
            font-size: 13px;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .session-meta__stage {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 13px;
            font-weight: 500;
            color: rgba(17,17,17,0.55);
            line-height: 1.4;
          }

          /* RIGHT CONTENT */
          .session-body {
            flex: 1;
            min-width: 0;
          }

          .session-title {
            font-size: 20px;
            font-weight: 700;
            line-height: 1.4;
            color: #111;
            margin-bottom: 12px;
          }

          .session-desc-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #ff6257;
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            margin-bottom: 16px;
            transition: color 0.2s;
            font-family: 'Comfortaa', sans-serif;
          }

          .session-desc-link:hover {
            color: #d94f45;
            text-decoration: underline;
          }

          .session-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 20px;
          }

          .session-tag {
            display: inline-block;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 4px 10px;
            border-radius: 2px;
            background: rgba(255,98,87,0.08);
            border: 1px solid rgba(255,98,87,0.28);
            color: #ff6257;
            line-height: 1.5;
            white-space: nowrap;
          }

          /* ---------- SPEAKER GRID ---------- */
          .agenda-speakers-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            width: 100%;
          }

          .agenda-speaker-card {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            flex: 0 0 calc(50% - 8px);
            min-width: 0;
            box-sizing: border-box;
          }

          .agenda-speaker-card__img {
            width: 60px;
            height: 60px;
            min-width: 60px;
            border-radius: 3px;
            object-fit: cover;
            flex-shrink: 0;
            border: 2px solid rgba(255,98,87,0.20);
          }

          .agenda-speaker-card__img-placeholder {
            width: 60px;
            height: 60px;
            min-width: 60px;
            border-radius: 3px;
            background: #fff0ef;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(255,98,87,0.40);
            font-size: 20px;
          }

          .agenda-speaker-card__info {
            min-width: 0;
          }

          .agenda-speaker-card__role {
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #ff6257;
            margin-bottom: 2px;
          }

          .agenda-speaker-card__name {
            font-size: 14px;
            font-weight: 700;
            color: #111;
            line-height: 1.25;
            margin-bottom: 2px;
          }

          .agenda-speaker-card__designation {
            font-size: 11px;
            color: rgba(17,17,17,0.55);
            line-height: 1.4;
            margin-bottom: 2px;
          }

          .agenda-speaker-card__org {
            font-size: 11px;
            color: rgba(17,17,17,0.75);
            font-weight: 600;
            line-height: 1.4;
          }

          /* ---------- NO RESULTS ---------- */
          .no-results {
            text-align: center;
            padding: 60px 20px;
            color: rgba(17,17,17,0.40);
            font-size: 16px;
          }

          .no-results i {
            font-size: 34px;
            display: block;
            margin-bottom: 14px;
            color: rgba(255,98,87,0.3);
          }

          /* ---------- MODAL ---------- */
          .bss-modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            z-index: 99999;
            background: rgba(0,0,0,0.55);
            padding: 30px 15px;
            overflow-y: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.2s ease-in-out;
          }

          .bss-modal {
            background: #fff;
            border: 1px solid #dde1e7;
            border-top: 3px solid #ff6257;
            border-radius: 4px;
            width: 100%;
            max-width: 660px;
            padding: 36px 30px;
            position: relative;
            box-shadow: 0 16px 50px rgba(0,0,0,0.18);
            box-sizing: border-box;
          }

          .bss-modal__close {
            position: absolute;
            top: 14px;
            right: 16px;
            background: none;
            border: none;
            color: rgba(17,17,17,0.4);
            font-size: 26px;
            cursor: pointer;
            line-height: 1;
            transition: color 0.2s;
            padding: 4px 8px;
          }

          .bss-modal__close:hover {
            color: #ff6257;
          }

          .bss-modal__eyebrow {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #ff6257;
            margin-bottom: 12px;
          }

          .bss-modal__title {
            font-size: 20px;
            font-weight: 700;
            color: #111;
            line-height: 1.4;
            margin-bottom: 18px;
            padding-bottom: 18px;
            border-bottom: 1px solid #eaedf1;
            padding-right: 30px;
          }

          .bss-modal__body {
            font-size: 15px;
            line-height: 1.8;
            color: rgba(17,17,17,0.75);
            white-space: pre-line;
            max-height: 60vh;
            overflow-y: auto;
          }

          /* ---------- RESPONSIVE BREAKPOINTS ---------- */
          @media (max-width: 991px) {
            .session-card {
              flex-direction: column;
            }
            .session-meta {
              flex: none;
              width: 100%;
              padding-right: 0;
              padding-bottom: 12px;
              display: flex;
              flex-wrap: wrap;
              gap: 6px 20px;
              align-items: flex-start;
            }
            .session-meta__time,
            .session-meta__stage {
              margin-bottom: 0;
            }
            .agenda-speaker-card {
              flex: 0 0 calc(50% - 8px);
            }
          }

          @media (max-width: 767px) {
            .agenda-hero {
              padding: 100px 15px 50px;
            }
            .agenda-hero h1 {
              font-size: 30px;
              line-height: 1.2;
            }
            .agenda-hero__sub {
              font-size: 14px;
            }
            .date-tabs-wrap {
              gap: 6px;
              margin-bottom: 28px;
            }
            .date-tab {
              font-size: 12px;
              padding: 9px 16px;
            }
            .filters-bar {
              flex-direction: column;
              align-items: stretch;
              gap: 8px;
            }
            .filter-search,
            .filter-select-wrap {
              flex: none;
              width: 100%;
              max-width: 100%;
            }
            .filter-clear-btn {
              width: 100%;
              text-align: center;
            }
            .session-card {
              padding: 22px 0;
            }
            .session-title {
              font-size: 16px;
            }
            .agenda-speakers-grid {
              gap: 12px;
            }
            .agenda-speaker-card {
              flex: 0 0 100%;
            }
            .bss-modal {
              padding: 24px 16px;
            }
            .bss-modal__title {
              font-size: 16px;
            }
          }

          /* ---------------- CONTACT INFO CARDS ---------------- */
          #contact-info {
            width: 100vw !important;
            position: relative !important;
            left: 50% !important;
            right: 50% !important;
            margin-left: -50vw !important;
            margin-right: -50vw !important;
            box-sizing: border-box !important;
            padding: 60px 20px !important;
          }

          #contact-info .row_col_wrap_12 {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 15px !important;
            max-width: 1440px !important;
            margin: 0 auto !important;
          }

          #contact-info .contact-info-card {
            flex: 1 1 calc(20% - 15px) !important;
            min-width: 240px !important;
            background-color: #525252 !important;
            border-radius: 10px !important;
            padding: 25px 14px !important;
            box-sizing: border-box !important;
            text-align: left !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
          }

          #contact-info .contact-info-card a,
          #contact-info .contact-info-card .word-break,
          #contact-info .contact-info-card p {
            overflow-wrap: normal !important;
            word-break: normal !important; white-space: nowrap !important;
            white-space: nowrap !important;
          }

          #contact-info .contact-info-card a {
            display: inline-block !important;
            max-width: 100% !important;
            line-height: 1.35 !important;
          }

          #contact-info .contact-info-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
          }

          @media (max-width: 1024px) {
            #contact-info .contact-info-card {
              flex: 1 1 calc(33.333% - 15px) !important;
            }
          }

          @media (max-width: 600px) {
            #contact-info .contact-info-card {
              flex: 1 1 100% !important;
            }
          }
        `}</style>

        <div className="agenda-page-wrap">
          {isScreen ? (
            <ScreenHeader active="AGENDA" />
          ) : (
            /* ======== HERO ======== */
            <div className="agenda-hero">
              <div className="container">
                <div className="agenda-hero__inner">
                  <div className="agenda-hero__eyebrow">Bengaluru Skill Summit 2025</div>
                  <h1>Full <span>Agenda</span></h1>
                  <p className="agenda-hero__sub">4 - 6 November 2025 &nbsp;·&nbsp; The Lalit Ashok, Bengaluru</p>
                  <div className="agenda-hero__accent-bar"></div>
                </div>
              </div>
            </div>
          )}

          {/* ======== AGENDA SECTION ======== */}
          <div className="agenda-section">
            <div className="container">

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

              {/* FILTERS */}
              <div className="filters-bar">
                <div className="filter-search">
                  <input
                    type="text"
                    placeholder="Search sessions or speakers…"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="filter-select-wrap">
                  <select value={selectedTheme} onChange={e => setSelectedTheme(e.target.value)}>
                    <option value="">All Themes</option>
                    {themes.map(t => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-select-wrap">
                  <select value={selectedStage} onChange={e => setSelectedStage(e.target.value)}>
                    <option value="">All Stages</option>
                    {stages.map(st => (
                      <option key={st.id} value={st.id}>{st.name}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-select-wrap">
                  <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
                    <option value="">All Session Types</option>
                    {sessionTypes.map(ty => (
                      <option key={ty.id} value={ty.id}>{ty.name}</option>
                    ))}
                  </select>
                </div>

                <button type="button" className="filter-clear-btn" onClick={clearFilters}>
                  <i className="fa-solid fa-xmark" style={{ marginRight: '6px' }}></i>Clear
                </button>
              </div>

              {/* DATE DIVIDER */}
              <div className="day-divider">
                <div className="day-divider__line"></div>
                <div className="day-divider__label">{formatDayLabel(activeDate)}</div>
                <div className="day-divider__line"></div>
              </div>

              {/* SESSIONS LIST */}
              {filteredSessions.length > 0 ? (
                <div className="session-list">
                  {filteredSessions.map(session => {
                    // Find stage title
                    let stageTitle = '';
                    if (session.tags) {
                      const stg = session.tags.find(t => stageTagIds.includes(t.id));
                      if (stg) stageTitle = stg.name;
                    }

                    // Order speakers: regular first, moderators last
                    const allSpeakers = session.session_speakers || [];
                    const regularSpeakers = [];
                    const moderators = [];
                    allSpeakers.forEach(sp => {
                      const isMod = (sp.tags || []).some(t => (t.name || '').toLowerCase().trim() === 'moderator');
                      if (isMod) moderators.push(sp);
                      else regularSpeakers.push(sp);
                    });
                    const orderedSpeakers = [...regularSpeakers, ...moderators];

                    return (
                      <div key={session.session_id} className="session-card">
                        {/* LEFT META */}
                        <div className="session-meta">
                          <div className="session-meta__time">
                            <i className="fa-regular fa-clock meta-icon"></i>
                            {formatTimeRange(session.start_timestamp, session.end_timestamp)}
                          </div>
                          {stageTitle && (
                            <div className="session-meta__stage">
                              <i className="fa-solid fa-location-dot meta-icon"></i>
                              {stageTitle}
                            </div>
                          )}
                        </div>

                        {/* RIGHT BODY */}
                        <div className="session-body">
                          <div className="session-title">{session.session_title}</div>

                          {session.session_description && (
                            <button
                              type="button"
                              className="session-desc-link"
                              onClick={() => setModalSession(session)}
                            >
                              <i className="fa-solid fa-arrow-right"></i> View Description
                            </button>
                          )}

                          {/* TAGS */}
                          {session.tags && session.tags.length > 0 && (
                            <div className="session-tags">
                              {session.tags
                                .filter(t => themeTagIds.includes(t.id) || sessionTypeTagIds.includes(t.id))
                                .map(tag => (
                                  <span key={tag.id} className="session-tag">{tag.name}</span>
                                ))}
                            </div>
                          )}

                          {/* SPEAKERS */}
                          {orderedSpeakers.length > 0 && (
                            <div className="agenda-speakers-grid">
                              {orderedSpeakers.map((sp, idx) => {
                                const isMod = (sp.tags || []).some(t => (t.name || '').toLowerCase().trim() === 'moderator');
                                return (
                                  <div key={sp.speaker_id || idx} className="agenda-speaker-card">
                                    {sp.image_url ? (
                                      <img className="agenda-speaker-card__img"
                                        src={sp.image_url}
                                        alt={sp.name || ''}
                                        loading="lazy"
                                       decoding="async" />
                                    ) : (
                                      <div className="agenda-speaker-card__img-placeholder">
                                        <i className="fa-solid fa-user"></i>
                                      </div>
                                    )}
                                    <div className="agenda-speaker-card__info">
                                      <div className="agenda-speaker-card__role">{isMod ? 'Moderator' : 'Speaker'}</div>
                                      <div className="agenda-speaker-card__name">{sp.name}</div>
                                      {sp.designation && (
                                        <div className="agenda-speaker-card__designation">{sp.designation}</div>
                                      )}
                                      {sp.organisation && (
                                        <div className="agenda-speaker-card__org">{sp.organisation}</div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="no-results">
                  <i className="fa-regular fa-calendar-xmark"></i>
                  No sessions match your current filters.
                </div>
              )}

            </div>
          </div>

          {/* ======== DESCRIPTION MODAL ======== */}
          {modalSession && (
            <div
              className="bss-modal-overlay"
              onClick={e => {
                if (e.target === e.currentTarget) setModalSession(null);
              }}
            >
              <div className="bss-modal" role="dialog" aria-modal="true">
                <button
                  type="button"
                  className="bss-modal__close"
                  onClick={() => setModalSession(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="bss-modal__eyebrow">Session Description</div>
                <div className="bss-modal__title">{modalSession.session_title}</div>
                <div className="bss-modal__body">
                  {modalSession.session_description.replace(/<[^>]+>/g, '')}
                </div>
              </div>
            </div>
          )}

          {/* Contact Query Cards */}
          {!isScreen && (
            <div className="nectar-global-section before-footer">
            <div className="container normal-container row">
              <div id="contact-info" data-midnight="dark" className="wpb_row vc_row-fluid vc_row full-width-content">
                <div className="row_col_wrap_12 col span_12 dark left">
                  <div className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct" style={{ color: '#eaeaea' }}>
                          <p>Sponsor and Exhibitor<br /> Queries</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '30px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct" style={{ color: '#ffffff' }}>
                          <p>Vinay Martin</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '5px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct" style={{ color: 'rgba(255,255,255,0.8)' }}>
                          <p>Commercial Director &#8211; India &amp; Middle East</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '10px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct" style={{ color: '#ffc933' }}>
                          <p><a href="mailto:vinay.martin@bengaluruskillsummit.com" style={{ color: '#ffc933', textDecoration: 'none' }}>vinay.martin@bengaluruskillsummit.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct" style={{ color: '#eaeaea' }}>
                          <p>Speaking and Partner<br /> Queries</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '30px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct" style={{ color: '#ffffff' }}>
                          <p>Simran Arora</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '5px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct" style={{ color: 'rgba(255,255,255,0.8)' }}>
                          <p>Sr. Conference Producer</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '10px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct" style={{ color: '#ffc933' }}>
                          <p><a href="mailto:simran.arora@bengaluruskillsummit.com" style={{ color: '#ffc933', textDecoration: 'none' }}>simran.arora@bengaluruskillsummit.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct" style={{ color: '#eaeaea' }}>
                          <p>Marketing and Media<br /> Queries</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '30px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct" style={{ color: '#ffffff' }}>
                          <p>Thulasi S</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '5px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct" style={{ color: 'rgba(255,255,255,0.8)' }}>
                          <p>Marketing Director</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '10px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct" style={{ color: '#ffc933' }}>
                          <p><a href="mailto:thulasi.s@bengaluruskillsummit.com" style={{ color: '#ffc933', textDecoration: 'none' }}>thulasi.s@bengaluruskillsummit.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct" style={{ color: '#eaeaea' }}>
                          <p>Delegate Registration<br /> Queries</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '30px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct" style={{ color: '#ffffff' }}>
                          <p>Suraj Shetty</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '5px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct" style={{ color: 'rgba(255,255,255,0.8)' }}>
                          <p>Director &#8211; Delegate Acquisition</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '10px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct" style={{ color: '#ffc933' }}>
                          <p><a href="mailto:suraj.shetty@bengaluruskillsummit.com" style={{ color: '#ffc933', textDecoration: 'none' }}>suraj.shetty@bengaluruskillsummit.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct" style={{ color: '#eaeaea' }}>
                          <p>Partnership<br /> Queries</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '30px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct" style={{ color: '#ffffff' }}>
                          <p>Praveen Kumar</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '5px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct" style={{ color: 'rgba(255,255,255,0.8)' }}>
                          <p>Partnership Director</p>
                        </div>
                        <div className="divider-wrap"><div style={{ height: '10px' }} className="divider"></div></div>
                        <div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct" style={{ color: '#ffc933' }}>
                          <p><a href="mailto:praveen.kumar@bengaluruskillsummit.com" style={{ color: '#ffc933', textDecoration: 'none' }}>praveen.kumar@bengaluruskillsummit.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

        </div>
      </div>
    </>
  );
}
