import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Partners2026() {
  useEffect(() => {
    document.title = 'Partners | Bengaluru Skill Summit 2026';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="partners-2026-page">
      <style>{`
        .partners-2026-page {
          background: #ffffff;
          color: #333333;
          font-family: 'Comfortaa', sans-serif;
          width: 100%;
          overflow-x: hidden;
        }

        .partners-2026-page *,
        .partners-2026-page *::before,
        .partners-2026-page *::after {
          box-sizing: border-box;
        }

        /* Banner */
        #Partners-2026-Banner {
          position: relative;
          background: url('/bengaluruskillsummit/wp-content/uploads/2025/09/banner-skillathon-05.webp') center center / cover no-repeat;
          padding: 100px 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .partners-banner-strip {
          background-color: rgba(255, 255, 255, 0.88);
          padding: 28px 45px;
          border-radius: 8px;
          max-width: 760px;
          width: 100%;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .partners-banner-heading h1 {
          color: #106cff;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.15;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }

        @media (max-width: 768px) {
          .partners-banner-heading h1 {
            font-size: 34px;
          }
          .partners-banner-strip {
            padding: 20px 24px;
          }
        }

        /* Container */
        .bss-partners-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px 80px;
          text-align: center;
        }

        .partners-empty-state {
          padding: 50px 20px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px dashed #cbd5e1;
          margin: 20px auto 40px;
          max-width: 800px;
        }

        .partners-empty-title {
          font-size: 26px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 14px;
        }

        .partners-empty-desc {
          font-size: 16px;
          color: #64748b;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 28px;
        }

        .partner-cta-btn {
          display: inline-block;
          background-color: #ff6257;
          color: #ffffff;
          padding: 14px 34px;
          border-radius: 25px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: background-color 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 14px rgba(255, 98, 87, 0.35);
        }

        .partner-cta-btn:hover {
          background-color: #e5554b;
          transform: translateY(-2px);
          color: #ffffff;
        }
      `}</style>

      {/* Hero Banner */}
      <section id="Partners-2026-Banner">
        <div className="partners-banner-strip">
          <div className="partners-banner-heading">
            <h1>2026 Edition PARTNERS</h1>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="bss-partners-wrapper">
        <div className="partners-empty-state">
          <div className="partners-empty-title">Partnership Announcements Coming Soon</div>
          <p className="partners-empty-desc">
            We are actively collaborating with leading government bodies, industry leaders, global innovators, and academic institutions for the Bengaluru Skill Summit 2026.
          </p>
          <Link to="/sponsor-now" className="partner-cta-btn">
            Become a Partner in 2026
          </Link>
        </div>
      </main>
    </div>
  );
}
