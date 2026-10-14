import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Achievements from './components/Achievements';
import CareerJourney from './components/CareerJourney';
import MediaAndWriting from './components/MediaAndWriting';
import Testimonials from './components/Testimonials';
import Memberships from './components/Memberships';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#1E2433] font-sans selection:bg-[#C9A24B]/30 selection:text-[#0F1F3D]">
      {/* 1. NAVBAR (Sticky, deep navy #0F1F3D, soft shadow, collapses < 800px) */}
      <Navbar />

      {/* 2. HERO (Cream gradient, two columns, gold italic headline, navy & ghost pills, placeholder, floating badge) */}
      <Hero />

      {/* 3. SERVICES (Four cards in a row; second card is navy with white text) */}
      <Services onSelectService={handleSelectService} />

      {/* 4. ABOUT (Split layout on white: image left, text right) */}
      <About />

      {/* 5. ACHIEVEMENTS (Full-width navy band, four stat cards, Chief Guest list, Met With row) */}
      <Achievements />

      {/* 6. CAREER JOURNEY (Vertical timeline, gold dots on thin gold line, on cream) */}
      <CareerJourney />

      {/* 7. MEDIA & WRITING (White section, three cards, quote block with gold left border) */}
      <MediaAndWriting />

      {/* 8. TESTIMONIALS (Cream, two cards, quotes exactly as written) */}
      <Testimonials />

      {/* 9. MEMBERSHIPS (Pill tags on white) */}
      <Memberships />

      {/* 10. CONTACT (Cream section, 4 white cards with gold top border, two-column form block) */}
      <Contact preselectedService={selectedService} />

      {/* 11. FOOTER (Deep navy #0A1529) */}
      <Footer />
    </div>
  );
}
