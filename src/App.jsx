import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CareerJourney from './components/CareerJourney';
import Achievements from './components/Achievements';
import WhyChooseMe from './components/WhyChooseMe';
import Testimonials from './components/Testimonials';
import MediaAndWriting from './components/MediaAndWriting';
import Memberships from './components/Memberships';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';

export default function App() {
  const [activeModalService, setActiveModalService] = useState(null);
  const [selectedContactService, setSelectedContactService] = useState('');

  const handleOpenConsultation = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForContact = (serviceTitle) => {
    setSelectedContactService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-800 font-sans selection:bg-[#C9A24B]/30 selection:text-[#0F1F3D]">
      {/* 1. Sticky Navbar */}
      <Navbar onOpenContact={handleOpenConsultation} />

      {/* 2. Hero Section */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* 3. Services Section */}
      <Services onSelectService={(service) => setActiveModalService(service)} />

      {/* 4. About Section */}
      <About />

      {/* 5. Career Journey (Vertical Timeline) */}
      <CareerJourney />

      {/* 6. Achievements Section (Navy Background) */}
      <Achievements />

      {/* 7. Why Choose Me (Split Layout with Placeholders) */}
      <WhyChooseMe />

      {/* 8. Testimonials Section */}
      <Testimonials />

      {/* 9. Media & Writing Section */}
      <MediaAndWriting />

      {/* 10. Memberships Section (Logo-Style Pill Tags) */}
      <Memberships />

      {/* 11. CTA Banner (Navy Band) */}
      <CtaBanner onOpenConsultation={handleOpenConsultation} />

      {/* 12. Contact Section (Two Columns) */}
      <Contact preselectedService={selectedContactService} />

      {/* 13. Footer (Navy) */}
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
