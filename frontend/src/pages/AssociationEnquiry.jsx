import React, { useEffect } from 'react';

export default function AssociationEnquiry() {
  useEffect(() => {
    document.title = 'Association Enquiry | Bengaluru Skill Summit';
    window.scrollTo(0, 0);

    let isMounted = true;
    let timer = null;
    let attempts = 0;

    const renderHubspot = () => {
      const container = document.getElementById('hubspot-association-form');
      if (!container || !isMounted) return false;

      // If form already exists inside container, we're done
      if (container.querySelector('form') || container.querySelector('.hbspt-form') || container.querySelector('iframe')) {
        return true;
      }

      if (window.hbspt && window.hbspt.forms && typeof window.hbspt.forms.create === 'function') {
        container.innerHTML = '';
        try {
          window.hbspt.forms.create({
            portalId: "2953901",
            formId: "59425875-6216-4cdd-b148-3d48c612888b",
            region: "na1",
            target: "#hubspot-association-form",
            onFormSubmitted: function() {
              window.location.href = "/thank-you";
            }
          });
          return true;
        } catch (err) {
          console.error("HubSpot form creation error:", err);
        }
      }
      return false;
    };

    // Ensure the script tag is present in the DOM
    let script = document.querySelector('script[src*="hsforms.net"]');
    if (!script) {
      script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = () => {
        if (isMounted) renderHubspot();
      };
      document.body.appendChild(script);
    }

    // Poll until hbspt is loaded and form is created (up to 30 attempts = 9s)
    if (!renderHubspot()) {
      timer = setInterval(() => {
        attempts++;
        if (renderHubspot() || attempts >= 30) {
          clearInterval(timer);
        }
      }, 300);
    }

    return () => {
      isMounted = false;
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <div className="bss-association-enquiry-page" style={{ fontFamily: '"Comfortaa", sans-serif', color: '#0e1220' }}>
      <style>{`
        /* ---------------- HERO BANNER ---------------- */
        .bss-association-hero {
          width: 100%;
          min-height: 380px;
          background-image: url('/bengaluruskillsummit/wp-content/uploads/2025/09/agenda-banner.webp');
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

        .bss-association-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .bss-association-hero__container {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .bss-association-hero__title {
          font-family: 'Jost', 'Joost', sans-serif !important;
          font-size: 60px !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          word-spacing: 10px !important;
          letter-spacing: 2px !important;
          line-height: 1.15 !important;
          text-align: center !important;
          margin: 0 !important;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5) !important;
        }

        @media (max-width: 991px) {
          .bss-association-hero {
            min-height: 300px;
            padding: 100px 20px;
          }
          .bss-association-hero__title {
            font-size: 40px !important;
            word-spacing: 6px !important;
          }
        }

        @media (max-width: 767px) {
          .bss-association-hero {
            min-height: 240px;
            padding: 60px 15px;
          }
          .bss-association-hero__title {
            font-size: 30px !important;
            word-spacing: 4px !important;
          }
        }

        /* ---------------- HUBSPOT FORM SECTION ---------------- */
        .bss-association-form-section {
          width: 100%;
          padding: 60px 10% 80px;
          box-sizing: border-box;
          background-color: #ffffff;
          min-height: 500px;
        }

        .bss-association-form-container {
          max-width: 1050px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .hbspt-form,
        .hs-form {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 auto !important;
          font-family: 'Jost', 'Comfortaa', sans-serif !important;
        }

        .hs-form fieldset,
        .hbspt-form fieldset {
          max-width: 100% !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 0 20px 0 !important;
        }

        .hs-form .form-columns-1 {
          width: 100% !important;
        }

        .hs-form .form-columns-2,
        .hbspt-form fieldset.form-columns-2 {
          display: flex !important;
          gap: 24px !important;
          width: 100% !important;
        }

        .hs-form .form-columns-2 > .hs-form-field,
        .hbspt-form .form-columns-2 > .hs-form-field,
        .hs-form .form-columns-2 > div {
          flex: 1 1 50% !important;
          width: 50% !important;
          min-width: 0 !important;
          float: none !important;
        }

        .hs-form .hs-form-field {
          margin-bottom: 20px !important;
          width: 100% !important;
        }

        /* Labels */
        .hbspt-form label,
        .hs-form label {
          display: block !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          color: #0e1220 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          margin-bottom: 8px !important;
          line-height: 1.4 !important;
          font-family: 'Jost', 'Comfortaa', sans-serif !important;
        }

        .hs-form label .hs-form-required,
        .hs-form label span.hs-form-required,
        span.hs-form-required {
          color: #ff0000 !important;
          margin-left: 2px !important;
        }

        /* Inputs & Selects & Textareas */
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
          height: 50px !important;
          background: #ffffff !important;
          border: 1px solid #00A8B2 !important;
          border-radius: 4px !important;
          color: #333333 !important;
          font-size: 15px !important;
          font-family: 'Comfortaa', 'Jost', sans-serif !important;
          padding: 12px 16px !important;
          box-sizing: border-box !important;
          outline: none !important;
          margin-bottom: 0 !important;
          transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
        }

        .hbspt-form textarea,
        .hs-form textarea {
          height: 120px !important;
          min-height: 120px !important;
          resize: vertical !important;
          line-height: 1.5 !important;
        }

        .hbspt-form select,
        .hs-form select {
          cursor: pointer !important;
          padding-right: 32px !important;
        }

        .hbspt-form input:focus,
        .hs-form input:focus,
        .hs-form select:focus,
        .hs-form textarea:focus {
          border-color: #ff6257 !important;
          box-shadow: 0 0 8px rgba(255, 98, 87, 0.3) !important;
        }

        /* International Phone Field Alignment */
        .hs-fieldtype-intl-phone .hs-input,
        .hs-form-field.hs-fieldtype-intl-phone .input > .hs-input {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 10px !important;
        }

        .hs-fieldtype-intl-phone select.hs-input,
        .hs-fieldtype-intl-phone-country {
          width: 135px !important;
          min-width: 120px !important;
          max-width: 145px !important;
          flex: 0 0 135px !important;
          height: 50px !important;
          padding: 10px 12px !important;
          margin-bottom: 0 !important;
        }

        .hs-fieldtype-intl-phone input[type="tel"].hs-input {
          flex: 1 1 auto !important;
          width: auto !important;
          height: 50px !important;
          margin-bottom: 0 !important;
        }

        /* Checkbox & Radio - Remove ugly bullet points completely */
        .hbspt-form ul.inputs-list,
        .hs-form ul.inputs-list,
        .hbspt-form ul.inputs-list[class],
        .hs-form ul.inputs-list[class],
        .bss-association-form-section ul,
        .bss-association-form-section ul[class] {
          list-style: none !important;
          list-style-type: none !important;
          padding: 0 !important;
          padding-left: 0 !important;
          margin: 10px 0 !important;
          display: flex !important;
          flex-wrap: wrap !important;
          gap: 10px 24px !important;
        }

        .hbspt-form ul.inputs-list li,
        .hs-form ul.inputs-list li,
        .hbspt-form ul.inputs-list[class] li,
        .hs-form ul.inputs-list[class] li,
        .bss-association-form-section ul li,
        .bss-association-form-section ul[class] li {
          list-style: none !important;
          list-style-type: none !important;
          padding: 0 !important;
          margin: 0 0 6px 0 !important;
          display: flex !important;
          align-items: flex-start !important;
          flex: 0 0 calc(50% - 12px) !important;
          box-sizing: border-box !important;
        }

        .hbspt-form ul.inputs-list li::before,
        .hs-form ul.inputs-list li::before,
        .bss-association-form-section ul li::before {
          content: none !important;
          display: none !important;
        }

        .hbspt-form ul.inputs-list input[type="checkbox"],
        .hbspt-form ul.inputs-list input[type="radio"],
        .hs-form ul.inputs-list input[type="checkbox"],
        .hs-form ul.inputs-list input[type="radio"] {
          width: 18px !important;
          height: 18px !important;
          min-width: 18px !important;
          max-width: 18px !important;
          margin: 3px 10px 0 0 !important;
          padding: 0 !important;
          cursor: pointer !important;
          flex-shrink: 0 !important;
          accent-color: #ff6257 !important;
        }

        .hbspt-form ul.inputs-list label,
        .hs-form ul.inputs-list label {
          font-size: 14px !important;
          font-weight: 500 !important;
          text-transform: none !important;
          color: #333333 !important;
          line-height: 1.5 !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: flex-start !important;
          margin-bottom: 0 !important;
          font-family: 'Comfortaa', 'Jost', sans-serif !important;
        }

        /* Consent / Legal Section Full-Width (No bullets) */
        .legal-consent-container ul.inputs-list li,
        .hs-dependent-field ul.inputs-list li,
        .hs-form-booleancheckbox ul.inputs-list li {
          flex: 0 0 100% !important;
          width: 100% !important;
        }

        .legal-consent-container p {
          font-size: 13px !important;
          line-height: 1.6 !important;
          color: #666666 !important;
          font-style: italic !important;
          margin: 12px 0 !important;
        }

        /* Error Messages */
        .hs-error-msgs {
          list-style: none !important;
          padding: 0 !important;
          margin: 6px 0 0 0 !important;
          color: #ff3333 !important;
          font-size: 13px !important;
        }

        /* Submit Button */
        .hbspt-form .actions,
        .hs-form .actions {
          padding-top: 25px !important;
          text-align: center !important;
        }

        .hbspt-form .hs-button,
        .hs-form .hs-button,
        .hbspt-form input[type="submit"],
        .hs-form input[type="submit"],
        .hs-form .hs-button.primary {
          background-color: #ff5252 !important;
          border: none !important;
          color: #ffffff !important;
          font-family: 'Jost', 'Joost', sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 1.5px !important;
          padding: 16px 50px !important;
          border-radius: 6px !important;
          cursor: pointer !important;
          display: inline-block !important;
          box-shadow: 0 4px 15px rgba(255, 82, 82, 0.4) !important;
          transition: all 0.3s ease !important;
        }

        .hbspt-form .hs-button:hover,
        .hs-form .hs-button:hover,
        .hbspt-form input[type="submit"]:hover,
        .hs-form input[type="submit"]:hover,
        .hs-form .hs-button.primary:hover {
          background-color: #e04545 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(255, 82, 82, 0.5) !important;
        }

        @media (max-width: 768px) {
          .bss-association-form-section {
            padding: 40px 5% 50px !important;
          }
          .hs-form .form-columns-2,
          .hbspt-form fieldset.form-columns-2 {
            flex-direction: column !important;
            gap: 0 !important;
          }
          .hs-form .form-columns-2 > .hs-form-field,
          .hbspt-form .form-columns-2 > .hs-form-field,
          .hs-form .form-columns-2 > div {
            flex: 1 1 100% !important;
            width: 100% !important;
          }
          .hbspt-form ul.inputs-list li,
          .hs-form ul.inputs-list li {
            flex: 0 0 100% !important;
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
          background: #525252 url('/bengaluruskillsummit/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg') center center no-repeat;
          background-size: cover;
        }

        #contact-info .contact-info-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          max-width: 1440px;
          margin: 0 auto;
        }

        #contact-info .contact-info-card {
          flex: 1 1 calc(20% - 15px);
          min-width: 240px;
          background-color: #525252;
          border-radius: 10px;
          padding: 25px 14px;
          box-sizing: border-box;
          text-align: left;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        #contact-info .contact-title {
          font-family: 'Jost', 'Joost', sans-serif !important;
          font-size: 15px;
          line-height: 1.3;
          color: #eaeaea;
          margin-bottom: 10px;
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
          overflow-wrap: normal;
          word-break: normal;
          white-space: nowrap;
          display: inline-block;
        }

        #contact-info .contact-email a:hover {
          text-decoration: none !important;
          color: #ffd766 !important;
        }
      `}</style>

      {/* Hero Banner */}
      <section className="bss-association-hero">
        <div className="bss-association-hero__container">
          <h1 className="bss-association-hero__title">ASSOCIATION ENQUIRY</h1>
        </div>
      </section>

      {/* HubSpot Form Section */}
      <section className="bss-association-form-section">
        <div className="bss-association-form-container">
          <div id="hubspot-association-form"></div>
        </div>
      </section>

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
