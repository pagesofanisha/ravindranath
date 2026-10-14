import React from 'react';
import { HERO_SECTION, CLIENT_CONFIG } from '../data/content';
import PhotoPlaceholder from './PhotoPlaceholder';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#0A1428] via-[#0F1F3D] to-[#122342] text-[#FAF9F5] overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#C9A24B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#182E56]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C9A24B_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Executive Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182E56]/70 border border-[#C9A24B]/40 text-xs font-semibold tracking-wider uppercase text-[#C9A24B] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>Senior Insurance & Risk Advisory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#FAF9F5] leading-[1.15]">
              <span>{HERO_SECTION.headlinePrefix}</span>
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24B] via-[#E0C070] to-[#C9A24B]">
                {HERO_SECTION.headlineAccent}
              </span>
            </h1>

            {/* Subtext with configurable years of experience */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {HERO_SECTION.subtext}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenConsultation) {
                    e.preventDefault();
                    onOpenConsultation();
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-[#C9A24B] to-[#B38D36] text-[#0F1F3D] hover:from-[#E0C070] hover:to-[#C9A24B] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{HERO_SECTION.primaryCta}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium text-[#FAF9F5] bg-[#182E56]/50 border border-slate-400/30 hover:border-[#C9A24B] hover:text-[#C9A24B] hover:bg-[#182E56] transition-all duration-300"
              >
                <span>{HERO_SECTION.secondaryCta}</span>
              </a>
            </div>

            {/* Quick credibility strip */}
            <div className="pt-6 border-t border-slate-700/40 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#C9A24B]">
                  {CLIENT_CONFIG.yearsOfExperience}+ Yrs
                </p>
                <p className="text-xs text-slate-400 font-sans">
                  Total Industry Experience
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#C9A24B]">
                  35,000+
                </p>
                <p className="text-xs text-slate-400 font-sans">
                  Employees Coordinated
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#C9A24B]">
                  No. 1
                </p>
                <p className="text-xs text-slate-400 font-sans">
                  Branch Mgr (44 Branches)
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Large Portrait Placeholder & Floating Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Gold decorative border backdrop */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C9A24B]/30 to-transparent blur-md pointer-events-none" />

              {/* Photo Placeholder */}
              <PhotoPlaceholder
                label={HERO_SECTION.portraitPlaceholder.label}
                caption={HERO_SECTION.portraitPlaceholder.caption}
                alt={HERO_SECTION.portraitPlaceholder.alt}
                aspectRatio="aspect-[3/4]"
                shape="rounded-3xl"
                className="w-full relative z-10"
              />

              {/* Small floating badge as specified: "CEO & MD – SLR-Industrial Security & Facility Services" */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 z-20 max-w-[280px] sm:max-w-xs bg-[#0F1F3D]/95 backdrop-blur-md p-4 rounded-2xl border border-[#C9A24B]/60 shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C9A24B] text-[#0F1F3D] flex items-center justify-center shrink-0 shadow">
                  <Award className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#C9A24B] uppercase tracking-wider">
                    {HERO_SECTION.floatingBadge.role}
                  </p>
                  <p className="text-xs font-medium text-[#FAF9F5] leading-snug">
                    {HERO_SECTION.floatingBadge.organization}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
