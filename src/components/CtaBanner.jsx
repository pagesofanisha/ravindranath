import React from 'react';
import { CTA_BANNER } from '../data/content';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function CtaBanner({ onOpenConsultation }) {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#0A1428] via-[#0F1F3D] to-[#14284d] text-[#FAF9F5] overflow-hidden border-t border-b border-[#C9A24B]/30">
      {/* Background accents */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#C9A24B]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182E56] border border-[#C9A24B]/40 text-xs font-semibold text-[#C9A24B] mb-6">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Immediate Advisory & Dispute Assistance</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF9F5] max-w-3xl mx-auto leading-tight mb-4">
          {CTA_BANNER.headline}
        </h2>

        <p className="text-slate-300 font-sans text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
          {CTA_BANNER.subtext}
        </p>

        <a
          href="#contact"
          onClick={(e) => {
            if (onOpenConsultation) {
              e.preventDefault();
              onOpenConsultation();
            }
          }}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-[#C9A24B] to-[#B38D36] text-[#0F1F3D] hover:from-[#E0C070] hover:to-[#C9A24B] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>{CTA_BANNER.buttonText}</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
