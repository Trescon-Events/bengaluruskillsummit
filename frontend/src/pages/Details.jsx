import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Details() {
  useEffect(() => {
    document.title = 'Details - Bengaluru Skill Summit';
    window.scrollTo(0, 0);
  }, []);

  const cards = [
    {
      id: 'agenda',
      title: 'Agenda',
      icon: '/bengaluruskillsummit.com/wp-content/uploads/2025/10/agenda.svg',
      link: '/agenda',
      width: 59,
      height: 60,
    },
    {
      id: 'floorplan',
      title: 'Floorplan',
      icon: '/bengaluruskillsummit.com/wp-content/uploads/2025/10/floorplan.svg',
      link: '/floorplan',
      width: 60,
      height: 60,
    },
    {
      id: 'partners',
      title: 'Partners',
      icon: '/bengaluruskillsummit.com/wp-content/uploads/2025/10/sponsors-exhibitors.svg',
      link: '/ecosystem-partners',
      width: 61,
      height: 60,
    },
  ];

  return (
    <div className="bss-details-page">
      {/* Top Banner */}
      <div className="bss-details-banner-wrap">
        <Link to="/" title="Bengaluru Skill Summit 2025 - Home">
          <img src="/bengaluruskillsummit.com/wp-content/uploads/2025/11/home-page-header.webp"
            alt="Bengaluru Skill Summit 2025"
            className="bss-details-banner-img"
           decoding="async" width={1925} height={1349} />
        </Link>
      </div>

      {/* Cards Navigation Section */}
      <div className="bss-details-cards-section">
        <div className="bss-details-cards-container">
          {cards.map((card) => (
            <Link
              key={card.id}
              to={card.link}
              className="bss-details-card"
            >
              <div className="bss-details-card-icon-wrap">
                <img src={card.icon}
                  alt={card.title}
                  width={card.width}
                  height={card.height}
                  className="bss-details-card-icon"
                 decoding="async" loading="lazy" />
              </div>
              <div className="bss-details-card-text">
                <strong>{card.title}</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .bss-details-page {
          width: 100%;
          min-height: 100vh;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
        }

        .bss-details-banner-wrap {
          width: 100%;
          padding: 0;
          margin: 0;
          line-height: 0;
          background: #fff;
        }

        .bss-details-banner-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .bss-details-cards-section {
          width: 100%;
          padding: 70px 8%;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
        }

        .bss-details-cards-container {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          box-sizing: border-box;
        }

        .bss-details-card {
          background-color: #ff6257;
          border-radius: 8px;
          padding: 45px 25px;
          text-decoration: none;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
          box-sizing: border-box;
        }

        .bss-details-card:hover {
          background-color: #f75549;
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(255, 98, 87, 0.4);
        }

        .bss-details-card-icon-wrap {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bss-details-card-icon {
          height: 60px;
          width: auto;
          max-width: 65px;
          object-fit: contain;
          display: block;
        }

        .bss-details-card-text {
          color: #ffffff;
          font-size: 26px;
          line-height: 36px;
          text-align: center;
          font-weight: 700;
          font-family: inherit;
        }

        .bss-details-card-text strong {
          font-weight: 700;
        }

        @media (max-width: 991px) {
          .bss-details-cards-section {
            padding: 50px 5%;
          }
          .bss-details-cards-container {
            gap: 20px;
          }
          .bss-details-card {
            padding: 35px 20px;
          }
          .bss-details-card-text {
            font-size: 22px;
            line-height: 30px;
          }
        }

        @media (max-width: 767px) {
          .bss-details-cards-section {
            padding: 40px 16px;
          }
          .bss-details-cards-container {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .bss-details-card {
            padding: 30px 20px;
          }
          .bss-details-card-text {
            font-size: 20px;
            line-height: 28px;
          }
          .bss-details-card-icon {
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
}
