import{o as e,s as t,t as n}from"./index-B0dymM_5.js";var r=t(e(),1),i=n();function a(){return(0,r.useEffect)(()=>{document.title=`Skillathon Registration - Bengaluru Skill Summit`,window.scrollTo(0,0);let e=null,t=()=>{let e=document.getElementById(`hubspot-skillathon-form`);if(window.hbspt&&e){if(e.querySelector(`form`)||e.querySelector(`.hbspt-form`))return;e.innerHTML=``,window.hbspt.forms.create({portalId:`2953901`,formId:`ef93998c-d1d4-4da5-a115-d105d7f60528`,region:`na1`,target:`#hubspot-skillathon-form`,onFormSubmitted:function(){window.location.href=`/thank-you`}})}},n=()=>{let e=document.getElementById(`hubspot-skillathon-form`);e&&document.querySelectorAll(`body > .hbspt-form, body > div > .hbspt-form`).forEach(t=>{e.contains(t)||e.appendChild(t)})};if(window.hbspt)t();else{let e=document.querySelector(`script[src*="hsforms.net"]`);if(e)e.addEventListener(`load`,t);else{let e=document.createElement(`script`);e.src=`https://js.hsforms.net/forms/embed/v2.js`,e.charset=`utf-8`,e.type=`text/javascript`,e.async=!0,e.onload=t,document.body.appendChild(e)}}return e=setInterval(n,500),()=>{e&&clearInterval(e)}},[]),(0,i.jsxs)(`div`,{className:`bss-skill-reg-page`,style:{fontFamily:`"Comfortaa", sans-serif`,color:`#0e1220`},children:[(0,i.jsx)(`style`,{children:`
        /* ---------------- HERO BANNER ---------------- */
        .bss-skill-reg-hero {
          width: 100%;
          min-height: 380px;
          background-image: url('/bengaluruskillsummit/wp-content/uploads/2025/09/banner-skillathon-05.webp');
          background-position: left top;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 20px;
          box-sizing: border-box;
          text-align: center;
        }

        .bss-skill-reg-hero__container {
          max-width: 920px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
        }

        .bss-skill-reg-hero__card {
          background-color: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          width: 100%;
          padding: 30px 40px;
          border-radius: 8px;
          box-sizing: border-box;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .bss-skill-reg-hero__title {
          font-size: 60px !important;
          color: #106cff !important;
          font-weight: 700 !important;
          letter-spacing: 3px !important;
          word-spacing: 10px !important;
          line-height: 100% !important;
          margin: 0 0 10px 0 !important;
        }

        .bss-skill-reg-hero__subtitle {
          font-size: 30px !important;
          color: #0e1220 !important;
          font-weight: 400 !important;
          line-height: 110% !important;
          margin: 0 !important;
        }

        @media (max-width: 991px) {
          .bss-skill-reg-hero {
            min-height: 300px;
            padding: 80px 20px 60px;
          }
          .bss-skill-reg-hero__title {
            font-size: 40px !important;
            word-spacing: 6px !important;
          }
          .bss-skill-reg-hero__subtitle {
            font-size: 24px !important;
          }
        }

        @media (max-width: 767px) {
          .bss-skill-reg-hero {
            min-height: 240px;
            padding: 60px 15px 40px;
          }
          .bss-skill-reg-hero__title {
            font-size: 30px !important;
            word-spacing: 4px !important;
          }
          .bss-skill-reg-hero__subtitle {
            font-size: 20px !important;
          }
        }

        /* ---------------- HUBSPOT FORM SECTION ---------------- */
        .bss-skill-reg-form-section {
          width: 100%;
          padding: 60px 10%;
          box-sizing: border-box;
          background-color: #ffffff;
          min-height: 450px;
        }

        .bss-skill-reg-form-container {
          max-width: 1050px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* HubSpot Native Form Styles */
        .hbspt-form,
        .hs-form {
          width: 100% !important;
          max-width: 100% !important;
          margin: 20px auto;
          font-family: "Comfortaa", sans-serif;
          font-size: 14px;
          color: #000000;
        }

        .hbspt-form h1 {
          font-family: "Comfortaa", sans-serif;
          font-size: 30px;
          font-weight: 700;
          color: #000000;
          text-align: center;
          margin: 20px;
          max-width: 100% !important;
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
          font-family: "Comfortaa", sans-serif !important;
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
          font-family: "Comfortaa", sans-serif !important;
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
          .bss-skill-reg-form-section {
            padding: 40px 5% 50px;
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
      `}),(0,i.jsx)(`section`,{id:`Skill-Reg-Banner`,className:`bss-skill-reg-hero`,children:(0,i.jsx)(`div`,{className:`bss-skill-reg-hero__container`,children:(0,i.jsxs)(`div`,{className:`bss-skill-reg-hero__card`,children:[(0,i.jsx)(`h1`,{className:`bss-skill-reg-hero__title`,children:`Skillathon Registration`}),(0,i.jsx)(`p`,{className:`bss-skill-reg-hero__subtitle`,children:`Young minds powering tomorrow’s skills`})]})})}),(0,i.jsx)(`section`,{className:`bss-skill-reg-form-section`,children:(0,i.jsx)(`div`,{className:`bss-skill-reg-form-container`,children:(0,i.jsx)(`div`,{id:`hubspot-skillathon-form`})})}),(0,i.jsx)(`section`,{id:`contact-info`,children:(0,i.jsxs)(`div`,{className:`contact-info-wrap`,children:[(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Sponsor and Exhibitor`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Vinay Martin`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Commercial Director – India & Middle East`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:vinay@bengaluruskillsummit.com`,children:`vinay@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Speaking and Partner`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Simran Arora`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Sr Conference Producer`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:speaker@bengaluruskillsummit.com`,children:`speaker@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Marketing and Media`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Thulasi S`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Marketing Director`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:marketing@bengaluruskillsummit.com`,children:`marketing@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Delegate Registration`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Suraj Shetty`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Director – Delegate Acquisition`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:delegate@bengaluruskillsummit.com`,children:`delegate@bengaluruskillsummit.com`})})]})]}),(0,i.jsxs)(`div`,{className:`contact-info-card`,children:[(0,i.jsxs)(`div`,{className:`contact-title`,children:[`Partnership`,(0,i.jsx)(`br`,{}),`Queries`]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`contact-name`,children:`Praveen Kumar`}),(0,i.jsx)(`div`,{className:`contact-designation`,children:`Partnership Director`}),(0,i.jsx)(`div`,{className:`contact-email`,children:(0,i.jsx)(`a`,{href:`mailto:partnerships@bengaluruskillsummit.com`,children:`partnerships@bengaluruskillsummit.com`})})]})]})]})})]})}export{a as default};