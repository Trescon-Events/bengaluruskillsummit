import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaAngleRight } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});
  const location = useLocation();
  const path = location.pathname;

  const isHomeActive = path === '/' || path === '/bengaluruskillsummit' || path === '/bengaluruskillsummit/';
  const isAboutActive = path.includes('/about-us') || path.includes('/about') || path.includes('2025') || (path.includes('/agenda') && !path.includes('2026')) || path.includes('/snapshot-agenda') || path.includes('/exhibitors') || path.includes('/ecosystem-partners') || path.includes('/media-partners') || path.includes('/curtain-raiser') || path.includes('/kaushalya-karnataka-awards-2025');
  const isAgendaActive = path.includes('/agenda-2026');
  const isSpeakersActive = path.includes('/speakers-2026');
  const isAwardsActive = path.includes('/kaushalya-karnataka-awards-2026') || path.includes('/awards-2026');
  const isGetInvolvedActive = path.includes('/be-a-speaker') || path.includes('/sponsor-registration') || path.includes('/be-a-media-partner') || path.includes('/association-enquiry') || path.includes('/skillathon-registration');

  const toggleSubMenu = (key, e) => {
    e.preventDefault();
    setOpenSubMenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div id="header-space" data-header-mobile-fixed={1} />
      <div id="header-outer" data-has-menu="true" data-has-buttons="no" data-header-button_style={{}} data-using-pr-menu="true" data-mobile-fixed={1} data-ptnm="false" data-lhe="default" data-user-set-bg="#000000" data-format="centered-menu" data-permanent-transparent="false" data-megamenu-rt={0} data-remove-fixed={0} data-header-resize={0} data-cart="false" data-transparency-option={0} data-box-shadow="none" data-shrink-num={6} data-using-secondary={0} data-using-logo={1} data-logo-height={70} data-m-logo-height={50} data-padding={15} data-full-width="false" data-condense="false">
        <div id="search-outer" className="nectar">
          <div id="search">
            <div className="container">
              <div id="search-box">
                <div className="inner-wrap">
                  <div className="col span_12">
                    <form role="search" action="/bengaluruskillsummit/" method="GET">
                      <input type="text" name="s" defaultValue="" aria-label="Search" placeholder="Search" />
                      <span>Hit enter to search or ESC to close</span>
                    </form>
                  </div>
                </div>
              </div>
              <div id="close">
                <a href="#"><span className="screen-reader-text">Close Search</span>
                  <span className="close-wrap">
                    <span className="close-line close-line1" />
                    <span className="close-line close-line2" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <header id="top">
          <div className="container">
            <div className="row">
              <div className="col span_3">
                <Link id="logo" to="/" data-supplied-ml-starting-dark="false" data-supplied-ml-starting="false" data-supplied-ml="false">
                  <img className="stnd default-logo dark-version" width={492} height={157} alt="Bengaluru Skill Summit" src="/bengaluruskillsummit/wp-content/uploads/2025/09/bss-logo-white.svg" decoding="async" fetchpriority="high" loading="eager" />
                </Link>
              </div>

              <div className="col span_9 col_last">
                <div className="nectar-mobile-only mobile-header">
                  <div className="inner" />
                </div>
                <div className="slide-out-widget-area-toggle mobile-icon simple" data-custom-color="false" data-icon-animation="simple-transform">
                  <div>
                    <a href="#mobile-menu" role="button" aria-label="Navigation Menu" aria-expanded={mobileMenuOpen} className={mobileMenuOpen ? "open" : "closed"} onClick={(e) => { e.preventDefault(); setMobileMenuOpen(!mobileMenuOpen); }}>
                      <span className="screen-reader-text">Menu</span>
                      <span aria-hidden="true">
                        <i className={`lines-button x2 ${mobileMenuOpen ? 'close' : ''}`}>
                          <i className="lines" />
                        </i>
                      </span>
                    </a>
                  </div>
                </div>

                <nav aria-label="Main Menu">
                  <ul className="sf-menu">
                    {/* HOME */}
                    <li id="menu-item-3693" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home ${isHomeActive ? 'current-menu-item' : ''} nectar-regular-menu-item`}>
                      <Link to="/" aria-current={isHomeActive ? "page" : undefined}><span className="menu-title-text">HOME</span></Link>
                    </li>

                    {/* ABOUT with Flyout Sub-menu */}
                    <li id="menu-item-2638" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children ${isAboutActive ? 'current-menu-item' : ''} nectar-regular-menu-item sf-with-ul`}>
                      <Link to="/about-us" aria-haspopup="true" aria-expanded="false">
                        <span className="menu-title-text">ABOUT</span>
                        <span className="sf-sub-indicator" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                          <FaAngleDown style={{ fontSize: "12px", verticalAlign: "middle" }} />
                        </span>
                      </Link>
                      <ul className="sub-menu">
                        <li className="menu-item menu-item-has-children">
                          <Link to="/2025-highlights" style={{ color: "#ff6257" }}>
                            <span>2025 HIGHLIGHTS</span>
                            <FaAngleRight style={{ fontSize: "14px", marginLeft: "14px" }} />
                          </Link>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <Link to="/speakers-2025"><span>SPEAKERS</span></Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/agenda"><span>FULL AGENDA</span></Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/snapshot-agenda"><span>SNAPSHOT AGENDA</span></Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/exhibitors"><span>EXHIBITORS</span></Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/ecosystem-partners"><span>PARTNERS</span></Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/media-partners"><span>MEDIA PARTNERS</span></Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/curtain-raiser"><span>CURTAIN RAISER 2025</span></Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/kaushalya-karnataka-awards-2025"><span>AWARDS</span></Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    {/* AGENDA */}
                    <li id="menu-item-agenda" className={`menu-item menu-item-type-post_type menu-item-object-page ${isAgendaActive ? 'current-menu-item' : ''} nectar-regular-menu-item`}>
                      <Link to="/agenda-2026"><span className="menu-title-text">AGENDA</span></Link>
                    </li>

                    {/* SPEAKERS */}
                    <li id="menu-item-speakers" className={`menu-item menu-item-type-post_type menu-item-object-page ${isSpeakersActive ? 'current-menu-item' : ''} nectar-regular-menu-item`}>
                      <Link to="/speakers-2026"><span className="menu-title-text">SPEAKERS</span></Link>
                    </li>

                    {/* AWARDS */}
                    <li id="menu-item-awards" className={`menu-item menu-item-type-post_type menu-item-object-page ${isAwardsActive ? 'current-menu-item' : ''} nectar-regular-menu-item`}>
                      <Link to="/kaushalya-karnataka-awards-2026"><span className="menu-title-text">AWARDS</span></Link>
                    </li>

                    {/* GET INVOLVED with Flyout Sub-menu */}
                    <li id="menu-item-get-involved" className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${isGetInvolvedActive ? 'current-menu-item' : ''} nectar-regular-menu-item sf-with-ul`}>
                      <Link to="#" aria-haspopup="true" aria-expanded="false" onClick={(e) => e.preventDefault()}>
                        <span className="menu-title-text">GET INVOLVED</span>
                        <span className="sf-sub-indicator" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}>
                          <FaAngleDown style={{ fontSize: "12px", verticalAlign: "middle" }} />
                        </span>
                      </Link>
                      <ul className="sub-menu">
                        <li className="menu-item">
                          <Link to="/be-a-speaker"><span>SPEAKER ENQUIRY</span></Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/sponsor-registration"><span>SPONSOR ENQUIRY</span></Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/be-a-media-partner"><span>MEDIA ENQUIRY</span></Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/association-enquiry"><span>ASSOCIATION ENQUIRY</span></Link>
                        </li>
                        <li className="menu-item">
                          <Link to="/skillathon-registration"><span>SKILLATHON REGISTRATION</span></Link>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <ul className="buttons header-cta-buttons" data-user-set-ocm="off">
                    <li className="header-cta-item header-cta-pass">
                      <Link to="/get-involved" className="header-cta-pill" data-discover="true">
                        GET YOUR PASS
                      </Link>
                    </li>
                    <li className="header-cta-item header-cta-enquiry">
                      <Link to="/general-enquiry" className="header-cta-pill" data-discover="true">
                        ENQUIRY NOW
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="logo-spacing" data-using-image="true">
                  <img className="hidden-logo" alt="Bengaluru Skill Summit" width={492} height={157} src="/bengaluruskillsummit/wp-content/uploads/2025/09/bss-logo-white.svg" decoding="async" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" data-mobile-fixed={1} style={{
              display: mobileMenuOpen ? "block" : "none",
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              backgroundColor: "#0d0d0d",
              boxShadow: "0 14px 35px rgba(0,0,0,0.75)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              padding: "20px 24px",
              zIndex: 99999,
              boxSizing: "border-box"
            }}>
              <div className="inner">
                <div className="menu-items-wrap row" data-has-secondary-text="false">
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    <li style={{ borderBottom: "1px solid #222222", padding: "12px 0" }}>
                      <Link to="/" onClick={closeMobileMenu} style={{ color: isHomeActive ? "#ff6257" : "#ffffff", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>HOME</Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #222222", padding: "12px 0" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={(e) => toggleSubMenu('about', e)}>
                        <span style={{ color: isAboutActive ? "#ff6257" : "#ffffff", fontWeight: 700, fontSize: "15px" }}>ABOUT</span>
                        {openSubMenus.about ? <FaAngleUp style={{ fontSize: "18px", color: "#ff6257" }} /> : <FaAngleDown style={{ fontSize: "18px", color: "#ff6257" }} />}
                      </div>
                      {openSubMenus.about && (
                        <ul style={{ listStyle: "none", paddingLeft: "16px", marginTop: "10px", margin: 0 }}>
                          <li style={{ padding: "6px 0" }}>
                            <Link to="/about-us" onClick={closeMobileMenu} style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>ABOUT US</Link>
                          </li>
                          <li style={{ padding: "6px 0" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={(e) => toggleSubMenu('highlights', e)}>
                              <span style={{ color: "#ff6257", fontWeight: 600, fontSize: "14px" }}>2025 HIGHLIGHTS</span>
                              {openSubMenus.highlights ? <FaAngleUp style={{ fontSize: "16px", color: "#ff6257" }} /> : <FaAngleDown style={{ fontSize: "16px", color: "#ff6257" }} />}
                            </div>
                            {openSubMenus.highlights && (
                              <ul style={{ listStyle: "none", paddingLeft: "16px", marginTop: "8px", margin: 0 }}>
                                <li style={{ padding: "6px 0" }}><Link to="/speakers-2025" onClick={closeMobileMenu} style={{ color: "#cccccc", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>SPEAKERS</Link></li>
                                <li style={{ padding: "6px 0" }}><Link to="/agenda" onClick={closeMobileMenu} style={{ color: "#cccccc", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>FULL AGENDA</Link></li>
                                <li style={{ padding: "6px 0" }}><Link to="/snapshot-agenda" onClick={closeMobileMenu} style={{ color: "#cccccc", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>SNAPSHOT AGENDA</Link></li>
                                <li style={{ padding: "6px 0" }}><Link to="/exhibitors" onClick={closeMobileMenu} style={{ color: "#cccccc", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>EXHIBITORS</Link></li>
                                <li style={{ padding: "6px 0" }}><Link to="/ecosystem-partners" onClick={closeMobileMenu} style={{ color: "#cccccc", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>PARTNERS</Link></li>
                                <li style={{ padding: "6px 0" }}><Link to="/media-partners" onClick={closeMobileMenu} style={{ color: "#cccccc", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>MEDIA PARTNERS</Link></li>
                                <li style={{ padding: "6px 0" }}><Link to="/curtain-raiser" onClick={closeMobileMenu} style={{ color: "#cccccc", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>CURTAIN RAISER 2025</Link></li>
                                <li style={{ padding: "6px 0" }}><Link to="/kaushalya-karnataka-awards-2025" onClick={closeMobileMenu} style={{ color: "#cccccc", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>AWARDS</Link></li>
                              </ul>
                            )}
                          </li>
                        </ul>
                      )}
                    </li>
                    <li style={{ borderBottom: "1px solid #222222", padding: "12px 0" }}>
                      <Link to="/agenda-2026" onClick={closeMobileMenu} style={{ color: isAgendaActive ? "#ff6257" : "#ffffff", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>AGENDA</Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #222222", padding: "12px 0" }}>
                      <Link to="/speakers-2026" onClick={closeMobileMenu} style={{ color: isSpeakersActive ? "#ff6257" : "#ffffff", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>SPEAKERS</Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #222222", padding: "12px 0" }}>
                      <Link to="/kaushalya-karnataka-awards-2026" onClick={closeMobileMenu} style={{ color: isAwardsActive ? "#ff6257" : "#ffffff", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>AWARDS</Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #222222", padding: "12px 0" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={(e) => toggleSubMenu('getInvolved', e)}>
                        <span style={{ color: isGetInvolvedActive ? "#ff6257" : "#ffffff", fontWeight: 700, fontSize: "15px" }}>GET INVOLVED</span>
                        {openSubMenus.getInvolved ? <FaAngleUp style={{ fontSize: "18px", color: "#ff6257" }} /> : <FaAngleDown style={{ fontSize: "18px", color: "#ff6257" }} />}
                      </div>
                      {openSubMenus.getInvolved && (
                        <ul style={{ listStyle: "none", paddingLeft: "16px", marginTop: "10px", margin: 0 }}>
                          <li style={{ padding: "6px 0" }}>
                            <Link to="/be-a-speaker" onClick={closeMobileMenu} style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>SPEAKER ENQUIRY</Link>
                          </li>
                          <li style={{ padding: "6px 0" }}>
                            <Link to="/sponsor-registration" onClick={closeMobileMenu} style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>SPONSOR ENQUIRY</Link>
                          </li>
                          <li style={{ padding: "6px 0" }}>
                            <Link to="/be-a-media-partner" onClick={closeMobileMenu} style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>MEDIA ENQUIRY</Link>
                          </li>
                          <li style={{ padding: "6px 0" }}>
                            <Link to="/association-enquiry" onClick={closeMobileMenu} style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>ASSOCIATION ENQUIRY</Link>
                          </li>
                          <li style={{ padding: "6px 0" }}>
                            <Link to="/skillathon-registration" onClick={closeMobileMenu} style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>SKILLATHON REGISTRATION</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li style={{ paddingTop: "18px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      <Link to="/get-involved" onClick={closeMobileMenu} className="header-cta-pill">
                        GET YOUR PASS
                      </Link>
                      <Link to="/general-enquiry" onClick={closeMobileMenu} className="header-cta-pill">
                        ENQUIRY NOW
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
