import React from 'react';

export default function ThankYou() {
  return (
    <>
      <div id="ajax-content-wrap">
        <style>{`
          /* Thank You Hero Section */
          .thank-you-section {
            padding: 80px 20px 40px 20px;
            max-width: 980px;
            margin: 0 auto;
            text-align: center;
            box-sizing: border-box;
          }

          .thank-you-title {
            font-family: 'Joost', sans-serif !important;
            font-size: 36px !important;
            line-height: 1.25 !important;
            font-weight: 700 !important;
            color: #0e1220 !important;
            text-transform: none !important;
            margin-bottom: 25px !important;
          }

          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&display=swap');

          .thank-you-desc,
          .thank-you-regards {
            font-family: 'Comfortaa', sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            color: rgb(14, 18, 32) !important;
            font-size: 22px !important;
            line-height: 29px !important;
            max-width: 860px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .thank-you-desc {
            margin-top: 0 !important;
            margin-bottom: 20px !important;
          }

          .thank-you-regards {
            margin-top: 20px !important;
            margin-bottom: 35px !important;
          }

          .thank-you-cta-wrap {
            margin-top: 30px;
            margin-bottom: 50px;
            text-align: center;
          }

          .thank-you-cta-btn {
            display: inline-block !important;
            padding: 12px 32px !important;
            border: 2px solid #ff6257 !important;
            border-radius: 12px !important;
            color: #0e1220 !important;
            background-color: transparent !important;
            font-family: 'Jost', sans-serif !important;
            font-size: 14px !important;
            font-weight: 700 !important;
            letter-spacing: 1px !important;
            text-transform: uppercase !important;
            text-decoration: none !important;
            transition: all 0.3s ease !important;
          }

          .thank-you-cta-btn:hover {
            background-color: #ff6257 !important;
            color: #ffffff !important;
            transform: translateY(-2px);
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
            max-width: 1200px !important;
            margin: 0 auto !important;
          }

          #contact-info .contact-info-card {
            flex: 1 1 calc(20% - 15px) !important;
            min-width: 200px !important;
            background-color: #525252 !important;
            border-radius: 10px !important;
            padding: 25px 14px !important;
            box-sizing: border-box !important;
            text-align: left !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
          }

          
  #contact-info .contact-info-card a,
  #contact-info .contact-info-card .word-break,
  #contact-info .contact-info-card p {
    overflow-wrap: anywhere !important;
    word-break: break-word !important;
    word-break: break-all !important;
    white-space: normal !important;
  }

  #contact-info .contact-info-card a {
    display: inline-block !important;
    max-width: 100% !important;
    line-height: 1.35 !important;
  }

          #contact-info .contact-info-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
          }

          @media (max-width: 1024px) {
            #contact-info .contact-info-card {
              flex: 1 1 calc(33.333% - 15px) !important;
            }
          }

          @media (max-width: 768px) {
            .thank-you-section {
              padding: 40px 15px 20px 15px !important;
            }

            .thank-you-title {
              font-size: 26px !important;
            }

            .thank-you-desc,
            .thank-you-regards {
              font-size: 18px !important;
              line-height: 26px !important;
            }
          }

          @media (max-width: 600px) {
            #contact-info .contact-info-card {
              flex: 1 1 100% !important;
            }
          }
        `}</style>

        <div className="container-wrap">
          <div className="container main-content" role="main">
            {/* Thank you message container */}
            <div className="thank-you-section">
              <h1 className="thank-you-title">
                Thank you for your interest in the Bengaluru Skill Summit 2025, Karnataka’s flagship initiative shaping the future of skilling and workforce transformation.
              </h1>
              <p className="thank-you-desc">
                Our team will connect with you shortly. In the meantime, explore the link below to know more about the summit, its sessions, and opportunities to participate.
              </p>
              <p className="thank-you-regards">
                Warm regards,<br />
                Team Bengaluru Skill Summit
              </p>
              <div className="thank-you-cta-wrap">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="thank-you-cta-btn"
                  role="button"
                  href="https://linktr.ee/bengaluruskillsummit"
                >
                  EXPLORE MORE
                </a>
              </div>
            </div>

            {/* Contact cards section */}
            <div className="nectar-global-section before-footer">
              <div className="container normal-container row">
                <div id="contact-info" data-midnight="dark" className="wpb_row vc_row-fluid vc_row full-width-content">
                  <div className="row_col_wrap_12 col span_12 dark left">
                    <div className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct" style={{ color: '#eaeaea' }}>
                            <p>Sponsor and Exhibitor<br /> Queries</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '30px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct" style={{ color: '#ffffff' }}>
                            <p>Vinay Martin</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '5px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            <p>Commercial Director &#8211; India &amp; Middle East</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '10px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct" style={{ color: '#ffc933' }}>
                            <p><a href="mailto:vinay.martin@bengaluruskillsummit.com" style={{ color: '#ffc933', textDecoration: 'none' }}>vinay.martin@bengaluruskillsummit.com</a></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct" style={{ color: '#eaeaea' }}>
                            <p>Speaking and Partner<br /> Queries</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '30px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct" style={{ color: '#ffffff' }}>
                            <p>Simran Arora</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '5px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            <p>Sr. Conference Producer</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '10px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct" style={{ color: '#ffc933' }}>
                            <p><a href="mailto:simran.arora@bengaluruskillsummit.com" style={{ color: '#ffc933', textDecoration: 'none' }}>simran.arora@bengaluruskillsummit.com</a></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct" style={{ color: '#eaeaea' }}>
                            <p>Marketing and Media<br /> Queries</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '30px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct" style={{ color: '#ffffff' }}>
                            <p>Thulasi S</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '5px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            <p>Marketing Director</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '10px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct" style={{ color: '#ffc933' }}>
                            <p><a href="mailto:thulasi.s@bengaluruskillsummit.com" style={{ color: '#ffc933', textDecoration: 'none' }}>thulasi.s@bengaluruskillsummit.com</a></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct" style={{ color: '#eaeaea' }}>
                            <p>Delegate Registration<br /> Queries</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '30px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct" style={{ color: '#ffffff' }}>
                            <p>Suraj Shetty</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '5px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            <p>Director &#8211; Delegate Acquisition</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '10px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct" style={{ color: '#ffc933' }}>
                            <p><a href="mailto:suraj.shetty@bengaluruskillsummit.com" style={{ color: '#ffc933', textDecoration: 'none' }}>suraj.shetty@bengaluruskillsummit.com</a></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="vc_col-sm-1/5 contact-info-card wpb_column column_container vc_column_container col left_padding_desktop_14px top_padding_desktop_25px right_padding_desktop_14px bottom_padding_desktop_25px">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="nectar-responsive-text font_size_desktop_15px font_size_tablet_15px font_size_phone_14px font_line_height_130pct" style={{ color: '#eaeaea' }}>
                            <p>Partnership<br /> Queries</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '30px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text font_size_desktop_13px font_line_height_100pct" style={{ color: '#ffffff' }}>
                            <p>Praveen Kumar</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '5px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text font_size_desktop_10px font_line_height_100pct" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            <p>Partnership Director</p>
                          </div>
                          <div className="divider-wrap"><div style={{ height: '10px' }} className="divider"></div></div>
                          <div className="nectar-responsive-text word-break font_size_desktop_11px font_line_height_100pct" style={{ color: '#ffc933' }}>
                            <p><a href="mailto:praveen.kumar@bengaluruskillsummit.com" style={{ color: '#ffc933', textDecoration: 'none' }}>praveen.kumar@bengaluruskillsummit.com</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
