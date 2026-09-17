import React, { useState, useEffect, useMemo } from 'react';
import initialSessionsData from '../data/snapshot_sessions.json';
import initialFiltersData from '../data/snapshot_filters.json';

const EVENT_ID = 'b1faf887-972e-4a9a-bd97-2229fd1395fa';

export default function SnapshotAgenda() {
  const [sessionsByDate, setSessionsByDate] = useState(initialSessionsData || {});
  const [filters, setFilters] = useState(initialFiltersData || { theme: [], stage: [], sessionType: [] });
  
  // Active date tab: default 2025-11-04
  const [activeDate, setActiveDate] = useState('2025-11-04');
  
  // Filter controls
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedStage, setSelectedStage] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Digital countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, completed: false, started: false });

  useEffect(() => {
    const eventStart = new Date("2025-11-04T16:00:00").getTime();
    const eventEnd = new Date("2025-11-06T18:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      if (now >= eventEnd) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, completed: true, started: false });
        return;
      }
      if (now >= eventStart && now < eventEnd) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, completed: false, started: true });
        return;
      }
      const distance = eventStart - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds, completed: false, started: false });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Clear filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedTheme('');
    setSelectedStage('');
    setSelectedType('');
  };

  // Current date info
  const activeDateData = sessionsByDate[activeDate] || { dayLabel: '', sessions: [] };

  // Filtered sessions for current active date
  const filteredSessions = useMemo(() => {
    const sList = activeDateData.sessions || [];
    const q = searchQuery.toLowerCase().trim();

    return sList.filter(s => {
      const titleMatch = !q || (s.dataTitle && s.dataTitle.toLowerCase().includes(q)) || (s.title && s.title.toLowerCase().includes(q));
      const speakerMatch = !q || (s.dataSpeakers && s.dataSpeakers.toLowerCase().includes(q));
      const matchesSearch = titleMatch || speakerMatch;

      const matchesTheme = !selectedTheme || (s.tags && s.tags.includes(selectedTheme));
      const matchesStage = !selectedStage || (s.tags && s.tags.includes(selectedStage));
      const matchesType = !selectedType || (s.tags && s.tags.includes(selectedType));

      return matchesSearch && matchesTheme && matchesStage && matchesType;
    });
  }, [activeDateData, searchQuery, selectedTheme, selectedStage, selectedType]);

  const dateTabs = [
    { key: '2025-11-04', label: '04 Nov' },
    { key: '2025-11-05', label: '05 Nov' },
    { key: '2025-11-06', label: '06 Nov' }
  ];

  return (
    <div className="snapshot-agenda-page">
      <style>{`
        /* =============================================
           BSS AGENDA — White theme
           Palette: #fff bg | #ff6257 accent | #111 text
           Font: Comfortaa
           ============================================= */
        .snapshot-agenda-page {
          background: #fff;
          color: #111;
          font-family: 'Comfortaa', sans-serif;
          width: 100%;
          overflow-x: hidden;
        }

        .snapshot-agenda-page *, 
        .snapshot-agenda-page *::before, 
        .snapshot-agenda-page *::after {
          box-sizing: border-box;
          font-family: 'Comfortaa', sans-serif;
        }

        /* ---------- HERO BANNER ---------- */
        .agenda-hero {
          position: relative;
          background: url('/bengaluruskillsummit.com/wp-content/uploads/2025/09/agenda-banner.webp') center center / cover no-repeat;
          padding: 120px 15px 50px;
          text-align: center;
          overflow: hidden;
          width: 100%;
        }
        .agenda-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(6,45,64,0.68) 100%);
        }
        .agenda-hero__inner {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .agenda-hero__eyebrow {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff6257;
          background: rgba(255,98,87,0.12);
          border: 1px solid rgba(255,98,87,0.40);
          padding: 6px 18px;
          border-radius: 4px;
          margin-bottom: 18px;
        }
        .agenda-hero h1 {
          font-size: 52px;
          font-weight: 700;
          line-height: 1.15;
          color: #fff;
          margin: 0 0 14px;
        }
        .agenda-hero h1 span {
          color: #ff6257;
        }
        .agenda-hero__sub {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255,255,255,0.85);
          margin: 0 0 16px;
        }
        .agenda-hero__accent-bar {
          width: 60px;
          height: 3px;
          background: #ff6257;
          margin: 16px auto 20px;
          border-radius: 2px;
        }

        /* Countdown & Timezone */
        .digital-countdown-wrap {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        .digital-countdown {
          display: inline-flex;
          gap: 10px;
          background: rgba(0, 0, 0, 0.6);
          padding: 8px 16px;
          border-radius: 12px;
          color: #fff;
          align-items: center;
        }
        .digital-countdown .time-box {
          background: #111;
          padding: 6px 10px;
          border-radius: 6px;
          min-width: 46px;
          text-align: center;
          font-weight: bold;
          font-size: 20px;
          box-shadow: inset 0 0 4px rgba(255,255,255,0.1);
        }
        .digital-countdown .label {
          font-size: 11px;
          color: #ccc;
          text-align: center;
          margin-top: 3px;
        }
        .hero-timezone {
          font-size: 14px;
          line-height: 18px;
          text-align: center;
          color: rgba(255,255,255,0.8);
          margin-top: 14px;
        }

        /* ---------- MAIN SECTION ---------- */
        .agenda-section {
          background: #fff;
          padding: 50px 0 70px;
          width: 100%;
          overflow-x: hidden;
        }
        .agenda-section .container {
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ---------- DATE TABS ---------- */
        .date-tabs-wrap {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 36px;
          flex-wrap: wrap;
          padding: 0 5px;
        }
        .date-tab {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(17,17,17,0.55);
          background: transparent;
          border: 1px solid rgba(17,17,17,0.22);
          padding: 11px 28px;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .date-tab:hover {
          color: #111;
          border-color: rgba(255,98,87,0.6);
          background: rgba(255,98,87,0.06);
        }
        .date-tab.active {
          color: #fff;
          background: #ff6257;
          border-color: #ff6257;
        }

        /* ---------- FILTERS ---------- */
        .filters-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
          width: 100%;
        }
        .filter-search {
          position: relative;
          flex: 1 1 220px;
          min-width: 0;
          max-width: 280px;
        }
        .filter-search input {
          width: 100%;
          padding: 11px 38px 11px 16px;
          background: #f7f8fa;
          border: 1px solid #dde1e7;
          border-radius: 4px;
          color: #111;
          font-size: 14px;
          transition: border-color 0.2s, background 0.2s;
          outline: none;
          min-width: 0;
        }
        .filter-search input::placeholder {
          color: rgba(17,17,17,0.40);
        }
        .filter-search input:focus {
          border-color: #ff6257;
          background: #fff;
        }
        .filter-search i {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(17,17,17,0.40);
          font-size: 14px;
          pointer-events: none;
        }
        .filter-select-wrap {
          position: relative;
          flex: 1 1 180px;
          min-width: 0;
          max-width: 220px;
        }
        .filter-select-wrap::after {
          content: '▼';
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(17,17,17,0.40);
          font-size: 9px;
          pointer-events: none;
        }
        .filter-select-wrap select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 100%;
          padding: 11px 34px 11px 14px;
          background: #f7f8fa;
          border: 1px solid #dde1e7;
          border-radius: 4px;
          color: #111;
          font-size: 14px;
          cursor: pointer;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          min-width: 0;
        }
        .filter-select-wrap select:focus {
          border-color: #ff6257;
          background: #fff;
        }
        .filter-select-wrap select option {
          background: #fff;
          color: #111;
        }
        .filter-clear-btn {
          flex: 0 0 auto;
          padding: 11px 22px;
          background: transparent;
          border: 1px solid #dde1e7;
          border-radius: 4px;
          color: rgba(17,17,17,0.65);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 6px;
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
          gap: 16px;
          margin-bottom: 30px;
        }
        .day-divider__line {
          flex: 1;
          height: 1px;
          background: rgba(255,98,87,0.30);
          min-width: 0;
        }
        .day-divider__label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff6257;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ---------- SESSION LIST & CARDS ---------- */
        .session-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .session-card {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0;
          border-bottom: 1px solid #eaedf1;
          padding: 26px 12px;
          transition: background 0.2s ease;
          width: 100%;
          min-width: 0;
          border-radius: 4px;
        }
        .session-card:hover {
          background: rgba(255,98,87,0.03);
        }
        .session-card:last-child {
          border-bottom: none;
        }

        /* LEFT META */
        .session-meta {
          flex: 0 0 240px;
          width: 240px;
          min-width: 0;
          padding-right: 24px;
          padding-top: 2px;
        }
        .session-meta__time {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #111;
          margin-bottom: 8px;
          word-break: break-word;
        }
        .meta-icon {
          color: #ff6257;
          font-size: 13px;
          flex-shrink: 0;
          margin-top: 3px;
        }
        .session-meta__stage {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(17,17,17,0.55);
          line-height: 1.4;
          word-break: break-word;
        }

        /* RIGHT BODY */
        .session-body {
          flex: 1;
          min-width: 0;
        }
        .session-title {
          font-size: 18px;
          font-weight: 700;
          line-height: 1.45;
          color: #111;
          margin-bottom: 6px;
          white-space: normal;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        /* NO RESULTS */
        .no-results {
          text-align: center;
          padding: 60px 20px;
          color: rgba(17,17,17,0.40);
          font-size: 15px;
        }
        .no-results i {
          font-size: 34px;
          display: block;
          margin-bottom: 12px;
          color: rgba(255,98,87,0.30);
        }

        /* ============================================
           TABLET & MOBILE RESPONSIVENESS
           ============================================ */
        @media (max-width: 991px) {
          .session-card {
            flex-direction: column;
            padding: 22px 10px;
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
        }

        @media (max-width: 767px) {
          .agenda-hero {
            padding: 100px 15px 45px;
          }
          .agenda-hero h1 {
            font-size: 32px;
          }
          .agenda-hero__sub {
            font-size: 14px;
          }
          .filters-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .filter-search,
          .filter-select-wrap {
            flex: none;
            width: 100%;
            max-width: 100%;
          }
          .filter-clear-btn {
            width: 100%;
            justify-content: center;
          }
          .session-title {
            font-size: 16px;
            line-height: 1.4;
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
          background: #525252 url('https://bengaluruskillsummit.com/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg') center center no-repeat !important;
          background-size: cover !important;
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
          box-shadow: 0 4px 15px rgba(0,0,0,0.15) !important;
        }

        #contact-info .contact-title {
          font-size: 15px !important;
          line-height: 1.3 !important;
          color: #eaeaea !important;
          margin-bottom: 25px !important;
          min-height: 40px !important;
          font-weight: 500 !important;
        }

        #contact-info .contact-name {
          font-size: 13px !important;
          line-height: 1 !important;
          color: #ffffff !important;
          font-weight: 600 !important;
          margin-bottom: 5px !important;
        }

        #contact-info .contact-designation {
          font-size: 10px !important;
          line-height: 1.2 !important;
          color: rgba(255,255,255,0.8) !important;
          margin-bottom: 12px !important;
          min-height: 24px !important;
        }

        #contact-info .contact-email a {
          font-size: 11px !important;
          line-height: 1.3 !important;
          color: #ffc933 !important;
          text-decoration: none !important;
          overflow-wrap: normal !important;
          word-break: normal !important; white-space: nowrap !important;
          white-space: nowrap !important;
          display: inline-block !important;
        }
        #contact-info .contact-email a:hover { text-decoration: none !important; color: #ffd766 !important; }
      `}</style>

      {/* ======== HERO BANNER ======== */}
      <div className="agenda-hero">
        <div className="agenda-hero__inner">
          <div className="agenda-hero__eyebrow">Bengaluru Skill Summit 2025</div>
          <h1>Snapshot <span>Agenda</span></h1>
          <p className="agenda-hero__sub">4 – 6 November 2025 &nbsp;·&nbsp; The Lalit Ashok, Bengaluru</p>
          <div className="agenda-hero__accent-bar"></div>

          {/* Countdown & Timezone */}
          <div className="digital-countdown-wrap">
            <div className="digital-countdown">
              {timeLeft.completed ? (
                <div><span className="time-box">✅</span> Event Completed</div>
              ) : timeLeft.started ? (
                <div><span className="time-box">🎉</span> Event Started!</div>
              ) : (
                <>
                  <div>
                    <div className="time-box">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="label">Days</div>
                  </div>
                  <div>
                    <div className="time-box">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="label">Hrs</div>
                  </div>
                  <div>
                    <div className="time-box">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="label">Min</div>
                  </div>
                  <div>
                    <div className="time-box">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="label">Sec</div>
                  </div>
                </>
              )}
            </div>
          </div>
          <p className="hero-timezone">Time Zone: (GMT+5:30) India Standard Time</p>
        </div>
      </div>

      {/* ======== MAIN AGENDA SECTION ======== */}
      <div className="agenda-section">
        <div className="container">

          {/* DATE TABS */}
          <div className="date-tabs-wrap">
            {dateTabs.map(tab => (
              <button
                key={tab.key}
                type="button"
                className={`date-tab ${activeDate === tab.key ? 'active' : ''}`}
                onClick={() => setActiveDate(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* FILTERS BAR */}
          <div className="filters-bar">
            {/* Search Input */}
            <div className="filter-search">
              <input
                type="text"
                placeholder="Search sessions or speakers…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            {/* Thematic Tracks Dropdown */}
            <div className="filter-select-wrap">
              <select
                value={selectedTheme}
                onChange={e => setSelectedTheme(e.target.value)}
              >
                <option value="">All Themes</option>
                {(filters.theme || []).filter(o => o.value).map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Stages Dropdown */}
            <div className="filter-select-wrap">
              <select
                value={selectedStage}
                onChange={e => setSelectedStage(e.target.value)}
              >
                <option value="">All Stages</option>
                {(filters.stage || []).filter(o => o.value).map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Session Types Dropdown */}
            <div className="filter-select-wrap">
              <select
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
              >
                <option value="">All Session Types</option>
                {(filters.sessionType || []).filter(o => o.value).map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Clear Button */}
            <button
              type="button"
              className="filter-clear-btn"
              onClick={handleClearFilters}
            >
              <i className="fa-solid fa-xmark"></i>
              Clear
            </button>
          </div>

          {/* DAY DIVIDER */}
          <div className="day-divider">
            <div className="day-divider__line"></div>
            <div className="day-divider__label">{activeDateData.dayLabel}</div>
            <div className="day-divider__line"></div>
          </div>

          {/* SESSIONS LIST */}
          <div className="session-list">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((s, idx) => (
                <div key={idx} className="session-card">
                  <div className="session-meta">
                    <div className="session-meta__time">
                      <i className="fa-regular fa-clock meta-icon"></i>
                      {s.time}
                    </div>
                    {s.stage ? (
                      <div className="session-meta__stage">
                        <i className="fa-solid fa-location-dot meta-icon"></i>
                        {s.stage}
                      </div>
                    ) : null}
                  </div>
                  <div className="session-body">
                    <div className="session-title">{s.title}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <i className="fa-solid fa-circle-exclamation"></i>
                No sessions match your selected filters.
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ---------------- CONTACT INFO SECTION ---------------- */}
      <div id="contact-info">
        <div className="row_col_wrap_12">
          {/* Card 1 */}
          <div className="contact-info-card">
            <div className="contact-title">Sponsor and Exhibitor<br />Queries</div>
            <div className="contact-name">Vinay Martin</div>
            <div className="contact-designation">Commercial Director – India &amp; Middle East</div>
            <div className="contact-email">
              <a href="mailto:vinay.martin@tresconglobal.com">vinay.martin@tresconglobal.com</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="contact-info-card">
            <div className="contact-title">Speaking and Partner<br />Queries</div>
            <div className="contact-name">Simran Arora</div>
            <div className="contact-designation">Senior Manager – Conference Production</div>
            <div className="contact-email">
              <a href="mailto:simran.arora@tresconglobal.com">simran.arora@tresconglobal.com</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="contact-info-card">
            <div className="contact-title">Government Relation &amp;<br />Marketing Queries</div>
            <div className="contact-name">Ashutosh Gupta</div>
            <div className="contact-designation">Director – Strategic Alliances</div>
            <div className="contact-email">
              <a href="mailto:ashutosh@tresconglobal.com">ashutosh@tresconglobal.com</a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="contact-info-card">
            <div className="contact-title">Media &amp; PR<br />Queries</div>
            <div className="contact-name">Arpit Soni</div>
            <div className="contact-designation">Senior Marketing Manager</div>
            <div className="contact-email">
              <a href="mailto:arpit.soni@tresconglobal.com">arpit.soni@tresconglobal.com</a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="contact-info-card">
            <div className="contact-title">General<br />Enquiry</div>
            <div className="contact-name">General Queries</div>
            <div className="contact-designation">&nbsp;</div>
            <div className="contact-email">
              <a href="mailto:support@bengaluruskillsummit.com">support@bengaluruskillsummit.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
