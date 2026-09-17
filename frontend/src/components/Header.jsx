import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (key, e) => {
    e.preventDefault();
    setOpenSubMenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div id="header-space" data-header-mobile-fixed={1} /><div id="header-outer" data-has-menu="true" data-has-buttons="no" data-header-button_style={{}} data-using-pr-menu="true" data-mobile-fixed={1} data-ptnm="false" data-lhe="default" data-user-set-bg="#000000" data-format="centered-menu" data-permanent-transparent="false" data-megamenu-rt={0} data-remove-fixed={0} data-header-resize={0} data-cart="false" data-transparency-option={0} data-box-shadow="none" data-shrink-num={6} data-using-secondary={0} data-using-logo={1} data-logo-height={70} data-m-logo-height={50} data-padding={15} data-full-width="false" data-condense="false"><div id="search-outer" className="nectar"><div id="search"><div className="container"><div id="search-box"><div className="inner-wrap"><div className="col span_12"><form role="search" action="/bengaluruskillsummit/" method="GET"> <input type="text" name="s" defaultValue aria-label="Search" placeholder="Search" /> <span>Hit enter to search or ESC to close</span></form></div>{/*/span_12*/}</div>{/*/inner-wrap*/}</div>{/*/search-box*/}<div id="close"><a href="#"><span className="screen-reader-text">Close Search</span> <span className="close-wrap"> <span className="close-line close-line1" /> <span className="close-line close-line2" /> </span> </a></div></div>{/*/container*/}</div>{/*/search*/}</div>{/*/search-outer*/}<header id="top"><div className="container"><div className="row"><div className="col span_3"> <Link id="logo" to="/" data-supplied-ml-starting-dark="false" data-supplied-ml-starting="false" data-supplied-ml="false"> <img className="stnd default-logo dark-version" width={492} height={157} alt="Bengaluru Skill Summit" src="/bengaluruskillsummit/wp-content/uploads/2025/09/bss-logo-white.svg" decoding="async" fetchpriority="high" loading="eager" /> </Link></div>{/*/span_3*/}<div className="col span_9 col_last"><div className="nectar-mobile-only mobile-header"><div className="inner" /></div><div className="slide-out-widget-area-toggle mobile-icon simple" data-custom-color="false" data-icon-animation="simple-transform"><div> <a href="#mobile-menu" role="button" aria-label="Navigation Menu" aria-expanded={mobileMenuOpen} className={mobileMenuOpen ? "open" : "closed"} onClick={(e) => { e.preventDefault(); setMobileMenuOpen(!mobileMenuOpen); }}> <span className="screen-reader-text">Menu</span><span aria-hidden="true"> <i className={`lines-button x2 ${mobileMenuOpen ? 'close' : ''}`}> <i className="lines" /> </i> </span> </a></div></div><nav aria-label="Main Menu"><ul className="sf-menu"><li id="menu-item-3693" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3447 current_page_item nectar-regular-menu-item menu-item-3693"><Link to="/" aria-current="page"><span className="menu-title-text">Home</span></Link></li><li id="menu-item-2638" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item sf-with-ul menu-item-2638"><a href="#about" onClick={(e) => { e.preventDefault(); e.currentTarget.blur(); }} aria-haspopup="true" aria-expanded="false"><span className="menu-title-text">About</span><span className="sf-sub-indicator" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}><FaAngleDown style={{ fontSize: "12px", verticalAlign: "middle" }} /></span></a><ul className="sub-menu"><li id="menu-item-2632" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-2632"><Link to="/about-us"><span className="menu-title-text">About Summit</span></Link></li><li id="menu-item-2639" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-2639"><Link to="/curtain-raiser"><span className="menu-title-text">Curtain Raiser 2025</span></Link></li></ul></li><li id="menu-item-3443" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item sf-with-ul menu-item-3443"><Link to="/2025-highlights" aria-haspopup="true" aria-expanded="false"><span className="menu-title-text">2025 Highlights</span><span className="sf-sub-indicator" style={{ display: "inline-flex", alignItems: "center", marginLeft: "6px" }}><FaAngleDown style={{ fontSize: "12px", verticalAlign: "middle" }} /></span></Link><ul className="sub-menu"><li id="menu-item-2754" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-2754"><Link to="/speakers-2025"><span className="menu-title-text">Speakers</span></Link></li><li id="menu-item-1629" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-1629"><Link to="/agenda"><span className="menu-title-text">Full Agenda</span></Link></li><li id="menu-item-2926" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-2926"><Link to="/snapshot-agenda"><span className="menu-title-text">Snapshot Agenda</span></Link></li><li id="menu-item-2747" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-2747"><Link to="/exhibitors"><span className="menu-title-text">Exhibitors</span></Link></li><li id="menu-item-2815" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-2815"><Link to="/ecosystem-partners"><span className="menu-title-text">Partners</span></Link></li><li id="menu-item-2858" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-2858"><Link to="/media-partners"><span className="menu-title-text">Media Partners</span></Link></li><li id="menu-item-3971" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-3971"><Link to="/kaushalya-karnataka-awards-2025"><span className="menu-title-text">Awards</span></Link></li></ul></li></ul><ul className="buttons sf-menu" data-user-set-ocm="off"><li id="menu-item-347" className="menu-btn-2 konfhub-btn menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item menu-item-btn-style-button_extra-color-1 menu-item-hover-text-reveal menu-item-347"><Link to="/get-involved"><span className="menu-title-text"><span className="nectar-text-reveal-button"><span className="nectar-text-reveal-button__text" data-text="Get Your Pass">Get Your Pass</span></span></span></Link></li><li id="menu-item-4157" className="menu-btn-2 konfhub-btn menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item menu-item-btn-style-button_extra-color-1 menu-item-hover-text-reveal menu-item-347 menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-4157"><Link to="/general-enquiry"><span className="menu-title-text">Enquiry Now</span></Link></li></ul></nav><div className="logo-spacing" data-using-image="true"><img className="hidden-logo" alt="Bengaluru Skill Summit" width={492} height={157} src="/bengaluruskillsummit/wp-content/uploads/2025/09/bss-logo-white.svg" decoding="async" loading="lazy" /></div></div>{/*/span_9*/}</div>{/*/row*/}<div id="mobile-menu" data-mobile-fixed={1} style={{
          display: mobileMenuOpen ? "block" : "none",
          position: "absolute",
          top: "100%",
          left: 0,
          width: "100%",
          backgroundColor: "#ffffff",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          padding: "20px",
          zIndex: 99999,
          boxSizing: "border-box"
        }}>
          <div className="inner">
            <div className="menu-items-wrap row" data-has-secondary-text="false">
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                <li style={{ borderBottom: "1px solid #f0f0f0", padding: "10px 0" }}>
                  <Link to="/" onClick={closeMobileMenu} style={{ color: "#000", fontWeight: 600, fontSize: "16px", textDecoration: "none" }}>Home</Link>
                </li>
                <li style={{ borderBottom: "1px solid #f0f0f0", padding: "10px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={(e) => toggleSubMenu('about', e)}>
                    <span style={{ color: "#000", fontWeight: 600, fontSize: "16px" }}>About</span>
                    {openSubMenus.about ? <FaAngleUp style={{ fontSize: "18px", color: "#333" }} /> : <FaAngleDown style={{ fontSize: "18px", color: "#333" }} />}
                  </div>
                  {openSubMenus.about && (
                    <ul style={{ listStyle: "none", paddingLeft: "16px", marginTop: "8px", margin: 0 }}>
                      <li style={{ padding: "8px 0" }}><Link to="/about-us" onClick={closeMobileMenu} style={{ color: "#555", textDecoration: "none", fontSize: "15px" }}>About Summit</Link></li>
                      <li style={{ padding: "8px 0" }}><Link to="/curtain-raiser" onClick={closeMobileMenu} style={{ color: "#555", textDecoration: "none", fontSize: "15px" }}>Curtain Raiser 2025</Link></li>
                    </ul>
                  )}
                </li>
                <li style={{ borderBottom: "1px solid #f0f0f0", padding: "10px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={(e) => toggleSubMenu('highlights', e)}>
                    <span style={{ color: "#000", fontWeight: 600, fontSize: "16px" }}>2025 Highlights</span>
                    {openSubMenus.highlights ? <FaAngleUp style={{ fontSize: "18px", color: "#333" }} /> : <FaAngleDown style={{ fontSize: "18px", color: "#333" }} />}
                  </div>
                  {openSubMenus.highlights && (
                    <ul style={{ listStyle: "none", paddingLeft: "16px", marginTop: "8px", margin: 0 }}>
                      <li style={{ padding: "8px 0" }}><Link to="/speakers-2025" onClick={closeMobileMenu} style={{ color: "#555", textDecoration: "none", fontSize: "15px" }}>Speakers</Link></li>
                      <li style={{ padding: "8px 0" }}><Link to="/agenda" onClick={closeMobileMenu} style={{ color: "#555", textDecoration: "none", fontSize: "15px" }}>Full Agenda</Link></li>
                      <li style={{ padding: "8px 0" }}><Link to="/snapshot-agenda" onClick={closeMobileMenu} style={{ color: "#555", textDecoration: "none", fontSize: "15px" }}>Snapshot Agenda</Link></li>
                      <li style={{ padding: "8px 0" }}><Link to="/exhibitors" onClick={closeMobileMenu} style={{ color: "#555", textDecoration: "none", fontSize: "15px" }}>Exhibitors</Link></li>
                      <li style={{ padding: "8px 0" }}><Link to="/ecosystem-partners" onClick={closeMobileMenu} style={{ color: "#555", textDecoration: "none", fontSize: "15px" }}>Partners</Link></li>
                      <li style={{ padding: "8px 0" }}><Link to="/media-partners" onClick={closeMobileMenu} style={{ color: "#555", textDecoration: "none", fontSize: "15px" }}>Media Partners</Link></li>
                      <li style={{ padding: "8px 0" }}><Link to="/kaushalya-karnataka-awards-2025" onClick={closeMobileMenu} style={{ color: "#555", textDecoration: "none", fontSize: "15px" }}>Awards</Link></li>
                    </ul>
                  )}
                </li>
                <li style={{ paddingTop: "14px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <Link to="/get-involved" onClick={closeMobileMenu} style={{
                    backgroundColor: "#ff6257",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: "25px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                    display: "inline-block"
                  }}>Get Your Pass</Link>
                  <Link to="/general-enquiry" onClick={closeMobileMenu} style={{
                    backgroundColor: "#0d53c7",
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: "25px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                    display: "inline-block"
                  }}>Enquiry Now</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{/*/mobile-menu*/}</div>{/*/container*/}</header></div>
    </>
  );
}
