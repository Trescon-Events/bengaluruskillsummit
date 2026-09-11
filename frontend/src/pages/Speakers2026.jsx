import React, { useState, useEffect } from 'react';
import initialSpeakers from '../data/speakers.json';

export default function Speakers2026() {
  const [speakers, setSpeakers] = useState(initialSpeakers || []);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  useEffect(() => {
    // Fetch latest live speakers from KonfHub in background
    fetch('https://api.konfhub.com/event/public/bengaluru-skill-summit-2025/speakers', {
      headers: { 'Accept': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        let list = [];
        if (data && data.uncategorized && Array.isArray(data.uncategorized)) {
          list = list.concat(data.uncategorized);
        }
        if (data && data.categorized && typeof data.categorized === 'object') {
          Object.values(data.categorized).forEach(arr => {
            if (Array.isArray(arr)) list = list.concat(arr);
          });
        }

        if (list.length > 0) {
          const seen = new Set();
          const unique = [];
          list.forEach(s => {
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
      .catch(err => {
        console.warn('KonfHub speakers API fetch warning, using static data:', err);
      });
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedSpeaker) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedSpeaker]);

  const formatSessionTime = (startTimestamp, endTimestamp) => {
    try {
      const start = new Date(startTimestamp);
      const end = new Date(endTimestamp);
      const dateStr = start.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      const timeStart = start.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      const timeEnd = end.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      return `${dateStr}, ${timeStart} to ${timeEnd}`;
    } catch {
      return '';
    }
  };

  return (
    <>
      <div id="ajax-content-wrap">
        <style>{`
          /* Hero Banner */
          #Skillathon-Banner {
            width: 100vw !important;
            position: relative !important;
            left: 50% !important;
            right: 50% !important;
            margin-left: -50vw !important;
            margin-right: -50vw !important;
            box-sizing: border-box !important;
            padding-top: 100px !important;
            padding-bottom: 100px !important;
            min-height: 420px !important;
            background-image: url('https://bengaluruskillsummit.com/wp-content/uploads/2025/09/banner-skillathon-05.png') !important;
            background-position: center center !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;
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

          /* User's Exact N-Speakers Styles */
          .N-Speakers {
            padding: 60px 0 60px 0;
          }
          .N-Speakers .container {
            max-width: 1240px;
            margin: 0 auto;
            padding: 0 15px;
          }
          .N-Speakers .speakers-grid {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          }
          .N-Speakers .speaker-col {
            flex: 0 0 25%;
            max-width: 25%;
            padding: 0 15px;
            box-sizing: border-box;
            margin-bottom: 35px;
          }
          @media (max-width: 992px) {
            .N-Speakers .speaker-col {
              flex: 0 0 33.333%;
              max-width: 33.333%;
            }
          }
          @media (max-width: 768px) {
            .N-Speakers .speaker-col {
              flex: 0 0 50%;
              max-width: 50%;
            }
          }
          @media (max-width: 480px) {
            .N-Speakers .speaker-col {
              flex: 0 0 100%;
              max-width: 100%;
            }
          }

          .N-Speakers .Outer-Box {
            margin-bottom: 40px;
            text-align: center;
          }
          .N-Speakers .Outer-Box .SKR-Img-Div {
            position: relative;
            cursor: pointer;
            overflow: hidden;
            border-radius: 4px;
            aspect-ratio: 1 / 1;
            background: #f0f0f0;
          }
          .N-Speakers .Outer-Box .SKR-IMG {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 4px;
            transition: transform 0.4s ease;
          }
          .N-Speakers .Outer-Box .SKR-Img-Div:hover .SKR-IMG {
            transform: scale(1.05);
          }
          .N-Speakers .Outer-Box .overlay {
            border-radius: 4px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .3s ease;
            background-color: rgba(13, 45, 60, 0.65);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .N-Speakers .Outer-Box .SKR-Img-Div:hover .overlay {
            opacity: 1;
          }
          .N-Speakers .Outer-Box .text {
            color: white;
            font-size: 28px;
            text-align: center;
          }
          .N-Speakers .Outer-Box .Speaker-Name {
            color: #000;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 18px;
            margin-top: 17px;
            text-align: center;
            margin-bottom: 5px;
            font-family: 'Joost', sans-serif;
          }
          .N-Speakers .Outer-Box .Designation,
          .N-Speakers .Outer-Box .Company {
            color: #000;
            font-size: 14px;
            text-align: center;
            margin-top: 0px;
            font-weight: 600;
            margin-bottom: 3px;
            line-height: 1.35;
            font-family: 'Jost', sans-serif;
          }
          .N-Speakers .Outer-Box .Company {
            font-weight: 400;
            margin-bottom: 3px;
          }
          .N-Speakers .Outer-Box .Country {
            color: #000;
            font-style: italic;
            font-size: 14px;
            text-align: center;
            margin-top: 0px;
            margin-bottom: 10px;
            font-weight: 600;
            font-family: 'Jost', sans-serif;
          }

          /* Modal Styling */
          .speaker-modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.75);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            padding: 20px;
            animation: fadeIn 0.2s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .Speaker-Modal-Container {
            width: 100%;
            max-width: 650px;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            position: relative;
            animation: slideUp 0.25s ease-out;
          }

          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .Speaker-Modal .close-Modal {
            position: absolute;
            top: 12px;
            right: 15px;
            font-size: 2.2rem;
            font-weight: 300;
            line-height: 1;
            background: transparent;
            border: none;
            color: #ffffff;
            cursor: pointer;
            z-index: 10;
            transition: color 0.2s;
          }
          .Speaker-Modal .close-Modal:hover {
            color: #ffc933;
          }

          .Speaker-Modal .Speak-Det {
            width: 100%;
            background: #1b9ad6;
            padding: 25px 20px;
            box-sizing: border-box;
          }

          .Speaker-Modal .modal-header-row {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .Speaker-Modal .Left-Img {
            width: 110px;
            height: 110px;
            flex-shrink: 0;
          }

          .Speaker-Modal .Left-Img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 6px;
            border: 2px solid rgba(255, 255, 255, 0.4);
          }

          .Speaker-Modal .Right-Content {
            flex: 1;
            padding-right: 25px;
          }

          .Speaker-Modal .Speaker-Detile {
            color: #ffffff;
          }

          .Speaker-Modal .Speak-Modal-Name {
            font-size: 22px;
            font-weight: 700;
            text-transform: uppercase;
            margin: 0 0 6px 0;
            color: #ffffff;
            font-family: 'Joost', sans-serif;
            letter-spacing: 0.5px;
          }

          .Speaker-Modal .Speak-Modal-Designation,
          .Speaker-Modal .Speak-Modal-Company,
          .Speaker-Modal .Speak-Modal-Country {
            font-size: 15px;
            line-height: 1.35;
            margin: 0 0 3px 0;
            color: rgba(255, 255, 255, 0.95);
            font-family: 'Jost', sans-serif;
          }

          .Speaker-Modal .Speak-Modal-Country {
            font-style: italic;
            font-weight: 500;
          }

          .Speaker-Modal .Speaker-Liner {
            padding: 25px;
            overflow-y: auto;
            max-height: calc(85vh - 160px);
            box-sizing: border-box;
          }

          .Speaker-Modal .Speaker-Description {
            font-size: 16px;
            line-height: 1.6;
            color: #333333;
            margin: 0 0 20px 0;
            font-family: 'Jost', sans-serif;
            white-space: pre-line;
          }

          .sessions-heading {
            font-size: 20px;
            font-weight: 700;
            color: #0e1220;
            margin: 25px 0 15px 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-family: 'Joost', sans-serif;
          }

          .speaker-session-box {
            border: 1px solid rgba(27, 154, 214, 0.4);
            background: #f8fbfe;
            border-radius: 6px;
            padding: 14px 16px;
            margin-bottom: 12px;
          }

          .S-Name {
            font-size: 16px;
            font-weight: 600;
            color: #106cff;
            margin: 0 0 6px 0;
            line-height: 1.4;
            font-family: 'Jost', sans-serif;
          }

          .Session-Time {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #4b5563;
            margin: 0;
            font-weight: 500;
            font-family: 'Jost', sans-serif;
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
            <div className="N-Speakers">
              <div className="container">
                <div className="speakers-grid">
                  {speakers.map((speaker, index) => {
                    if (!speaker.name) return null;
                    return (
                      <div key={speaker.speaker_id || index} className="speaker-col">
                        <div className="Outer-Box">
                          <div
                            className="SKR-Img-Div"
                            onClick={() => setSelectedSpeaker(speaker)}
                            role="button"
                            tabIndex={0}
                          >
                            {speaker.image_url ? (
                              <img
                                src={speaker.image_url}
                                className="SKR-IMG"
                                alt={speaker.name}
                                loading="lazy"
                              />
                            ) : (
                              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e2e8f0', color: '#64748b' }}>
                                No Image
                              </div>
                            )}
                            <div className="overlay">
                              <div className="text">
                                <span style={{ fontSize: '28px', fontWeight: 'bold' }}>+</span>
                              </div>
                            </div>
                          </div>

                          <h4 className="Speaker-Name" onClick={() => setSelectedSpeaker(speaker)} style={{ cursor: 'pointer' }}>
                            {speaker.name}
                          </h4>
                          {speaker.designation && <p className="Designation">{speaker.designation}</p>}
                          {speaker.organisation && <p className="Company">{speaker.organisation}</p>}
                          {speaker.location && <p className="Country">{speaker.location}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Popup */}
            {selectedSpeaker && (
              <div
                className="speaker-modal-backdrop"
                onClick={(e) => {
                  if (e.target === e.currentTarget) setSelectedSpeaker(null);
                }}
              >
                <div className="Speaker-Modal-Container Speaker-Modal" role="dialog" aria-modal="true">
                  <button
                    type="button"
                    className="close-Modal"
                    onClick={() => setSelectedSpeaker(null)}
                    aria-label="Close"
                  >
                    &times;
                  </button>

                  <div className="Speak-Det">
                    <div className="modal-header-row">
                      {selectedSpeaker.image_url && (
                        <div className="Left-Img">
                          <img src={selectedSpeaker.image_url} alt={selectedSpeaker.name} />
                        </div>
                      )}
                      <div className="Right-Content">
                        <div className="Speaker-Detile">
                          <h4 className="Speak-Modal-Name">{selectedSpeaker.name}</h4>
                          {selectedSpeaker.designation && (
                            <p className="Speak-Modal-Designation">{selectedSpeaker.designation}</p>
                          )}
                          {selectedSpeaker.organisation && (
                            <p className="Speak-Modal-Company">{selectedSpeaker.organisation}</p>
                          )}
                          {selectedSpeaker.location && (
                            <p className="Speak-Modal-Country">{selectedSpeaker.location}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="Speaker-Liner">
                    {selectedSpeaker.about && (
                      <p className="Speaker-Description">{selectedSpeaker.about}</p>
                    )}

                    {selectedSpeaker.sessions && Array.isArray(selectedSpeaker.sessions) && selectedSpeaker.sessions.length > 0 && (
                      <>
                        <h5 className="sessions-heading">Sessions</h5>
                        <div className="Speaker-session">
                          {selectedSpeaker.sessions
                            .slice()
                            .sort((a, b) => new Date(a.start_timestamp) - new Date(b.start_timestamp))
                            .map((session, sIdx) => (
                              <div key={session.session_id || sIdx} className="speaker-session-box">
                                <p className="S-Name">{session.session_title}</p>
                                {session.start_timestamp && session.end_timestamp && (
                                  <p className="Session-Time">
                                    <span style={{ marginRight: '6px' }}>🕒</span>
                                    {formatSessionTime(session.start_timestamp, session.end_timestamp)}
                                  </p>
                                )}
                              </div>
                            ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Contact Query Cards */}
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
          </div>
        </div>
      </div>
    </>
  );
}
