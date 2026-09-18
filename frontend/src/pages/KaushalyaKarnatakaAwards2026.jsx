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
  FaFileArrowDown,
  FaClock,
  FaGift
} from 'react-icons/fa6';
import awardsData from '../data/awards_2026_data.json';

export default function KaushalyaKarnatakaAwards2026() {
  const [activeTab, setActiveTab] = useState('corporate'); // 'corporate' | 'institutional'
  const { hero, corporate, institutional, showcase2025, contactInfo, testimonials } = awardsData;

  // Testimonials slider state matching kaushalya-karnataka-awards-2025
  const [currentTestiIdx, setCurrentTestiIdx] = useState(0);
  const [visibleTestiCount, setVisibleTestiCount] = useState(3);
  const [isTestiPaused, setIsTestiPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth <= 768) {
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
    if (diff > 50) handleNextTesti();
    if (diff < -50) handlePrevTesti();
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

  return (
    <div className="kka-2026-page">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700;800&family=Comfortaa:wght@400;500;600;700&display=swap");

        .kka-2026-page {
          font-family: 'Comfortaa', sans-serif;
          color: #1a1a1a;
          background-color: #ffffff;
          overflow-x: hidden;
        }

        .kka-2026-page h1,
        .kka-2026-page h2,
        .kka-2026-page h3,
        .kka-2026-page h4,
        .kka-2026-page .kka-hero-main-title,
        .kka-2026-page .kka-hero-heading,
        .kka-2026-page .kka-section-title,
        .kka-2026-page .kka-participate-title,
        .kka-2026-page .kka-cta-title,
        .kka-2026-page .kka-tab-btn {
          font-family: 'Oswald', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
          letter-spacing: 0.5px;
        }

        /* Hero Wrapper */
        .kka-hero-wrap {
          background: ${hero.bgGradient};
          color: #ffffff;
          padding: 80px 20px 60px 20px;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 -30px 40px rgba(0,0,0,0.6);
        }

        .kka-hero-wrap::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 120%;
          height: 140%;
          background: radial-gradient(circle at 70% 30%, rgba(2, 74, 180, 0.25) 0%, transparent 60%),
                      radial-gradient(circle at 20% 80%, rgba(225, 173, 39, 0.12) 0%, transparent 50%);
          pointer-events: none;
        }

        .kka-hero-inner {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .kka-hero-top-bar {
          text-align: center;
          margin-bottom: 35px;
        }

        .kka-hero-main-title {
          color: #e1ad27;
          font-size: 52px;
          font-weight: 800;
          margin: 0 0 10px 0;
          line-height: 1.15;
          text-shadow: 0 2px 14px rgba(0,0,0,0.5);
        }

        .kka-hero-subtitle {
          font-size: 26px;
          color: #ffffff;
          font-weight: 500;
          margin: 0 0 12px 0;
          letter-spacing: 0.5px;
        }

        .kka-hero-date-venue {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          margin: 0 0 30px 0;
        }

        /* Dual Tab Switcher */
        .kka-tab-switcher {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 45px;
          flex-wrap: wrap;
        }

        .kka-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 28px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: 2px solid #e1ad27;
        }

        .kka-tab-btn.active {
          background-color: #e1ad27;
          color: #0d1322;
          box-shadow: 0 6px 24px rgba(225, 173, 39, 0.4);
          transform: translateY(-2px);
        }

        .kka-tab-btn.inactive {
          background-color: rgba(6, 28, 71, 0.6);
          color: #e1ad27;
        }

        .kka-tab-btn.inactive:hover {
          background-color: rgba(225, 173, 39, 0.2);
          color: #ffffff;
          border-color: #ffffff;
        }

        /* Hero Split Grid */
        .kka-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }

        .kka-hero-badge-wrap {
          margin-bottom: 24px;
        }

        .kka-hero-badge-img {
          height: 60px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));
        }

        .kka-hero-heading {
          font-size: 46px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin: 0 0 20px 0;
          text-transform: uppercase;
        }

        .kka-hero-desc {
          font-size: 17px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.88);
          margin-bottom: 32px;
          max-width: 650px;
        }

        .kka-hero-actions {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }

        .kka-btn-pill-dark {
          background: rgba(13, 19, 34, 0.85);
          border: 1px solid rgba(225, 173, 39, 0.7);
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .kka-btn-pill-dark:hover {
          background: #e1ad27;
          color: #0d1322;
          border-color: #e1ad27;
          transform: translateY(-2px);
        }

        .kka-btn-coral {
          background: #ff594d;
          color: #ffffff !important;
          padding: 14px 30px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(255, 89, 77, 0.4);
          transition: all 0.25s ease;
          border: none;
          cursor: pointer;
        }

        .kka-btn-coral:hover {
          background: #e0453a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 89, 77, 0.55);
        }

        .kka-trophy-img {
          width: 100%;
          max-width: 520px;
          height: auto;
          object-fit: contain;
          margin: 0 auto;
          display: block;
          filter: drop-shadow(0 15px 35px rgba(0,0,0,0.6));
        }

        /* Generic Section */
        .kka-section {
          padding: 70px 20px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .kka-section-title {
          font-size: 40px;
          font-weight: 800;
          color: #0d53c7;
          text-align: center;
          margin: 0 0 16px 0;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .kka-section-desc {
          font-size: 16px;
          line-height: 1.7;
          color: #334155;
          text-align: center;
          max-width: 900px;
          margin: 0 auto 40px auto;
          white-space: pre-line;
        }

        /* 4 Pillars */
        .kka-objectives-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin-bottom: 50px;
        }

        .kka-objective-card {
          text-align: center;
          padding: 20px 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .kka-objective-icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #f5a623;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          margin-bottom: 18px;
          box-shadow: 0 6px 18px rgba(245, 166, 35, 0.35);
        }

        .kka-objective-title {
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          line-height: 1.45;
          margin: 0;
        }

        /* Policy Card */
        .kka-policy-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 30px 45px;
          display: flex;
          align-items: center;
          gap: 40px;
          max-width: 880px;
          margin: 0 auto;
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
        }

        .kka-policy-img {
          width: 140px;
          height: auto;
          object-fit: contain;
          flex-shrink: 0;
          filter: drop-shadow(0 6px 16px rgba(0,0,0,0.15));
        }

        .kka-policy-text-wrap {
          flex: 1;
        }

        .kka-policy-bar {
          width: 36px;
          height: 4px;
          background: #0d53c7;
          margin-bottom: 12px;
          border-radius: 2px;
        }

        .kka-policy-title {
          font-size: 24px;
          font-weight: 700;
          color: #0d53c7;
          margin: 4px 0 8px 0;
          line-height: 1.3;
        }

        .kka-policy-sub {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        /* Why Participate Full Width Blue */
        .kka-participate-wrap {
          background: #024ab4;
          color: #ffffff;
          padding: 80px 20px;
        }

        .kka-participate-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 60px;
          align-items: center;
        }

        .kka-participate-collage-img {
          width: 100%;
          max-width: 500px;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
          display: block;
        }

        .kka-participate-title {
          font-size: 42px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 30px 0;
          text-transform: uppercase;
        }

        .kka-participate-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 35px;
        }

        .kka-participate-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .kka-participate-icon-box {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #ffffff;
          flex-shrink: 0;
        }

        .kka-participate-text {
          font-size: 16px;
          color: #ffffff;
          line-height: 1.45;
          margin: 0;
          font-weight: 500;
        }

        /* Award Categories with Dark Background Backdrop */
        .kka-categories-wrap {
          padding: 80px 20px;
          background: linear-gradient(rgba(10, 25, 60, 0.92), rgba(6, 16, 40, 0.95)), 
                      url('/bengaluruskillsummit/wp-content/uploads/2026/awards/awards_ceremony_winners.webp') center/cover no-repeat;
          text-align: center;
          color: #ffffff;
          position: relative;
        }

        .kka-categories-inner {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .kka-categories-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .kka-cat-gov-logos {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .kka-cat-gov-logos img {
          height: 55px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .kka-dignitaries-img {
          max-width: 360px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
        }

        .kka-categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          margin: 35px 0 45px 0;
        }

        .kka-category-card {
          border-radius: 14px;
          padding: 35px 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .kka-category-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 35px rgba(0,0,0,0.25);
        }

        .kka-category-icon {
          font-size: 38px;
          margin-bottom: 16px;
        }

        .kka-category-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px 0;
        }

        .kka-category-desc {
          font-size: 13px;
          color: #475569;
          margin: 0 0 4px 0;
        }

        .kka-category-count {
          font-size: 26px;
          font-weight: 800;
          line-height: 1.15;
          margin: 0 0 2px 0;
        }

        .kka-category-unit {
          font-size: 13px;
          color: #475569;
          margin: 0;
        }

        /* Evaluation Framework */
        .kka-eval-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          margin-top: 40px;
        }

        .kka-eval-card {
          border-radius: 16px;
          padding: 32px 22px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          box-shadow: 0 6px 20px rgba(0,0,0,0.04);
          transition: transform 0.3s ease;
          text-align: left;
        }

        .kka-eval-card:hover {
          transform: translateY(-6px);
        }

        .kka-eval-icon-circle {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin: 0 auto 20px auto;
          box-shadow: 0 4px 14px rgba(0,0,0,0.06);
        }

        .kka-eval-title {
          font-size: 18px;
          font-weight: 700;
          text-align: center;
          margin: 0 0 15px 0;
          color: #0d53c7;
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kka-eval-points {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 0;
          margin: 0;
          list-style: none !important;
        }

        .kka-eval-point {
          font-size: 13.5px;
          color: #475569;
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          list-style: none !important;
        }

        .kka-eval-bullet {
          font-size: 18px;
          line-height: 1;
          font-weight: 700;
          flex-shrink: 0;
        }

        .kka-eval-text {
          flex: 1;
        }

        /* Process Steps & Dashed Timeline */
        .kka-process-steps {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: 50px 0 40px;
          position: relative;
          flex-wrap: wrap;
        }

        .kka-process-steps::before {
          content: '';
          position: absolute;
          top: 25px;
          left: 10%;
          right: 10%;
          height: 2px;
          border-top: 2px dashed #cbd5e1;
          z-index: 1;
        }

        .kka-process-step {
          flex: 1;
          min-width: 170px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .kka-process-num {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ffffff;
          color: #64748b;
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
          border: 2px solid #cbd5e1;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .kka-process-step-title {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
          text-transform: uppercase;
        }

        .kka-process-step-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .kka-timeline-card {
          background: #e0f2fe;
          border-radius: 14px;
          padding: 24px 35px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 40px;
          gap: 25px;
          flex-wrap: wrap;
        }

        .kka-timeline-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .kka-timeline-icon {
          font-size: 32px;
          color: #0284c7;
        }

        .kka-timeline-title {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          text-transform: uppercase;
          line-height: 1.3;
        }

        .kka-timeline-milestones {
          display: flex;
          align-items: center;
          gap: 25px;
          flex: 1;
          justify-content: center;
          flex-wrap: wrap;
        }

        .kka-milestone-item {
          text-align: center;
          position: relative;
        }

        .kka-milestone-bar {
          width: 36px;
          height: 5px;
          background: #0d9488;
          border-radius: 3px;
          margin: 0 auto 6px auto;
        }

        .kka-milestone-label {
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
          margin: 0 0 2px 0;
          text-transform: uppercase;
        }

        .kka-milestone-date {
          font-size: 13px;
          color: #0f172a;
          font-weight: 700;
          margin: 0;
        }

        /* 2025 Winners Showcase Callout */
        .kka-showcase-banner {
          background: #fffdf5;
          border-top: 1px solid #fef3c7;
          border-bottom: 1px solid #fef3c7;
          padding: 35px 20px;
          text-align: center;
        }

        .kka-showcase-title {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 18px 0;
          font-family: 'Comfortaa', sans-serif !important;
        }

        /* CTA & Application Dates */
        .kka-cta-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 50px;
          align-items: center;
        }

        .kka-cta-img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          display: block;
        }

        .kka-cta-title {
          font-size: 38px;
          font-weight: 800;
          color: #0d53c7;
          line-height: 1.2;
          margin: 0 0 24px 0;
        }

        .kka-timeline-boxes {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .kka-timeline-box {
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          background: #ffffff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.03);
          flex: 1;
          min-width: 200px;
        }

        .kka-timeline-box-icon {
          font-size: 26px;
          color: #eab308;
          flex-shrink: 0;
        }

        .kka-timeline-box-text {
          font-size: 14px;
          color: #334155;
          margin: 0;
        }

        .kka-timeline-box-text strong {
          color: #0f172a;
          font-weight: 700;
        }

        /* ---------------- TESTIMONIALS SLIDER (MATCHING 2025 PAGE) ---------------- */
        .kka-testimonials-section {
          padding: 70px 20px 80px;
          background: #fafafa;
          border-top: 1px solid #f1f5f9;
        }

        .testi-heading {
          font-family: 'Oswald', sans-serif !important;
          color: #0d53c7;
          font-size: 44px;
          font-weight: 800;
          text-align: center;
          margin: 0 0 20px 0;
          text-transform: uppercase;
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
          font-size: 14.5px;
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

        .testi-nav button:hover svg {
          fill: #ffffff;
        }

        .testi-nav button svg {
          width: 18px;
          height: 18px;
          fill: #F5A623;
          transition: fill 0.25s ease;
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
          transition: background 0.3s ease;
        }

        .testi-dot.active {
          background: #F5A623;
        }

        /* Partners Section */
        .kka-partners-wrap {
          padding: 60px 20px 40px;
          text-align: center;
          border-top: 1px solid #f1f5f9;
        }

        .kka-partners-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          max-width: 1100px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .kka-partners-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .kka-partners-col-title {
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
          height: 55px;
          width: auto;
          object-fit: contain;
        }

        /* Contact Box */
        .kka-contact-box {
          border: 1.5px solid #0d53c7;
          border-radius: 12px;
          padding: 24px 30px;
          text-align: center;
          max-width: 950px;
          margin: 40px auto 60px auto;
          background: #ffffff;
          box-shadow: 0 6px 20px rgba(13, 83, 199, 0.06);
        }

        .kka-contact-box-title {
          font-size: 24px;
          font-weight: 700;
          color: #0d53c7;
          margin: 0 0 8px 0;
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

        /* Institutional Tab Specifics */
        .kka-inst-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          margin-bottom: 50px;
        }

        .kka-inst-img {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          object-fit: cover;
        }

        .kka-inst-logos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .kka-inst-logo-card {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          background: #f8fafc;
          transition: transform 0.25s ease;
        }

        .kka-inst-logo-card:hover {
          transform: translateY(-4px);
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
        }

        .kka-inst-categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .kka-inst-cat-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 24px 18px;
          border: 1px solid #e2e8f0;
          text-align: left;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .kka-inst-cat-icon {
          font-size: 28px;
          margin-bottom: 12px;
        }

        .kka-inst-cat-title {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px 0;
        }

        .kka-inst-cat-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.45;
          margin: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .kka-hero-grid,
          .kka-participate-inner,
          .kka-cta-grid,
          .kka-inst-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .kka-hero-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .kka-hero-actions {
            justify-content: center;
          }
          .kka-categories-grid,
          .kka-eval-grid,
          .kka-inst-categories-grid,
          .kka-inst-logos-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .kka-objectives-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .testi-card {
            flex: 0 0 50%;
          }
        }

        @media (max-width: 768px) {
          .kka-hero-main-title { font-size: 36px; }
          .kka-hero-heading { font-size: 32px; }
          .kka-section-title { font-size: 30px; }
          .kka-participate-title { font-size: 30px; }
          .kka-cta-title { font-size: 28px; }
          .testi-heading { font-size: 32px; }
          .kka-categories-grid,
          .kka-eval-grid,
          .kka-objectives-grid,
          .kka-inst-categories-grid,
          .kka-inst-logos-grid {
            grid-template-columns: 1fr;
          }
          .testi-slider-wrap {
            padding: 40px 10px;
          }
          .testi-card {
            flex: 0 0 100% !important;
          }
          .testi-card-inner {
            padding: 30px 20px;
          }
          .kka-policy-box {
            flex-direction: column;
            text-align: center;
            padding: 25px 20px;
          }
          .kka-policy-bar {
            margin: 0 auto 12px auto;
          }
          .kka-process-steps::before {
            display: none;
          }
          .kka-categories-top-row {
            justify-content: center;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="kka-hero-wrap">
        <div className="kka-hero-inner">
          <div className="kka-hero-top-bar">
            <h1 className="kka-hero-main-title">{hero.title}</h1>
            <p className="kka-hero-subtitle">{hero.subtitle}</p>
            <p className="kka-hero-dateVenue">{hero.dateVenue}</p>

            {/* Dual Tabs */}
            <div className="kka-tab-switcher">
              <button
                className={`kka-tab-btn ${activeTab === 'corporate' ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab('corporate')}
              >
                <FaTrophy style={{ fontSize: '18px' }} />
                Corporate Excellence Awards
              </button>
              <button
                className={`kka-tab-btn ${activeTab === 'institutional' ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab('institutional')}
              >
                <FaBuildingColumns style={{ fontSize: '18px' }} />
                Institutional Excellence Awards
              </button>
            </div>
          </div>

          <div className="kka-hero-grid">
            <div>
              {/* Workplace Awards & Zyoin Badge */}
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

              <h2 className="kka-hero-heading">{corporate.banner.heading}</h2>
              <p className="kka-hero-desc">{corporate.banner.description}</p>

              <div className="kka-hero-actions">
                <a href="#award-categories" onClick={scrollToCategories} className="kka-btn-pill-dark">
                  View Award Categories
                </a>
                <a href="#winners-say-section" onClick={scrollToWinners} className="kka-btn-pill-dark">
                  Explore 2025 Winners
                </a>
              </div>

              <div>
                <Link to="/kaushalya-awards-registration" className="kka-btn-coral">
                  Apply Now for 2026 Awards
                </Link>
              </div>
            </div>

            <div>
              <img 
                src={hero.trophyImage} 
                alt="Kaushalya Karnataka Awards Gold Trophy Podium" 
                className="kka-trophy-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE EXCELLENCE VIEW */}
      {activeTab === 'corporate' && (
        <>
          {/* About The Awards */}
          <section className="kka-section">
            <h2 className="kka-section-title">{corporate.about.title}</h2>
            <p className="kka-section-desc">{corporate.about.description}</p>

            <div className="kka-objectives-grid">
              {corporate.about.objectives.map((obj, idx) => (
                <div key={idx} className="kka-objective-card">
                  <div className="kka-objective-icon-circle">
                    {idx === 0 && <FaIndustry />}
                    {idx === 1 && <FaGears />}
                    {idx === 2 && <FaHandshake />}
                    {idx === 3 && <FaChartLine />}
                  </div>
                  <h3 className="kka-objective-title">{obj.title}</h3>
                </div>
              ))}
            </div>

            {/* Policy Alignment Card */}
            <div className="kka-policy-box">
              <img 
                src={corporate.about.policyAlignment.bookImage} 
                alt="Karnataka State Skill Development Policy" 
                className="kka-policy-img"
              />
              <div className="kka-policy-text-wrap">
                <div className="kka-policy-bar" />
                <span style={{ fontSize: '13px', color: '#64748b' }}>{corporate.about.policyAlignment.preText}</span>
                <h3 className="kka-policy-title">{corporate.about.policyAlignment.policyTitle}</h3>
                <p className="kka-policy-sub">{corporate.about.policyAlignment.postText}</p>
              </div>
            </div>
          </section>

          {/* Why Participate */}
          <section className="kka-participate-wrap">
            <div className="kka-participate-inner">
              <div>
                <img 
                  src={corporate.whyParticipate.collageImage} 
                  alt="Ceremony Presentation Collage" 
                  className="kka-participate-collage-img"
                />
              </div>
              <div>
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
                <Link to="/kaushalya-awards-registration" className="kka-btn-coral">
                  Apply Now
                </Link>
              </div>
            </div>
          </section>

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

              <h2 className="kka-section-title" style={{ color: '#ffffff' }}>{corporate.categories.title}</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 0 10px 0' }}>{corporate.categories.subtitle}</p>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', margin: '0 0 35px 0' }}>
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

              <Link to="/kaushalya-awards-registration" className="kka-btn-coral">
                Apply Now
              </Link>
            </div>
          </section>

          {/* Evaluation Framework */}
          <section className="kka-section" style={{ borderTop: '1px solid #f1f5f9' }}>
            <h2 className="kka-section-title">{corporate.evaluation.title}</h2>
            <p className="kka-section-desc">{corporate.evaluation.subtitle}</p>

            <div className="kka-eval-grid">
              {corporate.evaluation.pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="kka-eval-card"
                  style={{ borderColor: pillar.borderColor, background: pillar.bg }}
                >
                  <div 
                    className="kka-eval-icon-circle"
                    style={{ borderColor: pillar.color, color: pillar.color, backgroundColor: '#ffffff' }}
                  >
                    {idx === 0 && <FaLocationDot />}
                    {idx === 1 && <FaUsers />}
                    {idx === 2 && <FaGraduationCap />}
                    {idx === 3 && <FaTrophy />}
                  </div>
                  <h3 className="kka-eval-title">{pillar.title}</h3>
                  <div className="kka-eval-points">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="kka-eval-point" style={{ color: '#334155' }}>
                        <span className="kka-eval-bullet" style={{ color: pillar.color }}>•</span>
                        <span className="kka-eval-text">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Steps from Nomination to Recognition */}
          <section className="kka-section" style={{ borderTop: '1px solid #f1f5f9' }}>
            <h2 className="kka-section-title">{corporate.process.title}</h2>

            <div className="kka-process-steps">
              {corporate.process.steps.map((st, idx) => (
                <div key={idx} className="kka-process-step">
                  <div className="kka-process-num">{st.num}</div>
                  <h3 className="kka-process-step-title">{st.title}</h3>
                  <p className="kka-process-step-desc">{st.desc}</p>
                </div>
              ))}
            </div>

            {/* Cycle Banner */}
            <div className="kka-timeline-card">
              <div className="kka-timeline-left">
                <FaCalendarCheck className="kka-timeline-icon" />
                <h3 className="kka-timeline-title">{corporate.process.timeline.title}</h3>
              </div>
              <div className="kka-timeline-milestones">
                {corporate.process.timeline.milestones.map((ms, idx) => (
                  <div key={idx} className="kka-milestone-item">
                    <div className="kka-milestone-bar" />
                    <p className="kka-milestone-label">{ms.label}</p>
                    <p className="kka-milestone-date">{ms.date}</p>
                  </div>
                ))}
              </div>
              <div>
                <Link to="/kaushalya-awards-registration" className="kka-btn-coral" style={{ padding: '10px 22px', fontSize: '13px' }}>
                  Apply Now
                </Link>
              </div>
            </div>
          </section>

          {/* 2025 Winners Showcase Banner */}
          <section id="2025-winners" className="kka-showcase-banner">
            <h2 className="kka-showcase-title">{showcase2025.title}</h2>
            <Link to={showcase2025.buttonLink} className="kka-btn-coral">
              {showcase2025.buttonText}
            </Link>
          </section>

          {/* ---------------- 5. TESTIMONIALS SLIDER SECTION (WHAT OUR 2025 WINNERS SAY) ---------------- */}
          <section
            id="winners-say-section"
            className="kka-testimonials-section"
            onMouseEnter={() => setIsTestiPaused(true)}
            onMouseLeave={() => setIsTestiPaused(false)}
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
                  transform: `translateX(-${currentTestiIdx * (100 / visibleTestiCount)}%)`,
                }}
              >
                {testimonials.cards.map((card) => (
                  <div 
                    key={card.id} 
                    className="testi-card"
                    style={{ flex: `0 0 ${100 / visibleTestiCount}%` }}
                  >
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
                          decoding="async"
                          width={160}
                          height={60} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="testi-nav">
                <button
                  onClick={handlePrevTesti}
                  aria-label="Previous testimonial"
                  type="button"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>

                <div className="testi-dots">
                  {Array.from({ length: maxTestiIndex + 1 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`testi-dot ${currentTestiIdx === idx ? 'active' : ''}`}
                      onClick={() => setCurrentTestiIdx(idx)}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextTesti}
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

          {/* CTA & Application Dates */}
          <section className="kka-section">
            <div className="kka-cta-grid">
              <div>
                <img 
                  src={corporate.cta.image} 
                  alt="Kaushalya Karnataka Stage Award Presentation" 
                  className="kka-cta-img"
                />
              </div>
              <div>
                <h2 className="kka-cta-title">{corporate.cta.title}</h2>
                <h3 style={{ fontSize: '20px', color: '#0f172a', marginBottom: '16px' }}>Application Timeline</h3>
                
                <div className="kka-timeline-boxes">
                  <div className="kka-timeline-box">
                    <FaGift className="kka-timeline-box-icon" />
                    <p className="kka-timeline-box-text">Launch: <strong>{corporate.cta.launch}</strong></p>
                  </div>
                  <div className="kka-timeline-box">
                    <FaClock className="kka-timeline-box-icon" style={{ color: '#ef4444' }} />
                    <p className="kka-timeline-box-text">Deadline: <strong>{corporate.cta.deadline}</strong></p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <Link to="/kaushalya-awards-registration" className="kka-btn-coral">
                    Apply Now
                  </Link>
                  <a 
                    href="#download" 
                    onClick={(e) => { e.preventDefault(); alert("The 2026 Award Guidelines document will be made available for download shortly."); }}
                    className="kka-btn-coral" 
                    style={{ backgroundColor: '#ff6257' }}
                  >
                    <FaFileArrowDown style={{ marginRight: '8px' }} /> Download Guidelines
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Organised By & In Partnership With */}
          <section className="kka-partners-wrap">
            <div className="kka-partners-grid">
              <div className="kka-partners-col">
                <h3 className="kka-partners-col-title">Organised by</h3>
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
          </section>

          {/* Contact Info Box */}
          <div className="kka-contact-box">
            <h3 className="kka-contact-box-title">{contactInfo.title}</h3>
            <p className="kka-contact-box-desc">
              Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> | Phone: {contactInfo.phone}
            </p>
          </div>
        </>
      )}

      {/* INSTITUTIONAL EXCELLENCE VIEW */}
      {activeTab === 'institutional' && (
        <>
          {/* Recognising Excellence in Skill Development Education & Training */}
          <section className="kka-section">
            <h2 className="kka-section-title">{institutional.overview.title}</h2>
            
            <div className="kka-inst-grid">
              <div>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#334155', marginBottom: '16px' }}>
                  {institutional.overview.p1}
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#334155', marginBottom: '25px' }}>
                  {institutional.overview.p2}
                </p>
                <Link to="/kaushalya-awards-registration" className="kka-btn-coral">
                  Apply for Institutional Award
                </Link>
              </div>
              <div>
                <img 
                  src={institutional.overview.collageImage} 
                  alt="Institutional Ceremony Presentation" 
                  className="kka-inst-img"
                />
              </div>
            </div>

            {/* 8 Participating Bodies */}
            <h3 style={{ fontSize: '22px', fontWeight: 800, textAlign: 'center', color: '#0f172a', margin: '40px 0 20px 0' }}>
              Key Institutional Stakeholders & Partners
            </h3>
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
          </section>

          {/* Institutional Categories */}
          <section id="award-categories" className="kka-categories-wrap">
            <div className="kka-categories-inner">
              <h2 className="kka-section-title" style={{ color: '#ffffff' }}>{institutional.categories.title}</h2>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', margin: '0 0 35px 0' }}>
                {institutional.categories.subtitle}
              </h3>

              <div className="kka-inst-categories-grid">
                {institutional.categories.items.map((cat, idx) => (
                  <div key={idx} className="kka-inst-cat-card">
                    <div className="kka-inst-cat-icon" style={{ color: cat.color }}>
                      {idx === 0 && <FaLocationDot />}
                      {idx === 1 && <FaGraduationCap />}
                      {idx === 2 && <FaBuildingColumns />}
                      {idx === 3 && <FaTrophy />}
                    </div>
                    <h4 className="kka-inst-cat-title">{cat.title}</h4>
                    <p className="kka-inst-cat-desc">{cat.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '40px' }}>
                <Link to="/kaushalya-awards-registration" className="kka-btn-coral">
                  Apply Now
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
