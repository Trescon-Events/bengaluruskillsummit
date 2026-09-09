import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Highlights2025 from './pages/Highlights2025';
import Contact from './pages/Contact';
import CurtainRaiser from './pages/CurtainRaiser';
import GetInvolved from './pages/GetInvolved';
import ThankYou from './pages/ThankYou';
import ThankYouGuestRegistration from './pages/ThankYouGuestRegistration';
import Speakers from './pages/Speakers';
import Agenda from './pages/Agenda';
import SnapshotAgenda from './pages/SnapshotAgenda';
import Exhibitors from './pages/Exhibitors';
import ExhibitNow from './pages/ExhibitNow';
import EcosystemPartners from './pages/EcosystemPartners';
import MediaPartners from './pages/MediaPartners';
import BeAMediaPartner from './pages/BeAMediaPartner';
import Register from './pages/Register';
import InauguralDayInvite from './pages/InauguralDayInvite';
import KaushalyaKarnatakaAwards from './pages/KaushalyaKarnatakaAwards';
import KaushalyaKarnatakaAwardsOld from './pages/KaushalyaKarnatakaAwardsOld';
import Details from './pages/Details';
import Poster from './pages/Poster';
import BeASpeaker from './pages/BeASpeaker';
import KaushalyaAwardsRegistration from './pages/KaushalyaAwardsRegistration';
import Floorplan from './pages/Floorplan';
import Skillathon2025 from './pages/Skillathon2025';
import SkillathonRegistration from './pages/SkillathonRegistration';
import SponsorNow from './pages/SponsorNow';
import SponsorRegistration from './pages/SponsorRegistration';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* About Summit */}
          <Route path="about-us" element={<AboutUs />} />
          <Route path="about-us/" element={<AboutUs />} />
          
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
    </BrowserRouter>
  );
}
