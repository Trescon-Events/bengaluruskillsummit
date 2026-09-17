import React, { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const faqsData = [
  {
    question: "Who can participate in Skillathon 2025?",
    answer: "Undergraduate and postgraduate students currently enrolled in any recognised institution in India can participate. Teams must have 3 to 4 members."
  },
  {
    question: "How do we register?",
    answer: "Registration and submission will be done online through the Bengaluru Skill Summit 2025 website. Teams will need to fill in details and upload their 2-page concept note in PDF format."
  },
  {
    question: "Is there any registration fee?",
    answer: "No. Participation in Skillathon 2025 is completely free of cost."
  },
  {
    question: "What is the last date for submission?",
    answer: "The deadline to submit your concept note is 10th October 2025."
  },
  {
    question: "How many teams will be shortlisted for the finals?",
    answer: "The top 8 to 10 teams will be selected to participate in the in-person finals in Bengaluru on 5th November 2025."
  },
  {
    question: "Will travel or accommodation be provided for finalists?",
    answer: "Finalists need to arrange their own travel and accommodation. For those coming from outside Bengaluru, travel costs may be reimbursed up to the cost of an AC 3-tier train ticket, and a daily allowance of INR 1,000/- will be provided. More details will be shared by the organising team once finalists are announced."
  },
  {
    question: "Will food be provided during the finals?",
    answer: "Yes. Lunch and refreshments will be provided to all finalists on the day of the in-person event."
  },
  {
    question: "What should we bring for the finals?",
    answer: "Finalist teams should bring their own laptops and presentation materials. The organisers will provide projector facilities for presentations."
  },
  {
    question: "How will the submissions be judged?",
    answer: "Submissions will be evaluated on five parameters: Relevance, Innovation, Feasibility & Scalability, Impact, and Clarity."
  },
  {
    question: "What is the prize pool?",
    answer: "The total prize pool is ₹50,000: 1st Prize: ₹25,000 2nd Prize: ₹15,000 3rd Prize: ₹10,000"
  },
  {
    question: "Will participants receive certificates?",
    answer: "Yes. All finalists will receive certificates. Winners will be felicitated during the Bengaluru Skill Summit 2025 closing ceremony."
  },
  {
    question: "Can a student be part of more than one team?",
    answer: "No. Each student can register with only one team."
  },
  {
    question: "Can teams be cross-institutional (students from different colleges)?",
    answer: "Yes. Teams can be formed across institutions as long as all members are UG/PG students."
  },
  {
    question: "How will we be informed if shortlisted?",
    answer: "Shortlisted teams will be notified by email and announcements will also be posted on the Summit website."
  }
];

const juryMembers = [
  {
    name: "Dr. Prasant Misra",
    designation: "Chair Elect,",
    company: "IEEE Bangalore Section",
    image: "/bengaluruskillsummit/wp-content/uploads/2025/10/jury-1-2025.webp"
  },
  {
    name: "Dr. Sneha Thapliyal",
    designation: "Professor,",
    company: "National Law School of India University",
    image: "/bengaluruskillsummit/wp-content/uploads/2025/10/Sneha-Thapliyal.webp"
  },
  {
    name: "Manjula V",
    designation: "IAS (R),",
    company: "Former Additional Chief Secretary to the Government of Karnataka",
    image: "/bengaluruskillsummit/wp-content/uploads/2025/10/Ms-Manjula-V.webp"
  },
  {
    name: "Monica Datta",
    designation: "Head, Tech4PositiveFutures,",
    company: "Capgemini CSR",
    image: "/bengaluruskillsummit/wp-content/uploads/2025/10/Ms-Monica-Datta.webp"
  },
  {
    name: "Sonali Keshwa Murti",
    designation: "Program Director,",
    company: "Melton Foundation",
    image: "/bengaluruskillsummit/wp-content/uploads/2025/10/Ms-Sonali-Keshwa-Murti-new.webp"
  }
];

const challenges = [
  {
    title: "Integrating\nVocational Education",
    desc: "How can vocational education be effectively integrated into mainstream higher education to make learning more practical and career-oriented?",
    img: "/bengaluruskillsummit/wp-content/uploads/2025/09/Integrating-vocational-education-1.webp"
  },
  {
    title: "Technology for Scale",
    desc: "In what ways can technologies such as AI, AR/VR, and digital platforms be used to deliver skill training at scale and with better outcomes?",
    img: "/bengaluruskillsummit/wp-content/uploads/2025/09/technology-scale.webp"
  },
  {
    title: "Inclusive Pathways",
    desc: "What innovative models can create stronger pathways to skilling and employment for women, persons with disabilities, rural youth, and informal workers?",
    img: "/bengaluruskillsummit/wp-content/uploads/2025/09/inclusive-pathway.webp"
  },
  {
    title: "Sustainable Financing",
    desc: "How can CSR, public–private partnerships, or community-driven models be leveraged to finance and sustain skilling initiatives more effectively?",
    img: "/bengaluruskillsummit/wp-content/uploads/2025/09/sustainable-finance.webp"
  },
  {
    title: "Global Opportunities",
    desc: "What steps can Karnataka and India take to prepare youth for global employment and international mobility, including skills, certifications, and language training?",
    img: "/bengaluruskillsummit/wp-content/uploads/2025/09/global-opprtunity.webp"
  }
];

export default function Skillathon2025() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="skillathon-page" style={{ fontFamily: '"Comfortaa", sans-serif', color: '#0e1220', overflowX: 'hidden' }}>
      <style>{`
        /* Global & typography helpers */
        .skillathon-page {
          background-color: #ffffff;
        }
        .Section-Heading {
          text-align: center;
          margin-bottom: 36px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #0d53c7;
          font-size: 48px;
          line-height: 110%;
        }
        .Section-Sec-Heading h4 {
          margin-bottom: 26px;
          text-transform: unset;
          letter-spacing: 1px;
          font-size: 32px;
          font-weight: 600;
        }
        .fancy-dot-list {
          list-style-type: disc;
          padding-left: 20px;
          margin: 0;
        }
        .fancy-dot-list li {
          margin-bottom: 12px;
          font-size: 16px;
          line-height: 26px;
          color: #0e1220;
        }

        /* Hero Banner */
        #Skillathon-Banner {
          background-image: url('/bengaluruskillsummit/wp-content/uploads/2025/09/banner-skillathon-05.webp');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 100px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .Skillathon-Strip {
          background-color: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          max-width: 900px;
          width: 100%;
          padding: 30px 40px;
          border-radius: 8px;
        }
        .Skillathon-Heading h1 {
          color: #106cff;
          font-size: 60px;
          font-weight: 700;
          letter-spacing: 3px;
          margin: 0 0 10px 0;
          line-height: 110%;
        }
        .Skillathon-Sub h4 {
          color: #0e1220;
          font-size: 36px;
          font-weight: 400;
          margin: 0;
          line-height: 110%;
        }

        /* About Section */
        #Skillathon-About {
          padding: 50px 4% 30px;
          text-align: center;
        }
        .about-logos-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
          flex-wrap: wrap;
          margin-bottom: 40px;
          padding: 0 10%;
        }
        .about-logo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about-logo-item p {
          font-size: 14px;
          margin: 0 0 12px 0;
          color: #0e1220;
          font-weight: 600;
        }
        .about-logo-item img {
          object-fit: contain;
          max-height: 75px;
        }
        .Skillathon-About-Description {
          max-width: 1100px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 28px;
          color: #0e1220;
          padding: 0 4%;
        }
        .Skillathon-About-Description a {
          color: #106cff;
          font-weight: 700;
          text-decoration: none;
        }
        .Skillathon-About-Description a:hover {
          text-decoration: underline;
        }

        /* Objectives */
        #Skillathon-Objectives {
          padding: 40px 4%;
        }
        .objectives-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }
        .objectives-col {
          flex: 1 1 450px;
        }
        .objectives-col img {
          width: 100%;
          max-width: 480px;
          height: auto;
          display: block;
          margin: 0 auto;
        }

        /* Competition Structure */
        #competition-structure {
          padding: 40px 4%;
          background-color: rgba(255, 255, 255, 0.3);
        }
        .competition-phase1-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          max-width: 1200px;
          margin: 0 auto 50px;
          flex-wrap: wrap;
        }
        .competition-phase1-grid .comp-img-col {
          flex: 1 1 450px;
          display: flex;
          justify-content: center;
        }
        .competition-phase1-grid .comp-img-col img {
          width: 100%;
          max-width: 472px;
          height: auto;
        }
        .competition-phase1-grid .comp-text-col {
          flex: 1 1 450px;
        }
        .competition-stru-sub {
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0 0 4px 0;
          color: #0e1220;
        }
        .competition-stru-sub-timeline {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 15px 0;
          color: #0e1220;
        }

        /* Submission & Evaluation images responsive */
        .full-width-diagram {
          text-align: center;
          margin-top: 30px;
        }
        .desk-only-img {
          display: block;
          width: 100%;
          max-width: 1150px;
          margin: 0 auto;
        }
        .mob-only-img {
          display: none;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .desk-only-img { display: none !important; }
          .mob-only-img { display: block !important; }
        }

        /* Jury Leaders */
        #jury-section {
          padding: 40px 4% 60px;
          text-align: center;
          background-color: #ffffff;
        }
        .jury-grid {
          display: flex;
          justify-content: center;
          gap: 20px;
          max-width: 1250px;
          margin: 0 auto;
          flex-wrap: wrap;
        }
        .jury-card {
          flex: 1 1 calc(20% - 20px);
          min-width: 210px;
          max-width: 235px;
          background-color: #ffc933;
          border-radius: 6px;
          padding: 10px 10px 25px;
          box-sizing: border-box;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .jury-card img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          margin-bottom: 15px;
          display: block;
        }
        .jury-name {
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 120%;
          color: #000000;
          margin: 0 0 6px 0;
          padding: 0 5px;
        }
        .jury-designation {
          font-size: 13px;
          line-height: 20px;
          color: #000000;
          margin: 0 0 4px 0;
          padding: 0 5px;
          font-weight: 500;
        }
        .jury-company {
          font-size: 13px;
          line-height: 20px;
          color: #000000;
          margin: 0;
          padding: 0 5px;
          font-weight: 500;
        }

        /* Challenge Areas */
        #challenge-areas {
          padding: 40px 4% 50px;
          background-color: #ffffff;
        }
        .challenge-main {
          text-align: center;
          font-size: 48px;
          font-weight: 700;
          color: #0d53c7;
          letter-spacing: 3px;
          margin: 0 0 10px 0;
          text-transform: uppercase;
        }
        .challenge-sub {
          text-align: center;
          font-size: 32px;
          font-weight: 400;
          color: #0e1220;
          margin: 0 0 20px 0;
        }
        .challenge-description {
          text-align: center;
          max-width: 950px;
          margin: 0 auto 40px;
          font-size: 16px;
          line-height: 26px;
          color: #0e1220;
        }
        .challenge-grid {
          display: flex;
          justify-content: center;
          gap: 15px;
          max-width: 1250px;
          margin: 0 auto 30px;
          flex-wrap: wrap;
        }
        .challenge-box {
          flex: 1 1 calc(20% - 15px);
          min-width: 210px;
          background-color: #fdfcfa;
          border: 1px solid #d2d2d2;
          border-radius: 5px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          padding: 25px 18px 90px;
          position: relative;
          text-align: center;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        .challenge-box-heading {
          font-size: 16px;
          font-weight: 700;
          line-height: 22px;
          color: #0e1220;
          margin: 0 0 12px 0;
          min-height: 44px;
        }
        .challenge-box-description {
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          color: #0e1220;
          margin: 0;
        }
        .challenge-box .challenge-img-wrap {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
        }
        .challenge-box .challenge-img-wrap img {
          max-height: 55px;
          max-width: 120px;
          object-fit: contain;
        }
        .guiding-prompts-link {
          text-align: center;
          margin-top: 25px;
          font-size: 16px;
          color: #0e1220;
        }
        .guiding-prompts-link a {
          color: #106cff;
          font-weight: 700;
          text-decoration: none;
        }
        .guiding-prompts-link a:hover {
          text-decoration: underline;
        }

        /* Phase Finals */
        #phase-finals {
          padding: 40px 4% 30px;
        }
        .phase-finals-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }
        .phase-finals-text-col {
          flex: 1 1 450px;
        }
        .phase-finals-img-col {
          flex: 1 1 450px;
          display: flex;
          justify-content: center;
        }
        .phase-finals-img-col img {
          width: 100%;
          max-width: 473px;
          height: auto;
        }
        .phase-finals-sub {
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0 0 4px 0;
          color: #0e1220;
        }
        .phase-finals-sub-timeline {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 15px 0;
          color: #0e1220;
        }

        /* Prizes & Recognition */
        #prizes-recognition {
          background-image: url('/bengaluruskillsummit/wp-content/uploads/2025/09/bg-prize-recognition.webp');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 60px 4%;
          text-align: center;
          color: #ffffff;
        }
        .prizes-pool-badge {
          background-color: #ffc933;
          color: #0e1220;
          font-size: 38px;
          font-weight: 700;
          padding: 14px 40px;
          border-radius: 10px;
          display: inline-block;
          margin: 0 auto 35px;
          line-height: 120%;
        }
        .prizes-cards-row {
          display: flex;
          justify-content: center;
          gap: 25px;
          max-width: 950px;
          margin: 0 auto 40px;
          flex-wrap: wrap;
        }
        .prize-item-card {
          flex: 1 1 250px;
          background-color: #ffffff;
          color: #0e1220;
          border-radius: 15px;
          padding: 18px 20px;
          font-size: 22px;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .prizes-perks-row {
          display: flex;
          justify-content: center;
          max-width: 1100px;
          margin: 0 auto;
          flex-wrap: wrap;
        }
        .prizes-perk-col {
          flex: 1 1 220px;
          padding: 10px 20px;
          box-sizing: border-box;
          border-right: 1px solid #ffc933;
          font-size: 17px;
          line-height: 26px;
          color: #ffffff;
        }
        .prizes-perk-col:last-child {
          border-right: none;
        }
        @media (max-width: 600px) {
          .prizes-perk-col {
            border-right: none;
            border-bottom: 1px solid #ffc933;
            padding-bottom: 16px;
            margin-bottom: 16px;
          }
          .prizes-perk-col:last-child {
            border-bottom: none;
          }
        }

        /* Key Dates */
        #key-dates {
          padding: 50px 4% 40px;
          text-align: center;
          background-color: #ffffff;
        }

        /* Registration Details */
        #registration-details {
          padding: 60px 6%;
          background-color: #ffffff;
        }
        .reg-details-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }
        .reg-left-col {
          flex: 1 1 520px;
        }
        .reg-right-col {
          flex: 1 1 450px;
          display: flex;
          justify-content: center;
        }
        .reg-right-col img {
          width: 100%;
          max-width: 480px;
          height: auto;
          display: block;
        }
        .reg-subhead {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #0e1220;
        }
        .reg-closed-btn {
          display: inline-block;
          background-color: #ff6257;
          color: #ffffff !important;
          font-size: 15px;
          font-weight: 700;
          padding: 12px 28px;
          border-radius: 12px;
          letter-spacing: 1px;
          opacity: 0.6;
          cursor: not-allowed;
          margin-top: 20px;
          margin-bottom: 12px;
          text-decoration: none;
        }
        .reg-closed-note {
          font-size: 15px;
          color: #0e1220;
          line-height: 24px;
        }

        /* FAQ Section */
        #hodl-faq-section {
          padding: 60px 4%;
          background-color: #ffffff;
        }
        .faq-container {
          max-width: 950px;
          margin: 0 auto;
        }
        .faq-item {
          border-bottom: 1px solid #e0e0e0;
          padding: 18px 0;
        }
        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-family: 'Comfortaa', sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 38px;
          color: #000000;
          color: #0e1220;
          cursor: pointer;
          user-select: none;
          transition: color 0.2s;
        }
        .faq-question:hover {
          color: #106cff;
        }
        .faq-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .faq-answer {
          margin-top: 14px;
          padding-left: 0;
          font-size: 16px;
          line-height: 26px;
          color: #444444;
        }

        /* Contact Info Section */
        #contact-info {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          box-sizing: border-box;
          padding: 60px 20px;
          background: #525252 url('/bengaluruskillsummit/wp-content/uploads/2025/09/footer-white-and-gray-bg.svg') center center no-repeat;
          background-size: cover;
        }
        #contact-info .contact-info-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          max-width: 1440px;
          margin: 0 auto;
        }
        #contact-info .contact-info-card {
          flex: 1 1 calc(20% - 15px);
          min-width: 240px;
          background-color: #525252;
          border-radius: 10px;
          padding: 25px 14px;
          box-sizing: border-box;
          text-align: left;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }
        #contact-info .contact-title {
          font-size: 15px;
          line-height: 1.3;
          color: #eaeaea;
          margin-bottom: 10px;
          min-height: 40px;
          font-weight: 500;
        }
        #contact-info .contact-name {
          font-size: 13px;
          line-height: 1;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 5px;
        }
        #contact-info .contact-designation {
          font-size: 10px;
          line-height: 1.2;
          color: rgba(255,255,255,0.8);
          margin-bottom: 12px;
          min-height: 24px;
        }
        #contact-info .contact-email a {
          font-size: 11px;
          line-height: 1.3;
          color: #ffc933;
          text-decoration: none;
          overflow-wrap: normal ;
          word-break: normal ; white-space: nowrap ;
          white-space: nowrap ;
          display: inline-block;
        }
        #contact-info .contact-email a:hover { text-decoration: none !important; color: #ffd766 !important; }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .Section-Heading, .challenge-main {
            font-size: 34px !important;
            margin-bottom: 24px !important;
          }
          .Skillathon-Heading h1 {
            font-size: 42px !important;
          }
          .Skillathon-Sub h4 {
            font-size: 26px !important;
          }
          .about-logos-row {
            gap: 25px;
            padding: 0;
          }
          .jury-card {
            flex: 1 1 45%;
            max-width: 100%;
          }
          .challenge-box {
            flex: 1 1 100%;
            padding-bottom: 30px;
          }
          .challenge-box .challenge-img-wrap {
            position: static;
            transform: none;
            margin-top: 20px;
          }
          .prizes-pool-badge {
            font-size: 28px;
            padding: 12px 25px;
          }
          .prizes-cards-row .prize-item-card {
            font-size: 18px;
          }
          #registration-details {
            padding: 40px 4%;
          }
        }
      `}</style>

      {/* 1. Hero Banner */}
      <section id="Skillathon-Banner">
        <div className="Skillathon-Strip">
          <div className="Skillathon-Heading">
            <h1>Skillathon 2025</h1>
          </div>
          <div className="Skillathon-Sub">
            <h4>Young minds powering tomorrow’s skills</h4>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="Skillathon-About">
        <div className="about-logos-row">
          <div className="about-logo-item">
            <p>Hosted by</p>
            <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/kaushalya-karnataka.webp" alt="Kaushalya Karnataka"  decoding="async" loading="lazy" width={64} height={86} />
          </div>
          <div className="about-logo-item">
            <p>In Collaboration with</p>
            <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/melton.webp" alt="Melton Foundation"  decoding="async" loading="lazy" width={136} height={94} />
          </div>
          <div className="about-logo-item">
            <p>Supported by</p>
            <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/supported-by.webp" alt="Supported by"  decoding="async" loading="lazy" width={221} height={104} />
          </div>
        </div>

        <div className="Skillathon-About-Description">
          <p>
            Skillathon 2025, organised by the{' '}
            <a href="https://kaushalya.karnataka.gov.in/en" target="_blank" rel="noopener noreferrer">
              Department of Skill Development, Entrepreneurship & Livelihood (SDEL), Government of Karnataka
            </a>
            , in collaboration with the{' '}
            <a href="https://www.meltonfoundationindia.org/" target="_blank" rel="noopener noreferrer">
              Melton Foundation India
            </a>{' '}
            is a national-level innovation challenge for college students. It aims to harness the creativity of young minds to reimagine India’s skilling ecosystem and design impactful solutions for the future of work.
          </p>
        </div>
      </section>

      {/* 3. Objectives */}
      <section id="Skillathon-Objectives">
        <h2 className="Section-Heading">Objectives</h2>
        <div className="objectives-grid">
          <div className="objectives-col">
            <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/objective-1.webp" alt="Objectives illustration"  decoding="async" loading="lazy" width={480} height={272} />
          </div>
          <div className="objectives-col">
            <ul className="fancy-dot-list">
              <li>Engage students in shaping the future of skills and employment.</li>
              <li>Identify innovative, feasible solutions to strengthen the skilling ecosystem.</li>
              <li>Provide youth a platform to present ideas before policymakers, industry, and academia.</li>
              <li>Celebrate creativity, problem-solving, and SDG-aligned innovation.</li>
              <li>Inspire a new generation of changemakers in India’s workforce.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Competition Structure */}
      <section id="competition-structure">
        <h2 className="Section-Heading">Competition Structure</h2>
        <div className="competition-phase1-grid">
          <div className="comp-img-col">
            <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/competition-structure-phase-1-virtual.webp" alt="Competition Phase 1 Virtual"  decoding="async" loading="lazy" width={472} height={324} />
          </div>
          <div className="comp-text-col">
            <h4 className="competition-stru-sub">Phase I – Virtual Round</h4>
            <p className="competition-stru-sub-timeline">(September – October 2025)</p>
            <ul className="fancy-dot-list">
              <li>Teams of 3 – 4 UG/PG students can register online.</li>
              <li>Participants will choose one of the announced problem statements and submit their idea.</li>
              <li>Submission Format: Concept Note (maximum 2 pages, PDF)</li>
              <li>Last Date for Submission: 10th October 2025</li>
              <li>Top 8 – 10 teams will be shortlisted for the in-person finals, which is Phase II</li>
            </ul>
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="full-width-diagram">
          <div className="Section-Sec-Heading">
            <h4>Submission Guidelines</h4>
          </div>
          <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/submission-guideline-new-scaled.webp"
            alt="Submission Guidelines"
            className="desk-only-img"
           decoding="async" loading="lazy" width={2560} height={484} />
          <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/Submission-Template-mobile-scaled.webp"
            alt="Submission Guidelines Mobile"
            className="mob-only-img"
           decoding="async" loading="lazy" width={1581} height={2560} />
        </div>

        {/* Evaluation Criteria */}
        <div className="full-width-diagram" style={{ marginTop: '50px' }}>
          <div className="Section-Sec-Heading">
            <h4>Evaluation Criteria</h4>
          </div>
          <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/evaluation-criteria-scaled.webp"
            alt="Evaluation Criteria"
            className="desk-only-img"
            style={{ maxWidth: '980px' }}
           decoding="async" loading="lazy" width={2560} height={544} />
          <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/Evaluation-Criteria-mobile.webp"
            alt="Evaluation Criteria Mobile"
            className="mob-only-img"
           decoding="async" loading="lazy" width={1344} height={2154} />
        </div>
      </section>

      {/* 5. Esteemed Jury Leaders */}
      <section id="jury-section">
        <h2 className="Section-Heading" style={{ maxWidth: '1000px', margin: '0 auto 40px', lineHeight: '120%' }}>
          OUR ESTEEMED JURY LEADERS<br />GUIDING THE FUTURE OF SKILLS
        </h2>
        <div className="jury-grid">
          {juryMembers.map((jury, index) => (
            <div key={index} className="jury-card">
              <img src={jury.image} alt={jury.name}  decoding="async" loading="lazy" />
              <p className="jury-name">{jury.name}</p>
              <p className="jury-designation">{jury.designation}</p>
              <p className="jury-company">{jury.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Challenge Areas */}
      <section id="challenge-areas">
        <h2 className="challenge-main">Choose your Challenge</h2>
        <h4 className="challenge-sub">Create Solutions that Transform Skilling</h4>
        <p className="challenge-description">
          We invite you to tackle real-world challenges that shape the future of education, employment, and innovation. Your ideas should align with the global goals and empower communities across India and beyond.
        </p>

        <div className="challenge-grid">
          {challenges.map((c, i) => (
            <div key={i} className="challenge-box">
              <p className="challenge-box-heading" dangerouslySetInnerHTML={{ __html: c.title.replace('\n', '<br />') }} />
              <p className="challenge-box-description">{c.desc}</p>
              <div className="challenge-img-wrap">
                <img src={c.img} alt={c.title.replace('\n', ' ')}  decoding="async" loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        <div className="guiding-prompts-link">
          <p>
            <a
              href="https://trescon.s3.dualstack.us-east-2.amazonaws.com/bengaluru-skill-summit/SKillathon-2025-choose-your-challenge.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>{' '}
            to access the guiding prompts for each challenge
          </p>
        </div>
      </section>

      {/* 7. Phase II – In-Person Finals */}
      <section id="phase-finals">
        <div className="phase-finals-grid">
          <div className="phase-finals-text-col">
            <h4 className="phase-finals-sub">Phase II – In-Person Finals</h4>
            <p className="phase-finals-sub-timeline">(5th November 2025)</p>
            <ul className="fancy-dot-list">
              <li>Finalists will participate in a full-day Skillathon (6–7 hours) at the Bengaluru Skill Summit.</li>
              <li>Each team will make a 7-minute presentation followed by jury Q&A.</li>
              <li>Jury will include policymakers, industry leaders, academics, and practitioners.</li>
            </ul>
          </div>
          <div className="phase-finals-img-col">
            <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/competition-structure-phase-1-finals.webp" alt="In-Person Finals"  decoding="async" loading="lazy" width={473} height={324} />
          </div>
        </div>

        {/* 5 Stages */}
        <div className="full-width-diagram" style={{ marginTop: '50px' }}>
          <div className="Section-Sec-Heading">
            <h4>The curated format will take teams through five stages of problem-solving</h4>
          </div>
          <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/curated-format.webp"
            alt="Five Stages of Problem Solving"
            className="desk-only-img"
            style={{ maxWidth: '1000px' }}
           decoding="async" loading="lazy" width={1996} height={714} />
          <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/in-person-finals-mobile-scaled.webp"
            alt="Five Stages of Problem Solving Mobile"
            className="mob-only-img"
           decoding="async" loading="lazy" width={1039} height={2560} />
        </div>
      </section>

      {/* 8. Prizes & Recognition */}
      <section id="prizes-recognition">
        <h2 className="Section-Heading" style={{ color: '#ffffff' }}>Prizes & Recognition</h2>
        <div className="prizes-pool-badge">₹50,000 Prize Pool</div>

        <div className="prizes-cards-row">
          <div className="prize-item-card">1st Prize: ₹25,000</div>
          <div className="prize-item-card">2nd Prize: ₹15,000</div>
          <div className="prize-item-card">3rd Prize: ₹10,000</div>
        </div>

        <div className="prizes-perks-row">
          <div className="prizes-perk-col">Certificates and mentorship opportunities for winners.</div>
          <div className="prizes-perk-col">Finalists get delegate passes to Bengaluru Skill Summit.</div>
          <div className="prizes-perk-col">Winning solutions showcased in the Bengaluru Skill Summit Knowledge Compendium.</div>
          <div className="prizes-perk-col">Felicitation during the Closing Ceremony before global delegates.</div>
        </div>
      </section>

      {/* 9. Key Dates */}
      <section id="key-dates">
        <h2 className="Section-Heading">Key Dates</h2>
        <div className="full-width-diagram">
          <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/key-dates-desktop-new-scaled.webp"
            alt="Key Dates Desktop"
            className="desk-only-img"
            style={{ maxWidth: '950px' }}
           decoding="async" loading="lazy" width={2560} height={539} />
          <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/key-dates-mobile-new.webp"
            alt="Key Dates Mobile"
            className="mob-only-img"
           decoding="async" loading="lazy" width={2225} height={1824} />
        </div>
      </section>

      {/* 10. Registration Details */}
      <section id="registration-details">
        <h2 className="Section-Heading" style={{ textAlign: 'left', marginBottom: '25px' }}>
          Registration Details
        </h2>
        <div className="reg-details-grid">
          <div className="reg-left-col">
            <p className="reg-subhead">Rules & Guidelines</p>
            <ul className="fancy-dot-list">
              <li>Teams must consist of <strong>3 – 4 members</strong> (UG/PG students only)</li>
              <li>Each <strong>student can join only one team</strong></li>
              <li>Registration and submission are <strong>free of charge</strong></li>
              <li>Submit a <strong>2-page concept note (PDF)</strong> addressing one problem statement</li>
              <li>Submissions close on <strong>10th October 2025</strong></li>
              <li>8 – 10 finalist teams will be invited to Bengaluru <strong>for the in-person round on 5th November 2025</strong></li>
              <li>
                While AI tools such as ChatGPT can be useful for polishing up language in a final draft for submission, we strongly advise against using them to generate or draft your application wholly. We value your authenticity and purely AI-generated applications will most likely be eliminated as part of the selection process.
              </li>
              <li>
                Due to the volume of incoming applications, we will contact only those candidates, who have qualified for the next round.
              </li>
            </ul>
            <a href="#closed" className="reg-closed-btn" onClick={(e) => e.preventDefault()}>
              REGISTRATIONS ARE CLOSED
            </a>
            <p className="reg-closed-note">
              Skillathon registrations are officially closed! Huge thanks to everyone who signed up – see you at the event!
            </p>
          </div>
          <div className="reg-right-col">
            <img src="/bengaluruskillsummit/wp-content/uploads/2025/09/registration-details-new-img-25.webp" alt="Registration Details Graphic"  decoding="async" loading="lazy" width={1140} height={1140} />
          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section id="hodl-faq-section">
        <h2 className="Section-Heading">FAQ</h2>
        <div className="faq-container">
          {faqsData.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span style={{ flex: 1, textAlign: 'left' }}>{faq.question}</span>
                  <span className="faq-icon">
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
                  </span>
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 12. Contact Info */}
            {/* Contact Cards Section */}
      <section id="contact-info">
        <div className="contact-info-wrap">
          {/* Card 1: Sponsor and Exhibitor Queries */}
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

          {/* Card 2: Speaking and Partner Queries */}
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

          {/* Card 3: Marketing and Media Queries */}
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

          {/* Card 4: Delegate Registration Queries */}
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

          {/* Card 5: Partnership Queries */}
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
