import React from 'react';

export default function GetInvolved() {
  return (
    <>
      <div id="ajax-content-wrap"><style>{`
      :root {
        --bss-blue: #106CFF;
        --bss-dark: #0e1220;
        --bss-light: #ffffff;
        --row-odd: #f8fafc;
        --row-even: #ffffff;
        --border-color: #e2e8f0; 
        --check-color: #106CFF; 
        --cross-color: #ff6257; 
        --border-radius: 8px;
      }

      /* Globally unhide animation elements */
      .has-animation,
      .col.has-animation,
      .wpb_column.has-animation,
      img.img-with-animation {
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
      }

      /* Hero Banner */
      .top_padding_desktop_150px {
        padding-top: 110px !important;
        padding-bottom: 90px !important;
      }

      [id^="fws_"].top-level.full-width-section {
        width: 100vw !important;
        position: relative !important;
        left: 50% !important;
        right: 50% !important;
        margin-left: -50vw !important;
        margin-right: -50vw !important;
        box-sizing: border-box !important;
        min-height: 380px !important;
        background-image: linear-gradient(rgba(13, 27, 62, 0.45), rgba(13, 27, 62, 0.55)), url("/wp-content/uploads/2025/09/agenda-banner.webp") !important;
        background-position: center center !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        overflow: hidden !important;
      }

      [id^="fws_"].top-level.full-width-section > .row-bg-wrap {
        display: none !important;
      }

      [id^="fws_"].top-level.full-width-section .row_col_wrap_12,
      [id^="fws_"].top-level.full-width-section .row_col_wrap_12_inner,
      [id^="fws_"].top-level.full-width-section .vc_col-sm-12,
      [id^="fws_"].top-level.full-width-section .nectar-responsive-text {
        width: 100% !important;
        max-width: 100% !important;
        text-align: center !important;
      }

      [id^="fws_"].top-level.full-width-section h2 {
        font-family: 'Joost', sans-serif !important;
        font-size: 60px !important;
        font-weight: 600 !important;
        color: #ffffff !important;
        text-transform: uppercase !important;
        letter-spacing: 2px !important;
        line-height: 1.15 !important;
        text-align: center !important;
        margin: 0 auto !important;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6) !important;
        white-space: nowrap !important;
        display: inline-block !important;
      }

      @media (max-width: 768px) {
        [id^="fws_"].top-level.full-width-section h2 {
          font-size: 38px !important;
          white-space: nowrap !important;
        }
      }

      @media (max-width: 480px) {
        [id^="fws_"].top-level.full-width-section h2 {
          font-size: 28px !important;
          white-space: nowrap !important;
        }
      }

      /* Ticketing Section */
      .ticketing-section {
        padding: 60px 20px !important;
        max-width: 1200px !important;
        margin: 0 auto !important;
      }

      .pass-table {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      }

      .pass-row {
        display: grid;
        grid-template-columns: 28% 1fr 1fr 1fr;
        align-items: center;
        min-height: 60px;
        border-bottom: 1px solid var(--border-color);
      }

      .pass-row:last-child {
        border-bottom: none;
      }

      .pass-row:nth-child(odd):not(.header-row) {
        background-color: var(--row-odd);
      }

      .pass-row:nth-child(even):not(.header-row) {
        background-color: var(--row-even);
      }

      .cell {
        padding: 16px 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid var(--border-color);
      }

      .cell:last-child {
        border-right: none;
      }

      .cell.entitlement-name {
        justify-content: flex-start;
        text-align: left;
        font-weight: 700;
        color: var(--bss-dark);
        text-transform: uppercase;
        font-size: 0.85rem;
        letter-spacing: 0.5px;
        font-family: 'Jost', sans-serif;
      }

      .header-row {
        align-items: stretch;
        background-color: #f8fafc;
      }

      .header-cell {
        padding: 30px 20px 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-right: 1px solid var(--border-color);
        position: relative;
        background: #106CFF;
      }

      .header-cell:last-child {
        border-right: none;
      }

      .title-cell {
        justify-content: center;
        background-color: var(--bss-blue);
        color: var(--bss-light);
      }

      .title-cell h3 {
        font-size: 45px !important;
        line-height: 1.1;
        margin: 0;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #ffc933 !important;
        font-family: 'Joost', sans-serif;
      }

      .pass-name {
        font-size: 1.6rem !important;
        font-weight: 700;
        margin: 0 0 15px 0;
        color: #ffc933 !important;
        text-align: center;
        letter-spacing: 0.5px;
        font-family: 'Joost', sans-serif;
      }

      .cta-btn {
        display: inline-block;
        background-color: #ff6257 !important;
        color: #ffffff !important;
        text-decoration: none !important;
        padding: 14px 24px;
        font-weight: 700;
        font-size: 0.95rem;
        border-radius: 6px;
        transition: all 0.2s ease;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
        margin-top: auto; 
        font-family: 'Jost', sans-serif;
      }

      .cta-btn:hover {
        background-color: #ffc933 !important;
        color: #0e1220 !important;
        transform: translateY(-2px);
      }

      .disclaimer-wrap {
        min-height: 85px; 
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-top: 12px;
      }

      .disclaimer-text {
        font-size: 11px;
        color: #ededed !important;
        margin: 0;
        line-height: 1.4;
        text-align: center;
        font-weight: 500;
      }

      .icon-check {
        color: var(--check-color);
        font-size: 1.35rem;
        font-weight: bold;
      } 

      .icon-cross {
        color: var(--cross-color);
        font-size: 1.35rem;
      }

      /* Mobile Layout */
      @media (max-width: 900px) {
        .header-row, .desktop-only {
          display: none !important;
        }
        .mobile-only {
          display: block !important;
        }
        .mobile-card {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          border: 1px solid var(--border-color);
        }
        .mobile-card-header {
          text-align: center;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
        }
        .mobile-card-header .pass-name {
          color: #106CFF !important;
        }
        .mobile-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          font-size: 0.95rem;
        }
      }

      @media (min-width: 901px) {
        .mobile-only {
          display: none !important;
        }
      }

      /* Contact Cards */
      #contact-info {
        width: 100vw !important;
        position: relative !important;
        left: 50% !important;
        right: 50% !important;
        margin-left: -50vw !important;
        margin-right: -50vw !important;
        box-sizing: border-box !important;
        padding: 60px 20px !important;
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
        padding: 25px 15px !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        text-align: center !important;
        transition: transform 0.3s ease;
      }

      
  #contact-info .contact-info-card a,
  #contact-info .contact-info-card .word-break,
  #contact-info .contact-info-card p {
    overflow-wrap: normal !important;
    word-break: break-word !important;
    word-break: normal !important; white-space: nowrap !important;
    white-space: nowrap !important;
  }

  #contact-info .contact-info-card a {
    display: inline-block !important;
    max-width: 100% !important;
    line-height: 1.35 !important;
  }

      #contact-info .contact-info-card:hover {
        transform: translateY(-5px);
      }
    `}</style><div className="container-wrap"><div className="container main-content" role="main"><div className="row"><div id="fws_6a9fc3d2911ff"  data-column-margin="default" data-midnight="dark"  className="wpb_row vc_row-fluid vc_row top-level full-width-section"  style={{"paddingTop":"0px","paddingBottom":"0px"}}><div className="row-bg-wrap" data-bg-animation="none" data-bg-animation-delay="" data-bg-overlay="false"><div className="inner-wrap row-bg-layer using-image" ><div className="row-bg viewport-desktop using-image"  style={{"backgroundPosition":"left top","backgroundRepeat":"no-repeat"}} style={{backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundImage: "url('/wp-content/uploads/2025/09/agenda-banner.webp')", backgroundSize: "cover"}}></div></div></div><div className="row_col_wrap_12 col span_12 dark left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "  data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div id="fws_6a9fc3d291479" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row"  style={{}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column centered-text has-animation force-desktop-text-align-center top_padding_desktop_150px top_padding_tablet_100px top_padding_phone_60px bottom_padding_desktop_150px bottom_padding_tablet_100px bottom_padding_phone_60px "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="fade-in-from-bottom" data-delay="100" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_60px font_size_tablet_40px font_size_phone_30px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><h2>Get your Pass</h2></div></div></div></div></div></div></div></div></div></div></div><div id="fws_6a9fc3d291838"  data-column-margin="default" data-midnight="dark"  className="wpb_row vc_row-fluid vc_row"  style={{"paddingTop":"0px","paddingBottom":"0px"}}><div className="row-bg-wrap" data-bg-animation="none" data-bg-animation-delay="" data-bg-overlay="false"><div className="inner-wrap row-bg-layer" ><div className="row-bg viewport-desktop"  style={{}}></div></div></div><div className="row_col_wrap_12 col span_12 dark left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "  data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="wpb_raw_code wpb_raw_html wpb_content_element" ><div className="wpb_wrapper"> <section className="ticketing-section"> <div className="pass-table desktop-only"> <div className="pass-row header-row"><div className="header-cell title-cell"><h3>Pick your pass</h3></div><div className="header-cell"><h4 className="pass-name">Conference Pass*</h4> <a href="https://konfhub.com/checkout/bengaluru-skill-summit-2026?ticketId=116672%7C1%3B&selectedCode=MKTWEBSITE&utm_medium=Website&utm_campaign=Delegate&utm_source=Mkt" target="_blank" className="cta-btn">Apply for Pass</a><div className="disclaimer-wrap"><p className="disclaimer-text">*Conference Passes are limited and available on a first-come, first-served basis, subject to Event Steering Committee approval. If not approved, your registration will be changed to an Expo Pass.</p></div></div><div className="header-cell"><h4 className="pass-name">Student Pass</h4> <a href="https://konfhub.com/checkout/bengaluru-skill-summit-2026?ticketId=116667%7C1%3B&selectedCode=MKTWEB&utm_medium=Website&utm_campaign=Delegate&utm_source=Student" target="_blank" className="cta-btn">Register Now</a><div className="disclaimer-wrap"></div> </div><div className="header-cell"><h4 className="pass-name">Expo Pass</h4> <a href="https://konfhub.com/checkout/bengaluru-skill-summit-2026?ticketId=116670%7C1%3B&utm_medium=Website&utm_campaign=Pass&utm_source=Expo" target="_blank" className="cta-btn">Register Now</a><div className="disclaimer-wrap"></div> </div></div> <div className="pass-row"><div className="cell entitlement-name">INAUGURAL CEREMONY</div><div className="cell"><span className="icon-check">✓</span></div><div className="cell"><span className="icon-cross">✗</span></div><div className="cell"><span className="icon-cross">✗</span></div></div><div className="pass-row"><div className="cell entitlement-name">MAIN STAGE</div><div className="cell"><span className="icon-check">✓</span></div><div className="cell"><span className="icon-cross">✗</span></div><div className="cell"><span className="icon-cross">✗</span></div></div><div className="pass-row"><div className="cell entitlement-name">INNOVATION STAGE</div><div className="cell"><span className="icon-check">✓</span></div><div className="cell"><span className="icon-check">✓</span></div><div className="cell"><span className="icon-check">✓</span></div></div><div className="pass-row"><div className="cell entitlement-name">AWARDS FUNCTION</div><div className="cell"><span className="icon-check">✓</span></div><div className="cell"><span className="icon-check">✓</span></div><div className="cell"><span className="icon-cross">✗</span></div></div><div className="pass-row"><div className="cell entitlement-name">VIP LOUNGE ACCESS</div><div className="cell"><span className="icon-cross">✗</span></div><div className="cell"><span className="icon-cross">✗</span></div><div className="cell"><span className="icon-cross">✗</span></div></div><div className="pass-row"><div className="cell entitlement-name">NETWORKING LUNCHEONS</div><div className="cell"><span className="icon-check">✓</span></div><div className="cell"><span className="icon-cross">✗</span></div><div className="cell"><span className="icon-cross">✗</span></div></div><div className="pass-row"><div className="cell entitlement-name">PRIORITY REGISTRATION</div><div className="cell"><span className="icon-cross">✗</span></div><div className="cell"><span className="icon-cross">✗</span></div><div className="cell"><span className="icon-cross">✗</span></div></div><div className="pass-row"><div className="cell entitlement-name">PRIORITY CONFERENCE SEATING</div><div className="cell"><span className="icon-cross">✗</span></div><div className="cell"><span className="icon-cross">✗</span></div><div className="cell"><span className="icon-cross">✗</span></div></div><div className="pass-row"><div className="cell entitlement-name">EXHIBITION HALL ACCESS</div><div className="cell"><span className="icon-check">✓</span></div><div className="cell"><span className="icon-check">✓</span></div><div className="cell"><span className="icon-check">✓</span></div></div><div className="pass-row"><div className="cell entitlement-name">NETWORKING APP ACCESS</div><div className="cell"><span className="text-value">PREMIUM</span></div><div className="cell"><span className="text-value">BASIC</span></div><div className="cell"><span className="text-value">BASIC</span></div></div></div> <div className="mobile-only"> <div className="mobile-card"><div className="mobile-card-header"><h4 className="pass-name" style={{"color":"#0e1220"}}>Conference Pass</h4> <a href="https://konfhub.com/checkout/bengaluru-skill-summit-2026?ticketId=116672%7C1%3B&selectedCode=MKTWEBSITE&utm_medium=Website&utm_campaign=Delegate&utm_source=Mkt" target="_blank" className="cta-btn">Apply for Pass</a><div className="disclaimer-wrap"><p className="disclaimer-text" style={{"color":"#64748b !important"}}>* Subject to Steering Committee approval. Unapproved applications will be converted to an Expo Pass.</p></div></div><div className="mobile-entitlements"><div className="mobile-row"><span>Inaugural Ceremony</span> <span className="icon-check">✓</span></div><div className="mobile-row"><span>Main Stage</span> <span className="icon-check">✓</span></div><div className="mobile-row"><span>Innovation Stage</span> <span className="icon-check">✓</span></div><div className="mobile-row"><span>Awards Function</span> <span className="icon-check">✓</span></div><div className="mobile-row"><span>VIP Lounge Access</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Networking Luncheons</span> <span className="icon-check">✓</span></div><div className="mobile-row"><span>Priority Registration</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Priority Conference Seating</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Exhibition Hall Access</span> <span className="icon-check">✓</span></div><div className="mobile-row"><span>Networking App Access</span> <span className="text-value">PREMIUM</span></div></div></div> <div className="mobile-card"><div className="mobile-card-header"><h4 className="pass-name" style={{"color":"#0e1220"}}>Student Pass</h4> <a href="https://konfhub.com/checkout/bengaluru-skill-summit-2026?ticketId=116667%7C1%3B&selectedCode=MKTWEB&utm_medium=Website&utm_campaign=Delegate&utm_source=Student" target="_blank" className="cta-btn">Register Now</a></div><div className="mobile-entitlements"><div className="mobile-row"><span>Inaugural Ceremony</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Main Stage</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Innovation Stage</span> <span className="icon-check">✓</span></div><div className="mobile-row"><span>Awards Function</span> <span className="icon-check">✓</span></div><div className="mobile-row"><span>VIP Lounge Access</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Networking Luncheons</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Priority Registration</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Priority Conference Seating</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Exhibition Hall Access</span> <span className="icon-check">✓</span></div><div className="mobile-row"><span>Networking App Access</span> <span className="text-value">BASIC</span></div></div></div> <div className="mobile-card"><div className="mobile-card-header"><h4 className="pass-name" style={{"color":"#0e1220"}}>Expo Pass</h4> <a href="https://konfhub.com/checkout/bengaluru-skill-summit-2026?ticketId=116670%7C1%3B&utm_medium=Website&utm_campaign=Pass&utm_source=Expo" target="_blank" className="cta-btn">Register Now</a></div><div className="mobile-entitlements"><div className="mobile-row"><span>Inaugural Ceremony</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Main Stage</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Innovation Stage</span> <span className="icon-check">✓</span></div><div className="mobile-row"><span>Awards Function</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>VIP Lounge Access</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Networking Luncheons</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Priority Registration</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Priority Conference Seating</span> <span className="icon-cross">✗</span></div><div className="mobile-row"><span>Exhibition Hall Access</span> <span className="icon-check">✓</span></div><div className="mobile-row"><span>Networking App Access</span> <span className="text-value">BASIC</span></div></div></div></div></section></div></div></div></div></div></div></div></div></div><div className="nectar-global-section before-footer"><div className="container normal-container row"><div id="contact-info"  data-column-margin="default" data-midnight="dark"  className="wpb_row vc_row-fluid vc_row full-width-section vc_row-o-equal-height vc_row-flex contact-info"  style={{"paddingTop":"80px","paddingBottom":"40px"}}><div className="row-bg-wrap" data-bg-animation="none" data-bg-animation-delay="" data-bg-overlay="false"><div className="inner-wrap row-bg-layer using-image" ><div className="row-bg viewport-desktop using-image"  style={{"backgroundPosition":"center center","backgroundRepeat":"no-repeat"}} style={{backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundImage: "url('https://bengaluruskillsummit.com/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg')", backgroundSize: "cover"}}></div></div></div><div className="row_col_wrap_12 col span_12 dark left"><div style={{}} className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col el_spacing_0px left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px " data-using-bg="true" data-border-radius="10px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#525252" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#525252"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct nectar-link-underline-effect" style={{"color":"#eaeaea"}}><p>Sponsor and Exhibitor<br /> Queries</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"30px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><p>Vinay Martin</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"5px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct nectar-link-underline-effect" style={{"color":"rgba(255,255,255,0.8)"}}><p>Commercial Director &#8211; India &amp; Middle East</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"10px"}} className="divider"></div></div><div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffc933"}}><p><a href="mailto:vinay@bengaluruskillsummit.com" style={{ color: "#ffc933", textDecoration: "none" }}>vinay@bengaluruskillsummit.com</a></p></div></div></div></div><div style={{}} className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px " data-using-bg="true" data-border-radius="10px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#525252" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#525252"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct nectar-link-underline-effect" style={{"color":"#eaeaea"}}><p>Speaking and Partner<br /> Queries</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"30px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><p>Simran Arora</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"5px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct nectar-link-underline-effect" style={{"color":"rgba(255,255,255,0.8)"}}><p>Sr. Conference Producer</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"10px"}} className="divider"></div></div><div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffc933"}}><p><a href="mailto:speaker@bengaluruskillsummit.com" style={{ color: "#ffc933", textDecoration: "none" }}>speaker@bengaluruskillsummit.com</a></p></div></div></div></div><div style={{}} className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px " data-using-bg="true" data-border-radius="10px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#525252" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#525252"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct nectar-link-underline-effect" style={{"color":"#eaeaea"}}><p>Marketing and Media<br /> Queries</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"30px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><p>Thulasi S</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"5px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct nectar-link-underline-effect" style={{"color":"rgba(255,255,255,0.8)"}}><p>Marketing Director</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"10px"}} className="divider"></div></div><div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffc933"}}><p><a href="mailto:marketing@bengaluruskillsummit.com" style={{ color: "#ffc933", textDecoration: "none" }}>marketing@bengaluruskillsummit.com</a></p></div></div></div></div><div style={{}} className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px " data-using-bg="true" data-border-radius="10px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#525252" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#525252"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct nectar-link-underline-effect" style={{"color":"#eaeaea"}}><p>Delegate Registration<br /> Queries</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"30px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><p>Suraj Shetty</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"5px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct nectar-link-underline-effect" style={{"color":"rgba(255,255,255,0.8)"}}><p>Director &#8211; Delegate Acquisition</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"10px"}} className="divider"></div></div><div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffc933"}}><p><a href="mailto:delegate@bengaluruskillsummit.com" style={{ color: "#ffc933", textDecoration: "none" }}>delegate@bengaluruskillsummit.com</a></p></div></div></div></div><div style={{}} className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px " data-using-bg="true" data-border-radius="10px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#525252" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#525252"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct nectar-link-underline-effect" style={{"color":"#eaeaea"}}><p>Partnership<br /> Queries</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"30px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><p>Praveen Kumar</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"5px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct nectar-link-underline-effect" style={{"color":"rgba(255,255,255,0.8)"}}><p>Partnership Director</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"10px"}} className="divider"></div></div><div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffc933"}}><p><a target="_blank" rel="noopener" data-fpl-component="primitive"><a href="mailto:partnerships@bengaluruskillsummit.com" style={{ color: "#ffc933", textDecoration: "none" }}>partnerships@bengaluruskillsummit.com</a><br /> </a></p></div></div></div></div></div></div></div></div></div></div>
    </>
  );
}
 