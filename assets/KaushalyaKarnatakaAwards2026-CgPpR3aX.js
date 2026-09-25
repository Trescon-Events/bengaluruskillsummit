import{o as e,s as t,t as n}from"./index-DxY2J4fY.js";var r=t(e(),1),i=n();function a(){let[e,t]=(0,r.useState)(`corporate`),n=e=>{t(e)},a=e=>{let t=document.getElementById(`instCatTrack`);if(t){let n=t.querySelector(`.kka-inst-cat-card`),r=n?n.offsetWidth:270;t.scrollBy({left:e*(r+22),behavior:`smooth`})}},o=(e,n)=>{n&&n.preventDefault(),e.startsWith(`inst-`)?t(`institutional`):(e.startsWith(`corp-`)||e===`award-categories`||e===`2025-winners`)&&t(`corporate`),setTimeout(()=>{let t=document.getElementById(e);if(t){let n=t.getBoundingClientRect().top+window.pageYOffset-70;window.scrollTo({top:n,behavior:`smooth`}),window.history.pushState&&window.history.pushState(null,null,`#`+e)}},60)};return(0,r.useEffect)(()=>{let t=document.getElementById(`hero-content-corporate`),n=document.getElementById(`hero-content-institutional`),r=document.getElementById(`panel-corporate`),i=document.getElementById(`panel-institutional`),a=document.getElementById(`tab-btn-corporate`),o=document.getElementById(`tab-btn-institutional`);e===`corporate`?(t&&(t.style.display=`flex`),n&&(n.style.display=`none`),r&&(r.classList.add(`active`),r.style.display=`block`),i&&(i.classList.remove(`active`),i.style.display=`none`),a&&a.classList.add(`active`),o&&o.classList.remove(`active`)):(t&&(t.style.display=`none`),n&&(n.style.display=`flex`),r&&(r.classList.remove(`active`),r.style.display=`none`),i&&(i.classList.add(`active`),i.style.display=`block`),a&&a.classList.remove(`active`),o&&o.classList.add(`active`))},[e]),(0,i.jsxs)(`div`,{className:`kka-awards-page-root`,children:[(0,i.jsx)(`style`,{children:`
        * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html {
      scroll-behavior: smooth;
    }
    body {
      font-family: 'Comfortaa', cursive, sans-serif;
      background-color: #ffffff;
      color: #1e293b;
      overflow-x: hidden;
      line-height: 1.6;
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    .tab-content-panel {
      display: none;
      animation: kkaFadeIn 0.35s ease;
    }
    .tab-content-panel.active {
      display: block;
    }
    @keyframes kkaFadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

/* =========================================
     HERO SECTION CONTAINER & BACKGROUND
     ========================================= */
  .awards-section {
    position: relative;
    background: #020b1e url('https://bengaluruskillsummit.com/wp-content/uploads/2026/08/banner-skillathon-03-2-2.png') no-repeat center top / cover;
    color: #ffffff;
    padding: 55px 0 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
  }

  /* Subtle vignette for contrast without darkening the gold arcs */
  .awards-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 25%, rgba(2, 11, 30, 0.15) 0%, rgba(2, 11, 30, 0.45) 100%);
    pointer-events: none;
    z-index: 1;
  }

  /* =========================================
     TOP TITLES
     ========================================= */
  .header-content {
    text-align: center;
    margin-bottom: 24px;
    padding: 0 20px;
    position: relative;
    z-index: 2;
    max-width: 1250px;
    width: 100%;
  }

  .main-title {
    font-family: 'Jost', sans-serif !important;
    font-size: 50px !important;
    color: #f5b919 !important; 
    margin: 0 0 6px 0 !important;
    font-weight: 700 !important;
    letter-spacing: 0.5px !important;
    line-height: 1.15 !important;
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6) !important;
  }

  .subtitle {
    font-family: 'Jost', sans-serif !important;
    font-size: 32px !important;
    color: #ffffff !important;
    margin: 0 0 10px 0 !important;
    font-weight: 400 !important;
    letter-spacing: 0.5px !important;
    line-height: 1.2 !important;
  }

  .hero-date-venue {
    font-family: 'Jost', sans-serif !important;
    font-size: 22px !important;
    color: #ffffff !important;
    font-weight: 700 !important;
    margin: 0 !important;
    letter-spacing: 0.5px !important;
    line-height: 1.3 !important;
  }

  /* =========================================
     GOLD LINE & CATEGORY TABS
     ========================================= */
  .tabs-outer-line-wrapper {
    width: 100%;
    border-bottom: 2px solid #f5b919;
    display: flex;
    justify-content: center;
    margin-bottom: 42px;
    position: relative;
    z-index: 2;
    padding: 0 20px;
  }

  .tabs-container {
    display: flex;
    gap: 14px;
    justify-content: center;
    margin-bottom: -2px; /* Sits precisely on the gold line */
    flex-wrap: wrap;
  }

  .tab-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 24px;
    border-radius: 8px 8px 0 0;
    font-family: 'Jost', sans-serif !important;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.25s ease;
    background: transparent;
    color: #f5b919;
    border: 2px solid #f5b919;
    border-bottom: none;
    text-transform: uppercase;
  }

  .tab-btn.active {
    background-color: #f5b919;
    color: #000000;
    border-color: #f5b919;
  }

  .tab-icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }

  .tab-icon-wrap svg {
    width: 20px;
    height: 20px;
  }

  /* =========================================
     HERO CONTENT ROW (SPLIT LAYOUT)
     ========================================= */
  .hero-tab-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    max-width: 1250px;
    padding: 0 35px;
    gap: 30px;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
  }

  .text-content {
    flex: 1.25;
    max-width: 720px;
    padding-bottom: 10px;
  }

  /* ENLARGED LOGO BADGE (NO TEXT) */
  .kka-hero-badge-wrap {
    margin-bottom: 24px;
    display: inline-block;
  }

  .kka-hero-badge-img {
  height: 85px !important;
  max-height: 85px !important;
  width: auto !important;
  max-width: 380px !important;
  object-fit: contain !important;
  display: block !important;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
}

  /* MAIN SECTION TITLE */
  .section-title {
    font-family: 'Oswald', sans-serif !important;
    font-size: 46px !important;
    line-height: 1.14 !important;
    margin-top: 0;
    margin-bottom: 18px;
    text-transform: uppercase !important;
    font-weight: 700 !important;
    color: #ffffff !important;
    letter-spacing: 0.5px !important;
  }

  .section-title span {
    display: block;
    white-space: nowrap;
  }

  /* DESCRIPTION */
  .description {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 17px !important;
    font-weight: 400 !important;
    line-height: 1.62 !important;
    margin-bottom: 26px !important;
    color: #f1f5f9 !important;
    max-width: 660px !important;
  }

  /* BUTTON GROUPS */
  .action-buttons {
    display: flex;
    gap: 14px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .outline-btn {
    background: rgba(0, 0, 0, 0.25);
    color: #ffffff !important;
    border: 1.5px solid rgba(255, 255, 255, 0.85);
    padding: 10px 24px;
    border-radius: 9999px;
    font-family: 'Oswald', 'Inter', sans-serif !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.25s ease;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  }

  .outline-btn:hover { 
    background: rgba(255, 255, 255, 0.18); 
    transform: translateY(-2px);
    border-color: #ffffff;
  }

  .primary-btn {
    background: #ff5252 !important;
    color: #ffffff !important;
    border: none;
    padding: 12px 28px !important;
    border-radius: 9999px !important;
    font-family: 'Oswald', 'Inter', sans-serif !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    letter-spacing: 0.5px !important;
    cursor: pointer;
    box-shadow: 0 4px 18px rgba(255, 82, 82, 0.5);
    transition: transform 0.2s, box-shadow 0.2s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase !important;
    text-decoration: none;
  }

  .primary-btn:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 6px 24px rgba(255, 82, 82, 0.7); 
  }

  /* =========================================
     RIGHT PODIUM & TROPHY
     ========================================= */
  .image-content {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .award-image {
    width: 100%;
    max-width: 530px;
    height: auto;
    max-height: 500px;
    object-fit: contain;
    filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.65));
  }

  /* =========================================
     RESPONSIVE MEDIA QUERIES
     ========================================= */
  @media (max-width: 1024px) {
    .section-title span {
      white-space: normal;
    }
    .award-image {
      max-width: 440px;
    }
  }

  @media (max-width: 900px) {
    .hero-tab-content {
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      padding: 0 20px;
    }
    .text-content {
      max-width: 100%;
      padding-bottom: 0;
    }
    .kka-hero-badge-wrap {
      display: flex;
      justify-content: center;
    }
    .action-buttons {
      justify-content: center;
    }
    .image-content {
      margin-top: 30px;
      justify-content: center;
      width: 100%;
    }
    .award-image {
      max-width: 420px;
    }
  }

  @media (max-width: 768px) {
    .awards-section {
      padding: 40px 0 50px 0;
    }
    .main-title { font-size: 34px !important; }
    .subtitle { font-size: 24px !important; }
    .hero-date-venue { font-size: 18px !important; }
    .section-title { font-size: 32px !important; }
    .description { font-size: 16px !important; line-height: 1.55 !important; }
    .tab-btn { font-size: 13px !important; padding: 10px 16px !important; }
    .kka-hero-badge-img {
  height: 85px !important;
  max-height: 85px !important;
  width: auto !important;
  max-width: 380px !important;
  object-fit: contain !important;
  display: block !important;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
}
  }

  @media (max-width: 480px) {
    .main-title { font-size: 28px !important; }
    .subtitle { font-size: 20px !important; }
    .hero-date-venue { font-size: 15px !important; }
    .section-title { font-size: 26px !important; }
    .kka-hero-badge-img {
  height: 85px !important;
  max-height: 85px !important;
  width: auto !important;
  max-width: 380px !important;
  object-fit: contain !important;
  display: block !important;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
}
  }

.about-section-wrapper {
    background-color: #ffffff;
    padding: 70px 5% 40px 5%;
    color: #333333;
    width: 100%;
    box-sizing: border-box;
  }

  .about-container {
    max-width: 1250px;
    margin: 0 auto;
    text-align: center;
  }

  /* Exact Design Specs for 'About the Awards' Heading */
  .about-heading-blue {
    color: #0D53C7 !important;
    font-size: 48px !important;
    font-family: 'Jost', 'Joost', sans-serif !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    line-height: 50.88px !important;
    word-wrap: break-word !important;
    letter-spacing: 0.3px !important;
    margin-top: 0 !important;
    margin-bottom: 22px !important;
    text-align: center !important;
  }

  /* Description & Intro Text */
  .intro-text {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 16px !important;
    line-height: 30px !important;
    max-width: 1088px !important;
    margin: 0 auto 24px !important;
    color: #0A0A0A !important;
    font-weight: 400 !important;
    text-align: center !important;
    word-wrap: break-word !important;
  }

  .intro-text strong {
    font-weight: 700 !important;
    color: #0A0A0A !important;
  }

  .intro-text.highlight {
    margin-bottom: 45px !important;
  }

  /* 4 Feature Pillars Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-bottom: 60px;
  }

  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .feature-icon {
    width: 84px;
    height: 84px;
    margin-bottom: 18px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  .feature-item:hover .feature-icon {
    transform: translateY(-5px);
  }

  .feature-text {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 0.98rem;
    line-height: 1.5;
    font-weight: 600;
    color: #1e293b;
    text-align: center;
  }

  /* Policy Card Banner */
  .policy-card {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto 70px auto;
  }

  .policy-image {
    width: 100%;
    max-width: 760px; 
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
    display: block;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 30px !important;
    }
  }

  @media (max-width: 768px) {
    .about-section-wrapper {
      padding: 50px 20px 30px 20px !important;
    }
    .about-heading-blue {
      font-size: 32px !important;
      line-height: 38px !important;
      margin-bottom: 16px !important;
    }
    .intro-text {
      font-size: 15px !important;
      line-height: 26px !important;
    }
    .policy-card {
      margin-bottom: 40px !important;
    }
  }

  @media (max-width: 480px) {
    .about-heading-blue {
      font-size: 26px !important;
      line-height: 32px !important;
    }
    .features-grid {
      grid-template-columns: 1fr !important;
      gap: 25px !important;
    }
  }

.kka-why-matter-section {
    margin: 60px auto 80px auto;
    max-width: 1250px;
    text-align: center;
  }
  .kka-why-matter-subhead {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 16px !important;
    color: #0A0A0A !important;
    line-height: 30px !important;
    max-width: 956px !important;
    margin: 0 auto 12px auto !important;
  }
  .kka-why-matter-intro {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 16px !important;
    color: #0A0A0A !important;
    line-height: 30px !important;
    margin: 0 auto 45px auto !important;
    max-width: 651px !important;
  }
  .kka-why-matter-flow {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    margin: 0 auto 45px auto;
  }
  .kka-why-matter-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    max-width: 220px;
    text-align: center;
  }
  .kka-why-matter-circle-wrap {
    position: relative;
    width: 160px;
    height: 175px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .kka-why-matter-circle-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
  .kka-why-matter-item:hover .kka-why-matter-circle-img { transform: scale(1.05); }
  .kka-why-matter-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #0284c7;
    margin-top: 75px;
    flex-shrink: 0;
  }
  .kka-why-matter-text {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 16px !important;
    line-height: 20px !important;
    color: #0A0A0A !important;
  }
  .kka-why-matter-summary {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 25px !important;
    line-height: 30px !important;
    color: #0A0A0A !important;
    max-width: 1128px !important;
    margin: 50px auto 0 auto !important;
    font-weight: 700 !important;
  }
  @media(max-width: 1024px) {
    .kka-why-matter-flow { flex-wrap: wrap; justify-content: center; gap: 30px; }
    .kka-why-matter-arrow { display: none; }
    .kka-why-matter-item { max-width: 260px; }
  }

.kka-categories-wrap {
    width: 100vw !important;
    position: relative !important;
    left: 50% !important;
    right: 50% !important;
    margin-left: -50vw !important;
    margin-right: -50vw !important;
    background: #081736 url('https://bengaluruskillsummit.com/wp-content/uploads/2026/09/bg-award-categories.png') no-repeat center center / cover !important;
    padding: 80px 5% 75px 5% !important;
    color: #ffffff !important;
    position: relative !important;
    overflow: hidden !important;
    box-sizing: border-box !important;
  }
  .kka-categories-wrap::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(8, 23, 54, 0.35) !important;
    pointer-events: none;
  }
  .kka-categories-inner {
    max-width: 1200px !important;
    margin: 0 auto !important;
    position: relative !important;
    z-index: 2 !important;
    text-align: center !important;
  }
  .kka-cat-main-title {
    font-family: 'Jost', sans-serif !important;
    font-size: 48px !important;
    color: #ffffff !important;
    margin: 0 0 10px 0 !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    line-height: 50.88px !important;
  }
  .kka-cat-subtitle {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 16px !important;
    color: #ffffff !important;
    margin: 0 0 20px 0 !important;
    line-height: 30px !important;
  }
  .kka-cat-section-title {
    font-family: 'Inter', sans-serif !important;
    font-size: 30px !important;
    font-weight: 700 !important;
    color: #ffffff !important;
    margin: 0 0 35px 0 !important;
    text-transform: capitalize !important;
  }
  .kka-categories-grid {
    display: grid !important;
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 22px !important;
    max-width: 1180px !important;
    margin: 0 auto 35px auto !important;
  }
  .kka-category-svg-card {
    border-radius: 14px !important;
    overflow: hidden !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18) !important;
    transition: transform 0.25s ease, box-shadow 0.25s ease !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .kka-category-svg-card:hover {
    transform: translateY(-6px) !important;
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.3) !important;
  }
  .kka-category-svg-img, .kka-category-svg-card svg {
    width: 100% !important;
    height: auto !important;
    display: block !important;
    object-fit: contain !important;
  }
  @media(max-width: 1024px) {
    .kka-categories-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media(max-width: 480px) {
    .kka-categories-grid { grid-template-columns: 1fr !important; }
    .kka-cat-main-title { font-size: 26px !important; line-height: 30px !important; }
  }

.kka-participate-wrap {
    width: 100vw !important;
    position: relative !important;
    left: 50% !important;
    right: 50% !important;
    margin-left: -50vw !important;
    margin-right: -50vw !important;
    background: #0d53c7 !important;
    color: #ffffff !important;
    padding: 80px 5% !important;
    box-sizing: border-box !important;
  }
  .kka-participate-inner {
    max-width: 1250px !important;
    margin: 0 auto !important;
    display: grid !important;
    grid-template-columns: 1fr 1.35fr !important;
    gap: 60px !important;
    align-items: center !important;
  }
  .kka-participate-collage-img {
    width: 100% !important;
    max-width: 520px !important;
    height: auto !important;
    border-radius: 16px !important;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25) !important;
    display: block !important;
  }
  .kka-participate-title {
    font-family: 'Jost', sans-serif !important;
    font-size: 48px !important;
    color: #ffffff !important;
    margin: 0 0 35px 0 !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    line-height: 50.88px !important;
  }
  .kka-participate-list {
    display: grid !important;
    grid-template-columns: 1.05fr 1fr !important;
    column-gap: 36px !important;
    row-gap: 32px !important;
    margin-bottom: 38px !important;
  }
  .kka-participate-item {
    display: flex !important;
    align-items: flex-start !important;
    gap: 14px !important;
  }
  .kka-participate-icon-box {
    width: 34px !important;
    height: 34px !important;
    border-radius: 50% !important;
    background: rgba(255, 255, 255, 0.22) !important;
    color: #ffffff !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 14px !important;
    flex-shrink: 0 !important;
    margin-top: 2px !important;
  }
  .kka-participate-text {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 16px !important;
    line-height: 20px !important;
    color: #ffffff !important;
  }
  .kka-participate-btn {
    background: #ff5252 !important;
    color: #ffffff !important;
    border: none !important;
    padding: 12px 34px !important;
    border-radius: 22px !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    cursor: pointer !important;
    box-shadow: 0 4px 15px rgba(255, 82, 82, 0.4) !important;
    display: inline-flex !important;
    align-items: center;
    text-transform: uppercase !important;
  }
  @media (max-width: 992px) {
    .kka-participate-inner { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 768px) {
    .kka-participate-wrap { padding: 50px 20px !important; }
    .kka-participate-title { font-size: 32px !important; line-height: 36px !important; text-align: center; }
    .kka-participate-list { grid-template-columns: 1fr !important; gap: 20px !important; }
  }

/* =========================================
     EVALUATION FRAMEWORK SECTION
     ========================================= */
  .kka-eval-section {
    max-width: 1250px;
    margin: 60px auto 80px auto;
    padding: 0 20px;
    text-align: center;
    box-sizing: border-box;
  }

  /* Main Section Heading */
  .kka-eval-main-heading {
    font-family: 'Jost', 'Joost', sans-serif !important;
    font-size: 42px !important;
    color: #0D53C7 !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    line-height: 1.2 !important;
    margin: 0 0 12px 0 !important;
  }

  .kka-eval-subtitle {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 15px !important;
    color: #1e293b !important;
    font-weight: 400 !important;
    margin: 0 0 45px 0 !important;
    line-height: 1.5 !important;
  }

  /* 4-Column Grid */
  .kka-eval-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
    align-items: stretch;
  }

  /* Card Base Styling */
  .kka-eval-card {
    border-radius: 16px;
    padding: 30px 20px 28px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .kka-eval-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  }

  /* Card Themes */
  .kka-eval-card.card-blue {
    background-color: #F0F7FF;
    border: 1px solid #D8EAFE;
  }

  .kka-eval-card.card-pink {
    background-color: #FFF5F5;
    border: 1px solid #FFE4E6;
  }

  .kka-eval-card.card-yellow {
    background-color: #FFFDF0;
    border: 1px solid #FEF3C7;
  }

  .kka-eval-card.card-green {
    background-color: #F0FDF4;
    border: 1px solid #DCFCE7;
  }

  /* CRISP HIGH-DEFINITION ICON SIZING (Eliminates Blur) */
  .kka-eval-icon-img {
    width: 86px !important;
    height: 86px !important;
    object-fit: contain !important;
    margin-bottom: 18px !important;
    display: block;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.04));
  }

  /* Card Title */
  .kka-eval-title {
    font-family: 'Jost', sans-serif !important;
    font-size: 18px !important;
    font-weight: 700 !important;
    color: #0f172a !important;
    margin: 0 0 12px 0 !important;
    line-height: 1.3 !important;
    min-height: 48px; /* Keeps horizontal dividers aligned */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  /* Horizontal Color Accent Line */
  .kka-eval-divider {
    width: 36px;
    height: 3px;
    border-radius: 2px;
    margin: 0 auto 20px auto;
  }

  .divider-blue { background-color: #1D72FE; }
  .divider-pink { background-color: #F43F5E; }
  .divider-yellow { background-color: #F59E0B; }
  .divider-green { background-color: #10B981; }

  /* Bullet Lists */
  .kka-eval-list {
    list-style: none !important;
    padding: 0 !important;
    margin: 0 !important;
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .kka-eval-list li {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 14px !important;
    color: #334155 !important;
    line-height: 1.45 !important;
    font-weight: 500 !important;
    display: flex;
    align-items: flex-start;
  }

  .eval-bullet {
    font-size: 18px;
    line-height: 1;
    margin-right: 9px;
    flex-shrink: 0;
    transform: translateY(-1px);
  }

  .bullet-blue { color: #1D72FE; }
  .bullet-pink { color: #F43F5E; }
  .bullet-yellow { color: #F59E0B; }
  .bullet-green { color: #10B981; }

  /* Responsive Breakpoints */
  @media (max-width: 1024px) {
    .kka-eval-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 20px;
    }
  }

  @media (max-width: 768px) {
    .kka-eval-main-heading {
      font-size: 32px !important;
    }
    .kka-eval-subtitle {
      font-size: 14px !important;
      margin-bottom: 30px !important;
    }
    .kka-eval-icon-img {
      width: 78px !important;
      height: 78px !important;
    }
  }

  @media (max-width: 580px) {
    .kka-eval-grid {
      grid-template-columns: 1fr !important;
      gap: 20px;
    }
    .kka-eval-card {
      padding: 26px 18px;
    }
    .kka-eval-title {
      min-height: auto;
    }
  }

/* ========================================================
     SECTION WRAPPER & HEADING
     ======================================================== */
  .kka-timeline-wrapper {
    width: 100%;
    max-width: 1264px;
    margin: 60px auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
    box-sizing: border-box;
  }

  .kka-timeline-heading {
    font-family: 'Jost', 'Joost', sans-serif !important;
    font-size: 44px !important;
    color: #0D53C7 !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    line-height: 1.2 !important;
    margin: 0 !important;
    text-align: center !important;
  }

  /* ========================================================
     PART 1: 5 STEPS FROM NOMINATION TO RECOGNITION
     ======================================================== */
  .kka-steps-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    position: relative;
    margin-top: 10px;
  }

  /* Connecting dashed line behind circle numbers */
  .kka-steps-row::before {
    content: "";
    position: absolute;
    top: 34.5px; /* Centers with the 69px badge */
    left: calc(10% - 10px);
    right: calc(10% - 10px);
    height: 0;
    border-top: 2px dashed #94a3b8;
    z-index: 1;
  }

  .kka-step-col {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    padding: 0 8px;
    cursor: pointer;
  }

  /* 01-05 Circle Badge */
  .kka-step-badge {
    width: 69px !important;
    height: 69px !important;
    border-radius: 9999px !important;
    background: #EEF4FC !important;
    color: rgba(148, 163, 184, 0.75) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-family: 'Jost', 'Joost', sans-serif !important;
    font-size: 30px !important;
    font-weight: 700 !important;
    margin-bottom: 18px !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  }

  /* Interactive Hover Effect for Numbers */
  .kka-step-col:hover .kka-step-badge {
    background: #0D53C7 !important;
    color: #ffffff !important;
    transform: scale(1.1) translateY(-3px) !important;
    box-shadow: 0 10px 24px rgba(13, 83, 199, 0.35) !important;
  }

  .kka-step-col:hover .kka-step-heading {
    color: #0D53C7 !important;
  }

  .kka-step-heading {
    font-family: 'Jost', 'Joost', sans-serif !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    color: #000000 !important;
    text-transform: uppercase !important;
    line-height: 21.20px !important;
    margin: 0 0 10px 0 !important;
    transition: color 0.25s ease;
  }

  .kka-step-desc {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 14px !important;
    color: #000000 !important;
    line-height: 1.55 !important;
    max-width: 175px !important;
    margin: 0 auto !important;
    font-weight: 400 !important;
  }

  /* ========================================================
     PART 2: APPLICATION TIMELINE 2026 CYCLE BAR
     ======================================================== */
  .figma-timeline-bar {
    width: 100%;
    min-height: 126px;
    background: rgba(27, 103, 178, 0.20);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 34px;
    box-sizing: border-box;
    gap: 20px;
  }

  /* Left: Titles */
  .figma-timeline-title-wrap {
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-shrink: 0;
  }

  .figma-timeline-title {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    color: #000000 !important;
    text-transform: uppercase !important;
    line-height: 15.90px !important;
    letter-spacing: 0.5px !important;
    margin: 0 !important;
  }

  .figma-timeline-subtitle {
    font-family: 'Jost', sans-serif !important;
    font-size: 22px !important;
    font-weight: 700 !important;
    color: #000000 !important;
    text-transform: uppercase !important;
    line-height: 1.2 !important;
    margin-top: 4px !important;
  }

  /* Center: Milestones Row */
  .figma-milestones-track {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-grow: 1;
    margin: 0 28px;
    padding: 0;
  }

  .figma-milestone-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    flex-shrink: 0;
  }

  /* Green Rounded Pill (35px x 10px) */
  .figma-green-pill {
    width: 35px;
    height: 10px;
    background: #27D3A7;
    border-radius: 5px;
    margin-bottom: 12px;
    display: block;
    flex-shrink: 0;
  }

  /* CRISP HIGH-CONTRAST DASHED LINE */
  .figma-connector-line {
    flex-grow: 1;
    height: 2px;
    background-image: repeating-linear-gradient(to right, #64748b 0, #64748b 6px, transparent 6px, transparent 12px);
    margin: 4px 12px 0 12px; /* 4px centers with 10px green pill */
    align-self: flex-start;
    min-width: 16px;
  }

  .figma-step-label {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 12px !important;
    font-weight: 400 !important;
    color: #000000 !important;
    text-transform: uppercase !important;
    line-height: 13.5px !important;
    margin-bottom: 4px !important;
    min-height: 27px;
    display: flex;
    align-items: flex-start;
  }

  .figma-step-date {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    color: #000000 !important;
    text-transform: uppercase !important;
    line-height: 16.96px !important;
    white-space: nowrap !important;
  }

  /* Right: Apply Now Button */
  .figma-apply-btn {
    background: #ff5252 !important;
    color: #ffffff !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    line-height: 14px !important;
    padding: 13px 30px !important;
    border-radius: 25px !important;
    border: none !important;
    cursor: pointer !important;
    white-space: nowrap !important;
    text-decoration: none !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-shadow: 0 4px 15px rgba(255, 82, 82, 0.4) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    flex-shrink: 0;
  }

  .figma-apply-btn:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(255, 82, 82, 0.6) !important;
  }

  /* ========================================================
     RESPONSIVE BREAKPOINTS
     ======================================================== */
  @media (max-width: 1080px) {
    .figma-timeline-bar {
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 22px !important;
      padding: 24px 20px !important;
    }
    .figma-milestones-track {
      margin: 0 !important;
      overflow-x: auto !important;
      padding-bottom: 10px !important;
    }
    .figma-apply-btn {
      align-self: center !important;
    }
  }

  @media (max-width: 900px) {
    .kka-steps-row {
      flex-direction: column !important;
      align-items: center !important;
      gap: 32px !important;
    }
    .kka-steps-row::before {
      top: 34px !important;
      bottom: 34px !important;
      left: 50% !important;
      right: auto !important;
      width: 0 !important;
      height: auto !important;
      transform: translateX(-50%) !important;
      border-top: none !important;
      border-left: 2px dashed #94a3b8 !important;
    }
    .kka-step-col {
      width: 100% !important;
      max-width: 300px !important;
    }
  }

  @media (max-width: 768px) {
    .kka-timeline-heading { font-size: 32px !important; }
    .kka-step-heading { font-size: 18px !important; }
  }

/* =========================================
     2025 WINNERS SHOWCASE (FIGMA SPEC)
     ========================================= */
  .kka-showcase-section {
    width: 100%;
    min-height: 284px;
    background-color: rgba(245, 185, 25, 0.10);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    margin: 60px 0;
    box-sizing: border-box;
  }

  .kka-showcase-inner {
    max-width: 756px;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Title: natural sentence case (NO uppercase), 30px / 700 / 40px line-height */
  .kka-showcase-title {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 30px !important;
    font-weight: 700 !important;
    color: #0A0A0A !important;
    line-height: 40px !important;
    max-width: 756px !important;
    margin: 0 0 28px 0 !important;
    text-align: center !important;
    word-wrap: break-word !important;
    text-transform: none !important; /* Prevents uppercase transformation */
  }

  /* Button: #FF6257 / borderRadius: 12px / height: 42px / Inter 14px 700 */
  .kka-showcase-btn {
    height: 42px !important;
    padding: 12px 28px !important;
    background-color: #FF6257 !important;
    border-radius: 12px !important;
    color: #ffffff !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    line-height: 14px !important;
    letter-spacing: 0.5px !important;
    text-decoration: none !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    border: none !important;
    cursor: pointer !important;
    box-shadow: 0 4px 14px rgba(255, 98, 87, 0.35) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    box-sizing: border-box !important;
  }

  .kka-showcase-btn:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(255, 98, 87, 0.55) !important;
    background-color: #f85348 !important;
  }

  /* Watermark Icons */
  .showcase-watermark {
    position: absolute;
    color: #F5B919;
    opacity: 0.22;
    pointer-events: none;
    z-index: 1;
  }

  .watermark-top-left { top: 25px; left: 45px; width: 65px; height: 65px; }
  .watermark-bottom-left { bottom: 25px; left: 80px; width: 75px; height: 75px; }
  .watermark-top-right { top: 25px; right: 120px; width: 60px; height: 60px; }
  .watermark-bottom-right { bottom: 25px; right: 60px; width: 70px; height: 70px; }

  @media (max-width: 768px) {
    .kka-showcase-section { padding: 50px 20px; min-height: 240px; }
    .kka-showcase-title { font-size: 22px !important; line-height: 32px !important; margin-bottom: 24px !important; }
    .showcase-watermark { opacity: 0.14; }
  }

  @media (max-width: 480px) {
    .kka-showcase-title { font-size: 19px !important; line-height: 28px !important; }
    .watermark-top-left, .watermark-top-right { display: none; }
  }

/* =========================================
     CTA SPLIT SECTION (MATCHING SCREENSHOT)
     ========================================= */
  .figma-cta-section {
    max-width: 1250px;
    margin: 70px auto 60px auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 50px;
    align-items: center;
    box-sizing: border-box;
  }

  /* Left Column: Ceremony Photo */
  .figma-cta-photo-col {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .figma-cta-photo-col img {
    width: 100%;
    max-width: 563px;
    height: auto;
    border-radius: 26px !important;
    display: block;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }

  /* Right Column: Content */
  .figma-cta-text-col {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  /* Main Headline: 48px, #0D53C7, Jost 700, Natural Case */
  .figma-cta-head {
    max-width: 551px;
    width: 100%;
    color: #0D53C7 !important;
    font-size: 48px !important;
    font-family: 'Jost', 'Joost', sans-serif !important;
    font-weight: 700 !important;
    line-height: 1.15 !important;
    margin: 0 0 24px 0 !important;
    text-transform: none !important; /* Forces natural case */
    word-wrap: break-word !important;
  }

  /* Subhead: 28px, #0A0A0A, Jost 700 */
  .figma-cta-subhead {
    color: #0A0A0A !important;
    font-size: 28px !important;
    font-family: 'Jost', 'Joost', sans-serif !important;
    font-weight: 700 !important;
    margin: 0 0 16px 0 !important;
    text-transform: none !important;
    word-wrap: break-word !important;
  }

  /* Timeline Box (Matching Screenshot media_1789969549616.png) */
  .figma-cta-timeline-box {
    width: 100%;
    max-width: 620px;
    min-height: 84px;
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid #D5D0D0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 24px;
    margin-bottom: 24px;
    box-sizing: border-box;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  }

  .figma-cta-timeline-unit {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
  }

  /* Vertical Divider Line */
  .figma-cta-timeline-divider {
    width: 1px;
    height: 42px;
    background-color: #D5D0D0;
    margin: 0 16px;
    flex-shrink: 0;
  }

  /* Launch Icon Box (Gold) */
  .figma-icon-gold {
    width: 40px;
    height: 40px;
    border-radius: 9px;
    border: 1.5px solid #F5B919;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Deadline Icon Box (Coral Red) */
  .figma-icon-red {
    width: 40px;
    height: 40px;
    border-radius: 9px;
    border: 1.5px solid #FF6257;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Date Typography (Comfortaa from Screenshot) */
  .figma-date-text {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 17.5px !important;
    line-height: 1.3 !important;
    color: #0A0A0A !important;
    margin: 0 !important;
    white-space: nowrap !important;
    text-transform: none !important;
  }

  .figma-date-label {
    font-weight: 400 !important;
    color: #0A0A0A !important;
  }

  .figma-date-value {
    font-weight: 700 !important;
    color: #0A0A0A !important;
  }

  /* Buttons: #FF6257, borderRadius: 12px, Inter 14px 700 */
  .figma-cta-btn-row {
    display: flex;
    gap: 14px;
    align-items: center;
    flex-wrap: wrap;
  }

  .figma-cta-btn {
    height: 42px !important;
    padding: 12px 28px !important;
    background-color: #FF6257 !important;
    border-radius: 12px !important;
    color: #ffffff !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    line-height: 14px !important;
    letter-spacing: 0.5px !important;
    border: none !important;
    cursor: pointer !important;
    text-decoration: none !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-shadow: 0 4px 14px rgba(255, 98, 87, 0.35) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    white-space: nowrap !important;
    box-sizing: border-box !important;
  }

  .figma-cta-btn:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(255, 98, 87, 0.55) !important;
    background-color: #f75044 !important;
  }

  /* Responsive Breakpoints */
  @media (max-width: 1024px) {
    .figma-cta-section {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
      text-align: center;
    }
    .figma-cta-text-col {
      align-items: center;
      text-align: center;
    }
    .figma-cta-head {
      text-align: center;
      max-width: 100%;
    }
    .figma-cta-btn-row {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .figma-cta-head {
      font-size: 34px !important;
    }
    .figma-cta-subhead {
      font-size: 22px !important;
    }
    .figma-cta-timeline-box {
    width: 100%;
    max-width: 620px;
    min-height: 84px;
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid #D5D0D0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 24px;
    margin-bottom: 24px;
    box-sizing: border-box;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  }
    .figma-cta-timeline-divider {
      display: none;
    }
    .figma-date-text {
      font-size: 16px !important;
    }
  }

  @media (max-width: 480px) {
    .figma-cta-head {
      font-size: 28px !important;
    }
    .figma-cta-btn-row {
      width: 100%;
      flex-direction: column;
    }
    .figma-cta-btn {
      width: 100%;
    }
  }

/* =========================================
     CORPORATE PARTNERS: ORGANISED BY + IN PARTNERSHIP WITH
     (UNIFORM MATCHING HEIGHT & WIDTH)
     ========================================= */
  .kka-corp-partners-wrap {
    display: flex !important;
    justify-content: center !important;
    align-items: flex-start !important;
    gap: 110px !important;
    width: 100% !important;
    max-width: 1250px !important;
    margin: 65px auto 45px auto !important;
    padding: 0 20px !important;
    flex-wrap: wrap !important;
    box-sizing: border-box !important;
  }

  /* Matching Column Width */
  .kka-corp-partner-col {
    width: 300px !important;
    max-width: 300px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: flex-start !important;
    text-align: center !important;
    box-sizing: border-box !important;
  }

  /* Matching Title Height & Typography */
  .kka-corp-partner-title {
    font-family: 'Oswald', 'Jost', 'Comfortaa', sans-serif !important;
    font-size: 24px !important;
    font-weight: 700 !important;
    color: #0A0A0A !important;
    text-transform: none !important;
    margin: 0 0 20px 0 !important;
    letter-spacing: 0.5px !important;
    line-height: 1.2 !important;
    height: 32px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    width: 100% !important;
  }

  /* Uniform Logo Container: Same Height & Width for Both */
  .kka-corp-logo-box {
    width: 100% !important;
    height: 125px !important; /* Uniform height for both logos */
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-sizing: border-box !important;
  }

  .kka-corp-logo-box img {
    max-width: 100% !important;
    max-height: 100% !important;
    width: auto !important;
    height: auto !important;
    object-fit: contain !important;
    display: block !important;
    transition: transform 0.25s ease;
  }

  .kka-corp-logo-box img:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    .kka-corp-partners-wrap {
      gap: 60px !important;
      margin: 50px auto 35px auto !important;
    }
  }

  @media (max-width: 768px) {
    .kka-corp-partners-wrap {
      gap: 40px !important;
      flex-direction: column !important;
      align-items: center !important;
      margin: 40px auto 30px auto !important;
    }
    .kka-corp-partner-col {
      width: 100% !important;
      max-width: 300px !important;
    }
    .kka-corp-partner-title {
      font-size: 22px !important;
      margin-bottom: 16px !important;
    }
    .kka-corp-logo-box {
      height: 105px !important;
    }
  }

.kka-contact-box {
    border: 1.5px solid #0d53c7;
    border-radius: 12px;
    padding: 24px 30px;
    text-align: center;
    width: 100% !important;
    max-width: 1250px;
    margin: 40px auto 60px auto;
    background: #ffffff;
    box-shadow: 0 4px 15px rgba(13, 83, 199, 0.06);
  }
  .kka-contact-box-title {
    font-family: 'Jost', sans-serif !important;
    font-size: 30px !important;
    font-weight: 700 !important;
    color: #0d53c7 !important;
    margin: 0 0 8px 0 !important;
  }
  .kka-contact-box-desc {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 21px !important;
    color: #0d53c7 !important;
    font-weight: 700 !important;
  }
  .kka-contact-box-desc a {
    color: #0d53c7 !important;
    text-decoration: underline !important;
  }
  @media (max-width: 768px) {
    .kka-contact-box-title { font-size: 22px !important; }
    .kka-contact-box-desc { font-size: 16px !important; }
  }

/* ========================================================
     INSTITUTIONAL EXCELLENCE AWARDS: ABOUT SECTION
     ======================================================== */
  .kka-inst-about-section {
    width: 100%;
    max-width: 1250px;
    margin: 60px auto 70px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  /* Top 2-Column Split (Text & Collage) */
  .kka-inst-about-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.95fr;
    gap: 48px;
    align-items: center;
    margin-bottom: 50px;
  }

  /* Left Text Column */
  .kka-inst-text-col {
    text-align: left;
  }

  .kka-inst-main-title {
    font-family: 'Jost', 'Joost', sans-serif !important;
    font-size: 42px !important;
    font-weight: 700 !important;
    color: #0D53C7 !important;
    text-transform: none !important;
    letter-spacing: 0.5px !important;
    line-height: 1.18 !important;
    margin: 0 0 24px 0 !important;
    max-width: 580px;
  }

  .kka-inst-paragraph {
    font-family: 'Comfortaa', cursive, sans-serif !important;
    font-size: 15.5px !important;
    line-height: 1.7 !important;
    color: #1e293b !important;
    margin: 0 0 20px 0 !important;
    font-weight: 400 !important;
  }

  .kka-inst-paragraph strong {
    font-weight: 700 !important;
    color: #0f172a !important;
  }

  .kka-inst-paragraph:last-child {
    margin-bottom: 0 !important;
  }

  /* Right Column: 3-Image Collage */
  .kka-inst-img-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .kka-inst-collage-img {
    width: 100%;
    max-width: 480px;
    height: auto;
    border-radius: 16px;
    object-fit: cover;
    display: block;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  }

  /* Bottom Row: 8 Partner / Department Logo Cards */
  .kka-inst-logos-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 16px;
    align-items: center;
    width: 100%;
  }

  .kka-inst-logo-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px 10px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .kka-inst-logo-card:hover {
    transform: translateY(-3px);
    border-color: #cbd5e1;
    box-shadow: 0 6px 14px rgba(13, 83, 199, 0.08);
  }

  .kka-inst-logo-card img {
    max-width: 88%;
    max-height: 65px;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
  }

  /* Responsive Breakpoints */
  @media (max-width: 1024px) {
    .kka-inst-main-title {
      font-size: 36px !important;
    }
    .kka-inst-logos-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }
  }

  @media (max-width: 768px) {
    .kka-inst-about-grid {
      grid-template-columns: 1fr;
      gap: 35px;
    }
    .kka-inst-main-title {
      font-size: 28px !important;
      line-height: 1.25 !important;
    }
    .kka-inst-paragraph {
      font-size: 14.5px !important;
    }
    .kka-inst-logos-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    .kka-inst-logo-card {
      height: 75px;
      padding: 8px;
    }
    .kka-inst-logo-card img {
      max-height: 50px;
    }
  }

  @media (max-width: 480px) {
    .kka-inst-logos-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }

.kka-inst-cat-section {
    width: 100vw !important;
    position: relative !important;
    left: 50% !important;
    right: 50% !important;
    margin-left: -50vw !important;
    margin-right: -50vw !important;
    background: #0a4ecb url('https://bengaluruskillsummit.com/wp-content/uploads/2026/09/bg-1.png') no-repeat center center / cover !important;
    padding: 70px 20px 80px 20px !important;
    color: #ffffff !important;
    text-align: center !important;
    margin-top: 60px !important;
    margin-bottom: 0 !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
  }

  #panel-institutional .kka-showcase-section,
  .kka-inst-cat-section + .kka-showcase-section {
    margin-top: 0 !important;
  }

  .kka-inst-cat-inner {
    max-width: 1250px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .kka-inst-cat-title {
    font-family: 'Jost', 'Oswald', sans-serif !important;
    font-size: 46px !important;
    font-weight: 700 !important;
    color: #ffffff !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    line-height: 1.15 !important;
    margin: 0 0 10px 0 !important;
  }

  .kka-inst-cat-subtitle {
    font-family: 'Jost', sans-serif !important;
    font-size: 26px !important;
    font-weight: 600 !important;
    color: #ffffff !important;
    margin: 0 0 45px 0 !important;
    line-height: 1.3 !important;
  }

  /* Carousel Wrapper */
  .kka-inst-cat-carousel-wrap {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  /* Track for scrolling cards */
  .kka-inst-cat-track {
    display: flex;
    gap: 22px;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    padding: 15px 8px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    width: 100%;
  }

  .kka-inst-cat-track::-webkit-scrollbar {
    display: none;
  }

  /* Each Card */
  .kka-inst-cat-card {
    flex: 0 0 calc(25% - 17px);
    min-width: 250px;
    height: 270px;
    background: #ffffff;
    border-radius: 18px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    scroll-snap-align: start;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .kka-inst-cat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22);
  }

  .kka-inst-cat-icon {
    width: 72px;
    height: 72px;
    object-fit: contain;
    margin-bottom: 22px;
    display: block;
  }

  .kka-inst-cat-text {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    color: #0f172a !important;
    line-height: 1.4 !important;
    margin: 0 !important;
  }

  /* Navigation Circular Arrows */
  .kka-inst-cat-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #ffffff;
    border: none;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.2s ease;
    color: #0D53C7;
  }

  .kka-inst-cat-nav:hover {
    background: #f8fafc;
    transform: translateY(-50%) scale(1.08);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
  }

  .kka-inst-cat-prev {
    left: -22px;
  }

  .kka-inst-cat-next {
    right: -22px;
  }

  @media (max-width: 1200px) {
    .kka-inst-cat-prev { left: 5px; }
    .kka-inst-cat-next { right: 5px; }
  }

  @media (max-width: 992px) {
    .kka-inst-cat-card {
      flex: 0 0 calc(50% - 11px);
      min-width: 240px;
    }
    .kka-inst-cat-title { font-size: 36px !important; }
    .kka-inst-cat-subtitle { font-size: 22px !important; margin-bottom: 35px !important; }
  }

  @media (max-width: 580px) {
    .kka-inst-cat-card {
      flex: 0 0 calc(85% - 10px);
      min-width: 220px;
      height: 250px;
      padding: 24px 18px;
    }
    .kka-inst-cat-title { font-size: 30px !important; }
    .kka-inst-cat-subtitle { font-size: 19px !important; margin-bottom: 28px !important; }
    .kka-inst-cat-icon { width: 62px; height: 62px; margin-bottom: 16px; }
    .kka-inst-cat-text { font-size: 14px !important; }
    .kka-inst-cat-nav { width: 36px; height: 36px; }
  }

/* =========================================
     2025 WINNERS SHOWCASE (FIGMA SPEC)
     ========================================= */
  .kka-showcase-section {
    width: 100%;
    min-height: 284px;
    background-color: rgba(245, 185, 25, 0.10);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    margin: 60px 0;
    box-sizing: border-box;
  }

  .kka-showcase-inner {
    max-width: 756px;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Title: natural sentence case (NO uppercase), 30px / 700 / 40px line-height */
  .kka-showcase-title {
    font-family: 'Comfortaa', sans-serif !important;
    font-size: 30px !important;
    font-weight: 700 !important;
    color: #0A0A0A !important;
    line-height: 40px !important;
    max-width: 756px !important;
    margin: 0 0 28px 0 !important;
    text-align: center !important;
    word-wrap: break-word !important;
    text-transform: none !important; /* Prevents uppercase transformation */
  }

  /* Button: #FF6257 / borderRadius: 12px / height: 42px / Inter 14px 700 */
  .kka-showcase-btn {
    height: 42px !important;
    padding: 12px 28px !important;
    background-color: #FF6257 !important;
    border-radius: 12px !important;
    color: #ffffff !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    line-height: 14px !important;
    letter-spacing: 0.5px !important;
    text-decoration: none !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    border: none !important;
    cursor: pointer !important;
    box-shadow: 0 4px 14px rgba(255, 98, 87, 0.35) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    box-sizing: border-box !important;
  }

  .kka-showcase-btn:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(255, 98, 87, 0.55) !important;
    background-color: #f85348 !important;
  }

  /* Watermark Icons */
  .showcase-watermark {
    position: absolute;
    color: #F5B919;
    opacity: 0.22;
    pointer-events: none;
    z-index: 1;
  }

  .watermark-top-left { top: 25px; left: 45px; width: 65px; height: 65px; }
  .watermark-bottom-left { bottom: 25px; left: 80px; width: 75px; height: 75px; }
  .watermark-top-right { top: 25px; right: 120px; width: 60px; height: 60px; }
  .watermark-bottom-right { bottom: 25px; right: 60px; width: 70px; height: 70px; }

  @media (max-width: 768px) {
    .kka-showcase-section { padding: 50px 20px; min-height: 240px; }
    .kka-showcase-title { font-size: 22px !important; line-height: 32px !important; margin-bottom: 24px !important; }
    .showcase-watermark { opacity: 0.14; }
  }

  @media (max-width: 480px) {
    .kka-showcase-title { font-size: 19px !important; line-height: 28px !important; }
    .watermark-top-left, .watermark-top-right { display: none; }
  }

/* =========================================
     INSTITUTIONAL PARTNERS: ONLY ORGANISED BY (CENTERED & PROMINENT)
     ========================================= */
  .kka-inst-partners-wrap {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    max-width: 1250px !important;
    margin: 65px auto 55px auto !important;
    padding: 0 20px !important;
    box-sizing: border-box !important;
    text-align: center !important;
  }

  .kka-inst-organised-title {
    font-family: 'Oswald', 'Jost', 'Comfortaa', sans-serif !important;
    font-size: 28px !important;
    font-weight: 700 !important;
    color: #0A0A0A !important;
    text-transform: none !important;
    margin: 0 0 24px 0 !important;
    letter-spacing: 0.5px !important;
    line-height: 1.2 !important;
  }

  .kka-inst-organised-svg {
    height: auto !important;
    max-height: 155px !important; /* Prominent and large */
    width: auto !important;
    max-width: 340px !important;
    object-fit: contain !important;
    display: block !important;
    margin: 0 auto !important;
    transition: transform 0.25s ease;
  }

  .kka-inst-organised-svg:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .kka-inst-partners-wrap {
      margin: 45px auto 35px auto !important;
    }
    .kka-inst-organised-title {
      font-size: 24px !important;
      margin-bottom: 16px !important;
    }
    .kka-inst-organised-svg {
      max-height: 120px !important;
      max-width: 260px !important;
    }
  }
      `}),(0,i.jsxs)(`section`,{className:`awards-section`,children:[(0,i.jsxs)(`div`,{className:`header-content`,children:[(0,i.jsx)(`h1`,{className:`main-title`,children:`The Kaushalya Karnataka Awards`}),(0,i.jsx)(`h2`,{className:`subtitle`,children:`Celebrating Excellence in Skills`}),(0,i.jsx)(`p`,{className:`hero-date-venue`,children:`5 November 2026 | The Grand Awards Ceremony | The Lalit Ashok, Bengaluru`})]}),(0,i.jsx)(`div`,{className:`tabs-outer-line-wrapper`,children:(0,i.jsxs)(`div`,{className:`tabs-container`,children:[(0,i.jsxs)(`button`,{id:`tab-btn-corporate`,className:`tab-btn active`,onClick:()=>n(`corporate`),children:[(0,i.jsx)(`span`,{className:`tab-icon-wrap`,children:(0,i.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,i.jsx)(`circle`,{cx:`12`,cy:`8`,r:`6`}),(0,i.jsx)(`path`,{d:`M15.477 12.89 17 22l-5-3-5 3 1.523-9.11`})]})}),`CORPORATE EXCELLENCE AWARDS`]}),(0,i.jsxs)(`button`,{id:`tab-btn-institutional`,className:`tab-btn`,onClick:()=>n(`institutional`),children:[(0,i.jsx)(`span`,{className:`tab-icon-wrap`,children:(0,i.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,i.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,i.jsx)(`circle`,{cx:`12`,cy:`12`,r:`6`}),(0,i.jsx)(`path`,{d:`m9 12 2 2 4-4`})]})}),`INSTITUTIONAL EXCELLENCE AWARDS`]})]})}),(0,i.jsxs)(`div`,{id:`hero-content-corporate`,className:`hero-tab-content`,children:[(0,i.jsxs)(`div`,{className:`text-content`,children:[(0,i.jsx)(`div`,{className:`kka-hero-badge-wrap`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/powered-by-logo.png`,alt:`Workplace Awards Initiative by Zyoin Group`,className:`kka-hero-badge-img`})}),(0,i.jsxs)(`h2`,{className:`section-title`,children:[(0,i.jsx)(`span`,{children:`RECOGNIZING INDUSTRY LEADERSHIP`}),(0,i.jsx)(`span`,{children:`IN SKILLING`})]}),(0,i.jsx)(`p`,{className:`description`,children:`The Kaushalya Karnataka Corporate Excellence Awards honour organisations that are transforming the workforce through impactful skilling initiatives, industry-academia partnerships, and sustainable employment upskilling practices.`}),(0,i.jsxs)(`div`,{className:`action-buttons`,children:[(0,i.jsx)(`a`,{href:`#award-categories`,className:`outline-btn`,onClick:e=>o(`award-categories`,e),children:`VIEW AWARD CATEGORIES`}),(0,i.jsx)(`a`,{href:`#2025-winners`,className:`outline-btn`,onClick:e=>o(`2025-winners`,e),children:`EXPLORE 2025 WINNERS`})]}),(0,i.jsx)(`div`,{children:(0,i.jsx)(`a`,{href:`https://bengaluruskillsummit.com/kaushalya-awards-registration/`,target:`_blank`,rel:`noopener noreferrer`,className:`primary-btn`,children:`APPLY NOW FOR 2026 AWARDS`})})]}),(0,i.jsx)(`div`,{className:`image-content`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/08/Group-1410089690.png`,alt:`Corporate Excellence Trophy`,className:`award-image`})})]}),(0,i.jsxs)(`div`,{id:`hero-content-institutional`,className:`hero-tab-content`,style:{display:`none`},children:[(0,i.jsxs)(`div`,{className:`text-content`,children:[(0,i.jsxs)(`h2`,{className:`section-title`,children:[(0,i.jsx)(`span`,{children:`RECOGNIZING INSTITUTIONAL`}),(0,i.jsx)(`span`,{children:`LEADERSHIP IN SKILLING`})]}),(0,i.jsx)(`p`,{className:`description`,children:`The Kaushalya Karnataka Institutional Excellence Awards celebrate ITIs, GTTCs, polytechnics, training centres and community organisations driving employability, industry collaboration, inclusivity and impactful skilling initiatives.`}),(0,i.jsxs)(`div`,{className:`action-buttons`,children:[(0,i.jsx)(`a`,{href:`#inst-award-categories`,className:`outline-btn`,onClick:e=>o(`inst-award-categories`,e),children:`VIEW AWARD CATEGORIES`}),(0,i.jsx)(`a`,{href:`#inst-2025-winners`,className:`outline-btn`,onClick:e=>o(`inst-2025-winners`,e),children:`EXPLORE 2025 WINNERS`})]})]}),(0,i.jsx)(`div`,{className:`image-content`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/05/Group-1410089602.png`,alt:`Institutional Excellence Trophy`,className:`award-image`})})]})]}),(0,i.jsxs)(`main`,{id:`panel-corporate`,className:`tab-content-panel active`,children:[(0,i.jsx)(`section`,{className:`about-section-wrapper`,children:(0,i.jsxs)(`div`,{className:`about-container`,children:[(0,i.jsx)(`h2`,{className:`about-heading-blue`,children:`ABOUT THE AWARDS`}),(0,i.jsxs)(`p`,{className:`intro-text`,children:[`The Kaushalya Karnataka Corporate Excellence Awards, presented at the`,(0,i.jsx)(`strong`,{children:`Bengaluru Skill Summit (5 November 2026 at The Lalit Ashok, Bengaluru),`}),`under Department of Skill Development, Entrepreneurship and Livelihood, Government of Karnataka recognise outstanding contributions by Corporates, Large Enterprises, MSMEs and Startups in advancing the skilling ecosystem.`]}),(0,i.jsx)(`p`,{className:`intro-text highlight`,children:`These awards are a flagship initiative of the Government of Karnataka to:`}),(0,i.jsxs)(`div`,{className:`features-grid`,children:[(0,i.jsxs)(`div`,{className:`feature-item`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/08/Group-1410089695.svg`,alt:`Promote industry-led skilling`,className:`feature-icon`}),(0,i.jsxs)(`div`,{className:`feature-text`,children:[`Promote industry-`,(0,i.jsx)(`br`,{}),`led skilling`]})]}),(0,i.jsxs)(`div`,{className:`feature-item`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/08/Group-1410089693.svg`,alt:`Encourage workforce transformation`,className:`feature-icon`}),(0,i.jsxs)(`div`,{className:`feature-text`,children:[`Encourage workforce`,(0,i.jsx)(`br`,{}),`transformation`]})]}),(0,i.jsxs)(`div`,{className:`feature-item`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/08/Group-1410089692.svg`,alt:`Strengthen collaboration`,className:`feature-icon`}),(0,i.jsxs)(`div`,{className:`feature-text`,children:[`Strengthen industry-`,(0,i.jsx)(`br`,{}),`government and Industry -`,(0,i.jsx)(`br`,{}),`Academia collaboration`]})]}),(0,i.jsxs)(`div`,{className:`feature-item`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/08/Group-1410089691.svg`,alt:`Enhance employability`,className:`feature-icon`}),(0,i.jsxs)(`div`,{className:`feature-text`,children:[`Enhance employability`,(0,i.jsx)(`br`,{}),`and economic growth`]})]})]}),(0,i.jsx)(`div`,{className:`policy-card`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/08/ChatGPT-Image-May-26-2026-04_46_56-PM-2-scaled.png`,alt:`Karnataka Skill Development Policy 2025-30`,className:`policy-image`})})]})}),(0,i.jsxs)(`div`,{className:`kka-why-matter-section`,children:[(0,i.jsx)(`h2`,{className:`about-heading-blue`,children:`WHY THESE AWARDS MATTER`}),(0,i.jsx)(`p`,{className:`kka-why-matter-subhead`,children:`In a rapidly evolving economic landscape, organisations play a crucial role in building a future-ready workforce.`}),(0,i.jsx)(`p`,{className:`kka-why-matter-intro`,children:`These awards recognise companies that:`}),(0,i.jsxs)(`div`,{className:`kka-why-matter-flow`,children:[(0,i.jsxs)(`div`,{className:`kka-why-matter-item`,children:[(0,i.jsx)(`div`,{className:`kka-why-matter-circle-wrap`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/why-this-matter-1.jpg`,alt:`Step 01`,className:`kka-why-matter-circle-img`})}),(0,i.jsx)(`p`,{className:`kka-why-matter-text`,children:`Showcase your organisation's skilling initiatives and measurable outcomes.`})]}),(0,i.jsx)(`div`,{className:`kka-why-matter-arrow`,children:(0,i.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,i.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,i.jsxs)(`div`,{className:`kka-why-matter-item`,children:[(0,i.jsx)(`div`,{className:`kka-why-matter-circle-wrap`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/why-this-matter-2.jpg`,alt:`Step 02`,className:`kka-why-matter-circle-img`})}),(0,i.jsx)(`p`,{className:`kka-why-matter-text`,children:`Gain recognition for your contribution to Karnataka's workforce and skill ecosystem.`})]}),(0,i.jsx)(`div`,{className:`kka-why-matter-arrow`,children:(0,i.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,i.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,i.jsxs)(`div`,{className:`kka-why-matter-item`,children:[(0,i.jsx)(`div`,{className:`kka-why-matter-circle-wrap`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/why-this-matter-3.jpg`,alt:`Step 03`,className:`kka-why-matter-circle-img`})}),(0,i.jsx)(`p`,{className:`kka-why-matter-text`,children:`Benchmark your efforts through a structured, evidence-based evaluation.`})]}),(0,i.jsx)(`div`,{className:`kka-why-matter-arrow`,children:(0,i.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,i.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,i.jsxs)(`div`,{className:`kka-why-matter-item`,children:[(0,i.jsx)(`div`,{className:`kka-why-matter-circle-wrap`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/why-this-matter-4.jpg`,alt:`Step 04`,className:`kka-why-matter-circle-img`})}),(0,i.jsx)(`p`,{className:`kka-why-matter-text`,children:`Highlight impactful and scalable skilling practices.`})]}),(0,i.jsx)(`div`,{className:`kka-why-matter-arrow`,children:(0,i.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,i.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,i.jsxs)(`div`,{className:`kka-why-matter-item`,children:[(0,i.jsx)(`div`,{className:`kka-why-matter-circle-wrap`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/why-this-matter-5.jpg`,alt:`Step 05`,className:`kka-why-matter-circle-img`})}),(0,i.jsx)(`p`,{className:`kka-why-matter-text`,children:`Celebrate your commitment to building a skilled, inclusive and future-ready workforce.`})]})]}),(0,i.jsx)(`p`,{className:`kka-why-matter-summary`,children:`The awards recognise organisations that are helping build a future-ready workforce through industry-led skilling, inclusion, innovation, workforce transformation and stronger links between skills and employment.`})]}),(0,i.jsx)(`section`,{id:`award-categories`,className:`kka-categories-wrap`,children:(0,i.jsxs)(`div`,{className:`kka-categories-inner`,children:[(0,i.jsx)(`h2`,{className:`kka-cat-main-title`,children:`AWARD CATEGORIES`}),(0,i.jsx)(`p`,{className:`kka-cat-subtitle`,children:`Awards will be presented across the following segments:`}),(0,i.jsx)(`h3`,{className:`kka-cat-section-title`,children:`By Organisation Type`}),(0,i.jsxs)(`div`,{className:`kka-categories-grid`,children:[(0,i.jsx)(`div`,{className:`kka-category-svg-card`,children:(0,i.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`180`,height:`190`,viewBox:`0 0 180 190`,fill:`none`,children:[(0,i.jsx)(`rect`,{width:`180`,height:`190`,rx:`10`,fill:`#FFF5DD`}),(0,i.jsx)(`path`,{d:`M37.7795 106.06V108H31.5995V93.58H33.6595V106.06H37.7795ZM38.9785 104.94V104.34C38.9785 102.16 40.1185 101.14 41.8785 101.14C42.4185 101.14 42.8985 101.28 43.3185 101.5V99.52C43.3185 98.8 42.9185 98.34 42.2585 98.34C41.5985 98.34 41.1985 98.8 41.1985 99.52V100.32H39.1385V99.56C39.1385 97.58 40.3585 96.36 42.2585 96.36C44.1785 96.36 45.3785 97.58 45.3785 99.56V104.94C45.3785 106.92 44.1385 108.14 42.1785 108.14C40.2385 108.14 38.9785 106.92 38.9785 104.94ZM43.3185 105V104.3C43.3185 103.58 42.8985 103.12 42.1785 103.12C41.4785 103.12 41.0385 103.58 41.0385 104.3V105C41.0385 105.72 41.4785 106.16 42.1785 106.16C42.8985 106.16 43.3185 105.72 43.3185 105ZM47.417 108V99.34C47.417 97.4 48.117 96.5 50.437 96.5H51.237V98.44H50.437C49.657 98.44 49.477 98.9 49.477 99.34V108H47.417ZM52.5332 110.92V109.08H56.8732V107.64C56.4532 107.88 55.9732 108 55.4332 108C53.6732 108 52.5332 106.98 52.5332 104.8V99.58C52.5332 97.6 53.7932 96.38 55.7332 96.38C57.6932 96.38 58.9332 97.6 58.9332 99.58V110.92H52.5332ZM56.8732 104.84V99.52C56.8732 98.8 56.4532 98.36 55.7332 98.36C55.0332 98.36 54.5932 98.8 54.5932 99.52V104.84C54.5932 105.56 55.0332 106.02 55.7332 106.02C56.4532 106.02 56.8732 105.56 56.8732 104.84ZM67.3707 99.56V103.32H63.0307V105.04C63.0307 105.76 63.4507 106.2 64.1707 106.2C64.8707 106.2 65.3107 105.76 65.3107 105.04V104.18H67.3707V104.94C67.3707 106.92 66.1107 108.14 64.1707 108.14C62.2107 108.14 60.9707 106.92 60.9707 104.94V99.56C60.9707 97.58 62.2107 96.36 64.1707 96.36C66.1107 96.36 67.3707 97.58 67.3707 99.56ZM63.0307 99.48V101.48H65.3107V99.48C65.3107 98.76 64.8707 98.3 64.1707 98.3C63.4507 98.3 63.0307 98.76 63.0307 99.48ZM78.617 93.58V95.52H74.597V99.52H77.477V101.46H74.597V106.06H78.717V108H72.537V93.58H78.617ZM82.4262 108H80.3662V99.56C80.3662 97.58 81.6062 96.36 83.5662 96.36C85.5062 96.36 86.7662 97.58 86.7662 99.56V108H84.7062V99.52C84.7062 98.8 84.2662 98.34 83.5662 98.34C82.8462 98.34 82.4262 98.8 82.4262 99.52V108ZM93.2851 98.44H91.6251V108H89.5651V98.44H87.9051V96.5H89.5651V94.18H91.6251V96.5H93.2851V98.44ZM100.789 99.56V103.32H96.4487V105.04C96.4487 105.76 96.8687 106.2 97.5887 106.2C98.2887 106.2 98.7287 105.76 98.7287 105.04V104.18H100.789V104.94C100.789 106.92 99.5287 108.14 97.5887 108.14C95.6287 108.14 94.3887 106.92 94.3887 104.94V99.56C94.3887 97.58 95.6287 96.36 97.5887 96.36C99.5287 96.36 100.789 97.58 100.789 99.56ZM96.4487 99.48V101.48H98.7287V99.48C98.7287 98.76 98.2887 98.3 97.5887 98.3C96.8687 98.3 96.4487 98.76 96.4487 99.48ZM102.827 108V99.34C102.827 97.4 103.527 96.5 105.847 96.5H106.647V98.44H105.847C105.067 98.44 104.887 98.9 104.887 99.34V108H102.827ZM114.383 99.56V104.94C114.383 107.12 113.243 108.14 111.483 108.14C110.943 108.14 110.443 108 110.043 107.78V110.92H107.983V99.56C107.983 97.58 109.223 96.36 111.183 96.36C113.123 96.36 114.383 97.58 114.383 99.56ZM110.043 99.5V104.98C110.043 105.7 110.463 106.16 111.183 106.16C111.883 106.16 112.323 105.7 112.323 104.98V99.5C112.323 98.78 111.883 98.34 111.183 98.34C110.463 98.34 110.043 98.78 110.043 99.5ZM116.421 108V99.34C116.421 97.4 117.121 96.5 119.441 96.5H120.241V98.44H119.441C118.661 98.44 118.481 98.9 118.481 99.34V108H116.421ZM123.817 94.18C123.817 94.82 123.297 95.34 122.677 95.34C122.037 95.34 121.517 94.82 121.517 94.2C121.517 93.56 122.037 93.04 122.657 93.04C123.297 93.04 123.817 93.56 123.817 94.18ZM123.677 108H121.617V96.5H123.677V108ZM128.856 106.2C129.636 106.2 129.996 105.66 129.996 105.06C129.996 104.5 129.756 104.06 129.256 103.72L127.296 102.32C126.236 101.58 125.656 100.56 125.656 99.46C125.656 97.64 126.856 96.36 128.736 96.36C130.636 96.36 131.836 97.58 131.836 99.56V100.42H129.776V99.52C129.776 98.78 129.376 98.3 128.736 98.3C128.096 98.3 127.716 98.72 127.716 99.42C127.716 99.86 127.916 100.28 128.356 100.6L130.356 102C131.616 102.86 132.056 103.82 132.056 104.94C132.056 106.92 130.816 108.14 128.856 108.14C126.896 108.14 125.656 106.92 125.656 104.94V104.08H127.716V105C127.716 105.74 128.156 106.2 128.856 106.2ZM140.359 99.56V103.32H136.019V105.04C136.019 105.76 136.439 106.2 137.159 106.2C137.859 106.2 138.299 105.76 138.299 105.04V104.18H140.359V104.94C140.359 106.92 139.099 108.14 137.159 108.14C135.199 108.14 133.959 106.92 133.959 104.94V99.56C133.959 97.58 135.199 96.36 137.159 96.36C139.099 96.36 140.359 97.58 140.359 99.56ZM136.019 99.48V101.48H138.299V99.48C138.299 98.76 137.859 98.3 137.159 98.3C136.439 98.3 136.019 98.76 136.019 99.48ZM145.457 106.2C146.237 106.2 146.597 105.66 146.597 105.06C146.597 104.5 146.357 104.06 145.857 103.72L143.897 102.32C142.837 101.58 142.257 100.56 142.257 99.46C142.257 97.64 143.457 96.36 145.337 96.36C147.237 96.36 148.437 97.58 148.437 99.56V100.42H146.377V99.52C146.377 98.78 145.977 98.3 145.337 98.3C144.697 98.3 144.317 98.72 144.317 99.42C144.317 99.86 144.517 100.28 144.957 100.6L146.957 102C148.217 102.86 148.657 103.82 148.657 104.94C148.657 106.92 147.417 108.14 145.457 108.14C143.497 108.14 142.257 106.92 142.257 104.94V104.08H144.317V105C144.317 105.74 144.757 106.2 145.457 106.2ZM43.4761 127.112C41.7801 127.112 40.7241 126.04 40.7241 124.36V118.104C40.7241 116.424 41.7801 115.352 43.4761 115.352C45.1721 115.352 46.2281 116.424 46.2281 118.104V124.36C46.2281 126.04 45.1721 127.112 43.4761 127.112ZM43.4761 126.024C44.4841 126.024 45.0761 125.384 45.0761 124.36V118.104C45.0761 117.08 44.4841 116.44 43.4761 116.44C42.4521 116.44 41.8761 117.08 41.8761 118.104V124.36C41.8761 125.384 42.4521 126.024 43.4761 126.024ZM47.989 127V120.184C47.989 118.584 48.677 117.88 50.341 117.88H50.773V118.952H50.341C49.509 118.952 49.141 119.4 49.141 120.168V127H47.989ZM51.864 129.416V128.376H55.544V126.536C55.192 126.888 54.68 127.048 54.104 127.048C52.744 127.048 51.832 126.216 51.832 124.616V120.216C51.832 118.712 52.792 117.784 54.264 117.784C55.752 117.784 56.696 118.712 56.696 120.216V129.416H51.864ZM54.264 125.96C55.064 125.96 55.544 125.496 55.544 124.68V120.168C55.544 119.368 55.064 118.872 54.264 118.872C53.464 118.872 52.984 119.368 52.984 120.168V124.648C52.984 125.448 53.464 125.96 54.264 125.96ZM60.8265 127.112C59.3545 127.112 58.3945 126.184 58.3945 124.68V124.152C58.3945 122.552 59.3065 121.72 60.6665 121.72C61.2425 121.72 61.7545 121.896 62.1065 122.232V120.168C62.1065 119.368 61.6425 118.872 60.8745 118.872C60.1065 118.872 59.6425 119.368 59.6425 120.168V121.016H58.4905V120.2C58.4905 118.696 59.4185 117.768 60.8745 117.768C62.3305 117.768 63.2585 118.696 63.2585 120.2V124.68C63.2585 126.184 62.3145 127.112 60.8265 127.112ZM60.8265 126.024C61.6265 126.024 62.1065 125.528 62.1065 124.728V124.12C62.1065 123.288 61.6265 122.824 60.8265 122.824C60.0265 122.824 59.5465 123.32 59.5465 124.12V124.728C59.5465 125.528 60.0265 126.024 60.8265 126.024ZM64.9578 127V120.2C64.9578 118.696 65.9018 117.768 67.3898 117.768C68.8618 117.768 69.8218 118.696 69.8218 120.2V127H68.6698V120.168C68.6698 119.368 68.1738 118.872 67.3898 118.872C66.5898 118.872 66.1098 119.368 66.1098 120.168V127H64.9578ZM71.5835 127V117.88H72.7355V127H71.5835ZM72.1755 116.552C71.7755 116.552 71.4555 116.232 71.4555 115.832C71.4555 115.448 71.7755 115.128 72.1595 115.128C72.5595 115.128 72.8795 115.448 72.8795 115.832C72.8795 116.232 72.5595 116.552 72.1755 116.552ZM76.809 127.112C75.321 127.112 74.377 126.184 74.377 124.68V123.816H75.529V124.728C75.529 125.544 76.009 126.04 76.809 126.04C77.641 126.04 78.089 125.496 78.089 124.76C78.089 124.232 77.881 123.8 77.353 123.448L75.609 122.232C74.809 121.672 74.377 120.92 74.377 120.12C74.377 118.744 75.289 117.768 76.745 117.768C78.185 117.768 79.113 118.696 79.113 120.2V121.064H77.961V120.168C77.961 119.352 77.497 118.84 76.745 118.84C75.993 118.84 75.529 119.32 75.529 120.088C75.529 120.504 75.753 120.936 76.201 121.256L77.945 122.472C78.905 123.144 79.241 123.832 79.241 124.68C79.241 126.184 78.297 127.112 76.809 127.112ZM83.264 127.112C81.792 127.112 80.832 126.184 80.832 124.68V124.152C80.832 122.552 81.744 121.72 83.104 121.72C83.68 121.72 84.192 121.896 84.544 122.232V120.168C84.544 119.368 84.08 118.872 83.312 118.872C82.544 118.872 82.08 119.368 82.08 120.168V121.016H80.928V120.2C80.928 118.696 81.856 117.768 83.312 117.768C84.768 117.768 85.696 118.696 85.696 120.2V124.68C85.696 126.184 84.752 127.112 83.264 127.112ZM83.264 126.024C84.064 126.024 84.544 125.528 84.544 124.728V124.12C84.544 123.288 84.064 122.824 83.264 122.824C82.464 122.824 81.984 123.32 81.984 124.12V124.728C81.984 125.528 82.464 126.024 83.264 126.024ZM88.1339 127V118.968H86.6139V117.88H88.1339V115.944H89.2859V117.88H90.8059V118.968H89.2859V127H88.1339ZM91.896 127V117.88H93.048V127H91.896ZM92.488 116.552C92.088 116.552 91.768 116.232 91.768 115.832C91.768 115.448 92.088 115.128 92.472 115.128C92.872 115.128 93.192 115.448 93.192 115.832C93.192 116.232 92.872 116.552 92.488 116.552ZM97.2015 127.112C95.7135 127.112 94.7695 126.184 94.7695 124.68V120.2C94.7695 118.696 95.7135 117.768 97.2015 117.768C98.6735 117.768 99.6335 118.696 99.6335 120.2V124.68C99.6335 126.184 98.6735 127.112 97.2015 127.112ZM97.2015 126.024C97.9855 126.024 98.4815 125.528 98.4815 124.728V120.168C98.4815 119.368 97.9855 118.872 97.2015 118.872C96.4015 118.872 95.9215 119.368 95.9215 120.168V124.728C95.9215 125.528 96.4015 126.024 97.2015 126.024ZM101.333 127V120.2C101.333 118.696 102.277 117.768 103.765 117.768C105.237 117.768 106.197 118.696 106.197 120.2V127H105.045V120.168C105.045 119.368 104.549 118.872 103.765 118.872C102.965 118.872 102.485 119.368 102.485 120.168V127H101.333ZM110.247 127.112C108.759 127.112 107.815 126.184 107.815 124.68V123.816H108.967V124.728C108.967 125.544 109.447 126.04 110.247 126.04C111.079 126.04 111.527 125.496 111.527 124.76C111.527 124.232 111.319 123.8 110.791 123.448L109.047 122.232C108.247 121.672 107.815 120.92 107.815 120.12C107.815 118.744 108.727 117.768 110.183 117.768C111.623 117.768 112.551 118.696 112.551 120.2V121.064H111.399V120.168C111.399 119.352 110.935 118.84 110.183 118.84C109.431 118.84 108.967 119.32 108.967 120.088C108.967 120.504 109.191 120.936 109.639 121.256L111.383 122.472C112.343 123.144 112.679 123.832 112.679 124.68C112.679 126.184 111.735 127.112 110.247 127.112ZM116.833 124.856V117.88H117.985V124.808C117.985 125.576 118.449 126.04 119.185 126.04C119.905 126.04 120.385 125.576 120.385 124.792V117.88H121.617V124.792C121.617 125.592 122.097 126.04 122.817 126.04C123.537 126.04 124.017 125.576 124.017 124.808V117.88H125.169V124.856C125.169 126.248 124.241 127.112 122.849 127.112C122.065 127.112 121.361 126.84 120.961 126.28C120.561 126.84 119.889 127.112 119.153 127.112C117.745 127.112 116.833 126.248 116.833 124.856ZM126.927 127V117.88H128.079V127H126.927ZM127.519 116.552C127.119 116.552 126.799 116.232 126.799 115.832C126.799 115.448 127.119 115.128 127.503 115.128C127.903 115.128 128.223 115.448 128.223 115.832C128.223 116.232 127.903 116.552 127.519 116.552ZM130.681 127V118.968H129.161V117.88H130.681V115.944H131.833V117.88H133.353V118.968H131.833V127H130.681ZM134.443 127V115.464H135.595V118.28C135.947 117.944 136.459 117.768 137.035 117.768C138.395 117.768 139.307 118.6 139.307 120.2V127H138.155V120.168C138.155 119.368 137.659 118.872 136.875 118.872C136.075 118.872 135.595 119.336 135.595 120.168V127H134.443ZM70.2295 143.76L68.7695 142.8L71.7495 138.52H67.7695V136.58H74.1695V138.24L71.7495 141.62C73.3095 141.64 74.1695 142.76 74.1695 144.32V147.94C74.1695 149.9 72.9295 151.14 70.9695 151.14C69.0095 151.14 67.7695 149.9 67.7695 147.94V147.22H69.8295V148.02C69.8295 148.74 70.3095 149.2 70.9695 149.2C71.6495 149.2 72.1095 148.74 72.1095 148.02V144.42C72.1095 143.7 71.7495 143.28 71.0895 143.28C70.7295 143.28 70.4295 143.48 70.2295 143.76ZM76.0634 149.3H77.5434L76.7434 153.56H75.6234L76.0634 149.3ZM84.2579 148.02V139.56C84.2579 138.84 83.7779 138.38 83.1179 138.38C82.4379 138.38 81.9779 138.84 81.9779 139.56V148.02C81.9779 148.74 82.4379 149.2 83.1179 149.2C83.7779 149.2 84.2579 148.74 84.2579 148.02ZM79.9179 147.94V139.64C79.9179 137.68 81.1579 136.44 83.1179 136.44C85.0779 136.44 86.3179 137.68 86.3179 139.64V147.94C86.3179 149.9 85.0779 151.14 83.1179 151.14C81.1579 151.14 79.9179 149.9 79.9179 147.94ZM92.8126 148.02V139.56C92.8126 138.84 92.3326 138.38 91.6726 138.38C90.9926 138.38 90.5326 138.84 90.5326 139.56V148.02C90.5326 148.74 90.9926 149.2 91.6726 149.2C92.3326 149.2 92.8126 148.74 92.8126 148.02ZM88.4726 147.94V139.64C88.4726 137.68 89.7126 136.44 91.6726 136.44C93.6326 136.44 94.8726 137.68 94.8726 139.64V147.94C94.8726 149.9 93.6326 151.14 91.6726 151.14C89.7126 151.14 88.4726 149.9 88.4726 147.94ZM101.367 148.02V139.56C101.367 138.84 100.887 138.38 100.227 138.38C99.5473 138.38 99.0873 138.84 99.0873 139.56V148.02C99.0873 148.74 99.5473 149.2 100.227 149.2C100.887 149.2 101.367 148.74 101.367 148.02ZM97.0273 147.94V139.64C97.0273 137.68 98.2673 136.44 100.227 136.44C102.187 136.44 103.427 137.68 103.427 139.64V147.94C103.427 149.9 102.187 151.14 100.227 151.14C98.2673 151.14 97.0273 149.9 97.0273 147.94ZM111.922 145.42H109.942V147.46H107.882V145.42H105.882V143.48H107.862V141.48H109.922V143.48H111.922V145.42ZM59.2632 170V158.464H60.4152V161.28C60.7672 160.944 61.2792 160.768 61.8552 160.768C63.2152 160.768 64.1272 161.6 64.1272 163.2V170H62.9752V163.168C62.9752 162.368 62.4792 161.872 61.6952 161.872C60.8952 161.872 60.4152 162.336 60.4152 163.168V170H59.2632ZM68.2562 170.112C66.7682 170.112 65.8242 169.184 65.8242 167.68V163.2C65.8242 161.696 66.7682 160.768 68.2562 160.768C69.7282 160.768 70.6882 161.696 70.6882 163.2V165.952H66.9762V167.744C66.9762 168.544 67.4562 169.04 68.2562 169.04C69.0402 169.04 69.5362 168.544 69.5362 167.744V166.864H70.6882V167.68C70.6882 169.184 69.7282 170.112 68.2562 170.112ZM66.9762 164.928H69.5362V163.152C69.5362 162.336 69.0402 161.84 68.2562 161.84C67.4562 161.84 66.9762 162.336 66.9762 163.152V164.928ZM74.7874 170.112C73.3154 170.112 72.3554 169.184 72.3554 167.68V167.152C72.3554 165.552 73.2674 164.72 74.6274 164.72C75.2034 164.72 75.7154 164.896 76.0674 165.232V163.168C76.0674 162.368 75.6034 161.872 74.8354 161.872C74.0674 161.872 73.6034 162.368 73.6034 163.168V164.016H72.4514V163.2C72.4514 161.696 73.3794 160.768 74.8354 160.768C76.2914 160.768 77.2194 161.696 77.2194 163.2V167.68C77.2194 169.184 76.2754 170.112 74.7874 170.112ZM74.7874 169.024C75.5874 169.024 76.0674 168.528 76.0674 167.728V167.12C76.0674 166.288 75.5874 165.824 74.7874 165.824C73.9874 165.824 73.5074 166.32 73.5074 167.12V167.728C73.5074 168.528 73.9874 169.024 74.7874 169.024ZM81.3187 170.112C79.8467 170.112 78.8867 169.184 78.8867 167.68V163.2C78.8867 161.6 79.7987 160.768 81.1587 160.768C81.7347 160.768 82.2467 160.944 82.5987 161.28V158.464H83.7507V167.68C83.7507 169.184 82.8067 170.112 81.3187 170.112ZM81.3187 169.024C82.1187 169.024 82.5987 168.528 82.5987 167.728V163.136C82.5987 162.32 82.1187 161.872 81.3187 161.872C80.5347 161.872 80.0387 162.368 80.0387 163.168V167.728C80.0387 168.528 80.5347 169.024 81.3187 169.024ZM87.8812 170.112C86.3932 170.112 85.4492 169.184 85.4492 167.68V163.2C85.4492 161.696 86.3932 160.768 87.8812 160.768C89.3532 160.768 90.3132 161.696 90.3132 163.2V164.144H89.1612V163.168C89.1612 162.368 88.6652 161.872 87.8812 161.872C87.0812 161.872 86.6012 162.368 86.6012 163.168V167.728C86.6012 168.528 87.0812 169.024 87.8812 169.024C88.6652 169.024 89.1612 168.528 89.1612 167.728V166.736H90.3132V167.68C90.3132 169.184 89.3532 170.112 87.8812 170.112ZM94.3343 170.112C92.8463 170.112 91.9023 169.184 91.9023 167.68V163.2C91.9023 161.696 92.8463 160.768 94.3343 160.768C95.8063 160.768 96.7663 161.696 96.7663 163.2V167.68C96.7663 169.184 95.8063 170.112 94.3343 170.112ZM94.3343 169.024C95.1183 169.024 95.6143 168.528 95.6143 167.728V163.168C95.6143 162.368 95.1183 161.872 94.3343 161.872C93.5343 161.872 93.0543 162.368 93.0543 163.168V167.728C93.0543 168.528 93.5343 169.024 94.3343 169.024ZM100.898 170.112C99.4096 170.112 98.4656 169.184 98.4656 167.68V160.88H99.6176V167.712C99.6176 168.528 100.098 169.024 100.898 169.024C101.682 169.024 102.178 168.528 102.178 167.712V160.88H103.33V167.68C103.33 169.184 102.37 170.112 100.898 170.112ZM105.059 170V163.2C105.059 161.696 106.003 160.768 107.491 160.768C108.963 160.768 109.923 161.696 109.923 163.2V170H108.771V163.168C108.771 162.368 108.275 161.872 107.491 161.872C106.691 161.872 106.211 162.368 106.211 163.168V170H105.059ZM112.392 170V161.968H110.872V160.88H112.392V158.944H113.544V160.88H115.064V161.968H113.544V170H112.392Z`,fill:`#0A0A0A`}),(0,i.jsx)(`rect`,{x:`63`,y:`25`,width:`54`,height:`55.9728`,rx:`7`,fill:`#FFEEC6`}),(0,i.jsxs)(`g`,{clipPath:`url(#clip0_11693_5757)`,children:[(0,i.jsx)(`path`,{d:`M94.1019 73.8935C91.8181 74.3764 89.578 74.3446 87.3331 73.9406C86.9386 73.8699 86.6641 73.6167 86.663 73.1903L86.6594 72.1315C86.6583 71.7252 86.3885 71.406 86.0175 71.2788C85.1754 70.989 84.3875 70.6675 83.589 70.2694C83.2073 70.0798 82.7692 70.0833 82.4512 70.4002L81.7057 71.1433C81.4112 71.4366 81.0402 71.4272 80.7104 71.1999C78.8707 69.9349 77.3137 68.3744 76.0452 66.537C75.8179 66.2072 75.812 65.8339 76.1041 65.5418L76.845 64.7986C77.1924 64.45 77.1571 64.0024 76.951 63.5961C76.5588 62.8223 76.2502 62.052 75.9687 61.2299C75.8427 60.8648 75.5188 60.5869 75.1171 60.5869L74.0383 60.5845C73.7521 60.5845 73.3988 60.3772 73.3387 60.0674C73.1173 58.912 73.0183 57.7967 72.9854 56.6189C73.0183 56.2267 73.2904 55.9158 73.7062 55.9158H80.7552L80.754 46.8397C80.7352 46.4817 80.9154 46.1955 81.2334 46.0801L85.6913 44.8081L85.6937 41.1028C85.6937 40.7047 85.9987 40.4079 86.4027 40.3984H94.8592C95.196 40.4031 95.5611 40.6634 95.5611 41.0191L95.5694 44.8022L100.028 46.0742C100.309 46.1931 100.489 46.4311 100.505 46.7514L100.503 55.9158H107.552C107.968 55.9158 108.24 56.2267 108.273 56.6189C108.239 57.7967 108.14 58.912 107.92 60.0674C107.861 60.3772 107.505 60.5845 107.22 60.5845L106.141 60.5869C105.74 60.5869 105.414 60.8648 105.29 61.2299C105 62.0767 104.678 62.8564 104.278 63.6609C104.107 64.0048 104.077 64.4512 104.37 64.748L105.153 65.5441C105.44 65.8362 105.44 66.2061 105.212 66.5382C103.945 68.3755 102.385 69.9338 100.548 71.2022C100.217 71.4307 99.8436 71.4354 99.5527 71.1445L98.8083 70.4025C98.462 70.0574 98.0109 70.0916 97.6058 70.2965C96.8284 70.6899 96.057 71.0008 95.2302 71.2788C94.8674 71.4013 94.5989 71.7369 94.5977 72.128L94.5954 73.2104C94.5954 73.4589 94.4222 73.8252 94.1019 73.8935ZM92.0419 52.3895C92.4329 52.3895 92.7439 52.7016 92.7439 53.0902V55.9169L94.1549 55.9087V41.8082H87.1011V55.9075L88.5121 55.9158V53.0891C88.5121 52.7016 88.823 52.3883 89.2152 52.3883H92.0419V52.3895ZM85.6925 55.9099V46.2721L82.1662 47.2814V55.9169L85.6925 55.9087V55.9099ZM99.0933 55.9099V47.2755L95.567 46.2732V55.9181L99.0933 55.9099ZM91.3341 53.7993H89.9231V55.9146H91.3341V53.7993ZM94.8156 69.9326C95.6978 69.6417 96.4657 69.2824 97.2713 68.9138C98.2912 68.4474 99.4254 68.8467 100.134 69.7571C101.537 68.7477 102.76 67.5311 103.764 66.1236C102.886 65.4358 102.483 64.3393 102.902 63.324L103.981 60.7117C104.435 59.6128 105.472 59.0345 106.655 59.1876L106.84 57.3256L101.747 57.3232C101.389 63.2498 96.4362 67.8043 90.5885 67.7819C84.7703 67.7584 79.8648 63.2239 79.5091 57.3232L74.4164 57.3256L74.6142 59.1959C75.8709 59.0228 76.9203 59.6552 77.3019 60.7765C77.5964 61.6398 77.9544 62.4372 78.3325 63.2675C78.7965 64.2875 78.3973 65.4193 77.4904 66.126C78.4986 67.5311 79.7176 68.7501 81.1227 69.7583C81.8282 68.8478 82.9647 68.4474 83.9835 68.915C84.8103 69.2942 85.6077 69.6558 86.4722 69.9444C87.624 70.3295 88.2224 71.4437 88.0528 72.6356C89.8135 72.903 91.5084 72.9159 93.2079 72.6226C93.0277 71.3954 93.6543 70.3142 94.8144 69.9326H94.8156ZM100.332 57.3267H80.9189C81.2805 62.469 85.5829 66.3898 90.671 66.3698C95.7119 66.3498 99.9908 62.4324 100.332 57.3267Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M103.325 52.3872V46.7433C103.324 46.4382 103.538 46.1991 103.793 46.0719L106.162 44.8894C106.041 43.8259 106.691 42.9119 107.628 42.6128C108.635 42.2912 109.691 42.7706 110.15 43.6763C110.61 44.582 110.344 45.6915 109.543 46.3075C108.742 46.9235 107.561 46.8799 106.802 46.145L104.736 47.1861V52.386H103.326L103.325 52.3872ZM108.967 44.6303C108.967 44.2405 108.651 43.9248 108.261 43.9248C107.871 43.9248 107.556 44.2405 107.556 44.6303C107.556 45.0202 107.871 45.3358 108.261 45.3358C108.651 45.3358 108.967 45.0202 108.967 44.6303Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M104.735 53.7993H103.324V55.2103H104.735V53.7993Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M83.5788 44.6219L82.1655 44.6313L82.1631 39.9838L80.9653 38.7883C80.0031 39.2111 78.9336 38.9355 78.3294 38.1005C77.7252 37.2654 77.8194 36.1359 78.532 35.401C79.2446 34.6661 80.3717 34.5412 81.2244 35.116C82.0771 35.6907 82.394 36.8085 81.9676 37.7837L83.5694 39.3949L83.58 44.6219H83.5788ZM80.7545 36.8709C80.7545 36.481 80.4388 36.1654 80.049 36.1654C79.6591 36.1654 79.3435 36.481 79.3435 36.8709C79.3435 37.2607 79.6591 37.5764 80.049 37.5764C80.4388 37.5764 80.7545 37.2607 80.7545 36.8709Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M99.0923 44.6266L97.6777 44.6172L97.6895 39.3996L99.3019 37.7696C98.8449 36.7932 99.1747 35.7438 99.9803 35.1572C100.786 34.5707 101.944 34.6461 102.677 35.3575C103.408 36.0665 103.54 37.1983 102.96 38.0463C102.381 38.8943 101.311 39.2453 100.315 38.7801L99.0934 39.9861V44.6254L99.0923 44.6266ZM101.914 36.8721C101.914 36.4822 101.599 36.1666 101.209 36.1666C100.819 36.1666 100.503 36.4822 100.503 36.8721C100.503 37.2619 100.819 37.5776 101.209 37.5776C101.599 37.5776 101.914 37.2619 101.914 36.8721Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M91.3343 39.685L89.9233 39.6944L89.9257 34.6311C88.9458 34.2578 88.3686 33.292 88.5453 32.272C88.722 31.2521 89.5794 30.5336 90.5888 30.5159C91.5981 30.4983 92.5015 31.2155 92.6994 32.2049C92.8972 33.1942 92.3755 34.2389 91.3367 34.617L91.3343 39.685ZM91.3355 32.6407C91.3355 32.2508 91.0198 31.9352 90.63 31.9352C90.2401 31.9352 89.9245 32.2508 89.9245 32.6407C89.9245 33.0305 90.2401 33.3462 90.63 33.3462C91.0198 33.3462 91.3355 33.0305 91.3355 32.6407Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M92.7445 43.9248H88.5127V45.3358H92.7445V43.9248Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M92.7445 46.7466H88.5127V48.1576H92.7445V46.7466Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M92.7445 49.5674H88.5127V50.9784H92.7445V49.5674Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M98.3868 48.1562H96.2715V49.5672H98.3868V48.1562Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M98.3868 50.9785H96.2715V52.3895H98.3868V50.9785Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M84.9854 48.1562H82.8701V49.5672H84.9854V48.1562Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M84.9854 50.9785H82.8701V52.3895H84.9854V50.9785Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M77.9339 52.38L76.5229 52.3894V47.1836L74.4512 46.1471C73.6715 46.8938 72.5384 46.9339 71.7175 46.3144C70.8966 45.6948 70.6304 44.6125 71.1039 43.6773C71.5467 42.8046 72.5667 42.3146 73.5631 42.5926C74.5595 42.8705 75.2179 43.801 75.0978 44.8881L77.5852 46.133C77.769 46.2248 77.935 46.5252 77.935 46.7384V52.3788L77.9339 52.38ZM73.7021 44.6301C73.7021 44.2403 73.3864 43.9246 72.9966 43.9246C72.6067 43.9246 72.2911 44.2403 72.2911 44.6301C72.2911 45.02 72.6067 45.3356 72.9966 45.3356C73.3864 45.3356 73.7021 45.02 73.7021 44.6301Z`,fill:`#F5B919`}),(0,i.jsx)(`path`,{d:`M77.9344 53.7993H76.5234V55.2103H77.9344V53.7993Z`,fill:`#F5B919`})]}),(0,i.jsx)(`defs`,{children:(0,i.jsx)(`clipPath`,{id:`clip0_11693_5757`,children:(0,i.jsx)(`rect`,{x:`70.875`,y:`30.5156`,width:`39.5017`,height:`43.7347`,rx:`10`,fill:`white`})})})]})}),(0,i.jsx)(`div`,{className:`kka-category-svg-card`,children:(0,i.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`180`,height:`190`,viewBox:`0 0 180 190`,fill:`none`,children:[(0,i.jsx)(`rect`,{width:`180`,height:`190`,rx:`10`,fill:`#D2FDF2`}),(0,i.jsx)(`path`,{d:`M59.0977 108H57.0377V96.76C57.0377 95.82 56.4777 95.38 55.6977 95.38C54.8977 95.38 54.3577 95.84 54.3577 96.76V108H52.2977V96.64C52.2977 94.68 53.5777 93.44 55.6177 93.44C56.6177 93.44 57.3777 93.62 58.0577 94.28C58.7377 93.62 59.4977 93.44 60.5177 93.44C62.5577 93.44 63.8377 94.68 63.8377 96.64V108H61.7777V96.76C61.7777 95.84 61.2177 95.38 60.4377 95.38C59.6577 95.38 59.0977 95.8 59.0977 96.76V108ZM68.2468 94.18C68.2468 94.82 67.7268 95.34 67.1068 95.34C66.4668 95.34 65.9468 94.82 65.9468 94.2C65.9468 93.56 66.4668 93.04 67.0868 93.04C67.7268 93.04 68.2468 93.56 68.2468 94.18ZM68.1068 108H66.0468V96.5H68.1068V108ZM70.1855 104.94V99.56C70.1855 97.38 71.3255 96.36 73.0855 96.36C73.6255 96.36 74.1255 96.5 74.5255 96.72V93.58H76.5855V104.94C76.5855 106.92 75.3455 108.14 73.3855 108.14C71.4455 108.14 70.1855 106.92 70.1855 104.94ZM74.5255 105V99.52C74.5255 98.8 74.1055 98.34 73.3855 98.34C72.6855 98.34 72.2455 98.8 72.2455 99.52V105C72.2455 105.72 72.6855 106.16 73.3855 106.16C74.1055 106.16 74.5255 105.72 74.5255 105ZM81.743 103.06H78.323V101.56H81.743V103.06ZM90.3673 108H88.3073V96.76C88.3073 95.82 87.7473 95.38 86.9673 95.38C86.1673 95.38 85.6273 95.84 85.6273 96.76V108H83.5673V96.64C83.5673 94.68 84.8473 93.44 86.8873 93.44C87.8873 93.44 88.6473 93.62 89.3273 94.28C90.0073 93.62 90.7673 93.44 91.7873 93.44C93.8273 93.44 95.1073 94.68 95.1073 96.64V108H93.0473V96.76C93.0473 95.84 92.4873 95.38 91.7073 95.38C90.9273 95.38 90.3673 95.8 90.3673 96.76V108ZM97.2363 104.94V104.34C97.2363 102.16 98.3763 101.14 100.136 101.14C100.676 101.14 101.156 101.28 101.576 101.5V99.52C101.576 98.8 101.176 98.34 100.516 98.34C99.8563 98.34 99.4563 98.8 99.4563 99.52V100.32H97.3963V99.56C97.3963 97.58 98.6163 96.36 100.516 96.36C102.436 96.36 103.636 97.58 103.636 99.56V104.94C103.636 106.92 102.396 108.14 100.436 108.14C98.4963 108.14 97.2363 106.92 97.2363 104.94ZM101.576 105V104.3C101.576 103.58 101.156 103.12 100.436 103.12C99.7363 103.12 99.2963 103.58 99.2963 104.3V105C99.2963 105.72 99.7363 106.16 100.436 106.16C101.156 106.16 101.576 105.72 101.576 105ZM105.675 108V99.34C105.675 97.4 106.375 96.5 108.695 96.5H109.495V98.44H108.695C107.915 98.44 107.735 98.9 107.735 99.34V108H105.675ZM112.931 93.58V101.56C112.951 101.52 113.271 100.74 113.551 100.14L115.211 96.5H117.611L115.271 101.06L117.731 108H115.431L113.851 103.12L112.931 104.92V108H110.871V93.58H112.931ZM125.14 99.56V103.32H120.8V105.04C120.8 105.76 121.22 106.2 121.94 106.2C122.64 106.2 123.08 105.76 123.08 105.04V104.18H125.14V104.94C125.14 106.92 123.88 108.14 121.94 108.14C119.98 108.14 118.74 106.92 118.74 104.94V99.56C118.74 97.58 119.98 96.36 121.94 96.36C123.88 96.36 125.14 97.58 125.14 99.56ZM120.8 99.48V101.48H123.08V99.48C123.08 98.76 122.64 98.3 121.94 98.3C121.22 98.3 120.8 98.76 120.8 99.48ZM131.621 98.44H129.961V108H127.901V98.44H126.241V96.5H127.901V94.18H129.961V96.5H131.621V98.44ZM44.9761 127.112C43.2801 127.112 42.2241 126.04 42.2241 124.36V118.104C42.2241 116.424 43.2801 115.352 44.9761 115.352C46.6721 115.352 47.7281 116.424 47.7281 118.104V124.36C47.7281 126.04 46.6721 127.112 44.9761 127.112ZM44.9761 126.024C45.9841 126.024 46.5761 125.384 46.5761 124.36V118.104C46.5761 117.08 45.9841 116.44 44.9761 116.44C43.9521 116.44 43.3761 117.08 43.3761 118.104V124.36C43.3761 125.384 43.9521 126.024 44.9761 126.024ZM49.489 127V120.184C49.489 118.584 50.177 117.88 51.841 117.88H52.273V118.952H51.841C51.009 118.952 50.641 119.4 50.641 120.168V127H49.489ZM53.364 129.416V128.376H57.044V126.536C56.692 126.888 56.18 127.048 55.604 127.048C54.244 127.048 53.332 126.216 53.332 124.616V120.216C53.332 118.712 54.292 117.784 55.764 117.784C57.252 117.784 58.196 118.712 58.196 120.216V129.416H53.364ZM55.764 125.96C56.564 125.96 57.044 125.496 57.044 124.68V120.168C57.044 119.368 56.564 118.872 55.764 118.872C54.964 118.872 54.484 119.368 54.484 120.168V124.648C54.484 125.448 54.964 125.96 55.764 125.96ZM62.3265 127.112C60.8545 127.112 59.8945 126.184 59.8945 124.68V124.152C59.8945 122.552 60.8065 121.72 62.1665 121.72C62.7425 121.72 63.2545 121.896 63.6065 122.232V120.168C63.6065 119.368 63.1425 118.872 62.3745 118.872C61.6065 118.872 61.1425 119.368 61.1425 120.168V121.016H59.9905V120.2C59.9905 118.696 60.9185 117.768 62.3745 117.768C63.8305 117.768 64.7585 118.696 64.7585 120.2V124.68C64.7585 126.184 63.8145 127.112 62.3265 127.112ZM62.3265 126.024C63.1265 126.024 63.6065 125.528 63.6065 124.728V124.12C63.6065 123.288 63.1265 122.824 62.3265 122.824C61.5265 122.824 61.0465 123.32 61.0465 124.12V124.728C61.0465 125.528 61.5265 126.024 62.3265 126.024ZM66.4578 127V120.2C66.4578 118.696 67.4018 117.768 68.8898 117.768C70.3618 117.768 71.3218 118.696 71.3218 120.2V127H70.1698V120.168C70.1698 119.368 69.6738 118.872 68.8898 118.872C68.0898 118.872 67.6098 119.368 67.6098 120.168V127H66.4578ZM73.0835 127V117.88H74.2355V127H73.0835ZM73.6755 116.552C73.2755 116.552 72.9555 116.232 72.9555 115.832C72.9555 115.448 73.2755 115.128 73.6595 115.128C74.0595 115.128 74.3795 115.448 74.3795 115.832C74.3795 116.232 74.0595 116.552 73.6755 116.552ZM78.309 127.112C76.821 127.112 75.877 126.184 75.877 124.68V123.816H77.029V124.728C77.029 125.544 77.509 126.04 78.309 126.04C79.141 126.04 79.589 125.496 79.589 124.76C79.589 124.232 79.381 123.8 78.853 123.448L77.109 122.232C76.309 121.672 75.877 120.92 75.877 120.12C75.877 118.744 76.789 117.768 78.245 117.768C79.685 117.768 80.613 118.696 80.613 120.2V121.064H79.461V120.168C79.461 119.352 78.997 118.84 78.245 118.84C77.493 118.84 77.029 119.32 77.029 120.088C77.029 120.504 77.253 120.936 77.701 121.256L79.445 122.472C80.405 123.144 80.741 123.832 80.741 124.68C80.741 126.184 79.797 127.112 78.309 127.112ZM84.764 127.112C83.292 127.112 82.332 126.184 82.332 124.68V124.152C82.332 122.552 83.244 121.72 84.604 121.72C85.18 121.72 85.692 121.896 86.044 122.232V120.168C86.044 119.368 85.58 118.872 84.812 118.872C84.044 118.872 83.58 119.368 83.58 120.168V121.016H82.428V120.2C82.428 118.696 83.356 117.768 84.812 117.768C86.268 117.768 87.196 118.696 87.196 120.2V124.68C87.196 126.184 86.252 127.112 84.764 127.112ZM84.764 126.024C85.564 126.024 86.044 125.528 86.044 124.728V124.12C86.044 123.288 85.564 122.824 84.764 122.824C83.964 122.824 83.484 123.32 83.484 124.12V124.728C83.484 125.528 83.964 126.024 84.764 126.024ZM89.6339 127V118.968H88.1139V117.88H89.6339V115.944H90.7859V117.88H92.3059V118.968H90.7859V127H89.6339ZM93.396 127V117.88H94.548V127H93.396ZM93.988 116.552C93.588 116.552 93.268 116.232 93.268 115.832C93.268 115.448 93.588 115.128 93.972 115.128C94.372 115.128 94.692 115.448 94.692 115.832C94.692 116.232 94.372 116.552 93.988 116.552ZM98.7015 127.112C97.2135 127.112 96.2695 126.184 96.2695 124.68V120.2C96.2695 118.696 97.2135 117.768 98.7015 117.768C100.174 117.768 101.134 118.696 101.134 120.2V124.68C101.134 126.184 100.174 127.112 98.7015 127.112ZM98.7015 126.024C99.4855 126.024 99.9815 125.528 99.9815 124.728V120.168C99.9815 119.368 99.4855 118.872 98.7015 118.872C97.9015 118.872 97.4215 119.368 97.4215 120.168V124.728C97.4215 125.528 97.9015 126.024 98.7015 126.024ZM102.833 127V120.2C102.833 118.696 103.777 117.768 105.265 117.768C106.737 117.768 107.697 118.696 107.697 120.2V127H106.545V120.168C106.545 119.368 106.049 118.872 105.265 118.872C104.465 118.872 103.985 119.368 103.985 120.168V127H102.833ZM111.747 127.112C110.259 127.112 109.315 126.184 109.315 124.68V123.816H110.467V124.728C110.467 125.544 110.947 126.04 111.747 126.04C112.579 126.04 113.027 125.496 113.027 124.76C113.027 124.232 112.819 123.8 112.291 123.448L110.547 122.232C109.747 121.672 109.315 120.92 109.315 120.12C109.315 118.744 110.227 117.768 111.683 117.768C113.123 117.768 114.051 118.696 114.051 120.2V121.064H112.899V120.168C112.899 119.352 112.435 118.84 111.683 118.84C110.931 118.84 110.467 119.32 110.467 120.088C110.467 120.504 110.691 120.936 111.139 121.256L112.883 122.472C113.843 123.144 114.179 123.832 114.179 124.68C114.179 126.184 113.235 127.112 111.747 127.112ZM118.333 124.856V117.88H119.485V124.808C119.485 125.576 119.949 126.04 120.685 126.04C121.405 126.04 121.885 125.576 121.885 124.792V117.88H123.117V124.792C123.117 125.592 123.597 126.04 124.317 126.04C125.037 126.04 125.517 125.576 125.517 124.808V117.88H126.669V124.856C126.669 126.248 125.741 127.112 124.349 127.112C123.565 127.112 122.861 126.84 122.461 126.28C122.061 126.84 121.389 127.112 120.653 127.112C119.245 127.112 118.333 126.248 118.333 124.856ZM128.427 127V117.88H129.579V127H128.427ZM129.019 116.552C128.619 116.552 128.299 116.232 128.299 115.832C128.299 115.448 128.619 115.128 129.003 115.128C129.403 115.128 129.723 115.448 129.723 115.832C129.723 116.232 129.403 116.552 129.019 116.552ZM132.181 127V118.968H130.661V117.88H132.181V115.944H133.333V117.88H134.853V118.968H133.333V127H132.181ZM135.943 127V115.464H137.095V118.28C137.447 117.944 137.959 117.768 138.535 117.768C139.895 117.768 140.807 118.6 140.807 120.2V127H139.655V120.168C139.655 119.368 139.159 118.872 138.375 118.872C137.575 118.872 137.095 119.336 137.095 120.168V127H135.943ZM56.1897 151H54.1297V138.64H52.1897L53.6497 136.58H56.1897V151ZM58.5888 149.3H60.0688L59.2688 153.56H58.1488L58.5888 149.3ZM66.7833 148.02V139.56C66.7833 138.84 66.3033 138.38 65.6433 138.38C64.9633 138.38 64.5033 138.84 64.5033 139.56V148.02C64.5033 148.74 64.9633 149.2 65.6433 149.2C66.3033 149.2 66.7833 148.74 66.7833 148.02ZM62.4433 147.94V139.64C62.4433 137.68 63.6833 136.44 65.6433 136.44C67.6033 136.44 68.8433 137.68 68.8433 139.64V147.94C68.8433 149.9 67.6033 151.14 65.6433 151.14C63.6833 151.14 62.4433 149.9 62.4433 147.94ZM75.338 148.02V139.56C75.338 138.84 74.858 138.38 74.198 138.38C73.518 138.38 73.058 138.84 73.058 139.56V148.02C73.058 148.74 73.518 149.2 74.198 149.2C74.858 149.2 75.338 148.74 75.338 148.02ZM70.998 147.94V139.64C70.998 137.68 72.238 136.44 74.198 136.44C76.158 136.44 77.398 137.68 77.398 139.64V147.94C77.398 149.9 76.158 151.14 74.198 151.14C72.238 151.14 70.998 149.9 70.998 147.94ZM83.8927 148.02V139.56C83.8927 138.84 83.4127 138.38 82.7527 138.38C82.0727 138.38 81.6127 138.84 81.6127 139.56V148.02C81.6127 148.74 82.0727 149.2 82.7527 149.2C83.4127 149.2 83.8927 148.74 83.8927 148.02ZM79.5527 147.94V139.64C79.5527 137.68 80.7927 136.44 82.7527 136.44C84.7127 136.44 85.9527 137.68 85.9527 139.64V147.94C85.9527 149.9 84.7127 151.14 82.7527 151.14C80.7927 151.14 79.5527 149.9 79.5527 147.94ZM93.2673 146.06H87.6273V144.56H93.2673V146.06ZM94.9433 149.34L98.7833 144.08C99.1633 143.58 99.2833 143.08 99.2833 142.46V139.56C99.2833 138.84 98.8233 138.38 98.1433 138.38C97.4833 138.38 97.0033 138.84 97.0033 139.56V142.98H94.9433V139.64C94.9433 137.68 96.1833 136.44 98.1433 136.44C100.103 136.44 101.343 137.68 101.343 139.64V142.34C101.343 143.58 101.163 144.26 100.683 144.92L98.6033 147.8C98.0433 148.56 97.6433 149.06 97.6433 149.06H101.343V151H94.9433V149.34ZM103.433 149.3H104.913L104.113 153.56H102.993L103.433 149.3ZM109.686 136.44C111.646 136.44 112.886 137.68 112.886 139.64V147.94C112.886 149.9 111.686 151.14 109.766 151.14C107.846 151.14 106.646 149.9 106.646 147.94V147.22H108.706V148.02C108.706 148.74 109.126 149.2 109.766 149.2C110.386 149.2 110.826 148.74 110.826 148.02V145.52C110.446 145.74 109.926 145.84 109.386 145.84C107.606 145.84 106.486 144.6 106.486 142.64V139.64C106.486 137.68 107.726 136.44 109.686 136.44ZM109.686 143.9C110.346 143.9 110.826 143.44 110.826 142.72V139.56C110.826 138.84 110.366 138.38 109.686 138.38C109.026 138.38 108.546 138.84 108.546 139.56V142.72C108.546 143.44 109.026 143.9 109.686 143.9ZM118.241 136.44C120.201 136.44 121.441 137.68 121.441 139.64V147.94C121.441 149.9 120.241 151.14 118.321 151.14C116.401 151.14 115.201 149.9 115.201 147.94V147.22H117.261V148.02C117.261 148.74 117.681 149.2 118.321 149.2C118.941 149.2 119.381 148.74 119.381 148.02V145.52C119.001 145.74 118.481 145.84 117.941 145.84C116.161 145.84 115.041 144.6 115.041 142.64V139.64C115.041 137.68 116.281 136.44 118.241 136.44ZM118.241 143.9C118.901 143.9 119.381 143.44 119.381 142.72V139.56C119.381 138.84 118.921 138.38 118.241 138.38C117.581 138.38 117.101 138.84 117.101 139.56V142.72C117.101 143.44 117.581 143.9 118.241 143.9ZM126.796 136.44C128.756 136.44 129.996 137.68 129.996 139.64V147.94C129.996 149.9 128.796 151.14 126.876 151.14C124.956 151.14 123.756 149.9 123.756 147.94V147.22H125.816V148.02C125.816 148.74 126.236 149.2 126.876 149.2C127.496 149.2 127.936 148.74 127.936 148.02V145.52C127.556 145.74 127.036 145.84 126.496 145.84C124.716 145.84 123.596 144.6 123.596 142.64V139.64C123.596 137.68 124.836 136.44 126.796 136.44ZM126.796 143.9C127.456 143.9 127.936 143.44 127.936 142.72V139.56C127.936 138.84 127.476 138.38 126.796 138.38C126.136 138.38 125.656 138.84 125.656 139.56V142.72C125.656 143.44 126.136 143.9 126.796 143.9ZM60.7632 170V158.464H61.9152V161.28C62.2672 160.944 62.7792 160.768 63.3552 160.768C64.7152 160.768 65.6272 161.6 65.6272 163.2V170H64.4752V163.168C64.4752 162.368 63.9792 161.872 63.1952 161.872C62.3952 161.872 61.9152 162.336 61.9152 163.168V170H60.7632ZM69.7562 170.112C68.2682 170.112 67.3242 169.184 67.3242 167.68V163.2C67.3242 161.696 68.2682 160.768 69.7562 160.768C71.2282 160.768 72.1882 161.696 72.1882 163.2V165.952H68.4762V167.744C68.4762 168.544 68.9562 169.04 69.7562 169.04C70.5402 169.04 71.0362 168.544 71.0362 167.744V166.864H72.1882V167.68C72.1882 169.184 71.2282 170.112 69.7562 170.112ZM68.4762 164.928H71.0362V163.152C71.0362 162.336 70.5402 161.84 69.7562 161.84C68.9562 161.84 68.4762 162.336 68.4762 163.152V164.928ZM76.2874 170.112C74.8154 170.112 73.8554 169.184 73.8554 167.68V167.152C73.8554 165.552 74.7674 164.72 76.1274 164.72C76.7034 164.72 77.2154 164.896 77.5674 165.232V163.168C77.5674 162.368 77.1034 161.872 76.3354 161.872C75.5674 161.872 75.1034 162.368 75.1034 163.168V164.016H73.9514V163.2C73.9514 161.696 74.8794 160.768 76.3354 160.768C77.7914 160.768 78.7194 161.696 78.7194 163.2V167.68C78.7194 169.184 77.7754 170.112 76.2874 170.112ZM76.2874 169.024C77.0874 169.024 77.5674 168.528 77.5674 167.728V167.12C77.5674 166.288 77.0874 165.824 76.2874 165.824C75.4874 165.824 75.0074 166.32 75.0074 167.12V167.728C75.0074 168.528 75.4874 169.024 76.2874 169.024ZM82.8187 170.112C81.3467 170.112 80.3867 169.184 80.3867 167.68V163.2C80.3867 161.6 81.2987 160.768 82.6587 160.768C83.2347 160.768 83.7467 160.944 84.0987 161.28V158.464H85.2507V167.68C85.2507 169.184 84.3067 170.112 82.8187 170.112ZM82.8187 169.024C83.6187 169.024 84.0987 168.528 84.0987 167.728V163.136C84.0987 162.32 83.6187 161.872 82.8187 161.872C82.0347 161.872 81.5387 162.368 81.5387 163.168V167.728C81.5387 168.528 82.0347 169.024 82.8187 169.024ZM89.3812 170.112C87.8932 170.112 86.9492 169.184 86.9492 167.68V163.2C86.9492 161.696 87.8932 160.768 89.3812 160.768C90.8532 160.768 91.8132 161.696 91.8132 163.2V164.144H90.6612V163.168C90.6612 162.368 90.1652 161.872 89.3812 161.872C88.5812 161.872 88.1012 162.368 88.1012 163.168V167.728C88.1012 168.528 88.5812 169.024 89.3812 169.024C90.1652 169.024 90.6612 168.528 90.6612 167.728V166.736H91.8132V167.68C91.8132 169.184 90.8532 170.112 89.3812 170.112ZM95.8343 170.112C94.3463 170.112 93.4023 169.184 93.4023 167.68V163.2C93.4023 161.696 94.3463 160.768 95.8343 160.768C97.3063 160.768 98.2663 161.696 98.2663 163.2V167.68C98.2663 169.184 97.3063 170.112 95.8343 170.112ZM95.8343 169.024C96.6183 169.024 97.1143 168.528 97.1143 167.728V163.168C97.1143 162.368 96.6183 161.872 95.8343 161.872C95.0343 161.872 94.5543 162.368 94.5543 163.168V167.728C94.5543 168.528 95.0343 169.024 95.8343 169.024ZM102.398 170.112C100.91 170.112 99.9656 169.184 99.9656 167.68V160.88H101.118V167.712C101.118 168.528 101.598 169.024 102.398 169.024C103.182 169.024 103.678 168.528 103.678 167.712V160.88H104.83V167.68C104.83 169.184 103.87 170.112 102.398 170.112ZM106.559 170V163.2C106.559 161.696 107.503 160.768 108.991 160.768C110.463 160.768 111.423 161.696 111.423 163.2V170H110.271V163.168C110.271 162.368 109.775 161.872 108.991 161.872C108.191 161.872 107.711 162.368 107.711 163.168V170H106.559ZM113.892 170V161.968H112.372V160.88H113.892V158.944H115.044V160.88H116.564V161.968H115.044V170H113.892Z`,fill:`#0A0A0A`}),(0,i.jsx)(`rect`,{x:`63`,y:`25`,width:`53.9973`,height:`55.97`,rx:`7`,fill:`#A9FFE9`}),(0,i.jsx)(`g`,{clipPath:`url(#clip0_11693_5911)`,children:(0,i.jsx)(`path`,{d:`M92.4166 31C93.2811 31.2514 94.0231 31.9883 94.0345 32.9651L94.0506 34.4253L98.8505 34.431C100.362 34.4333 101.585 35.6421 101.585 37.173L101.591 47.3323C101.952 47.3632 102.405 47.5289 102.709 47.4809L104.658 47.177L104.52 46.3258C104.459 45.9499 104.71 45.6071 105.081 45.542L108.445 44.9502C108.797 44.8885 109.171 45.0964 109.238 45.478L111.874 60.1503V60.7341L111.531 61.11L107.919 61.7453C107.422 61.8321 107.076 61.4059 107.107 60.8449L106.491 60.9306C105.969 62.1063 105.232 63.0751 104.272 63.9286C104.339 64.8335 103.953 65.631 103.362 66.1725C102.682 66.7941 101.776 66.914 100.907 66.8021C100.817 67.6327 100.473 68.4599 99.857 68.9203C99.154 69.4447 98.3536 69.6538 97.4685 69.4367C97.4616 70.3599 97.0483 71.1014 96.4402 71.5915C95.7555 72.1422 94.9197 72.3181 94.0426 72.1079C94.0471 73.5418 93.0407 74.6295 91.7342 74.8751H90.8766C90.406 74.7323 89.964 74.5358 89.5163 74.2444C88.6815 74.6055 87.801 74.5998 86.9846 74.137C86.3377 73.7703 85.8064 73.0871 85.6518 72.2028C84.8068 72.7523 83.8495 72.8426 82.906 72.3913C82.2064 72.0565 81.6041 71.3436 81.429 70.3781C80.3389 71.0877 78.9637 70.9723 78.0385 70.1028C77.1317 69.2493 76.8729 67.8817 77.5679 66.7129C76.2557 66.3519 75.6088 65.1888 75.5492 63.9435C74.7225 63.0432 73.8283 62.1337 73.3886 60.9329L72.7955 60.8438C72.7267 61.1797 72.6684 61.4082 72.547 61.5579C72.4474 61.6813 72.1187 61.783 71.9504 61.7533L68.5268 61.1443C68.0779 61.0643 67.9486 60.645 68.0207 60.2314L70.6279 45.478C70.6943 45.1021 71.0756 44.8896 71.4168 44.949L74.7821 45.5397C75.1542 45.6049 75.405 45.9522 75.3443 46.3246L75.2057 47.1747L77.1523 47.4832C77.458 47.5311 77.9068 47.37 78.2744 47.3312L78.2698 37.2633C78.2698 35.6364 79.4824 34.4196 81.1072 34.423L85.8121 34.431C85.7594 32.7092 85.748 31.585 87.4449 31.0011H92.4166V31ZM92.672 34.4276L92.6754 33.0531C92.6628 32.6692 92.38 32.3802 91.9884 32.371H87.8743C87.4907 32.379 87.1896 32.6681 87.1896 33.0543V34.4287H92.672V34.4276ZM94.0345 41.2827L94.0471 40.5926C94.054 40.2156 94.3403 39.9128 94.7296 39.9128H97.4754C97.8601 39.9128 98.1544 40.2156 98.1578 40.5926L98.1647 41.2838C99.3486 41.2678 100.229 40.3161 100.223 39.145L100.213 37.1639C100.209 36.4121 99.6211 35.7997 98.8368 35.7997H81.027C80.2427 35.7997 79.6439 36.411 79.6473 37.165L79.6565 39.3187C79.661 40.4224 80.6183 41.2667 81.6912 41.2861L81.7049 40.5938C81.7118 40.2156 81.998 39.914 82.3873 39.914H85.1331C85.5213 39.914 85.8098 40.2167 85.8155 40.5949L85.827 41.285H94.0357L94.0345 41.2827ZM84.4449 41.2827H83.0732V42.6537H84.4449V41.2827ZM96.7872 41.2827H95.4154V42.6537H96.7872V41.2827ZM97.4364 44.0259L94.7296 44.0236C94.3426 44.0236 94.0529 43.722 94.0471 43.3438L94.0368 42.6537H85.8258L85.8236 43.2604C85.8224 43.6694 85.5739 44.0247 85.1308 44.0247H82.3873C82.0026 44.0247 81.7072 43.722 81.7049 43.3449L81.7003 42.656C80.9446 42.6389 80.3183 42.4286 79.6507 41.9659L79.645 47.1221L84.8617 46.3235C86.048 46.1418 87.1999 46.3144 88.2899 46.7805L89.9331 47.4786L91.6357 46.7554C92.7063 46.3029 93.8399 46.1453 95.0032 46.3212L100.218 47.1118L100.215 41.9568C99.5914 42.4058 98.933 42.64 98.1635 42.6537L98.1566 43.3404C98.1532 43.7265 97.8635 44.0247 97.4364 44.0247V44.0259ZM71.8474 46.4058L69.452 59.9172L71.4981 60.2794L73.8935 46.7679L71.8474 46.4058ZM108.018 46.4069L105.981 46.7657L108.362 60.2817L110.399 59.9229L108.018 46.4069ZM92.8815 64.95L97.386 67.9286C98.0559 68.3719 98.9215 68.1274 99.3062 67.4956C99.7047 66.8398 99.4998 66.0411 98.8494 65.6104L94.3174 62.6113C93.975 62.3851 93.8949 61.9749 94.0907 61.6687C94.259 61.4036 94.6758 61.2083 94.9964 61.4196L100.821 65.2654C101.47 65.6938 102.311 65.4676 102.715 64.8289C103.044 64.3102 103.002 63.4339 102.375 63.018L94.7651 57.9715C92.6628 57.5853 91.0403 56.1366 90.3705 54.1418L87.8732 54.6502L86.6674 56.4428C85.6438 57.9658 83.632 58.4011 82.0622 57.4677C81.0396 56.8598 80.6824 55.5539 81.3488 54.5485L83.9423 50.6365C84.3121 50.0778 84.8354 49.6574 85.4411 49.3969L88.1388 48.2361C87.193 47.7528 86.2404 47.5106 85.2304 47.6637L77.0824 48.8919L74.9573 48.532L73.0313 59.4579L73.9909 59.643C74.1729 59.6784 74.4042 59.8795 74.4832 60.0703C74.8588 60.9706 75.3718 61.7681 76.045 62.5005L77.0412 61.5602L79.0885 59.8361C80.0698 59.0089 81.4038 58.8798 82.4641 59.5905C83.5243 60.3011 83.9423 61.5807 83.5186 62.7712C84.8354 62.9952 85.7881 64.0897 85.7949 65.4733C87.3075 65.2528 88.6415 66.1828 88.9254 67.7195C89.8415 67.1597 90.9155 67.1003 91.8556 67.6521C92.6536 68.1205 93.201 69.0323 93.1792 70.0765L93.9006 70.5667C94.5635 71.0168 95.4269 70.8557 95.854 70.2113C96.2811 69.567 96.1185 68.7443 95.4658 68.3113L92.0674 66.0583C91.7067 65.8183 91.638 65.3785 91.8876 65.0563C92.1224 64.7547 92.5014 64.701 92.8815 64.9535V64.95ZM99.7253 55.2317C100.091 54.9998 100.522 55.2055 100.672 55.5139C100.822 55.8224 100.73 56.2006 100.426 56.3994L99.3864 57.0838C98.7383 57.5099 98.0318 57.7716 97.2578 57.9784L103.214 61.9258C103.432 62.0697 103.602 62.3039 103.781 62.5267C104.435 61.8458 104.972 61.038 105.347 60.1286C105.46 59.8578 105.678 59.6761 105.952 59.6236L106.83 59.4556L104.904 48.5263L102.781 48.8953L94.9219 47.6945C93.8788 47.5346 92.9697 47.6774 92.0101 48.0864L86.0743 50.6182C85.6381 50.8045 85.2934 51.0878 85.0358 51.4763L82.4778 55.338C82.306 55.5973 82.3839 56.0189 82.6404 56.204C83.5243 56.8427 84.8446 56.6907 85.4663 55.7664L87.0339 53.438L90.7002 52.6736C91.0987 52.5902 91.4582 52.8313 91.5395 53.214C91.7949 54.4183 92.4899 55.4522 93.5605 56.0795C95.0948 56.9787 96.9899 56.9695 98.4921 56.0167L99.7253 55.2352V55.2317ZM79.2454 65.0848L81.7381 62.9975C82.3599 62.4776 82.527 61.6379 81.9992 60.9946C81.5457 60.4428 80.6652 60.3102 80.0698 60.813L77.3721 63.0866C76.7813 63.5847 76.8408 64.5296 77.3401 65.03C77.8393 65.5304 78.6397 65.5921 79.2465 65.0837L79.2454 65.0848ZM80.8129 69.1385L83.9514 66.4959C84.532 66.0069 84.5171 65.1111 84.0614 64.5901C83.5827 64.0429 82.7331 63.9458 82.1492 64.4382L78.9477 67.1391C78.3557 67.6384 78.4507 68.565 78.9122 69.0425C79.4137 69.5624 80.2152 69.6401 80.8129 69.1374V69.1385ZM84.9877 70.9997L87.1896 69.1362C87.769 68.6461 87.6762 67.7286 87.2251 67.2476C86.7316 66.7221 85.914 66.6524 85.3518 67.1231L83.2988 68.8392C82.6896 69.3476 82.5912 70.1771 83.048 70.7689C83.5049 71.3607 84.374 71.5184 84.9877 70.9997ZM89.3125 72.7546L91.2899 71.0899C91.8922 70.5838 92.0101 69.7406 91.5121 69.1339C91.0769 68.6038 90.2113 68.4256 89.6262 68.9157L87.4346 70.7518C86.8323 71.2567 86.8598 72.1993 87.3842 72.7215C87.9087 73.2436 88.7022 73.2676 89.3125 72.7546ZM90.7346 73.3544C91.2338 73.6195 91.8155 73.5064 92.2036 73.1659C92.5952 72.8231 92.7681 72.2816 92.6159 71.7515L90.7346 73.3544Z`,fill:`#27D3A7`})}),(0,i.jsx)(`defs`,{children:(0,i.jsx)(`clipPath`,{id:`clip0_11693_5911`,children:(0,i.jsx)(`rect`,{width:`43.8728`,height:`43.8728`,fill:`white`,transform:`translate(68 31)`})})})]})}),(0,i.jsx)(`div`,{className:`kka-category-svg-card`,children:(0,i.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`180`,height:`190`,viewBox:`0 0 180 190`,fill:`none`,children:[(0,i.jsx)(`rect`,{width:`180`,height:`190`,rx:`10`,fill:`#E0E0F9`}),(0,i.jsx)(`path`,{d:`M33.9402 101.72H37.5402V106.52C37.5402 108.74 36.1602 110.14 33.9402 110.14C31.7002 110.14 30.3202 108.74 30.3202 106.52V99.06C30.3202 96.84 31.7002 95.44 33.9402 95.44C36.1602 95.44 37.5402 96.84 37.5402 99.06V100.18H35.4802V99.06C35.4802 98.04 34.9202 97.42 33.9402 97.42C32.9402 97.42 32.3802 98.04 32.3802 99.06V106.52C32.3802 107.54 32.9402 108.16 33.9402 108.16C34.9202 108.16 35.4802 107.54 35.4802 106.52V103.56H33.9402V101.72ZM39.6552 110V101.34C39.6552 99.4 40.3552 98.5 42.6752 98.5H43.4752V100.44H42.6752C41.8952 100.44 41.7152 100.9 41.7152 101.34V110H39.6552ZM46.8315 101.52V107C46.8315 107.72 47.2515 108.16 47.9715 108.16C48.6715 108.16 49.1115 107.72 49.1115 107V101.52C49.1115 100.8 48.6715 100.34 47.9715 100.34C47.2515 100.34 46.8315 100.8 46.8315 101.52ZM51.1715 101.56V106.94C51.1715 108.92 49.9115 110.14 47.9715 110.14C46.0115 110.14 44.7715 108.92 44.7715 106.94V101.56C44.7715 99.58 46.0115 98.36 47.9715 98.36C49.9115 98.36 51.1715 99.58 51.1715 101.56ZM53.2099 98.5H55.2699V107.2C55.2699 107.82 55.6699 108.2 56.2899 108.2C56.8699 108.2 57.2899 107.82 57.2899 107.2V98.5H59.3499V107.2C59.3499 107.84 59.7699 108.2 60.3499 108.2C60.9499 108.2 61.3699 107.82 61.3699 107.2V98.5H63.4299V107.32C63.4299 109.06 62.2499 110.14 60.4699 110.14C59.6699 110.14 58.8099 109.92 58.3099 109.42C57.7699 109.92 56.9299 110.14 56.1699 110.14C54.3899 110.14 53.2099 109.06 53.2099 107.32V98.5ZM70.0546 100.44H68.3946V110H66.3346V100.44H64.6746V98.5H66.3346V96.18H68.3946V98.5H70.0546V100.44ZM77.7359 110H75.6759V101.52C75.6759 100.8 75.2359 100.34 74.5359 100.34C73.8159 100.34 73.3959 100.8 73.3959 101.52V110H71.3359V95.58H73.3959V98.72C73.7959 98.5 74.2959 98.36 74.8359 98.36C76.5959 98.36 77.7359 99.38 77.7359 101.56V110ZM89.0193 95.58V97.52H84.9993V101.52H87.8793V103.46H84.9993V108.06H89.1193V110H82.9393V95.58H89.0193ZM92.8285 110H90.7685V101.56C90.7685 99.58 92.0085 98.36 93.9685 98.36C95.9085 98.36 97.1685 99.58 97.1685 101.56V110H95.1085V101.52C95.1085 100.8 94.6685 100.34 93.9685 100.34C93.2485 100.34 92.8285 100.8 92.8285 101.52V110ZM103.687 100.44H102.027V110H99.9674V100.44H98.3074V98.5H99.9674V96.18H102.027V98.5H103.687V100.44ZM111.191 101.56V105.32H106.851V107.04C106.851 107.76 107.271 108.2 107.991 108.2C108.691 108.2 109.131 107.76 109.131 107.04V106.18H111.191V106.94C111.191 108.92 109.931 110.14 107.991 110.14C106.031 110.14 104.791 108.92 104.791 106.94V101.56C104.791 99.58 106.031 98.36 107.991 98.36C109.931 98.36 111.191 99.58 111.191 101.56ZM106.851 101.48V103.48H109.131V101.48C109.131 100.76 108.691 100.3 107.991 100.3C107.271 100.3 106.851 100.76 106.851 101.48ZM113.229 110V101.34C113.229 99.4 113.929 98.5 116.249 98.5H117.049V100.44H116.249C115.469 100.44 115.289 100.9 115.289 101.34V110H113.229ZM124.786 101.56V106.94C124.786 109.12 123.646 110.14 121.886 110.14C121.346 110.14 120.846 110 120.446 109.78V112.92H118.386V101.56C118.386 99.58 119.626 98.36 121.586 98.36C123.526 98.36 124.786 99.58 124.786 101.56ZM120.446 101.5V106.98C120.446 107.7 120.866 108.16 121.586 108.16C122.286 108.16 122.726 107.7 122.726 106.98V101.5C122.726 100.78 122.286 100.34 121.586 100.34C120.866 100.34 120.446 100.78 120.446 101.5ZM126.823 110V101.34C126.823 99.4 127.523 98.5 129.843 98.5H130.643V100.44H129.843C129.063 100.44 128.883 100.9 128.883 101.34V110H126.823ZM134.219 96.18C134.219 96.82 133.699 97.34 133.079 97.34C132.439 97.34 131.919 96.82 131.919 96.2C131.919 95.56 132.439 95.04 133.059 95.04C133.699 95.04 134.219 95.56 134.219 96.18ZM134.079 110H132.019V98.5H134.079V110ZM139.258 108.2C140.038 108.2 140.398 107.66 140.398 107.06C140.398 106.5 140.158 106.06 139.658 105.72L137.698 104.32C136.638 103.58 136.058 102.56 136.058 101.46C136.058 99.64 137.258 98.36 139.138 98.36C141.038 98.36 142.238 99.58 142.238 101.56V102.42H140.178V101.52C140.178 100.78 139.778 100.3 139.138 100.3C138.498 100.3 138.118 100.72 138.118 101.42C138.118 101.86 138.318 102.28 138.758 102.6L140.758 104C142.018 104.86 142.458 105.82 142.458 106.94C142.458 108.92 141.218 110.14 139.258 110.14C137.298 110.14 136.058 108.92 136.058 106.94V106.08H138.118V107C138.118 107.74 138.558 108.2 139.258 108.2ZM150.761 101.56V105.32H146.421V107.04C146.421 107.76 146.841 108.2 147.561 108.2C148.261 108.2 148.701 107.76 148.701 107.04V106.18H150.761V106.94C150.761 108.92 149.501 110.14 147.561 110.14C145.601 110.14 144.361 108.92 144.361 106.94V101.56C144.361 99.58 145.601 98.36 147.561 98.36C149.501 98.36 150.761 99.58 150.761 101.56ZM146.421 101.48V103.48H148.701V101.48C148.701 100.76 148.261 100.3 147.561 100.3C146.841 100.3 146.421 100.76 146.421 101.48ZM42.773 129.112C41.077 129.112 40.021 128.04 40.021 126.36V120.104C40.021 118.424 41.077 117.352 42.773 117.352C44.469 117.352 45.525 118.424 45.525 120.104V126.36C45.525 128.04 44.469 129.112 42.773 129.112ZM42.773 128.024C43.781 128.024 44.373 127.384 44.373 126.36V120.104C44.373 119.08 43.781 118.44 42.773 118.44C41.749 118.44 41.173 119.08 41.173 120.104V126.36C41.173 127.384 41.749 128.024 42.773 128.024ZM47.2859 129V122.184C47.2859 120.584 47.9739 119.88 49.6379 119.88H50.0699V120.952H49.6379C48.8059 120.952 48.4379 121.4 48.4379 122.168V129H47.2859ZM51.1609 131.416V130.376H54.8409V128.536C54.4889 128.888 53.9769 129.048 53.4009 129.048C52.0409 129.048 51.1289 128.216 51.1289 126.616V122.216C51.1289 120.712 52.0889 119.784 53.5609 119.784C55.0489 119.784 55.9929 120.712 55.9929 122.216V131.416H51.1609ZM53.5609 127.96C54.3609 127.96 54.8409 127.496 54.8409 126.68V122.168C54.8409 121.368 54.3609 120.872 53.5609 120.872C52.7609 120.872 52.2809 121.368 52.2809 122.168V126.648C52.2809 127.448 52.7609 127.96 53.5609 127.96ZM60.1234 129.112C58.6514 129.112 57.6914 128.184 57.6914 126.68V126.152C57.6914 124.552 58.6034 123.72 59.9634 123.72C60.5394 123.72 61.0514 123.896 61.4034 124.232V122.168C61.4034 121.368 60.9394 120.872 60.1714 120.872C59.4034 120.872 58.9394 121.368 58.9394 122.168V123.016H57.7874V122.2C57.7874 120.696 58.7154 119.768 60.1714 119.768C61.6274 119.768 62.5554 120.696 62.5554 122.2V126.68C62.5554 128.184 61.6114 129.112 60.1234 129.112ZM60.1234 128.024C60.9234 128.024 61.4034 127.528 61.4034 126.728V126.12C61.4034 125.288 60.9234 124.824 60.1234 124.824C59.3234 124.824 58.8434 125.32 58.8434 126.12V126.728C58.8434 127.528 59.3234 128.024 60.1234 128.024ZM64.2546 129V122.2C64.2546 120.696 65.1986 119.768 66.6866 119.768C68.1586 119.768 69.1186 120.696 69.1186 122.2V129H67.9666V122.168C67.9666 121.368 67.4706 120.872 66.6866 120.872C65.8866 120.872 65.4066 121.368 65.4066 122.168V129H64.2546ZM70.8804 129V119.88H72.0324V129H70.8804ZM71.4724 118.552C71.0724 118.552 70.7524 118.232 70.7524 117.832C70.7524 117.448 71.0724 117.128 71.4564 117.128C71.8564 117.128 72.1764 117.448 72.1764 117.832C72.1764 118.232 71.8564 118.552 71.4724 118.552ZM76.1059 129.112C74.6179 129.112 73.6739 128.184 73.6739 126.68V125.816H74.8259V126.728C74.8259 127.544 75.3059 128.04 76.1059 128.04C76.9379 128.04 77.3859 127.496 77.3859 126.76C77.3859 126.232 77.1779 125.8 76.6499 125.448L74.9059 124.232C74.1059 123.672 73.6739 122.92 73.6739 122.12C73.6739 120.744 74.5859 119.768 76.0419 119.768C77.4819 119.768 78.4099 120.696 78.4099 122.2V123.064H77.2579V122.168C77.2579 121.352 76.7939 120.84 76.0419 120.84C75.2899 120.84 74.8259 121.32 74.8259 122.088C74.8259 122.504 75.0499 122.936 75.4979 123.256L77.2419 124.472C78.2019 125.144 78.5379 125.832 78.5379 126.68C78.5379 128.184 77.5939 129.112 76.1059 129.112ZM82.5609 129.112C81.0889 129.112 80.1289 128.184 80.1289 126.68V126.152C80.1289 124.552 81.0409 123.72 82.4009 123.72C82.9769 123.72 83.4889 123.896 83.8409 124.232V122.168C83.8409 121.368 83.3769 120.872 82.6089 120.872C81.8409 120.872 81.3769 121.368 81.3769 122.168V123.016H80.2249V122.2C80.2249 120.696 81.1529 119.768 82.6089 119.768C84.0649 119.768 84.9929 120.696 84.9929 122.2V126.68C84.9929 128.184 84.0489 129.112 82.5609 129.112ZM82.5609 128.024C83.3609 128.024 83.8409 127.528 83.8409 126.728V126.12C83.8409 125.288 83.3609 124.824 82.5609 124.824C81.7609 124.824 81.2809 125.32 81.2809 126.12V126.728C81.2809 127.528 81.7609 128.024 82.5609 128.024ZM87.4308 129V120.968H85.9108V119.88H87.4308V117.944H88.5828V119.88H90.1028V120.968H88.5828V129H87.4308ZM91.1929 129V119.88H92.3449V129H91.1929ZM91.7849 118.552C91.3849 118.552 91.0649 118.232 91.0649 117.832C91.0649 117.448 91.3849 117.128 91.7689 117.128C92.1689 117.128 92.4889 117.448 92.4889 117.832C92.4889 118.232 92.1689 118.552 91.7849 118.552ZM96.4984 129.112C95.0104 129.112 94.0664 128.184 94.0664 126.68V122.2C94.0664 120.696 95.0104 119.768 96.4984 119.768C97.9704 119.768 98.9304 120.696 98.9304 122.2V126.68C98.9304 128.184 97.9704 129.112 96.4984 129.112ZM96.4984 128.024C97.2824 128.024 97.7784 127.528 97.7784 126.728V122.168C97.7784 121.368 97.2824 120.872 96.4984 120.872C95.6984 120.872 95.2184 121.368 95.2184 122.168V126.728C95.2184 127.528 95.6984 128.024 96.4984 128.024ZM100.63 129V122.2C100.63 120.696 101.574 119.768 103.062 119.768C104.534 119.768 105.494 120.696 105.494 122.2V129H104.342V122.168C104.342 121.368 103.846 120.872 103.062 120.872C102.262 120.872 101.782 121.368 101.782 122.168V129H100.63ZM109.543 129.112C108.055 129.112 107.111 128.184 107.111 126.68V125.816H108.263V126.728C108.263 127.544 108.743 128.04 109.543 128.04C110.375 128.04 110.823 127.496 110.823 126.76C110.823 126.232 110.615 125.8 110.087 125.448L108.343 124.232C107.543 123.672 107.111 122.92 107.111 122.12C107.111 120.744 108.023 119.768 109.479 119.768C110.919 119.768 111.847 120.696 111.847 122.2V123.064H110.695V122.168C110.695 121.352 110.231 120.84 109.479 120.84C108.727 120.84 108.263 121.32 108.263 122.088C108.263 122.504 108.487 122.936 108.935 123.256L110.679 124.472C111.639 125.144 111.975 125.832 111.975 126.68C111.975 128.184 111.031 129.112 109.543 129.112ZM116.13 126.856V119.88H117.282V126.808C117.282 127.576 117.746 128.04 118.482 128.04C119.202 128.04 119.682 127.576 119.682 126.792V119.88H120.914V126.792C120.914 127.592 121.394 128.04 122.114 128.04C122.834 128.04 123.314 127.576 123.314 126.808V119.88H124.466V126.856C124.466 128.248 123.538 129.112 122.146 129.112C121.362 129.112 120.658 128.84 120.258 128.28C119.858 128.84 119.186 129.112 118.45 129.112C117.042 129.112 116.13 128.248 116.13 126.856ZM126.224 129V119.88H127.376V129H126.224ZM126.816 118.552C126.416 118.552 126.096 118.232 126.096 117.832C126.096 117.448 126.416 117.128 126.8 117.128C127.2 117.128 127.52 117.448 127.52 117.832C127.52 118.232 127.2 118.552 126.816 118.552ZM129.978 129V120.968H128.458V119.88H129.978V117.944H131.13V119.88H132.65V120.968H131.13V129H129.978ZM133.74 129V117.464H134.892V120.28C135.244 119.944 135.756 119.768 136.332 119.768C137.692 119.768 138.604 120.6 138.604 122.2V129H137.452V122.168C137.452 121.368 136.956 120.872 136.172 120.872C135.372 120.872 134.892 121.336 134.892 122.168V129H133.74ZM62.498 151.34L66.338 146.08C66.718 145.58 66.838 145.08 66.838 144.46V141.56C66.838 140.84 66.378 140.38 65.698 140.38C65.038 140.38 64.558 140.84 64.558 141.56V144.98H62.498V141.64C62.498 139.68 63.738 138.44 65.698 138.44C67.658 138.44 68.898 139.68 68.898 141.64V144.34C68.898 145.58 68.718 146.26 68.238 146.92L66.158 149.8C65.598 150.56 65.198 151.06 65.198 151.06H68.898V153H62.498V151.34ZM75.3927 150.02V141.56C75.3927 140.84 74.9127 140.38 74.2527 140.38C73.5727 140.38 73.1127 140.84 73.1127 141.56V150.02C73.1127 150.74 73.5727 151.2 74.2527 151.2C74.9127 151.2 75.3927 150.74 75.3927 150.02ZM71.0527 149.94V141.64C71.0527 139.68 72.2927 138.44 74.2527 138.44C76.2127 138.44 77.4527 139.68 77.4527 141.64V149.94C77.4527 151.9 76.2127 153.14 74.2527 153.14C72.2927 153.14 71.0527 151.9 71.0527 149.94ZM83.9473 150.02V141.56C83.9473 140.84 83.4673 140.38 82.8073 140.38C82.1273 140.38 81.6673 140.84 81.6673 141.56V150.02C81.6673 150.74 82.1273 151.2 82.8073 151.2C83.4673 151.2 83.9473 150.74 83.9473 150.02ZM79.6073 149.94V141.64C79.6073 139.68 80.8473 138.44 82.8073 138.44C84.7673 138.44 86.0073 139.68 86.0073 141.64V149.94C86.0073 151.9 84.7673 153.14 82.8073 153.14C80.8473 153.14 79.6073 151.9 79.6073 149.94ZM93.322 148.06H87.682V146.56H93.322V148.06ZM98.198 138.44C100.158 138.44 101.398 139.68 101.398 141.64V149.94C101.398 151.9 100.198 153.14 98.278 153.14C96.358 153.14 95.158 151.9 95.158 149.94V149.22H97.218V150.02C97.218 150.74 97.638 151.2 98.278 151.2C98.898 151.2 99.338 150.74 99.338 150.02V147.52C98.958 147.74 98.438 147.84 97.898 147.84C96.118 147.84 94.998 146.6 94.998 144.64V141.64C94.998 139.68 96.238 138.44 98.198 138.44ZM98.198 145.9C98.858 145.9 99.338 145.44 99.338 144.72V141.56C99.338 140.84 98.878 140.38 98.198 140.38C97.538 140.38 97.058 140.84 97.058 141.56V144.72C97.058 145.44 97.538 145.9 98.198 145.9ZM106.753 138.44C108.713 138.44 109.953 139.68 109.953 141.64V149.94C109.953 151.9 108.753 153.14 106.833 153.14C104.913 153.14 103.713 151.9 103.713 149.94V149.22H105.773V150.02C105.773 150.74 106.193 151.2 106.833 151.2C107.453 151.2 107.893 150.74 107.893 150.02V147.52C107.513 147.74 106.993 147.84 106.453 147.84C104.673 147.84 103.553 146.6 103.553 144.64V141.64C103.553 139.68 104.793 138.44 106.753 138.44ZM106.753 145.9C107.413 145.9 107.893 145.44 107.893 144.72V141.56C107.893 140.84 107.433 140.38 106.753 140.38C106.093 140.38 105.613 140.84 105.613 141.56V144.72C105.613 145.44 106.093 145.9 106.753 145.9ZM115.307 138.44C117.267 138.44 118.507 139.68 118.507 141.64V149.94C118.507 151.9 117.307 153.14 115.387 153.14C113.467 153.14 112.267 151.9 112.267 149.94V149.22H114.327V150.02C114.327 150.74 114.747 151.2 115.387 151.2C116.007 151.2 116.447 150.74 116.447 150.02V147.52C116.067 147.74 115.547 147.84 115.007 147.84C113.227 147.84 112.107 146.6 112.107 144.64V141.64C112.107 139.68 113.347 138.44 115.307 138.44ZM115.307 145.9C115.967 145.9 116.447 145.44 116.447 144.72V141.56C116.447 140.84 115.987 140.38 115.307 140.38C114.647 140.38 114.167 140.84 114.167 141.56V144.72C114.167 145.44 114.647 145.9 115.307 145.9ZM62.9507 172V160.464H64.1027V163.28C64.4547 162.944 64.9667 162.768 65.5427 162.768C66.9027 162.768 67.8147 163.6 67.8147 165.2V172H66.6627V165.168C66.6627 164.368 66.1667 163.872 65.3827 163.872C64.5827 163.872 64.1027 164.336 64.1027 165.168V172H62.9507ZM71.9437 172.112C70.4557 172.112 69.5117 171.184 69.5117 169.68V165.2C69.5117 163.696 70.4557 162.768 71.9437 162.768C73.4157 162.768 74.3757 163.696 74.3757 165.2V167.952H70.6637V169.744C70.6637 170.544 71.1437 171.04 71.9437 171.04C72.7277 171.04 73.2237 170.544 73.2237 169.744V168.864H74.3757V169.68C74.3757 171.184 73.4157 172.112 71.9437 172.112ZM70.6637 166.928H73.2237V165.152C73.2237 164.336 72.7277 163.84 71.9437 163.84C71.1437 163.84 70.6637 164.336 70.6637 165.152V166.928ZM78.4749 172.112C77.0029 172.112 76.0429 171.184 76.0429 169.68V169.152C76.0429 167.552 76.9549 166.72 78.3149 166.72C78.8909 166.72 79.4029 166.896 79.7549 167.232V165.168C79.7549 164.368 79.2909 163.872 78.5229 163.872C77.7549 163.872 77.2909 164.368 77.2909 165.168V166.016H76.1389V165.2C76.1389 163.696 77.0669 162.768 78.5229 162.768C79.9789 162.768 80.9069 163.696 80.9069 165.2V169.68C80.9069 171.184 79.9629 172.112 78.4749 172.112ZM78.4749 171.024C79.2749 171.024 79.7549 170.528 79.7549 169.728V169.12C79.7549 168.288 79.2749 167.824 78.4749 167.824C77.6749 167.824 77.1949 168.32 77.1949 169.12V169.728C77.1949 170.528 77.6749 171.024 78.4749 171.024ZM85.0062 172.112C83.5342 172.112 82.5742 171.184 82.5742 169.68V165.2C82.5742 163.6 83.4862 162.768 84.8462 162.768C85.4222 162.768 85.9342 162.944 86.2862 163.28V160.464H87.4382V169.68C87.4382 171.184 86.4942 172.112 85.0062 172.112ZM85.0062 171.024C85.8062 171.024 86.2862 170.528 86.2862 169.728V165.136C86.2862 164.32 85.8062 163.872 85.0062 163.872C84.2222 163.872 83.7262 164.368 83.7262 165.168V169.728C83.7262 170.528 84.2222 171.024 85.0062 171.024ZM91.5687 172.112C90.0807 172.112 89.1367 171.184 89.1367 169.68V165.2C89.1367 163.696 90.0807 162.768 91.5687 162.768C93.0407 162.768 94.0007 163.696 94.0007 165.2V166.144H92.8487V165.168C92.8487 164.368 92.3527 163.872 91.5687 163.872C90.7687 163.872 90.2887 164.368 90.2887 165.168V169.728C90.2887 170.528 90.7687 171.024 91.5687 171.024C92.3527 171.024 92.8487 170.528 92.8487 169.728V168.736H94.0007V169.68C94.0007 171.184 93.0407 172.112 91.5687 172.112ZM98.0218 172.112C96.5338 172.112 95.5898 171.184 95.5898 169.68V165.2C95.5898 163.696 96.5338 162.768 98.0218 162.768C99.4938 162.768 100.454 163.696 100.454 165.2V169.68C100.454 171.184 99.4938 172.112 98.0218 172.112ZM98.0218 171.024C98.8058 171.024 99.3018 170.528 99.3018 169.728V165.168C99.3018 164.368 98.8058 163.872 98.0218 163.872C97.2218 163.872 96.7418 164.368 96.7418 165.168V169.728C96.7418 170.528 97.2218 171.024 98.0218 171.024ZM104.585 172.112C103.097 172.112 102.153 171.184 102.153 169.68V162.88H103.305V169.712C103.305 170.528 103.785 171.024 104.585 171.024C105.369 171.024 105.865 170.528 105.865 169.712V162.88H107.017V169.68C107.017 171.184 106.057 172.112 104.585 172.112ZM108.747 172V165.2C108.747 163.696 109.691 162.768 111.179 162.768C112.651 162.768 113.611 163.696 113.611 165.2V172H112.459V165.168C112.459 164.368 111.963 163.872 111.179 163.872C110.379 163.872 109.899 164.368 109.899 165.168V172H108.747ZM116.079 172V163.968H114.559V162.88H116.079V160.944H117.231V162.88H118.751V163.968H117.231V172H116.079Z`,fill:`#0A0A0A`}),(0,i.jsx)(`rect`,{x:`63`,y:`25`,width:`53.9973`,height:`55.97`,rx:`7`,fill:`#D7D7FF`}),(0,i.jsxs)(`g`,{clipPath:`url(#clip0_11693_5778)`,children:[(0,i.jsx)(`path`,{d:`M112.498 69.38V71.3991C112.246 72.371 111.456 73.0798 110.372 73.0798H69.6268C68.5429 73.0798 67.7508 72.371 67.5 71.3649V69.3647C67.5867 69.2444 67.8527 68.9236 68.0226 68.9224L71.0237 68.913L71.0295 44.695C71.0295 43.1936 72.2869 41.9776 73.7399 41.9753L82.2555 41.9658C82.6832 41.9658 82.9375 42.3479 82.9012 42.6912C82.8613 43.0686 82.5848 43.2938 82.1735 43.2938H73.8348C72.9982 43.2938 72.3419 43.9177 72.3419 44.787V68.913L74.6 68.9177C74.3376 67.0412 75.0442 65.2497 76.3437 64.0361C77.7054 62.7623 79.5334 62.2717 81.3743 62.6703C82.3926 60.7491 84.5687 59.9353 86.5479 60.6819C86.753 58.8738 88.274 57.5505 90.0422 57.5706C91.8105 57.5906 93.2495 58.9033 93.4534 60.6819C95.4291 59.9353 97.6087 60.7514 98.627 62.6703C100.49 62.2658 102.339 62.7765 103.703 64.0786C104.991 65.3087 105.656 67.1085 105.402 68.92L107.658 68.913V44.8778C107.661 43.9708 107.071 43.295 106.162 43.295H97.7387C97.3321 43.2938 97.0919 42.9577 97.0954 42.6098C97.0989 42.2996 97.352 41.967 97.7446 41.967H106.17C107.728 41.9682 108.975 43.19 108.975 44.787V68.9141L111.976 68.9236C112.146 68.9236 112.412 69.2455 112.499 69.3812L112.498 69.38ZM110.4 71.753C110.913 71.753 111.185 71.3461 111.177 70.9687L111.16 70.2445H80.1744C79.7373 70.2445 79.4982 69.9402 79.483 69.5805C79.4713 69.2915 79.6869 68.9165 80.0888 68.9165H104.062C104.345 67.3797 103.743 65.8382 102.633 64.8912C101.439 63.8733 99.8785 63.6115 98.4067 64.1104C98.0598 64.2283 97.7176 63.963 97.611 63.654C97.297 62.747 96.5505 62.103 95.7841 61.8672C94.7588 61.5511 93.826 61.8106 93.0608 62.4463C92.8253 62.642 92.4245 62.5972 92.2253 62.3967C92.0507 62.221 91.9816 61.9061 92.0625 61.6336C92.339 60.7149 91.95 59.7902 91.2398 59.2961C90.4547 58.75 89.4704 58.7665 88.7052 59.335C88.0302 59.835 87.6623 60.7444 87.9341 61.6301C88.0349 61.9568 87.9283 62.3142 87.6728 62.4757C87.4174 62.6373 87.0752 62.5748 86.8338 62.3767C86.0862 61.7634 85.1394 61.5641 84.1515 61.8896C83.4133 62.1325 82.695 62.7753 82.3879 63.6516C82.2602 64.016 81.9028 64.2248 81.5208 64.0962C80.0537 63.6009 78.4846 63.9099 77.3187 64.9348C76.23 65.8913 75.6617 67.3927 75.9359 68.9141L77.3503 68.9236C77.7264 68.9259 77.9784 69.2609 77.976 69.5899C77.9737 69.893 77.7229 70.2457 77.3351 70.2457L68.8288 70.248L68.8218 70.9639C68.8171 71.4145 69.1464 71.7565 69.6327 71.7565H110.4V71.753Z`,fill:`#3A38FF`}),(0,i.jsx)(`path`,{d:`M92.8291 56.0598L87.2055 56.0645C86.786 56.0645 86.438 55.6788 86.54 55.2649L87.1306 52.8494L86.5564 51.8988L81.8726 54.5572C81.6769 54.6681 81.3758 54.6539 81.2129 54.556C81.05 54.4581 80.8848 54.181 80.8848 53.9852V51.9342C80.8941 51.2702 81.1016 50.6416 81.5257 50.1297L84.6557 46.3485C83.7452 40.6567 85.4267 34.9743 89.4707 30.89C89.7554 30.5374 90.2452 30.5386 90.5312 30.89C94.5739 34.9731 96.2555 40.6602 95.345 46.3509L98.4362 50.0814C98.8757 50.6109 99.1136 51.2407 99.1159 51.9377V53.984C99.1159 54.214 98.9237 54.5006 98.7269 54.5891C98.5124 54.6858 98.2429 54.6221 98.0109 54.49L93.449 51.8953L92.8689 52.8518L93.4513 55.2012C93.5451 55.5809 93.3189 56.0598 92.8314 56.061L92.8291 56.0598ZM92.7201 36.2952C91.9948 34.7962 91.1323 33.4706 89.9992 32.2404C88.8695 33.4717 88 34.795 87.277 36.2952H92.7189H92.7201ZM91.9116 51.8941C94.5247 47.5397 94.9513 42.3197 93.2627 37.6209H86.7356C85.033 42.3362 85.4912 47.6022 88.095 51.9L91.9116 51.8941ZM82.2159 52.8365L85.9693 50.7041C85.5826 49.7924 85.2849 48.942 85.0049 48.0021L82.5792 50.927C82.3999 51.1747 82.2031 51.5485 82.2066 51.8375L82.2171 52.8365H82.2159ZM97.8011 52.051C97.8093 51.6618 97.6664 51.2737 97.4601 50.9754L94.9946 48.0021C94.7122 48.9444 94.4181 49.7912 94.0314 50.7029L97.7847 52.8329L97.8011 52.051ZM91.9713 54.7341L91.5952 53.2268H88.3996L88.0328 54.7353L91.9713 54.7329V54.7341Z`,fill:`#3A38FF`}),(0,i.jsx)(`path`,{d:`M92.7698 42.6319C92.7698 44.1722 91.5289 45.42 89.9997 45.42C88.4704 45.42 87.2295 44.171 87.2295 42.6319C87.2295 41.0927 88.4704 39.8438 89.9997 39.8438C91.5289 39.8438 92.7698 41.0927 92.7698 42.6319ZM91.4527 42.6331C91.4527 41.8252 90.8024 41.1706 89.9997 41.1706C89.197 41.1706 88.5466 41.8252 88.5466 42.6331C88.5466 43.4409 89.197 44.0955 89.9997 44.0955C90.8024 44.0955 91.4527 43.4409 91.4527 42.6331Z`,fill:`#3A38FF`})]}),(0,i.jsx)(`defs`,{children:(0,i.jsx)(`clipPath`,{id:`clip0_11693_5778`,children:(0,i.jsx)(`rect`,{width:`44.9978`,height:`43.8728`,fill:`white`,transform:`translate(67.5 30.6245)`})})})]})}),(0,i.jsx)(`div`,{className:`kka-category-svg-card`,children:(0,i.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`180`,height:`190`,viewBox:`0 0 180 190`,fill:`none`,children:[(0,i.jsx)(`rect`,{width:`180`,height:`190`,rx:`10`,fill:`#F9DFDD`}),(0,i.jsx)(`path`,{d:`M36.5545 93.58V95.52H32.5345V99.52H35.4145V101.46H32.5345V106.06H36.6545V108H30.4745V93.58H36.5545ZM40.3637 108H38.3037V99.18C38.3037 97.44 39.4837 96.36 41.2637 96.36C42.0237 96.36 42.8637 96.58 43.4037 97.08C43.9037 96.58 44.7637 96.36 45.5637 96.36C47.3437 96.36 48.5237 97.44 48.5237 99.18V108H46.4637V99.3C46.4637 98.68 46.0437 98.3 45.4437 98.3C44.8637 98.3 44.4437 98.66 44.4437 99.3V108H42.3837V99.3C42.3837 98.68 41.9637 98.3 41.3837 98.3C40.7637 98.3 40.3637 98.68 40.3637 99.3V108ZM56.9684 99.56V103.32H52.6284V105.04C52.6284 105.76 53.0484 106.2 53.7684 106.2C54.4684 106.2 54.9084 105.76 54.9084 105.04V104.18H56.9684V104.94C56.9684 106.92 55.7084 108.14 53.7684 108.14C51.8084 108.14 50.5684 106.92 50.5684 104.94V99.56C50.5684 97.58 51.8084 96.36 53.7684 96.36C55.7084 96.36 56.9684 97.58 56.9684 99.56ZM52.6284 99.48V101.48H54.9084V99.48C54.9084 98.76 54.4684 98.3 53.7684 98.3C53.0484 98.3 52.6284 98.76 52.6284 99.48ZM59.0068 108V99.34C59.0068 97.4 59.7068 96.5 62.0268 96.5H62.8268V98.44H62.0268C61.2468 98.44 61.0668 98.9 61.0668 99.34V108H59.0068ZM64.123 110.92V109.08H68.463V107.64C68.043 107.88 67.563 108 67.023 108C65.263 108 64.123 106.98 64.123 104.8V99.58C64.123 97.6 65.383 96.38 67.323 96.38C69.283 96.38 70.523 97.6 70.523 99.58V110.92H64.123ZM68.463 104.84V99.52C68.463 98.8 68.043 98.36 67.323 98.36C66.623 98.36 66.183 98.8 66.183 99.52V104.84C66.183 105.56 66.623 106.02 67.323 106.02C68.043 106.02 68.463 105.56 68.463 104.84ZM74.8405 94.18C74.8405 94.82 74.3205 95.34 73.7005 95.34C73.0605 95.34 72.5405 94.82 72.5405 94.2C72.5405 93.56 73.0605 93.04 73.6805 93.04C74.3205 93.04 74.8405 93.56 74.8405 94.18ZM74.7005 108H72.6405V96.5H74.7005V108ZM78.8793 108H76.8193V99.56C76.8193 97.58 78.0593 96.36 80.0193 96.36C81.9593 96.36 83.2193 97.58 83.2193 99.56V108H81.1593V99.52C81.1593 98.8 80.7193 98.34 80.0193 98.34C79.2993 98.34 78.8793 98.8 78.8793 99.52V108ZM85.2559 110.92V109.08H89.5959V107.64C89.1759 107.88 88.6959 108 88.1559 108C86.3959 108 85.2559 106.98 85.2559 104.8V99.58C85.2559 97.6 86.5159 96.38 88.4559 96.38C90.4159 96.38 91.6559 97.6 91.6559 99.58V110.92H85.2559ZM89.5959 104.84V99.52C89.5959 98.8 89.1759 98.36 88.4559 98.36C87.7559 98.36 87.3159 98.8 87.3159 99.52V104.84C87.3159 105.56 87.7559 106.02 88.4559 106.02C89.1759 106.02 89.5959 105.56 89.5959 104.84ZM101.601 93.44L98.2012 109H96.2212L99.6212 93.44H101.601ZM113.055 108H110.995V96.76C110.995 95.82 110.435 95.38 109.655 95.38C108.855 95.38 108.315 95.84 108.315 96.76V108H106.255V96.64C106.255 94.68 107.535 93.44 109.575 93.44C110.575 93.44 111.335 93.62 112.015 94.28C112.695 93.62 113.455 93.44 114.475 93.44C116.515 93.44 117.795 94.68 117.795 96.64V108H115.735V96.76C115.735 95.84 115.175 95.38 114.395 95.38C113.615 95.38 113.055 95.8 113.055 96.76V108ZM119.904 97C119.904 94.84 121.244 93.44 123.444 93.44C125.624 93.44 126.964 94.84 126.964 97.06V98.38H124.904V97.06C124.904 96.04 124.364 95.42 123.444 95.42C122.504 95.42 121.964 96.04 121.964 97.06C121.964 97.6 122.144 98.08 122.724 98.64L125.464 101.22C126.344 102.06 127.124 102.98 127.124 104.52C127.124 106.74 125.744 108.14 123.524 108.14C121.284 108.14 119.904 106.74 119.904 104.52V103.2H121.964V104.52C121.964 105.54 122.524 106.16 123.524 106.16C124.504 106.16 125.064 105.54 125.064 104.52C125.064 103.9 124.764 103.32 124.224 102.82L121.424 100.2C120.304 99.16 119.904 98.28 119.904 97ZM136.024 108H133.964V96.76C133.964 95.82 133.404 95.38 132.624 95.38C131.824 95.38 131.284 95.84 131.284 96.76V108H129.224V96.64C129.224 94.68 130.504 93.44 132.544 93.44C133.544 93.44 134.304 93.62 134.984 94.28C135.664 93.62 136.424 93.44 137.444 93.44C139.484 93.44 140.764 94.68 140.764 96.64V108H138.704V96.76C138.704 95.84 138.144 95.38 137.364 95.38C136.584 95.38 136.024 95.8 136.024 96.76V108ZM149.133 93.58V95.52H145.113V99.52H147.993V101.46H145.113V106.06H149.233V108H143.053V93.58H149.133ZM159.09 103.06H153.45V101.56H159.09V103.06ZM47.9761 127.112C46.2801 127.112 45.2241 126.04 45.2241 124.36V118.104C45.2241 116.424 46.2801 115.352 47.9761 115.352C49.6721 115.352 50.7281 116.424 50.7281 118.104V124.36C50.7281 126.04 49.6721 127.112 47.9761 127.112ZM47.9761 126.024C48.9841 126.024 49.5761 125.384 49.5761 124.36V118.104C49.5761 117.08 48.9841 116.44 47.9761 116.44C46.9521 116.44 46.3761 117.08 46.3761 118.104V124.36C46.3761 125.384 46.9521 126.024 47.9761 126.024ZM52.489 127V120.184C52.489 118.584 53.177 117.88 54.841 117.88H55.273V118.952H54.841C54.009 118.952 53.641 119.4 53.641 120.168V127H52.489ZM56.364 129.416V128.376H60.044V126.536C59.692 126.888 59.18 127.048 58.604 127.048C57.244 127.048 56.332 126.216 56.332 124.616V120.216C56.332 118.712 57.292 117.784 58.764 117.784C60.252 117.784 61.196 118.712 61.196 120.216V129.416H56.364ZM58.764 125.96C59.564 125.96 60.044 125.496 60.044 124.68V120.168C60.044 119.368 59.564 118.872 58.764 118.872C57.964 118.872 57.484 119.368 57.484 120.168V124.648C57.484 125.448 57.964 125.96 58.764 125.96ZM65.3265 127.112C63.8545 127.112 62.8945 126.184 62.8945 124.68V124.152C62.8945 122.552 63.8065 121.72 65.1665 121.72C65.7425 121.72 66.2545 121.896 66.6065 122.232V120.168C66.6065 119.368 66.1425 118.872 65.3745 118.872C64.6065 118.872 64.1425 119.368 64.1425 120.168V121.016H62.9905V120.2C62.9905 118.696 63.9185 117.768 65.3745 117.768C66.8305 117.768 67.7585 118.696 67.7585 120.2V124.68C67.7585 126.184 66.8145 127.112 65.3265 127.112ZM65.3265 126.024C66.1265 126.024 66.6065 125.528 66.6065 124.728V124.12C66.6065 123.288 66.1265 122.824 65.3265 122.824C64.5265 122.824 64.0465 123.32 64.0465 124.12V124.728C64.0465 125.528 64.5265 126.024 65.3265 126.024ZM69.4578 127V120.2C69.4578 118.696 70.4018 117.768 71.8898 117.768C73.3618 117.768 74.3218 118.696 74.3218 120.2V127H73.1698V120.168C73.1698 119.368 72.6738 118.872 71.8898 118.872C71.0898 118.872 70.6098 119.368 70.6098 120.168V127H69.4578ZM76.0835 127V117.88H77.2355V127H76.0835ZM76.6755 116.552C76.2755 116.552 75.9555 116.232 75.9555 115.832C75.9555 115.448 76.2755 115.128 76.6595 115.128C77.0595 115.128 77.3795 115.448 77.3795 115.832C77.3795 116.232 77.0595 116.552 76.6755 116.552ZM81.309 127.112C79.821 127.112 78.877 126.184 78.877 124.68V123.816H80.029V124.728C80.029 125.544 80.509 126.04 81.309 126.04C82.141 126.04 82.589 125.496 82.589 124.76C82.589 124.232 82.381 123.8 81.853 123.448L80.109 122.232C79.309 121.672 78.877 120.92 78.877 120.12C78.877 118.744 79.789 117.768 81.245 117.768C82.685 117.768 83.613 118.696 83.613 120.2V121.064H82.461V120.168C82.461 119.352 81.997 118.84 81.245 118.84C80.493 118.84 80.029 119.32 80.029 120.088C80.029 120.504 80.253 120.936 80.701 121.256L82.445 122.472C83.405 123.144 83.741 123.832 83.741 124.68C83.741 126.184 82.797 127.112 81.309 127.112ZM87.764 127.112C86.292 127.112 85.332 126.184 85.332 124.68V124.152C85.332 122.552 86.244 121.72 87.604 121.72C88.18 121.72 88.692 121.896 89.044 122.232V120.168C89.044 119.368 88.58 118.872 87.812 118.872C87.044 118.872 86.58 119.368 86.58 120.168V121.016H85.428V120.2C85.428 118.696 86.356 117.768 87.812 117.768C89.268 117.768 90.196 118.696 90.196 120.2V124.68C90.196 126.184 89.252 127.112 87.764 127.112ZM87.764 126.024C88.564 126.024 89.044 125.528 89.044 124.728V124.12C89.044 123.288 88.564 122.824 87.764 122.824C86.964 122.824 86.484 123.32 86.484 124.12V124.728C86.484 125.528 86.964 126.024 87.764 126.024ZM92.6339 127V118.968H91.1139V117.88H92.6339V115.944H93.7859V117.88H95.3059V118.968H93.7859V127H92.6339ZM96.396 127V117.88H97.548V127H96.396ZM96.988 116.552C96.588 116.552 96.268 116.232 96.268 115.832C96.268 115.448 96.588 115.128 96.972 115.128C97.372 115.128 97.692 115.448 97.692 115.832C97.692 116.232 97.372 116.552 96.988 116.552ZM101.702 127.112C100.214 127.112 99.2695 126.184 99.2695 124.68V120.2C99.2695 118.696 100.214 117.768 101.702 117.768C103.174 117.768 104.134 118.696 104.134 120.2V124.68C104.134 126.184 103.174 127.112 101.702 127.112ZM101.702 126.024C102.486 126.024 102.982 125.528 102.982 124.728V120.168C102.982 119.368 102.486 118.872 101.702 118.872C100.902 118.872 100.422 119.368 100.422 120.168V124.728C100.422 125.528 100.902 126.024 101.702 126.024ZM105.833 127V120.2C105.833 118.696 106.777 117.768 108.265 117.768C109.737 117.768 110.697 118.696 110.697 120.2V127H109.545V120.168C109.545 119.368 109.049 118.872 108.265 118.872C107.465 118.872 106.985 119.368 106.985 120.168V127H105.833ZM114.747 127.112C113.259 127.112 112.315 126.184 112.315 124.68V123.816H113.467V124.728C113.467 125.544 113.947 126.04 114.747 126.04C115.579 126.04 116.027 125.496 116.027 124.76C116.027 124.232 115.819 123.8 115.291 123.448L113.547 122.232C112.747 121.672 112.315 120.92 112.315 120.12C112.315 118.744 113.227 117.768 114.683 117.768C116.123 117.768 117.051 118.696 117.051 120.2V121.064H115.899V120.168C115.899 119.352 115.435 118.84 114.683 118.84C113.931 118.84 113.467 119.32 113.467 120.088C113.467 120.504 113.691 120.936 114.139 121.256L115.883 122.472C116.843 123.144 117.179 123.832 117.179 124.68C117.179 126.184 116.235 127.112 114.747 127.112ZM121.333 124.856V117.88H122.485V124.808C122.485 125.576 122.949 126.04 123.685 126.04C124.405 126.04 124.885 125.576 124.885 124.792V117.88H126.117V124.792C126.117 125.592 126.597 126.04 127.317 126.04C128.037 126.04 128.517 125.576 128.517 124.808V117.88H129.669V124.856C129.669 126.248 128.741 127.112 127.349 127.112C126.565 127.112 125.861 126.84 125.461 126.28C125.061 126.84 124.389 127.112 123.653 127.112C122.245 127.112 121.333 126.248 121.333 124.856ZM131.427 127V117.88H132.579V127H131.427ZM132.019 116.552C131.619 116.552 131.299 116.232 131.299 115.832C131.299 115.448 131.619 115.128 132.003 115.128C132.403 115.128 132.723 115.448 132.723 115.832C132.723 116.232 132.403 116.552 132.019 116.552ZM135.181 127V118.968H133.661V117.88H135.181V115.944H136.333V117.88H137.853V118.968H136.333V127H135.181ZM138.943 127V115.464H140.095V118.28C140.447 117.944 140.959 117.768 141.535 117.768C142.895 117.768 143.807 118.6 143.807 120.2V127H142.655V120.168C142.655 119.368 142.159 118.872 141.375 118.872C140.575 118.872 140.095 119.336 140.095 120.168V127H138.943ZM46.4388 139.42V139.5H48.2988V141.44H46.4388V151H44.3788V139.5C44.3788 137.56 45.1188 136.58 47.3988 136.58H48.2988V138.52H47.3988C46.6188 138.52 46.4388 138.98 46.4388 139.42ZM55.9918 142.56V146.32H51.6518V148.04C51.6518 148.76 52.0718 149.2 52.7918 149.2C53.4918 149.2 53.9318 148.76 53.9318 148.04V147.18H55.9918V147.94C55.9918 149.92 54.7318 151.14 52.7918 151.14C50.8318 151.14 49.5918 149.92 49.5918 147.94V142.56C49.5918 140.58 50.8318 139.36 52.7918 139.36C54.7318 139.36 55.9918 140.58 55.9918 142.56ZM51.6518 142.48V144.48H53.9318V142.48C53.9318 141.76 53.4918 141.3 52.7918 141.3C52.0718 141.3 51.6518 141.76 51.6518 142.48ZM58.0302 139.5H60.0902V148.2C60.0902 148.82 60.4902 149.2 61.1102 149.2C61.6902 149.2 62.1102 148.82 62.1102 148.2V139.5H64.1702V148.2C64.1702 148.84 64.5902 149.2 65.1702 149.2C65.7702 149.2 66.1902 148.82 66.1902 148.2V139.5H68.2502V148.32C68.2502 150.06 67.0702 151.14 65.2902 151.14C64.4902 151.14 63.6302 150.92 63.1302 150.42C62.5902 150.92 61.7502 151.14 60.9902 151.14C59.2102 151.14 58.0302 150.06 58.0302 148.32V139.5ZM76.6949 142.56V146.32H72.3549V148.04C72.3549 148.76 72.7749 149.2 73.4949 149.2C74.1949 149.2 74.6349 148.76 74.6349 148.04V147.18H76.6949V147.94C76.6949 149.92 75.4349 151.14 73.4949 151.14C71.5349 151.14 70.2949 149.92 70.2949 147.94V142.56C70.2949 140.58 71.5349 139.36 73.4949 139.36C75.4349 139.36 76.6949 140.58 76.6949 142.56ZM72.3549 142.48V144.48H74.6349V142.48C74.6349 141.76 74.1949 141.3 73.4949 141.3C72.7749 141.3 72.3549 141.76 72.3549 142.48ZM78.7334 151V142.34C78.7334 140.4 79.4334 139.5 81.7534 139.5H82.5534V141.44H81.7534C80.9734 141.44 80.7934 141.9 80.7934 142.34V151H78.7334ZM91.4374 141.44H89.7774V151H87.7174V141.44H86.0574V139.5H87.7174V137.18H89.7774V139.5H91.4374V141.44ZM99.1187 151H97.0587V142.52C97.0587 141.8 96.6187 141.34 95.9187 141.34C95.1987 141.34 94.7787 141.8 94.7787 142.52V151H92.7187V136.58H94.7787V139.72C95.1787 139.5 95.6787 139.36 96.2187 139.36C97.9787 139.36 99.1187 140.38 99.1187 142.56V151ZM101.154 147.94V147.34C101.154 145.16 102.294 144.14 104.054 144.14C104.594 144.14 105.074 144.28 105.494 144.5V142.52C105.494 141.8 105.094 141.34 104.434 141.34C103.774 141.34 103.374 141.8 103.374 142.52V143.32H101.314V142.56C101.314 140.58 102.534 139.36 104.434 139.36C106.354 139.36 107.554 140.58 107.554 142.56V147.94C107.554 149.92 106.314 151.14 104.354 151.14C102.414 151.14 101.154 149.92 101.154 147.94ZM105.494 148V147.3C105.494 146.58 105.074 146.12 104.354 146.12C103.654 146.12 103.214 146.58 103.214 147.3V148C103.214 148.72 103.654 149.16 104.354 149.16C105.074 149.16 105.494 148.72 105.494 148ZM111.653 151H109.593V142.56C109.593 140.58 110.833 139.36 112.793 139.36C114.733 139.36 115.993 140.58 115.993 142.56V151H113.933V142.52C113.933 141.8 113.493 141.34 112.793 141.34C112.073 141.34 111.653 141.8 111.653 142.52V151ZM121.117 149.34L124.957 144.08C125.337 143.58 125.457 143.08 125.457 142.46V139.56C125.457 138.84 124.997 138.38 124.317 138.38C123.657 138.38 123.177 138.84 123.177 139.56V142.98H121.117V139.64C121.117 137.68 122.357 136.44 124.317 136.44C126.277 136.44 127.517 137.68 127.517 139.64V142.34C127.517 143.58 127.337 144.26 126.857 144.92L124.777 147.8C124.217 148.56 123.817 149.06 123.817 149.06H127.517V151H121.117V149.34ZM134.012 148.02V139.56C134.012 138.84 133.532 138.38 132.872 138.38C132.192 138.38 131.732 138.84 131.732 139.56V148.02C131.732 148.74 132.192 149.2 132.872 149.2C133.532 149.2 134.012 148.74 134.012 148.02ZM129.672 147.94V139.64C129.672 137.68 130.912 136.44 132.872 136.44C134.832 136.44 136.072 137.68 136.072 139.64V147.94C136.072 149.9 134.832 151.14 132.872 151.14C130.912 151.14 129.672 149.9 129.672 147.94ZM142.566 148.02V139.56C142.566 138.84 142.086 138.38 141.426 138.38C140.746 138.38 140.286 138.84 140.286 139.56V148.02C140.286 148.74 140.746 149.2 141.426 149.2C142.086 149.2 142.566 148.74 142.566 148.02ZM138.226 147.94V139.64C138.226 137.68 139.466 136.44 141.426 136.44C143.386 136.44 144.626 137.68 144.626 139.64V147.94C144.626 149.9 143.386 151.14 141.426 151.14C139.466 151.14 138.226 149.9 138.226 147.94ZM63.7632 170V158.464H64.9152V161.28C65.2672 160.944 65.7792 160.768 66.3552 160.768C67.7152 160.768 68.6272 161.6 68.6272 163.2V170H67.4752V163.168C67.4752 162.368 66.9792 161.872 66.1952 161.872C65.3952 161.872 64.9152 162.336 64.9152 163.168V170H63.7632ZM72.7562 170.112C71.2682 170.112 70.3242 169.184 70.3242 167.68V163.2C70.3242 161.696 71.2682 160.768 72.7562 160.768C74.2282 160.768 75.1882 161.696 75.1882 163.2V165.952H71.4762V167.744C71.4762 168.544 71.9562 169.04 72.7562 169.04C73.5402 169.04 74.0362 168.544 74.0362 167.744V166.864H75.1882V167.68C75.1882 169.184 74.2282 170.112 72.7562 170.112ZM71.4762 164.928H74.0362V163.152C74.0362 162.336 73.5402 161.84 72.7562 161.84C71.9562 161.84 71.4762 162.336 71.4762 163.152V164.928ZM79.2874 170.112C77.8154 170.112 76.8554 169.184 76.8554 167.68V167.152C76.8554 165.552 77.7674 164.72 79.1274 164.72C79.7034 164.72 80.2154 164.896 80.5674 165.232V163.168C80.5674 162.368 80.1034 161.872 79.3354 161.872C78.5674 161.872 78.1034 162.368 78.1034 163.168V164.016H76.9514V163.2C76.9514 161.696 77.8794 160.768 79.3354 160.768C80.7914 160.768 81.7194 161.696 81.7194 163.2V167.68C81.7194 169.184 80.7754 170.112 79.2874 170.112ZM79.2874 169.024C80.0874 169.024 80.5674 168.528 80.5674 167.728V167.12C80.5674 166.288 80.0874 165.824 79.2874 165.824C78.4874 165.824 78.0074 166.32 78.0074 167.12V167.728C78.0074 168.528 78.4874 169.024 79.2874 169.024ZM85.8187 170.112C84.3467 170.112 83.3867 169.184 83.3867 167.68V163.2C83.3867 161.6 84.2987 160.768 85.6587 160.768C86.2347 160.768 86.7467 160.944 87.0987 161.28V158.464H88.2507V167.68C88.2507 169.184 87.3067 170.112 85.8187 170.112ZM85.8187 169.024C86.6187 169.024 87.0987 168.528 87.0987 167.728V163.136C87.0987 162.32 86.6187 161.872 85.8187 161.872C85.0347 161.872 84.5387 162.368 84.5387 163.168V167.728C84.5387 168.528 85.0347 169.024 85.8187 169.024ZM92.3812 170.112C90.8932 170.112 89.9492 169.184 89.9492 167.68V163.2C89.9492 161.696 90.8932 160.768 92.3812 160.768C93.8532 160.768 94.8132 161.696 94.8132 163.2V164.144H93.6612V163.168C93.6612 162.368 93.1652 161.872 92.3812 161.872C91.5812 161.872 91.1012 162.368 91.1012 163.168V167.728C91.1012 168.528 91.5812 169.024 92.3812 169.024C93.1652 169.024 93.6612 168.528 93.6612 167.728V166.736H94.8132V167.68C94.8132 169.184 93.8532 170.112 92.3812 170.112ZM98.8343 170.112C97.3463 170.112 96.4023 169.184 96.4023 167.68V163.2C96.4023 161.696 97.3463 160.768 98.8343 160.768C100.306 160.768 101.266 161.696 101.266 163.2V167.68C101.266 169.184 100.306 170.112 98.8343 170.112ZM98.8343 169.024C99.6183 169.024 100.114 168.528 100.114 167.728V163.168C100.114 162.368 99.6183 161.872 98.8343 161.872C98.0343 161.872 97.5543 162.368 97.5543 163.168V167.728C97.5543 168.528 98.0343 169.024 98.8343 169.024ZM105.398 170.112C103.91 170.112 102.966 169.184 102.966 167.68V160.88H104.118V167.712C104.118 168.528 104.598 169.024 105.398 169.024C106.182 169.024 106.678 168.528 106.678 167.712V160.88H107.83V167.68C107.83 169.184 106.87 170.112 105.398 170.112ZM109.559 170V163.2C109.559 161.696 110.503 160.768 111.991 160.768C113.463 160.768 114.423 161.696 114.423 163.2V170H113.271V163.168C113.271 162.368 112.775 161.872 111.991 161.872C111.191 161.872 110.711 162.368 110.711 163.168V170H109.559ZM116.892 170V161.968H115.372V160.88H116.892V158.944H118.044V160.88H119.564V161.968H118.044V170H116.892Z`,fill:`#0A0A0A`}),(0,i.jsx)(`rect`,{x:`63`,y:`25`,width:`53.9973`,height:`55.97`,rx:`7`,fill:`#F9CDCA`}),(0,i.jsxs)(`g`,{clipPath:`url(#clip0_12327_7236)`,children:[(0,i.jsx)(`path`,{d:`M108.824 71H70.3025C69.9206 71 69.6197 70.7433 69.6197 70.3582V51.2223L68.4626 51.1873C68.1733 51.1873 67.9997 50.7673 68.0113 50.5456C68.0229 50.3239 68.1849 49.8688 68.5667 49.8688H78.4257V35.3769H77.3033C76.9098 35.3652 76.609 35.1785 76.5511 34.7934C76.4933 34.4084 76.69 34 77.1413 34H101.511C101.928 34 102.113 34.3384 102.136 34.6418C102.159 34.9451 101.939 35.3302 101.534 35.3535H100.331C100.331 35.3652 100.331 44.9798 100.331 44.9798H110.294C110.745 44.9798 111.011 45.2599 111.011 45.6449C111.011 46.03 110.745 46.3217 110.305 46.3333H109.472C109.472 46.345 109.472 70.2999 109.472 70.2999C109.472 70.65 109.276 71 108.836 71H108.824ZM92.705 59.8218C93.0985 59.8218 93.3646 60.0552 93.3993 60.4636V69.6465H98.9768V35.3652H79.768V69.7165H85.3455V60.4519C85.3571 60.1135 85.6117 59.8218 85.9588 59.8218H92.7166H92.705ZM108.049 69.6348V46.3333H100.319V69.6465H108.049V69.6348ZM78.4836 69.6348V51.2107H70.962V69.6465H78.4836V69.6348ZM92.057 69.7048V61.1637H86.6762V69.7048H92.057Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M91.1081 42.5413H87.7755C87.3821 42.5413 87.0928 42.2379 87.0928 41.8529V38.8775C87.0928 38.5041 87.3358 38.2357 87.7061 38.2124H91.0503C91.409 38.2474 91.6635 38.5158 91.6635 38.8892V41.9346C91.6635 42.2263 91.4205 42.483 91.1081 42.5413ZM90.3097 41.1761V39.5543H88.4235V41.1878H90.3097V41.1761Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M85.2997 42.5413H81.967C81.5852 42.518 81.2959 42.2263 81.2959 41.8412V38.8892C81.2959 38.4924 81.5736 38.2124 81.967 38.2124H85.2418C85.5427 38.2124 85.8667 38.4691 85.8667 38.7958V41.9462C85.8667 42.2379 85.6005 42.4946 85.2997 42.553V42.5413ZM84.5359 41.1761V39.5543H82.6498V41.1878L84.5359 41.1761Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M96.79 42.5413H93.5731C93.1796 42.5413 92.8672 42.2613 92.8672 41.8529V38.8775C92.8672 38.5041 93.1333 38.2124 93.5036 38.2124H96.7784C97.114 38.2124 97.438 38.4808 97.438 38.8425V41.9696C97.438 42.308 97.0792 42.5413 96.79 42.5413ZM96.0841 41.1761V39.5543H94.1979V41.1761H96.0841Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M91.027 48.8421H87.8564C87.3819 48.8421 87.0811 48.5154 87.0811 48.0487V45.1549C87.0811 44.8632 87.3125 44.5132 87.6481 44.5132H91.027C91.3741 44.5132 91.6518 44.8282 91.6518 45.1666V48.2237C91.6518 48.5271 91.3741 48.8421 91.0154 48.8421H91.027ZM90.3095 47.4886V45.855H88.4349V47.4769H90.3095V47.4886Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M85.2304 48.8421H81.9556C81.6779 48.8421 81.3076 48.5037 81.3076 48.212V45.0965C81.3076 44.7815 81.6316 44.5015 81.9209 44.5015H85.2882C85.6238 44.5015 85.8668 44.8515 85.8668 45.1549V48.2236C85.8668 48.5503 85.5775 48.8421 85.2188 48.8421H85.2304ZM84.5361 47.4885V45.8666H82.6499V47.5002H84.5361V47.4885Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M96.8362 48.8421H93.5731C93.1912 48.8421 92.8672 48.5271 92.8672 48.142V45.0849C92.8672 44.7816 93.1796 44.5482 93.4458 44.5132H96.8247C97.1371 44.5132 97.438 44.8166 97.438 45.1316V48.2704C97.438 48.5387 97.1371 48.8538 96.8362 48.8538V48.8421ZM96.0841 47.4886V45.8667H94.1979V47.4886H96.0841Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M91.027 55.1428H87.7638C87.4166 55.1428 87.1273 54.8395 87.0811 54.5127V51.4557C87.0811 51.0589 87.3935 50.8022 87.7638 50.8022H90.9807C91.351 50.8022 91.6518 51.0706 91.6518 51.4557V54.5011C91.6518 54.8161 91.3857 55.1428 91.027 55.1428ZM90.3095 53.7893V52.1674H88.4349V53.7893H90.3095Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M85.2304 55.1428H81.9672C81.5969 55.1428 81.3076 54.8628 81.3076 54.4894V51.4673C81.3076 51.0823 81.5853 50.8022 81.9672 50.8022H85.2651C85.6122 50.8022 85.8784 51.1056 85.8784 51.444V54.5011C85.8321 54.8045 85.6007 55.1312 85.2304 55.1312V55.1428ZM84.5361 53.7776V52.1558H82.6499V53.7776H84.5361Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M96.8245 55.1428H93.5613C93.1795 55.1428 92.8555 54.8045 92.8555 54.4194V51.444C92.8555 51.094 93.1216 50.8022 93.4803 50.8022H96.7782C97.1022 50.8022 97.4262 51.0589 97.4262 51.409V54.5478C97.4262 54.8511 97.1485 55.0962 96.8245 55.1428ZM96.0839 53.7893V52.1674H94.1978V53.7893H96.0839Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M106.51 52.3776C106.51 52.786 106.267 53.1127 105.874 53.1127H102.599C102.171 53.1127 101.939 52.716 101.939 52.3309C101.951 51.2691 101.916 50.2423 101.986 49.1922C102.055 48.142 102.657 48.7605 102.923 48.7605L105.735 48.7838C106.152 48.7838 106.51 48.9588 106.51 49.4489V52.3776ZM105.168 51.7475V50.1257C105.156 50.1257 103.282 50.1257 103.282 50.1257V51.7475L105.168 51.7359V51.7475Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M105.92 59.4133H102.657C102.252 59.4133 101.928 59.1333 101.928 58.7016V55.7262C101.928 55.3878 102.194 55.0728 102.541 55.0728H105.839C106.209 55.0728 106.499 55.3411 106.499 55.7262V58.7833C106.499 59.0866 106.244 59.355 105.92 59.4017V59.4133ZM105.156 58.0482V56.4263H103.27V58.0482H105.156Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M105.92 65.7141H102.576C102.263 65.7141 101.939 65.4107 101.939 65.084V62.0153C101.939 61.6536 102.217 61.3735 102.576 61.3735H105.874C106.221 61.3735 106.499 61.6652 106.499 62.0153V65.084C106.499 65.3991 106.256 65.6674 105.92 65.7141ZM105.156 64.3489V62.7271H103.27V64.3489H105.156Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M76.1811 64.699H72.8832C72.5129 64.699 72.2236 64.4073 72.2236 64.0339V60.9651C72.2236 60.6268 72.5361 60.3584 72.8601 60.3584H76.158C76.482 60.3584 76.7828 60.6268 76.7828 60.9651V64.0339C76.7828 64.3839 76.5398 64.6523 76.1695 64.699H76.1811ZM75.4637 63.2638V61.6419C75.4521 61.6419 73.5775 61.6419 73.5775 61.6419V63.2638H75.4637Z`,fill:`#FF6257`}),(0,i.jsx)(`path`,{d:`M76.216 58.1883H72.8718C72.5362 58.1883 72.2469 57.92 72.2354 57.5699V54.5128C72.2354 54.1395 72.5015 53.8711 72.8718 53.8711H76.1697C76.4937 53.8944 76.8061 54.1628 76.8061 54.5128V57.5816C76.8061 57.8966 76.5516 58.165 76.216 58.2V58.1883ZM75.4638 56.8348V55.2013H73.5777V56.8348H75.4638Z`,fill:`#FF6257`})]}),(0,i.jsx)(`defs`,{children:(0,i.jsx)(`clipPath`,{id:`clip0_12327_7236`,children:(0,i.jsx)(`rect`,{width:`43`,height:`37`,fill:`white`,transform:`translate(68 34)`})})})]})})]}),(0,i.jsx)(`div`,{style:{textAlign:`center`,marginTop:`35px`},children:(0,i.jsx)(`a`,{href:`https://bengaluruskillsummit.com/kaushalya-awards-registration/`,target:`_blank`,rel:`noopener noreferrer`,className:`kka-participate-btn`,children:`APPLY NOW`})})]})}),(0,i.jsx)(`div`,{className:`kka-participate-wrap`,children:(0,i.jsxs)(`div`,{className:`kka-participate-inner`,children:[(0,i.jsx)(`div`,{children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/Group-1410089698.png`,alt:`Ceremony Presentation Collage`,className:`kka-participate-collage-img`})}),(0,i.jsxs)(`div`,{style:{textAlign:`left`},children:[(0,i.jsx)(`h2`,{className:`kka-participate-title`,children:`WHY PARTICIPATE`}),(0,i.jsxs)(`div`,{className:`kka-participate-list`,children:[(0,i.jsxs)(`div`,{className:`kka-participate-item`,children:[(0,i.jsx)(`div`,{className:`kka-participate-icon-box`,children:(0,i.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:[(0,i.jsx)(`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`}),(0,i.jsx)(`polyline`,{points:`15 3 21 3 21 9`}),(0,i.jsx)(`line`,{x1:`10`,y1:`14`,x2:`21`,y2:`3`})]})}),(0,i.jsx)(`p`,{className:`kka-participate-text`,children:`National-level recognition`})]}),(0,i.jsxs)(`div`,{className:`kka-participate-item`,children:[(0,i.jsx)(`div`,{className:`kka-participate-icon-box`,children:(0,i.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:[(0,i.jsx)(`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`}),(0,i.jsx)(`polyline`,{points:`15 3 21 3 21 9`}),(0,i.jsx)(`line`,{x1:`10`,y1:`14`,x2:`21`,y2:`3`})]})}),(0,i.jsx)(`p`,{className:`kka-participate-text`,children:`Position your organisation as a leader in skilling`})]}),(0,i.jsxs)(`div`,{className:`kka-participate-item`,children:[(0,i.jsx)(`div`,{className:`kka-participate-icon-box`,children:(0,i.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:[(0,i.jsx)(`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`}),(0,i.jsx)(`polyline`,{points:`15 3 21 3 21 9`}),(0,i.jsx)(`line`,{x1:`10`,y1:`14`,x2:`21`,y2:`3`})]})}),(0,i.jsx)(`p`,{className:`kka-participate-text`,children:`Showcase impact to government & industry`})]}),(0,i.jsxs)(`div`,{className:`kka-participate-item`,children:[(0,i.jsx)(`div`,{className:`kka-participate-icon-box`,children:(0,i.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:[(0,i.jsx)(`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`}),(0,i.jsx)(`polyline`,{points:`15 3 21 3 21 9`}),(0,i.jsx)(`line`,{x1:`10`,y1:`14`,x2:`21`,y2:`3`})]})}),(0,i.jsx)(`p`,{className:`kka-participate-text`,children:`Networking with policymakers, academia, and industry leaders`})]}),(0,i.jsxs)(`div`,{className:`kka-participate-item`,children:[(0,i.jsx)(`div`,{className:`kka-participate-icon-box`,children:(0,i.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:[(0,i.jsx)(`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`}),(0,i.jsx)(`polyline`,{points:`15 3 21 3 21 9`}),(0,i.jsx)(`line`,{x1:`10`,y1:`14`,x2:`21`,y2:`3`})]})}),(0,i.jsx)(`p`,{className:`kka-participate-text`,children:`Enhance employer brand and credibility`})]})]}),(0,i.jsx)(`a`,{href:`https://bengaluruskillsummit.com/kaushalya-awards-registration/`,target:`_blank`,rel:`noopener noreferrer`,className:`kka-participate-btn`,children:`APPLY NOW`})]})]})}),(0,i.jsxs)(`div`,{className:`kka-eval-section`,children:[(0,i.jsx)(`h2`,{className:`kka-eval-main-heading`,children:`EVALUATION FRAMEWORK`}),(0,i.jsx)(`p`,{className:`kka-eval-subtitle`,children:`The evaluation framework is designed to assess real impact, not just activity.`}),(0,i.jsxs)(`div`,{className:`kka-eval-grid`,children:[(0,i.jsxs)(`div`,{className:`kka-eval-card card-blue`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/eval1.png`,alt:`Reach & Karnataka Impact`,className:`kka-eval-icon-img`}),(0,i.jsxs)(`h3`,{className:`kka-eval-title`,children:[`Reach &`,(0,i.jsx)(`br`,{}),`Karnataka Impact`]}),(0,i.jsx)(`div`,{className:`kka-eval-divider divider-blue`}),(0,i.jsxs)(`ul`,{className:`kka-eval-list`,children:[(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-blue`,children:`•`}),(0,i.jsx)(`span`,{children:`Karnataka learners trained`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-blue`,children:`•`}),(0,i.jsx)(`span`,{children:`Workforce coverage`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-blue`,children:`•`}),(0,i.jsx)(`span`,{children:`Structured skilling reach beyond own employees`})]})]})]}),(0,i.jsxs)(`div`,{className:`kka-eval-card card-pink`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/eval2.png`,alt:`Inclusion`,className:`kka-eval-icon-img`}),(0,i.jsx)(`h3`,{className:`kka-eval-title`,children:`Inclusion`}),(0,i.jsx)(`div`,{className:`kka-eval-divider divider-pink`}),(0,i.jsxs)(`ul`,{className:`kka-eval-list`,children:[(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-pink`,children:`•`}),(0,i.jsx)(`span`,{children:`Women participation`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-pink`,children:`•`}),(0,i.jsx)(`span`,{children:`Rural and underserved groups`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-pink`,children:`•`}),(0,i.jsx)(`span`,{children:`Inclusive-group participation`})]})]})]}),(0,i.jsxs)(`div`,{className:`kka-eval-card card-yellow`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/eval3.png`,alt:`Quality & Relevance`,className:`kka-eval-icon-img`}),(0,i.jsxs)(`h3`,{className:`kka-eval-title`,children:[`Quality &`,(0,i.jsx)(`br`,{}),`Relevance`]}),(0,i.jsx)(`div`,{className:`kka-eval-divider divider-yellow`}),(0,i.jsxs)(`ul`,{className:`kka-eval-list`,children:[(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-yellow`,children:`•`}),(0,i.jsx)(`span`,{children:`NSQF / NOS / SSC alignment`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-yellow`,children:`•`}),(0,i.jsx)(`span`,{children:`Future and emerging-skills share`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-yellow`,children:`•`}),(0,i.jsx)(`span`,{children:`Certification rate`})]})]})]}),(0,i.jsxs)(`div`,{className:`kka-eval-card card-green`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/eval4.png`,alt:`Skilling Outcomes & Impact`,className:`kka-eval-icon-img`}),(0,i.jsxs)(`h3`,{className:`kka-eval-title`,children:[`Skilling Outcomes`,(0,i.jsx)(`br`,{}),`& Impact`]}),(0,i.jsx)(`div`,{className:`kka-eval-divider divider-green`}),(0,i.jsxs)(`ul`,{className:`kka-eval-list`,children:[(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-green`,children:`•`}),(0,i.jsx)(`span`,{children:`Apprenticeships`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-green`,children:`•`}),(0,i.jsx)(`span`,{children:`Internships / Fellowships`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-green`,children:`•`}),(0,i.jsx)(`span`,{children:`External employment and livelihood`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-green`,children:`•`}),(0,i.jsx)(`span`,{children:`Internal mobility`})]}),(0,i.jsxs)(`li`,{children:[(0,i.jsx)(`span`,{className:`eval-bullet bullet-green`,children:`•`}),(0,i.jsx)(`span`,{children:`Demonstrated skilling impact`})]})]})]})]})]}),(0,i.jsxs)(`div`,{className:`kka-timeline-wrapper`,children:[(0,i.jsx)(`h2`,{className:`kka-timeline-heading`,children:`FIVE STEPS FROM NOMINATION TO RECOGNITION`}),(0,i.jsxs)(`div`,{className:`kka-steps-row`,children:[(0,i.jsxs)(`div`,{className:`kka-step-col`,children:[(0,i.jsx)(`div`,{className:`kka-step-badge`,children:`01`}),(0,i.jsx)(`h3`,{className:`kka-step-heading`,children:`NOMINATION`}),(0,i.jsx)(`p`,{className:`kka-step-desc`,children:`Organisations nominate themselves for the Kaushalya Karnataka Corporate Excellence Awards 2026.`})]}),(0,i.jsxs)(`div`,{className:`kka-step-col`,children:[(0,i.jsx)(`div`,{className:`kka-step-badge`,children:`02`}),(0,i.jsx)(`h3`,{className:`kka-step-heading`,children:`PARTICIPATION`}),(0,i.jsx)(`p`,{className:`kka-step-desc`,children:`Eligible organisations complete and submit the detailed award application.`})]}),(0,i.jsxs)(`div`,{className:`kka-step-col`,children:[(0,i.jsx)(`div`,{className:`kka-step-badge`,children:`03`}),(0,i.jsx)(`h3`,{className:`kka-step-heading`,children:`EVALUATION`}),(0,i.jsx)(`p`,{className:`kka-step-desc`,children:`Applications are assessed through a structured, evidence-based evaluation.`})]}),(0,i.jsxs)(`div`,{className:`kka-step-col`,children:[(0,i.jsx)(`div`,{className:`kka-step-badge`,children:`04`}),(0,i.jsx)(`h3`,{className:`kka-step-heading`,children:`JURY VALIDATION`}),(0,i.jsx)(`p`,{className:`kka-step-desc`,children:`Shortlisted entries are reviewed and validated by the independent jury panel.`})]}),(0,i.jsxs)(`div`,{className:`kka-step-col`,children:[(0,i.jsx)(`div`,{className:`kka-step-badge`,children:`05`}),(0,i.jsx)(`h3`,{className:`kka-step-heading`,children:`RECOGNITION`}),(0,i.jsx)(`p`,{className:`kka-step-desc`,children:`Winners are recognised at the Kaushalya Karnataka Corporate Excellence Awards 2026.`})]})]}),(0,i.jsxs)(`div`,{className:`figma-timeline-bar`,children:[(0,i.jsxs)(`div`,{className:`figma-timeline-title-wrap`,children:[(0,i.jsx)(`div`,{className:`figma-timeline-title`,children:`Application Timeline`}),(0,i.jsx)(`div`,{className:`figma-timeline-subtitle`,children:`2026 CYCLE`})]}),(0,i.jsxs)(`div`,{className:`figma-milestones-track`,children:[(0,i.jsxs)(`div`,{className:`figma-milestone-item`,children:[(0,i.jsx)(`div`,{className:`figma-green-pill`}),(0,i.jsx)(`div`,{className:`figma-step-label`,children:`Launch`}),(0,i.jsx)(`div`,{className:`figma-step-date`,style:{fontSize:`15px`},children:`Sep 2026`})]}),(0,i.jsx)(`div`,{className:`figma-connector-line`}),(0,i.jsxs)(`div`,{className:`figma-milestone-item`,children:[(0,i.jsx)(`div`,{className:`figma-green-pill`}),(0,i.jsxs)(`div`,{className:`figma-step-label`,children:[`Nomination`,(0,i.jsx)(`br`,{}),`Deadline`]}),(0,i.jsx)(`div`,{className:`figma-step-date`,children:`9 Oct 2026`})]}),(0,i.jsx)(`div`,{className:`figma-connector-line`}),(0,i.jsxs)(`div`,{className:`figma-milestone-item`,children:[(0,i.jsx)(`div`,{className:`figma-green-pill`}),(0,i.jsxs)(`div`,{className:`figma-step-label`,children:[`Application`,(0,i.jsx)(`br`,{}),`Deadline`]}),(0,i.jsx)(`div`,{className:`figma-step-date`,children:`16 Oct 2026`})]}),(0,i.jsx)(`div`,{className:`figma-connector-line`}),(0,i.jsxs)(`div`,{className:`figma-milestone-item`,children:[(0,i.jsx)(`div`,{className:`figma-green-pill`}),(0,i.jsx)(`div`,{className:`figma-step-label`,children:`Jury Review`}),(0,i.jsx)(`div`,{className:`figma-step-date`,children:`23 Oct 2026`})]}),(0,i.jsx)(`div`,{className:`figma-connector-line`}),(0,i.jsxs)(`div`,{className:`figma-milestone-item`,children:[(0,i.jsx)(`div`,{className:`figma-green-pill`}),(0,i.jsx)(`div`,{className:`figma-step-label`,children:`Recognition`}),(0,i.jsx)(`div`,{className:`figma-step-date`,children:`5 Nov 2026`})]})]}),(0,i.jsx)(`a`,{href:`https://bengaluruskillsummit.com/kaushalya-awards-registration/`,target:`_blank`,rel:`noopener noreferrer`,className:`figma-apply-btn`,children:`Apply now`})]})]}),(0,i.jsxs)(`section`,{id:`2025-winners`,className:`kka-showcase-section`,children:[(0,i.jsxs)(`svg`,{className:`showcase-watermark watermark-top-left`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,i.jsx)(`rect`,{x:`2`,y:`3`,width:`20`,height:`14`,rx:`2`,ry:`2`}),(0,i.jsx)(`line`,{x1:`8`,y1:`21`,x2:`16`,y2:`21`}),(0,i.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12`,y2:`21`})]}),(0,i.jsxs)(`svg`,{className:`showcase-watermark watermark-bottom-left`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,i.jsx)(`path`,{d:`M2 20h20`}),(0,i.jsx)(`path`,{d:`M5 20V8l5 4V8l5 4V4h4v16`})]}),(0,i.jsxs)(`svg`,{className:`showcase-watermark watermark-top-right`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,i.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,i.jsx)(`path`,{d:`M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z`})]}),(0,i.jsxs)(`svg`,{className:`showcase-watermark watermark-bottom-right`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,i.jsx)(`path`,{d:`M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z`}),(0,i.jsx)(`path`,{d:`m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z`}),(0,i.jsx)(`path`,{d:`M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0`}),(0,i.jsx)(`path`,{d:`M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`})]}),(0,i.jsxs)(`div`,{className:`kka-showcase-inner`,children:[(0,i.jsx)(`h2`,{className:`kka-showcase-title`,children:`Celebrate the organisations recognised in 2025 for their exceptional contributions to skilling.`}),(0,i.jsx)(`a`,{href:`https://bengaluruskillsummit.com/kaushalya-karnataka-awards-2025`,className:`kka-showcase-btn`,target:`_blank`,rel:`noopener noreferrer`,children:`2025 WINNERS SHOWCASE`})]})]}),(0,i.jsxs)(`div`,{className:`figma-cta-section`,children:[(0,i.jsx)(`div`,{className:`figma-cta-photo-col`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/Rectangle-112098.png`,alt:`Bengaluru Skill Summit Awards Ceremony`})}),(0,i.jsxs)(`div`,{className:`figma-cta-text-col`,children:[(0,i.jsx)(`h2`,{className:`figma-cta-head`,children:`Be part of Karnataka’s most prestigious skilling recognition platform.`}),(0,i.jsx)(`h3`,{className:`figma-cta-subhead`,children:`Application Timeline`}),(0,i.jsxs)(`div`,{className:`figma-cta-timeline-box`,children:[(0,i.jsxs)(`div`,{className:`figma-cta-timeline-unit`,children:[(0,i.jsx)(`div`,{className:`figma-icon-gold`,children:(0,i.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#F5B919`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,i.jsx)(`path`,{d:`M12 7.5c-1.5-2-4-2-4 0s2.5 2 4 2z`}),(0,i.jsx)(`path`,{d:`M12 7.5c1.5-2 4-2 4 0s-2.5 2-4 2z`}),(0,i.jsx)(`rect`,{x:`3`,y:`9.5`,width:`18`,height:`4`,rx:`1`}),(0,i.jsx)(`path`,{d:`M5 13.5v6.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6.5`}),(0,i.jsx)(`line`,{x1:`12`,y1:`9.5`,x2:`12`,y2:`21`})]})}),(0,i.jsxs)(`p`,{className:`figma-date-text`,children:[(0,i.jsx)(`span`,{className:`figma-date-label`,children:`Launch:`}),(0,i.jsx)(`span`,{className:`figma-date-value`,children:` September 2026`})]})]}),(0,i.jsx)(`div`,{className:`figma-cta-timeline-divider`}),(0,i.jsxs)(`div`,{className:`figma-cta-timeline-unit`,children:[(0,i.jsx)(`div`,{className:`figma-icon-red`,children:(0,i.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#FF6257`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,i.jsx)(`circle`,{cx:`12`,cy:`13.5`,r:`7`}),(0,i.jsx)(`polyline`,{points:`12 10 12 13.5 14 14.5`}),(0,i.jsx)(`path`,{d:`M12 3v3`}),(0,i.jsx)(`path`,{d:`M10 2.5h4`})]})}),(0,i.jsxs)(`p`,{className:`figma-date-text`,children:[(0,i.jsx)(`span`,{className:`figma-date-label`,children:`Deadline:`}),(0,i.jsx)(`span`,{className:`figma-date-value`,children:` 9 October 2026`})]})]})]}),(0,i.jsx)(`div`,{className:`figma-cta-btn-row`,children:(0,i.jsx)(`a`,{href:`https://bengaluruskillsummit.com/kaushalya-awards-registration/`,target:`_blank`,rel:`noopener noreferrer`,className:`figma-cta-btn`,children:`APPLY NOW`})})]})]}),(0,i.jsxs)(`div`,{className:`kka-corp-partners-wrap`,children:[(0,i.jsxs)(`div`,{className:`kka-corp-partner-col`,children:[(0,i.jsx)(`h3`,{className:`kka-corp-partner-title`,children:`Organised by`}),(0,i.jsx)(`div`,{className:`kka-corp-logo-box`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/Group-1410089643.svg`,alt:`Organised by: Government of Karnataka, Kaushalya Karnataka`})})]}),(0,i.jsxs)(`div`,{className:`kka-corp-partner-col`,children:[(0,i.jsx)(`h3`,{className:`kka-corp-partner-title`,children:`In Partnership with`}),(0,i.jsx)(`div`,{className:`kka-corp-logo-box`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/Logo-2-1.svg`,alt:`In Partnership with: Workplace Awards, Initiative by Zyoin Group`})})]})]}),(0,i.jsxs)(`div`,{className:`kka-contact-box`,children:[(0,i.jsx)(`h3`,{className:`kka-contact-box-title`,children:`Contact for more information`}),(0,i.jsxs)(`p`,{className:`kka-contact-box-desc`,children:[`Email: `,(0,i.jsx)(`a`,{href:`mailto:bengaluruskillsummit@workplaceawards.in`,children:`bengaluruskillsummit@workplaceawards.in`}),` | Phone: +91 80503 14499 (Sushpit Ghosh)`]})]})]}),(0,i.jsxs)(`main`,{id:`panel-institutional`,className:`tab-content-panel`,children:[(0,i.jsxs)(`section`,{className:`kka-inst-about-section`,children:[(0,i.jsxs)(`div`,{className:`kka-inst-about-grid`,children:[(0,i.jsxs)(`div`,{className:`kka-inst-text-col`,children:[(0,i.jsxs)(`h2`,{className:`kka-inst-main-title`,children:[`Recognising Excellence in`,(0,i.jsx)(`br`,{}),`Skill Development Education`,(0,i.jsx)(`br`,{}),`& Training`]}),(0,i.jsxs)(`p`,{className:`kka-inst-paragraph`,children:[`The Kaushalya Karnataka Institutional Excellence Awards at `,(0,i.jsx)(`strong`,{children:`Bengaluru Skill Summit (5 November 2026 at The Lalit Ashok, Bengaluru)`}),`, under Department of Skill Development, Entrepreneurship & Livelihood, `,(0,i.jsx)(`strong`,{children:`Government of Karnataka`}),` honour the backbone of Karnataka’s skilling ecosystem – districts, ITIs, GTTCs, polytechnics, training centres, and community partners. The awards are not just accolades – they are a tribute to the educators, administrators, and community champions who are shaping the next generation of skilled professionals.`]}),(0,i.jsxs)(`p`,{className:`kka-inst-paragraph`,children:[`Initiated by `,(0,i.jsx)(`strong`,{children:`KSDA and the Government of Karnataka`}),`, these recognitions celebrate innovation in training delivery, strong industry linkages, and measurable impact on employability.`]})]}),(0,i.jsx)(`div`,{className:`kka-inst-img-col`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/Group-1410089698.png`,alt:`Kaushalya Karnataka Institutional Awards Presentation`,className:`kka-inst-collage-img`})})]}),(0,i.jsxs)(`div`,{className:`kka-inst-logos-grid`,children:[(0,i.jsx)(`div`,{className:`kka-inst-logo-card`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/6452d877628f036f4261ea69b2024948212788e9.jpg`,alt:`BMV NTFSA`})}),(0,i.jsx)(`div`,{className:`kka-inst-logo-card`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/8590a7d8c9438e75bea4d20878c1f6ad04cabe84.png`,alt:`Department of Industrial Training and Employment`})}),(0,i.jsx)(`div`,{className:`kka-inst-logo-card`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/bc073dc429b2223ee0264b86d01412b82f9c6b79.jpg`,alt:`Industrial Training Institute ITI`})}),(0,i.jsx)(`div`,{className:`kka-inst-logo-card`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/1893620c458726851cfb47c9455cfc2bfeea35ed.png`,alt:`GTTC`})}),(0,i.jsx)(`div`,{className:`kka-inst-logo-card`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/ba5c8f006702d18d63738ceb2722d7ae9cd350cf.jpg`,alt:`KGTTI`})}),(0,i.jsx)(`div`,{className:`kka-inst-logo-card`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/2ad70e0fc6d649ee65172aff042084908cdffd06.jpg`,alt:`Sanjeevini NRLM`})}),(0,i.jsx)(`div`,{className:`kka-inst-logo-card`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/d9a7755fd2916feeb0a05526b14f39296b4facb4.png`,alt:`Asmita`})}),(0,i.jsx)(`div`,{className:`kka-inst-logo-card`,children:(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/524cfbb21383b9ee939e7140ae086fb5d0aa0c01.jpg`,alt:`Aajeevika`})})]})]}),(0,i.jsx)(`section`,{id:`inst-award-categories`,className:`kka-inst-cat-section`,children:(0,i.jsxs)(`div`,{className:`kka-inst-cat-inner`,children:[(0,i.jsx)(`h2`,{className:`kka-inst-cat-title`,children:`AWARD CATEGORIES`}),(0,i.jsx)(`h3`,{className:`kka-inst-cat-subtitle`,children:`Institutional Excellence Awards In Skilling`}),(0,i.jsxs)(`div`,{className:`kka-inst-cat-carousel-wrap`,children:[(0,i.jsx)(`button`,{type:`button`,className:`kka-inst-cat-nav kka-inst-cat-prev`,onClick:()=>a(-1),"aria-label":`Previous categories`,children:(0,i.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,i.jsx)(`polyline`,{points:`15 18 9 12 15 6`})})}),(0,i.jsxs)(`div`,{id:`instCatTrack`,className:`kka-inst-cat-track`,children:[(0,i.jsxs)(`div`,{className:`kka-inst-cat-card`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/icn-1.svg`,alt:`Best District for Skill Development`,className:`kka-inst-cat-icon`}),(0,i.jsx)(`p`,{className:`kka-inst-cat-text`,children:`Best District for Skill Development`})]}),(0,i.jsxs)(`div`,{className:`kka-inst-cat-card`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/icn-2.svg`,alt:`Best Institutions in Skill Competitions`,className:`kka-inst-cat-icon`}),(0,i.jsx)(`p`,{className:`kka-inst-cat-text`,children:`Best Institutions in Skill Competitions`})]}),(0,i.jsxs)(`div`,{className:`kka-inst-cat-card`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/icn-3.svg`,alt:`Best Performing ITIs – Government, Private, and Aided`,className:`kka-inst-cat-icon`}),(0,i.jsx)(`p`,{className:`kka-inst-cat-text`,children:`Best Performing ITIs – Government, Private, and Aided`})]}),(0,i.jsxs)(`div`,{className:`kka-inst-cat-card`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/icn-4.svg`,alt:`Best Performing GTTCs and KGTTIs`,className:`kka-inst-cat-icon`}),(0,i.jsx)(`p`,{className:`kka-inst-cat-text`,children:`Best Performing GTTCs and KGTTIs`})]}),(0,i.jsxs)(`div`,{className:`kka-inst-cat-card`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/icn-5.svg`,alt:`NLM (SHGs) / Other Private Partners – Special Recognition`,className:`kka-inst-cat-icon`}),(0,i.jsx)(`p`,{className:`kka-inst-cat-text`,children:`NLM (SHGs) / Other Private Partners – Special Recognition`})]}),(0,i.jsxs)(`div`,{className:`kka-inst-cat-card`,children:[(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/icn-6.svg`,alt:`Trainer, Principal and Trainee Awards`,className:`kka-inst-cat-icon`}),(0,i.jsx)(`p`,{className:`kka-inst-cat-text`,children:`Trainer, Principal and Trainee Awards`})]})]}),(0,i.jsx)(`button`,{type:`button`,className:`kka-inst-cat-nav kka-inst-cat-next`,onClick:()=>a(1),"aria-label":`Next categories`,children:(0,i.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,i.jsx)(`polyline`,{points:`9 18 15 12 9 6`})})})]})]})}),(0,i.jsxs)(`section`,{id:`inst-2025-winners`,className:`kka-showcase-section`,children:[(0,i.jsxs)(`svg`,{className:`showcase-watermark watermark-top-left`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,i.jsx)(`rect`,{x:`2`,y:`3`,width:`20`,height:`14`,rx:`2`,ry:`2`}),(0,i.jsx)(`line`,{x1:`8`,y1:`21`,x2:`16`,y2:`21`}),(0,i.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12`,y2:`21`})]}),(0,i.jsxs)(`svg`,{className:`showcase-watermark watermark-bottom-left`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,i.jsx)(`path`,{d:`M2 20h20`}),(0,i.jsx)(`path`,{d:`M5 20V8l5 4V8l5 4V4h4v16`})]}),(0,i.jsxs)(`svg`,{className:`showcase-watermark watermark-top-right`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,i.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,i.jsx)(`path`,{d:`M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z`})]}),(0,i.jsxs)(`svg`,{className:`showcase-watermark watermark-bottom-right`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,i.jsx)(`path`,{d:`M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z`}),(0,i.jsx)(`path`,{d:`m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z`}),(0,i.jsx)(`path`,{d:`M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0`}),(0,i.jsx)(`path`,{d:`M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`})]}),(0,i.jsxs)(`div`,{className:`kka-showcase-inner`,children:[(0,i.jsx)(`h2`,{className:`kka-showcase-title`,children:`Celebrate the organisations recognised in 2025 for their exceptional contributions to skilling.`}),(0,i.jsx)(`a`,{href:`https://bengaluruskillsummit.com/kaushalya-karnataka-awards-2025`,className:`kka-showcase-btn`,target:`_blank`,rel:`noopener noreferrer`,children:`2025 WINNERS SHOWCASE`})]})]}),(0,i.jsxs)(`div`,{className:`kka-inst-partners-wrap`,children:[(0,i.jsx)(`h3`,{className:`kka-inst-organised-title`,children:`Organised by`}),(0,i.jsx)(`img`,{src:`https://bengaluruskillsummit.com/wp-content/uploads/2026/09/Group-1410089643.svg`,alt:`Organised by: Government of Karnataka, Kaushalya Karnataka`,className:`kka-inst-organised-svg`})]})]})]})}export{a as default};