import React, { useState, useEffect } from 'react';

const faqsList = [
  {
    "q": "What are the Kaushalya Karnataka Awards 2025?",
    "a": "The Kaushalya Karnataka Awards 2025, powered by Workplace Awards, are being launched as part of the Bengaluru Skill Summit 2025. They celebrate organizations driving excellence in skilling, upskilling, and workforce transformation across Karnataka."
  },
  {
    "q": "Why do these awards matter?",
    "a": "These awards are more than just recognition. They are hosted within the Bengaluru Skill Summit 2025, Karnataka’s flagship platform on skilling, employment, and entrepreneurship. Winning here means being showcased at the state’s most influential gathering of government leaders, industry pioneers, academia, and global partners — amplifying both credibility and impact."
  },
  {
    "q": "Who can apply for these awards?",
    "a": "The awards are open to Startups / Small &amp; Medium Enterprises (SMEs) / Micro, Small &amp; Medium Enterprises (MSMEs), and Enterprises across industries including IT/ITES, GCCs, Manufacturing, Pharma &amp; Life Sciences, Retail, BFSI, and others (Energy, Logistics, Sustainability)."
  },
  {
    "q": "How many award categories are there?",
    "a": "There are 24 Awards in total:<br /> • 10 for Startups/SMEs/MSMEs<br /> • 14 for Corporates/Large Enterprise across 7 sectors (2 per sector)."
  },
  {
    "q": "Can an organisation submit nominations in multiple award categories?",
    "a": "No. Each organisation is allowed to nominate in only one category to ensure focused evaluation and fair recognition."
  },
  {
    "q": "What is the application process?",
    "a": "• Submit your Nominations via the offcial website.<br /> • Provide supporting evidence such as impact reports, MoUs, audits, and policies. (Special (Google/Microsoft) form will be shared to collect this data once the nominations is accepted)<br /> • Shortlisting will be based on structured criteria.<br /> • Final winners will be decided by a jury comprising leaders from industry, academia, and government."
  },
  {
    "q": "What are the evaluation criteria?",
    "a": "Evaluation is based on parameters like innovation, impact, inclusivity, scale, governance, apprenticeships/internships/fellowships, and alignment with learning &amp; development policies."
  },
  {
    "q": "When and where will the awards be presented?",
    "a": "The winners will be recognized at the Bengaluru Skill Summit 2025 on 5–6 November 2025 in Bengaluru."
  },
  {
    "q": "Is there an application fee?",
    "a": "No. Participation in the Kaushalya Karnataka Awards 2025 is free of cost."
  },
  {
    "q": "Who is powering the awards?",
    "a": "The awards are powered by Workplace Awards, an established platform known for recognizing excellence in workplace practices and workforce transformation."
  },
  {
    "q": "What is the larger impact of these awards?",
    "a": "• They build a benchmark framework for evaluating skilling efforts.<br /> • Recognize leaders driving Karnataka’s talent competitiveness.<br /> • Inspire replication of best practices across industries.<br /> • Reinforce Karnataka’s position as the skilling capital of India."
  }
];

export default function KaushalyaKarnatakaAwardsOld() {
  const [activeTab, setActiveTab] = useState('corporate');
  const [openFaqs, setOpenFaqs] = useState({ 0: true });

  useEffect(() => {
    document.title = 'Kaushalya Karnataka Awards 2025 | Celebrating Excellence in Skills';
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="kka-old-page">
      <style>{`
        .kka-old-page {
          font-family: "Comfortaa", sans-serif;
          color: #0e1220;
          overflow-x: hidden;
        }

        /* ---------------- OFFICIAL PAGE STYLES (MATCHING LIVE) ---------------- */
        .has-animation,
        .wpb_animate_when_almost_visible,
        .wpb_column.has-animation,
        .inner-wrap.animated {
          opacity: 1 !important;
          visibility: visible !important;
          transform: none !important;
        }

        .vc_custom_1759240554946 {
          background-image: url(/wp-content/uploads/2025/09/corporate-excellence-awards-bg.webp) !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-size: cover !important;
        }
        .vc_custom_1759238383085 {
          background-image: url(/wp-content/uploads/2025/09/CEA-award-category-bg.webp) !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-size: cover !important;
        }
        .vc_custom_1759241199159 {
          background-image: url(/wp-content/uploads/2025/09/institutional-excellence-awards-bg.webp) !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-size: cover !important;
        }

        .application-closed {
          opacity: 0.8;
          cursor: not-allowed;
          pointer-events: none;
        }
        #kka-banner-logo-section {
          display: none;
        }
        .kka-main-logo-banner {
          width: 55%;
        }
        @media (max-width: 767px) {
          #kk-awards-banner img {
            width: 70%;
          }
        }
        .recognize-row-style .row_col_wrap_12_inner.col.span_12.left {
          justify-content: center;
        }
        .CEA-Recognize {
          position: absolute;
          top: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 95%;
          background: #000;
          border-radius: 10px;
        }
        @media (max-width:998px) {
          .CEA-Recognize {
            position: relative;
            top: 0%;
            left: 0%;
            transform: none;
            width: 100%;
            background: #000;
            border-radius: 5px;
            margin-bottom: 10px !important;
            font-size: 16px !important;
          }
        }

        /* Awards tab section */
        #kka-awards-tabs {
          padding-top: 40px;
          padding-bottom: 20px;
        }
        #kka-awards-tabs ul.wpb_tabs_nav.ui-tabs-nav {
          gap: 20px;
          justify-self: center;
          text-transform: uppercase;
          font-size: 18px;
          margin-bottom: 0px;
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 0;
        }
        #kka-awards-tabs ul.wpb_tabs_nav.ui-tabs-nav li {
          list-style: none;
        }
        #kka-awards-tabs ul.wpb_tabs_nav.ui-tabs-nav li a {
          font-family: "Comfortaa", sans-serif;
          border: 2px solid #022E77;
          color: #022E77;
          padding: 14px 28px;
          display: inline-block;
          text-decoration: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.25s ease;
        }
        #kka-awards-tabs ul.wpb_tabs_nav.ui-tabs-nav li.active-tab a,
        #kka-awards-tabs ul.wpb_tabs_nav.ui-tabs-nav li a.active-tab {
          background: #022E77;
          color: #fff;
        }
        #kka-awards-tabs #tab-corporate-excellence-awards .corporate-awards-powered-img {
          width: 45%;
        }
        @media (max-width: 768px) {
          #kka-awards-tabs #tab-corporate-excellence-awards .corporate-awards-powered-img {
            width: 100%;
          }
          #kka-awards-tabs #tab-institutional-excellence-awards .iea-initiated-img {
            width: 60%;
          }
        }
        @media (min-width: 768px) {
          .kka-large-img, .kka-startup-img {
            width: 75%;
            display: block;
            margin: 0 auto;
          }
          .kka-large-img-mob, .kka-startup-img-mob {
            display: none !important;
          }
          .key-dates-img {
            display: block;
            margin: 0 auto;
          }
          .key-dates-img-mob {
            display: none !important;
          }
          .ac-category-startup, .ac-category-enterprises {
            display: block;
            width: 70%;
            margin: 0 auto;
          }
          .ac-category-startup-mob, .ac-category-enterprises-mob {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .kka-large-img, .kka-startup-img {
            display: none !important;
          }
          .kka-large-img-mob, .kka-startup-img-mob {
            display: block;
            width: 65%;
            margin: 0 auto;
          }
          .key-dates-img {
            display: none !important;
          }
          .key-dates-img-mob {
            display: block;
            margin: 0 auto;
          }
          .ac-category-startup, .ac-category-enterprises {
            display: none !important;
          }
          .ac-category-startup-mob, .ac-category-enterprises-mob {
            display: block;
            margin: 0 auto;
          }
        }
        @media (max-width: 767px) {
          #kka-awards-tabs ul.wpb_tabs_nav.ui-tabs-nav {
            gap: 10px;
            flex-direction: column;
            align-items: center;
          }
          #kka-awards-tabs ul.wpb_tabs_nav.ui-tabs-nav li a {
            padding: 12px 20px;
          }
        }

        /* ---------------- MODERN FAQ ACCORDION (WITH RIGHT CIRCULAR ICONS) ---------------- */
        .kka-faq-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .kka-faq-item {
          border-bottom: 1px solid #e2e8f0;
          transition: background-color 0.2s ease;
        }

        .kka-faq-item:first-child {
          border-top: 1px solid #e2e8f0;
        }

        .kka-faq-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;
          cursor: pointer;
          user-select: none;
          gap: 20px;
          text-decoration: none;
        }

        .kka-faq-question {
          font-family: "Comfortaa", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0e1220;
          margin: 0;
          line-height: 1.4;
          text-align: left;
        }

        .kka-faq-icon-wrap {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          cursor: pointer;
        }

        .kka-faq-body {
          padding-bottom: 24px;
          padding-right: 40px;
          font-family: "Comfortaa", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          color: #374151;
          text-align: left;
        }

        @media (max-width: 768px) {
          .kka-faq-question {
            font-size: 16px;
            line-height: 1.35;
          }
          .kka-faq-header {
            padding: 18px 0;
          }
          .kka-faq-body {
            font-size: 14.5px;
            padding-right: 10px;
          }
        }

        /* ---------------- CONTACT CARDS SECTION (SCREENSHOT 2) ---------------- */
        #contact-info {
          position: relative;
          box-sizing: border-box;
          padding: 70px 20px 80px 20px;
          background: #525252 url('/wp-content/uploads/2025/08/footer-white-and-gray-bg.svg') center center no-repeat;
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

        @media (max-width: 1100px) {
          #contact-info .contact-info-card {
            flex: 1 1 calc(33.333% - 16px);
          }
        }

        @media (max-width: 768px) {
          #contact-info .contact-info-card {
            flex: 1 1 calc(50% - 16px);
          }
        }

        @media (max-width: 600px) {
          #contact-info .contact-info-card {
            flex: 1 1 100%;
          }
        }
      `}</style>

      {/* Hero Banner Section */}
      <div id="kk-awards-banner"  data-column-margin="default" data-midnight="dark" data-top-percent="5%" data-bottom-percent="5%"  className="wpb_row vc_row-fluid vc_row top-level full-width-section  right_padding_10pct left_padding_10pct top_padding_phone_10pct bottom_padding_phone_10pct right_padding_phone_1pct left_padding_phone_1pct"  style={{"paddingTop":"calc(100vw * 0.05)","paddingBottom":"calc(100vw * 0.05)"}}><div className="row-bg-wrap" data-bg-animation="none" data-bg-animation-delay="" data-bg-overlay="false"><div className="inner-wrap row-bg-layer using-image" ><div className="row-bg viewport-desktop using-image"  style={{"backgroundPosition":"center center","backgroundRepeat":"no-repeat","backgroundImage":"url('/wp-content/uploads/2025/09/banner-skillathon-05.png')","backgroundSize":"cover"}} ></div></div></div><div className="row_col_wrap_12 col span_12 dark left"><div style={{}} className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-5-percent inherit_tablet inherit_phone border_left_desktop_1px border_top_desktop_0px border_right_desktop_2px border_bottom_desktop_4px border_color_00000017 border_style_solid tl_br_12px tr_br_12px bl_br_12px br_br_12px " data-using-bg="true" data-shadow="custom" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#ffffff" data-bg-opacity="0.8" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"0.8","backgroundColor":"#ffffff"}}></div></div><div className="wpb_wrapper"><div id="fws_6aa0f6b31f392" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row"  style={{}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column centered-text no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_60px font_size_phone_40px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#106cff"}} data-inherit-heading-family="h1"><h1 style={{"fontWeight":"bold"}}>Kaushalya Karnataka Awards 2025</h1></div><div className="nectar-responsive-text font_size_desktop_36px font_size_phone_28px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#0e1220"}} data-inherit-heading-family="h3"><h1 style={{"fontWeight":"400"}}>Celebrating Excellence in Skills</h1></div></div></div></div></div></div><div id="kka-banner-logo-section" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row  right_padding_8pct left_padding_8pct"  style={{}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div  className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column centered-text no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_16px nectar-link-underline-effect" style={{"color":"#929497"}} data-inherit-heading-family="p"><p>Co-located with</p></div><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginTop":"15px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation skip-lazy " data-delay="0" height="102" width="202" data-animation="none" src="/wp-content/uploads/2025/09/kka-bss.webp" alt="kka bss"   /></div></div></div></div></div></div></div><div  className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column centered-text no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_16px nectar-link-underline-effect" style={{"color":"#929497"}} data-inherit-heading-family="p"><p>Presented by</p></div><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginTop":"15px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation skip-lazy " data-delay="0" height="102" width="202" data-animation="none" src="/wp-content/uploads/2025/09/kka-presented-by.webp" alt="kka presented by"   /></div></div></div></div></div></div></div><div  className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column centered-text no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_16px nectar-link-underline-effect" style={{"color":"#929497"}} data-inherit-heading-family="p"><p>In partnership with</p></div><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginTop":"15px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation skip-lazy " data-delay="0" height="102" width="202" data-animation="none" src="/wp-content/uploads/2025/09/kka-partnership.webp" alt="kka partnership"   /></div></div></div></div></div></div></div></div></div></div></div></div></div></div>

      {/* Official Tabs Navigation Bar */}
      <div id="kka-awards-tabs" className="wpb_content_element kka-main-tabs">
        <div className="wpb_wrapper tabbed clearfix" data-style="minimal_flexible">
          <ul className="wpb_tabs_nav ui-tabs-nav clearfix">
            <li className={`tab-item ${activeTab === 'corporate' ? 'active-tab' : ''}`}>
              <a
                role="button"
                className={activeTab === 'corporate' ? 'active-tab' : ''}
                onClick={() => setActiveTab('corporate')}
              >
                <span>corporate excellence awards</span>
              </a>
            </li>
            <li className={`tab-item ${activeTab === 'institutional' ? 'active-tab' : ''}`}>
              <a
                role="button"
                className={activeTab === 'institutional' ? 'active-tab' : ''}
                onClick={() => setActiveTab('institutional')}
              >
                <span>institutional excellence awards</span>
              </a>
            </li>
          </ul>

          {/* Tab 1: Corporate Excellence Awards */}
          <div
            id="tab-corporate-excellence-awards"
            className="wpb_tab ui-tabs-panel clearfix"
            style={{ display: activeTab === 'corporate' ? 'block' : 'none' }}
          >
            <div id="fws_6aa0f6b320d63" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row vc_row-o-equal-height vc_row-flex vc_row-o-content-middle vc_custom_1759240554946 right_padding_15pct left_padding_15pct right_padding_phone_8pct left_padding_phone_8pct"  style={{"paddingTop":"70px","paddingBottom":"70px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  center"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_45px font_size_phone_36px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"uppercase","fontWeight":"bold","marginBottom":"20px"}}>Corporate Excellence Awards</h2></div><div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none" ><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation corporate-awards-powered-img skip-lazy " data-delay="0" height="248" width="976" data-animation="none" src="/wp-content/uploads/2025/09/kka-main-logos-25-new.png" alt="kka main logos 25 new"   /></div></div></div></div><div className="nectar-responsive-text font_size_desktop_48px font_size_phone_36px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"uppercase","fontWeight":"bold","marginTop":"30px"}}>recognising Corporate</h2><h2 style={{"textTransform":"uppercase","fontWeight":"bold","marginBottom":"15px"}}>Leadership in Skilling</h2></div><div className="nectar-responsive-text font_size_desktop_16px nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><p>The Corporate Excellence Awards celebrate organisations – from disruptive startups to established enterprises – that are redefining skilling, upskilling, and workforce transformation..</p><p><span data-olk-copy-source="MessageBody">Organised by KSDA and the Government of Karnataka as part of the Bengaluru Skill Summit, and in partnership with KDEM and the Zyoin Group, these awards spotlight corporate leaders whose progressive practices and collaborative models are driving inclusive growth, innovation, and workforce competitiveness across the state.</span></p><p>Powered by Workplace Awards, this initiative underscores a commitment to advancing people practices and honouring the changemakers who are shaping an inclusive, future-ready workforce for the state and the nation.</p></div><a className="nectar-button large regular extra-color-1  regular-button application-closed"  role="button" style={{"marginTop":"30px","color":"#ffffff"}}  href="#" data-color-override="false" data-hover-color-override="false" data-hover-text-color-override="#fff"><span>APPLICATIONS ARE CLOSED</span></a></div></div></div></div></div><div id="fws_6aa0f6b321472" data-midnight="" data-column-margin="20px" className="wpb_row vc_row-fluid vc_row inner_row vc_row-o-equal-height vc_row-flex recognize-row-style right_padding_15pct left_padding_15pct top_padding_phone_50px bottom_padding_phone_0px right_padding_phone_6pct left_padding_phone_6pct"  style={{"paddingTop":"70px","paddingBottom":"50px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div style={{"marginBottom":"50px"}} className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column padding-2-percent force-desktop-text-align-center bottom_margin_phone_25px inherit_tablet inherit_phone "   data-shadow="small_depth" data-border-radius="10px" data-border-animation="" data-border-animation-delay="" data-border-width="1px" data-border-style={{}} data-border-color="#0a0a0a" data-overlay-color="true" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" style={{"border":"1px solid #0a0a0a"}}><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay"></div><div className="column-overlay-layer" style={{"background":"linear-gradient(to bottom,#ffffff 0%,#eff5ff 100%)","opacity":"0.8"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text CEA-Recognize font_size_desktop_18px nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><p>Recognize Innovation</p></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="p"><p>Celebrate Startups, Small &amp; Medium Enterprises and Micro, Small &amp; Medium Enterprises pioneering new skilling solutions.</p></div></div></div></div><div style={{"marginBottom":"50px"}} className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column padding-2-percent force-desktop-text-align-center bottom_margin_phone_25px inherit_tablet inherit_phone "   data-shadow="small_depth" data-border-radius="10px" data-border-animation="" data-border-animation-delay="" data-border-width="1px" data-border-style={{}} data-border-color="#0a0a0a" data-overlay-color="true" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" style={{"border":"1px solid #0a0a0a"}}><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay"></div><div className="column-overlay-layer" style={{"background":"linear-gradient(to bottom,#ffffff 0%,#eff5ff 100%)","opacity":"0.8"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text CEA-Recognize font_size_desktop_18px nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><p>Celebrate Scale</p></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="p"><p>Honor enterprises that have institutionalized impactful large-scale skilling initiatives.</p></div></div></div></div><div style={{"marginBottom":"50px"}} className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column padding-2-percent force-desktop-text-align-center bottom_margin_phone_25px inherit_tablet inherit_phone "   data-shadow="small_depth" data-border-radius="10px" data-border-animation="" data-border-animation-delay="" data-border-width="1px" data-border-style={{}} data-border-color="#0a0a0a" data-overlay-color="true" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" style={{"border":"1px solid #0a0a0a"}}><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay"></div><div className="column-overlay-layer" style={{"background":"linear-gradient(to bottom,#ffffff 0%,#eff5ff 100%)","opacity":"0.8"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text CEA-Recognize font_size_desktop_18px nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><p>Enable Pathways</p></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="p"><p>Encourage apprenticeships, internships, and fellowships as structured routes to employability.</p></div></div></div></div><div  className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column padding-2-percent force-desktop-text-align-center inherit_tablet inherit_phone "   data-shadow="small_depth" data-border-radius="10px" data-border-animation="" data-border-animation-delay="" data-border-width="1px" data-border-style={{}} data-border-color="#0a0a0a" data-overlay-color="true" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" style={{"border":"1px solid #0a0a0a"}}><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay"></div><div className="column-overlay-layer" style={{"background":"linear-gradient(to bottom,#ffffff 0%,#eff5ff 100%)","opacity":"0.8"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text CEA-Recognize font_size_desktop_18px nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><p>Elevate Commitment</p></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="p"><p>Highlight organizations demonstrating strong policy-level dedication to skill development.</p></div></div></div></div><div  className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column padding-2-percent force-desktop-text-align-center inherit_tablet inherit_phone "   data-shadow="small_depth" data-border-radius="10px" data-border-animation="" data-border-animation-delay="" data-border-width="1px" data-border-style={{}} data-border-color="#0a0a0a" data-overlay-color="true" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" style={{"border":"1px solid #0a0a0a"}}><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay"></div><div className="column-overlay-layer" style={{"background":"linear-gradient(to bottom,#ffffff 0%,#eff5ff 100%)","opacity":"0.8"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text CEA-Recognize font_size_desktop_18px nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><p>Promote Inclusion</p></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="p"><p>Advance diversity by recognizing initiatives in skilling for women, PwD, and underserved communities.</p></div></div></div></div></div></div><div id="fws_6aa0f6b321c45" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row vc_row-o-equal-height vc_row-flex vc_row-o-content-middle vc_custom_1759238383085 right_padding_8pct left_padding_8pct"  style={{"paddingTop":"50px","paddingBottom":"50px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  center"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_45px font_size_phone_36px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"uppercase","fontWeight":"bold"}}>Award Categories</h2></div><div className="nectar-responsive-text font_size_desktop_30px font_size_phone_22px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"uppercase","fontWeight":"400","marginBottom":"20px"}}>Corporate Excellence Awards in Skilling</h2></div><div className="img-with-aniamtion-wrap center margin_top_phone_0px margin_bottom_phone_0px " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginTop":"50px","marginBottom":"0px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation ac-category-startup skip-lazy " data-delay="0" height="486" width="1714" data-animation="none" src="/wp-content/uploads/2025/09/awards-categories-startups-new.png" alt="awards categories startups new"   /></div></div></div></div><div className="img-with-aniamtion-wrap  margin_top_phone_40px margin_bottom_phone_10px " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginTop":"0px","marginBottom":"0px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation ac-category-startup-mob skip-lazy " data-delay="0" height="540" width="718" data-animation="none" src="/wp-content/uploads/2025/09/awards-categories-startups-mobile-new.png" alt="awards categories startups mobile new"   /></div></div></div></div><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginTop":"30px","marginBottom":"0px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation ac-category-enterprises skip-lazy " data-delay="0" height="608" width="1698" data-animation="none" src="/wp-content/uploads/2025/11/awards-categories-large-enterprises-nov.png" alt="awards categories large enterprises nov"   /></div></div></div></div><div className="img-with-aniamtion-wrap  margin_top_phone_20px margin_bottom_phone_10px " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginTop":"0px","marginBottom":"0px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation ac-category-enterprises-mob skip-lazy " data-delay="0" height="1008" width="702" data-animation="none" src="/wp-content/uploads/2025/11/awards-categories-large-enterprises-mobile-nov.png" alt="awards categories large enterprises mobile nov"   /></div></div></div></div><a className="nectar-button large regular extra-color-1  regular-button application-closed"  role="button" style={{"marginTop":"30px","color":"#ffffff"}}  href="#" data-color-override="false" data-hover-color-override="false" data-hover-text-color-override="#fff"><span>APPLICATIONS ARE CLOSED</span></a></div></div></div></div></div><div id="fws_6aa0f6b3228b7" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row  right_padding_8pct left_padding_8pct top_padding_phone_40px"  style={{"paddingTop":"70px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding force-desktop-text-align-center inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_45px font_size_phone_36px nectar-link-underline-effect" style={{"color":"#0d53c7"}} data-inherit-heading-family="h2"><h2 style={{"fontWeight":"bold"}}>Why Participate</h2></div><div className="nectar-responsive-text font_size_desktop_30px font_size_phone_22px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"uppercase","fontWeight":"400","marginBottom":"20px"}}>Key Reasons to Participate</h2></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="p"><p>Showcase your leadership, credibility, and a strong commitment to shaping the future workforce.</p></div></div></div></div></div></div><div id="fws_6aa0f6b322b57" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row vc_row-o-equal-height vc_row-flex vc_row-o-content-middle right_padding_8pct left_padding_8pct top_padding_phone_40px bottom_padding_phone_0px"  style={{"paddingTop":"70px","paddingBottom":"40px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div  className="vc_col-sm-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="img-with-aniamtion-wrap center margin_bottom_phone_15px " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none" ><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation skip-lazy " data-delay="0" height="472" width="467" data-animation="none" src="/wp-content/uploads/2025/09/why-participate.webp" alt="why participate"   /></div></div></div></div></div></div></div><div  className="vc_col-sm-6 wpb_column column_container vc_column_container col child_column no-extra-padding force-desktop-text-align-left inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_25px font_size_phone_21px font_line_height_35px nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="p"><p style={{"marginBottom":"26px"}}>Key Benefits</p></div><div className="nectar-fancy-ul font_size_desktop_16px font_line_height_26px" data-list-icon="icon-salient-check" data-animation="false" data-animation-delay="0" data-color="accent-color" data-spacing="15px" data-alignment="left"><ul><li>National visibility at India’s premier Skill Summit.</li><li>Recognition by Government of Karnataka.</li><li>Showcase Skill Development / CSR / ESG leadership in workforce development.</li><li>Strengthened employer branding in skill development.</li></ul></div></div></div></div></div></div><div id="fws_6aa0f6b3230d2" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row  right_padding_8pct left_padding_8pct top_padding_phone_40px"  style={{"paddingTop":"70px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding force-desktop-text-align-center inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_45px font_size_phone_36px nectar-link-underline-effect" style={{"color":"#0d53c7"}} data-inherit-heading-family="h2"><h2 style={{"fontWeight":"bold"}}>Evaluation Process</h2></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="p"><p>Showcase your leadership, credibility, and a strong commitment to shaping the future workforce.</p></div></div></div></div></div></div><div id="fws_6aa0f6b323300" data-midnight="" data-column-margin="custom" className="wpb_row vc_row-fluid vc_row inner_row vc_row-o-equal-height vc_row-flex right_padding_8pct left_padding_8pct column-margin-0px"  style={{"paddingTop":"40px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  center"><div  className="vc_col-sm-1/5 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginBottom":"10px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation skip-lazy " data-delay="0" height="69" width="205" data-animation="none" src="/wp-content/uploads/2025/09/criteria-step-1.webp" alt="criteria step 1"   /></div></div></div></div><div className="nectar-responsive-text font_size_desktop_18px font_line_height_28px nectar-link-underline-effect" style={{"color":"#000000"}} data-inherit-heading-family="p"><p><strong>Nomination</strong></p></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#000000"}} data-inherit-heading-family="p"><p>Submit via official website</p></div></div></div></div><div  className="vc_col-sm-1/5 wpb_column column_container vc_column_container col child_column no-extra-padding top_margin_phone_40px bottom_margin_phone_40px inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginBottom":"10px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation skip-lazy " data-delay="0" height="69" width="205" data-animation="none" src="/wp-content/uploads/2025/09/criteria-step-2.webp" alt="criteria step 2"   /></div></div></div></div><div className="nectar-responsive-text font_size_desktop_18px font_line_height_28px nectar-link-underline-effect" style={{"color":"#000000"}} data-inherit-heading-family="p"><p><strong>Evidence Submission</strong></p></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#000000"}} data-inherit-heading-family="p"><p>Impact reports, MoUs, audits, and policies.</p></div></div></div></div><div  className="vc_col-sm-1/5 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginBottom":"10px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation skip-lazy " data-delay="0" height="69" width="205" data-animation="none" src="/wp-content/uploads/2025/09/criteria-step-3.webp" alt="criteria step 3"   /></div></div></div></div><div className="nectar-responsive-text font_size_desktop_18px font_line_height_28px nectar-link-underline-effect" style={{"color":"#000000"}} data-inherit-heading-family="p"><p><strong>Shortlisting</strong></p></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#000000"}} data-inherit-heading-family="p"><p>Based on structured scorecards.</p></div></div></div></div><div  className="vc_col-sm-1/5 wpb_column column_container vc_column_container col child_column no-extra-padding top_margin_phone_40px bottom_margin_phone_40px inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginBottom":"10px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation skip-lazy " data-delay="0" height="69" width="205" data-animation="none" src="/wp-content/uploads/2025/09/criteria-step-4.webp" alt="criteria step 4"   /></div></div></div></div><div className="nectar-responsive-text font_size_desktop_18px font_line_height_28px nectar-link-underline-effect" style={{"color":"#000000"}} data-inherit-heading-family="p"><p><strong>Evaluation</strong></p></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#000000"}} data-inherit-heading-family="p"><p>Based on the data and evidences provided</p></div></div></div></div><div  className="vc_col-sm-1/5 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginBottom":"10px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation skip-lazy " data-delay="0" height="69" width="205" data-animation="none" src="/wp-content/uploads/2025/09/criteria-step-5.webp" alt="criteria step 5"   /></div></div></div></div><div className="nectar-responsive-text font_size_desktop_18px font_line_height_28px nectar-link-underline-effect" style={{"color":"#000000"}} data-inherit-heading-family="p"><p><strong>Recognition</strong></p></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_26px nectar-link-underline-effect" style={{"color":"#000000"}} data-inherit-heading-family="p"><p>Award ceremony at the Bengaluru Skill Summit 2025.</p></div></div></div></div></div></div><div id="fws_6aa0f6b32435f" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row  right_padding_8pct left_padding_8pct top_padding_phone_50px"  style={{"paddingTop":"90px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding force-desktop-text-align-center inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_45px font_size_phone_36px nectar-link-underline-effect" style={{"color":"#0d53c7"}} data-inherit-heading-family="h2"><h2 style={{"fontWeight":"bold","marginBottom":"15px"}}>Criteria</h2></div><div className="nectar-responsive-text font_size_desktop_30px font_size_phone_24px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="h4"><h4 style={{"textTransform":"none !important"}}>Startups / Small &amp; Medium Enterprises (SMEs) / Micro, Small &amp; Medium Enterprises (MSMEs)</h4></div><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginTop":"40px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation kka-startup-img skip-lazy " data-delay="0" height="248" width="1151" data-animation="none" src="/wp-content/uploads/2025/09/startups.webp" alt="startups"   /></div></div></div></div><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginTop":"40px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation kka-startup-img-mob skip-lazy " data-delay="0" height="938" width="316" data-animation="none" src="/wp-content/uploads/2025/09/startups-mobile.webp" alt="startups mobile"   /></div></div></div></div></div></div></div></div></div><div id="fws_6aa0f6b32495f" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row  right_padding_8pct left_padding_8pct top_padding_phone_50px"  style={{"paddingTop":"20px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding force-desktop-text-align-center inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_30px font_size_phone_24px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="h4"><h4 style={{"textTransform":"none !important"}}>Large Enterprises</h4></div><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginTop":"40px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation kka-large-img-mob skip-lazy " data-delay="0" height="1183" width="334" data-animation="none" src="/wp-content/uploads/2025/09/large-enterprises-mobile.webp" alt="large enterprises mobile"   /></div></div></div></div><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none"  style={{"marginTop":"40px"}}><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation kka-large-img skip-lazy " data-delay="0" height="483" width="1074" data-animation="none" src="/wp-content/uploads/2025/09/large-enterprises.webp" alt="large enterprises"   /></div></div></div></div></div></div></div></div></div><div id="fws_6aa0f6b324f0d" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row  right_padding_8pct left_padding_8pct top_padding_phone_30px bottom_padding_phone_40px"  style={{"paddingTop":"90px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding force-desktop-text-align-center inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_45px font_size_phone_36px nectar-link-underline-effect" style={{"color":"#0d53c7"}} data-inherit-heading-family="h2"><h2 style={{"fontWeight":"bold"}}>Key Timelines</h2></div><div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none" ><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation key-dates-img skip-lazy " data-delay="0" height="719" width="2560" data-animation="none" src="/wp-content/uploads/2025/10/key-feature-desktop-oct-scaled.png" alt="key feature desktop oct"   /></div></div></div></div><div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none" ><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation key-dates-img-mob skip-lazy " data-delay="0" height="577" width="641" data-animation="none" src="/wp-content/uploads/2025/10/key-feature-mobile-oct.png" alt="key feature mobile oct"   /></div></div></div></div><a className="nectar-button large regular extra-color-1  regular-button application-closed"  role="button" style={{"marginTop":"20px","color":"#ffffff"}}  href="#" data-color-override="false" data-hover-color-override="false" data-hover-text-color-override="#fff"><span>APPLICATIONS ARE CLOSED</span></a></div></div></div></div></div><div id="fws_6aa0f6b32554a" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row  right_padding_8pct left_padding_8pct top_padding_phone_30px bottom_padding_phone_40px"  style={{"paddingTop":"70px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  center"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_30px font_size_phone_26px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#0d53c7"}} data-inherit-heading-family="h2"><h2 style={{"fontWeight":"bold","marginBottom":"10px","textTransform":"none !important"}}>For more info, connect</h2></div><div className="nectar-responsive-text word-break font_size_desktop_22px font_size_phone_16px nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="p"><p><a href="mailto:bengaluruskillsummit@workplaceawards.in" style={{ color: "inherit", textDecoration: "none" }}>bengaluruskillsummit@workplaceawards.in</a></p></div><div className="nectar-responsive-text font_size_desktop_22px font_size_phone_16px nectar-link-underline-effect" data-inherit-heading-family="p"><p style={{"marginTop":"15px"}}>+91 8098805912</p></div></div></div></div></div></div>

            {/* Custom Interactive FAQs Section with Right Circular Icons */}
            <div id="hodl-faq-section" style={{ paddingTop: '70px', paddingBottom: '50px' }}>
              <div className="nectar-responsive-text Section-Heading" style={{ color: '#0d53c7', textAlign: 'center', marginBottom: '35px' }}>
                <h2 style={{ fontWeight: 'bold', textTransform: 'none', fontSize: '42px', margin: '0 0 10px 0' }}>FAQs</h2>
              </div>
              <div className="kka-faq-container">
                {faqsList.map((item, index) => {
                  const isOpen = !!openFaqs[index];
                  return (
                    <div key={index} className={`kka-faq-item ${isOpen ? 'is-open' : ''}`}>
                      <div
                        className="kka-faq-header"
                        onClick={() => toggleFaq(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFaq(index); }}
                      >
                        <h3 className="kka-faq-question">{item.q}</h3>
                        <div className="kka-faq-icon-wrap">
                          {isOpen ? (
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="14" cy="14" r="12" stroke="#000000" strokeWidth="2" />
                              <line x1="8" y1="14" x2="20" y2="14" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          ) : (
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="14" cy="14" r="12" stroke="#000000" strokeWidth="2" />
                              <line x1="14" y1="8" x2="14" y2="20" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                              <line x1="8" y1="14" x2="20" y2="14" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                      {isOpen && (
                        <div className="kka-faq-body">
                          <div dangerouslySetInnerHTML={{ __html: item.a }} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tab 2: Institutional Excellence Awards */}
          <div
            id="tab-institutional-excellence-awards"
            className="wpb_tab ui-tabs-panel clearfix"
            style={{ display: activeTab === 'institutional' ? 'block' : 'none' }}
          >
            <div id="fws_6aa0f6b3265d2" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row vc_row-o-equal-height vc_row-flex vc_row-o-content-middle vc_custom_1759241199159 right_padding_15pct left_padding_15pct right_padding_phone_8pct left_padding_phone_8pct"  style={{"paddingTop":"70px","paddingBottom":"70px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  center"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_45px font_size_phone_36px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"uppercase","fontWeight":"bold","marginBottom":"20px"}}>Institutional Excellence Awards</h2></div><div className="img-with-aniamtion-wrap center" data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="none" ><div className="inner"><div className="hover-wrap"><div className="hover-wrap-inner"> <img  className="img-with-animation iea-initiated-img skip-lazy " data-delay="0" height="124" width="225" data-animation="none" src="/wp-content/uploads/2025/09/ie-awards-img.webp" alt="ie awards img"   /></div></div></div></div><div className="nectar-responsive-text font_size_desktop_48px font_size_phone_36px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"uppercase","fontWeight":"bold","marginTop":"30px"}}>Recognising Institutional</h2><h2 style={{"textTransform":"uppercase","fontWeight":"bold","marginBottom":"15px"}}>Excellence in Skilling</h2></div><div className="nectar-responsive-text font_size_desktop_16px nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><div></div><p>The Institutional Excellence Awards honour the backbone of Karnataka’s skilling ecosystem &#8211; districts, ITIs, GTTCs, polytechnics, training centres, and community partners. The awards are not just accolades &#8211; they are a tribute to the educators, administrators, and community champions who are shaping the next generation of skilled professionals.</p><p>Initiated by KSDA and the Government of Karnataka, these recognitions celebrate innovation in training delivery, strong industry linkages, and measurable impact on employability.</p></div></div></div></div></div></div><div id="fws_6aa0f6b326c28" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row  right_padding_8pct left_padding_8pct top_padding_phone_50px"  style={{"paddingTop":"70px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding force-desktop-text-align-center inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_48px font_size_phone_36px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#0d53c7"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"uppercase","fontWeight":"bold","marginBottom":"5px"}}>Award Categories</h2></div><div className="nectar-responsive-text font_size_desktop_30px font_size_phone_22px nectar-link-underline-effect" style={{"color":"#0a0a0a"}} data-inherit-heading-family="h4"><h4>Institutional Excellence Awards in Skilling</h4></div></div></div></div></div></div><div id="fws_6aa0f6b326e43" data-midnight="" data-column-margin="20px" className="wpb_row vc_row-fluid vc_row inner_row vc_row-o-equal-height vc_row-flex right_padding_15pct left_padding_15pct bottom_padding_phone_0px right_padding_phone_6pct left_padding_phone_6pct"  style={{"paddingTop":"20px"}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div style={{}} className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column padding-2-percent force-desktop-text-align-left inherit_tablet padding-4-percent_phone "  data-using-bg="true" data-border-radius="15px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#0d53c7" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#0d53c7"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_25px font_size_phone_22px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"none !important","fontWeight":"bold","marginBottom":"15px"}}>Best District for Skill Development</h2></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_140pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><p>Honouring districts that have demonstrated leadership and innovation in promoting skilling initiatives, outreach, and impact on youth employability.</p></div></div></div></div><div style={{}} className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column padding-2-percent force-desktop-text-align-left inherit_tablet padding-4-percent_phone "  data-using-bg="true" data-border-radius="15px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#0d53c7" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#0d53c7"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_25px font_size_phone_22px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"none !important","fontWeight":"bold","marginBottom":"15px"}}>Best Institutions in Skill Competitions</h2></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_140pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><p>Recognizing institutions whose trainees have excelled in IndiaSkills and WorldSkills, bringing pride to Karnataka on national and global platforms.</p></div></div></div></div><div style={{}} className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column padding-2-percent force-desktop-text-align-left inherit_tablet padding-4-percent_phone "  data-using-bg="true" data-border-radius="15px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#0d53c7" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#0d53c7"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_25px font_size_phone_22px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"none !important","fontWeight":"bold","marginBottom":"15px"}}>Best Performing ITIs – Government, Private, and Aided</h2></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_140pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><p>Appreciating Industrial Training Institutes that have shown excellence in training delivery, placement outcomes, and industry collaboration.</p></div></div></div></div></div></div><div id="fws_6aa0f6b32739b" data-midnight="" data-column-margin="20px" className="wpb_row vc_row-fluid vc_row inner_row vc_row-o-equal-height vc_row-flex right_padding_15pct left_padding_15pct right_padding_phone_6pct left_padding_phone_6pct"  style={{}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div style={{}} className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column padding-2-percent force-desktop-text-align-left inherit_tablet padding-4-percent_phone "  data-using-bg="true" data-border-radius="15px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#0d53c7" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#0d53c7"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_25px font_size_phone_22px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"none !important","fontWeight":"bold","marginBottom":"15px"}}>Best Performing GTTCs and KGTTIs</h2></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_140pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><p>Celebrating Government Tool Room and Training Centers (GTTCs) and Karnataka German Tool Room and Training Institutes (KGTTIs) that have set benchmarks in technical training and innovation.</p></div></div></div></div><div style={{}} className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column padding-2-percent force-desktop-text-align-left inherit_tablet padding-4-percent_phone "  data-using-bg="true" data-border-radius="15px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#0d53c7" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#0d53c7"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_25px font_size_phone_22px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"none !important","fontWeight":"bold","marginBottom":"15px"}}>NLM (SHGs) / Other Private Partners – Special Recognition</h2></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_140pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><p>Acknowledging the efforts of Self Help Groups and private partners who contribute significantly to skill training and livelihood creation across Karnataka.</p></div></div></div></div><div style={{}} className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column padding-2-percent force-desktop-text-align-left inherit_tablet padding-4-percent_phone "  data-using-bg="true" data-border-radius="15px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#0d53c7" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#0d53c7"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_25px font_size_phone_22px font_line_height_110pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="h2"><h2 style={{"textTransform":"none !important","fontWeight":"bold","marginBottom":"15px"}}>Trainer, Principal and Trainee Awards</h2></div><div className="nectar-responsive-text font_size_desktop_16px font_line_height_140pct nectar-link-underline-effect" style={{"color":"#ffffff"}} data-inherit-heading-family="p"><ul><li>Best Trainers from ITIs, GTTCs, and KGTTIs</li><li>Best Principals from ITI, GTTC, and KGTTI</li><li>Outstanding Trainees from ITIs, GTTCs, KGTTIs, and other institutions</li></ul></div></div></div></div></div></div>
          </div>
        </div>
      </div>

      {/* Contact Cards Section (Screenshot 2) */}
      <section id="contact-info">
        <div className="contact-info-wrap">
          {/* Card 1 */}
          <div className="contact-info-card">
            <div className="contact-title">
              Sponsor and Exhibitor<br />Queries
            </div>
            <div>
              <div className="contact-name">Vinay Martin</div>
              <div className="contact-designation">Commercial Director – India &amp; Middle East</div>
              <div className="contact-email">
                <a href="mailto:vinay@bengaluruskillsummit.com">vinay@bengaluruskillsummit.com</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="contact-info-card">
            <div className="contact-title">
              Speaking and Partner<br />Queries
            </div>
            <div>
              <div className="contact-name">Simran Arora</div>
              <div className="contact-designation">Sr Conference Producer</div>
              <div className="contact-email">
                <a href="mailto:speaker@bengaluruskillsummit.com">speaker@bengaluruskillsummit.com</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="contact-info-card">
            <div className="contact-title">
              Marketing and Media<br />Queries
            </div>
            <div>
              <div className="contact-name">Thulasi S</div>
              <div className="contact-designation">Marketing Director</div>
              <div className="contact-email">
                <a href="mailto:marketing@bengaluruskillsummit.com">marketing@bengaluruskillsummit.com</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="contact-info-card">
            <div className="contact-title">
              Delegate Registration<br />Queries
            </div>
            <div>
              <div className="contact-name">Suraj Shetty</div>
              <div className="contact-designation">Director – Delegate Acquisition</div>
              <div className="contact-email">
                <a href="mailto:delegate@bengaluruskillsummit.com">delegate@bengaluruskillsummit.com</a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="contact-info-card">
            <div className="contact-title">
              Partnership<br />Queries
            </div>
            <div>
              <div className="contact-name">Praveen Kumar</div>
              <div className="contact-designation">Partnership Director</div>
              <div className="contact-email">
                <a href="mailto:partnerships@bengaluruskillsummit.com">partnerships@bengaluruskillsummit.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
