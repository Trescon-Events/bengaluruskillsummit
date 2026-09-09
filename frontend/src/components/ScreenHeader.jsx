import React from 'react';
import { Link } from 'react-router-dom';

export default function ScreenHeader({ active = 'AGENDA' }) {
  const navItems = [
    { label: 'HOME', path: '/details/' },
    { label: 'AGENDA', path: '/agenda-screen/' },
    { label: 'FLOORPLAN', path: '/floorplan-screen/' },
    { label: 'PARTNERS', path: '/partners-screen/' },
  ];

  return (
    <div className="bss-screen-header-bar">
      <div className="bss-screen-header-inner">
        <div className="bss-screen-logo-wrap">
          <Link to="/details/" title="Bengaluru Skill Summit">
            <img
              src="/wp-content/uploads/2025/09/bss-logo-white.svg"
              alt="bss logo white"
              className="bss-screen-logo"
            />
          </Link>
        </div>
        <div className="bss-screen-buttons-wrap">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`bss-screen-btn ${active === item.label ? 'active' : ''}`}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .bss-screen-header-bar {
          background-color: #000000;
          padding: 30px 8%;
          width: 100%;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .bss-screen-header-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .bss-screen-logo {
          height: 48px;
          width: auto;
          max-width: 200px;
          display: block;
        }

        .bss-screen-buttons-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .bss-screen-btn {
          display: inline-block;
          background-color: #ff6257;
          color: #ffffff !important;
          text-decoration: none !important;
          padding: 12px 24px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1px;
          line-height: 1;
          transition: all 0.2s ease;
          box-sizing: border-box;
          text-align: center;
        }

        .bss-screen-btn:hover {
          opacity: 0.9;
          transform: scale(0.98);
        }

        .bss-screen-btn.active {
          opacity: 1;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 768px) {
          .bss-screen-header-bar {
            padding: 20px 16px;
          }
          .bss-screen-header-inner {
            flex-direction: column;
            text-align: center;
          }
          .bss-screen-buttons-wrap {
            justify-content: center;
            gap: 8px;
          }
          .bss-screen-btn {
            padding: 10px 16px;
            font-size: 13px;
          }
          .bss-screen-logo {
            height: 38px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
