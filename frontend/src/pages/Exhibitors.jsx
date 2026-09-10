import React, { useState, useEffect } from 'react';
import exhibitorsData from '../data/exhibitors.json';

export default function Exhibitors() {
  const [selectedExhibitor, setSelectedExhibitor] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedExhibitor) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedExhibitor]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedExhibitor(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="exhibitors-page">
      <style>{`
        /* =============================================
           EXHIBITORS PAGE STYLING
           Palette: #fff bg | #106cff hero accent | #ff6257 btn accent
           Font: Comfortaa, sans-serif
           ============================================= */
        .exhibitors-page {
          background: #fff;
          color: #333;
          font-family: 'Comfortaa', sans-serif;
          width: 100%;
          overflow-x: hidden;
        }

        .exhibitors-page *, 
        .exhibitors-page *::before, 
        .exhibitors-page *::after {
          box-sizing: border-box;
          font-family: 'Comfortaa', sans-serif;
        }

        /* ---------- HERO BANNER ---------- */
        #Skillathon-Banner {
          position: relative;
          background: url('https://bengaluruskillsummit.com/wp-content/uploads/2025/09/banner-skillathon-05.png') center center / cover no-repeat;
          padding: 100px 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .Skillathon-Strip {
          background-color: rgba(255, 255, 255, 0.85);
          padding: 24px 40px;
          border-radius: 6px;
          max-width: 700px;
          width: 100%;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .Skillathon-Heading h1 {
          color: #106cff;
          font-size: 56px;
          font-weight: 700;
          line-height: 1.15;
          margin: 0;
        }

        /* ---------- EXHIBITORS SECTION ---------- */
        .exhibitors-section-wrap {
          padding: 60px 20px 80px;
          background: #fff;
          width: 100%;
        }

        .exhibitors-section {
          background: #fff;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
        }

        .exhibitor-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin: 0;
        }

        /* ---------- EXHIBITOR CARD ---------- */
        .exhibitor-card {
          cursor: pointer;
          outline: none;
          display: flex;
          flex-direction: column;
        }

        .exhibitor-card__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px 20px;
          height: 100%;
          min-height: 190px;
          background: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          border-radius: 8px;
          border: 1px solid #f0f2f5;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .exhibitor-card:hover .exhibitor-card__inner,
        .exhibitor-card:focus .exhibitor-card__inner {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
        }

        .exhibitor-card__media {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          width: 100%;
        }

        img.exhibitor-card__logo {
          max-width: 180px;
          max-height: 90px;
          width: auto;
          height: auto;
          object-fit: contain;
          aspect-ratio: 2 / 1;
        }

        .exhibitor-card__meta {
          margin-top: 14px;
          text-align: center;
        }

        .exhibitor-card__name {
          color: #000;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        /* ---------- MODAL DIALOG ---------- */
        .kh-modal {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .kh-modal__backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(2px);
        }

        .kh-modal__dialog {
          text-align: center;
          position: relative;
          z-index: 100000;
          max-width: 700px;
          width: 100%;
          background: #fff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
          max-height: 85vh;
          overflow-y: auto;
        }

        .kh-modal__close {
          position: absolute;
          top: 14px;
          right: 18px;
          background: transparent;
          border: 0;
          font-size: 32px;
          line-height: 1;
          color: #888;
          cursor: pointer;
          transition: color 0.2s;
        }
        .kh-modal__close:hover {
          color: #111;
        }

        .kh-modal__header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        img.kh-modal__logo {
          max-width: 260px;
          max-height: 110px;
          width: auto;
          height: auto;
          object-fit: contain;
          aspect-ratio: 2 / 1;
          margin-bottom: 16px;
        }

        .kh-modal__title h3 {
          color: #000;
          font-size: 22px;
          font-weight: 700;
          margin: 0;
        }

        .kh-modal__about {
          margin: 16px 0;
          line-height: 1.6;
          font-size: 14px;
          color: #333;
          text-align: left;
        }
        .kh-modal__about p {
          margin: 0 0 10px;
        }

        .kh-modal__actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        span.kh-btn.kh-btn--ghost {
          background: #ffffff;
          border: 1.5px solid #ff6257;
          border-radius: 10px;
          color: #1D1E21;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 12px 24px;
          transition: all 0.2s;
        }

        a.kh-btn {
          background: #ff6257;
          color: #FFF;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border: 1.5px solid #ff6257;
          border-radius: 10px;
          padding: 12px 26px;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
        }
        a.kh-btn:hover {
          background: #fff;
          color: #ff6257;
        }

        /* ============================================
           RESPONSIVE BREAKPOINTS
           ============================================ */
        @media screen and (max-width: 999px) {
          .exhibitor-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .Skillathon-Heading h1 {
            font-size: 46px;
          }
          .kh-modal__dialog {
            padding: 30px 20px;
          }
        }

        @media screen and (max-width: 767px) {
          #Skillathon-Banner {
            padding: 70px 15px;
          }
          .Skillathon-Strip {
            padding: 18px 24px;
          }
          .Skillathon-Heading h1 {
            font-size: 34px;
          }
          .exhibitor-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .exhibitors-section-wrap {
            padding: 40px 15px 60px;
          }
          .kh-modal__actions {
            flex-direction: column;
            width: 100%;
          }
          span.kh-btn.kh-btn--ghost,
          a.kh-btn {
            width: 100%;
            text-align: center;
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
      <div id="Skillathon-Banner">
        <div className="Skillathon-Strip">
          <div className="Skillathon-Heading">
            <h1>2025 Exhibitors</h1>
          </div>
        </div>
      </div>

      {/* ======== EXHIBITORS GRID ======== */}
      <div className="exhibitors-section-wrap">
        <div className="exhibitors-section">
          <div className="exhibitor-grid">
            {exhibitorsData.map((item) => (
              <div
                key={item.id}
                className="exhibitor-card"
                role="button"
                tabIndex={0}
                aria-label={`Open details for ${item.name}`}
                onClick={() => setSelectedExhibitor(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedExhibitor(item);
                  }
                }}
              >
                <div className="exhibitor-card__inner">
                  <div className="exhibitor-card__media">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="exhibitor-card__logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="exhibitor-card__meta">
                    <div className="exhibitor-card__name">{item.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======== MODAL POPUP ======== */}
      {selectedExhibitor && (
        <div className="kh-modal" role="dialog" aria-modal="true">
          <div
            className="kh-modal__backdrop"
            onClick={() => setSelectedExhibitor(null)}
          ></div>
          <div className="kh-modal__dialog" role="document">
            <button
              type="button"
              className="kh-modal__close"
              aria-label="Close"
              onClick={() => setSelectedExhibitor(null)}
            >
              &times;
            </button>
            <div className="kh-modal__header">
              <img
                src={selectedExhibitor.logo}
                alt={`${selectedExhibitor.name} logo`}
                className="kh-modal__logo"
              />
              <div className="kh-modal__title">
                <h3>{selectedExhibitor.name}</h3>
              </div>
            </div>

            {selectedExhibitor.about && (
              <div
                className="kh-modal__about"
                dangerouslySetInnerHTML={{ __html: selectedExhibitor.about }}
              />
            )}

            <div className="kh-modal__actions">
              {selectedExhibitor.stall && (
                <span className="kh-btn kh-btn--ghost">
                  {selectedExhibitor.stall}
                </span>
              )}
              {selectedExhibitor.website && (
                <a
                  className="kh-btn"
                  href={selectedExhibitor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VISIT WEBSITE
                </a>
              )}
            </div>
          </div>
        </div>
      )}

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
