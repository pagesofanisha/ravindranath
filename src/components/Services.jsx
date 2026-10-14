import React from 'react';
import { SERVICES_SECTION } from '../data/content';
import { Car, HeartPulse, ShieldAlert, Building2, ArrowRight } from 'lucide-react';

// Icon map helper
const ICON_MAP = {
  CarFront: Car,
  HeartPulse: HeartPulse,
  ShieldAlert: ShieldAlert,
  Building2: Building2,
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-24 bg-[#FAF9F5] text-slate-800 relative">
      {/* Subtle background embellishment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#A68335]">
            {SERVICES_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight">
            {SERVICES_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            {SERVICES_SECTION.subtitle}
          </p>
        </div>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
          {SERVICES_SECTION.services.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || ShieldAlert;
            const isHighlighted = service.highlighted;

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 ${
                  isHighlighted
                    ? 'bg-[#0F1F3D] text-[#FAF9F5] shadow-2xl ring-2 ring-[#C9A24B]/50'
                    : 'bg-white text-slate-800 shadow-md hover:shadow-xl border border-slate-200/80'
                }`}
              >
                {/* Highlight Badge for featured card */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#C9A24B] text-[#0F1F3D] text-[10px] font-bold uppercase tracking-wider shadow">
                    Core Specialization
                  </div>
                )}

                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
                      isHighlighted
                        ? 'bg-[#182E56] text-[#C9A24B] border border-[#C9A24B]/30'
                        : 'bg-[#FAF9F5] text-[#0F1F3D] border border-slate-200'
                    }`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-serif font-bold mb-3 ${
                      isHighlighted ? 'text-[#FAF9F5]' : 'text-[#0F1F3D]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* 2-line description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 font-sans line-clamp-3 ${
                      isHighlighted ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {service.shortDesc}
                  </p>
                </div>

                {/* Explore Button */}
                <div className="pt-4 border-t border-slate-200/20">
                  <button
                    type="button"
                    onClick={() => onSelectService && onSelectService(service)}
                    className={`w-full inline-flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                      isHighlighted
                        ? 'bg-[#C9A24B] text-[#0F1F3D] hover:bg-[#E0C070]'
                        : 'bg-slate-100 text-[#0F1F3D] hover:bg-[#0F1F3D] hover:text-[#FAF9F5]'
                    }`}
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Retainer Note from client profile */}
        <div className="mt-12 text-center">
          <p className="inline-block text-xs sm:text-sm text-slate-600 bg-white px-6 py-2.5 rounded-full border border-slate-200/80 shadow-sm">
            <span className="font-semibold text-[#0F1F3D]">Contract Engagements: </span>
            Available for yearly contracts (full time) with hospitals, MNCs, corporates, logistics, and institutions.
          </p>
        </div>

      </div>
    </section>
  );
}
