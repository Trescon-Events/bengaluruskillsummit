import React, { useEffect } from 'react';

export default function KaushalyaAwardsRegistration() {
  useEffect(() => {
    document.title = 'Kaushalya Awards Registration - Bengaluru Skill Summit';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bss-awards-reg-page">
      {/* ================= HERO BANNER ================= */}
      <div id="Skill-Reg-Banner" className="bss-awards-reg-hero">
        <div className="bss-awards-reg-hero__container">
          <div className="bss-awards-reg-hero__card">
            <h1 className="bss-awards-reg-hero__title">
              KAUSHALYA KARNATAKA AWARDS 2025
            </h1>
            <p className="bss-awards-reg-hero__subtitle">
              Celebrating Excellence in Skills
            </p>
          </div>
        </div>
      </div>

      {/* ================= SIBFORMS REGISTRATION IFRAME ================= */}
      <div className="bss-awards-reg-form-section">
        <div className="bss-awards-reg-form-container">
          <iframe
            width="540"
            height="700"
            src="https://75ef9b9d.sibforms.com/serve/MUIFAHxmUY3MT64ZH2cNRuY8s2h0br9hS9o2907CCWIbtQItnifLoJv3V8tBXB1sPlQUMaY946KdtzWqeQ8nyn19F3ytSJdDvM6T2qSeGLb4e0g3OiKoB1Q21iQTX4Iv2gGP5lV3KumfmhpPbIrO2WTaycI1HuRm4k-rjZd5-gmSJIuaSx-ambpVj9lILt5zEEXhVWO9pu366IxG"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '100%',
              border: 'none',
              minHeight: '700px',
            }}
            title="Kaushalya Karnataka Awards 2025 Registration"
          />
        </div>
      </div>

      {/* ================= CONTACT QUERY CARDS ================= */}
      <div id="contact-info" className="bss-awards-contact-section">
        <div className="bss-awards-contact-inner">
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
        .bss-awards-reg-page {
          width: 100%;
          min-height: 100vh;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
        }

        /* ---------------- HERO BANNER ---------------- */
        .bss-awards-reg-hero {
          position: relative;
          width: 100%;
          background-image: url('https://bengaluruskillsummit.com/wp-content/uploads/2025/09/banner-skillathon-05.png');
          background-position: left top;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 20px;
          box-sizing: border-box;
        }

        .bss-awards-reg-hero__container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }

        .bss-awards-reg-hero__card {
          width: 100%;
          max-width: 860px;
          background-color: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          border-radius: 8px;
          padding: 35px 30px;
          text-align: center;
          box-sizing: border-box;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .bss-awards-reg-hero__title {
          font-family: 'Oswald', 'Comfortaa', sans-serif !important;
          font-size: 55px !important;
          font-weight: 700 !important;
          color: #106cff !important;
          text-transform: uppercase !important;
          word-spacing: 8px !important;
          letter-spacing: 1.5px !important;
          line-height: 1.1 !important;
          text-align: center !important;
          margin: 0 0 12px 0 !important;
        }

        .bss-awards-reg-hero__subtitle {
          font-family: 'Comfortaa', sans-serif !important;
          font-size: 28px !important;
          font-weight: 600 !important;
          color: #0e1220 !important;
          line-height: 1.2 !important;
          text-align: center !important;
          margin: 0 !important;
        }

        @media (max-width: 991px) {
          .bss-awards-reg-hero {
            padding: 80px 20px;
          }
          .bss-awards-reg-hero__title {
            font-size: 38px !important;
            word-spacing: 5px !important;
          }
          .bss-awards-reg-hero__subtitle {
            font-size: 22px !important;
          }
        }

        @media (max-width: 767px) {
          .bss-awards-reg-hero {
            padding: 60px 15px;
          }
          .bss-awards-reg-hero__card {
            padding: 25px 15px;
          }
          .bss-awards-reg-hero__title {
            font-size: 26px !important;
            word-spacing: 3px !important;
          }
          .bss-awards-reg-hero__subtitle {
            font-size: 18px !important;
          }
        }

        /* ---------------- FORM SECTION ---------------- */
        .bss-awards-reg-form-section {
          width: 100%;
          padding: 60px 20px 80px;
          box-sizing: border-box;
          background-color: #ffffff;
        }

        .bss-awards-reg-form-container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        @media (max-width: 767px) {
          .bss-awards-reg-form-section {
            padding: 40px 10px 50px;
          }
        }

        /* ---------------- CONTACT INFO SECTION ---------------- */
        .bss-awards-contact-section {
          width: 100%;
          background-image: url("https://bengaluruskillsummit.com/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 80px 20px 40px;
          box-sizing: border-box;
        }

        .bss-awards-contact-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          box-sizing: border-box;
        }

        .bss-awards-contact-inner .contact-info-card {
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

        .bss-awards-contact-inner .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .bss-awards-contact-inner .contact-title {
          color: #eaeaea;
          font-size: 15px;
          line-height: 1.3;
          margin-bottom: 25px;
          font-weight: 700;
        }

        .bss-awards-contact-inner .contact-name {
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .bss-awards-contact-inner .contact-designation {
          color: rgba(255,255,255,0.8);
          font-size: 10px;
          margin-bottom: 10px;
        }

        .bss-awards-contact-inner .contact-email a {
          color: #ffc933 !important;
          font-size: 11px;
          text-decoration: none !important;
          word-break: break-all;
          overflow-wrap: anywhere;
        }

        @media (max-width: 1100px) {
          .bss-awards-contact-inner .contact-info-card {
            flex: 1 1 45%;
            max-width: 48%;
          }
        }

        @media (max-width: 650px) {
          .bss-awards-contact-inner .contact-info-card {
            flex: 1 1 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
