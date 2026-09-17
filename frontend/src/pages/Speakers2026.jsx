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
            padding-top: 100px !important;
            padding-bottom: 100px !important;
            min-height: 420px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;
          }

          .Skillathon-Strip {
            background-color: rgba(255, 255, 255, 0.88) !important;
            border-radius: 14px !important;
            padding: 40px 30px !important;
            max-width: 820px !important;
            width: 90% !important;
            margin: 0 auto !important;
            text-align: center !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
            backdrop-filter: blur(4px) !important;
          }

          .Skillathon-Heading h1 {
            font-family: 'Joost', sans-serif !important;
            font-size: 58px !important;
            font-weight: 700 !important;
            color: #106cff !important;
            line-height: 1.15 !important;
            margin: 0 0 10px 0 !important;
            text-transform: uppercase !important;
            letter-spacing: 1px !important;
          }

          .Skillathon-Sub h4 {
            font-family: 'Joost', sans-serif !important;
            font-size: 30px !important;
            font-weight: 600 !important;
            color: #0e1220 !important;
            line-height: 1.25 !important;
            margin: 0 !important;
          }

          @media (max-width: 768px) {
            #Skillathon-Banner {
              padding-top: 60px !important;
              padding-bottom: 60px !important;
              min-height: 300px !important;
            }
            .Skillathon-Heading h1 {
              font-size: 38px !important;
            }
            .Skillathon-Sub h4 {
              font-size: 22px !important;
            }
          }

          /* ==========================================
             Speakers Grid Layout (User's Exact Design)
             ========================================== */
          .speakers-container {
            position: relative;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 50px 15px 70px;
            box-sizing: border-box;
          }

          .speakers-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 60px 20px !important;
            padding: 0px !important;
            margin: 0px !important;
            align-items: stretch;
          }

          .speaker-card-wrapper {
            position: relative;
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
            transition: .4s ease;
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
            margin-top: 15px !important;
            margin-bottom: 0px !important;
            line-height: 1.2 !important;
            padding-bottom: 8px;
            font-size: 20px !important;
            text-transform: uppercase;
            font-weight: bold;
            color: #000;
            font-family: 'Joost', sans-serif !important;
          }

          .speaker-title, 
          .speaker-org,
          .speaker-country {
            line-height: 140%;
            color: #000 !important;
            padding-bottom: 4px;
            font-size: 14px;
            margin: 0;
            font-family: 'Comfortaa', sans-serif !important;
          }

          .speaker-title {
            font-weight: bold;
          }

          .speaker-country {
            font-style: italic;
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

          /* 1 Speaker per row on mobile */
          @media (max-width: 767px) {
            .speakers-grid {
              gap: 40px 0px !important;
            }
            .speaker-card-wrapper {
              flex: 0 0 100% !important;
              max-width: 100% !important;
              width: 100% !important;
            }
            .speaker-card {
              max-width: 320px;
              margin: 0 auto;
            }
          }

          /* ==========================================
             Anchored Floating Modal (No Background Dim)
             ========================================== */
          .inline-speaker-popup {
            display: none;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 580px;
            max-width: 90vw;
            z-index: 9999;
            background: #ffffff;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
            border-radius: 4px;
            overflow: hidden;
            text-align: left;
          }

          .inline-speaker-popup.active {
            display: block;
            animation: popIn 0.2s ease-out;
          }

          @keyframes popIn {
            from { opacity: 0; transform: translate(-50%, -10px); }
            to { opacity: 1; transform: translate(-50%, 0); }
          }

          .popup-header {
            background: #106cff;
            display: flex;
            align-items: center;
            padding: 20px;
            position: relative;
            gap: 15px;
          }

          .popup-image {
            flex: 0 0 110px;
            max-width: 110px;
            width: 110px;
            height: 110px;
            object-fit: cover;
            border-radius: 2px;
          }

          .popup-header-info {
            flex: 1;
            color: #fff;
            padding-right: 25px;
          }

          .popup-name {
            margin: 0 0 5px 0;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
            line-height: 1.2;
            font-family: 'Joost', sans-serif !important;
          }

          .popup-role {
            color: #fff;
            font-weight: 600;
            font-size: 13px;
            margin: 0 0 2px 0;
            font-family: 'Comfortaa', sans-serif !important;
          }

          .popup-org, .popup-country {
            color: #e8f0fe;
            font-size: 13px;
            margin: 0 0 2px 0;
            font-family: 'Comfortaa', sans-serif !important;
          }

          .popup-country {
            font-style: italic;
          }

          .popup-close {
            position: absolute;
            top: 10px;
            right: 15px;
            background: transparent;
            border: none;
            color: #ffffff;
            font-size: 28px;
            cursor: pointer;
            line-height: 1;
            opacity: 0.85;
          }

          .popup-close:hover {
            opacity: 1;
          }

          .popup-body {
            max-height: 380px;
            overflow-y: auto;
            padding: 20px;
            font-size: 14px;
            line-height: 1.6;
            color: #333333;
            font-family: 'Comfortaa', sans-serif !important;
          }

          .popup-sessions-heading {
            font-size: 16px;
            font-weight: bold;
            color: #106cff;
            margin: 15px 0 10px 0;
            font-family: 'Joost', sans-serif !important;
          }

          .popup-sessions {
            padding: 0;
            margin: 0;
            list-style: none;
          }

          .popup-sessions li {
            background: #f6faff;
            border: 1px solid #d4ebf8;
            padding: 10px 14px;
            margin-bottom: 8px;
            border-radius: 4px;
            font-size: 13px;
          }

          /* Mobile adjustments for 1-column layout */
          @media (max-width: 767px) {
            .inline-speaker-popup {
              width: 100%;
              max-width: 320px;
              left: 50% !important;
              right: auto !important;
              transform: translateX(-50%) !important;
            }
            .popup-header {
              flex-direction: column;
              text-align: center;
              padding: 18px 14px;
            }
            .popup-header-info {
              padding-right: 0;
            }
            .popup-body {
              padding: 16px 14px;
              font-size: 13px;
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

                        {/* Floating Popup Box */}
                        {isPopupOpen && (
                          <div
                            ref={(el) => (popupRefs.current[index] = el)}
                            className="inline-speaker-popup active"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="popup-header">
                              <button
                                type="button"
                                className="popup-close"
                                onClick={closePopup}
                                aria-label="Close"
                              >
                                &times;
                              </button>

                              {speaker.image_url && (
                                <img src={speaker.image_url}
                                  className="popup-image"
                                  alt={speaker.name}
                                  decoding="async"
                                  loading="lazy"
                                  width={100}
                                  height={100} />
                              )}

                              <div className="popup-header-info">
                                <h4 className="popup-name">{speaker.name}</h4>
                                {speaker.designation && <p className="popup-role">{speaker.designation}</p>}
                                {speaker.organisation && <p className="popup-org">{speaker.organisation}</p>}
                                {speaker.location && <p className="popup-country">{speaker.location}</p>}
                              </div>
                            </div>

                            <div className="popup-body">
                              {speaker.about ? (
                                <div dangerouslySetInnerHTML={{ __html: speaker.about }} />
                              ) : (
                                <p>No bio available.</p>
                              )}

                              {speaker.sessions && Array.isArray(speaker.sessions) && speaker.sessions.length > 0 && (
                                <>
                                  <h5 className="popup-sessions-heading">Sessions</h5>
                                  <ul className="popup-sessions">
                                    {[...speaker.sessions]
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
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}