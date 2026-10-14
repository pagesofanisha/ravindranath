import React from 'react';
import { SERVICES_SECTION } from '../data/content';
import { Car, HeartPulse, ShieldAlert, Building2, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  Car: Car,
  HeartPulse: HeartPulse,
  ShieldAlert: ShieldAlert,
  Building2: Building2,
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Gold Eyebrow & Thin Gold Accent Line */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A24B]">
            {SERVICES_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight">
            {SERVICES_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
          <p className="text-[#6B7280] font-sans text-sm sm:text-base leading-relaxed">
            {SERVICES_SECTION.subtitle}
          </p>
        </div>

        {/* Four Cards in One Row (Second Card Highlighted in Navy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICES_SECTION.cards.map((card) => {
            const IconComp = ICON_MAP[card.iconName] || ShieldAlert;
            const isNavy = card.isNavy;

            return (
              <div
                key={card.id}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 shadow-md hover:shadow-xl ${
                  isNavy
                    ? 'bg-[#0F1F3D] text-white border border-[#C9A24B]/40 ring-1 ring-[#C9A24B]/30'
                    : 'bg-white text-[#1E2433] border border-slate-200/90'
                }`}
              >
                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-13 h-13 rounded-xl flex items-center justify-center mb-6 shadow-sm ${
                      isNavy
                        ? 'bg-[#182E56] text-[#C9A24B] border border-[#C9A24B]/40'
                        : 'bg-[#FAF7F0] text-[#0F1F3D] border border-[#C9A24B]/20'
                    }`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-serif font-bold mb-3 ${
                      isNavy ? 'text-white' : 'text-[#0F1F3D]'
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* 2-Line Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 font-sans ${
                      isNavy ? 'text-slate-200' : 'text-[#6B7280]'
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>

                {/* Explore Button */}
                <div className="pt-4 border-t border-slate-200/20">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      if (onSelectService) {
                        e.preventDefault();
                        onSelectService(card.title);
                      }
                    }}
                    className={`w-full inline-flex items-center justify-between px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      isNavy
                        ? 'bg-[#C9A24B] text-[#0F1F3D] hover:bg-[#E0C070]'
                        : 'bg-[#FAF7F0] text-[#0F1F3D] hover:bg-[#0F1F3D] hover:text-white border border-slate-200'
                    }`}
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
