import React, { useEffect } from 'react';

export default function AssociationEnquiry() {
  useEffect(() => {
    document.title = 'Association Enquiry | Bengaluru Skill Summit';
    window.scrollTo(0, 0);

    let intervalId = null;

    const renderHubspot = () => {
      const container = document.getElementById('hubspot-association-form');
      if (window.hbspt && container) {
        if (container.querySelector('form') || container.querySelector('.hbspt-form')) {
          return;
        }

        container.innerHTML = '';
        window.hbspt.forms.create({
          portalId: "2953901",
          formId: "59425875-6216-4cdd-b148-3d48c612888b",
          region: "na1",
          target: "#hubspot-association-form",
          onFormSubmitted: function() {
            window.location.href = "/thank-you";
          }
        });
      }
    };

    // Guardian: Ensure form stays in the container if mis-targeted
    const guardian = () => {
      const container = document.getElementById('hubspot-association-form');
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
          font-family: 'Oswald', 'Comfortaa', sans-serif !important;
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
          padding: 60px 10%;
          box-sizing: border-box;
          background-color: #ffffff;
          min-height: 450px;
        }

        .bss-association-form-container {
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
          border-radius: 4px !important;
          box-sizing: border-box !important;
          margin-bottom: 12px !important;
          transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
        }

        .hbspt-form input[type="text"]:focus,
        .hbspt-form input[type="email"]:focus,
        .hbspt-form input[type="tel"]:focus,
        .hbspt-form select:focus,
        .hbspt-form textarea:focus,
        .hs-form input[type="text"]:focus,
        .hs-form input[type="email"]:focus,
        .hs-form input[type="tel"]:focus,
        .hs-form select:focus,
        .hs-form textarea:focus {
          border-color: #ff6257 !important;
          outline: none !important;
          box-shadow: 0 0 8px rgba(255, 98, 87, 0.25) !important;
        }

        .hbspt-form .hs-button,
        .hs-form .hs-button,
        .hbspt-form input[type="submit"],
        .hs-form input[type="submit"] {
          background-color: #ff6257 !important;
          border: 2px solid #ff6257 !important;
          color: #ffffff !important;
          font-family: 'Comfortaa', sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          padding: 16px 40px !important;
          border-radius: 30px !important;
          cursor: pointer !important;
          display: inline-block !important;
          margin-top: 15px !important;
          letter-spacing: 1px !important;
          transition: all 0.3s ease !important;
        }

        .hbspt-form .hs-button:hover,
        .hs-form .hs-button:hover,
        .hbspt-form input[type="submit"]:hover,
        .hs-form input[type="submit"]:hover {
          background-color: #e5554b !important;
          border-color: #e5554b !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 98, 87, 0.35);
        }

        .hbspt-form .hs-form-field,
        .hs-form .hs-form-field {
          margin-bottom: 22px;
        }

        .hbspt-form ul.inputs-list,
        .hs-form ul.inputs-list {
          list-style: none !important;
          padding: 0 !important;
          margin: 10px 0 !important;
        }

        .hbspt-form ul.inputs-list li,
        .hs-form ul.inputs-list li {
          margin-bottom: 8px !important;
          display: flex !important;
          align-items: center !important;
        }

        .hbspt-form ul.inputs-list input[type="checkbox"],
        .hbspt-form ul.inputs-list input[type="radio"],
        .hs-form ul.inputs-list input[type="checkbox"],
        .hs-form ul.inputs-list input[type="radio"] {
          width: auto !important;
          margin-right: 10px !important;
          cursor: pointer !important;
        }

        .hbspt-form ul.inputs-list label,
        .hs-form ul.inputs-list label {
          font-size: 15px !important;
          text-transform: none !important;
          margin-bottom: 0 !important;
          cursor: pointer !important;
          font-weight: 400 !important;
        }

        .hs-error-msgs {
          list-style: none !important;
          padding: 0 !important;
          margin: 6px 0 0 0 !important;
          color: #ff3333 !important;
          font-size: 13px !important;
        }

        /* ---------------- CONTACT INFO SECTION ---------------- */
        .bss-association-contact-section {
          width: 100%;
          background: #fbf9f9;
          padding: 60px 8%;
          box-sizing: border-box;
          border-top: 1px solid #ececec;
        }

        .bss-association-contact-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
          max-width: 1250px;
          margin: 0 auto;
        }

        .contact-info-card {
          flex: 1 1 210px;
          max-width: 235px;
          background: #ffffff;
          padding: 28px 20px;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          border: 1px solid #eef0f3;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: left;
          box-sizing: border-box;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }

        .contact-title {
          font-family: 'Oswald', 'Comfortaa', sans-serif;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 700;
          color: #ff6257;
          margin-bottom: 16px;
        }

        .contact-name {
          font-size: 16px;
          font-weight: 700;
          color: #0e1220;
          margin-bottom: 4px;
        }

        .contact-designation {
          font-size: 13px;
          color: #666666;
          line-height: 1.4;
          margin-bottom: 14px;
        }

        .contact-email a {
          font-size: 13px;
          color: #00A8B2;
          text-decoration: none;
          word-break: break-all;
          transition: color 0.2s ease;
          font-weight: 600;
        }

        .contact-email a:hover {
          color: #ff6257;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .bss-association-form-section {
            padding: 40px 5%;
          }
          .bss-association-contact-section {
            padding: 40px 5%;
          }
          .contact-info-card {
            max-width: 100%;
            flex: 1 1 100%;
          }
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
      <section className="bss-association-contact-section">
        <div className="bss-association-contact-grid">
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
