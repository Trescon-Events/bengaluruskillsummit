import{o as e,s as t,t as n}from"./index-DOgPY6wn.js";var r=t(e(),1),i=n();function a(){return(0,r.useEffect)(()=>{document.title=`Sponsor Registration - Bengaluru Skill Summit`,window.scrollTo(0,0);let e=null,t=()=>{let e=document.getElementById(`hubspot-sponsor-reg-form`);if(window.hbspt&&e){if(e.querySelector(`form`)||e.querySelector(`.hbspt-form`))return;e.innerHTML=``,window.hbspt.forms.create({portalId:`2953901`,formId:`fe1579e2-886c-4ce8-b62b-31eaf510f9a8`,region:`na1`,target:`#hubspot-sponsor-reg-form`,onFormSubmitted:function(){window.location.href=`/thank-you`}})}},n=()=>{let e=document.getElementById(`hubspot-sponsor-reg-form`);e&&document.querySelectorAll(`body > .hbspt-form, body > div > .hbspt-form`).forEach(t=>{e.contains(t)||e.appendChild(t)})};if(window.hbspt)t();else{let e=document.querySelector(`script[src*="hsforms.net"]`);if(e)e.addEventListener(`load`,t);else{let e=document.createElement(`script`);e.src=`https://js.hsforms.net/forms/embed/v2.js`,e.charset=`utf-8`,e.type=`text/javascript`,e.async=!0,e.onload=t,document.body.appendChild(e)}}return e=setInterval(n,500),()=>{e&&clearInterval(e)}},[]),(0,i.jsxs)(`div`,{className:`bss-sponsor-reg-page`,style:{fontFamily:`"Comfortaa", sans-serif`,color:`#0e1220`},children:[(0,i.jsx)(`style`,{children:`
        /* ---------------- HERO BANNER ---------------- */
        .bss-sponsor-reg-hero {
          width: 100%;
          min-height: 260px;
          background-image: url('/bengaluruskillsummit/wp-content/uploads/2025/09/agenda-banner.webp');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: calc(100vw * 0.06) 20px;
          box-sizing: border-box;
          text-align: center;
          position: relative;
        }

        .bss-sponsor-reg-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .bss-sponsor-reg-hero__container {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .bss-sponsor-reg-hero__title {
          font-family: 'Oswald', 'Comfortaa', sans-serif !important;
          font-size: 52px !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          letter-spacing: 1px !important;
          line-height: 1.2 !important;
          text-align: center !important;
          margin: 0 !important;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5) !important;
        }

        @media (max-width: 991px) {
          .bss-sponsor-reg-hero {
            padding: 80px 20px;
          }
          .bss-sponsor-reg-hero__title {
            font-size: 38px !important;
          }
        }

        @media (max-width: 767px) {
          .bss-sponsor-reg-hero {
            padding: 50px 15px;
          }
          .bss-sponsor-reg-hero__title {
            font-size: 28px !important;
          }
        }

        /* ---------------- HUBSPOT FORM SECTION ---------------- */
        .bss-sponsor-reg-form-section {
          width: 100%;
          padding: 70px 10% 40px;
          box-sizing: border-box;
          background-color: #ffffff;
          min-height: 450px;
        }

        .bss-sponsor-reg-form-container {
          max-width: 1050px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* HubSpot Native Form Styles matching live site */
        .hbspt-form,
        .hs-form {
          width: 100% !important;
          max-width: 100% !important;
          margin: 20px auto;
          font-family: 'Comfortaa', sans-serif;
          font-size: 14px;
          color: #000000;
        }

        .hbspt-form label,
        .hs-form label {
          font-weight: 500;
          font-size: 18px;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
          color: #000000;
          line-height: 150%;
        }

        span.hs-form-required,
        .hs-form label .hs-form-required {
          color: #FF0000 !important;
        }

        .hbspt-form input[type="text"],
        .hbspt-form input[type="email"],
        .hbspt-form input[type="tel"],
        .hbspt-form select,
        .hbspt-form textarea,
        .hs-form input[type="text"],
        .hs-form input[type="email"],
        .hs-form input[type="tel"],
        .hs-form select,
        .hs-form textarea {
          width: 100% !important;
          background: transparent !important;
          border: 1px solid #00A8B2 !important;
          color: #616161 !important;
          font-family: 'Comfortaa', sans-serif !important;
          font-size: 17px !important;
          font-weight: 300 !important;
          line-height: 100% !important;
          padding: 16px 18px !important;
          border-radius: 0px !important;
          box-sizing: border-box !important;
          margin-bottom: 20px !important;
          outline: none !important;
        }

        .hbspt-form textarea,
        .hs-form textarea {
          min-height: 120px !important;
          line-height: 1.4 !important;
        }

        .hbspt-form select,
        .hs-form select {
          cursor: pointer;
          padding-right: 30px !important;
        }

        .hbspt-form input:focus,
        .hs-form input:focus,
        .hs-form select:focus,
        .hs-form textarea:focus {
          border-color: #106cff !important;
          box-shadow: 0 0 6px rgba(16, 108, 255, 0.3) !important;
        }

        /* Checkbox */
        .hbspt-form input[type="checkbox"],
        .hs-form input[type="checkbox"] {
          margin-right: 10px;
          transform: scale(1.2);
          cursor: pointer;
        }

        .hbspt-form input[type="checkbox"] + label,
        .hs-form input[type="checkbox"] + label {
          font-size: 14px;
          font-weight: normal;
          text-transform: none;
          display: inline;
        }

        /* Submit Button */
        .hbspt-form .actions,
        .hs-form .actions {
          padding-top: 30px;
          text-align: center;
        }

        .hbspt-form input[type="submit"],
        .hs-form input[type="submit"],
        .hs-form .hs-button.primary {
          background-color: #ff6257 !important;
          color: #ffffff !important;
          font-family: 'Comfortaa', sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          padding: 14px 45px !important;
          border: none !important;
          border-radius: 4px !important;
          cursor: pointer !important;
          transition: all 0.25s ease !important;
          margin-top: 15px !important;
          display: inline-block !important;
        }

        .hbspt-form input[type="submit"]:hover,
        .hs-form input[type="submit"]:hover,
        .hs-form .hs-button.primary:hover {
          background-color: #f74d41 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 18px rgba(255, 98, 87, 0.35) !important;
        }

        .hbspt-form fieldset.form-columns-2,
        .hs-form .form-columns-2 {
          display: flex !important;
          gap: 20px !important;
          max-width: 100% !important;
          margin-bottom: 20px !important;
          border: none !important;
          padding: 0 !important;
        }

        .hs-form .form-columns-2 .hs-form-field {
          flex: 1 1 50% !important;
          width: 50% !important;
        }

        @media (max-width: 768px) {
          .bss-sponsor-reg-form-section {
            padding: 40px 5% 40px;
          }
          .hs-form .form-columns-2 {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .hs-form .form-columns-2 .hs-form-field {
            width: 100% !important;
          }
        }

        /* ---------------- CONTACT INFO SECTION ---------------- */
        #contact-info {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          box-sizing: border-box;
          padding: 60px 20px;
          background: #525252 url('/bengaluruskillsummit/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg') center center no-repeat;
          background-size: cover;
        }

        #contact-info .contact-info-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          max-width: 1440px;
          margin: 0 auto;
        }

        #contact-info .contact-info-card {
          flex: 1 1 calc(20% - 15px);
          min-width: 240px;
          background-color: #525252;
          border-radius: 10px;
          padding: 25px 14px;
          box-sizing: border-box;
          text-align: left;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        #contact-info .contact-title {
          font-size: 15px;
          line-height: 1.3;
          color: #eaeaea;
          margin-bottom: 10px;
          min-height: 40px;
          font-weight: 500;
        }

        #contact-info .contact-name {
          font-size: 13px;
          line-height: 1;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 5px;
        }

        #contact-info .contact-designation {
          font-size: 10px;
          line-height: 1.2;
          color: rgba(255,255,255,0.8);
          margin-bottom: 12px;
          min-height: 24px;
        }

        #contact-info .contact-email a {
          font-size: 11px;
          line-height: 1.3;
          color: #ffc933;
          text-decoration: none;
          overflow-wrap: normal ;
          word-break: normal ; white-space: nowrap ;
          white-space: nowrap ;
          display: inline-block;
        }

        #contact-info .contact-email a:hover { text-decoration: none !important; color: #ffd766 !important; }
      `}),(0,i.jsx)(`section`,{className:`bss-sponsor-reg-hero`,children:(0,i.jsx)(`div`,{className:`bss-sponsor-reg-hero__container`,children:(0,i.jsx)(`h1`,{className:`bss-sponsor-reg-hero__title`,children:`Sponsor Registration`})})}),(0,i.jsx)(`section`,{className:`bss-sponsor-reg-form-section`,children:(0,i.jsx)(`div`,{className:`bss-sponsor-reg-form-container`,children:(0,i.jsx)(`div`,{id:`hubspot-sponsor-reg-form`})})}),(0,i.jsx)(`section`,{id:`contact-info`,children:(0,i.jsxs)(`div`,{className:`contact-info-wrap`,children:[(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Sponsor and Exhibitor`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Vinay Martin`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Commercial Director – India & Middle East`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:vinay@bengaluruskillsummit.com`,children:`vinay@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Speaking and Partner`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Simran Arora`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Sr Conference Producer`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:speaker@bengaluruskillsummit.com`,children:`speaker@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Marketing and Media`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Thulasi S`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Marketing Director`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:marketing@bengaluruskillsummit.com`,children:`marketing@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Delegate Registration`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Suraj Shetty`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Director – Delegate Acquisition`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:delegate@bengaluruskillsummit.com`,children:`delegate@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Partnership`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Praveen Kumar`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Partnership Director`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:partnerships@bengaluruskillsummit.com`,children:`partnerships@bengaluruskillsummit.com`})})]})]})]})})]})}export{a as default};