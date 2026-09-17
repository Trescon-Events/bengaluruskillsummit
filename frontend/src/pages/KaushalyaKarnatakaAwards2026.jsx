import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTrophy, 
  FaBuildingColumns, 
  FaIndustry, 
  FaGears, 
  FaHandshake, 
  FaChartLine, 
  FaArrowRight, 
  FaArrowUpRightFromSquare, 
  FaCalendarCheck, 
  FaGraduationCap, 
  FaUsers, 
  FaLocationDot, 
  FaQuoteLeft,
  FaFileArrowDown,
  FaClock,
  FaGift
} from 'react-icons/fa6';
import awardsData from '../data/awards_2026_data.json';

export default function KaushalyaKarnatakaAwards2026() {
  const [activeTab, setActiveTab] = useState('corporate'); // 'corporate' | 'institutional'
  const { hero, corporate, institutional, showcase2025, organisedBy, inPartnershipWith, contactInfo, testimonials } = awardsData;

  const scrollToCategories = (e) => {
    e.preventDefault();
    const el = document.getElementById('award-categories');
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
          font-family: 'Joost', sans-serif;
          border: 2px solid #e1ad27;
        }

        .kka-tab-btn.active {
          background-color: #e1ad27;
          color: #0d1322;
          box-shadow: 0 6px 24px rgba(225, 173, 39, 0.4);
          transform: translateY(-2px);
        }

        .kka-tab-btn.inactive {
          background-color: transparent;
          color: #e1ad27;
        }

        .kka-tab-btn.inactive:hover {
          background-color: rgba(225, 173, 39, 0.15);
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
          align-items: center;
          margin-bottom: 20px;
        }

        .kka-btn-outline {
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          text-transform: uppercase;
        }

        .kka-btn-outline:hover {
          background-color: #ffffff;
          color: #0d1322;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.25);
        }

        .kka-btn-coral {
          background-color: #ff5b5b;
          color: #ffffff;
          padding: 13px 32px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 6px 20px rgba(255, 91, 91, 0.4);
          transition: all 0.3s ease;
          border: 2px solid #ff5b5b;
        }

        .kka-btn-coral:hover {
          background-color: #e04848;
          border-color: #e04848;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 91, 91, 0.55);
          color: #ffffff;
        }

        .kka-trophy-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .kka-trophy-img {
          width: 100%;
          max-width: 480px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 15px 35px rgba(0,0,0,0.6));
          border-radius: 12px;
        }

        /* Section Container */
        .kka-section {
          padding: 70px 20px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .kka-section-title {
          text-align: center;
          color: #0d53c7;
          font-size: 44px;
          font-weight: 800;
          text-transform: uppercase;
          margin: 0 0 14px 0;
          line-height: 1.2;
        }

        .kka-section-desc {
          text-align: center;
          color: #444444;
          font-size: 16px;
          line-height: 1.6;
          max-width: 900px;
          margin: 0 auto 45px auto;
        }

        /* 4 Objective Circles */
        .kka-objectives-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin-bottom: 50px;
        }

        .kka-objective-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 25px 15px;
          background: #ffffff;
          border-radius: 12px;
          transition: transform 0.3s ease;
        }

        .kka-objective-card:hover {
          transform: translateY(-6px);
        }

        .kka-objective-icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #e1ad27);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin-bottom: 18px;
          box-shadow: 0 6px 18px rgba(225, 173, 39, 0.35);
        }

        .kka-objective-title {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.4;
          margin: 0;
        }

        /* Policy Alignment Box */
        .kka-policy-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 30px 40px;
          display: flex;
          align-items: center;
          gap: 40px;
          max-width: 820px;
          margin: 0 auto;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }

        .kka-policy-img {
          width: 140px;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        }

        .kka-policy-text-wrap {
          flex: 1;
        }

        .kka-policy-bar {
          width: 50px;
          height: 4px;
          background: linear-gradient(to right, #ea580c, #0d53c7);
          border-radius: 2px;
          margin-bottom: 12px;
        }

        .kka-policy-title {
          font-size: 22px;
          font-weight: 700;
          color: #0d53c7;
          margin: 4px 0 8px 0;
        }

        .kka-policy-sub {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        /* Why These Awards Matter */
        .kka-matter-steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin: 40px 0;
          flex-wrap: wrap;
        }

        .kka-step-col {
          flex: 1;
          min-width: 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .kka-step-badge {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 14px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .kka-step-circle-icon {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 3px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          background: #ffffff;
          margin-bottom: 16px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          transition: transform 0.3s ease;
        }

        .kka-step-circle-icon:hover {
          transform: scale(1.05);
        }

        .kka-step-icon-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
        }

        .kka-step-arrow {
          font-size: 22px;
          color: #0d53c7;
          display: flex;
          align-items: center;
          padding-top: 40px;
        }

        .kka-step-text {
          font-size: 13.5px;
          line-height: 1.5;
          color: #334155;
          margin: 0;
          font-weight: 500;
        }

        .kka-matter-summary {
          background: #f8fafc;
          border-radius: 12px;
          padding: 24px 30px;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.6;
          max-width: 1000px;
          margin: 30px auto 0 auto;
          border-left: 4px solid #0d53c7;
        }

        /* Why Participate Full Width Blue */
        .kka-participate-wrap {
          background-color: #0d53c7;
          color: #ffffff;
          padding: 70px 20px;
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          box-sizing: border-box;
        }

        .kka-participate-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 50px;
          align-items: center;
        }

        .kka-participate-collage-img {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
          object-fit: cover;
        }

        .kka-participate-title {
          font-size: 42px;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          margin: 0 0 25px 0;
        }

        .kka-participate-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 35px;
        }

        .kka-participate-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .kka-participate-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #ffffff;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .kka-participate-text {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.45;
          margin: 0;
          font-weight: 500;
        }

        /* Award Categories */
        .kka-categories-wrap {
          padding: 80px 20px;
          background: #fdfdfd;
          text-align: center;
        }

        .kka-categories-inner {
          max-width: 1300px;
          margin: 0 auto;
        }

        .kka-dignitaries-img {
          max-width: 380px;
          height: auto;
          margin: 0 auto 30px auto;
          display: block;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.08));
        }

        .kka-categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin: 35px 0 45px 0;
        }

        .kka-category-card {
          border-radius: 16px;
          padding: 35px 20px;
          border: 1px solid;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .kka-category-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
        }

        .kka-category-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }

        .kka-category-title {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 10px 0;
          color: #1e293b;
        }

        .kka-category-desc {
          font-size: 13px;
          color: #64748b;
          margin: 0 0 6px 0;
        }

        .kka-category-count {
          font-size: 24px;
          font-weight: 800;
          font-family: 'Joost', sans-serif;
          margin: 0;
        }

        .kka-category-unit {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        /* Evaluation Framework */
        .kka-eval-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin-top: 40px;
        }

        .kka-eval-card {
          border-radius: 16px;
          padding: 30px 22px;
          border: 1px solid;
          background: #ffffff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.04);
          transition: transform 0.3s ease;
          text-align: left;
        }

        .kka-eval-card:hover {
          transform: translateY(-6px);
        }

        .kka-eval-icon-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin: 0 auto 20px auto;
        }

        .kka-eval-title {
          font-size: 18px;
          font-weight: 700;
          text-align: center;
          margin: 0 0 15px 0;
          color: #1e293b;
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kka-eval-points {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .kka-eval-point {
          font-size: 13.5px;
          color: #475569;
          margin-bottom: 10px;
          line-height: 1.5;
          position: relative;
          padding-left: 18px;
        }

        .kka-eval-point::before {
          content: '•';
          position: absolute;
          left: 0;
          font-size: 18px;
          line-height: 1;
        }

        /* Process Steps & Dotted Timeline */
        .kka-process-steps {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: 45px 0;
          position: relative;
          flex-wrap: wrap;
        }

        .kka-process-step {
          flex: 1;
          min-width: 170px;
          text-align: center;
          position: relative;
        }

        .kka-process-num {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #f1f5f9;
          color: #64748b;
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
          border: 2px solid #cbd5e1;
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
          font-size: 34px;
          color: #0284c7;
        }

        .kka-timeline-title {
          font-size: 16px;
          font-weight: 800;
          color: #0369a1;
          margin: 0;
          text-transform: uppercase;
        }

        .kka-timeline-milestones {
          display: flex;
          align-items: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .kka-milestone-item {
          text-align: center;
        }

        .kka-milestone-bar {
          width: 32px;
          height: 6px;
          border-radius: 3px;
          background: #10b981;
          margin: 0 auto 6px auto;
        }

        .kka-milestone-label {
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          margin: 0;
        }

        .kka-milestone-date {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        /* 2025 Winners Showcase Banner */
        .kka-showcase-banner {
          background: #fffbeb;
          border-top: 1px solid #fef3c7;
          border-bottom: 1px solid #fef3c7;
          padding: 50px 20px;
          text-align: center;
        }

        .kka-showcase-title {
          font-size: 28px;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 25px 0;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        /* CTA Split Banner */
        .kka-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          margin-top: 60px;
        }

        .kka-cta-img {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          object-fit: cover;
        }

        .kka-cta-title {
          font-size: 38px;
          font-weight: 800;
          color: #0d53c7;
          line-height: 1.25;
          margin: 0 0 25px 0;
        }

        .kka-timeline-boxes {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .kka-timeline-box {
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          background: #ffffff;
        }

        .kka-timeline-box-icon {
          font-size: 26px;
          color: #f59e0b;
        }

        .kka-timeline-box-text {
          font-size: 14px;
          color: #334155;
          margin: 0;
        }

        /* Organised By & In Partnership With */
        .kka-partners-section {
          padding: 60px 20px 40px 20px;
          text-align: center;
          border-top: 1px solid #f1f5f9;
        }

        .kka-partners-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: center;
        }

        .kka-partners-col-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 20px;
        }

        .kka-logos-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .kka-partner-pill {
          padding: 10px 20px;
          background: #f8fafc;
          border-radius: 8px;
          font-weight: 700;
          color: #1e293b;
          font-size: 14px;
          border: 1px solid #e2e8f0;
        }

        /* Contact Info Box */
        .kka-contact-box {
          border: 1.5px solid #0d53c7;
          border-radius: 16px;
          padding: 24px 30px;
          max-width: 900px;
          margin: 40px auto;
          text-align: center;
          background: #f8faff;
        }

        .kka-contact-box-title {
          font-size: 20px;
          font-weight: 800;
          color: #0d53c7;
          margin: 0 0 10px 0;
          text-transform: uppercase;
        }

        .kka-contact-box-desc {
          font-size: 15px;
          color: #1e293b;
          margin: 0;
        }

        .kka-contact-box-desc a {
          color: #0d53c7;
          font-weight: 600;
          text-decoration: underline;
        }

        /* What 2025 Winners Say (Testimonials) */
        .kka-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin-top: 40px;
        }

        .kka-testimonial-card {
          background: #ffffff;
          border: 1.5px solid #e1ad27;
          border-radius: 16px;
          padding: 30px 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          box-shadow: 0 6px 20px rgba(225, 173, 39, 0.08);
          transition: transform 0.3s ease;
        }

        .kka-testimonial-card:hover {
          transform: translateY(-6px);
        }

        .kka-quote-mark {
          font-size: 32px;
          color: #e1ad27;
          margin-bottom: 12px;
          line-height: 1;
        }

        .kka-quote-text {
          font-size: 14px;
          line-height: 1.6;
          color: #334155;
          margin: 0 0 20px 0;
          flex: 1;
        }

        .kka-quote-footer {
          border-top: 1px solid #f1f5f9;
          padding-top: 14px;
          font-weight: 800;
          color: #0f172a;
          font-size: 15px;
          font-family: 'Joost', sans-serif;
        }

        /* Institutional Specific Styles */
        .kka-inst-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 45px;
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
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 20px 15px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #0f172a;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
          transition: transform 0.25s ease;
        }

        .kka-inst-logo-card:hover {
          transform: translateY(-4px);
          border-color: #0d53c7;
        }

        .kka-inst-categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin-top: 40px;
        }

        .kka-inst-cat-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 35px 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 18px rgba(0,0,0,0.05);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 220px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .kka-inst-cat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 28px rgba(13, 83, 199, 0.15);
          border-color: #0d53c7;
        }

        .kka-inst-cat-icon {
          font-size: 42px;
          margin-bottom: 20px;
        }

        .kka-inst-cat-title {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.4;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .kka-hero-grid,
          .kka-participate-inner,
          .kka-cta-grid,
          .kka-inst-grid,
          .kka-partners-grid {
            grid-template-columns: 1fr !important;
            gap: 30px;
          }
          .kka-objectives-grid,
          .kka-categories-grid,
          .kka-eval-grid,
          .kka-testimonials-grid,
          .kka-inst-categories-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .kka-hero-main-title { font-size: 38px !important; }
          .kka-hero-heading { font-size: 34px !important; }
          .kka-section-title { font-size: 32px !important; }
        }

        @media (max-width: 640px) {
          .kka-objectives-grid,
          .kka-categories-grid,
          .kka-eval-grid,
          .kka-testimonials-grid,
          .kka-inst-categories-grid,
          .kka-participate-list,
          .kka-inst-logos-grid {
            grid-template-columns: 1fr !important;
          }
          .kka-hero-main-title { font-size: 30px !important; }
          .kka-hero-subtitle { font-size: 20px !important; }
          .kka-hero-heading { font-size: 26px !important; }
          .kka-step-arrow { display: none !important; }
          .kka-policy-box { flex-direction: column !important; text-align: center; }
          .kka-timeline-card { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="kka-hero-wrap">
        <div className="kka-hero-inner">
          <div className="kka-hero-top-bar">
            <h1 className="kka-hero-main-title">{hero.title}</h1>
            <p className="kka-hero-subtitle">{hero.subtitle}</p>
            <p className="kka-hero-date-venue">{hero.dateVenue}</p>

            {/* Tab Switcher */}
            <div className="kka-tab-switcher">
              <button 
                type="button"
                className={`kka-tab-btn ${activeTab === 'corporate' ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab('corporate')}
              >
                <FaTrophy style={{ fontSize: '18px' }} />
                Corporate Excellence Awards
              </button>
              <button 
                type="button"
                className={`kka-tab-btn ${activeTab === 'institutional' ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab('institutional')}
              >
                <FaBuildingColumns style={{ fontSize: '18px' }} />
                Institutional Excellence Awards
              </button>
            </div>
          </div>

          {/* Tab 1: Corporate Excellence Awards Banner */}
          {activeTab === 'corporate' && (
            <div className="kka-hero-grid">
              <div className="kka-hero-content-col">
                <div className="kka-hero-badge-wrap">
                  <img 
                    src={corporate.banner.badge} 
                    alt="Workplace Awards Initiative by Zyoin Group" 
                    className="kka-hero-badge-img"
                  />
                </div>
                <h2 className="kka-hero-heading">{corporate.banner.heading}</h2>
                <p className="kka-hero-desc">{corporate.banner.description}</p>
                <div className="kka-hero-actions">
                  <a href="#award-categories" onClick={scrollToCategories} className="kka-btn-outline">
                    View Award Categories
                  </a>
                  <Link to="/kaushalya-karnataka-awards-2025" className="kka-btn-outline">
                    Explore 2025 Winners
                  </Link>
                </div>
                <div>
                  <Link to="/kaushalya-awards-registration" className="kka-btn-coral">
                    Apply Now for 2026 Awards
                  </Link>
                </div>
              </div>
              <div className="kka-trophy-col">
                <img 
                  src={hero.trophyImage} 
                  alt="Kaushalya Karnataka Awards Trophy" 
                  className="kka-trophy-img"
                />
              </div>
            </div>
          )}

          {/* Tab 2: Institutional Excellence Awards Banner */}
          {activeTab === 'institutional' && (
            <div className="kka-hero-grid">
              <div className="kka-hero-content-col">
                <h2 className="kka-hero-heading">{institutional.banner.heading}</h2>
                <p className="kka-hero-desc">{institutional.banner.description}</p>
                <div className="kka-hero-actions">
                  <a href="#award-categories" onClick={scrollToCategories} className="kka-btn-outline">
                    View Award Categories
                  </a>
                  <Link to="/kaushalya-karnataka-awards-2025" className="kka-btn-outline">
                    Explore 2025 Winners
                  </Link>
                </div>
                <div>
                  <Link to="/kaushalya-awards-registration" className="kka-btn-coral">
                    Apply Now
                  </Link>
                </div>
              </div>
              <div className="kka-trophy-col">
                <img 
                  src={hero.trophyImage} 
                  alt="Kaushalya Karnataka Awards Trophy" 
                  className="kka-trophy-img"
                />
              </div>
            </div>
          )}
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

          {/* Why These Awards Matter */}
          <section className="kka-section" style={{ borderTop: '1px solid #f1f5f9' }}>
            <h2 className="kka-section-title">{corporate.whyMatter.title}</h2>
            <p className="kka-section-desc">{corporate.whyMatter.subtitle}<br />{corporate.whyMatter.intro}</p>

            <div className="kka-matter-steps">
              {corporate.whyMatter.steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="kka-step-col">
                    <div className="kka-step-badge" style={{ backgroundColor: step.color }}>{step.num}</div>
                    <div className="kka-step-circle-icon" style={{ borderColor: step.color }}>
                      <div className="kka-step-icon-inner" style={{ color: step.color }}>
                        {idx === 0 && <FaChartLine />}
                        {idx === 1 && <FaHandshake />}
                        {idx === 2 && <FaUsers />}
                        {idx === 3 && <FaIndustry />}
                        {idx === 4 && <FaGraduationCap />}
                      </div>
                    </div>
                    <p className="kka-step-text">{step.text}</p>
                  </div>
                  {idx < corporate.whyMatter.steps.length - 1 && (
                    <div className="kka-step-arrow">
                      <FaArrowRight />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="kka-matter-summary">
              {corporate.whyMatter.summary}
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
              <img 
                src={corporate.categories.dignitariesImage} 
                alt="Government Leadership" 
                className="kka-dignitaries-img"
              />
              <h2 className="kka-section-title">{corporate.categories.title}</h2>
              <p style={{ fontSize: '16px', color: '#64748b', margin: '0 0 10px 0' }}>{corporate.categories.subtitle}</p>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', margin: '0 0 35px 0' }}>
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
                  style={{ borderColor: pillar.borderColor }}
                >
                  <div 
                    className="kka-eval-icon-circle"
                    style={{ borderColor: pillar.color, color: pillar.color, backgroundColor: pillar.bg }}
                  >
                    {idx === 0 && <FaLocationDot />}
                    {idx === 1 && <FaUsers />}
                    {idx === 2 && <FaGraduationCap />}
                    {idx === 3 && <FaTrophy />}
                  </div>
                  <h3 className="kka-eval-title">{pillar.title}</h3>
                  <ul className="kka-eval-points">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="kka-eval-point" style={{ color: '#334155' }}>
                        {pt}
                      </li>
                    ))}
                  </ul>
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

          {/* 2025 Winners Showcase Callout */}
          <section className="kka-showcase-banner">
            <h2 className="kka-showcase-title">{showcase2025.title}</h2>
            <Link to={showcase2025.buttonLink} className="kka-btn-coral">
              {showcase2025.buttonText}
            </Link>
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
              <h2 className="kka-section-title">{institutional.categories.title}</h2>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', margin: '0 0 35px 0' }}>
                {institutional.categories.subtitle}
              </h3>

              <div className="kka-inst-categories-grid">
                {institutional.categories.items.map((cat, idx) => (
                  <div key={idx} className="kka-inst-cat-card">
                    <div className="kka-inst-cat-icon" style={{ color: cat.color }}>
                      {idx === 0 && <FaLocationDot />}
                      {idx === 1 && <FaGraduationCap />}
                      {idx === 2 && <FaTrophy />}
                      {idx === 3 && <FaUsers />}
                    </div>
                    <h4 className="kka-inst-cat-title">{cat.title}</h4>
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

          {/* 2025 Winners Showcase Callout */}
          <section className="kka-showcase-banner">
            <h2 className="kka-showcase-title">{showcase2025.title}</h2>
            <Link to={showcase2025.buttonLink} className="kka-btn-coral">
              {showcase2025.buttonText}
            </Link>
          </section>
        </>
      )}

      {/* COMMON SECTIONS: Organised By / Partners */}
      <section className="kka-partners-section">
        <div className="kka-partners-grid">
          <div>
            <h3 className="kka-partners-col-title">Organised by</h3>
            <div className="kka-logos-row">
              {organisedBy.map((p, idx) => (
                <div key={idx} className="kka-partner-pill">
                  {p.name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="kka-partners-col-title">In Partnership with</h3>
            <div className="kka-logos-row">
              {inPartnershipWith.map((p, idx) => (
                <div key={idx} className="kka-partner-pill" style={{ borderColor: '#e1ad27', color: '#b45309' }}>
                  {p.name}
                </div>
              ))}
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

      {/* What Our 2025 Winners Say */}
      <section className="kka-section">
        <h2 className="kka-section-title">{testimonials.title}</h2>
        <div className="kka-testimonials-grid">
          {testimonials.quotes.map((t, idx) => (
            <div key={idx} className="kka-testimonial-card">
              <div className="kka-quote-mark">
                <FaQuoteLeft />
              </div>
              <p className="kka-quote-text">"{t.quote}"</p>
              <div className="kka-quote-footer">
                {t.company}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
