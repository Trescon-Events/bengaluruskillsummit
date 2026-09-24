import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { STATIC_PARTNERS_DATA_2026 } from '../data/partners2026Fallback';

function getAllCategories(data) {
  let cats = [];
  if (data && Array.isArray(data.categorized)) {
    cats = data.categorized.filter((cat) => {
      const isMedia = (cat.category_name || '').toLowerCase().includes('media');
      return !isMedia && Array.isArray(cat.entity) && cat.entity.length > 0;
    });
  }
  if (data && Array.isArray(data.uncategorized) && data.uncategorized.length > 0) {
    cats.push({
      category_name: 'Partners',
      entity: data.uncategorized
    });
  }
  return cats;
}

export default function Partners2026() {
  const [categories, setCategories] = useState(() => getAllCategories(STATIC_PARTNERS_DATA_2026));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'Partners 2026 | Bengaluru Skill Summit';
    window.scrollTo(0, 0);

    let isMounted = true;
    const API_URL = 'https://api.konfhub.com/event/public/bengaluru-skill-summit-2026/entity/2';

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`API status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        const cats = getAllCategories(data);
        if (cats.length > 0) {
          setCategories(cats);
        }
        setLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        console.warn('KonfHub API warning, using static fallback:', err);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="partners-2026-page">
      <style>{`
        /* ==========================================
           Global & Container Settings
           ========================================== */
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

        /* Subnav switcher */
        .bss-partner-tabs {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin: 35px auto 10px auto;
          max-width: 800px;
          padding: 0 15px;
        }

        .bss-partner-tab {
          display: inline-block;
          padding: 10px 22px;
          border-radius: 30px;
          font-family: 'Comfortaa', sans-serif;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          border: 1.5px solid #106cff;
          color: #106cff;
          background: #ffffff;
        }

        .bss-partner-tab.active {
          background: #106cff;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(16, 108, 255, 0.3);
        }

        .bss-partner-tab:hover:not(.active) {
          background: #f0f6ff;
          transform: translateY(-2px);
        }

        /* Container */
        .bss-partners-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px 15px 70px 15px;
          box-sizing: border-box;
        }

        /* Category Section */
        .bss-category-section {
          margin-bottom: 60px;
        }

        .bss-category-section:last-child {
          margin-bottom: 20px;
        }

        /* Category Heading */
        .bss-category-heading {
          font-family: 'Bebas Neue', 'Comfortaa', sans-serif !important;
          text-align: center;
          font-size: 32px !important;
          font-weight: 400 !important;
          color: #111111;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 auto 30px auto !important;
          padding: 0 !important;
          line-height: 1.2;
        }

        /* 3-Column Logo Grid */
        .bss-logo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          align-items: stretch;
        }

        @media (max-width: 992px) {
          .bss-logo-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .bss-category-heading {
            font-size: 28px !important;
          }
        }

        @media (max-width: 576px) {
          .bss-logo-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .bss-category-heading {
            font-size: 24px !important;
          }
        }

        /* Logo Card */
        .bss-logo-card {
          background: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 20px;
          text-decoration: none !important;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .bss-logo-card {
            height: 130px;
            padding: 10px 16px;
          }
        }

        .bss-logo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);
          border-color: #e0e0e0;
        }

        /* Logo Image */
        .bss-logo-img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0 auto;
          transition: transform 0.25s ease;
        }

        .bss-logo-card:hover .bss-logo-img {
          transform: scale(1.05);
        }

        /* ========================================================
           Ecosystem Partners Enhancement (Counters canvas whitespace)
           ======================================================== */
        .bss-category-ecosystem .bss-logo-card {
          height: 165px;
          padding: 10px 14px;
        }

        .bss-category-ecosystem .bss-logo-img {
          max-width: 90%;
          max-height: 88%;
          transform: scale(1.35);
          transform-origin: center center;
        }

        .bss-category-ecosystem .bss-logo-card:hover .bss-logo-img {
          transform: scale(1.42);
        }

        @media (max-width: 768px) {
          .bss-category-ecosystem .bss-logo-card {
            height: 135px;
          }
          .bss-category-ecosystem .bss-logo-img {
            transform: scale(1.25);
          }
          .bss-category-ecosystem .bss-logo-card:hover .bss-logo-img {
            transform: scale(1.32);
          }
        }

        .bss-logo-fallback {
          font-family: 'Comfortaa', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #475569;
          text-align: center;
          text-transform: uppercase;
        }

        /* Loading State */
        .bss-loading-wrap {
          text-align: center;
          padding: 70px 20px;
          font-size: 16px;
          color: #64748b;
          font-family: 'Comfortaa', sans-serif;
        }

        .bss-spinner {
          display: inline-block;
          width: 36px;
          height: 36px;
          border: 3px solid #e2e8f0;
          border-top-color: #106cff;
          border-radius: 50%;
          animation: bss-spin 0.8s linear infinite;
          margin-bottom: 14px;
        }

        @keyframes bss-spin {
          to { transform: rotate(360deg); }
        }

        /* Bottom Partner CTA Box */
        .bss-partner-bottom-cta {
          margin-top: 50px;
          padding: 40px 25px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          text-align: center;
        }

        .bss-partner-bottom-cta h3 {
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 10px 0;
        }

        .bss-partner-bottom-cta p {
          font-size: 15px;
          color: #64748b;
          margin: 0 0 24px 0;
          line-height: 1.6;
        }

        .bss-partner-bottom-btn {
          display: inline-block;
          background-color: #ff6257;
          color: #ffffff !important;
          padding: 13px 30px;
          border-radius: 25px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(255, 98, 87, 0.35);
        }

        .bss-partner-bottom-btn:hover {
          background-color: #e5554b;
          transform: translateY(-2px);
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

      {/* Quick Navigation Tabs */}
      <div className="bss-partner-tabs">
        <Link to="/partners-2026" className="bss-partner-tab active">
          All Partners
        </Link>
        <Link to="/ecosystem-partners-2026" className="bss-partner-tab">
          Ecosystem Partners
        </Link>
        <Link to="/media-partners-2026" className="bss-partner-tab">
          Media Partners
        </Link>
      </div>

      {/* Main Partners Wrapper */}
      <div className="bss-partners-wrapper">
        {loading && (
          <div className="bss-loading-wrap">
            <div className="bss-spinner" />
            <div>Loading partners...</div>
          </div>
        )}

        {error && (
          <div style={{ color: '#ef4444', textAlign: 'center', padding: '50px 20px', fontFamily: 'Comfortaa, sans-serif' }}>
            <h3>{error}</h3>
          </div>
        )}

        {!loading && !error && categories.length === 0 && (
          <div style={{ textAlign: 'center', padding: '50px 20px', color: '#64748b' }}>
            <h3>No partner data found.</h3>
          </div>
        )}

        {!loading && !error && categories.length > 0 && (
          <div id="bss-sections-container">
            {categories.map((cat, cIdx) => {
              const catName = cat.category_name || 'Partners';
              const isEcosystem = (cat.category_name || '').toLowerCase().includes('ecosystem');
              const sectionClass = `bss-category-section ${isEcosystem ? 'bss-category-ecosystem' : ''}`;

              return (
                <div key={cIdx} className={sectionClass}>
                  <h2 className="bss-category-heading">{catName}</h2>
                  <div className="bss-logo-grid">
                    {cat.entity.map((item, iIdx) => {
                      const name = item.entity_name || 'Partner';
                      const imgUrl = item.image_url;
                      const website = item.website_url;

                      const innerLogo = imgUrl ? (
                        <img src={imgUrl} className="bss-logo-img" alt={name} loading="lazy" />
                      ) : (
                        <span className="bss-logo-fallback">{name}</span>
                      );

                      if (website && website.trim() !== '') {
                        return (
                          <a
                            key={iIdx}
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bss-logo-card"
                            title={name}
                          >
                            {innerLogo}
                          </a>
                        );
                      }

                      return (
                        <div key={iIdx} className="bss-logo-card" title={name}>
                          {innerLogo}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Bottom Partner Call-To-Action */}
            <div className="bss-partner-bottom-cta">
              <h3>Join Bengaluru Skill Summit 2026 as a Partner</h3>
              <p>
                Collaborate with industry pioneers, government stakeholders, and institutional leaders.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/sponsor-now" className="bss-partner-bottom-btn">
                  Become a Partner
                </Link>
                <Link to="/media-partners-2026" className="bss-partner-bottom-btn" style={{ backgroundColor: '#106cff', boxShadow: '0 4px 14px rgba(16, 108, 255, 0.3)' }}>
                  View Media Partners
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
