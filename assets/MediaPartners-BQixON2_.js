import{i as e,t}from"./index-CYdq2Rio.js";import{t as n}from"./media_partners-DXvQsb-U.js";e();var r=t();function i(){return(0,r.jsxs)(`div`,{className:`media-partners-page`,children:[(0,r.jsx)(`style`,{children:`
        /* =============================================
           MEDIA PARTNERS PAGE STYLING
           Palette: #fff bg | #106cff hero accent | #ff6257 accent
           Font: Comfortaa, sans-serif
           ============================================= */
        .media-partners-page {
          background: #fff;
          color: #333;
          font-family: 'Comfortaa', sans-serif;
          width: 100%;
          overflow-x: hidden;
        }

        .media-partners-page *, 
        .media-partners-page *::before, 
        .media-partners-page *::after {
          box-sizing: border-box;
          font-family: 'Comfortaa', sans-serif;
        }

        /* ---------- HERO BANNER ---------- */
        #Skillathon-Banner {
          position: relative;
          background: url('/bengaluruskillsummit/wp-content/uploads/2025/09/banner-skillathon-05.webp') center center / cover no-repeat;
          padding: 100px 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .Skillathon-Strip {
          background-color: rgba(255, 255, 255, 0.85);
          padding: 24px 40px;
          border-radius: 6px;
          max-width: 760px;
          width: 100%;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .Skillathon-Heading h1 {
          color: #106cff;
          font-size: 54px;
          font-weight: 700;
          line-height: 1.15;
          margin: 0;
          text-transform: capitalize;
        }

        /* ---------- PARTNERS SECTION ---------- */
        .partners-section-wrap {
          padding: 20px 20px 80px;
          background: #fff;
          width: 100%;
        }

        .partners-section {
          background: #fff;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
        }

        .exhibitor-category {
          text-align: center;
          margin-top: 70px;
          margin-bottom: 32px;
          font-size: 34px;
          font-weight: 700;
          color: #111;
          letter-spacing: -0.5px;
        }

        .exhibitor-category:first-of-type {
          margin-top: 30px;
        }

        .exhibitor-grid__row {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          align-items: center;
        }

        /* ---------- PARTNER CARD ---------- */
        .exhibitor-card {
          flex: 0 0 calc(33.333% - 16px);
          max-width: calc(33.333% - 16px);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .exhibitor-card__link {
          display: block;
          text-decoration: none;
          color: inherit;
          height: 100%;
          width: 100%;
        }

        .exhibitor-card__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 28px 20px;
          height: 100%;
          min-height: 180px;
          background: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          border-radius: 8px;
          border: 1px solid #f0f2f5;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .exhibitor-card:hover .exhibitor-card__inner {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
        }

        .exhibitor-card__media {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100px;
        }

        img.exhibitor-card__logo {
          max-width: 200px;
          max-height: 90px;
          width: auto;
          height: auto;
          object-fit: contain;
          aspect-ratio: 2 / 1;
        }

        /* ============================================
           RESPONSIVE BREAKPOINTS
           ============================================ */
        @media screen and (max-width: 991px) {
          .exhibitor-card {
            flex: 0 0 calc(50% - 12px);
            max-width: calc(50% - 12px);
          }
          .Skillathon-Heading h1 {
            font-size: 44px;
          }
          .exhibitor-category {
            font-size: 28px;
            margin-top: 50px;
            margin-bottom: 24px;
          }
        }

        @media screen and (max-width: 767px) {
          #Skillathon-Banner {
            padding: 70px 15px;
          }
          .Skillathon-Strip {
            padding: 18px 24px;
          }
          .Skillathon-Heading h1 {
            font-size: 32px;
          }
          .exhibitor-card {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .partners-section-wrap {
            padding: 20px 15px 60px;
          }
          .exhibitor-category {
            font-size: 24px;
            line-height: 1.3;
            margin-top: 40px;
            margin-bottom: 20px;
          }
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
          background: #525252 url('/bengaluruskillsummit/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg') center center no-repeat !important;
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
      `}),(0,r.jsx)(`div`,{id:`Skillathon-Banner`,children:(0,r.jsx)(`div`,{className:`Skillathon-Strip`,children:(0,r.jsx)(`div`,{className:`Skillathon-Heading`,children:(0,r.jsx)(`h1`,{children:`2025 Edition Media Partners`})})})}),(0,r.jsx)(`div`,{className:`partners-section-wrap`,children:(0,r.jsx)(`div`,{className:`partners-section`,children:n.map((e,t)=>(0,r.jsxs)(`div`,{className:`partner-group`,children:[(0,r.jsx)(`h3`,{className:`exhibitor-category`,children:e.category}),(0,r.jsx)(`div`,{className:`exhibitor-grid__row`,children:e.partners.map((e,t)=>{let n=(0,r.jsx)(`div`,{className:`exhibitor-card__inner`,children:(0,r.jsx)(`div`,{className:`exhibitor-card__media`,children:(0,r.jsx)(`img`,{src:e.logo,alt:`${e.name} logo`,className:`exhibitor-card__logo`,loading:`lazy`,decoding:`async`,width:220,height:110})})});return(0,r.jsx)(`div`,{className:`exhibitor-card`,children:e.website?(0,r.jsx)(`a`,{className:`exhibitor-card__link`,href:e.website,target:`_blank`,rel:`noopener noreferrer`,children:n}):n},t)})})]},t))})}),(0,r.jsx)(`div`,{id:`contact-info`,children:(0,r.jsxs)(`div`,{className:`row_col_wrap_12`,children:[(0,r.jsxs)(`div`,{className:`contact-info-card`,children:[(0,r.jsxs)(`div`,{className:`contact-title`,children:[`Sponsor and Exhibitor`,(0,r.jsx)(`br`,{}),`Queries`]}),(0,r.jsx)(`div`,{className:`contact-name`,children:`Vinay Martin`}),(0,r.jsx)(`div`,{className:`contact-designation`,children:`Commercial Director – India & Middle East`}),(0,r.jsx)(`div`,{className:`contact-email`,children:(0,r.jsx)(`a`,{href:`mailto:vinay.martin@tresconglobal.com`,children:`vinay.martin@tresconglobal.com`})})]}),(0,r.jsxs)(`div`,{className:`contact-info-card`,children:[(0,r.jsxs)(`div`,{className:`contact-title`,children:[`Speaking and Partner`,(0,r.jsx)(`br`,{}),`Queries`]}),(0,r.jsx)(`div`,{className:`contact-name`,children:`Simran Arora`}),(0,r.jsx)(`div`,{className:`contact-designation`,children:`Senior Manager – Conference Production`}),(0,r.jsx)(`div`,{className:`contact-email`,children:(0,r.jsx)(`a`,{href:`mailto:simran.arora@tresconglobal.com`,children:`simran.arora@tresconglobal.com`})})]}),(0,r.jsxs)(`div`,{className:`contact-info-card`,children:[(0,r.jsxs)(`div`,{className:`contact-title`,children:[`Government Relation &`,(0,r.jsx)(`br`,{}),`Marketing Queries`]}),(0,r.jsx)(`div`,{className:`contact-name`,children:`Ashutosh Gupta`}),(0,r.jsx)(`div`,{className:`contact-designation`,children:`Director – Strategic Alliances`}),(0,r.jsx)(`div`,{className:`contact-email`,children:(0,r.jsx)(`a`,{href:`mailto:ashutosh@tresconglobal.com`,children:`ashutosh@tresconglobal.com`})})]}),(0,r.jsxs)(`div`,{className:`contact-info-card`,children:[(0,r.jsxs)(`div`,{className:`contact-title`,children:[`Media & PR`,(0,r.jsx)(`br`,{}),`Queries`]}),(0,r.jsx)(`div`,{className:`contact-name`,children:`Arpit Soni`}),(0,r.jsx)(`div`,{className:`contact-designation`,children:`Senior Marketing Manager`}),(0,r.jsx)(`div`,{className:`contact-email`,children:(0,r.jsx)(`a`,{href:`mailto:arpit.soni@tresconglobal.com`,children:`arpit.soni@tresconglobal.com`})})]}),(0,r.jsxs)(`div`,{className:`contact-info-card`,children:[(0,r.jsxs)(`div`,{className:`contact-title`,children:[`General`,(0,r.jsx)(`br`,{}),`Enquiry`]}),(0,r.jsx)(`div`,{className:`contact-name`,children:`General Queries`}),(0,r.jsx)(`div`,{className:`contact-designation`,children:`\xA0`}),(0,r.jsx)(`div`,{className:`contact-email`,children:(0,r.jsx)(`a`,{href:`mailto:support@bengaluruskillsummit.com`,children:`support@bengaluruskillsummit.com`})})]})]})})]})}export{i as default};