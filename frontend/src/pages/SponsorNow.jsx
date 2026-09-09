import React, { useEffect } from 'react';

export default function SponsorNow() {
  useEffect(() => {
    document.title = 'Sponsor Bengaluru Skill Summit 2025 | Partner in India’s Skill Revolution';
    window.scrollTo(0, 0);

    let intervalId = null;

    const renderHubspot = () => {
      const container = document.getElementById('hubspot-sponsor-form');
      if (window.hbspt && container) {
        if (container.querySelector('form') || container.querySelector('.hbspt-form')) {
          return;
        }

        container.innerHTML = '';
        window.hbspt.forms.create({
          portalId: "2953901",
          formId: "6fed7aff-c103-4f0f-bcdf-44c94020e81d",
          region: "na1",
          target: "#hubspot-sponsor-form",
          onFormSubmitted: function() {
            window.location.href = "/thank-you";
          }
        });
      }
    };

    // Guardian: Ensure form stays in the sponsor container if mis-targeted
    const guardian = () => {
      const container = document.getElementById('hubspot-sponsor-form');
      if (!container) return;
      const misplacedForms = document.querySelectorAll('body > .hbspt-form, body > div > .hbspt-form');
      misplacedForms.forEach(form => {
        if (!container.contains(form)) {
          container.appendChild(form);
        }
      });
    };

    if (window.hbspt) {
      renderHubspot();
    } else {
      const existingScript = document.querySelector('script[src*="hsforms.net"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/embed/v2.js';
        script.charset = 'utf-8';
        script.type = 'text/javascript';
        script.async = true;
        script.onload = renderHubspot;
        document.body.appendChild(script);
      } else {
        existingScript.addEventListener('load', renderHubspot);
      }
    }

    intervalId = setInterval(guardian, 500);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="bss-sponsor-page" style={{ fontFamily: '"Comfortaa", sans-serif', color: '#0e1220' }}>
      <style>{`
        /* ---------------- HERO BANNER ---------------- */
        .bss-sponsor-hero {
          width: 100%;
          min-height: 380px;
          background-image: url('/wp-content/uploads/2025/09/agenda-banner.png');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 150px 20px;
          box-sizing: border-box;
          text-align: center;
          position: relative;
        }

        .bss-sponsor-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .bss-sponsor-hero__container {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .bss-sponsor-hero__title {
          font-family: 'Oswald', 'Comfortaa', sans-serif !important;
          font-size: 60px !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          word-spacing: 10px !important;
          letter-spacing: 2px !important;
          line-height: 1.15 !important;
          text-align: center !important;
          margin: 0 !important;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5) !important;
        }

        @media (max-width: 991px) {
          .bss-sponsor-hero {
            min-height: 300px;
            padding: 100px 20px;
          }
          .bss-sponsor-hero__title {
            font-size: 40px !important;
            word-spacing: 6px !important;
          }
        }

        @media (max-width: 767px) {
          .bss-sponsor-hero {
            min-height: 240px;
            padding: 60px 15px;
          }
          .bss-sponsor-hero__title {
            font-size: 30px !important;
            word-spacing: 4px !important;
          }
        }

        /* ---------------- HUBSPOT FORM SECTION ---------------- */
        .bss-sponsor-form-section {
          width: 100%;
          padding: 60px 10%;
          box-sizing: border-box;
          background-color: #ffffff;
          min-height: 450px;
        }

        .bss-sponsor-form-container {
          max-width: 1050px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* HubSpot Native Form Styles matching live site */
        .hbspt-form,
        .hs-form {
          width: 100% !important;
          max-width: 100% !important;
          margin: 20px auto;
          font-family: 'Comfortaa', sans-serif;
          font-size: 14px;
          color: #000000;
        }

        .hbspt-form label,
        .hs-form label {
          font-weight: 500;
          font-size: 18px;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
          color: #000000;
          line-height: 150%;
        }

        span.hs-form-required,
        .hs-form label .hs-form-required {
          color: #FF0000 !important;
        }

        .hbspt-form input[type="text"],
        .hbspt-form input[type="email"],
        .hbspt-form input[type="tel"],
        .hbspt-form select,
        .hbspt-form textarea,
        .hs-form input[type="text"],
        .hs-form input[type="email"],
        .hs-form input[type="tel"],
        .hs-form select,
        .hs-form textarea {
          width: 100% !important;
          background: transparent !important;
          border: 1px solid #00A8B2 !important;
          color: #616161 !important;
          font-family: 'Comfortaa', sans-serif !important;
          font-size: 17px !important;
          font-weight: 300 !important;
          line-height: 100% !important;
          padding: 16px 18px !important;
          border-radius: 0px !important;
          box-sizing: border-box !important;
          margin-bottom: 20px !important;
          outline: none !important;
        }

        .hbspt-form textarea,
        .hs-form textarea {
          min-height: 120px !important;
          line-height: 1.4 !important;
        }

        .hbspt-form select,
        .hs-form select {
          cursor: pointer;
          padding-right: 30px !important;
        }

        .hbspt-form input:focus,
        .hs-form input:focus,
        .hs-form select:focus,
        .hs-form textarea:focus {
          border-color: #106cff !important;
          box-shadow: 0 0 6px rgba(16, 108, 255, 0.3) !important;
        }

        /* Checkbox */
        .hbspt-form input[type="checkbox"],
        .hs-form input[type="checkbox"] {
          margin-right: 10px;
          transform: scale(1.2);
          cursor: pointer;
        }

        .hbspt-form input[type="checkbox"] + label,
        .hs-form input[type="checkbox"] + label {
          font-size: 14px;
          font-weight: normal;
          text-transform: none;
          display: inline;
        }

        /* Submit Button */
        .hbspt-form .actions,
        .hs-form .actions {
          padding-top: 30px;
          text-align: center;
        }

        .hbspt-form input[type="submit"],
        .hs-form input[type="submit"],
        .hs-form .hs-button.primary {
          background-color: #ff6257 !important;
          color: #ffffff !important;
          font-family: 'Comfortaa', sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
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

        .hbspt-form input[type="submit"]:hover,
        .hs-form input[type="submit"]:hover,
        .hs-form .hs-button.primary:hover {
          background-color: #f74d41 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 18px rgba(255, 98, 87, 0.35) !important;
        }

        .hbspt-form fieldset.form-columns-2,
        .hs-form .form-columns-2 {
          display: flex !important;
          gap: 20px !important;
          max-width: 100% !important;
          margin-bottom: 20px !important;
          border: none !important;
          padding: 0 !important;
        }

        .hs-form .form-columns-2 .hs-form-field {
          flex: 1 1 50% !important;
          width: 50% !important;
        }

        @media (max-width: 768px) {
          .bss-sponsor-form-section {
            padding: 40px 5% 50px;
          }
          .hs-form .form-columns-2 {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .hs-form .form-columns-2 .hs-form-field {
            width: 100% !important;
          }
        }

        /* ---------------- CONTACT INFO SECTION ---------------- */
        #contact-info {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          box-sizing: border-box;
          padding: 60px 20px;
          background: #525252 url('/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg') center center no-repeat;
          background-size: cover;
        }

        #contact-info .contact-info-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          max-width: 1200px;
          margin: 0 auto;
        }

        #contact-info .contact-info-card {
          flex: 1 1 calc(20% - 15px);
          min-width: 200px;
          background-color: #525252;
          border-radius: 10px;
          padding: 25px 14px;
          box-sizing: border-box;
          text-align: left;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        #contact-info .contact-title {
          font-size: 15px;
          line-height: 1.3;
          color: #eaeaea;
          margin-bottom: 25px;
          min-height: 40px;
          font-weight: 500;
        }

        #contact-info .contact-name {
          font-size: 13px;
          line-height: 1;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 5px;
        }

        #contact-info .contact-designation {
          font-size: 10px;
          line-height: 1.2;
          color: rgba(255,255,255,0.8);
          margin-bottom: 12px;
          min-height: 24px;
        }

        #contact-info .contact-email a {
          font-size: 11px;
          line-height: 1.3;
          color: #ffc933;
          text-decoration: none;
          overflow-wrap: anywhere;
          word-break: break-all;
          white-space: normal;
          display: inline-block;
        }

        #contact-info .contact-email a:hover {
          text-decoration: underline;
        }
      `}</style>

      {/* Hero Banner */}
      <section className="bss-sponsor-hero">
        <div className="bss-sponsor-hero__container">
          <h1 className="bss-sponsor-hero__title">
            BECOME A SPONSOR
          </h1>
        </div>
      </section>

      {/* HubSpot Form Section */}
      <section className="bss-sponsor-form-section">
        <div className="bss-sponsor-form-container">
          <div id="hubspot-sponsor-form"></div>
        </div>
      </section>

      {/* Contact Info */}
            {/* Contact Cards Section */}
      <section id="contact-info">
        <div className="contact-info-wrap">
          {/* Card 1: Sponsor and Exhibitor Queries */}
          <div className="contact-info-card">
            <div className="contact-title">
              Sponsor and Exhibitor<br />Queries
            </div>
            <div>
              <div className="contact-name">Vinay Martin</div>
              <div className="contact-designation">Commercial Director – India &amp; Middle East</div>
              <div className="contact-email">
                <a href="mailto:vinay@bengaluruskillsummit.com">vinay@bengaluruskillsummit.com</a>
              </div>
            </div>
          </div>

          {/* Card 2: Speaking and Partner Queries */}
          <div className="contact-info-card">
            <div className="contact-title">
              Speaking and Partner<br />Queries
            </div>
            <div>
              <div className="contact-name">Simran Arora</div>
              <div className="contact-designation">Sr Conference Producer</div>
              <div className="contact-email">
                <a href="mailto:speaker@bengaluruskillsummit.com">speaker@bengaluruskillsummit.com</a>
              </div>
            </div>
          </div>

          {/* Card 3: Marketing and Media Queries */}
          <div className="contact-info-card">
            <div className="contact-title">
              Marketing and Media<br />Queries
            </div>
            <div>
              <div className="contact-name">Thulasi S</div>
              <div className="contact-designation">Marketing Director</div>
              <div className="contact-email">
                <a href="mailto:marketing@bengaluruskillsummit.com">marketing@bengaluruskillsummit.com</a>
              </div>
            </div>
          </div>

          {/* Card 4: Delegate Registration Queries */}
          <div className="contact-info-card">
            <div className="contact-title">
              Delegate Registration<br />Queries
            </div>
            <div>
              <div className="contact-name">Suraj Shetty</div>
              <div className="contact-designation">Director – Delegate Acquisition</div>
              <div className="contact-email">
                <a href="mailto:delegate@bengaluruskillsummit.com">delegate@bengaluruskillsummit.com</a>
              </div>
            </div>
          </div>

          {/* Card 5: Partnership Queries */}
          <div className="contact-info-card">
            <div className="contact-title">
              Partnership<br />Queries
            </div>
            <div>
              <div className="contact-name">Praveen Kumar</div>
              <div className="contact-designation">Partnership Director</div>
              <div className="contact-email">
                <a href="mailto:partnerships@bengaluruskillsummit.com">partnerships@bengaluruskillsummit.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
