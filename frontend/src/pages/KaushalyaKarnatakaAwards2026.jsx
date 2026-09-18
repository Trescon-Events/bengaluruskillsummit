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
  FaLocationDot
} from 'react-icons/fa6';
import {
  LuLightbulb,
  LuBrainCircuit,
  LuTrendingUp,
  LuSprout,
  LuSettings,
  LuCalendarCheck2
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
      'DTSTART;VALUE=DATE:20261103',
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
            <div key={card.id} className="testi-card">
              <div className="testi-card-inner">
                <span className="testi-quote-icon">
                  <svg viewBox="0 0 48 36">
                    <path d="M0 36V20.4C0 13.6 1.4 8.6 4.2 5.4 7 2 11.2.2 16.8 0l1.2 6c-3.2.4-5.6 1.6-7.2 3.4-1.6 1.8-2.6 4-2.8 6.6H14v20H0Zm26 0V20.4c0-6.8 1.4-11.8 4.2-15C33 2 37.2.2 42.8 0L44 6c-3.2.4-5.6 1.6-7.2 3.4-1.6 1.8-2.6 4-2.8 6.6H40v20H26Z"/>
                  </svg>
                </span>
                <p 
                  className="testi-text"
                  dangerouslySetInnerHTML={{ __html: card.text }}
                />
                <div className="testi-footer">
                  <img 
                    className="testi-logo" 
                    src={card.logo} 
                    alt={card.company} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-nav">
          <button 
            className="testi-prev" 
            aria-label="Previous"
            onClick={handlePrevTesti}
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <div className="testi-dots">
            {Array.from({ length: maxTestiIndex + 1 }).map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`testi-dot ${currentTestiIdx === dotIdx ? 'active' : ''}`}
                onClick={() => setCurrentTestiIdx(dotIdx)}
              />
            ))}
          </div>
          <button 
            className="testi-next" 
            aria-label="Next"
            onClick={handleNextTesti}
          >
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="kka-2026-page">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Jost:wght@400;500;600;700;800&family=Outfit:wght@400;600;800&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap");

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
          padding: 70px 5% 60px 5%;
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
          margin-bottom: 35px;
          position: relative;
          z-index: 2;
        }

        .main-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 3.5rem;
          color: #ffc933; 
          margin: 0;
          font-weight: 700;
          letter-spacing: 0.5px;
          line-height: 1.15;
          text-shadow: 0 2px 14px rgba(0,0,0,0.5);
        }

        .subtitle {
          font-family: 'Jost', sans-serif !important;
          font-size: 1.8rem;
          color: #FFFFFF;
          margin: 8px 0 16px;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .hero-date-venue {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          margin: 0 0 10px 0;
        }

        /* TABS */
        .tabs-container {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-bottom: 45px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 26px;
          border-radius: 8px;
          font-family: 'Jost', sans-serif !important;
          font-size: 1.15rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: transparent;
          color: #ffc933;
          border: 2px solid #ffc933;
          text-transform: uppercase;
        }

        .tab-btn.active {
          background-color: #ffc933;
          color: #111111;
          font-weight: 700;
          box-shadow: 0 6px 20px rgba(255, 201, 51, 0.35);
        }

        .tab-icon {
          font-size: 18px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }

        /* HERO CONTENT CONTAINERS */
        .hero-tab-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1250px;
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
          margin-bottom: 22px;
        }

        .kka-hero-badge-img {
          height: 52px;
          width: auto;
          max-width: 300px;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));
        }

        .section-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 2.5rem;
          line-height: 1.2;
          margin-top: 0;
          margin-bottom: 20px;
          text-transform: uppercase;
          font-weight: 700;
          color: #ffffff;
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.65;
          margin-bottom: 30px;
          color: #e0e0e0;
        }

        .action-buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .outline-btn {
          background: transparent;
          color: white;
          border: 1px solid white;
          padding: 10px 22px;
          border-radius: 20px;
          font-family: 'Comfortaa', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .outline-btn:hover { 
          background: rgba(255, 255, 255, 0.15); 
          color: white; 
          transform: translateY(-2px);
        }

        .primary-btn {
          background: linear-gradient(90deg, #ff6b6b, #ff8e53);
          color: white !important;
          border: none;
          padding: 12px 35px;
          border-radius: 25px;
          font-family: 'Comfortaa', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
        }
        .primary-btn:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6); 
        }

        .image-content {
          flex: 0.85;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .award-image {
          max-width: 100%;
          height: auto;
          max-height: 480px;
          object-fit: contain;
          filter: drop-shadow(0 15px 35px rgba(0,0,0,0.6));
        }

        /* =========================================
           ABOUT SECTIONS (WHITE BACKGROUND)
           ========================================= */
        .about-section-wrapper {
          background-color: #ffffff;
          padding: 70px 5%;
          color: #333333;
          animation: fadeIn 0.5s ease;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Corporate About specific styles */
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
          max-width: 1000px;
          margin: 0 auto 28px;
          color: #444444;
          text-align: center;
        }

        .intro-text.highlight {
          margin-bottom: 50px;
          font-weight: 600;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-bottom: 70px;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .feature-icon {
          width: 90px;
          height: 90px;
          margin-bottom: 20px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .feature-item:hover .feature-icon { transform: translateY(-5px); }
        .feature-text {
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 500;
          color: #333333;
        }

        /* Simplified Policy Card */
        .policy-card {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 1000px;
          margin: 0 auto 70px auto;
        }
        
        .policy-image {
          width: 100%;
          max-width: 800px; 
          height: auto;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }

        /* CORPORATE CATEGORY / EVALUATION SECTION */
        .bss-category-section {
          width: 100%; 
          margin: 30px 0 0 0; 
          padding: 20px 0; 
          box-sizing: border-box;
          display: flex; 
          justify-content: center; 
          background-color: transparent;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .bss-category-section * { box-sizing: border-box; }
        .bss-category-section .cards-container {
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 16px; 
          max-width: 1200px; 
          width: 100%;
        }
        .bss-category-section .card {
          border-radius: 16px; 
          padding: 32px 20px; 
          display: flex; 
          flex-direction: column;
          align-items: center; 
          text-align: center; 
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.8); 
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .bss-category-section .card:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06); 
        }
        .bss-category-section .card-blue { background: linear-gradient(180deg, #f0f7ff 0%, #f8fbff 40%, #ffffff 100%); }
        .bss-category-section .card-red { background: linear-gradient(180deg, #fff3f3 0%, #fdf8f8 40%, #ffffff 100%); }
        .bss-category-section .card-yellow { background: linear-gradient(180deg, #fffbeb 0%, #fefcf6 40%, #ffffff 100%); }
        .bss-category-section .card-green { background: linear-gradient(180deg, #f0fdf4 0%, #f7fdf9 40%, #ffffff 100%); }
        .bss-category-section .icon-wrapper {
          width: 76px; 
          height: 76px; 
          border-radius: 50%; 
          display: flex; 
          align-items: center;
          justify-content: center; 
          margin-bottom: 20px; 
          background: #ffffff; 
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
        }
        .bss-category-section .card-blue .icon-wrapper { border: 2px solid #e0edff; color: #2563eb; }
        .bss-category-section .card-red .icon-wrapper { border: 2px solid #fee2e2; color: #ef4444; }
        .bss-category-section .card-yellow .icon-wrapper { border: 2px solid #fef3c7; color: #f59e0b; }
        .bss-category-section .card-green .icon-wrapper { border: 2px solid #d1fae5; color: #10b981; }
        
        .bss-category-section .card-title {
          font-size: 1.02rem; 
          font-weight: 700; 
          color: #1e293b; 
          line-height: 1.35;
          min-height: 44px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          margin-bottom: 14px;
        }
        .bss-category-section .divider { 
          width: 28px; 
          height: 3px; 
          border-radius: 2px; 
          margin-bottom: 20px; 
        }
        .bss-category-section .card-blue .divider { background-color: #2563eb; }
        .bss-category-section .card-red .divider { background-color: #ef4444; }
        .bss-category-section .card-yellow .divider { background-color: #f59e0b; }
        .bss-category-section .card-green .divider { background-color: #10b981; }

        .bss-category-section .item-list,
        .bss-category-section .item-list li {
          list-style: none !important;
          list-style-type: none !important;
          margin-bottom: 0 !important;
        }

        .bss-category-section .item-list {
          text-align: left; 
          width: 100%; 
          font-size: 0.88rem; 
          margin: 0 !important; 
          padding: 0 !important;
          color: #334155; 
          line-height: 1.4; 
          display: flex; 
          flex-direction: column; 
          gap: 12px;
        }
        .bss-category-section .item-list li { 
          position: relative; 
          padding-left: 14px !important; 
          margin: 0 !important; 
        }
        .bss-category-section .item-list li::before { content: "•"; position: absolute; left: 0; top: -1px; font-size: 1.1rem; }
        .bss-category-section .card-blue .item-list li::before { color: #2563eb; }
        .bss-category-section .card-red .item-list li::before { color: #ef4444; }
        .bss-category-section .card-yellow .item-list li::before { color: #f59e0b; }
        .bss-category-section .card-green .item-list li::before { color: #10b981; }

        /* CORPORATE TIMELINE SECTION */
        .bss-timeline-embed-wrapper {
          width: 100%; 
          margin: 30px 0 60px 0; 
          padding: 20px 0; 
          box-sizing: border-box;
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          gap: 40px;
          background-color: transparent; 
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .bss-timeline-embed-wrapper * { box-sizing: border-box; }
        .bss-timeline-embed-wrapper .section-container { 
          width: 100%; 
          max-width: 1150px; 
          display: flex; 
          justify-content: center; 
        }
        .bss-timeline-embed-wrapper .process-timeline {
          display: flex; 
          justify-content: space-between; 
          align-items: flex-start;
          width: 100%; 
          position: relative; 
          font-family: 'Outfit', sans-serif;
        }
        .bss-timeline-embed-wrapper .process-timeline::before {
          content: ""; 
          position: absolute; 
          top: 42px; 
          left: calc(12.5% - 20px); 
          right: calc(12.5% - 20px);
          height: 2px; 
          z-index: 1;
          background-image: repeating-linear-gradient(to right, #0f172a 0, #0f172a 10px, transparent 10px, transparent 20px);
        }
        .bss-timeline-embed-wrapper .step-item {
          position: relative; 
          z-index: 2; 
          display: flex; 
          flex-direction: column;
          align-items: center; 
          text-align: center; 
          flex: 1; 
          padding: 0 12px;
        }
        .bss-timeline-embed-wrapper .step-circle {
          width: 84px; 
          height: 84px; 
          border-radius: 50%; 
          background-color: #f0f6fc;
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 2rem;
          font-weight: 800; 
          color: #cbd5e1; 
          margin-bottom: 20px;
        }
        .bss-timeline-embed-wrapper .step-title {
          font-size: 1.15rem; 
          font-weight: 800; 
          color: #0f172a; 
          letter-spacing: 1.2px;
          text-transform: uppercase; 
          margin-bottom: 8px;
        }
        .bss-timeline-embed-wrapper .step-description {
          font-size: 0.9rem; 
          font-weight: 400; 
          color: #475569; 
          line-height: 1.45; 
          max-width: 210px;
        }
        .bss-timeline-embed-wrapper .timeline-card {
          width: 100%; 
          background-color: #dbeafe; 
          border: 3px solid #0090ff; 
          border-radius: 16px;
          padding: 20px 32px; 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          gap: 24px;
        }
        .bss-timeline-embed-wrapper .header-section { 
          display: flex; 
          align-items: center; 
          gap: 12px; 
          flex-shrink: 0; 
        }
        .bss-timeline-embed-wrapper .header-text { 
          display: flex; 
          flex-direction: column; 
          text-align: left;
        }
        .bss-timeline-embed-wrapper .header-text .label { 
          font-size: 0.75rem; 
          font-weight: 700; 
          color: #475569; 
          letter-spacing: 0.5px; 
          text-transform: uppercase; 
        }
        .bss-timeline-embed-wrapper .header-text .cycle { 
          font-size: 1rem; 
          font-weight: 800; 
          color: #0f172a; 
          letter-spacing: 0.5px; 
        }
        .bss-timeline-embed-wrapper .timeline-steps {
          display: flex; 
          align-items: flex-start; 
          justify-content: space-between;
          position: relative; 
          flex-grow: 1; 
          max-width: 500px;
        }
        .bss-timeline-embed-wrapper .timeline-steps::before {
          content: ""; 
          position: absolute; 
          top: -10px; 
          left: 10px; 
          right: 10px; 
          border-top: 2px dashed #94a3b8; 
          z-index: 1;
        }
        .bss-timeline-embed-wrapper .timeline-item { 
          display: flex; 
          flex-direction: column; 
          align-items: flex-start; 
          position: relative; 
          z-index: 2; 
          text-align: left;
        }
        .bss-timeline-embed-wrapper .timeline-badge { 
          width: 30px; 
          height: 6px; 
          background-color: #00d592; 
          border-radius: 2px; 
          margin-bottom: 8px; 
        }
        .bss-timeline-embed-wrapper .item-label { 
          font-size: 0.65rem; 
          font-weight: 700; 
          color: #64748b; 
          letter-spacing: 0.5px; 
          text-transform: uppercase; 
          margin-bottom: 2px; 
        }
        .bss-timeline-embed-wrapper .item-date { 
          font-size: 0.85rem; 
          font-weight: 800; 
          color: #0f172a; 
          white-space: nowrap; 
        }
        .bss-timeline-embed-wrapper .btn-calender {
          background-color: #ff5952; 
          color: #ffffff; 
          border: none; 
          padding: 12px 20px;
          border-radius: 8px; 
          font-size: 0.75rem; 
          font-weight: 700; 
          letter-spacing: 0.8px;
          text-transform: uppercase; 
          cursor: pointer; 
          flex-shrink: 0; 
          transition: background-color 0.2s ease, transform 0.2s;
        }
        .bss-timeline-embed-wrapper .btn-calender:hover { 
          background-color: #e04842; 
          transform: translateY(-2px);
        }

        /* WHY PARTICIPATE & CATEGORIES */
        .kka-participate-wrap {
          background: #f8fafc;
          padding: 60px 20px;
          margin: 40px 0;
          border-radius: 20px;
        }

        .kka-participate-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
        }

        .kka-participate-collage-img {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .kka-participate-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 2.2rem;
          color: #0d53c7;
          margin: 0 0 20px 0;
          font-weight: 800;
          text-transform: uppercase;
        }

        .kka-participate-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 25px;
        }

        .kka-participate-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .kka-participate-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #dbeafe;
          color: #0d53c7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
        }

        .kka-participate-text {
          font-size: 15px;
          color: #334155;
          margin: 0;
        }

        /* Categories Section */
        .kka-categories-wrap {
          background: #081736 url('/bengaluruskillsummit/wp-content/uploads/2026/08/banner-skillathon-03-2-2.png') no-repeat center center / cover;
          padding: 60px 20px;
          color: #ffffff;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          margin: 40px 0;
        }

        .kka-categories-wrap::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(8, 23, 54, 0.85);
          pointer-events: none;
        }

        .kka-categories-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          text-align: center;
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

        .kka-dignitaries-img {
          height: 52px;
          width: auto;
          object-fit: contain;
          border-radius: 8px;
        }

        .kka-categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin: 35px 0;
        }

        .kka-category-card {
          background: #ffffff;
          border: 2px solid;
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        .kka-category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.25);
        }

        .kka-category-icon {
          font-size: 32px;
          margin-bottom: 14px;
        }

        .kka-category-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 1.2rem;
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

        /* 2025 Winners Showcase Banner */
        .kka-showcase-banner {
          background: linear-gradient(135deg, #0b1a38 0%, #030a17 100%);
          color: #ffffff;
          padding: 50px 30px;
          border-radius: 20px;
          text-align: center;
          margin: 50px auto 40px auto;
          max-width: 1200px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .kka-showcase-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 24px 0;
          color: #ffffff;
          line-height: 1.3;
        }

        /* Partners & Contact */
        .kka-partners-wrap {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 30px;
          align-items: center;
          max-width: 1100px;
          margin: 40px auto 20px auto;
        }

        .kka-partners-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .kka-partners-col-title {
          font-family: 'Jost', sans-serif !important;
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 16px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .kka-partners-img-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .kka-partners-govt-img {
          height: 65px;
          width: auto;
          object-fit: contain;
        }

        .kka-partners-partner-img {
          height: 52px;
          width: auto;
          object-fit: contain;
          background: #081736;
          padding: 8px 16px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
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
          .bss-timeline-embed-wrapper .timeline-card { flex-direction: column !important; align-items: stretch !important; gap: 20px !important; padding: 20px !important; }
          .bss-timeline-embed-wrapper .timeline-steps { max-width: 100% !important; overflow-x: auto !important; padding-top: 14px !important; gap: 12px !important; }
          .bss-timeline-embed-wrapper .btn-calender { width: 100% !important; text-align: center !important; }
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
          .bss-timeline-embed-wrapper .process-timeline { flex-direction: column !important; align-items: center !important; gap: 32px !important; }
          .bss-timeline-embed-wrapper .process-timeline::before {
            top: 42px !important; bottom: 42px !important; left: 50% !important; right: auto !important; width: 2px !important; height: auto !important;
            transform: translateX(-50%) !important; background-image: repeating-linear-gradient(to bottom, #0f172a 0, #0f172a 10px, transparent 10px, transparent 20px) !important;
          }
          .bss-timeline-embed-wrapper .step-item { width: 100% !important; max-width: 300px !important; }
        }

        @media (max-width: 480px) {
          .features-grid { grid-template-columns: 1fr !important; }
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

        {/* TABS CONTROLS */}
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'corporate' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('corporate');
              setCurrentTestiIdx(0);
            }}
          >
            <span className="tab-icon">🏆</span>
            CORPORATE EXCELLENCE AWARDS
          </button>
          <button 
            className={`tab-btn ${activeTab === 'institutional' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('institutional');
              setCurrentTestiIdx(0);
            }}
          >
            <span className="tab-icon">🏛️</span>
            INSTITUTIONAL EXCELLENCE AWARDS
          </button>
        </div>

        {/* HERO CONTENT 1: CORPORATE */}
        {activeTab === 'corporate' && (
          <div className="hero-tab-content">
            <div className="text-content">
              <div className="kka-hero-badge-wrap">
                <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#cbd5e1', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                  POWERED BY
                </span>
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
           ABOUT SECTION 1: CORPORATE (WHITE BACKGROUND)
           ========================================= */}
      {activeTab === 'corporate' && (
        <section className="about-section-wrapper">
          <div className="about-container about-corporate-center">
            
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

            {/* SIMPLIFIED POLICY CARD (Image contains text already) */}
            <div className="policy-card">
              <img 
                src={corporate.about.policyAlignment.policyImage} 
                alt="Karnataka Skill Development Policy 2025-30" 
                className="policy-image"
              />
            </div>

            {/* EVALUATION FRAMEWORK SECTION */}
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <h2 className="about-heading-blue">Evaluation Framework</h2>
              <p className="intro-text" style={{ marginBottom: '20px' }}>
                The evaluation framework is designed to assess real impact, not just activity.
              </p>
            </div>

            <div className="bss-category-section">
              <div className="cards-container">
                <div className="card card-blue">
                  <div className="icon-wrapper">
                    <LuLightbulb strokeWidth={1.8} style={{ width: '34px', height: '34px' }} />
                  </div>
                  <h3 className="card-title">Skilling &amp; Workforce Development</h3>
                  <div className="divider"></div>
                  <ul className="item-list">
                    <li>Training Programs</li>
                    <li>Upskilling Initiatives</li>
                    <li>Certification Outcomes</li>
                  </ul>
                </div>

                <div className="card card-red">
                  <div className="icon-wrapper">
                    <LuBrainCircuit strokeWidth={1.8} style={{ width: '34px', height: '34px' }} />
                  </div>
                  <h3 className="card-title">Employability &amp; Workforce Integration</h3>
                  <div className="divider"></div>
                  <ul className="item-list">
                    <li>Apprenticeships (NAPS/ NATS)</li>
                    <li>Internships &amp; Fellowships</li>
                    <li>Employment Generation</li>
                  </ul>
                </div>

                <div className="card card-yellow">
                  <div className="icon-wrapper">
                    <LuTrendingUp strokeWidth={1.8} style={{ width: '34px', height: '34px' }} />
                  </div>
                  <h3 className="card-title">Industry Collaboration</h3>
                  <div className="divider"></div>
                  <ul className="item-list">
                    <li>Partnerships With Institutions</li>
                    <li>Engagement With Government Initiatives</li>
                    <li>Participation In Skill Ecosystem (ILC, Etc.)</li>
                  </ul>
                </div>

                <div className="card card-green">
                  <div className="icon-wrapper">
                    <LuSprout strokeWidth={1.8} style={{ width: '34px', height: '34px' }} />
                  </div>
                  <h3 className="card-title">Inclusion &amp; Sustainability</h3>
                  <div className="divider"></div>
                  <ul className="item-list">
                    <li>Women Participation</li>
                    <li>Rural &amp; Underserved Groups</li>
                    <li>Inclusive Hiring</li>
                  </ul>
                </div>

                <div className="card card-blue">
                  <div className="icon-wrapper">
                    <LuSettings strokeWidth={1.8} style={{ width: '34px', height: '34px' }} />
                  </div>
                  <h3 className="card-title">Innovation &amp; Future Skills</h3>
                  <div className="divider"></div>
                  <ul className="item-list">
                    <li>Digital Skilling</li>
                    <li>AI/ML, EV, Green Skills</li>
                    <li>Technology-Driven Learning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FOUR STEPS TIMELINE SECTION */}
            <div style={{ textAlign: 'center', marginTop: '70px' }}>
              <h2 className="about-heading-blue">Four steps from nomination to recognition</h2>
            </div>

            <div className="bss-timeline-embed-wrapper">
              <div className="section-container">
                <div className="process-timeline">
                  <div className="step-item">
                    <div className="step-circle">01</div>
                    <h3 className="step-title">Nomination</h3>
                    <p className="step-description">Organisations submit applications through the online portal</p>
                  </div>
                  <div className="step-item">
                    <div className="step-circle">02</div>
                    <h3 className="step-title">Evaluation</h3>
                    <p className="step-description">Data-driven scoring based on defined parameters</p>
                  </div>
                  <div className="step-item">
                    <div className="step-circle">03</div>
                    <h3 className="step-title">Recognition</h3>
                    <p className="step-description">Winners announced at Bengaluru Skill Summit 2026</p>
                  </div>
                  <div className="step-item">
                    <div className="step-circle">04</div>
                    <h3 className="step-title">Jury Review</h3>
                    <p className="step-description">Independent jury panel validates shortlisted entries</p>
                  </div>
                </div>
              </div>

              <div className="section-container">
                <div className="timeline-card">
                  <div className="header-section">
                    <LuCalendarCheck2 strokeWidth={2} style={{ width: '36px', height: '36px', color: '#0f172a' }} />
                    <div className="header-text">
                      <span className="label">Application Timeline</span>
                      <span className="cycle">2026 CYCLE</span>
                    </div>
                  </div>
                  <div className="timeline-steps">
                    <div className="timeline-item">
                      <div className="timeline-badge"></div>
                      <span className="item-label">Launch</span>
                      <span className="item-date">JUN 2026</span>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-badge"></div>
                      <span className="item-label">Deadline</span>
                      <span className="item-date">AUG 2026</span>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-badge"></div>
                      <span className="item-label">Jury Review</span>
                      <span className="item-date">SEP–OCT</span>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-badge"></div>
                      <span className="item-label">Awards Night</span>
                      <span className="item-date">3–5 NOV 2026</span>
                    </div>
                  </div>
                  <button className="btn-calender" onClick={handleDownloadCalendar}>
                    Add To Calender
                  </button>
                </div>
              </div>
            </div>

            {/* WHY PARTICIPATE & CATEGORIES */}
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
                  <Link to="/kaushalya-awards-registration" className="primary-btn">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Award Categories */}
            <section id="award-categories" className="kka-categories-wrap">
              <div className="kka-categories-inner">
                <div className="kka-categories-top-row">
                  <div className="kka-cat-gov-logos">
                    <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/Gov-Karnataka-logo.svg" alt="Gov of Karnataka" />
                    <img src="/bengaluruskillsummit/wp-content/uploads/2026/04/bss-26-logo.svg" alt="Bengaluru Skill Summit" />
                  </div>
                  <img 
                    src={corporate.categories.dignitariesImage} 
                    alt="Government Leadership" 
                    className="kka-dignitaries-img"
                  />
                </div>

                <h2 className="main-title" style={{ color: '#ffffff', fontSize: '2.4rem' }}>{corporate.categories.title}</h2>
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 0 10px 0' }}>{corporate.categories.subtitle}</p>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffc933', margin: '0 0 35px 0' }}>
                  {corporate.categories.sectionTitle}
                </h3>

                <div className="kka-categories-grid">
                  {corporate.categories.items.map((cat, idx) => (
                    <div 
                      key={idx} 
                      className="kka-category-card"
                      style={{ backgroundColor: cat.bg, borderColor: cat.borderColor }}
                    >
                      <div className="kka-category-icon" style={{ color: cat.color }}>
                        {idx === 0 && <FaIndustry />}
                        {idx === 1 && <FaHandshake />}
                        {idx === 2 && <FaGears />}
                        {idx === 3 && <FaUsers />}
                      </div>
                      <h4 className="kka-category-title">{cat.title}</h4>
                      <p className="kka-category-desc">{cat.desc}</p>
                      <p className="kka-category-count" style={{ color: cat.color }}>{cat.count}</p>
                      <p className="kka-category-unit">{cat.unit}</p>
                    </div>
                  ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Link to="/kaushalya-awards-registration" className="primary-btn">
                    Apply Now
                  </Link>
                </div>
              </div>
            </section>

            {/* WHAT OUR 2025 WINNERS SAY SLIDER */}
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <h2 className="about-heading-blue">{testimonials.title}</h2>
            </div>
            {renderTestimonialsSlider()}

            {/* 2025 Winners Showcase Banner */}
            <section id="2025-winners" className="kka-showcase-banner">
              <h2 className="kka-showcase-title">{showcase2025.title}</h2>
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
                    src="/bengaluruskillsummit/wp-content/uploads/2025/09/govt-logos-light.svg" 
                    alt="Government of Karnataka, KSDC, KSDA, KDEM" 
                    className="kka-partners-govt-img"
                  />
                </div>
              </div>
              <div className="kka-partners-col">
                <h3 className="kka-partners-col-title">In Partnership with</h3>
                <div className="kka-partners-img-row">
                  <img 
                    src={corporate.banner.badge} 
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

      {/* =========================================
           ABOUT SECTION 2: INSTITUTIONAL (WHITE BACKGROUND)
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
                <h2 className="main-title" style={{ color: '#ffffff', fontSize: '2.4rem' }}>{institutional.categories.title}</h2>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffc933', margin: '0 0 35px 0' }}>
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

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Link to="/kaushalya-awards-registration" className="primary-btn">
                    Apply Now
                  </Link>
                </div>
              </div>
            </section>

            {/* WHAT OUR 2025 WINNERS SAY SLIDER */}
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <h2 className="about-heading-blue">{testimonials.title}</h2>
            </div>
            {renderTestimonialsSlider()}

            {/* 2025 Winners Showcase Banner */}
            <section id="2025-winners" className="kka-showcase-banner">
              <h2 className="kka-showcase-title">{showcase2025.title}</h2>
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
                    src="/bengaluruskillsummit/wp-content/uploads/2025/09/govt-logos-light.svg" 
                    alt="Government of Karnataka, KSDC, KSDA, KDEM" 
                    className="kka-partners-govt-img"
                  />
                </div>
              </div>
              <div className="kka-partners-col">
                <h3 className="kka-partners-col-title">In Partnership with</h3>
                <div className="kka-partners-img-row">
                  <img 
                    src={corporate.banner.badge} 
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
