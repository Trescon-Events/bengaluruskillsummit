import React, { useState, useEffect, useRef } from 'react';
import initialSpeakers2026 from '../data/speakers_2026.json';

export default function Speakers2026() {
  const [speakers, setSpeakers] = useState(initialSpeakers2026 || []);
  const [activePopupIndex, setActivePopupIndex] = useState(null);
  const popupRefs = useRef({});

  useEffect(() => {
    // 1. Fetch live data from KonfHub API for 2026
    fetch('https://api.konfhub.com/event/public/bengaluru-skill-summit-2026/speakers', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let list = [];
        if (data && data.uncategorized && Array.isArray(data.uncategorized)) {
          list = list.concat(data.uncategorized);
        }
        if (data && data.categorized && typeof data.categorized === 'object') {
          Object.values(data.categorized).forEach((arr) => {
            if (Array.isArray(arr)) list = list.concat(arr);
          });
        }

        if (list.length > 0) {
          const seen = new Set();
          const unique = [];
          list.forEach((s) => {
            if (!s || !s.name) return;
            const key = s.name.trim().toLowerCase();
            if (!seen.has(key)) {
              seen.add(key);
              unique.push(s);
            }
          });
          setSpeakers(unique);
        }
      })
      .catch((err) => {
        console.warn('KonfHub 2026 speakers API fetch warning, using static fallback:', err);
      });
  }, []);

  // Close popup on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePopupIndex(null);
      }
    };

    const handleClickOutside = (e) => {
      if (activePopupIndex !== null) {
        const currentPopup = popupRefs.current[activePopupIndex];
        if (currentPopup && !currentPopup.contains(e.target) && !e.target.closest('.speaker-card')) {
          setActivePopupIndex(null);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePopupIndex]);

  const togglePopup = (index, e) => {
    e.stopPropagation();
    if (activePopupIndex === index) {
      setActivePopupIndex(null);
    } else {
      setActivePopupIndex(index);
    }
  };

  const closePopup = (e) => {
    if (e) e.stopPropagation();
    setActivePopupIndex(null);
  };

  const formatSessionTime = (startTimestamp, endTimestamp) => {
    try {
      const start = new Date(startTimestamp);
      const end = new Date(endTimestamp);
      const formatOptsDate = {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      };
      const formatOptsTime = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };
      const dateStr = start.toLocaleDateString('en-GB', formatOptsDate);
      const startStr = start.toLocaleTimeString('en-US', formatOptsTime);
      const endStr = end.toLocaleTimeString('en-US', formatOptsTime);
      return `${dateStr}, ${startStr} to ${endStr}`;
    } catch {
      return '';
    }
  };

  return (
    <>
      <div id="ajax-content-wrap">
        <style>{`
          /* ==========================================
             Banner Section
             ========================================== */
          #Skillathon-Banner {
            width: 100vw !important;
            position: relative !important;
            left: 50% !important;
            right: 50% !important;
            margin-left: -50vw !important;
            margin-right: -50vw !important;
            box-sizing: border-box !important;
            background-image: url('/bengaluruskillsummit/wp-content/uploads/2025/09/banner-skillathon-05.webp') !important;
            background-position: center center !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;
            padding-top: 50px !important;
            padding-bottom: 40px !important;
            min-height: auto !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;
          }

          .Skillathon-Strip {
            background-color: rgba(255, 255, 255, 0.9) !important;
            border-radius: 14px !important;
            padding: 26px 30px !important;
            max-width: 820px !important;
            width: 90% !important;
            margin: 0 auto !important;
            text-align: center !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
            backdrop-filter: blur(4px) !important;
          }

          .Skillathon-Heading h1 {
            font-family: 'Joost', sans-serif !important;
            font-size: 52px !important;
            font-weight: 700 !important;
            color: #106cff !important;
            line-height: 1.15 !important;
            margin: 0 0 8px 0 !important;
            text-transform: uppercase !important;
            letter-spacing: 1px !important;
          }

          .Skillathon-Sub h4 {
            font-family: 'Joost', sans-serif !important;
            font-size: 26px !important;
            font-weight: 600 !important;
            color: #0e1220 !important;
            line-height: 1.25 !important;
            margin: 0 !important;
          }

          @media (max-width: 768px) {
            #Skillathon-Banner {
              padding-top: 35px !important;
              padding-bottom: 30px !important;
              min-height: auto !important;
            }
            .Skillathon-Strip {
              padding: 18px 16px !important;
            }
            .Skillathon-Heading h1 {
              font-size: 34px !important;
            }
            .Skillathon-Sub h4 {
              font-size: 18px !important;
            }
          }

          /* ==========================================
             Speakers Grid Layout (Matching Live Site)
             ========================================== */
          .speakers-container {
            width: 100%;
            max-width: 1240px;
            margin: 0 auto;
            padding: 20px 15px 60px !important;
            box-sizing: border-box;
          }

          .speakers-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 50px 20px !important;
            padding: 0px !important;
            margin: 0px !important;
            align-items: flex-start;
          }

          .speaker-card-wrapper {
            position: relative;
            overflow: hidden;
          }

          .speaker-card {
            padding: 0px !important;
            height: 100%;
            border: none !important;
            cursor: pointer;
            text-align: left;
          }

          .speaker-photo-wrapper {
            position: relative;
            overflow: hidden;
            margin-bottom: 12px;
          }

          .speaker-photo {
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            display: block;
            border-radius: 0px !important;
            margin-bottom: 0px !important;
          }

          .speaker-photo-wrapper .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .3s ease;
            background-color: rgba(13, 45, 60, 0.45);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .speaker-photo-wrapper:hover .overlay {
            opacity: 1;
          }

          .speaker-photo-wrapper .overlay span {
            color: #fff;
            font-size: 28px;
            font-weight: bold;
          }

          .speaker-name {
            margin-top: 12px !important;
            margin-bottom: 6px !important;
            padding-bottom: 0px !important;
            font-size: 16px !important;
            line-height: 1.25 !important;
            text-transform: uppercase;
            font-weight: 700 !important;
            color: #000000 !important;
            letter-spacing: -0.02em;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
            hyphens: auto;
            font-family: 'Comfortaa', cursive, sans-serif !important;
          }

          .speaker-title,
          .speaker-org,
          .speaker-country {
            line-height: 140% !important;
            color: #000 !important;
            padding-bottom: 4px;
            font-size: 13.5px !important;
            margin: 0 !important;
            overflow-wrap: break-word !important;
            word-break: break-word !important;
            font-family: 'Comfortaa', cursive, sans-serif !important;
          }

          .speaker-title {
            font-weight: 700 !important;
          }

          .speaker-org {
            font-weight: 400 !important;
          }

          .speaker-country {
            font-style: italic !important;
            font-weight: 400 !important;
          }

          /* Responsive Grid Breakpoints */
          @media (min-width: 1025px) {
            .speaker-card-wrapper {
              flex: 1 1 calc(20% - 20px) !important;
              max-width: calc(20% - 20px) !important;
            }
          }

          @media (max-width: 1024px) and (min-width: 768px) {
            .speaker-card-wrapper {
              flex: 1 1 calc(33.333% - 20px) !important;
              max-width: calc(33.333% - 20px) !important;
            }
          }

          @media (max-width: 767px) {
            .speakers-grid {
              gap: 35px 15px !important;
            }
            .speaker-card-wrapper {
              flex: 1 1 calc(50% - 10px) !important;
              max-width: calc(50% - 10px) !important;
            }
          }

          /* ==========================================
             Speaker Modal Styles (Exact Match from Live Site)
             ========================================== */
          .speaker-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 999999;
            overflow-x: hidden;
            overflow-y: auto;
            background-color: rgba(0, 0, 0, 0.65);
            padding: 100px 0px 30px 0px !important;
            box-sizing: border-box;
          }

          .speaker-modal.active {
            display: block !important;
            animation: fadeIn 0.2s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .modal-dialog {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .modal-content {
            background: #ffffff;
            position: relative;
            width: 100%;
            max-width: 620px !important;
            padding: 0px !important;
            box-shadow: 0 12px 40px rgba(0,0,0,0.35);
            border: none !important;
            border-radius: 4px !important;
            overflow: hidden;
            text-align: left;
          }

          @media (max-width: 1024px) {
            .modal-content {
              max-width: 90% !important;
            }
          }

          .modal-header {
            background: #106cff;
            display: flex;
            align-items: center;
            position: relative;
            padding: 22px 24px;
            gap: 20px;
          }

          .modal-image {
            width: 120px !important;
            height: 120px !important;
            max-width: 120px;
            border-radius: 2px !important;
            margin-bottom: 0px !important;
            object-fit: cover;
            background: #fff;
            flex-shrink: 0;
          }

          .modal-header-info {
            flex: 1;
            color: #fff;
            padding-right: 20px;
          }

          .modal-name {
            margin-top: 0 !important;
            margin-bottom: 6px !important;
            color: #ffffff !important;
            line-height: 1.2 !important;
            font-size: 21px !important;
            font-weight: 700 !important;
            text-transform: uppercase;
            font-family: 'Comfortaa', cursive, sans-serif !important;
          }

          .modal-role {
            color: #ffffff !important;
            font-weight: 700 !important;
            margin-top: 0 !important;
            margin-bottom: 3px !important;
            line-height: 1.35 !important;
            font-size: 13.5px !important;
            font-family: 'Comfortaa', cursive, sans-serif !important;
          }

          .modal-org {
            color: #ffffff !important;
            font-size: 13px !important;
            font-weight: 400 !important;
            margin: 0 0 3px 0 !important;
            line-height: 1.35 !important;
            font-family: 'Comfortaa', cursive, sans-serif !important;
          }

          .modal-country {
            color: #ffffff !important;
            font-style: italic !important;
            font-size: 13px !important;
            margin: 0 !important;
            line-height: 1.35 !important;
            font-family: 'Comfortaa', cursive, sans-serif !important;
          }

          .close-modal {
            position: absolute;
            top: 12px;
            right: 18px;
            background: transparent;
            border: none;
            color: #ffffff !important;
            font-size: 30px;
            line-height: 1;
            cursor: pointer;
            font-weight: bold;
            opacity: 0.9;
            padding: 0;
          }

          .close-modal:hover {
            opacity: 1;
          }

          .modal-body {
            padding: 20px 24px 16px 24px !important;
            font-size: 14px !important;
            max-height: 380px;
            overflow-y: auto;
            color: #333;
            line-height: 1.6 !important;
            font-family: 'Comfortaa', cursive, sans-serif !important;
          }

          .modal-body p {
            margin: 0 0 12px 0 !important;
            font-size: 14px !important;
            line-height: 1.6 !important;
          }

          .modal-body div {
            margin: 0 !important;
            padding: 0 !important;
          }

          .modal-body p:last-child {
            margin-bottom: 0 !important;
          }

          .modal-sessions-heading {
            font-size: 16px !important;
            padding: 10px 24px 0px 24px !important;
            margin: 0 0 8px 0 !important;
            color: #106cff;
            font-weight: 700;
            font-family: 'Comfortaa', cursive, sans-serif !important;
          }

          .modal-sessions {
            margin-bottom: 0px;
            padding-bottom: 20px;
            padding-right: 24px;
            padding-left: 0px !important;
            margin-left: 24px !important;
          }

          .modal-sessions li {
            font-size: 13.5px !important;
            color: #333;
            border: 1px solid #106cff;
            padding: 10px 14px;
            list-style-type: none;
            margin-bottom: 8px;
            border-radius: 4px;
            line-height: 1.4 !important;
          }

          @media (max-width: 767px) {
            .speaker-modal {
              padding: 60px 10px 20px 10px !important;
            }
            .modal-header {
              flex-direction: column !important;
              text-align: center;
              padding: 18px 14px;
            }
            .modal-header-info {
              padding-right: 0;
            }
            .modal-image {
              width: 100px !important;
              height: 100px !important;
            }
          }
        `}</style>

        <div className="container-wrap">
          <div className="container main-content" role="main">
            {/* Hero Banner */}
            <div id="Skillathon-Banner">
              <div className="Skillathon-Strip">
                <div className="Skillathon-Heading">
                  <h1>Speakers 2026</h1>
                </div>
                <div className="Skillathon-Sub">
                  <h4>Voices Shaping the Future of Skills</h4>
                </div>
              </div>
            </div>

            {/* Speakers Grid */}
            <div className="speakers-container">
              {speakers.length === 0 ? (
                <h3 style={{ textAlign: 'center', margin: '50px 0', color: '#666' }}>No speaker data found.</h3>
              ) : (
                <div className="speakers-grid">
                  {speakers.map((speaker, index) => {
                    if (!speaker.name) return null;
                    const isPopupOpen = activePopupIndex === index;

                    return (
                      <div key={speaker.speaker_id || index} className="speaker-card-wrapper">
                        <div
                          className="speaker-card"
                          onClick={(e) => togglePopup(index, e)}
                          role="button"
                          tabIndex={0}
                        >
                          <div className="speaker-photo-wrapper">
                            {speaker.image_url ? (
                              <img src={speaker.image_url}
                                className="speaker-photo"
                                alt={speaker.name}
                                loading="lazy"
                                decoding="async"
                                width={320}
                                height={320} />
                            ) : (
                              <div style={{ width: '100%', paddingTop: '100%', background: '#eee', position: 'relative' }}>
                                <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#888', fontSize: '13px' }}>
                                  No Image
                                </span>
                              </div>
                            )}
                            <div className="overlay">
                              <span>+</span>
                            </div>
                          </div>

                          <h4 className="speaker-name">{speaker.name}</h4>
                          {speaker.designation && <p className="speaker-title">{speaker.designation}</p>}
                          {speaker.organisation && <p className="speaker-org">{speaker.organisation}</p>}
                          {speaker.location && <p className="speaker-country">{speaker.location}</p>}
                        </div>

                        </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Single Centered Speaker Modal (Matching Live Site) */}
            {activePopupIndex !== null && speakers[activePopupIndex] && (
              <div
                className="speaker-modal active"
                onClick={closePopup}
              >
                <div className="modal-dialog">
                  <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close-modal"
                        onClick={closePopup}
                        aria-label="Close"
                      >
                        &times;
                      </button>

                      {speakers[activePopupIndex].image_url && (
                        <img
                          src={speakers[activePopupIndex].image_url}
                          className="modal-image"
                          alt={speakers[activePopupIndex].name}
                          decoding="async"
                          loading="lazy"
                          width={120}
                          height={120}
                        />
                      )}

                      <div className="modal-header-info">
                        <h3 className="modal-name">{speakers[activePopupIndex].name}</h3>
                        {speakers[activePopupIndex].designation && (
                          <p className="modal-role">{speakers[activePopupIndex].designation}</p>
                        )}
                        {speakers[activePopupIndex].organisation && (
                          <p className="modal-org">{speakers[activePopupIndex].organisation}</p>
                        )}
                        {speakers[activePopupIndex].location && (
                          <p className="modal-country">{speakers[activePopupIndex].location}</p>
                        )}
                      </div>
                    </div>

                    <div className="modal-body">
                      {speakers[activePopupIndex].about ? (
                        <div dangerouslySetInnerHTML={{ __html: speakers[activePopupIndex].about }} />
                      ) : (
                        <p>No bio available.</p>
                      )}
                    </div>

                    {speakers[activePopupIndex].sessions &&
                      Array.isArray(speakers[activePopupIndex].sessions) &&
                      speakers[activePopupIndex].sessions.length > 0 && (
                        <>
                          <h5 className="modal-sessions-heading">Sessions</h5>
                          <ul className="modal-sessions">
                            {[...speakers[activePopupIndex].sessions]
                              .sort((a, b) => new Date(a.start_timestamp) - new Date(b.start_timestamp))
                              .map((session, sIdx) => (
                                <li key={session.session_id || sIdx}>
                                  <strong>{session.session_title}</strong>
                                  <br />
                                  <span>🕒 {formatSessionTime(session.start_timestamp, session.end_timestamp)}</span>
                                </li>
                              ))}
                          </ul>
                        </>
                      )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}