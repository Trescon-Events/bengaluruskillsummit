import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqsData = [
  {
    question: "What is Skillathon 2026?",
    answer: "Skillathon 2026 is a solution-building programme where student and startup teams address Government-defined challenges across Karnataka’s skilling and employment ecosystem."
  },
  {
    question: "What are the challenge areas?",
    answer: "There are key challenge areas including: AI Skills Coach, Rural Youth: Skills-to-Jobs, Green Jobs & Future Skills, Skills Passport & Inclusive Pathways, and Training-to-Employment Outcomes."
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
    alt: "Rural Youth: Skills-to-Jobs"
  },
  {
    title: "Green Jobs & Future Skills",
    desc: "How can youth identify emerging green jobs and the skills, training and certifications needed for them?",
    img: "/bengaluruskillsummit/wp-content/uploads/2026/09/Green-Jobs-Future-Skills-1.png",
    alt: "Green Jobs & Future Skills"
  },
  {
    title: "Skills Passport & Inclusive Pathways",
    desc: "How can we recognise existing skills and create personalised pathways to training and employment for underserved groups?",
    img: "/bengaluruskillsummit/wp-content/uploads/2026/09/Skills-Passport-Inclusive-Pathways-1.png",
    alt: "Skills Passport & Inclusive Pathways"
  },
  {
    title: "Training-to-Employment Outcomes",
    desc: "Explore the complete challenge statements, expected outcomes and pilot approach in the Skillathon 2026 Challenge Brief.",
    img: "/bengaluruskillsummit/wp-content/uploads/2026/09/Training-to-Employment-Outcomes-1.png",
    alt: "Training-to-Employment Outcomes",
    link: "/bengaluruskillsummit/wp-content/uploads/2026/09/Skillathon-2026-BengaluruSkillSummit.pdf"
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
          {/* =========================================================================
              1. Hero Banner (Matching media_1790230742750.png)
              ========================================================================= */}
          <section id="Skillathon-Banner" style={{
            backgroundImage: 'url(/bengaluruskillsummit/wp-content/uploads/2025/09/banner-skillathon-05.png)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingTop: '80px',
            paddingBottom: '80px',
            paddingLeft: '20px',
            paddingRight: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '340px'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              padding: '40px 50px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
              maxWidth: '840px',
              width: '100%',
              margin: '0 auto'
            }}>
              <h1 style={{
                color: '#106cff',
                fontFamily: '"Joost", "Jost", sans-serif',
                fontSize: '60px',
                fontWeight: 700,
                lineHeight: '66px',
                margin: '0 0 10px 0'
              }}>
                Skillathon 2026
              </h1>
              <h4 style={{
                color: '#0e1220',
                fontFamily: '"Joost", "Jost", sans-serif',
                fontSize: '36px',
                fontWeight: 400,
                lineHeight: '40px',
                margin: '0 0 24px 0'
              }}>
                YOUNG MINDS POWERING TOMORROW’S SKILLS
              </h4>
              <Link
                to="/skillathon-registration"
                style={{
                  backgroundColor: '#ff6257',
                  color: '#ffffff',
                  padding: '15px 20px',
                  minWidth: '180px',
                  borderRadius: '12px',
                  display: 'inline-block',
                  fontWeight: 700,
                  fontSize: '14px',
                  fontFamily: '"Comfortaa", sans-serif',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 14px rgba(255, 98, 87, 0.35)',
                  transition: 'all 0.25s ease',
                  textAlign: 'center'
                }}
              >
                APPLY NOW
              </Link>
            </div>
          </section>

          {/* =========================================================================
              2. Organizers & Description (Using downloaded partner images)
              ========================================================================= */}
          <section id="Skillathon-About" style={{ paddingTop: '50px', paddingBottom: '50px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
              
              {/* Partner Logos Row */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '50px',
                marginBottom: '45px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src="/bengaluruskillsummit/images/skillathon/hosted-by.png"
                    alt="Hosted by Crowd Product and MXR"
                    style={{ maxHeight: '72px', maxWidth: '240px', width: 'auto', height: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src="/bengaluruskillsummit/images/skillathon/collaboration-with.png"
                    alt="In collaboration with Karnataka Skill Development Authority"
                    style={{ maxHeight: '82px', maxWidth: '220px', width: 'auto', height: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src="/bengaluruskillsummit/images/skillathon/knowledge-partner.png"
                    alt="Knowledge Partner Karnataka Digital Economy Mission"
                    style={{ maxHeight: '88px', maxWidth: '220px', width: 'auto', height: 'auto', objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Description Text */}
              <div style={{
                maxWidth: '960px',
                margin: '0 auto',
                fontFamily: '"Comfortaa", sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '30px',
                color: '#0e1220',
                textAlign: 'center'
              }}>
                <p style={{ marginBottom: '16px', fontFamily: '"Comfortaa", sans-serif', fontSize: '18px', lineHeight: '30px', color: '#0e1220' }}>
                  Skillathon 2026 brings together student and startup teams to build practical solutions for real-world challenges in Karnataka's skilling and employment ecosystem.
                </p>
                <p style={{ marginBottom: '16px', fontFamily: '"Comfortaa", sans-serif', fontSize: '18px', lineHeight: '30px', color: '#0e1220' }}>
                  Teams will move beyond ideas to <strong>validate problems, build prototypes, test solutions and demonstrate measurable outcomes</strong>, working with Government, industry, academia, mentors and potential users.
                </p>
                <p style={{ margin: 0, fontFamily: '"Comfortaa", sans-serif', fontSize: '18px', lineHeight: '30px', color: '#0e1220' }}>
                  The programme features Government-defined challenges spanning AI-enabled skilling, rural employment, green jobs, inclusion and training-to-employment outcomes.
                </p>
              </div>
            </div>
          </section>

          {/* =========================================================================
              3. Objectives (Matching media_1790233613822.png)
              ========================================================================= */}
          <section id="Skillathon-Objectives" style={{ paddingTop: '20px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <h2 style={{
                color: '#0d53c7',
                fontFamily: '"Joost", "Jost", sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '1px',
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
                {/* Left: Official Objectives Image */}
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/bengaluruskillsummit/wp-content/uploads/2026/09/objectives.png"
                    alt="objectives"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '16px',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
                    }}
                  />
                </div>

                {/* Right: Bullets - Single Clean Dot */}
                <div className="skillathon-bullet-list">
                  {[
                    { strong: "Solve real-world challenges", text: "across Karnataka's skilling and employment ecosystem." },
                    { strong: "Build practical solutions", text: "that move from problem identification to prototype and pilot." },
                    { strong: "Connect innovators with stakeholders", text: "across Government, industry, academia and the wider ecosystem." },
                    { strong: "Test and validate solutions", text: "through real-world users, institutions and workflows." },
                    { strong: "Measure outcomes and impact", text: "to identify solutions with potential for scale." }
                  ].map((item, idx) => (
                    <div key={idx} className="skillathon-bullet-item">
                      <span className="skillathon-bullet-dot" />
                      <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#0e1220' }}>
                        <strong style={{ fontWeight: 700 }}>{item.strong} </strong>
                        <span>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              4. Competition Structure (Matching media_1790233627041.png)
              ========================================================================= */}
          <section id="competition-structure" style={{ paddingTop: '20px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <h2 style={{
                color: '#0d53c7',
                fontFamily: '"Joost", "Jost", sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '1px',
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
                {/* Left: Official Virtual Round Image */}
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/bengaluruskillsummit/wp-content/uploads/2026/09/virtual-round.png"
                    alt="virtual round"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '16px',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
                    }}
                  />
                </div>

                {/* Right: Bullets - Single Clean Dot */}
                <div className="skillathon-bullet-list">
                  {[
                    "Challenge Selection & Application",
                    "Selection & Orientation",
                    "Stakeholder Connect",
                    "Final Evaluation",
                    "Skillathon Finale"
                  ].map((item, idx) => (
                    <div key={idx} className="skillathon-bullet-item">
                      <span className="skillathon-bullet-dot" />
                      <div style={{ fontSize: '18px', fontWeight: 500, lineHeight: '1.6', color: '#0e1220' }}>
                        {item}
                      </div>
                    </div>
                  ))}
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
                  fontFamily: '"Comfortaa", sans-serif',
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
                  fontFamily: '"Comfortaa", sans-serif',
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
              6. Choose Your Challenge (Matching media_1790230804491.png)
              ========================================================================= */}
          <section id="choose-challenge" style={{ paddingTop: '30px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px', scrollMarginTop: '100px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
              <span id="women-returning-to-work" style={{ scrollMarginTop: '100px' }} />
              <h2 style={{
                color: '#0d53c7',
                fontFamily: '"Joost", "Jost", sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '1px',
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

              {/* 5 Challenge Cards Grid matching screenshot */}
              <div className="skillathon-challenges-grid">
                {challengeList.map((item, idx) => {
                  const cardInner = (
                    <>
                      <div style={{ width: '100%' }}>
                        <div className="skillathon-challenge-title">
                          {item.title}
                        </div>
                        <div className="skillathon-challenge-desc">
                          {item.desc}
                        </div>
                      </div>

                      <div
                        style={{
                          marginTop: 'auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          paddingTop: '6px'
                        }}
                      >
                        <img
                          src={item.img}
                          alt={item.alt}
                          style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                          loading="lazy"
                        />
                      </div>
                    </>
                  );

                  return item.link ? (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="skillathon-challenge-card"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'pointer'
                      }}
                      title="View Skillathon 2026 Challenge Brief"
                    >
                      {cardInner}
                    </a>
                  ) : (
                    <div
                      key={idx}
                      className="skillathon-challenge-card"
                    >
                      {cardInner}
                    </div>
                  );
                })}
              </div>

              {/* Challenge Brief Link */}
              <p style={{
                fontSize: '16px',
                color: '#0e1220',
                lineHeight: '1.6',
                marginTop: '25px',
                marginBottom: 0,
                fontFamily: '"Plus Jakarta Sans", "Comfortaa", sans-serif',
                textAlign: 'center'
              }}>
                Explore the complete challenge statements, expected outcomes and pilot<br />
                approach in the <a style={{ color: '#106cff', textDecoration: 'underline' }} href="https://bengaluruskillsummit.com/wp-content/uploads/2026/09/Skillathon-2026-BengaluruSkillSummit.pdf" target="_blank" rel="noopener noreferrer" className="accessed">Skillathon 2026 Challenge Brief.</a>
              </p>
            </div>
          </section>

          {/* =========================================================================
              7. In-Person Finals & Curated Format & Key Dates (Matching media_1790230813635.png)
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
                    fontFamily: '"Comfortaa", sans-serif',
                    fontSize: '22px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    margin: '0 0 6px 0'
                  }}>
                    IN-PERSON FINALS
                  </h3>
                  <div style={{ color: '#555555', fontSize: '16px', fontWeight: 600, marginBottom: '24px' }}>
                    (4th November 2026)
                  </div>
                  
                  {/* Clean Single Dot Bullets */}
                  <div className="skillathon-bullet-list">
                    {[
                      "Finalists will participate in a full-day Skillathon (6–7 hours) at the Bengaluru Skill Summit.",
                      "Each team will make a 7-minute presentation followed by jury Q&A.",
                      "Jury will include policymakers, industry leaders, academics, and practitioners."
                    ].map((text, idx) => (
                      <div key={idx} className="skillathon-bullet-item">
                        <span className="skillathon-bullet-dot" />
                        <div style={{ fontSize: '15px', lineHeight: '1.6', color: '#0e1220' }}>
                          {text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/bengaluruskillsummit/wp-content/uploads/2026/09/in-personal-finals.png"
                    alt="in personal finals"
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
              <div style={{ textAlign: 'center' }}>
                <h4 className="curated-format-heading">
                  The curated format will take teams through five stages of problem-solving
                </h4>
                <img
                  src="/bengaluruskillsummit/wp-content/uploads/2025/09/curated-format.png"
                  alt="The curated format will take teams through five stages of problem-solving: 1 Empathise, 2 Define, 3 Ideate, 4 Consolidate, 5 Pitch"
                  className="curated-format-img"
                  style={{ width: '100%', maxWidth: '1000px', height: 'auto', margin: '0 auto' }}
                />
                <img
                  src="/bengaluruskillsummit/wp-content/uploads/2025/09/in-person-finals-mobile-scaled.png"
                  alt="The curated format will take teams through five stages of problem-solving: 1 Empathise, 2 Define, 3 Ideate, 4 Consolidate, 5 Pitch"
                  className="curated-format-img-mob"
                  style={{ width: '100%', maxWidth: '450px', height: 'auto', margin: '0 auto' }}
                />
              </div>

            </div>
          </section>

          {/* =========================================================================
              8. Prizes & Recognition (Hidden as requested)
              ========================================================================= */}
          <section id="prizes-recognition" style={{
            display: 'none',
            backgroundImage: 'url(/bengaluruskillsummit/wp-content/uploads/2025/09/bg-prize-recognition.webp)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingTop: '60px',
            paddingBottom: '60px',
            paddingLeft: '20px',
            paddingRight: '20px'
          }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{
                color: '#ffffff',
                fontFamily: '"Joost", "Jost", sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                textAlign: 'center',
                letterSpacing: '1px',
                marginBottom: '28px'
              }}>
                Prizes &amp; Recognition
              </h2>

              {/* Prize Pool Pill Badge */}
              <div style={{
                display: 'inline-block',
                backgroundColor: '#ffc933',
                borderRadius: '10px',
                padding: '10px 32px',
                marginBottom: '35px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#0e1220',
                  fontFamily: '"Joost", "Jost", sans-serif',
                  fontSize: '36px',
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: '40px'
                }}>
                  ₹50,000 Prize Pool
                </h4>
              </div>

              {/* 3 Prize Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '24px',
                maxWidth: '900px',
                margin: '0 auto 40px auto'
              }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '15px',
                  padding: '16px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
                }}>
                  <p style={{
                    color: '#0e1220',
                    fontFamily: '"Joost", "Jost", sans-serif',
                    fontSize: '22px',
                    fontWeight: 700,
                    margin: 0
                  }}>
                    1st Prize: ₹25,000
                  </p>
                </div>
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '15px',
                  padding: '16px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
                }}>
                  <p style={{
                    color: '#0e1220',
                    fontFamily: '"Joost", "Jost", sans-serif',
                    fontSize: '22px',
                    fontWeight: 700,
                    margin: 0
                  }}>
                    2nd Prize: ₹15,000
                  </p>
                </div>
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '15px',
                  padding: '16px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
                }}>
                  <p style={{
                    color: '#0e1220',
                    fontFamily: '"Joost", "Jost", sans-serif',
                    fontSize: '22px',
                    fontWeight: 700,
                    margin: 0
                  }}>
                    3rd Prize: ₹10,000
                  </p>
                </div>
              </div>

              {/* 4 Perks Columns with #FFC933 separators */}
              <div className="skillathon-prizes-perks" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
                alignItems: 'center',
                paddingTop: '10px'
              }}>
                {[
                  "Certificates and mentorship opportunities for winners.",
                  "Finalists get delegate passes to Bengaluru Skill Summit.",
                  "Winning solutions showcased in the Bengaluru Skill Summit Knowledge Compendium.",
                  "Felicitation during the Closing Ceremony before global delegates."
                ].map((perk, idx) => (
                  <div
                    key={idx}
                    className={idx < 3 ? "skillathon-perk-item has-border" : "skillathon-perk-item"}
                    style={{
                      padding: '0 16px',
                      textAlign: 'center'
                    }}
                  >
                    <p style={{
                      color: '#ffffff',
                      fontSize: '18px',
                      lineHeight: '28px',
                      margin: 0,
                      fontWeight: 500
                    }}>
                      {perk}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* =========================================================================
              9. Key Dates Section
              ========================================================================= */}
          <section id="key-dates" style={{ paddingTop: '50px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{
                color: '#0d53c7',
                fontFamily: '"Joost", "Jost", sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                letterSpacing: '1px',
                marginBottom: '35px'
              }}>
                Key Dates
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
          </section>

          {/* =========================================================================
              10. Registration Details (Matching media_1790233655795.png)
              ========================================================================= */}
          <section id="registration-details" style={{ paddingTop: '30px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <h2 style={{
                color: '#0d53c7',
                fontFamily: '"Joost", "Jost", sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '1px',
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
                    fontFamily: '"Comfortaa", sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '18px'
                  }}>
                    Rules &amp; Guidelines
                  </h4>

                  {/* Clean Single Dot Bullets */}
                  <div className="skillathon-bullet-list" style={{ marginBottom: '28px' }}>
                    {[
                      "Choose one challenge and develop a solution addressing the identified problem.",
                      "Build and demonstrate a working prototype, not just an idea.",
                      "Validate your solution with relevant stakeholders and potential users.",
                      "Test and measure your solution through real-world pilots wherever feasible.",
                      "Present evidence and outcomes following the journey: Problem → Solution → Prototype → Pilot → Evidence → Impact → Scale.",
                      "Final evaluation will consider problem understanding, innovation, prototype, validation, feasibility, impact and scalability."
                    ].map((text, idx) => (
                      <div key={idx} className="skillathon-bullet-item">
                        <span className="skillathon-bullet-dot" />
                        <div style={{ fontSize: '14.5px', lineHeight: '1.6', color: '#0e1220' }}>
                          {text}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/skillathon-registration"
                    style={{
                      backgroundColor: '#ff6257',
                      color: '#ffffff',
                      padding: '15px 20px',
                      minWidth: '180px',
                      borderRadius: '12px',
                      display: 'inline-block',
                      fontWeight: 700,
                      fontSize: '14px',
                      fontFamily: '"Comfortaa", sans-serif',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      letterSpacing: '0.5px',
                      boxShadow: '0 4px 14px rgba(255, 98, 87, 0.35)',
                      transition: 'all 0.25s ease',
                      textAlign: 'center'
                    }}
                  >
                    REGISTER NOW
                  </Link>
                </div>

                {/* Right: Official Registration Details Image */}
                <div style={{ textAlign: 'center' }}>
                  <img
                    src="/bengaluruskillsummit/wp-content/uploads/2026/09/registration-details-1.png"
                    alt="registration details 1"
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
              11. FAQs (Matching media_1790157421641.png)
              ========================================================================= */}
          <section id="faqs" style={{ paddingTop: '20px', paddingBottom: '80px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
              <h2 style={{
                color: '#0d53c7',
                fontFamily: '"Joost", "Jost", sans-serif',
                fontSize: '44px',
                fontWeight: 700,
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '1px',
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
                          padding: '12px 20px',
                          background: 'none',
                          border: 'none',
                          outline: 'none',
                          textAlign: 'left',
                          cursor: 'pointer',
                          fontFamily: '"Comfortaa", sans-serif',
                          fontSize: '20px',
                          fontWeight: 700,
                          lineHeight: '38px',
                          color: '#000000'
                        }}
                      >
                        <span style={{ fontFamily: '"Comfortaa", sans-serif', fontSize: '20px', fontWeight: 700, lineHeight: '38px', color: '#000000' }}>
                          {faq.question}
                        </span>
                        <span style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          border: '1.5px solid #000000',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '15px',
                          fontWeight: 'bold',
                          flexShrink: 0,
                          marginLeft: '14px',
                          color: '#000000'
                        }}>
                          {isOpen ? '—' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div style={{
                          padding: '0 20px 20px 20px',
                          fontFamily: '"Comfortaa", sans-serif',
                          fontSize: '16px',
                          fontWeight: 500,
                          lineHeight: '23px',
                          color: '#000000'
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
