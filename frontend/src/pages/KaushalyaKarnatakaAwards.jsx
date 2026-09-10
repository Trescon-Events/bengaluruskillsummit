import React, { useState, useEffect, useRef } from 'react';
import awardsData from '../data/awards_data.json';

export default function KaushalyaKarnatakaAwards() {
  const { hero, stats, about, awardsTabs, testimonials, journey } = awardsData;

  // Tabs state
  const [activeTab, setActiveTab] = useState('corporate');

  // Accordion state (single open item so opening one automatically closes any other)
  const [openAccId, setOpenAccId] = useState('acc1');

  const toggleAcc = (id) => {
    setOpenAccId((prev) => (prev === id ? null : id));
  };

  // Testimonials Slider state & responsiveness
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w <= 768) {
        setVisibleCount(1);
      } else if (w <= 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxIndex = Math.max(0, testimonials.cards.length - visibleCount);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  // Autoplay slider
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  return (
    <div className="kaushalya-karnataka-awards-page">
      <style>{`
        /* Hero Section */
        .kka-hero-section {
          background-image: url('${hero.bgImage}');
          background-position: center top;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 100px 20px 60px;
          display: flex;
          align-items: center;
          position: relative;
        }
        .kka-hero-content {
          max-width: 800px;
          margin: 0 auto 0 8%;
        }
        .kka-hero-title {
          color: #e1ad27;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 24px;
        }
        .kka-hero-text {
          color: #ffffff;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .kka-gold-btn {
          display: inline-block;
          background: #e1ad27;
          color: #000000 !important;
          font-weight: 600;
          font-size: 15px;
          padding: 12px 30px;
          border-radius: 10px;
          text-decoration: none;
          margin-top: 25px;
          transition: all 0.3s ease;
          border: 2px solid #e1ad27;
        }
        .kka-gold-btn:hover {
          background: #d09c18;
          border-color: #d09c18;
          color: #000000 !important;
          transform: translateY(-2px);
        }

        /* Stats Section */
        .kka-stats-header {
          padding: 60px 20px 10px;
          text-align: center;
          background: #ffffff;
        }
        .kka-stats-title {
          color: #e1ad27;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .kka-stats-sub {
          color: #0a0a0a;
          font-size: 18px;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.5;
        }
        .kka-stats-grid {
          padding: 30px 8% 70px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          background: #ffffff;
        }
        .kka-stat-card {
          background-image: url('${stats.bgImage}');
          background-size: cover;
          background-position: center top;
          border-radius: 10px;
          padding: 35px 20px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          min-height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .kka-stat-number {
          font-size: 48px;
          font-weight: 700;
          color: #0e1220;
          margin: 0 0 10px;
          line-height: 1.1;
        }
        .kka-stat-label {
          font-size: 17px;
          color: #0e1220;
          margin: 0;
          line-height: 1.3;
          font-weight: 500;
        }

        /* About Section */
        .kka-about-section {
          padding: 60px 8% 70px;
          background: #ffffff;
          display: flex;
          gap: 40px;
          align-items: center;
        }
        .kka-about-left {
          flex: 0 0 60%;
        }
        .kka-about-right {
          flex: 0 0 40%;
          text-align: center;
        }
        .kka-about-title {
          color: #0d53c7;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 20px;
          white-space: pre-line;
        }
        .kka-about-p {
          color: #0a0a0a;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        .kka-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 25px;
        }
        .kka-about-box {
          background-image: url('https://bengaluruskillsummit.com/wp-content/uploads/2026/05/Rectangle-112064.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center;
          padding: 24px 20px;
          border-radius: 8px;
          font-size: 16px;
          color: #000000;
          font-weight: 500;
          line-height: 1.4;
          display: flex;
          align-items: center;
          min-height: 75px;
        }
        .kka-about-trophy {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* ---------------- 4. AWARDS SECTION (DARK SPARKLING BG) ---------------- */
        .kka-awards-section {
          background-image: url('${awardsTabs.bgImage}');
          background-size: cover;
          background-position: center;
          padding: 80px 5% 100px;
          color: #ffffff;
        }
        .kka-awards-title {
          font-family: 'Oswald', sans-serif !important;
          color: #ffffff;
          font-size: 46px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          text-align: center;
          margin-bottom: 10px;
        }
        .kka-awards-sub {
          color: #ffffff;
          font-size: 16px;
          text-align: center;
          opacity: 0.95;
          margin-bottom: 45px;
        }
        
        /* Tabs Navigation */
        .kka-tabs-nav {
          display: flex !important;
          justify-content: center !important;
          align-items: flex-end !important;
          gap: 10px !important;
          margin: 0 auto -2px !important;
          padding: 0 !important;
          list-style: none !important;
          list-style-type: none !important;
          position: relative !important;
          z-index: 2 !important;
          max-width: 1050px !important;
        }
        .kka-tabs-nav li {
          list-style: none !important;
          list-style-type: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .kka-tabs-nav li::before,
        .kka-tabs-nav li::after {
          display: none !important;
          content: none !important;
        }
        .kka-tab-btn {
          background: rgba(2, 46, 119, 0.9);
          border: 2px solid rgba(225, 173, 39, 0.4);
          border-bottom: none;
          color: #e1ad27;
          font-family: 'Oswald', sans-serif !important;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 12px 28px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: block;
        }
        .kka-tab-btn.active {
          background-color: #df9f1b !important;
          border-color: #df9f1b !important;
          color: #000000 !important;
        }

        /* Gold-Bordered Tab Box */
        .kka-tab-panel {
          background-image: url('${awardsTabs.tabContentBg}');
          background-size: cover;
          background-position: center;
          border: 2px solid #e1ad27;
          border-radius: 0px !important;
          padding: 40px 35px 50px;
          max-width: 1050px;
          margin: 0 auto;
          box-shadow: 0 10px 40px rgba(0,0,0,0.6);
        }

        /* Tab 1: Corporate Excellence */
        .kka-tab-banner {
          display: block;
          margin: 0 auto 30px;
          max-width: 440px;
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .kka-winners-heading {
          font-family: 'Oswald', sans-serif !important;
          color: #ffffff;
          font-size: 36px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: center;
          margin-bottom: 35px;
        }
        .kka-corp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .winner-subtitle {
          font-family: 'Oswald', sans-serif !important;
          color: #ffffff;
          font-size: 24px !important;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 22px !important;
          text-align: center !important;
          font-weight: 700;
        }
        .logo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px !important;
          align-items: center;
        }
        .logo-item {
          background: #ffffff;
          border-radius: 6px;
          padding: 10px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 65px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .logo-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 14px rgba(0,0,0,0.25);
        }
        .logo-item img {
          max-width: 100%;
          max-height: 48px;
          object-fit: contain;
        }

        /* Tab 2: Institutional Excellence */
        .kka-inst-banner {
          display: block;
          margin: 0 auto 30px;
          max-width: 182px;
          width: 100%;
          height: auto;
        }
        .row-accordion {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .custom-accordion {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .acc-item {
          border: 2px solid #f5b400;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.7);
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .acc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 18px;
          font-size: 16px;
          font-weight: 600;
          color: #f5b400;
          cursor: pointer;
          background: transparent;
          transition: all 0.25s ease;
        }
        .acc-header:hover {
          background: #f5b400;
          color: #000000;
        }
        .acc-header .icon {
          font-size: 22px;
          line-height: 1;
          color: #f5b400;
          transition: transform 0.3s ease, color 0.25s;
        }
        .acc-header:hover .icon {
          color: #000000;
        }
        .acc-item.is-open .acc-header .icon {
          transform: rotate(45deg);
        }
        .acc-content {
          max-height: 0;
          overflow: hidden;
          padding: 0 18px;
          color: #ffffff;
          transition: max-height 0.4s ease, padding 0.4s ease;
          line-height: 1.6;
          font-size: 14px;
        }
        .acc-item.is-open .acc-content {
          max-height: 600px;
          padding: 14px 18px 18px;
          border-top: 1px solid rgba(245, 180, 0, 0.25);
        }
        .acc-content .stacked-list {
          margin: 0;
        }
        .acc-content .item-title {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 2px;
        }
        .acc-content .item-sub {
          color: #c0c0c0;
          font-size: 0.9rem;
          font-weight: 400;
          display: inline-block;
        }

        /* ---------------- BELOW TAB CONTENT (ON DARK SECTION BG) ---------------- */
        .kka-talent-section-wrap {
          margin-top: 80px;
          text-align: center;
        }
        .kka-talent-title {
          font-family: 'Oswald', sans-serif !important;
          font-size: 42px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 14px;
        }
        .kka-talent-p {
          font-size: 15px;
          color: #ffffff;
          max-width: 820px;
          margin: 0 auto 45px;
          line-height: 1.6;
          opacity: 0.95;
        }

        /* Relive The Moments Banner */
        .kk-awards-container {
          display: flex;
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
          min-height: 320px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.6);
        }
        .kk-text-section {
          flex: 0 0 38%;
          background-color: #000000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 35px;
          text-align: left;
        }
        .kk-inner-content {
          width: 100%;
        }
        .kk-title {
          color: #ffffff;
          font-family: 'Oswald', sans-serif !important;
          font-size: 52px;
          line-height: 0.88;
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: -1px;
        }
        .kk-divider {
          width: 60px;
          height: 2px;
          background-color: #ffffff;
          margin: 18px 0;
        }
        .kk-description {
          color: #ffffff;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
          opacity: 0.95;
        }
        .kk-image-section {
          flex: 0 0 62%;
          position: relative;
          background-image: url('https://bengaluruskillsummit.com/wp-content/uploads/2026/05/video-poster.png');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 320px;
          text-decoration: none;
          cursor: pointer;
        }
        .kk-play-overlay {
          width: 64px;
          height: 64px;
          background: rgba(225, 173, 39, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .kk-image-section:hover .kk-play-overlay {
          transform: scale(1.1);
          background: #e1ad27;
        }
        .kk-play-overlay svg {
          width: 26px;
          height: 26px;
          fill: #000000;
          margin-left: 4px;
        }

        /* ---------------- 5. TESTIMONIALS SECTION ---------------- */
        .kka-testimonials-section {
          padding: 80px 0;
          background: #ffffff;
        }
        .testi-heading {
          color: #0d53c7;
          font-size: 48px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
        }
        .testi-slider-wrap {
          position: relative;
          max-width: 1240px;
          margin: 0 auto;
          padding: 40px 60px;
          overflow: hidden;
        }
        .testi-slider-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .testi-card {
          flex: 0 0 33.333%;
          padding: 0 12px;
          box-sizing: border-box;
        }
        .testi-card-inner {
          border: 2px solid #F5A623;
          border-radius: 16px;
          padding: 36px 28px 28px;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          position: relative;
          box-shadow: 0 3px 12px rgba(0,0,0,0.04);
        }
        .testi-quote-icon {
          position: absolute;
          top: -18px;
          left: 20px;
          background: #ffffff;
          padding: 0 8px;
        }
        .testi-quote-icon svg {
          width: 44px;
          height: 34px;
          fill: #F5A623;
        }
        .testi-text {
          font-size: 15px;
          line-height: 1.65;
          color: #333333;
          margin: 8px 0 20px;
          flex-grow: 1;
        }
        .testi-text strong {
          font-weight: 700;
          color: #111111;
        }
        .testi-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          min-height: 45px;
        }
        .testi-logo {
          width: auto;
          height: 36px;
          max-width: 120px;
          object-fit: contain;
          display: block;
        }
        .testi-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-top: 32px;
        }
        .testi-nav button {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid #F5A623;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }
        .testi-nav button:hover {
          background: #F5A623;
        }
        .testi-nav button svg {
          width: 18px;
          height: 18px;
          fill: #F5A623;
          transition: fill 0.25s;
        }
        .testi-nav button:hover svg {
          fill: #ffffff;
        }
        .testi-dots {
          display: flex;
          gap: 8px;
        }
        .testi-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #dddddd;
          cursor: pointer;
          transition: background 0.3s;
        }
        .testi-dot.active {
          background: #F5A623;
        }

        /* ---------------- 6. JOURNEY CONTINUES SECTION ---------------- */
        .kka-journey-section {
          padding: 60px 8% 40px;
          background: #ffffff;
          display: flex;
          gap: 50px;
          align-items: center;
        }
        .kka-journey-left {
          flex: 0 0 58%;
        }
        .kka-journey-right {
          flex: 0 0 42%;
        }
        .kka-journey-title {
          color: #0d53c7;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .kka-journey-text {
          color: #0a0a0a;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .kka-journey-img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          object-fit: cover;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
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

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .testi-card { flex: 0 0 50%; }
          .kka-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .kka-hero-section { padding: 70px 20px 40px; }
          .kka-hero-title { font-size: 36px; }
          .kka-hero-content { margin: 0 auto; text-align: center; }
          .kka-stats-title { font-size: 36px; }
          .kka-stats-grid { grid-template-columns: 1fr; padding: 20px 20px 50px; }
          .kka-about-section { flex-direction: column; padding: 40px 20px; }
          .kka-about-left, .kka-about-right { flex: 0 0 100%; width: 100%; }
          .kka-about-title { font-size: 36px; text-align: center; }
          .kka-about-grid { grid-template-columns: 1fr; }
          .kka-awards-section { padding: 50px 20px; }
          .kka-awards-title { font-size: 34px; }
          .kka-tab-panel { padding: 25px 15px; }
          .kka-corp-grid { grid-template-columns: 1fr; gap: 30px; }
          .logo-grid { grid-template-columns: repeat(2, 1fr); }
          .row-accordion { grid-template-columns: 1fr; gap: 14px; }
          .kk-awards-container { flex-direction: column; }
          .kk-text-section, .kk-image-section { flex: none; width: 100%; }
          .kk-title { font-size: 42px; }
          .kk-image-section { min-height: 240px; }
          .kka-talent-title { font-size: 32px; }
          .testi-heading { font-size: 36px; }
          .testi-slider-wrap { padding: 40px 20px; }
          .testi-card { flex: 0 0 100% !important; padding: 0 8px; }
          .testi-card-inner { padding: 30px 20px; }
          .kka-journey-section { flex-direction: column; padding: 40px 20px; }
          .kka-journey-left, .kka-journey-right { flex: 0 0 100%; width: 100%; }
          .kka-journey-title { font-size: 36px; text-align: center; }
        }
      `}</style>

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="kka-hero-section">
        <div className="kka-hero-content">
          <h1 className="kka-hero-title">{hero.title}</h1>
          <p className="kka-hero-text">{hero.text1}</p>
          <p className="kka-hero-text">{hero.text2}</p>
          <a
            className="kka-gold-btn"
            href={hero.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.buttonText}
          </a>
        </div>
      </section>

      {/* ---------------- 2. STATS SECTION ---------------- */}
      <section className="kka-stats-section">
        <div className="kka-stats-header">
          <h2 className="kka-stats-title">{stats.title}</h2>
          <p className="kka-stats-sub">{stats.subtitle}</p>
        </div>
        <div className="kka-stats-grid">
          {stats.items.map((st, i) => (
            <div key={i} className="kka-stat-card">
              <div className="kka-stat-number">{st.number}</div>
              <div className="kka-stat-label">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 3. ABOUT SECTION ---------------- */}
      <section className="kka-about-section">
        <div className="kka-about-left">
          <h2 className="kka-about-title">{about.title}</h2>
          <p className="kka-about-p">{about.p1}</p>
          <p className="kka-about-p">{about.p2}</p>
          <div className="kka-about-grid">
            {about.points.map((pt, i) => (
              <div key={i} className="kka-about-box">
                {pt}
              </div>
            ))}
          </div>
        </div>
        <div className="kka-about-right">
          <img
            src={about.image}
            alt="Kaushalya Karnataka Awards Trophy"
            className="kka-about-trophy"
          />
        </div>
      </section>

      {/* ---------------- 4. AWARDS TABS SECTION ---------------- */}
      <section className="kka-awards-section">
        <h2 className="kka-awards-title">{awardsTabs.title}</h2>
        <p className="kka-awards-sub">{awardsTabs.subtitle}</p>

        {/* Tab Buttons (Centered Above Box) */}
        <ul className="kka-tabs-nav">
          <li>
            <button
              type="button"
              className={`kka-tab-btn ${activeTab === 'corporate' ? 'active' : ''}`}
              onClick={() => setActiveTab('corporate')}
            >
              Corporate Excellence Awards
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`kka-tab-btn ${activeTab === 'institutional' ? 'active' : ''}`}
              onClick={() => setActiveTab('institutional')}
            >
              Institutional Excellence Awards
            </button>
          </li>
        </ul>

        {/* Gold-Bordered Tab Content Box */}
        <div className="kka-tab-panel">
          {activeTab === 'corporate' ? (
            <div className="kka-tab-corporate">
              <img
                src={awardsTabs.corporate.banner}
                alt="Organised by and Powered by Banner"
                className="kka-tab-banner"
              />
              <h3 className="kka-winners-heading">Featured Winners</h3>

              <div className="kka-corp-grid">
                {/* Large Enterprises */}
                <div>
                  <h4 className="winner-subtitle">Large Enterprises</h4>
                  <div className="logo-grid">
                    {awardsTabs.corporate.largeEnterprises.map((item, idx) => (
                      <div key={idx} className="logo-item" title={item.name}>
                        <img src={item.logo} alt={item.name} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Startups & MSMEs */}
                <div>
                  <h4 className="winner-subtitle">Startups &amp; MSMEs</h4>
                  <div className="logo-grid">
                    {awardsTabs.corporate.startupsMsmes.map((item, idx) => (
                      <div
                        key={idx}
                        className="logo-item"
                        title={item.name}
                        style={idx === 9 ? { gridColumn: 2 } : {}}
                      >
                        <img src={item.logo} alt={item.name} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="kka-tab-institutional">
              <img
                src={awardsTabs.institutional.banner}
                alt="Institutional Excellence Banner"
                className="kka-inst-banner"
              />
              <h3 className="kka-winners-heading">Featured Winners</h3>

              {/* Accordion 2 Columns */}
              <div className="row-accordion">
                {/* Column 1 */}
                <div className="custom-accordion">
                  {awardsTabs.institutional.accordionsCol1.map((acc) => {
                    const isOpen = openAccId === acc.id;
                    return (
                      <div
                        key={acc.id}
                        className={`acc-item ${isOpen ? 'is-open' : ''}`}
                      >
                        <div
                          className="acc-header"
                          onClick={() => toggleAcc(acc.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleAcc(acc.id);
                            }
                          }}
                        >
                          <span>{acc.title}</span>
                          <span className="icon">+</span>
                        </div>
                        <div className="acc-content">
                          {acc.type === 'stacked-list' ? (
                            <div className="stacked-list">
                              {acc.items.map((it, idx) => (
                                <div key={idx} style={{ marginBottom: '12px' }}>
                                  <strong className="item-title">{it.title}</strong>
                                  <br />
                                  <span className="item-sub">{it.sub}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div>
                              {acc.items.map((it, idx) => (
                                <div key={idx} style={{ marginBottom: '4px' }}>
                                  {it}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Column 2 */}
                <div className="custom-accordion">
                  {awardsTabs.institutional.accordionsCol2.map((acc) => {
                    const isOpen = openAccId === acc.id;
                    return (
                      <div
                        key={acc.id}
                        className={`acc-item ${isOpen ? 'is-open' : ''}`}
                      >
                        <div
                          className="acc-header"
                          onClick={() => toggleAcc(acc.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleAcc(acc.id);
                            }
                          }}
                        >
                          <span>{acc.title}</span>
                          <span className="icon">+</span>
                        </div>
                        <div className="acc-content">
                          {acc.type === 'stacked-list' ? (
                            <div className="stacked-list">
                              {acc.items.map((it, idx) => (
                                <div key={idx} style={{ marginBottom: '12px' }}>
                                  <strong className="item-title">{it.title}</strong>
                                  <br />
                                  <span className="item-sub">{it.sub}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div>
                              {acc.items.map((it, idx) => (
                                <div key={idx} style={{ marginBottom: '4px' }}>
                                  {it}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ---------------- BELOW TAB CONTENT (OUTSIDE BOX, ON DARK SECTION BG) ---------------- */}
        <div className="kka-talent-section-wrap">
          {/* Shaping the Future of Talent */}
          <h3 className="kka-talent-title">
            SHAPING THE FUTURE OF TALENT IN KARNATAKA
          </h3>
          <p className="kka-talent-p">
            {awardsTabs.institutional.futureTalent.description}
          </p>

          {/* Relive the Moments Container */}
          <div className="kk-awards-container">
            <div className="kk-text-section">
              <div className="kk-inner-content">
                <h3 className="kk-title">
                  RELIVE<br />THE<br />MOMENTS
                </h3>
                <div className="kk-divider"></div>
                <p className="kk-description">
                  {awardsTabs.institutional.reliveMoments.description}
                </p>
              </div>
            </div>
            <a
              href={awardsTabs.institutional.reliveMoments.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="kk-image-section"
              title="Watch Kaushalya Karnataka Awards 2025 Video"
            >
              <div className="kk-play-overlay">
                <svg viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- 5. TESTIMONIALS SLIDER SECTION ---------------- */}
      <section
        className="kka-testimonials-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <h2 className="testi-heading">{testimonials.title}</h2>

        <div
          className="testi-slider-wrap"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="testi-slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.cards.map((card) => (
              <div key={card.id} className="testi-card">
                <div className="testi-card-inner">
                  <span className="testi-quote-icon">
                    <svg viewBox="0 0 48 36">
                      <path d="M0 36V20.4C0 13.6 1.4 8.6 4.2 5.4 7 2 11.2.2 16.8 0l1.2 6c-3.2.4-5.6 1.6-7.2 3.4-1.6 1.8-2.6 4-2.8 6.6H14v20H0Zm26 0V20.4c0-6.8 1.4-11.8 4.2-15C33 2 37.2.2 42.8 0L44 6c-3.2.4-5.6 1.6-7.2 3.4-1.6 1.8-2.6 4-2.8 6.6H40v20H26Z" />
                    </svg>
                  </span>
                  <p
                    className="testi-text"
                    dangerouslySetInnerHTML={{ __html: card.text }}
                  />
                  <div className="testi-footer">
                    <img
                      src={card.logo}
                      alt={card.company}
                      className="testi-logo"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="testi-nav">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              type="button"
            >
              <svg viewBox="0 0 24 24">
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            <div className="testi-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`testi-dot ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              type="button"
            >
              <svg viewBox="0 0 24 24">
                <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- 6. JOURNEY CONTINUES SECTION ---------------- */}
      <section className="kka-journey-section">
        <div className="kka-journey-left">
          <h2 className="kka-journey-title">{journey.title}</h2>
          <p className="kka-journey-text">{journey.text}</p>
          <a className="kka-gold-btn" href={journey.buttonLink}>
            {journey.buttonText}
          </a>
        </div>
        <div className="kka-journey-right">
          <img
            src={journey.image}
            alt="The Journey Continues"
            className="kka-journey-img"
            loading="lazy"
          />
        </div>
      </section>

      {/* ---------------- 7. CONTACT INFO CARDS SECTION ---------------- */}
      <div id="contact-info">
        <div className="row_col_wrap_12">
          {/* Card 1 */}
          <div className="contact-info-card">
            <div className="contact-title">Sponsor and Exhibitor<br />Queries</div>
            <div className="contact-name">Vinay Martin</div>
            <div className="contact-designation">Commercial Director – India &amp; Middle East</div>
            <div className="contact-email">
              <a
                href="mailto:vinay.martin@tresconglobal.com"
                style={{
                  overflowWrap: 'normal',
                  wordBreak: 'normal',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}
              >
                vinay.martin@tresconglobal.com
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="contact-info-card">
            <div className="contact-title">Speaking and Partner<br />Queries</div>
            <div className="contact-name">Simran Arora</div>
            <div className="contact-designation">Senior Manager – Conference Production</div>
            <div className="contact-email">
              <a
                href="mailto:simran.arora@tresconglobal.com"
                style={{
                  overflowWrap: 'normal',
                  wordBreak: 'normal',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}
              >
                simran.arora@tresconglobal.com
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="contact-info-card">
            <div className="contact-title">Government Relation &amp;<br />Marketing Queries</div>
            <div className="contact-name">Ashutosh Gupta</div>
            <div className="contact-designation">Director – Strategic Alliances</div>
            <div className="contact-email">
              <a
                href="mailto:ashutosh@tresconglobal.com"
                style={{
                  overflowWrap: 'normal',
                  wordBreak: 'normal',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}
              >
                ashutosh@tresconglobal.com
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="contact-info-card">
            <div className="contact-title">Media &amp; PR<br />Queries</div>
            <div className="contact-name">Arpit Soni</div>
            <div className="contact-designation">Senior Marketing Manager</div>
            <div className="contact-email">
              <a
                href="mailto:arpit.soni@tresconglobal.com"
                style={{
                  overflowWrap: 'normal',
                  wordBreak: 'normal',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}
              >
                arpit.soni@tresconglobal.com
              </a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="contact-info-card">
            <div className="contact-title">General<br />Enquiry</div>
            <div className="contact-name">General Queries</div>
            <div className="contact-designation">&nbsp;</div>
            <div className="contact-email">
              <a
                href="mailto:info@bengaluruskillsummit.com"
                style={{
                  overflowWrap: 'normal',
                  wordBreak: 'normal',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}
              >
                info@bengaluruskillsummit.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
