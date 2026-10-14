import React from 'react';
import { HERO_SECTION } from '../data/content';
import { ArrowRight, Award, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 bg-gradient-to-b from-[#FAF7F0] via-[#FAF7F0] to-[#F5EFE0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Text & Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#C9A24B]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#C9A24B]">
                {HERO_SECTION.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#0F1F3D] leading-[1.12]">
              <span className="block">{HERO_SECTION.headlineLine1}</span>
              <span className="block font-serif italic text-[#C9A24B] font-normal mt-1 sm:mt-2">
                {HERO_SECTION.headlineLine2}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#1E2433]/85 font-sans leading-relaxed max-w-2xl">
              {HERO_SECTION.subtext}
            </p>

            {/* Buttons: Navy Pill Primary & Ghost Pill Secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold bg-[#0F1F3D] text-white hover:bg-[#182E56] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{HERO_SECTION.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#C9A24B]" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold bg-transparent text-[#0F1F3D] border-2 border-[#0F1F3D] hover:bg-[#0F1F3D] hover:text-white transition-all duration-200"
              >
                <span>{HERO_SECTION.secondaryCta}</span>
              </a>
            </div>

            {/* Credibility highlights */}
            <div className="pt-6 border-t border-[#0F1F3D]/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl font-serif font-bold text-[#0F1F3D]">37+ Yrs</p>
                <p className="text-xs text-[#6B7280]">Total Career Record</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#0F1F3D]">35,000+</p>
                <p className="text-xs text-[#6B7280]">Employees Managed</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#0F1F3D]">No. 1</p>
                <p className="text-xs text-[#6B7280]">Branch Manager (44 Br.)</p>
              </div>
            </div>

          </div>

          {/* Right Column: Rounded Placeholder with Floating Badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Rounded Photo Placeholder (16px radius / rounded-2xl) */}
              <div className="relative rounded-2xl aspect-[4/5] bg-gradient-to-b from-[#182E56] via-[#0F1F3D] to-[#0A1529] border-2 border-[#C9A24B]/40 p-6 flex flex-col items-center justify-center text-center shadow-2xl">
                
                {/* Decorative corner markers */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C9A24B]" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C9A24B]" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C9A24B]" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C9A24B]" />

                {/* Silhouette avatar */}
                <div className="w-24 h-24 rounded-full bg-[#182E56] border border-[#C9A24B]/40 flex items-center justify-center text-[#C9A24B] mb-5 shadow-inner">
                  <Shield className="w-12 h-12" />
                </div>

                {/* Clear label */}
                <div className="px-4 py-2 bg-[#0A1529] rounded-lg border border-[#C9A24B]/40 text-white font-mono text-xs sm:text-sm font-semibold tracking-wide">
                  {HERO_SECTION.photoPlaceholder}
                </div>

                <p className="text-xs text-slate-300 mt-3 max-w-xs font-sans">
                  CEO &amp; MD, SLR-Industrial Security &amp; Facility Services
                </p>
              </div>

              {/* Small floating badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 z-20 max-w-[280px] sm:max-w-xs bg-[#0F1F3D] text-white p-4 rounded-2xl border border-[#C9A24B]/60 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C9A24B] text-[#0F1F3D] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#C9A24B] uppercase tracking-wider">
                    Current Leadership
                  </p>
                  <p className="text-xs font-medium text-white leading-snug">
                    {HERO_SECTION.floatingBadge}
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
