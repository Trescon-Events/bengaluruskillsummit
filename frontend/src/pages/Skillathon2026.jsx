import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [openFaq, setOpenFaq] = useState(0); // Q1 open by default matching screenshot

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div id="ajax-content-wrap" style={{ backgroundColor: '#ffffff', color: '#0e1220', fontFamily: '"Comfortaa", sans-serif' }}>
      <div className="container-wrap">
        <div className="container main-content" role="main" style={{ padding: 0, maxWidth: '100%', width: '100%' }}>
          
          {/* =========================================================================
              1. Hero Banner (Matching media_1790157299086.png)
              ========================================================================= */}
          <section id="Skillathon-Banner" style={{
            backgroundImage: 'url(/bengaluruskillsummit/wp-content/uploads/2025/09/banner-skillathon-05.png)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingTop: '90px',
            paddingBottom: '90px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '45px 60px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              textAlign: 'center',
              maxWidth: '780px',
              width: '90%',
              margin: '0 auto'
            }}>
              <h1 style={{
                color: '#0066ff',
                fontFamily: 'Comfortaa, sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                margin: '0 0 12px 0',
                lineHeight: 1.15
              }}>
                SKILLATHON 2026
              </h1>
              <h4 style={{
                color: '#0e1220',
                fontFamily: 'Comfortaa, sans-serif',
                fontSize: '24px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: '0 0 28px 0',
                lineHeight: 1.25
              }}>
                YOUNG MINDS POWERING TOMORROW’S SKILLS
              </h4>
              <Link
                to="/skillathon-registration"
                style={{
                  backgroundColor: '#ff6257',
                  color: '#ffffff',
                  padding: '12px 36px',
                  borderRadius: '10px',
                  display: 'inline-block',
                  fontWeight: 700,
                  fontSize: '14px',
                  fontFamily: 'Comfortaa, sans-serif',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 14px rgba(255, 98, 87, 0.35)',
                  transition: 'all 0.25s ease'
                }}
              >
                APPLY NOW
              </Link>
            </div>
          </section>

          {/* =========================================================================
              2. Organizers & Description (Matching media_1790157309403.png)
              ========================================================================= */}
          <section id="Skillathon-About" style={{ paddingTop: '50px', paddingBottom: '50px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
              
              {/* Organizers Strip */}
              <div style={{ marginBottom: '45px' }}>
                <img
                  src="/bengaluruskillsummit/wp-content/uploads/2026/09/organizers-strip-2026.png"
                  alt="Hosted by Crowd Product, MXR | In collaboration with KSDA | Knowledge Partner KDEM"
                  style={{ maxWidth: '850px', width: '100%', height: 'auto', display: 'inline-block' }}
                />
              </div>

              {/* Description Text */}
              <div style={{
                maxWidth: '960px',
                margin: '0 auto',
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#0e1220',
                textAlign: 'center'
              }}>
                <p style={{ marginBottom: '18px' }}>
                  Skillathon 2026 brings together student and startup teams to build practical solutions for real-world challenges in Karnataka's skilling and employment ecosystem.
                </p>
                <p style={{ marginBottom: '18px' }}>
                  Teams will move beyond ideas to <strong>validate problems, build prototypes, test solutions and demonstrate measurable outcomes</strong>, working with Government, industry, academia, mentors and potential users.
                </p>
                <p style={{ margin: 0 }}>
                  The programme features six Government-defined challenges spanning AI-enabled skilling, rural employment, women returning to work, green jobs, inclusion and training-to-employment outcomes.
                </p>
              </div>
            </div>
          </section>

          {/* =========================================================================
              3. Objectives (Matching media_1790157317620.png)
              ========================================================================= */}
          <section id="Skillathon-Objectives" style={{ paddingTop: '20px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <h2 style={{
                color: '#0066ff',
                fontFamily: 'Comfortaa, sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                textTransform: 'uppercase',
                textAlign: 'center',
                letterSpacing: '2px',
                marginBottom: '40px'
              }}>
                OBJECTIVES
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                alignItems: 'center'
              }}>
                {/* Left: Stage Photo */}
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/bengaluruskillsummit/wp-content/uploads/2026/09/objectives-stage-photo.png"
                    alt="Skillathon 2025 Congratulations Stage Award Ceremony"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '16px',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
                    }}
                  />
                </div>

                {/* Right: Bullets */}
                <div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { strong: "Solve real-world challenges", text: " across Karnataka's skilling and employment ecosystem." },
                      { strong: "Build practical solutions", text: " that move from problem identification to prototype and pilot." },
                      { strong: "Connect innovators with stakeholders", text: " across Government, industry, academia and the wider ecosystem." },
                      { strong: "Test and validate solutions", text: " through real-world users, institutions and workflows." },
                      { strong: "Measure outcomes and impact", text: " to identify solutions with potential for scale." }
                    ].map((item, idx) => (
                      <li key={idx} style={{
                        position: 'relative',
                        paddingLeft: '22px',
                        marginBottom: '18px',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#0e1220'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '10px',
                          width: '6px',
                          height: '6px',
                          backgroundColor: '#0e1220',
                          borderRadius: '50%'
                        }} />
                        <strong>{item.strong}</strong>{item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              4. Competition Structure (Matching media_1790157327607.png)
              ========================================================================= */}
          <section id="competition-structure" style={{ paddingTop: '20px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <h2 style={{
                color: '#0066ff',
                fontFamily: 'Comfortaa, sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                textTransform: 'uppercase',
                textAlign: 'center',
                letterSpacing: '2px',
                marginBottom: '40px'
              }}>
                COMPETITION STRUCTURE
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                alignItems: 'center'
              }}>
                {/* Left: Students Table Photo */}
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/bengaluruskillsummit/wp-content/uploads/2026/09/competition-students-photo.png"
                    alt="Participants at Skillathon round table"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '16px',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
                    }}
                  />
                </div>

                {/* Right: Bullets */}
                <div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      "Challenge Selection & Application",
                      "Selection & Orientation",
                      "Stakeholder Connect",
                      "Final Evaluation",
                      "Skillathon Finale"
                    ].map((item, idx) => (
                      <li key={idx} style={{
                        position: 'relative',
                        paddingLeft: '22px',
                        marginBottom: '20px',
                        fontSize: '18px',
                        fontWeight: 500,
                        color: '#0e1220'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '11px',
                          width: '6px',
                          height: '6px',
                          backgroundColor: '#0e1220',
                          borderRadius: '50%'
                        }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              5. Submission Guidelines & Evaluation Criteria (Matching media_1790157341360.png)
              ========================================================================= */}
          <section id="submission-evaluation" style={{ paddingTop: '20px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
              
              {/* Submission Guidelines */}
              <div style={{ marginBottom: '60px' }}>
                <h3 style={{
                  color: '#000000',
                  fontFamily: 'Comfortaa, sans-serif',
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}>
                  Submission Guidelines
                </h3>
                <p style={{
                  color: '#444444',
                  fontSize: '17px',
                  marginBottom: '35px'
                }}>
                  Your submission should include the following sections
                </p>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/bengaluruskillsummit/wp-content/uploads/2026/09/Submission-Template-mobile.png" />
                  <img
                    src="/bengaluruskillsummit/wp-content/uploads/2026/09/Submission-Template-2026.png"
                    alt="Submission Guidelines: Challenge Selected, Problem Understanding, Proposed Solution, Prototype Approach, Pilot Approach, Expected Impact"
                    style={{ width: '100%', maxWidth: '1000px', height: 'auto', display: 'inline-block' }}
                  />
                </picture>
              </div>

              {/* Evaluation Criteria */}
              <div>
                <h3 style={{
                  color: '#000000',
                  fontFamily: 'Comfortaa, sans-serif',
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '35px'
                }}>
                  Evaluation Criteria
                </h3>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/bengaluruskillsummit/wp-content/uploads/2026/09/Evaluation-Criteria-mobile.png" />
                  <img
                    src="/bengaluruskillsummit/wp-content/uploads/2026/09/Evaluation-Criteria.png"
                    alt="Evaluation Criteria: 20% Problem Understanding, 25% Innovation, 25% Prototype & Validation, 15% Feasibility & Scalability, 15% Impact"
                    style={{ width: '100%', maxWidth: '850px', height: 'auto', display: 'inline-block' }}
                  />
                </picture>
              </div>

            </div>
          </section>

          {/* =========================================================================
              6. Choose Your Challenge (Matching media_1790157389912.png)
              ========================================================================= */}
          <section id="choose-challenge" style={{ paddingTop: '30px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1150px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{
                color: '#0066ff',
                fontFamily: 'Comfortaa, sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '10px'
              }}>
                CHOOSE YOUR CHALLENGE
              </h2>
              <h4 style={{
                color: '#0e1220',
                fontSize: '20px',
                fontWeight: 500,
                marginBottom: '18px'
              }}>
                Take on a real-world challenge and build a solution that can create measurable impact.
              </h4>
              <p style={{
                color: '#444444',
                fontSize: '15px',
                lineHeight: '1.6',
                maxWidth: '920px',
                margin: '0 auto 40px auto'
              }}>
                We invite you to tackle real-world challenges that shape the future of education, employment, and innovation. Your ideas should align with the global goals and empower communities across India and beyond.
              </p>

              {/* 6 Challenge Cards Grid: 6 equal cards in a single row on desktop */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px',
                alignItems: 'stretch',
                marginBottom: '40px'
              }}>
                {challengeList.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      padding: '22px 12px',
                      border: '1px solid #f0f2f5',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      textAlign: 'center',
                      minHeight: '270px',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                  >
                    <div>
                      <h4 style={{
                        color: '#0e1220',
                        fontFamily: 'Comfortaa, sans-serif',
                        fontSize: '13.5px',
                        fontWeight: 700,
                        marginBottom: '10px',
                        lineHeight: 1.3
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        color: '#444444',
                        fontSize: '11.5px',
                        lineHeight: '1.45',
                        margin: 0
                      }}>
                        {item.desc}
                      </p>
                    </div>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                      <img
                        src={item.img}
                        alt={item.alt}
                        style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Brief Link */}
              <p style={{ fontSize: '16px', color: '#0e1220' }}>
                Explore the complete challenge statements, expected outcomes and pilot approach in the{' '}
                <a
                  href="/bengaluruskillsummit/wp-content/uploads/2026/09/Skillathon-2026-BengaluruSkillSummit.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0066ff', textDecoration: 'underline', fontWeight: 600 }}
                >
                  Skillathon 2026 Challenge Brief.
                </a>
              </p>
            </div>
          </section>

          {/* =========================================================================
              7. In-Person Finals & Curated Format & Key Dates (Matching media_1790157409934.png)
              ========================================================================= */}
          <section id="phase-finals" style={{ paddingTop: '30px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              
              {/* Top Row: In-Person Finals with Stage Presentation Photo */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                alignItems: 'center',
                marginBottom: '60px'
              }}>
                <div>
                  <h3 style={{
                    color: '#0e1220',
                    fontFamily: 'Comfortaa, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    margin: '0 0 6px 0'
                  }}>
                    IN-PERSON FINALS
                  </h3>
                  <div style={{ color: '#555555', fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>
                    (4th November 2026)
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      "Finalists will participate in a full-day Skillathon (6–7 hours) at the Bengaluru Skill Summit.",
                      "Each team will make a 7-minute presentation followed by jury Q&A.",
                      "Jury will include policymakers, industry leaders, academics, and practitioners."
                    ].map((text, idx) => (
                      <li key={idx} style={{
                        position: 'relative',
                        paddingLeft: '20px',
                        marginBottom: '14px',
                        fontSize: '15px',
                        lineHeight: '1.6',
                        color: '#0e1220'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '10px',
                          width: '5px',
                          height: '5px',
                          backgroundColor: '#0e1220',
                          borderRadius: '50%'
                        }} />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/bengaluruskillsummit/wp-content/uploads/2026/09/in-person-finals-stage-photo.png"
                    alt="Gamified Challenges and Community Tool Vaults Final Presentation"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '16px',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
                    }}
                  />
                </div>
              </div>

              {/* Curated Format 5 Stages Graphic */}
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <img
                  src="/bengaluruskillsummit/wp-content/uploads/2026/09/curated-format-2026.png"
                  alt="The curated format will take teams through five stages of problem-solving: 1 Empathise, 2 Define, 3 Ideate, 4 Consolidate, 5 Pitch"
                  style={{ width: '100%', maxWidth: '980px', height: 'auto', display: 'inline-block' }}
                />
              </div>

              {/* Key Dates Section */}
              <div style={{ textAlign: 'center' }}>
                <h2 style={{
                  color: '#0066ff',
                  fontFamily: 'Comfortaa, sans-serif',
                  fontSize: '44px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '35px'
                }}>
                  KEY DATES
                </h2>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/bengaluruskillsummit/wp-content/uploads/2026/09/Key-Dates-Mobile-2026.png" />
                  <img
                    src="/bengaluruskillsummit/wp-content/uploads/2026/09/Key-Dates-Desktop-2026.png"
                    alt="Key Dates: Applications Open 22 Sep 2026, Application Deadline 2 Oct 2026, Final Evaluation 3-4 Nov 2026, Skillathon Finale 5 Nov 2026"
                    style={{ width: '100%', maxWidth: '920px', height: 'auto', display: 'inline-block' }}
                  />
                </picture>
              </div>

            </div>
          </section>

          {/* =========================================================================
              8. Registration Details (Matching media_1790157421641.png)
              ========================================================================= */}
          <section id="registration-details" style={{ paddingTop: '30px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <h2 style={{
                color: '#0066ff',
                fontFamily: 'Comfortaa, sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                textTransform: 'uppercase',
                textAlign: 'center',
                letterSpacing: '2px',
                marginBottom: '40px'
              }}>
                REGISTRATION DETAILS
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                alignItems: 'center'
              }}>
                {/* Left: Rules & Guidelines & Register Button */}
                <div>
                  <h4 style={{
                    color: '#0e1220',
                    fontFamily: 'Comfortaa, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '16px'
                  }}>
                    Rules &amp; Guidelines
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0' }}>
                    {[
                      "Choose one challenge and develop a solution addressing the identified problem.",
                      "Build and demonstrate a working prototype, not just an idea.",
                      "Validate your solution with relevant stakeholders and potential users.",
                      "Test and measure your solution through real-world pilots wherever feasible.",
                      "Present evidence and outcomes following the journey: Problem → Solution → Prototype → Pilot → Evidence → Impact → Scale.",
                      "Final evaluation will consider problem understanding, innovation, prototype, validation, feasibility, impact and scalability."
                    ].map((text, idx) => (
                      <li key={idx} style={{
                        position: 'relative',
                        paddingLeft: '20px',
                        marginBottom: '12px',
                        fontSize: '14.5px',
                        lineHeight: '1.6',
                        color: '#0e1220'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '9px',
                          width: '5px',
                          height: '5px',
                          backgroundColor: '#0e1220',
                          borderRadius: '50%'
                        }} />
                        {text}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/skillathon-registration"
                    style={{
                      backgroundColor: '#ff6257',
                      color: '#ffffff',
                      padding: '12px 32px',
                      borderRadius: '8px',
                      display: 'inline-block',
                      fontWeight: 700,
                      fontSize: '13.5px',
                      fontFamily: 'Comfortaa, sans-serif',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      letterSpacing: '0.5px',
                      boxShadow: '0 4px 14px rgba(255, 98, 87, 0.35)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    REGISTER NOW
                  </Link>
                </div>

                {/* Right: Participants Group Photo */}
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/bengaluruskillsummit/wp-content/uploads/2026/09/registration-group-photo.png"
                    alt="Participants with Summit badges at Bengaluru Skill Summit"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '16px',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
                    }}
                  />
                </div>
              </div>

            </div>
          </section>

          {/* =========================================================================
              9. FAQs (Matching media_1790157421641.png)
              ========================================================================= */}
          <section id="faqs" style={{ paddingTop: '20px', paddingBottom: '80px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
              <h2 style={{
                color: '#0066ff',
                fontFamily: 'Comfortaa, sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                textTransform: 'uppercase',
                textAlign: 'center',
                letterSpacing: '2px',
                marginBottom: '40px'
              }}>
                FAQS
              </h2>

              <div style={{ border: '1px solid #c8d0dc', borderRadius: '0', overflow: 'hidden' }}>
                {faqsData.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        borderBottom: idx === faqsData.length - 1 ? 'none' : '1px solid #c8d0dc',
                        backgroundColor: '#ffffff'
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
                          padding: '14px 18px',
                          background: 'none',
                          border: 'none',
                          outline: 'none',
                          textAlign: 'left',
                          cursor: 'pointer',
                          fontFamily: 'Comfortaa, sans-serif',
                          fontSize: '15px',
                          fontWeight: 700,
                          color: '#0e1220'
                        }}
                      >
                        <span>{faq.question}</span>
                        <span style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          border: '1.5px solid #0e1220',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          flexShrink: 0,
                          marginLeft: '14px',
                          color: '#0e1220'
                        }}>
                          {isOpen ? '—' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div style={{
                          padding: '0 18px 16px 18px',
                          fontSize: '14px',
                          lineHeight: '1.6',
                          color: '#333333'
                        }}>
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
