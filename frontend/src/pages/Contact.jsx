import React, { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    // Check if script already loaded
    const loadHubspot = () => {
      if (window.hbspt) {
        const container = document.getElementById('hubspot-form-container');
        if (container) {
          container.innerHTML = '';
          window.hbspt.forms.create({
            portalId: "2953901",
            formId: "fe1579e2-886c-4ce8-b62b-31eaf510f9a8",
            region: "na1",
            target: "#hubspot-form-container",
            onFormSubmitted: function() {
              window.location.href = "/thank-you";
            }
          });
        }
      }
    };

    if (window.hbspt) {
      loadHubspot();
    } else {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = loadHubspot;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div id="ajax-content-wrap"><style>{`
  /* Globally unhide animated elements */
  .has-animation,
  .col.has-animation,
  .wpb_column.has-animation,
  img.img-with-animation {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
  }

  /* ---------------- HERO BANNER FULL-WIDTH & BACKGROUND ---------------- */
  #fws_6a9fc0299dcbe {
    width: 100vw !important;
    position: relative !important;
    left: 50% !important;
    right: 50% !important;
    margin-left: -50vw !important;
    margin-right: -50vw !important;
    box-sizing: border-box !important;
    min-height: 380px !important;
    background-image: linear-gradient(rgba(13, 27, 62, 0.45), rgba(13, 27, 62, 0.55)), url("/bengaluruskillsummit/wp-content/uploads/2025/09/agenda-banner.webp") !important;
    background-position: center center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 110px 20px 90px 20px !important;
    overflow: hidden !important;
  }

  #fws_6a9fc0299dcbe > .row-bg-wrap {
    display: none !important;
  }

  #fws_6a9fc0299dcbe .row_col_wrap_12 {
    max-width: 1200px !important;
    margin: 0 auto !important;
    text-align: center !important;
    width: 100% !important;
    position: relative !important;
    z-index: 3 !important;
  }

  #fws_6a9fc0299dcbe h1,
  #fws_6a9fc0299dcbe .vc_custom_heading h1 {
    font-family: 'Joost', sans-serif !important;
    font-size: 68px !important;
    font-weight: 400 !important;
    color: #ffffff !important;
    text-transform: uppercase !important;
    letter-spacing: 3px !important;
    line-height: 1.15 !important;
    text-align: center !important;
    margin: 0 !important;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6) !important;
  }

  /* ---------------- HUBSPOT FORM SECTION ---------------- */
  .general-form {
    max-width: 1000px !important;
    margin: 40px auto !important;
    padding: 0 20px !important;
  }

  .hbspt-form {
    max-width: 100% !important;
    font-family: 'Jost', sans-serif !important;
  }

  .hbspt-form label {
    font-weight: 600 !important;
    font-size: 15px !important;
    text-transform: uppercase !important;
    margin-bottom: 8px !important;
    display: block !important;
    color: #222222 !important;
  }

  span.hs-form-required {
    color: #FF0000 !important;
  }

  .hbspt-form input[type="text"],
  .hbspt-form input[type="email"],
  .hbspt-form input[type="tel"],
  .hbspt-form select,
  .hbspt-form textarea {
    background: #ffffff !important;
    border: 1px solid #00A8B2 !important;
    color: #333333 !important;
    font-family: 'Jost', sans-serif !important;
    font-size: 16px !important;
    padding: 14px 18px !important;
    border-radius: 6px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    margin-bottom: 15px !important;
  }

  .hbspt-form fieldset {
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
  }

  .hbspt-form .hs-button.primary {
    background-color: #106cff !important;
    color: #ffffff !important;
    font-family: 'Jost', sans-serif !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    padding: 14px 40px !important;
    border: none !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    transition: background-color 0.3s ease !important;
  }

  .hbspt-form .hs-button.primary:hover {
    background-color: #0b50c0 !important;
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
    transition: transform 0.3s ease, box-shadow 0.3s ease !important;
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
    transform: translateY(-5px) !important;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
  }

  @media (max-width: 991px) {
    #fws_6a9fc0299dcbe h1,
    #fws_6a9fc0299dcbe .vc_custom_heading h1 {
      font-size: 48px !important;
    }
    #contact-info .contact-info-card {
      flex: 1 1 calc(33.333% - 15px) !important;
    }
  }

  @media (max-width: 767px) {
    #fws_6a9fc0299dcbe h1,
    #fws_6a9fc0299dcbe .vc_custom_heading h1 {
      font-size: 36px !important;
    }
    #contact-info .contact-info-card {
      flex: 1 1 100% !important;
    }
  }
`}</style><div className="container-wrap"><div className="container main-content" role="main"><div className="row"><div id="fws_6a9fc0299dcbe"  data-column-margin="default" data-midnight="dark"  className="wpb_row vc_row-fluid vc_row top-level full-width-section"  style={{"paddingTop":"0px","paddingBottom":"0px"}}><div className="row-bg-wrap" data-bg-animation="none" data-bg-animation-delay="" data-bg-overlay="false"><div className="inner-wrap row-bg-layer using-image" ><div className="row-bg viewport-desktop using-image"  style={{display: "none"}}></div></div></div><div className="row_col_wrap_12 col span_12 dark left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "  data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div id="fws_6a9fc0299dfb2" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row"  style={{}}><div className="row-bg-wrap"><div className="row-bg" ></div></div><div className="row_col_wrap_12_inner col span_12  left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column centered-text has-animation force-desktop-text-align-center top_padding_desktop_150px top_padding_tablet_100px top_padding_phone_60px bottom_padding_desktop_150px bottom_padding_tablet_100px bottom_padding_phone_60px "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="fade-in-from-bottom" data-delay="100" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_60px font_size_tablet_40px font_size_phone_30px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><h1 style={{"wordSpacing":"10px","fontWeight":"700"}}>General Enquiry</h1></div></div></div></div></div></div></div></div></div></div></div><div id="fws_6a9fc0299e3b8"  data-column-margin="default" data-midnight="dark"  className="wpb_row vc_row-fluid vc_row general-form right_padding_10pct left_padding_10pct top_padding_tablet_40px top_padding_phone_30px bottom_padding_tablet_40px bottom_padding_phone_30px right_padding_phone_5pct left_padding_phone_5pct"  style={{"paddingTop":"60px","paddingBottom":"60px"}}><div className="row-bg-wrap" data-bg-animation="none" data-bg-animation-delay="" data-bg-overlay="false"><div className="inner-wrap row-bg-layer" ><div className="row-bg viewport-desktop"  style={{}}></div></div></div><div className="row_col_wrap_12 col span_12 dark left"><div  className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "  data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="wpb_wrapper"><div className="wpb_raw_code wpb_raw_html wpb_content_element" ><div className="wpb_wrapper"><div id="hubspot-form-container"></div></div></div></div></div></div></div></div></div></div><div className="nectar-global-section before-footer"><div className="container normal-container row"><div id="contact-info"  data-column-margin="default" data-midnight="dark"  className="wpb_row vc_row-fluid vc_row full-width-section vc_row-o-equal-height vc_row-flex contact-info"  style={{"paddingTop":"80px","paddingBottom":"40px"}}><div className="row-bg-wrap" data-bg-animation="none" data-bg-animation-delay="" data-bg-overlay="false"><div className="inner-wrap row-bg-layer using-image" ><div className="row-bg viewport-desktop using-image"  style={{"backgroundPosition":"center center","backgroundRepeat":"no-repeat"}} style={{backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundImage: "url('https://bengaluruskillsummit/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg')", backgroundSize: "cover"}}></div></div></div><div className="row_col_wrap_12 col span_12 dark left"><div style={{}} className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col el_spacing_0px left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px " data-using-bg="true" data-border-radius="10px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#525252" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#525252"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct nectar-link-underline-effect" style={{"color":"#eaeaea"}}><p>Sponsor and Exhibitor<br /> Queries</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"30px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><p>Vinay Martin</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"5px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct nectar-link-underline-effect" style={{"color":"rgba(255,255,255,0.8)"}}><p>Commercial Director &#8211; India &amp; Middle East</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"10px"}} className="divider"></div></div><div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffc933"}}><p><a href="mailto:vinay@bengaluruskillsummit.com" style={{ color: "#ffc933", textDecoration: "none" }}>vinay@bengaluruskillsummit.com</a></p></div></div></div></div><div style={{}} className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px " data-using-bg="true" data-border-radius="10px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#525252" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#525252"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct nectar-link-underline-effect" style={{"color":"#eaeaea"}}><p>Speaking and Partner<br /> Queries</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"30px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><p>Simran Arora</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"5px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct nectar-link-underline-effect" style={{"color":"rgba(255,255,255,0.8)"}}><p>Sr. Conference Producer</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"10px"}} className="divider"></div></div><div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffc933"}}><p><a href="mailto:speaker@bengaluruskillsummit.com" style={{ color: "#ffc933", textDecoration: "none" }}>speaker@bengaluruskillsummit.com</a></p></div></div></div></div><div style={{}} className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px " data-using-bg="true" data-border-radius="10px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#525252" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#525252"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct nectar-link-underline-effect" style={{"color":"#eaeaea"}}><p>Marketing and Media<br /> Queries</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"30px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><p>Thulasi S</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"5px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct nectar-link-underline-effect" style={{"color":"rgba(255,255,255,0.8)"}}><p>Marketing Director</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"10px"}} className="divider"></div></div><div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffc933"}}><p><a href="mailto:marketing@bengaluruskillsummit.com" style={{ color: "#ffc933", textDecoration: "none" }}>marketing@bengaluruskillsummit.com</a></p></div></div></div></div><div style={{}} className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px " data-using-bg="true" data-border-radius="10px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#525252" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#525252"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct nectar-link-underline-effect" style={{"color":"#eaeaea"}}><p>Delegate Registration<br /> Queries</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"30px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><p>Suraj Shetty</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"5px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct nectar-link-underline-effect" style={{"color":"rgba(255,255,255,0.8)"}}><p>Director &#8211; Delegate Acquisition</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"10px"}} className="divider"></div></div><div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffc933"}}><p><a href="mailto:delegate@bengaluruskillsummit.com" style={{ color: "#ffc933", textDecoration: "none" }}>delegate@bengaluruskillsummit.com</a></p></div></div></div></div><div style={{}} className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px " data-using-bg="true" data-border-radius="10px" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#525252" data-bg-opacity="1" data-animation="" data-delay="0" ><div className="vc_column-inner" ><div className="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none"><div className="column-bg-overlay" style={{"opacity":"1","backgroundColor":"#525252"}}></div></div><div className="wpb_wrapper"><div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct nectar-link-underline-effect" style={{"color":"#eaeaea"}}><p>Partnership<br /> Queries</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"30px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffffff"}}><p>Praveen Kumar</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"5px"}} className="divider"></div></div><div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct nectar-link-underline-effect" style={{"color":"rgba(255,255,255,0.8)"}}><p>Partnership Director</p></div><div className="divider-wrap" data-alignment="default"><div style={{"height":"10px"}} className="divider"></div></div><div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct nectar-link-underline-effect" style={{"color":"#ffc933"}}><p><a target="_blank" rel="noopener" data-fpl-component="primitive"><a href="mailto:partnerships@bengaluruskillsummit.com" style={{ color: "#ffc933", textDecoration: "none" }}>partnerships@bengaluruskillsummit.com</a><br /> </a></p></div></div></div></div></div></div></div></div></div></div>
    </>
  );
}
