import{o as e,s as t,t as n}from"./index-C26EoWdz.js";var r=t(e(),1),i=n();function a(){return(0,r.useEffect)(()=>{document.title=`Inaugural Day Guest Registration | Bengaluru Skill Summit 2026`,window.scrollTo(0,0);let e=null,t=()=>{let e=document.getElementById(`hubspot-guest-invite-form`);if(window.hbspt&&e){if(e.querySelector(`form`)||e.querySelector(`.hbspt-form`))return;e.innerHTML=``,window.hbspt.forms.create({portalId:`2953901`,formId:`fabb80f4-7312-461e-b27c-14b885dbca27`,region:`na1`,target:`#hubspot-guest-invite-form`,onFormSubmitted:function(){window.location.href=`/thank-you-guest-registration`}})}},n=()=>{let e=document.getElementById(`hubspot-guest-invite-form`);e&&document.querySelectorAll(`body > .hbspt-form, body > div > .hbspt-form`).forEach(t=>{e.contains(t)||e.appendChild(t)})};if(window.hbspt)t();else{let e=document.querySelector(`script[src*="hsforms.net"]`);if(e)e.addEventListener(`load`,t);else{let e=document.createElement(`script`);e.src=`https://js.hsforms.net/forms/embed/v2.js`,e.charset=`utf-8`,e.type=`text/javascript`,e.async=!0,e.onload=t,document.body.appendChild(e)}}return e=setInterval(n,500),()=>{e&&clearInterval(e)}},[]),(0,i.jsxs)(`div`,{className:`bss-inaugural-page`,style:{fontFamily:`"Comfortaa", sans-serif`,color:`#0e1220`},children:[(0,i.jsx)(`style`,{children:`
        /* ---------------- HERO BANNER ---------------- */
        .bss-inaugural-hero {
          width: 100%;
          min-height: 380px;
          background-image: url('/bengaluruskillsummit/wp-content/uploads/2025/09/agenda-banner.webp');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 150px 20px;
          box-sizing: border-box;
          text-align: center;
          position: relative;
        }

        .bss-inaugural-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .bss-inaugural-hero__container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .bss-inaugural-hero__title {
          color: #ffffff;
          font-size: 60px;
          font-weight: 700;
          line-height: 1.1;
          word-spacing: 10px;
          letter-spacing: -0.5px;
          margin: 0;
          text-transform: none;
        }

        /* ---------------- FORM SECTION ---------------- */
        .bss-inaugural-form-section {
          padding: 70px 20px 90px 20px;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
        }

        .bss-inaugural-form-container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Target container for HubSpot Form */
        #hubspot-guest-invite-form {
          width: 100%;
          min-height: 350px;
        }

        /* HubSpot Form Stylings */
        #hubspot-guest-invite-form .hs-form,
        #hubspot-guest-invite-form form {
          font-family: "Comfortaa", sans-serif !important;
        }

        #hubspot-guest-invite-form .hs-form-field {
          margin-bottom: 24px;
        }

        #hubspot-guest-invite-form label {
          display: block;
          font-size: 15px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 8px;
        }

        #hubspot-guest-invite-form .hs-form-required {
          color: #ff4d4f;
          margin-left: 2px;
        }

        #hubspot-guest-invite-form input[type="text"],
        #hubspot-guest-invite-form input[type="email"],
        #hubspot-guest-invite-form input[type="tel"],
        #hubspot-guest-invite-form input[type="number"],
        #hubspot-guest-invite-form select,
        #hubspot-guest-invite-form textarea {
          width: 100%;
          padding: 12px 16px;
          font-size: 15px;
          border: 1.5px solid #00A8B2;
          border-radius: 4px;
          outline: none;
          box-sizing: border-box;
          font-family: inherit;
          background: #ffffff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        #hubspot-guest-invite-form input:focus,
        #hubspot-guest-invite-form select:focus,
        #hubspot-guest-invite-form textarea:focus {
          border-color: #00828a;
          box-shadow: 0 0 0 3px rgba(0, 168, 178, 0.15);
        }

        #hubspot-guest-invite-form .hs-button,
        #hubspot-guest-invite-form input[type="submit"] {
          background-color: #ff6257 !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          font-size: 16px !important;
          padding: 14px 44px !important;
          border: none !important;
          border-radius: 4px !important;
          cursor: pointer !important;
          transition: background-color 0.2s, transform 0.1s !important;
          display: inline-block !important;
          margin-top: 10px !important;
        }

        #hubspot-guest-invite-form .hs-button:hover,
        #hubspot-guest-invite-form input[type="submit"]:hover {
          background-color: #e55349 !important;
        }

        #hubspot-guest-invite-form .hs-error-msgs {
          list-style: none;
          padding: 0;
          margin: 6px 0 0 0;
          color: #ff4d4f;
          font-size: 13px;
        }

        /* ---------------- CONTACT CARDS SECTION (SCREENSHOT 2) ---------------- */
        #contact-info {
          position: relative;
          box-sizing: border-box;
          padding: 70px 20px 80px 20px;
          background: #525252 url('/bengaluruskillsummit/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg') center center no-repeat;
          background-size: cover;
        }

        #contact-info .contact-info-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          max-width: 1240px;
          margin: 0 auto;
        }

        #contact-info .contact-info-card {
          flex: 1 1 calc(20% - 16px);
          min-width: 210px;
          background-color: #525252;
          border-radius: 12px;
          padding: 26px 18px;
          box-sizing: border-box;
          text-align: left;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        #contact-info .contact-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        #contact-info .contact-title {
          font-size: 15px;
          line-height: 1.35;
          color: #eaeaea;
          margin-bottom: 28px;
          min-height: 42px;
          font-weight: 500;
        }

        #contact-info .contact-name {
          font-size: 14px;
          line-height: 1.2;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 6px;
        }

        #contact-info .contact-designation {
          font-size: 11px;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 12px;
          min-height: 28px;
        }

        #contact-info .contact-email a {
          font-size: 11.5px;
          line-height: 1.3;
          color: #ffc933;
          text-decoration: none;
          overflow-wrap: normal ;
          word-break: normal ; white-space: nowrap ;
          white-space: nowrap ;
          display: inline-block;
          font-weight: 500;
        }

        #contact-info .contact-email a:hover { text-decoration: none !important; color: #ffd766 !important; }

        /* ---------------- RESPONSIVE BREAKPOINTS ---------------- */
        @media (max-width: 1100px) {
          #contact-info .contact-info-card {
            flex: 1 1 calc(33.333% - 16px);
          }
        }

        @media (max-width: 992px) {
          .bss-inaugural-hero {
            padding: 100px 20px;
          }
          .bss-inaugural-hero__title {
            font-size: 40px;
          }
        }

        @media (max-width: 768px) {
          #contact-info .contact-info-card {
            flex: 1 1 calc(50% - 16px);
          }
        }

        @media (max-width: 650px) {
          .bss-inaugural-hero {
            padding: 60px 15px;
          }
          .bss-inaugural-hero__title {
            font-size: 30px;
            word-spacing: 4px;
          }
          #contact-info .contact-info-card {
            flex: 1 1 100%;
          }
        }
      `}),(0,i.jsx)(`section`,{className:`bss-inaugural-hero`,children:(0,i.jsx)(`div`,{className:`bss-inaugural-hero__container`,children:(0,i.jsx)(`h1`,{className:`bss-inaugural-hero__title`,children:`Guest Registration`})})}),(0,i.jsx)(`section`,{className:`bss-inaugural-form-section`,children:(0,i.jsx)(`div`,{className:`bss-inaugural-form-container`,children:(0,i.jsx)(`div`,{id:`hubspot-guest-invite-form`})})}),(0,i.jsx)(`section`,{id:`contact-info`,children:(0,i.jsxs)(`div`,{className:`contact-info-wrap`,children:[(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Sponsor and Exhibitor`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Vinay Martin`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Commercial Director – India & Middle East`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:vinay@bengaluruskillsummit.com`,children:`vinay@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Speaking and Partner`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Simran Arora`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Sr Conference Producer`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:speaker@bengaluruskillsummit.com`,children:`speaker@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Marketing and Media`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Thulasi S`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Marketing Director`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:marketing@bengaluruskillsummit.com`,children:`marketing@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Delegate Registration`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Suraj Shetty`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Director – Delegate Acquisition`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:delegate@bengaluruskillsummit.com`,children:`delegate@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Partnership`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Praveen Kumar`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Partnership Director`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:partnerships@bengaluruskillsummit.com`,children:`partnerships@bengaluruskillsummit.com`})})]})]})]})})]})}export{a as default};