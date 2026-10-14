import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Services from './components/Services';
import About from './components/About';
import CareerJourney from './components/CareerJourney';
import MediaAndWriting from './components/MediaAndWriting';
import Testimonials from './components/Testimonials';
import Memberships from './components/Memberships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';

export default function App() {
  const [activeModalService, setActiveModalService] = useState(null);
  const [selectedContactService, setSelectedContactService] = useState('');

  const handleOpenConsultation = () => {
    const contactElem = document.getElementById('inquiry');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForContact = (serviceTitle) => {
    setSelectedContactService(serviceTitle);
    const contactElem = document.getElementById('inquiry');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#1A1A1A] font-sans selection:bg-[#A3702C]/20 selection:text-[#0D1322]">
      {/* 1. Elena Vance Style Navbar with Micro-Bar */}
      <Navbar onOpenContact={handleOpenConsultation} />

      {/* 2. Hero Section (Headline with "threshold" italic accent + Executive Portrait Card) */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* 3. Quantified Fiduciary Metrics (Dark Obsidian Band) */}
      <Achievements />

      {/* 4. Three Practice & Advisory Vectors (01, 02, 03 White Cards) */}
      <Services onSelectService={(service) => setActiveModalService(service)} />

      {/* 5. Massive Editorial Quote Callout & Executive Dossier Narrative */}
      <About />

      {/* 6. Selected Mandates & Career Record (Horizontal Table Rows) */}
      <CareerJourney />

      {/* 7. Published Treatises, Works & Cultural Monographs (3 Cards Grid) */}
      <MediaAndWriting />

      {/* 8. Executive Endorsements & High-Level Dignitary Interface */}
      <Testimonials />

      {/* 9. Honorary & Professional Memberships */}
      <Memberships />

      {/* 10. Initiate Direct Mandate Inquiry (Split Layout Form) */}
      <Contact preselectedService={selectedContactService} />

      {/* 11. Minimalist Editorial Footer */}
      <Footer />

      {/* Interactive Service Detail Modal */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onSelectForContact={handleSelectServiceForContact}
        />
      )}
    </div>
  );
}
