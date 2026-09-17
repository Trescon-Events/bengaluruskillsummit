import React, { useEffect } from 'react';

export default function BeASpeaker() {
  useEffect(() => {
    document.title = 'Be a Speaker | Share Your Expertise at Bengaluru Skill Summit 2025';
    window.scrollTo(0, 0);

    const loadHubspot = () => {
      if (window.hbspt) {
        const container = document.getElementById('hubspot-speaker-form');
        if (container) {
          container.innerHTML = '';
          window.hbspt.forms.create({
            portalId: "2953901",
            formId: "93bcc433-7b8a-4afd-8a9c-394e430d494b",
            region: "na1",
            target: "#hubspot-speaker-form",
            onFormSubmitted: function() {
              window.location.href = "/thank-you";
            }
          });
        }
      }
    };

    if (window.hbspt) {
      loadHubspot();
    } else {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = loadHubspot;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bss-be-a-speaker-page">
      {/* ================= HERO BANNER ================= */}
      <div className="bss-speaker-hero">
        <div className="bss-speaker-hero__overlay"></div>
        <div className="bss-speaker-hero__content">
          <h1 className="bss-speaker-hero__title">BE A SPEAKER</h1>
        </div>
      </div>

      {/* ================= HUBSPOT FORM CONTAINER ================= */}
      <div className="bss-speaker-form-section">
        <div className="bss-speaker-form-container">
          <div id="hubspot-speaker-form"></div>
        </div>
      </div>

      {/* ================= CONTACT QUERY CARDS ================= */}
      <div id="contact-info" className="bss-speaker-contact-section">
        <div className="bss-speaker-contact-inner">
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

      <style>{`
        .bss-be-a-speaker-page {
          width: 100%;
          min-height: 100vh;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
        }

        /* ---------------- HERO BANNER ---------------- */
        .bss-speaker-hero {
          position: relative;
          width: 100%;
          min-height: 380px;
          background-image: url('/bengaluruskillsummit/wp-content/uploads/2025/09/agenda-banner.webp');
          background-position: center top;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 20px 100px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .bss-speaker-hero__overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 24, 45, 0.40);
          z-index: 1;
        }

        .bss-speaker-hero__content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          text-align: center;
        }

        .bss-speaker-hero__title {
          font-family: 'Oswald', 'Comfortaa', sans-serif !important;
          font-size: 60px !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          text-transform: uppercase !important;
          word-spacing: 10px !important;
          letter-spacing: 2px !important;
          line-height: 1.15 !important;
          text-align: center !important;
          margin: 0 !important;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5) !important;
        }

        @media (max-width: 991px) {
          .bss-speaker-hero {
            min-height: 300px;
            padding: 90px 20px 70px;
          }
          .bss-speaker-hero__title {
            font-size: 42px !important;
            word-spacing: 6px !important;
          }
        }

        @media (max-width: 767px) {
          .bss-speaker-hero {
            min-height: 240px;
            padding: 70px 15px 50px;
          }
          .bss-speaker-hero__title {
            font-size: 30px !important;
            word-spacing: 4px !important;
          }
        }

        /* ---------------- HUBSPOT FORM SECTION ---------------- */
        .bss-speaker-form-section {
          width: 100%;
          padding: 70px 10% 90px;
          box-sizing: border-box;
          background-color: #ffffff;
        }

        .bss-speaker-form-container {
          max-width: 1050px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* HubSpot Native Form Styles matching screenshot media_1788929762577.png */
        .hbspt-form,
        .hs-form {
          width: 100% !important;
          font-family: 'Comfortaa', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }

        .hs-form fieldset {
          max-width: 100% !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 0 24px 0 !important;
        }

        .hs-form .form-columns-1 {
          width: 100% !important;
        }

        .hs-form .form-columns-2 {
          display: flex !important;
          gap: 24px !important;
          width: 100% !important;
        }

        .hs-form .form-columns-2 .hs-form-field {
          flex: 1 1 50% !important;
          width: 50% !important;
          float: none !important;
        }

        .hs-form .form-columns-3 {
          display: flex !important;
          gap: 20px !important;
          width: 100% !important;
        }

        .hs-form .form-columns-3 .hs-form-field {
          flex: 1 1 33.33% !important;
          width: 33.33% !important;
          float: none !important;
        }

        .hs-form .hs-form-field {
          margin-bottom: 0 !important;
          width: 100% !important;
        }

        .hs-form label {
          display: block !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          color: #222222 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          margin-bottom: 8px !important;
          line-height: 1.4 !important;
        }

        .hs-form label .hs-form-required,
        .hs-form label span.hs-form-required {
          color: #ff0000 !important;
          margin-left: 2px !important;
        }

        .hs-form input[type="text"],
        .hs-form input[type="email"],
        .hs-form input[type="tel"],
        .hs-form select,
        .hs-form textarea {
          width: 100% !important;
          height: 48px !important;
          background: #ffffff !important;
          border: 1px solid #00A8B2 !important;
          border-radius: 0px !important;
          color: #333333 !important;
          font-size: 15px !important;
          padding: 10px 14px !important;
          box-sizing: border-box !important;
          outline: none !important;
          transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
        }

        .hs-form textarea {
          height: 120px !important;
          resize: vertical !important;
        }

        .hs-form input[type="text"]:focus,
        .hs-form input[type="email"]:focus,
        .hs-form input[type="tel"]:focus,
        .hs-form select:focus,
        .hs-form textarea:focus {
          border-color: #ff6257 !important;
          box-shadow: 0 0 6px rgba(255, 98, 87, 0.3) !important;
        }

        .hs-form .hs-button.primary {
          background-color: #ff6257 !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          font-size: 15px !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          padding: 14px 45px !important;
          border: none !important;
          border-radius: 4px !important;
          cursor: pointer !important;
          transition: all 0.25s ease !important;
          margin-top: 15px !important;
          display: inline-block !important;
        }

        .hs-form .hs-button.primary:hover {
          background-color: #f74d41 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 18px rgba(255, 98, 87, 0.35) !important;
        }

        @media (max-width: 767px) {
          .bss-speaker-form-section {
            padding: 40px 5% 50px;
          }
          .hs-form .form-columns-2,
          .hs-form .form-columns-3 {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .hs-form .form-columns-2 .hs-form-field,
          .hs-form .form-columns-3 .hs-form-field {
            width: 100% !important;
          }
          .hs-form input[type="text"],
          .hs-form input[type="email"],
          .hs-form input[type="tel"],
          .hs-form select {
            height: 44px !important;
          }
        }

        /* ---------------- CONTACT INFO SECTION ---------------- */
        .bss-speaker-contact-section {
          width: 100%;
          background-image: url("https://bengaluruskillsummit/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 80px 20px 40px;
          box-sizing: border-box;
        }

        .bss-speaker-contact-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          box-sizing: border-box;
        }

        .bss-speaker-contact-inner .contact-info-card {
          flex: 1 1 220px;
          max-width: 240px;
          background: #525252;
          border-radius: 10px;
          padding: 25px 14px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
          box-sizing: border-box;
        }

        .bss-speaker-contact-inner .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .bss-speaker-contact-inner .contact-title {
          color: #eaeaea;
          font-size: 15px;
          line-height: 1.3;
          margin-bottom: 25px;
          font-weight: 700;
        }

        .bss-speaker-contact-inner .contact-name {
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .bss-speaker-contact-inner .contact-designation {
          color: rgba(255,255,255,0.8);
          font-size: 10px;
          margin-bottom: 10px;
        }

        .bss-speaker-contact-inner .contact-email a {
          color: #ffc933 !important;
          font-size: 11px;
          text-decoration: none !important;
          word-break: normal ; white-space: nowrap ;
          overflow-wrap: normal ;
        }

        @media (max-width: 1100px) {
          .bss-speaker-contact-inner .contact-info-card {
            flex: 1 1 45%;
            max-width: 48%;
          }
        }

        @media (max-width: 650px) {
          .bss-speaker-contact-inner .contact-info-card {
            flex: 1 1 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
