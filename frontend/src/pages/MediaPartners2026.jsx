import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { STATIC_PARTNERS_DATA_2026 } from '../data/partners2026Fallback';

function getMediaCategories(data) {
  let cats = [];
  if (data && Array.isArray(data.categorized)) {
    cats = data.categorized.filter((cat) => {
      const isMedia = (cat.category_name || '').toLowerCase().includes('media');
      return isMedia && Array.isArray(cat.entity) && cat.entity.length > 0;
    });
  }
  return cats;
}

export default function MediaPartners2026() {
  const [categories, setCategories] = useState(() => getMediaCategories(STATIC_PARTNERS_DATA_2026));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'Media Partners 2026 | Bengaluru Skill Summit';
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
        const cats = getMediaCategories(data);
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
    <div className="media-partners-2026-page">
      <style>{`
        /* ==========================================
           Global & Container Settings
           ========================================== */
        .media-partners-2026-page {
          background: #ffffff;
          color: #333333;
          font-family: 'Comfortaa', sans-serif;
          width: 100%;
          overflow-x: hidden;
        }

        .media-partners-2026-page *,
        .media-partners-2026-page *::before,
        .media-partners-2026-page *::after {
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
            font-size: 32px;
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

        /* Center-Aligned Logo Grid */
        .bss-logo-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: stretch;
          gap: 25px;
        }

        @media (max-width: 992px) {
          .bss-logo-grid {
            gap: 20px;
          }
          .bss-category-heading {
            font-size: 28px !important;
          }
        }

        @media (max-width: 576px) {
          .bss-logo-grid {
            gap: 16px;
          }
          .bss-category-heading {
            font-size: 24px !important;
          }
        }

        /* Logo Card - Media Partners */
        .bss-logo-card {
          flex: 0 1 calc(33.333% - 17px);
          min-width: 280px;
          max-width: 360px;
          width: 100%;
          background: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px 28px;
          text-decoration: none !important;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          cursor: pointer;
        }

        @media (max-width: 992px) {
          .bss-logo-card {
            flex: 0 1 calc(50% - 15px);
            min-width: 240px;
            max-width: 340px;
          }
        }

        @media (max-width: 576px) {
          .bss-logo-card {
            flex: 0 1 100%;
            min-width: 100%;
            max-width: 100%;
            height: 115px;
            padding: 16px 20px;
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
          transform: scale(1.03);
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
            <h1>2026 Edition MEDIA PARTNERS</h1>
          </div>
        </div>
      </section>

      {/* Quick Navigation Tabs */}
      <div className="bss-partner-tabs">
        <Link to="/partners-2026" className="bss-partner-tab">
          All Partners
        </Link>
        <Link to="/ecosystem-partners-2026" className="bss-partner-tab">
          Ecosystem Partners
        </Link>
        <Link to="/media-partners-2026" className="bss-partner-tab active">
          Media Partners
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="bss-partners-wrapper">
        {loading && (
          <div className="bss-loading-wrap">
            <div className="bss-spinner" />
            <div>Loading media partners...</div>
          </div>
        )}

        {error && (
          <div style={{ color: '#ef4444', textAlign: 'center', padding: '50px 20px', fontFamily: 'Comfortaa, sans-serif' }}>
            <h3>{error}</h3>
          </div>
        )}

        {!loading && !error && categories.length === 0 && (
          <div style={{ textAlign: 'center', padding: '50px 20px', color: '#64748b' }}>
            <h3>No media partner data found.</h3>
          </div>
        )}

        {!loading && !error && categories.length > 0 && (
          <div id="bss-sections-container">
            {categories.map((cat, cIdx) => {
              const catName = cat.category_name || 'Media Partner';

              return (
                <div key={cIdx} className="bss-category-section">
                  <h2 className="bss-category-heading">{catName}</h2>
                  <div className="bss-logo-grid">
                    {cat.entity.map((item, iIdx) => {
                      const name = item.entity_name || 'Media Partner';
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
              <h3>Become an Official Media Partner</h3>
              <p>
                Partner with Bengaluru Skill Summit 2026 for extensive press coverage and global exposure.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/be-a-media-partner" className="bss-partner-bottom-btn">
                  Media Partner Enquiry
                </Link>
                <Link to="/ecosystem-partners-2026" className="bss-partner-bottom-btn" style={{ backgroundColor: '#106cff', boxShadow: '0 4px 14px rgba(16, 108, 255, 0.3)' }}>
                  View Ecosystem Partners
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
