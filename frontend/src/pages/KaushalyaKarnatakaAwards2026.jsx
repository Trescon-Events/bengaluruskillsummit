import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTrophy, 
  FaBuildingColumns, 
  FaIndustry, 
  FaGears, 
  FaHandshake, 
  FaChartLine, 
  FaArrowUpRightFromSquare, 
  FaCalendarCheck, 
  FaGraduationCap, 
  FaUsers, 
  FaLocationDot,
  FaArrowRight
} from 'react-icons/fa6';
import {
  LuLightbulb,
  LuBrainCircuit,
  LuTrendingUp,
  LuSprout,
  LuSettings,
  LuCalendarCheck2,
  LuGift,
  LuClock,
  LuDownload
} from 'react-icons/lu';
import awardsData from '../data/awards_2026_data.json';

export default function KaushalyaKarnatakaAwards2026() {
  const [activeTab, setActiveTab] = useState('corporate'); // 'corporate' | 'institutional'
  const { hero, corporate, institutional, showcase2025, contactInfo, testimonials } = awardsData;

  // Testimonials slider state
  const [currentTestiIdx, setCurrentTestiIdx] = useState(0);
  const [visibleTestiCount, setVisibleTestiCount] = useState(3);
  const [isTestiPaused, setIsTestiPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth <= 800) {
        setVisibleTestiCount(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleTestiCount(2);
      } else {
        setVisibleTestiCount(3);
      }
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const maxTestiIndex = Math.max(0, testimonials.cards.length - visibleTestiCount);

  useEffect(() => {
    if (currentTestiIdx > maxTestiIndex) {
      setCurrentTestiIdx(maxTestiIndex);
    }
  }, [visibleTestiCount, maxTestiIndex, currentTestiIdx]);

  // Autoplay testimonials
  useEffect(() => {
    if (isTestiPaused) return;
    const interval = setInterval(() => {
      setCurrentTestiIdx((prev) => (prev >= maxTestiIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isTestiPaused, maxTestiIndex]);

  const handlePrevTesti = () => {
    setCurrentTestiIdx((prev) => (prev > 0 ? prev - 1 : maxTestiIndex));
  };

  const handleNextTesti = () => {
    setCurrentTestiIdx((prev) => (prev < maxTestiIndex ? prev + 1 : 0));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) handleNextTesti();
    if (diff < -40) handlePrevTesti();
    touchStartX.current = null;
  };

  const scrollToCategories = (e) => {
    e.preventDefault();
    const el = document.getElementById('award-categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToWinners = (e) => {
    e.preventDefault();
    const el = document.getElementById('winners-say-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Bengaluru Skill Summit//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:bss-awards-2026@bengaluruskillsummit.com',
      'DTSTAMP:20260918T000000Z',
      'DTSTART;VALUE=DATE:20261105',
      'DTEND;VALUE=DATE:20261106',
      'SUMMARY:Bengaluru Skill Summit 2026 - Kaushalya Karnataka Awards',
      'DESCRIPTION:The Kaushalya Karnataka Awards 2026 Ceremony celebrating excellence in skills.',
      'LOCATION:The Lalit Ashok, Bengaluru',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Bengaluru_Skill_Summit_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderTestimonialsSlider = () => (
    <section
      id="winners-say-section"
      className="kka-testimonials-section"
      onMouseEnter={() => setIsTestiPaused(true)}
      onMouseLeave={() => setIsTestiPaused(false)}
      style={{ marginTop: '50px', marginBottom: '20px' }}
    >
      <div className="testi-slider-wrap">
        <div
          className="testi-slider-track"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `translateX(-${currentTestiIdx * (100 / visibleTestiCount)}%)`,
          }}
        >
          {testimonials.cards.map((card) => (
            <div className="testi-card" key={card.id}>
              <div className="testi-card-inner">
                <div className="testi-quote-icon">
                  <svg viewBox="0 0 44 34" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 5.4 3.4 10 8.2 11.7L4.7 34h8.5l4.3-10.8c.8-2 .9-3.9.9-5.7 0-9.4-2.5-17.5-5.9-17.5zm24.6 0c-6.9 0-12.5 5.6-12.5 12.5 0 5.4 3.4 10 8.2 11.7L28.5 34H37l4.3-10.8c.8-2 .9-3.9.9-5.7 0-9.4-2.5-17.5-5.8-17.5z" />
                  </svg>
                </div>
                <p
                  className="testi-text"
                  dangerouslySetInnerHTML={{ __html: card.text }}
                ></p>
                <div className="testi-footer">
                  <img
                    src={card.logo}
                    alt={card.company}
                    className="testi-logo"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="testi-nav">
          <button
            onClick={handlePrevTesti}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <div className="testi-dots">
            {Array.from({ length: maxTestiIndex + 1 }).map((_, idx) => (
              <span
                key={idx}
                className={`testi-dot ${idx === currentTestiIdx ? 'active' : ''}`}
                onClick={() => setCurrentTestiIdx(idx)}
              />
            ))}
          </div>
          <button
            onClick={handleNextTesti}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="kka-2026-page">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Jost:wght@400;500;600;700;800&family=Oswald:wght@400;500;600;700&family=Outfit:wght@400;600;800&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap");

        .kka-2026-page {
          font-family: 'Comfortaa', sans-serif;
          color: #333333;
          background-color: #ffffff;
          overflow-x: hidden;
        }

        /* =========================================
           HERO SECTION (DARK BACKGROUND)
           ========================================= */
        .awards-section {
          position: relative;
          background: #020b1e url('/bengaluruskillsummit/wp-content/uploads/2026/08/banner-skillathon-03-2-2.png') no-repeat center top / cover;
          color: white;
          padding: 125px 0 60px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          box-shadow: inset 0 -30px 40px rgba(0,0,0,0.6);
        }

        .awards-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(2, 11, 30, 0.45) 0%, rgba(2, 11, 30, 0.55) 50%, rgba(2, 11, 30, 0.88) 100%);
          pointer-events: none;
        }

        .header-content {
          text-align: center;
          margin-bottom: 25px;
          padding: 0 5%;
          position: relative;
          z-index: 2;
          max-width: 1250px;
        }

        .main-title {
          font-family: 'Oswald', sans-serif !important;
          font-size: 2.85rem !important;
          color: #f5b919 !important; 
          margin: 0 !important;
          font-weight: 600 !important;
          letter-spacing: 0.5px !important;
          line-height: 1.15 !important;
          text-transform: none !important;
          text-shadow: 0 2px 14px rgba(0,0,0,0.6) !important;
        }

        .subtitle {
          font-family: 'Oswald', 'Jost', sans-serif !important;
          font-size: 1.6rem !important;
          color: #FFFFFF !important;
          margin: 8px 0 14px !important;
          font-weight: 400 !important;
          letter-spacing: 0.5px !important;
          text-transform: none !important;
        }

        .hero-date-venue {
          font-family: 'Oswald', 'Jost', sans-serif !important;
          font-size: 1.15rem !important;
          color: #FFFFFF !important;
          font-weight: 500 !important;
          margin: 0 0 10px 0 !important;
          letter-spacing: 0.5px !important;
          text-transform: none !important;
        }

        /* TABS WITH CONTINUOUS HORIZONTAL GOLD LINE */
        .tabs-outer-line-wrapper {
          width: 100%;
          border-bottom: 2px solid #f5b919;
          display: flex;
          justify-content: center;
          margin-bottom: 45px;
          position: relative;
          z-index: 2;
        }

        .tabs-container {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: -2px; /* Rests directly flush on the 2px border line */
          flex-wrap: wrap;
        }

        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 24px;
          border-radius: 6px 6px 0 0;
          font-family: 'Oswald', 'Jost', sans-serif !important;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.25s ease;
          background-color: transparent;
          color: #f5b919;
          border: 1.5px solid #f5b919;
          border-bottom: none;
          text-transform: uppercase;
        }

        .tab-btn.active {
          background-color: #f5b919;
          color: #000000;
          font-weight: 700;
          border-color: #f5b919;
          border-bottom: none;
        }

        .tab-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
        }

        /* HERO CONTENT CONTAINERS */
        .hero-tab-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1250px;
          padding: 0 5%;
          gap: 40px;
          animation: fadeIn 0.5s ease;
          position: relative;
          z-index: 2;
        }

        .text-content {
          flex: 1.15;
          max-width: 680px;
        }

        .kka-hero-badge-wrap {
          margin-bottom: 20px;
          display: inline-block;
        }

        .kka-hero-badge-img {
          height: 60px;
          width: auto;
          max-width: 320px;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));
        }

        .section-title {
          font-family: 'Oswald', sans-serif !important;
          font-size: 2.85rem;
          line-height: 1.15;
          margin-top: 0;
          margin-bottom: 18px;
          text-transform: uppercase;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.5px;
        }

        .description {
          font-family: 'Comfortaa', sans-serif;
          font-size: 1.05rem;
          line-height: 1.65;
          margin-bottom: 26px;
          color: #e2e8f0;
          max-width: 620px;
        }

        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .outline-btn {
          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          padding: 8px 20px;
          border-radius: 20px;
          font-family: 'Oswald', 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .outline-btn:hover { 
          background: rgba(255, 255, 255, 0.15); 
          color: #ffffff; 
          transform: translateY(-2px);
        }

        .primary-btn {
          background: #ff5252;
          color: white !important;
          border: none;
          padding: 11px 26px;
          border-radius: 22px;
          font-family: 'Oswald', 'Jost', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(255, 82, 82, 0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
        }
        .primary-btn:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 6px 20px rgba(255, 82, 82, 0.55); 
        }

        .image-content {
          flex: 0.95;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .award-image {
          max-width: 100%;
          height: auto;
          max-height: 440px;
          object-fit: contain;
          filter: drop-shadow(0 15px 35px rgba(0,0,0,0.6));
        }

        /* =========================================
           ABOUT SECTIONS (WHITE BACKGROUND)
           ========================================= */
        .about-section-wrapper {
          background-color: #ffffff;
          padding: 70px 5% 40px 5%;
          color: #333333;
          animation: fadeIn 0.5s ease;
        }

        .about-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .about-corporate-center {
          text-align: center;
        }

        .about-heading-blue {
          font-family: 'Jost', sans-serif !important;
          font-size: 2.8rem;
          color: #0d53c7;
          text-transform: uppercase;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 22px;
          letter-spacing: 0.5px;
          line-height: 1.2;
          text-align: center;
        }

        .intro-text {
          font-size: 1.05rem;
          line-height: 1.8;
          max-width: 1050px;
          margin: 0 auto 24px;
          color: #334155;
          text-align: center;
        }

        .intro-text.highlight {
          margin-bottom: 45px;
          font-weight: 600;
          color: #0f172a;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin-bottom: 60px;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .feature-icon {
          width: 84px;
          height: 84px;
          margin-bottom: 18px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .feature-item:hover .feature-icon { transform: translateY(-5px); }
        .feature-text {
          font-size: 0.98rem;
          line-height: 1.5;
          font-weight: 600;
          color: #1e293b;
        }

        /* Simplified Policy Card */
        .policy-card {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 900px;
          margin: 0 auto 70px auto;
        }
        
        .policy-image {
          width: 100%;
          max-width: 760px; 
          height: auto;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
        }

        /* =========================================
           WHY THESE AWARDS MATTER SECTION
           ========================================= */
        .kka-why-matter-section {
          margin: 60px auto 80px auto;
          max-width: 1250px;
          text-align: center;
        }

        .kka-why-matter-subhead {
          font-size: 1.15rem;
          color: #334155;
          line-height: 1.6;
          max-width: 950px;
          margin: 0 auto 12px auto;
        }

        .kka-why-matter-intro {
          font-size: 1.05rem;
          color: #0f172a;
          font-weight: 600;
          margin: 0 auto 45px auto;
        }

        .kka-why-matter-flow {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
          position: relative;
          margin: 0 auto 45px auto;
        }

        .kka-why-matter-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          max-width: 215px;
          text-align: center;
        }

        .kka-why-matter-circle-wrap {
          position: relative;
          width: 160px;
          height: 175px;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kka-why-matter-circle-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .kka-why-matter-item:hover .kka-why-matter-circle-img {
          transform: scale(1.05);
        }

        .kka-why-matter-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #0284c7;
          margin-top: 75px;
          flex-shrink: 0;
        }

        .kka-why-matter-text {
          font-size: 14px;
          line-height: 1.5;
          color: #334155;
          margin: 0;
          font-weight: 500;
        }

        .kka-why-matter-summary {
          font-size: 1.25rem;
          line-height: 1.65;
          color: #0f172a;
          max-width: 1100px;
          margin: 50px auto 0 auto;
          font-weight: 600;
          text-align: center;
        }

        /* =========================================
           WHY PARTICIPATE (FULL-WIDTH DEEP BLUE BACKGROUND)
           ========================================= */
        .kka-participate-wrap {
          width: 100vw !important;
          position: relative !important;
          left: 50% !important;
          right: 50% !important;
          margin-left: -50vw !important;
          margin-right: -50vw !important;
          background: #0d53c7 !important;
          color: #ffffff !important;
          padding: 80px 5% !important;
          margin-top: 70px !important;
          margin-bottom: 70px !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          box-sizing: border-box !important;
        }

        .kka-participate-inner {
          max-width: 1250px !important;
          margin: 0 auto !important;
          display: grid !important;
          grid-template-columns: 1fr 1.35fr !important;
          gap: 60px !important;
          align-items: center !important;
        }

        .kka-participate-collage-img {
          width: 100% !important;
          max-width: 520px !important;
          height: auto !important;
          border-radius: 16px !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25) !important;
          display: block !important;
        }

        .kka-participate-title {
          font-family: 'Oswald', sans-serif !important;
          font-size: 3.2rem !important;
          color: #ffffff !important;
          margin: 0 0 35px 0 !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          line-height: 1.1 !important;
        }

        .kka-participate-list {
          display: grid !important;
          grid-template-columns: 1.05fr 1fr !important;
          column-gap: 36px !important;
          row-gap: 32px !important;
          margin-bottom: 38px !important;
        }

        .kka-participate-item {
          display: flex !important;
          align-items: flex-start !important;
          gap: 14px !important;
        }

        .kka-participate-icon-box {
          width: 34px !important;
          height: 34px !important;
          border-radius: 50% !important;
          background: rgba(255, 255, 255, 0.22) !important;
          color: #ffffff !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 14px !important;
          flex-shrink: 0 !important;
          margin-top: 2px !important;
        }

        .kka-participate-text {
          font-family: 'Comfortaa', sans-serif !important;
          font-size: 1.05rem !important;
          line-height: 1.45 !important;
          color: #ffffff !important;
          margin: 0 !important;
          font-weight: 500 !important;
        }

        .kka-participate-btn {
          background: #ff5252 !important;
          color: #ffffff !important;
          border: none !important;
          padding: 12px 34px !important;
          border-radius: 22px !important;
          font-family: 'Oswald', 'Jost', sans-serif !important;
          font-size: 0.95rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.5px !important;
          cursor: pointer !important;
          box-shadow: 0 4px 15px rgba(255, 82, 82, 0.4) !important;
          transition: transform 0.2s, box-shadow 0.2s !important;
          text-decoration: none !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-transform: uppercase !important;
        }
        .kka-participate-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(255, 82, 82, 0.6) !important;
        }

        /* =========================================
           AWARD CATEGORIES (FULL-WIDTH WITH BACKGROUND PHOTO)
           ========================================= */
        .kka-categories-wrap {
          width: 100vw !important;
          position: relative !important;
          left: 50% !important;
          right: 50% !important;
          margin-left: -50vw !important;
          margin-right: -50vw !important;
          background: #081736 url('/bengaluruskillsummit/wp-content/uploads/2026/awards/bg-award-categories.png') no-repeat center center / cover !important;
          padding: 80px 5% 75px 5% !important;
          color: #ffffff !important;
          position: relative !important;
          border-radius: 0 !important;
          overflow: hidden !important;
          margin-top: 60px !important;
          margin-bottom: 60px !important;
          box-shadow: none !important;
          box-sizing: border-box !important;
        }

        .kka-categories-wrap::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(8, 23, 54, 0.35) !important;
          pointer-events: none;
        }

        .kka-categories-inner {
          max-width: 1200px !important;
          margin: 0 auto !important;
          position: relative !important;
          z-index: 2 !important;
          text-align: center !important;
        }

        .kka-cat-main-title {
          font-family: 'Oswald', sans-serif !important;
          font-size: 3.3rem !important;
          color: #ffffff !important;
          margin: 0 0 10px 0 !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          line-height: 1.15 !important;
        }

        .kka-cat-subtitle {
          font-family: 'Comfortaa', sans-serif !important;
          font-size: 1.15rem !important;
          color: #ffffff !important;
          margin: 0 0 20px 0 !important;
          font-weight: 500 !important;
        }

        .kka-cat-section-title {
          font-family: 'Comfortaa', 'Jost', sans-serif !important;
          font-size: 1.85rem !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          margin: 0 0 35px 0 !important;
          text-transform: none !important;
        }

        .kka-categories-grid {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 22px !important;
          max-width: 1180px !important;
          margin: 0 auto 35px auto !important;
        }

        .kka-category-svg-card {
          border-radius: 14px !important;
          overflow: hidden !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18) !important;
          transition: transform 0.25s ease, box-shadow 0.25s ease !important;
          background: transparent !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .kka-category-svg-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.3) !important;
        }

        .kka-category-svg-img {
          width: 100% !important;
          height: auto !important;
          display: block !important;
          object-fit: contain !important;
        }

        .kka-categories-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .kka-cat-gov-logos {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .kka-cat-gov-logos img {
          height: 48px;
          width: auto;
          object-fit: contain;
        }

        .kka-category-card {
          background: #ffffff;
          border: 2px solid;
          border-radius: 16px;
          padding: 30px 18px;
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .kka-category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
        }

        .kka-category-icon {
          font-size: 32px;
          margin-bottom: 14px;
        }

        .kka-category-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .kka-category-desc {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        .kka-category-count {
          font-size: 26px;
          font-weight: 800;
          margin: 10px 0 2px 0;
        }

        .kka-category-unit {
          font-size: 12px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
        }

        /* =========================================
           EVALUATION FRAMEWORK (4 CARDS MATCHING FIGMA)
           ========================================= */
        .kka-eval-section {
          margin: 70px auto;
          max-width: 1250px;
          text-align: center;
        }

        .kka-eval-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .kka-eval-card {
          border-radius: 18px;
          padding: 35px 22px 30px 22px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: #ffffff;
          border: 1.5px solid;
          box-shadow: 0 4px 15px rgba(0,0,0,0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .kka-eval-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.08);
        }

        .kka-eval-icon-img {
          width: 110px;
          height: 110px;
          object-fit: contain;
          margin-bottom: 18px;
        }

        .kka-eval-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 14px 0;
          line-height: 1.3;
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kka-eval-divider {
          width: 32px;
          height: 3px;
          border-radius: 2px;
          margin-bottom: 22px;
        }

        .kka-eval-list {
          list-style: none !important;
          padding: 0 !important;
          margin: 0 !important;
          text-align: left;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .kka-eval-list li {
          position: relative;
          padding-left: 0 !important;
          font-size: 14px;
          color: #334155;
          line-height: 1.45;
          font-weight: 500;
          display: flex;
          align-items: flex-start;
        }

        /* =========================================
           FOUR STEPS & TIMELINE
           ========================================= */
        .kka-timeline-wrapper {
          width: 100%;
          margin: 70px 0 60px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 45px;
        }

        .kka-steps-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          max-width: 1250px;
          position: relative;
        }

        .kka-steps-row::before {
          content: "";
          position: absolute;
          top: 36px;
          left: calc(10% - 10px);
          right: calc(10% - 10px);
          height: 2px;
          z-index: 1;
          background-image: repeating-linear-gradient(to right, #94a3b8 0, #94a3b8 10px, transparent 10px, transparent 20px);
        }

        .kka-step-col {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          padding: 0 10px;
        }

        .kka-step-badge {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #edf2f7;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .kka-step-heading {
          font-family: 'Jost', sans-serif !important;
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin: 0 0 8px 0;
        }

        .kka-step-desc {
          font-size: 13.5px;
          color: #475569;
          line-height: 1.45;
          margin: 0;
        }

        /* Timeline Box */
        .kka-timeline-card-wrap {
          width: 100%;
          max-width: 1250px;
        }

        .kka-timeline-bar {
          background: #dbeafe;
          border-radius: 16px;
          padding: 22px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .kka-timeline-bar-left {
          display: flex;
          flex-direction: column;
          text-align: left;
          flex-shrink: 0;
        }

        .kka-timeline-bar-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: 0.5px;
          line-height: 1.2;
        }

        .kka-timeline-bar-steps {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          flex-grow: 1;
          max-width: 680px;
          padding: 0 10px;
        }

        .kka-timeline-bar-steps::before {
          content: "";
          position: absolute;
          top: 3px;
          left: 15px;
          right: 15px;
          border-top: 2px dashed #94a3b8;
          z-index: 1;
        }

        .kka-timeline-bar-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          z-index: 2;
          text-align: left;
        }

        .kka-timeline-bar-dot {
          width: 28px;
          height: 8px;
          background: #10b981;
          border-radius: 3px;
          margin-bottom: 8px;
        }

        .kka-timeline-bar-item-lbl {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }

        .kka-timeline-bar-item-dt {
          font-size: 14px;
          font-weight: 800;
          color: #0f172a;
          white-space: nowrap;
        }

        /* =========================================
           2025 WINNERS SHOWCASE BANNER
           ========================================= */
        .kka-showcase-banner-cream {
          background: #FFF9EF;
          border: 1px solid #FFE7C2;
          color: #0f172a;
          padding: 55px 35px;
          border-radius: 20px;
          text-align: center;
          margin: 60px auto;
          max-width: 1250px;
          box-shadow: 0 8px 25px rgba(245, 166, 35, 0.08);
        }

        .kka-showcase-cream-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 2.2rem;
          font-weight: 700;
          margin: 0 0 28px 0;
          color: #1e293b;
          line-height: 1.35;
          max-width: 950px;
          margin-left: auto;
          margin-right: auto;
        }

        /* =========================================
           CTA SECTION ("Be part of Karnataka's...")
           ========================================= */
        .kka-cta-split-section {
          margin: 70px auto 60px auto;
          max-width: 1250px;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 50px;
          align-items: center;
        }

        .kka-cta-photo-col img {
          width: 100%;
          height: auto;
          border-radius: 18px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.1);
        }

        .kka-cta-text-col {
          text-align: left;
        }

        .kka-cta-main-head {
          font-family: 'Jost', sans-serif !important;
          font-size: 2.6rem;
          color: #0d53c7;
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 24px 0;
        }

        .kka-cta-subhead {
          font-family: 'Jost', sans-serif !important;
          font-size: 1.35rem;
          color: #0f172a;
          font-weight: 700;
          margin: 0 0 14px 0;
        }

        .kka-cta-timeline-box {
          border: 1.5px solid #cbd5e1;
          border-radius: 12px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          gap: 35px;
          margin-bottom: 28px;
          background: #ffffff;
        }

        .kka-cta-timeline-unit {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .kka-cta-timeline-icon {
          width: 42px;
          height: 42px;
          border-radius: 8px;
          border: 1.5px solid #f59e0b;
          color: #f59e0b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .kka-cta-timeline-icon.red {
          border-color: #ef4444;
          color: #ef4444;
        }

        .kka-cta-timeline-label {
          font-size: 15px;
          color: #475569;
          margin: 0;
        }

        .kka-cta-timeline-label strong {
          color: #0f172a;
          font-weight: 700;
        }

        .kka-cta-btn-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .kka-cta-download-btn {
          background: #ff5757;
          color: #ffffff !important;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-family: 'Comfortaa', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .kka-cta-download-btn:hover {
          background: #e04842;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 87, 87, 0.4);
        }

        /* Institutional About specific styles */
        .institutional-layout {
          display: flex; 
          align-items: center; 
          gap: 50px; 
          justify-content: space-between; 
          margin-bottom: 60px;
        }
        .institutional-text-col { 
          flex: 1; 
          max-width: 620px; 
          text-align: left; 
        }
        .institutional-image-col { 
          flex: 1; 
          display: flex; 
          justify-content: flex-end; 
        }
        .institutional-image-col img,
        .institutional-image { 
          max-width: 100%; 
          height: auto; 
          border-radius: 12px; 
          box-shadow: 0 15px 40px rgba(0,0,0,0.08); 
        }
        .institutional-paragraph { 
          font-size: 1.05rem; 
          line-height: 1.8; 
          color: #444444; 
          margin-bottom: 20px; 
        }

        .kka-inst-logos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-bottom: 50px;
        }

        .kka-inst-logo-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          transition: all 0.25s ease;
        }

        .kka-inst-logo-card:hover {
          transform: translateY(-3px);
          border-color: #0d53c7;
          background: #f0f7ff;
        }

        /* TESTIMONIAL SLIDER CSS */
        .testi-slider-wrap {
          position: relative;
          margin: 0 auto;
          padding: 40px 60px;
          overflow: hidden;
          margin-top: 40px;
          max-width: 1250px;
        }
        .testi-slider-track {
          display: flex;
          transition: transform .5s cubic-bezier(.4,0,.2,1);
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
          box-sizing: border-box;
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
          text-align: left;
        }
        .testi-text strong {
          font-weight: 700;
        }
        .testi-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 50% !important;
        }
        .testi-logo {
          width: auto;
          height: 36px;
          max-width: 110px;
          object-fit: contain;
          display: block;
          margin: 0 !important;
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
          transition: all .25s;
        }
        .testi-nav button:hover {
          background: #F5A623;
        }
        .testi-nav button:hover svg {
          fill: #ffffff;
        }
        .testi-nav button svg {
          width: 18px;
          height: 18px;
          fill: #F5A623;
          transition: fill .25s;
        }
        .testi-dots {
          display: flex;
          gap: 8px;
        }
        .testi-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: background .3s;
        }
        .testi-dot.active {
          background: #F5A623;
        }

        .kka-eval-list {
          list-style: none !important;
          padding: 0 !important;
          margin: 0 !important;
          text-align: left;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .kka-eval-list li {
          position: relative;
          padding-left: 18px !important;
          font-size: 14px;
          color: #334155;
          line-height: 1.45;
          font-weight: 500;
        }

        /* Partners & Contact */
        .kka-partners-wrap {
          display: flex;
          justify-content: center;
          gap: 80px;
          align-items: center;
          max-width: 1100px;
          margin: 60px auto 30px auto;
          flex-wrap: wrap;
        }

        .kka-partners-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .kka-partners-col-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 16px 0;
          letter-spacing: 0.5px;
        }

        .kka-partners-img-row {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kka-partners-govt-img {
          height: 60px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
        }

        .kka-partners-partner-img {
          height: 55px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
        }

        .kka-contact-box {
          border: 1.5px solid #0d53c7;
          border-radius: 12px;
          padding: 24px 30px;
          text-align: center;
          max-width: 950px;
          margin: 40px auto 60px auto;
          background: #ffffff;
          box-shadow: 0 4px 15px rgba(13, 83, 199, 0.06);
        }

        .kka-contact-box-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 24px;
          font-weight: 700;
          color: #0d53c7;
          margin: 0 0 8px 0;
          text-transform: uppercase;
        }

        .kka-contact-box-desc {
          font-size: 15px;
          color: #334155;
          margin: 0;
        }

        .kka-contact-box-desc a {
          color: #0d53c7;
          font-weight: 600;
          text-decoration: underline;
        }

        /* Animations & Media Queries */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media(max-width: 1024px) {
          .testi-card { flex: 0 0 50% !important; } 
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .kka-categories-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .kka-eval-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .kka-why-matter-flow { flex-wrap: wrap; justify-content: center; gap: 30px; }
          .kka-why-matter-arrow { display: none; }
          .kka-why-matter-item { max-width: 260px; }
          .kka-cta-split-section { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 992px) {
          .hero-tab-content { flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .action-buttons { justify-content: center !important; }
          .image-content { margin-top: 40px !important; justify-content: center !important; }
          .institutional-layout { flex-direction: column !important; text-align: center !important; }
          .institutional-text-col { text-align: center !important; }
          .institutional-image-col { justify-content: center !important; margin-top: 40px !important; }
          .kka-participate-inner { grid-template-columns: 1fr !important; }
          .kka-partners-wrap { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 900px) {
          .kka-timeline-bar { flex-direction: column !important; align-items: stretch !important; gap: 20px !important; padding: 20px !important; }
          .kka-timeline-bar-steps { max-width: 100% !important; overflow-x: auto !important; padding-top: 14px !important; gap: 12px !important; }
          .kka-steps-row { flex-direction: column !important; align-items: center !important; gap: 30px !important; }
          .kka-steps-row::before {
            top: 36px !important; bottom: 36px !important; left: 50% !important; right: auto !important; width: 2px !important; height: auto !important;
            transform: translateX(-50%) !important; background-image: repeating-linear-gradient(to bottom, #94a3b8 0, #94a3b8 10px, transparent 10px, transparent 20px) !important;
          }
          .kka-step-col { width: 100% !important; max-width: 320px !important; }
        }

        @media(max-width: 800px) {
          .testi-slider-wrap { padding: 40px 20px !important; }
          .testi-card { flex: 0 0 100% !important; padding: 0 10px !important; }
          .testi-card-inner { padding: 30px 20px !important; }
        }

        @media (max-width: 768px) {
          .about-heading-blue { font-size: 2.2rem !important; }
          .main-title { font-size: 2.5rem !important; }
          .subtitle { font-size: 1.3rem !important; }
          .section-title { font-size: 2rem !important; }
          .kka-cta-main-head { font-size: 2.1rem !important; }
          .kka-cta-timeline-box { flex-direction: column; align-items: flex-start; gap: 15px; }
          .kka-participate-wrap { padding: 50px 20px !important; margin-top: 40px !important; margin-bottom: 40px !important; }
          .kka-participate-title { font-size: 2.2rem !important; text-align: center; }
          .kka-participate-list { grid-template-columns: 1fr !important; gap: 20px !important; }
        }

        @media (max-width: 480px) {
          .features-grid { grid-template-columns: 1fr !important; }
          .kka-categories-grid { grid-template-columns: 1fr !important; }
          .kka-eval-grid { grid-template-columns: 1fr !important; }
          .main-title { font-size: 2rem !important; }
          .tab-btn { font-size: 1rem !important; padding: 10px 18px !important; }
        }
      `}</style>

      {/* =========================================
           HERO SECTION (DARK)
           ========================================= */}
      <section className="awards-section">
        <div className="header-content">
          <h1 className="main-title">{hero.title}</h1>
          <h2 className="subtitle">{hero.subtitle}</h2>
          <p className="hero-date-venue">{hero.dateVenue}</p>
        </div>

        {/* TABS CONTROLS WITH CONTINUOUS HORIZONTAL GOLD LINE */}
        <div className="tabs-outer-line-wrapper">
          <div className="tabs-container">
            <button 
              className={`tab-btn ${activeTab === 'corporate' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('corporate');
                setCurrentTestiIdx(0);
              }}
            >
              <span className="tab-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 8h8v3a4 4 0 0 1-8 0V8z" />
                  <path d="M12 15v3" />
                  <path d="M9 18h6" />
                  <path d="M8 9H6a2 2 0 0 0 2 2" />
                  <path d="M16 9h2a2 2 0 0 1-2 2" />
                </svg>
              </span>
              CORPORATE EXCELLENCE AWARDS
            </button>
            <button 
              className={`tab-btn ${activeTab === 'institutional' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('institutional');
                setCurrentTestiIdx(0);
              }}
            >
              <span className="tab-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 17V10" />
                  <path d="M12 17V10" />
                  <path d="M16 17V10" />
                  <path d="M6 17h12" />
                  <path d="M12 7l6 3H6l6-3z" />
                </svg>
              </span>
              INSTITUTIONAL EXCELLENCE AWARDS
            </button>
          </div>
        </div>

        {/* HERO CONTENT 1: CORPORATE */}
        {activeTab === 'corporate' && (
          <div className="hero-tab-content">
            <div className="text-content">
              <div className="kka-hero-badge-wrap">
                <img 
                  src={corporate.banner.badge} 
                  alt="Workplace Awards Initiative by Zyoin Group" 
                  className="kka-hero-badge-img"
                />
              </div>

              <h2 className="section-title">RECOGNIZING INDUSTRY LEADERSHIP<br />IN SKILLING</h2>
              <p className="description">
                {corporate.banner.description}
              </p>
              <div className="action-buttons">
                <a href="#award-categories" onClick={scrollToCategories} className="outline-btn">
                  VIEW AWARD CATEGORIES
                </a>
                <a href="#winners-say-section" onClick={scrollToWinners} className="outline-btn">
                  EXPLORE 2025 WINNERS
                </a>
              </div>
              <div>
                <Link to="/kaushalya-awards-registration" className="primary-btn">
                  APPLY NOW FOR 2026 AWARDS
                </Link>
              </div>
            </div>
            <div className="image-content">
              <img 
                src={hero.trophyImage} 
                alt="Corporate Excellence Trophy" 
                className="award-image"
              />
            </div>
          </div>
        )}

        {/* HERO CONTENT 2: INSTITUTIONAL */}
        {activeTab === 'institutional' && (
          <div className="hero-tab-content">
            <div className="text-content">
              <h2 className="section-title">RECOGNIZING INSTITUTIONAL<br />LEADERSHIP IN SKILLING</h2>
              <p className="description">
                {institutional.banner.description}
              </p>
              <div className="action-buttons">
                <a href="#award-categories" onClick={scrollToCategories} className="outline-btn">
                  VIEW AWARD CATEGORIES
                </a>
                <a href="#winners-say-section" onClick={scrollToWinners} className="outline-btn">
                  EXPLORE 2025 WINNERS
                </a>
              </div>
              <div>
                <Link to="/kaushalya-awards-registration" className="primary-btn">
                  APPLY NOW
                </Link>
              </div>
            </div>
            <div className="image-content">
              <img 
                src={institutional.banner.trophyImage} 
                alt="Institutional Excellence Trophy" 
                className="award-image"
              />
            </div>
          </div>
        )}
      </section>

      {/* =========================================
           SECTION 1: CORPORATE TAB BODY
           ========================================= */}
      {activeTab === 'corporate' && (
        <section className="about-section-wrapper">
          <div className="about-container about-corporate-center">
            
            {/* 1. ABOUT THE AWARDS */}
            <h2 className="about-heading-blue">ABOUT THE AWARDS</h2>
            <p className="intro-text">
              {corporate.about.description.split('\n\n')[0]}
            </p>
            <p className="intro-text highlight">
              These awards are a flagship initiative of the Government of Karnataka to:
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <img 
                  src={corporate.about.objectives[0].iconSvg} 
                  alt="Promote industry-led skilling" 
                  className="feature-icon" 
                />
                <div className="feature-text">Promote industry-<br />led skilling</div>
              </div>
              <div className="feature-item">
                <img 
                  src={corporate.about.objectives[1].iconSvg} 
                  alt="Encourage workforce transformation" 
                  className="feature-icon" 
                />
                <div className="feature-text">Encourage workforce<br />transformation</div>
              </div>
              <div className="feature-item">
                <img 
                  src={corporate.about.objectives[2].iconSvg} 
                  alt="Strengthen industry-government and Industry - Academia collaboration" 
                  className="feature-icon" 
                />
                <div className="feature-text">Strengthen industry-<br />government and Industry -<br />Academia collaboration</div>
              </div>
              <div className="feature-item">
                <img 
                  src={corporate.about.objectives[3].iconSvg} 
                  alt="Enhance employability and economic growth" 
                  className="feature-icon" 
                />
                <div className="feature-text">Enhance employability<br />and economic growth</div>
              </div>
            </div>

            {/* SIMPLIFIED POLICY CARD */}
            <div className="policy-card">
              <img 
                src={corporate.about.policyAlignment.policyImage} 
                alt="Karnataka Skill Development Policy 2025-30" 
                className="policy-image"
              />
            </div>

            {/* 2. WHY THESE AWARDS MATTER */}
            <div className="kka-why-matter-section">
              <h2 className="about-heading-blue">{corporate.whyMatter.title}</h2>
              <p className="kka-why-matter-subhead">{corporate.whyMatter.subtitle}</p>
              <p className="kka-why-matter-intro">{corporate.whyMatter.intro}</p>

              <div className="kka-why-matter-flow">
                {corporate.whyMatter.steps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="kka-why-matter-item">
                      <div className="kka-why-matter-circle-wrap">
                        <img 
                          src={step.image} 
                          alt={`Step ${step.num}`} 
                          className="kka-why-matter-circle-img" 
                        />
                      </div>
                      <p className="kka-why-matter-text">{step.text}</p>
                    </div>
                    {idx < corporate.whyMatter.steps.length - 1 && (
                      <div className="kka-why-matter-arrow">
                        <FaArrowRight />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="kka-why-matter-summary">
                {corporate.whyMatter.summary}
              </p>
            </div>

            {/* 3. WHY PARTICIPATE (DEEP BLUE SECTION) */}
            <div className="kka-participate-wrap">
              <div className="kka-participate-inner">
                <div>
                  <img 
                    src={corporate.whyParticipate.collageImage} 
                    alt="Ceremony Presentation Collage" 
                    className="kka-participate-collage-img"
                  />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h2 className="kka-participate-title">{corporate.whyParticipate.title}</h2>
                  <div className="kka-participate-list">
                    {corporate.whyParticipate.benefits.map((b, idx) => (
                      <div key={idx} className="kka-participate-item">
                        <div className="kka-participate-icon-box">
                          <FaArrowUpRightFromSquare />
                        </div>
                        <p className="kka-participate-text">{b}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/kaushalya-awards-registration" className="kka-participate-btn">
                    APPLY NOW
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. AWARD CATEGORIES */}
            <section id="award-categories" className="kka-categories-wrap">
              <div className="kka-categories-inner">
                <h2 className="kka-cat-main-title">{corporate.categories.title}</h2>
                <p className="kka-cat-subtitle">{corporate.categories.subtitle}</p>
                <h3 className="kka-cat-section-title">
                  {corporate.categories.sectionTitle}
                </h3>

                <div className="kka-categories-grid">
                  <div className="kka-category-svg-card">
                    <img 
                      src="/bengaluruskillsummit/wp-content/uploads/2026/awards/large-enterprises.svg" 
                      alt="Large Enterprises: Organisations with 3,000+ headcounts" 
                      className="kka-category-svg-img"
                    />
                  </div>
                  <div className="kka-category-svg-card">
                    <img 
                      src="/bengaluruskillsummit/wp-content/uploads/2026/awards/mid-market.svg" 
                      alt="Mid-Market: Organisations with 1,000-2,999 headcounts" 
                      className="kka-category-svg-img"
                    />
                  </div>
                  <div className="kka-category-svg-card">
                    <img 
                      src="/bengaluruskillsummit/wp-content/uploads/2026/awards/growth-enterprises.svg" 
                      alt="Growth Enterprise: Organisations with 200-999 headcount" 
                      className="kka-category-svg-img"
                    />
                  </div>
                  <div className="kka-category-svg-card">
                    <img 
                      src="/bengaluruskillsummit/wp-content/uploads/2026/awards/emerging-msme.svg" 
                      alt="Emerging / MSME - Organisations with fewer than 200 headcounts" 
                      className="kka-category-svg-img"
                    />
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '35px' }}>
                  <Link to="/kaushalya-awards-registration" className="kka-participate-btn">
                    APPLY NOW
                  </Link>
                </div>
              </div>
            </section>

            {/* 5. EVALUATION FRAMEWORK */}
            <div className="kka-eval-section">
              <h2 className="about-heading-blue">{corporate.evaluation.title}</h2>
              <p className="intro-text" style={{ marginBottom: '20px' }}>
                {corporate.evaluation.subtitle}
              </p>

              <div className="kka-eval-grid">
                {corporate.evaluation.pillars.map((pillar, idx) => (
                  <div 
                    key={idx} 
                    className="kka-eval-card"
                    style={{ borderColor: pillar.borderColor, background: `linear-gradient(180deg, ${pillar.bg} 0%, #ffffff 60%)` }}
                  >
                    <img 
                      src={pillar.icon} 
                      alt={pillar.title} 
                      className="kka-eval-icon-img"
                    />
                    <h3 className="kka-eval-title">{pillar.title}</h3>
                    <div className="kka-eval-divider" style={{ backgroundColor: pillar.color }}></div>
                    <ul className="kka-eval-list">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} style={{ color: '#334155' }}>
                          <span style={{ color: pillar.color, fontWeight: 'bold', marginRight: '6px' }}>•</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. FOUR STEPS FROM NOMINATION TO RECOGNITION */}
            <div className="kka-timeline-wrapper">
              <div style={{ textAlign: 'center' }}>
                <h2 className="about-heading-blue">{corporate.process.title}</h2>
              </div>

              <div className="kka-steps-row">
                {corporate.process.steps.map((step, idx) => (
                  <div key={idx} className="kka-step-col">
                    <div className="kka-step-badge">{step.num}</div>
                    <h3 className="kka-step-heading">{step.title}</h3>
                    <p className="kka-step-desc">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Application Timeline 2026 Cycle Card */}
              <div className="kka-timeline-card-wrap">
                <div className="kka-timeline-bar">
                  <div className="kka-timeline-bar-left">
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Application Timeline
                    </span>
                    <span className="kka-timeline-bar-title">2026 CYCLE</span>
                  </div>
                  <div className="kka-timeline-bar-steps">
                    {corporate.process.timeline.milestones.map((m, idx) => (
                      <div key={idx} className="kka-timeline-bar-item">
                        <div className="kka-timeline-bar-dot"></div>
                        <span className="kka-timeline-bar-item-lbl">{m.label}</span>
                        <span className="kka-timeline-bar-item-dt">{m.date}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/kaushalya-awards-registration" className="primary-btn" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            {/* 7. 2025 WINNERS SHOWCASE BANNER */}
            <section id="2025-winners" className="kka-showcase-banner-cream">
              <h2 className="kka-showcase-cream-title">{showcase2025.title}</h2>
              <Link to={showcase2025.buttonLink} className="primary-btn">
                {showcase2025.buttonText}
              </Link>
            </section>

            {/* 8. CTA SECTION ("Be part of Karnataka's most prestigious...") */}
            <div className="kka-cta-split-section">
              <div className="kka-cta-photo-col">
                <img 
                  src={corporate.cta.image} 
                  alt="Bengaluru Skill Summit Awards Ceremony" 
                />
              </div>
              <div className="kka-cta-text-col">
                <h2 className="kka-cta-main-head">{corporate.cta.title}</h2>
                <h3 className="kka-cta-subhead">Application Timeline</h3>

                <div className="kka-cta-timeline-box">
                  <div className="kka-cta-timeline-unit">
                    <div className="kka-cta-timeline-icon">
                      <LuGift />
                    </div>
                    <p className="kka-cta-timeline-label">
                      Launch: <strong>{corporate.cta.launch}</strong>
                    </p>
                  </div>
                  <div className="kka-cta-timeline-unit">
                    <div className="kka-cta-timeline-icon red">
                      <LuClock />
                    </div>
                    <p className="kka-cta-timeline-label">
                      Deadline: <strong>{corporate.cta.deadline}</strong>
                    </p>
                  </div>
                </div>

                <div className="kka-cta-btn-row">
                  <Link to="/kaushalya-awards-registration" className="primary-btn">
                    Apply Now
                  </Link>
                  <a 
                    href="#download-guidelines" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleDownloadCalendar();
                    }}
                    className="kka-cta-download-btn"
                  >
                    Download Guidelines
                  </a>
                </div>
              </div>
            </div>

            {/* 9. WHAT OUR 2025 WINNERS SAY SLIDER */}
            <div style={{ textAlign: 'center', marginTop: '70px' }}>
              <h2 className="about-heading-blue">{testimonials.title}</h2>
            </div>
            {renderTestimonialsSlider()}

            {/* 10. Organised by & Partners */}
            <div className="kka-partners-wrap">
              <div className="kka-partners-col">
                <h3 className="kka-partners-col-title">Organised By</h3>
                <div className="kka-partners-img-row">
                  <img 
                    src="/bengaluruskillsummit/wp-content/uploads/2026/awards/organised_by_logos.png" 
                    alt="Government of Karnataka, KSDC, KSDA" 
                    className="kka-partners-govt-img"
                  />
                </div>
              </div>
              <div className="kka-partners-col">
                <h3 className="kka-partners-col-title">In Partnership with</h3>
                <div className="kka-partners-img-row">
                  <img 
                    src="/bengaluruskillsummit/wp-content/uploads/2026/awards/partnership_logos.png" 
                    alt="Workplace Awards Initiative by Zyoin Group" 
                    className="kka-partners-partner-img"
                  />
                </div>
              </div>
            </div>

            {/* 11. Contact Info Box */}
            <div className="kka-contact-box">
              <h3 className="kka-contact-box-title">{contactInfo.title}</h3>
              <p className="kka-contact-box-desc">
                Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> | Phone: {contactInfo.phone}
              </p>
            </div>

          </div>
        </section>
      )}

      {/* =========================================
           SECTION 2: INSTITUTIONAL TAB BODY
           ========================================= */}
      {activeTab === 'institutional' && (
        <section className="about-section-wrapper">
          <div className="about-container">
            
            <div className="institutional-layout">
              <div className="institutional-text-col">
                <h2 className="about-heading-blue" style={{ textAlign: 'left' }}>
                  RECOGNISING EXCELLENCE IN SKILL DEVELOPMENT EDUCATION &amp; TRAINING
                </h2>
                
                <p className="institutional-paragraph">
                  {institutional.overview.p1}
                </p>
                <p className="institutional-paragraph">
                  {institutional.overview.p2}
                </p>
                <div style={{ marginTop: '25px' }}>
                  <Link to="/kaushalya-awards-registration" className="primary-btn">
                    Apply for Institutional Award
                  </Link>
                </div>
              </div>
              
              <div className="institutional-image-col">
                <img 
                  src={institutional.overview.collageImage} 
                  alt="Institutional Excellence Awards Showcase"
                  className="institutional-image"
                />
              </div>
            </div>

            {/* Key Stakeholders & Partners */}
            <div style={{ textAlign: 'center', margin: '60px 0 25px 0' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0d53c7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Key Institutional Stakeholders &amp; Partners
              </h3>
            </div>
            <div className="kka-inst-logos-grid">
              {institutional.overview.institutes.map((inst, idx) => (
                <div key={idx} className="kka-inst-logo-card">
                  <div style={{ fontSize: '28px', color: '#0d53c7', marginBottom: '8px' }}>
                    {idx % 2 === 0 ? <FaBuildingColumns /> : <FaGraduationCap />}
                  </div>
                  <span style={{ fontSize: '15px', color: '#0d53c7', fontWeight: 800, display: 'block', marginBottom: '4px' }}>
                    {inst.abbr}
                  </span>
                  <span style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.3 }}>
                    {inst.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Institutional Categories */}
            <section id="award-categories" className="kka-categories-wrap">
              <div className="kka-categories-inner">
                <h2 className="kka-cat-main-title">{institutional.categories.title}</h2>
                <h3 className="kka-cat-section-title" style={{ color: '#ffc933', marginTop: '10px' }}>
                  {institutional.categories.subtitle}
                </h3>

                <div className="kka-categories-grid">
                  {institutional.categories.items.map((cat, idx) => (
                    <div 
                      key={idx} 
                      className="kka-category-card"
                      style={{ backgroundColor: '#ffffff', borderColor: cat.color }}
                    >
                      <div className="kka-category-icon" style={{ color: cat.color }}>
                        {idx === 0 && <FaLocationDot />}
                        {idx === 1 && <FaGraduationCap />}
                        {idx === 2 && <FaTrophy />}
                        {idx === 3 && <FaUsers />}
                      </div>
                      <h4 className="kka-category-title">{cat.title}</h4>
                    </div>
                  ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '35px' }}>
                  <Link to="/kaushalya-awards-registration" className="kka-participate-btn">
                    APPLY NOW
                  </Link>
                </div>
              </div>
            </section>

            {/* WHAT OUR 2025 WINNERS SAY SLIDER */}
            <div style={{ textAlign: 'center', marginTop: '70px' }}>
              <h2 className="about-heading-blue">{testimonials.title}</h2>
            </div>
            {renderTestimonialsSlider()}

            {/* 2025 Winners Showcase Banner */}
            <section id="2025-winners" className="kka-showcase-banner-cream">
              <h2 className="kka-showcase-cream-title">{showcase2025.title}</h2>
              <Link to={showcase2025.buttonLink} className="primary-btn">
                {showcase2025.buttonText}
              </Link>
            </section>

            {/* Organised by & Partners */}
            <div className="kka-partners-wrap">
              <div className="kka-partners-col">
                <h3 className="kka-partners-col-title">Organised By</h3>
                <div className="kka-partners-img-row">
                  <img 
                    src="/bengaluruskillsummit/wp-content/uploads/2026/awards/organised_by_logos.png" 
                    alt="Government of Karnataka, KSDC, KSDA" 
                    className="kka-partners-govt-img"
                  />
                </div>
              </div>
              <div className="kka-partners-col">
                <h3 className="kka-partners-col-title">In Partnership with</h3>
                <div className="kka-partners-img-row">
                  <img 
                    src="/bengaluruskillsummit/wp-content/uploads/2026/awards/partnership_logos.png" 
                    alt="Workplace Awards Initiative by Zyoin Group" 
                    className="kka-partners-partner-img"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info Box */}
            <div className="kka-contact-box">
              <h3 className="kka-contact-box-title">{contactInfo.title}</h3>
              <p className="kka-contact-box-desc">
                Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> | Phone: {contactInfo.phone}
              </p>
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
