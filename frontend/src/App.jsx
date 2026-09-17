import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Eager load Home for instant First Contentful Paint
import Home from './pages/Home';

// Lazy load all other pages on demand
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Highlights2025 = lazy(() => import('./pages/Highlights2025'));
const Contact = lazy(() => import('./pages/Contact'));
const CurtainRaiser = lazy(() => import('./pages/CurtainRaiser'));
const GetInvolved = lazy(() => import('./pages/GetInvolved'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const ThankYouGuestRegistration = lazy(() => import('./pages/ThankYouGuestRegistration'));
const Speakers = lazy(() => import('./pages/Speakers'));
const Agenda2026 = lazy(() => import('./pages/Agenda2026'));
const Speakers2026 = lazy(() => import('./pages/Speakers2026'));
const Agenda = lazy(() => import('./pages/Agenda'));
const SnapshotAgenda = lazy(() => import('./pages/SnapshotAgenda'));
const Exhibitors = lazy(() => import('./pages/Exhibitors'));
const ExhibitNow = lazy(() => import('./pages/ExhibitNow'));
const EcosystemPartners = lazy(() => import('./pages/EcosystemPartners'));
const MediaPartners = lazy(() => import('./pages/MediaPartners'));
const BeAMediaPartner = lazy(() => import('./pages/BeAMediaPartner'));
const Register = lazy(() => import('./pages/Register'));
const InauguralDayInvite = lazy(() => import('./pages/InauguralDayInvite'));
const KaushalyaKarnatakaAwards = lazy(() => import('./pages/KaushalyaKarnatakaAwards'));
const KaushalyaKarnatakaAwardsOld = lazy(() => import('./pages/KaushalyaKarnatakaAwardsOld'));
const Details = lazy(() => import('./pages/Details'));
const Poster = lazy(() => import('./pages/Poster'));
const BeASpeaker = lazy(() => import('./pages/BeASpeaker'));
const KaushalyaAwardsRegistration = lazy(() => import('./pages/KaushalyaAwardsRegistration'));
const Floorplan = lazy(() => import('./pages/Floorplan'));
const Skillathon2025 = lazy(() => import('./pages/Skillathon2025'));
const SkillathonRegistration = lazy(() => import('./pages/SkillathonRegistration'));
const SponsorNow = lazy(() => import('./pages/SponsorNow'));
const SponsorRegistration = lazy(() => import('./pages/SponsorRegistration'));

export default function App() {
  return (
    <BrowserRouter basename="/bengaluruskillsummit">
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            {/* About Summit */}
            <Route path="about-us" element={<AboutUs />} />
            <Route path="about-us/" element={<AboutUs />} />
            <Route path="about" element={<Navigate to="/about-us" replace />} />
            <Route path="about/" element={<Navigate to="/about-us" replace />} />
            
            {/* Curtain Raiser */}
            <Route path="curtain-raiser" element={<CurtainRaiser />} />
            <Route path="curtain-raiser/" element={<CurtainRaiser />} />
            
            {/* 2025 Highlights */}
            <Route path="2025-highlights" element={<Highlights2025 />} />
            <Route path="2025-highlights/" element={<Highlights2025 />} />
            <Route path="2025-summit-highlights" element={<Highlights2025 />} />
            <Route path="2025-summit-highlights/" element={<Highlights2025 />} />
            
            {/* Contact / General Enquiry */}
            <Route path="contact" element={<Contact />} />
            <Route path="contact/" element={<Contact />} />
            <Route path="general-enquiry" element={<Contact />} />
            <Route path="general-enquiry/" element={<Contact />} />
            
            {/* Get Involved / Get Your Pass */}
            <Route path="get-involved" element={<GetInvolved />} />
            <Route path="get-involved/" element={<GetInvolved />} />

            {/* Thank You */}
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="thank-you/" element={<ThankYou />} />
            <Route path="thank-you-guest-registration" element={<ThankYouGuestRegistration />} />
            <Route path="thank-you-guest-registration/" element={<ThankYouGuestRegistration />} />

            {/* 2026 Agenda & Speakers */}
          <Route path="agenda-2026" element={<Agenda2026 />} />
          <Route path="agenda-2026/" element={<Agenda2026 />} />
          <Route path="speakers-2026" element={<Speakers2026 />} />
          <Route path="speakers-2026/" element={<Speakers2026 />} />

          {/* Speakers */}
            <Route path="speakers-2025" element={<Speakers />} />
            <Route path="speakers-2025/" element={<Speakers />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="speakers/" element={<Speakers />} />

            {/* Agenda */}
            <Route path="agenda" element={<Agenda />} />
            <Route path="agenda/" element={<Agenda />} />
            
            {/* Snapshot Agenda */}
            <Route path="snapshot-agenda" element={<SnapshotAgenda />} />
            <Route path="snapshot-agenda/" element={<SnapshotAgenda />} />
            
            {/* Exhibitors */}
            <Route path="exhibitors" element={<Exhibitors />} />
            <Route path="exhibitors/" element={<Exhibitors />} />
            <Route path="exhibitors-2025" element={<Exhibitors />} />
            <Route path="exhibitors-2025/" element={<Exhibitors />} />
            <Route path="exhibitor" element={<Exhibitors />} />
            <Route path="exhibitor/" element={<Exhibitors />} />
            <Route path="exhibit" element={<ExhibitNow />} />
            <Route path="exhibit/" element={<ExhibitNow />} />
            <Route path="exhibit-now" element={<ExhibitNow />} />
            <Route path="exhibit-now/" element={<ExhibitNow />} />
            
            {/* Ecosystem Partners */}
            <Route path="ecosystem-partners" element={<EcosystemPartners />} />
            <Route path="ecosystem-partners/" element={<EcosystemPartners />} />
            <Route path="partners" element={<EcosystemPartners />} />
            <Route path="partners/" element={<EcosystemPartners />} />
            
            {/* Media Partners */}
            <Route path="media-partners" element={<MediaPartners />} />
            <Route path="media-partners/" element={<MediaPartners />} />
            <Route path="be-a-media-partner" element={<BeAMediaPartner />} />
            <Route path="be-a-media-partner/" element={<BeAMediaPartner />} />
            <Route path="register" element={<Register />} />
            <Route path="register/" element={<Register />} />
            <Route path="inaugural-day-invite" element={<InauguralDayInvite />} />
            <Route path="inaugural-day-invite/" element={<InauguralDayInvite />} />

            {/* Kaushalya Karnataka Awards */}
            <Route path="kaushalya-karnataka-awards-2025" element={<KaushalyaKarnatakaAwards />} />
            <Route path="kaushalya-karnataka-awards-2025/" element={<KaushalyaKarnatakaAwards />} />
            <Route path="kaushalya-karnataka-awards-2025-old" element={<KaushalyaKarnatakaAwardsOld />} />
            <Route path="kaushalya-karnataka-awards-2025-old/" element={<KaushalyaKarnatakaAwardsOld />} />
            <Route path="awards" element={<KaushalyaKarnatakaAwards />} />
            <Route path="awards/" element={<KaushalyaKarnatakaAwards />} />
            <Route path="poster" element={<Poster />} />
            <Route path="poster/" element={<Poster />} />
            <Route path="be-a-speaker" element={<BeASpeaker />} />
            <Route path="be-a-speaker/" element={<BeASpeaker />} />
            <Route path="kaushalya-awards-registration" element={<KaushalyaAwardsRegistration />} />
            <Route path="kaushalya-awards-registration/" element={<KaushalyaAwardsRegistration />} />
            <Route path="details" element={<Details />} />
            <Route path="details/" element={<Details />} />
            <Route path="floorplan" element={<Floorplan />} />
            <Route path="floorplan/" element={<Floorplan />} />
            <Route path="floorplan-screen" element={<Floorplan />} />
            <Route path="floorplan-screen/" element={<Floorplan />} />
            <Route path="agenda-screen" element={<Agenda isScreen={true} />} />
            <Route path="agenda-screen/" element={<Agenda isScreen={true} />} />
            <Route path="partners-screen" element={<EcosystemPartners isScreen={true} />} />
            <Route path="partners-screen/" element={<EcosystemPartners isScreen={true} />} />
            <Route path="skillathon-2025" element={<Skillathon2025 />} />
            <Route path="skillathon-2025/" element={<Skillathon2025 />} />
            <Route path="skillathon-registration" element={<SkillathonRegistration />} />
            <Route path="skillathon-registration/" element={<SkillathonRegistration />} />
            <Route path="sponsor-now" element={<SponsorNow />} />
            <Route path="sponsor-now/" element={<SponsorNow />} />
            <Route path="sponsor-registration" element={<SponsorRegistration />} />
            <Route path="sponsor-registration/" element={<SponsorRegistration />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
