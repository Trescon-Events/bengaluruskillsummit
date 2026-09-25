import{i as e,n as t,r as n,t as r}from"./index-CP_xgO_T.js";import{t as i}from"./partners2026Fallback-1nPoGto1.js";var a=e(n(),1),o=r();function s(e){let t=[];return e&&Array.isArray(e.categorized)&&(t=e.categorized.filter(e=>(e.category_name||``).toLowerCase().includes(`media`)&&Array.isArray(e.entity)&&e.entity.length>0)),t}function c(){let[e,n]=(0,a.useState)(()=>s(i)),[r,c]=(0,a.useState)(!1),[l,u]=(0,a.useState)(null);return(0,a.useEffect)(()=>{document.title=`Media Partners 2026 | Bengaluru Skill Summit`,window.scrollTo(0,0);let e=!0;return fetch(`https://api.konfhub.com/event/public/bengaluru-skill-summit-2026/entity/2`).then(e=>{if(!e.ok)throw Error(`API status ${e.status}`);return e.json()}).then(t=>{if(!e)return;let r=s(t);r.length>0&&n(r),c(!1)}).catch(t=>{e&&(console.warn(`KonfHub API warning, using static fallback:`,t),c(!1))}),()=>{e=!1}},[]),(0,o.jsxs)(`div`,{className:`media-partners-2026-page`,children:[(0,o.jsx)(`style`,{children:`
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
      `}),(0,o.jsx)(`section`,{id:`Partners-2026-Banner`,children:(0,o.jsx)(`div`,{className:`partners-banner-strip`,children:(0,o.jsx)(`div`,{className:`partners-banner-heading`,children:(0,o.jsx)(`h1`,{children:`2026 Edition MEDIA PARTNERS`})})})}),(0,o.jsxs)(`div`,{className:`bss-partner-tabs`,children:[(0,o.jsx)(t,{to:`/partners-2026`,className:`bss-partner-tab`,children:`All Partners`}),(0,o.jsx)(t,{to:`/ecosystem-partners-2026`,className:`bss-partner-tab`,children:`Ecosystem Partners`}),(0,o.jsx)(t,{to:`/media-partners-2026`,className:`bss-partner-tab active`,children:`Media Partners`})]}),(0,o.jsxs)(`div`,{className:`bss-partners-wrapper`,children:[r&&(0,o.jsxs)(`div`,{className:`bss-loading-wrap`,children:[(0,o.jsx)(`div`,{className:`bss-spinner`}),(0,o.jsx)(`div`,{children:`Loading media partners...`})]}),l&&(0,o.jsx)(`div`,{style:{color:`#ef4444`,textAlign:`center`,padding:`50px 20px`,fontFamily:`Comfortaa, sans-serif`},children:(0,o.jsx)(`h3`,{children:l})}),!r&&!l&&e.length===0&&(0,o.jsx)(`div`,{style:{textAlign:`center`,padding:`50px 20px`,color:`#64748b`},children:(0,o.jsx)(`h3`,{children:`No media partner data found.`})}),!r&&!l&&e.length>0&&(0,o.jsxs)(`div`,{id:`bss-sections-container`,children:[e.map((e,t)=>{let n=e.category_name||`Media Partner`;return(0,o.jsxs)(`div`,{className:`bss-category-section`,children:[(0,o.jsx)(`h2`,{className:`bss-category-heading`,children:n}),(0,o.jsx)(`div`,{className:`bss-logo-grid`,children:e.entity.map((e,t)=>{let n=e.entity_name||`Media Partner`,r=e.image_url,i=e.website_url,a=r?(0,o.jsx)(`img`,{src:r,className:`bss-logo-img`,alt:n,loading:`lazy`}):(0,o.jsx)(`span`,{className:`bss-logo-fallback`,children:n});return i&&i.trim()!==``?(0,o.jsx)(`a`,{href:i,target:`_blank`,rel:`noopener noreferrer`,className:`bss-logo-card`,title:n,children:a},t):(0,o.jsx)(`div`,{className:`bss-logo-card`,title:n,children:a},t)})})]},t)}),(0,o.jsxs)(`div`,{className:`bss-partner-bottom-cta`,children:[(0,o.jsx)(`h3`,{children:`Become an Official Media Partner`}),(0,o.jsx)(`p`,{children:`Partner with Bengaluru Skill Summit 2026 for extensive press coverage and global exposure.`}),(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`14px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,o.jsx)(t,{to:`/be-a-media-partner`,className:`bss-partner-bottom-btn`,children:`Media Partner Enquiry`}),(0,o.jsx)(t,{to:`/ecosystem-partners-2026`,className:`bss-partner-bottom-btn`,style:{backgroundColor:`#106cff`,boxShadow:`0 4px 14px rgba(16, 108, 255, 0.3)`},children:`View Ecosystem Partners`})]})]})]})]})]})}export{c as default};