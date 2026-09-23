import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaMinusCircle, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const faqsData = [
  {
    question: "What is Skillathon 2026?",
    answer: "Skillathon 2026 is a solution-building programme where student and startup teams address Government-defined challenges across Karnataka’s skilling and employment ecosystem."
  },
  {
    question: "What are the challenge areas?",
    answer: "There are six challenge areas: AI Skills Coach, Rural Youth: Skills-to-Jobs, Women Returning to Work, Green Jobs & Future Skills, Skills Passport & Inclusive Pathways, and Training-to-Employment Outcomes."
  },
  {
    question: "When do applications open?",
    answer: "Applications open on 22 September 2026."
  },
  {
    question: "When is the application deadline?",
    answer: "Applications close on 2 October 2026."
  },
  {
    question: "What happens after applications close?",
    answer: "Applications undergo eligibility and first-level solution screening on 2–3 October, followed by selection and orientation from 3–10 October."
  },
  {
    question: "Will teams receive mentorship?",
    answer: "Selected teams can receive access, where relevant, to Government/problem owners, industry/domain mentors, academic mentors, technology/product mentors and potential users."
  },
  {
    question: "Will teams test their solutions?",
    answer: "Yes. Teams are expected to undertake real-world validation or pilots wherever feasible."
  },
  {
    question: "How will solutions be evaluated?",
    answer: "Solutions will be evaluated on problem understanding, innovation, prototype, validation, feasibility, impact and scalability."
  },
  {
    question: "When is the Skillathon Finale?",
    answer: "The Skillathon Finale will take place on 5 November 2026, during Bengaluru Skill Summit 2026."
  }
];

const challengeList = [
  {
    title: "AI Skills Coach",
    desc: "Can AI assess skills against a target job and create a personalised pathway to job readiness?",
    img: "/bengaluruskillsummit/wp-content/uploads/2026/09/AI-Skills-Coach-1.png",
    alt: "AI Skills Coach"
  },
  {
    title: "Rural Youth: Skills-to-Jobs",
    desc: "How can rural youth discover and match with relevant training, apprenticeships and entry-level jobs?",
    img: "/bengaluruskillsummit/wp-content/uploads/2026/09/Rural-Youth-1.png",
    alt: "Rural Youth"
  },
  {
    title: "Women Returning to Work",
    desc: "How can women returning after a career break identify their skills, bridge gaps and find suitable opportunities?",
    img: "/bengaluruskillsummit/wp-content/uploads/2026/09/women-to-work-1.png",
    alt: "Women Returning to Work"
  },
  {
    title: "Green Jobs & Future Skills",
    desc: "How can youth identify emerging green jobs and the skills, training and certifications needed for them?",
    img: "/bengaluruskillsummit/wp-content/uploads/2026/09/Green-Jobs-Future-Skills-1.png",
    alt: "Green Jobs Future Skills"
  },
  {
    title: "Skills Passport & Inclusive Pathways",
    desc: "How can we recognise existing skills and create personalised pathways to training and employment for underserved groups?",
    img: "/bengaluruskillsummit/wp-content/uploads/2026/09/Skills-Passport-Inclusive-Pathways-1.png",
    alt: "Skills Passport Inclusive Pathways"
  },
  {
    title: "Training-to-Employment Outcomes",
    desc: "Explore the complete challenge statements, expected outcomes and pilot approach in the Skillathon 2026 Challenge Brief.",
    img: "/bengaluruskillsummit/wp-content/uploads/2026/09/Training-to-Employment-Outcomes-1.png",
    alt: "Training to Employment Outcomes"
  }
];

export default function Skillathon2026() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div id="ajax-content-wrap">
      <div className="container-wrap">
        <div className="container main-content" role="main">
          <div className="row">
            
            {/* Banner Section */}
            <div id="Skillathon-Banner" className="wpb_row vc_row-fluid vc_row top-level full-width-section" style={{
              backgroundImage: 'url(/bengaluruskillsummit/wp-content/uploads/2025/09/banner-skillathon-05.png)',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              paddingTop: '100px',
              paddingBottom: '100px'
            }}>
              <div className="row_col_wrap_12 col span_12 dark center" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="vc_col-sm-8 Skillathon-Strip wpb_column column_container vc_column_container col centered-text force-desktop-text-align-center" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  padding: '40px 30px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                  <div className="wpb_wrapper">
                    <div className="nectar-responsive-text Skillathon-Heading font_size_desktop_60px font_size_phone_46px font_line_height_110pct" style={{ color: '#106cff', marginBottom: '10px' }}>
                      <h1 style={{ fontWeight: 700, letterSpacing: '3px', margin: 0, textTransform: 'uppercase' }}>Skillathon 2026</h1>
                    </div>
                    <div className="nectar-responsive-text Skillathon-Sub font_size_desktop_36px font_size_phone_28px font_line_height_110pct" style={{ color: '#0e1220', marginBottom: '24px' }}>
                      <h4 style={{ fontWeight: 400, margin: 0 }}>Young minds powering tomorrow’s skills</h4>
                    </div>
                    <Link
                      to="/skillathon-registration"
                      className="nectar-button large regular extra-color-1 regular-button reg-details-btn"
                      style={{
                        backgroundColor: '#ff6257',
                        color: '#ffffff',
                        padding: '12px 34px',
                        borderRadius: '12px',
                        display: 'inline-block',
                        fontWeight: 700,
                        fontFamily: 'Comfortaa, sans-serif',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        letterSpacing: '0.5px'
                      }}
                    >
                      <span>APPLY NOW</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section & Organization Logos */}
            <div id="Skillathon-About" className="wpb_row vc_row-fluid vc_row" style={{ paddingTop: '50px', paddingBottom: '30px' }}>
              <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col centered-text">
                  <div className="wpb_wrapper">
                    <div className="row inner_row vc_row-o-content-top" style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '40px',
                      paddingBottom: '40px'
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <img
                          src="/bengaluruskillsummit/wp-content/uploads/2026/09/Hosted-by.png"
                          alt="Hosted by Government of Karnataka and KSDC"
                          style={{ maxHeight: '100px', width: 'auto' }}
                        />
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <img
                          src="/bengaluruskillsummit/wp-content/uploads/2026/09/Collaboration-with.png"
                          alt="In Collaboration with BCIC"
                          style={{ maxHeight: '100px', width: 'auto' }}
                        />
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <img
                          src="/bengaluruskillsummit/wp-content/uploads/2026/09/Knowledge-partner.png"
                          alt="Knowledge Partner"
                          style={{ maxHeight: '100px', width: 'auto' }}
                        />
                      </div>
                    </div>

                    <div className="nectar-responsive-text Skillathon-About-Description font_size_desktop_18px" style={{
                      color: '#0e1220',
                      maxWidth: '1000px',
                      margin: '0 auto',
                      lineHeight: '1.8',
                      textAlign: 'center'
                    }}>
                      <p>
                        Skillathon 2026 brings together student and startup teams to build practical solutions for real-world challenges in Karnataka’s skilling and employment ecosystem.<br />
                        Teams will move beyond ideas to <strong>validate problems, build prototypes, test solutions and demonstrate measurable outcomes,</strong> working with Government, industry, academia, mentors and potential users.<br />
                        The programme features six Government-defined challenges spanning AI-enabled skilling, rural employment, women returning to work, green jobs, inclusion and training-to-employment outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Objectives Section */}
            <div id="Skillathon-Objectives" className="wpb_row vc_row-fluid vc_row" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
              <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding">
                  <div className="wpb_wrapper">
                    <div className="nectar-responsive-text Section-Heading font_size_desktop_48px font_line_height_110pct" style={{ color: '#0d53c7', textAlign: 'center', marginBottom: '30px' }}>
                      <h2 style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Objectives</h2>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <img
                        className="objective-img"
                        src="/bengaluruskillsummit/wp-content/uploads/2026/09/objectives.png"
                        alt="Skillathon 2026 Objectives"
                        style={{ width: '100%', maxWidth: '1200px', height: 'auto', display: 'inline-block' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competition Structure */}
            <div id="competition-structure" className="wpb_row vc_row-fluid vc_row" style={{ paddingTop: '40px', paddingBottom: '40px', backgroundColor: 'rgba(245, 247, 250, 0.5)' }}>
              <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding">
                  <div className="wpb_wrapper">
                    <div className="nectar-responsive-text Section-Heading font_size_desktop_48px font_line_height_110pct" style={{ color: '#0d53c7', textAlign: 'center', marginBottom: '40px' }}>
                      <h2 style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Competition Structure</h2>
                    </div>

                    {/* Virtual Round Row */}
                    <div className="row inner_row vc_row-o-content-middle" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginBottom: '50px' }}>
                      <div className="vc_col-sm-6 col" style={{ textAlign: 'center' }}>
                        <img
                          src="/bengaluruskillsummit/wp-content/uploads/2026/09/virtual-round.png"
                          alt="Phase 1: Virtual Round"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                      <div className="vc_col-sm-6 col" style={{ paddingLeft: '20px' }}>
                        <ul className="competition-steps-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {[
                            "Challenge Selection & Application",
                            "Selection & Orientation",
                            "Stakeholder Connect",
                            "Final Evaluation",
                            "Skillathon Finale"
                          ].map((step, idx) => (
                            <li key={idx} style={{
                              position: 'relative',
                              paddingLeft: '26px',
                              marginBottom: '14px',
                              fontSize: '20px',
                              fontWeight: 600,
                              color: '#0e1220'
                            }}>
                              <span style={{
                                position: 'absolute',
                                left: 0,
                                top: '8px',
                                width: '10px',
                                height: '10px',
                                backgroundColor: '#ff6257',
                                borderRadius: '50%'
                              }} />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Submission Guidelines */}
                    <div style={{ textAlign: 'center', paddingTop: '30px', paddingBottom: '40px' }}>
                      <h3 style={{ fontSize: '30px', fontWeight: 700, color: '#000000', marginBottom: '8px' }}>Submission Guidelines</h3>
                      <p style={{ fontSize: '18px', color: '#555555', marginBottom: '25px' }}>Your submission should include the following sections</p>
                      <picture>
                        <source media="(max-width: 768px)" srcSet="/bengaluruskillsummit/wp-content/uploads/2026/09/Submission-Template-mobile.png" />
                        <img
                          src="/bengaluruskillsummit/wp-content/uploads/2026/09/Submission-Template-2026.png"
                          alt="Submission Guidelines Template"
                          style={{ width: '100%', maxWidth: '1100px', height: 'auto', display: 'inline-block' }}
                        />
                      </picture>
                    </div>

                    {/* Evaluation Criteria */}
                    <div style={{ textAlign: 'center', paddingTop: '30px', paddingBottom: '20px' }}>
                      <h3 style={{ fontSize: '30px', fontWeight: 700, color: '#000000', marginBottom: '25px' }}>Evaluation Criteria</h3>
                      <picture>
                        <source media="(max-width: 768px)" srcSet="/bengaluruskillsummit/wp-content/uploads/2026/09/Evaluation-Criteria-mobile.png" />
                        <img
                          src="/bengaluruskillsummit/wp-content/uploads/2026/09/Evaluation-Criteria.png"
                          alt="Evaluation Criteria"
                          style={{ width: '100%', maxWidth: '900px', height: 'auto', display: 'inline-block' }}
                        />
                      </picture>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Choose your Challenge */}
            <div id="challenge-areas" className="wpb_row vc_row-fluid vc_row" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
              <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding">
                  <div className="wpb_wrapper">
                    <div className="nectar-responsive-text challenge-main font_size_desktop_48px font_size_phone_36px font_line_height_110pct" style={{ color: '#0d53c7', textAlign: 'center', marginBottom: '10px' }}>
                      <h2 style={{ fontWeight: 700, letterSpacing: '2px' }}>Choose your Challenge</h2>
                    </div>
                    <div className="nectar-responsive-text challenge-sub font_size_desktop_22px font_size_phone_20px" style={{ color: '#0e1220', textAlign: 'center', marginBottom: '16px' }}>
                      <p style={{ margin: 0, fontWeight: 500 }}>Take on a real-world challenge and build a solution that can create measurable impact.</p>
                    </div>
                    <div className="nectar-responsive-text challenge-description font_size_desktop_16px" style={{ color: '#444444', textAlign: 'center', maxWidth: '850px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
                      <p style={{ margin: 0 }}>We invite you to tackle real-world challenges that shape the future of education, employment, and innovation. Your ideas should align with the global goals and empower communities across India and beyond.</p>
                    </div>

                    {/* 6 Challenge Cards Grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '24px',
                      maxWidth: '1200px',
                      margin: '0 auto'
                    }}>
                      {challengeList.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor: '#fdfcfa',
                            border: '1px solid #ebe6df',
                            borderRadius: '10px',
                            padding: '28px 24px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            textAlign: 'center'
                          }}
                        >
                          <div>
                            <h4 style={{
                              color: '#0e1220',
                              fontSize: '18px',
                              fontWeight: 700,
                              marginBottom: '12px'
                            }}>
                              {item.title}
                            </h4>
                            <p style={{
                              color: '#555555',
                              fontSize: '15px',
                              lineHeight: '1.6',
                              marginBottom: '20px'
                            }}>
                              {item.desc}
                            </p>
                          </div>
                          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                            <img
                              src={item.img}
                              alt={item.alt}
                              style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* PDF Brief Link */}
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                      <p style={{ fontSize: '18px', color: '#0e1220' }}>
                        Explore the complete challenge statements, expected outcomes and pilot approach in the{' '}
                        <a
                          href="/bengaluruskillsummit/wp-content/uploads/2026/09/Skillathon-2026-BengaluruSkillSummit.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#106cff', fontWeight: 700, textDecoration: 'underline' }}
                        >
                          Skillathon 2026 Challenge Brief.
                        </a>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* In-Person Finals & Curated Format */}
            <div id="phase-finals" className="wpb_row vc_row-fluid vc_row" style={{ paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#fafbfd' }}>
              <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding">
                  <div className="wpb_wrapper">
                    
                    {/* Top In-Person Finals Details */}
                    <div className="row inner_row vc_row-o-content-middle" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginBottom: '50px' }}>
                      <div className="vc_col-sm-6 col" style={{ paddingRight: '20px' }}>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ color: '#FF6257', fontWeight: 700, fontSize: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            In-Person Finals
                          </span>
                        </div>
                        <div style={{ color: '#0e1220', fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>
                          (4th November 2026)
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {[
                            "Finalists will participate in a full-day Skillathon (6–7 hours) at the Bengaluru Skill Summit.",
                            "Each team will make a 7-minute presentation followed by jury Q&A.",
                            "Jury will include policymakers, industry leaders, academics, and practitioners."
                          ].map((bullet, idx) => (
                            <li key={idx} style={{
                              position: 'relative',
                              paddingLeft: '24px',
                              marginBottom: '12px',
                              fontSize: '16px',
                              lineHeight: '1.6',
                              color: '#333333'
                            }}>
                              <span style={{
                                position: 'absolute',
                                left: 0,
                                top: '8px',
                                width: '8px',
                                height: '8px',
                                backgroundColor: '#ff6257',
                                borderRadius: '50%'
                              }} />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="vc_col-sm-6 col" style={{ textAlign: 'center' }}>
                        <img
                          src="/bengaluruskillsummit/wp-content/uploads/2026/09/in-personal-finals.png"
                          alt="Phase 2 In-Person Finals"
                          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                      </div>
                    </div>

                    {/* Curated Format 5 Stages */}
                    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                      <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '30px' }}>
                        The curated format will take teams through five stages of problem-solving
                      </h3>
                      <picture>
                        <source media="(max-width: 768px)" srcSet="/bengaluruskillsummit/wp-content/uploads/2025/09/in-person-finals-mobile-scaled.png" />
                        <img
                          src="/bengaluruskillsummit/wp-content/uploads/2025/09/curated-format.png"
                          alt="Curated Format 5 Stages of Problem-Solving"
                          style={{ width: '100%', maxWidth: '1100px', height: 'auto', display: 'inline-block' }}
                        />
                      </picture>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Key Dates */}
            <div id="key-dates" className="wpb_row vc_row-fluid vc_row" style={{ paddingTop: '60px', paddingBottom: '30px' }}>
              <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding">
                  <div className="wpb_wrapper">
                    <div className="nectar-responsive-text Section-Heading font_size_desktop_48px font_line_height_110pct" style={{ color: '#0d53c7', textAlign: 'center', marginBottom: '35px' }}>
                      <h2 style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Key Dates</h2>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <picture>
                        <source media="(max-width: 768px)" srcSet="/bengaluruskillsummit/wp-content/uploads/2026/09/Key-Dates-Mobile-2026.png" />
                        <img
                          src="/bengaluruskillsummit/wp-content/uploads/2026/09/Key-Dates-Desktop-2026.png"
                          alt="Key Dates Timeline 2026"
                          style={{ width: '100%', maxWidth: '1000px', height: 'auto', display: 'inline-block' }}
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Details */}
            <div id="registration-details" className="wpb_row vc_row-fluid vc_row" style={{ paddingTop: '50px', paddingBottom: '60px' }}>
              <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding">
                  <div className="wpb_wrapper">
                    <div className="nectar-responsive-text Section-Heading font_size_desktop_48px font_line_height_110pct" style={{ color: '#0d53c7', textAlign: 'center', marginBottom: '40px' }}>
                      <h2 style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Registration Details</h2>
                    </div>

                    <div className="row inner_row vc_row-o-content-middle" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                      <div className="vc_col-sm-6 col" style={{ paddingRight: '20px' }}>
                        <h4 style={{ fontSize: '22px', fontWeight: 700, color: '#0e1220', marginBottom: '16px' }}>Rules &amp; Guidelines</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                          {[
                            <><strong>Choose one challenge</strong> and develop a solution addressing the identified problem.</>,
                            <><strong>Build and demonstrate</strong> a working prototype, not just an idea.</>,
                            <><strong>Validate your solution</strong> with relevant stakeholders and potential users.</>,
                            <><strong>Test and measure</strong> your solution through real-world pilots wherever feasible.</>,
                            <><strong>Present evidence and outcomes</strong> following the journey: <strong>Problem → Solution → Prototype → Pilot → Evidence → Impact → Scale.</strong></>,
                            <><strong>Final evaluation</strong> will consider problem understanding, innovation, prototype, validation, feasibility, impact and scalability.</>
                          ].map((rule, idx) => (
                            <li key={idx} style={{
                              position: 'relative',
                              paddingLeft: '24px',
                              marginBottom: '12px',
                              fontSize: '15px',
                              lineHeight: '1.6',
                              color: '#333333'
                            }}>
                              <span style={{
                                position: 'absolute',
                                left: 0,
                                top: '8px',
                                width: '8px',
                                height: '8px',
                                backgroundColor: '#ff6257',
                                borderRadius: '50%'
                              }} />
                              {rule}
                            </li>
                          ))}
                        </ul>

                        <Link
                          to="/skillathon-registration"
                          className="nectar-button large regular extra-color-1 regular-button"
                          style={{
                            backgroundColor: '#ff6257',
                            color: '#ffffff',
                            padding: '12px 32px',
                            borderRadius: '12px',
                            display: 'inline-block',
                            fontWeight: 700,
                            fontFamily: 'Comfortaa, sans-serif',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            letterSpacing: '0.5px'
                          }}
                        >
                          <span>REGISTER NOW</span>
                        </Link>
                      </div>

                      <div className="vc_col-sm-6 col" style={{ textAlign: 'center' }}>
                        <img
                          src="/bengaluruskillsummit/wp-content/uploads/2026/09/registration-details-1.png"
                          alt="Registration Details Guidelines"
                          style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div id="hodl-faq-section" className="wpb_row vc_row-fluid vc_row full-width-section" style={{
              paddingTop: '60px',
              paddingBottom: '70px',
              backgroundColor: '#f8f9fa'
            }}>
              <div className="row_col_wrap_12 col span_12 dark left" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <div className="wpb_wrapper">
                  <div className="nectar-responsive-text Section-Heading font_size_desktop_48px font_line_height_110pct" style={{ color: '#0d53c7', textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>FAQs</h2>
                  </div>

                  <div className="toggles accordion">
                    {faqsData.map((faq, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: '#ffffff',
                          borderRadius: '8px',
                          marginBottom: '14px',
                          border: '1px solid #e2e8f0',
                          overflow: 'hidden'
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '18px 24px',
                            background: 'none',
                            border: 'none',
                            outline: 'none',
                            textAlign: 'left',
                            cursor: 'pointer',
                            fontFamily: 'Comfortaa, sans-serif',
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#0e1220'
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            {openFaq === idx ? (
                              <FaMinusCircle style={{ color: '#ff6257', fontSize: '20px', flexShrink: 0 }} />
                            ) : (
                              <FaPlusCircle style={{ color: '#0d53c7', fontSize: '20px', flexShrink: 0 }} />
                            )}
                            {faq.question}
                          </span>
                        </button>
                        {openFaq === idx && (
                          <div style={{
                            padding: '0 24px 20px 58px',
                            color: '#444444',
                            fontSize: '16px',
                            lineHeight: '1.7'
                          }}>
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact-info" className="wpb_row vc_row-fluid vc_row full-width-section" style={{
              paddingTop: '60px',
              paddingBottom: '40px',
              backgroundImage: 'url(/bengaluruskillsummit/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
              <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '30px'
                }}>
                  <div className="contact-info-card" style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
                  }}>
                    <h4 style={{ color: '#0d53c7', fontWeight: 700, marginBottom: '8px' }}>Sponsor &amp; Exhibitor Queries</h4>
                    <p style={{ margin: '0 0 6px 0', fontWeight: 600, color: '#333' }}>Vinay Martin</p>
                    <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Commercial Director</p>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                      <a href="mailto:vinay.martin@tresconglobal.com" style={{ color: '#ff6257', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaEnvelope /> vinay.martin@tresconglobal.com
                      </a>
                    </p>
                  </div>

                  <div className="contact-info-card" style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
                  }}>
                    <h4 style={{ color: '#0d53c7', fontWeight: 700, marginBottom: '8px' }}>Partnership Queries</h4>
                    <p style={{ margin: '0 0 6px 0', fontWeight: 600, color: '#333' }}>Shilpa S</p>
                    <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Lead Partnership</p>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                      <a href="mailto:shilpa@tresconglobal.com" style={{ color: '#ff6257', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaEnvelope /> shilpa@tresconglobal.com
                      </a>
                    </p>
                  </div>

                  <div className="contact-info-card" style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
                  }}>
                    <h4 style={{ color: '#0d53c7', fontWeight: 700, marginBottom: '8px' }}>General Queries</h4>
                    <p style={{ margin: '0 0 6px 0', fontWeight: 600, color: '#333' }}>Bengaluru Skill Summit Team</p>
                    <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Event Support</p>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                      <a href="mailto:info@bengaluruskillsummit.com" style={{ color: '#ff6257', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaEnvelope /> info@bengaluruskillsummit.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
