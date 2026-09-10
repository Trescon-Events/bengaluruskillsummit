import React, { useEffect } from 'react';

export default function ThankYouGuestRegistration() {
  useEffect(() => {
    document.title = 'Thank You Guest Registration - Bengaluru Skill Summit';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bss-thank-you-guest-page">
      <style>{`
        .bss-thank-you-guest-page {
          font-family: 'Comfortaa', sans-serif;
          color: #0e1220;
          background-color: #ffffff;
        }

        .thank-you-section {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          padding: 80px 20px 60px 20px;
        }

        .thank-you-title {
          font-size: 36px;
          line-height: 1.25;
          font-weight: 700;
          color: #0e1220;
          margin-bottom: 30px;
        }

        .thank-you-desc {
          font-size: 22px;
          line-height: 1.4;
          color: #0e1220;
          margin-bottom: 24px;
        }

        .thank-you-regards {
          font-size: 22px;
          line-height: 1.5;
          color: #0e1220;
          margin-bottom: 35px;
          margin-top: 20px;
        }

        .thank-you-cta-btn {
          display: inline-block;
          border: 2px solid #ff6257;
          color: #0e1220;
          padding: 12px 30px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          transition: background-color 0.25s ease, color 0.25s ease;
        }

        .thank-you-cta-btn:hover {
          background-color: #ff6257;
          color: #ffffff;
        }

        /* ---------------- CONTACT CARDS SECTION (SCREENSHOT 2) ---------------- */
        #contact-info {
          position: relative;
          box-sizing: border-box;
          padding: 70px 20px 80px 20px;
          background: #525252 url('/wp-content/uploads/2025/08/footer-white-and-gray-bg.svg') center center no-repeat;
          background-size: cover;
        }

        #contact-info .contact-info-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          max-width: 1240px;
          margin: 0 auto;
        }

        #contact-info .contact-info-card {
          flex: 1 1 calc(20% - 16px);
          min-width: 210px;
          background-color: #525252;
          border-radius: 12px;
          padding: 26px 18px;
          box-sizing: border-box;
          text-align: left;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        #contact-info .contact-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        #contact-info .contact-title {
          font-size: 15px;
          line-height: 1.35;
          color: #eaeaea;
          margin-bottom: 28px;
          min-height: 42px;
          font-weight: 500;
        }

        #contact-info .contact-name {
          font-size: 14px;
          line-height: 1.2;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 6px;
        }

        #contact-info .contact-designation {
          font-size: 11px;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 12px;
          min-height: 28px;
        }

        #contact-info .contact-email a {
          font-size: 11.5px;
          line-height: 1.3;
          color: #ffc933;
          text-decoration: none;
          overflow-wrap: normal ;
          word-break: normal ; white-space: nowrap ;
          white-space: nowrap ;
          display: inline-block;
          font-weight: 500;
        }

        #contact-info .contact-email a:hover {
          text-decoration: underline;
        }

        /* ---------------- RESPONSIVE BREAKPOINTS ---------------- */
        @media (max-width: 1100px) {
          #contact-info .contact-info-card {
            flex: 1 1 calc(33.333% - 16px);
          }
        }

        @media (max-width: 768px) {
          .thank-you-section {
            padding: 50px 15px 40px 15px;
          }
          .thank-you-title {
            font-size: 26px;
          }
          .thank-you-desc,
          .thank-you-regards {
            font-size: 18px;
          }
          #contact-info .contact-info-card {
            flex: 1 1 calc(50% - 16px);
          }
        }

        @media (max-width: 600px) {
          #contact-info .contact-info-card {
            flex: 1 1 100%;
          }
        }
      `}</style>

      {/* Main Message Section */}
      <div className="thank-you-section">
        <h1 className="thank-you-title">
          Thank you for confirming your attendance for the Inaugural Ceremony of the Bengaluru Skill Summit 2025.
        </h1>
        <p className="thank-you-desc">
          We look forward to welcoming you.
        </p>
        <p className="thank-you-regards">
          Warm regards,<br />
          Team Bengaluru Skill Summit
        </p>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="thank-you-cta-btn"
            role="button"
            href="https://linktr.ee/bengaluruskillsummit"
          >
            EXPLORE MORE
          </a>
        </div>
      </div>

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
