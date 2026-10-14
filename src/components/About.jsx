import React from 'react';
import { ABOUT_SECTION } from '../data/content';
import PhotoPlaceholder from './PhotoPlaceholder';
import { CheckCircle2, Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background framing */}
              <div className="absolute -inset-3 rounded-3xl bg-[#FAF9F5] border border-[#C9A24B]/30 -rotate-1 pointer-events-none" />
              
              <PhotoPlaceholder
                label={ABOUT_SECTION.imagePlaceholder.label}
                caption={ABOUT_SECTION.imagePlaceholder.caption}
                alt={ABOUT_SECTION.imagePlaceholder.alt}
                aspectRatio="aspect-[4/5]"
                shape="rounded-2xl"
                className="w-full relative z-10"
              />

              {/* Quote card below image */}
              <div className="relative z-20 -mt-8 mx-4 sm:mx-6 bg-[#0F1F3D] text-[#FAF9F5] p-5 rounded-2xl border border-[#C9A24B]/40 shadow-xl flex items-start gap-3">
                <Quote className="w-6 h-6 text-[#C9A24B] shrink-0 fill-current opacity-80 mt-1" />
                <p className="text-xs sm:text-sm font-serif italic text-slate-200">
                  "{ABOUT_SECTION.personalPhilosophy.quotes[0]}"
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-block">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#A68335] bg-[#FAF9F5] px-3.5 py-1.5 rounded-full border border-[#C9A24B]/30">
                {ABOUT_SECTION.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight leading-tight">
              {ABOUT_SECTION.heading}
            </h2>

            <div className="w-16 h-0.5 bg-[#C9A24B]" />

            {/* Narrative text from PDF */}
            <div className="space-y-4 text-slate-600 font-sans text-base leading-relaxed">
              {ABOUT_SECTION.narrativeParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Bullet Highlights from PDF */}
            <div className="pt-2 space-y-3.5">
              {ABOUT_SECTION.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FAF9F5] border border-[#C9A24B] flex items-center justify-center shrink-0 mt-0.5 text-[#A68335]">
                    <CheckCircle2 className="w-4 h-4 fill-current text-[#C9A24B]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-700">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Personal Philosophy / Axioms Strip */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-[#0F1F3D] self-center mr-2">
                Guiding Principles:
              </span>
              {ABOUT_SECTION.personalPhilosophy.quotes.slice(1).map((quote, idx) => (
                <span
                  key={idx}
                  className="inline-block text-xs text-slate-600 bg-[#FAF9F5] px-3 py-1.5 rounded-full border border-slate-200"
                >
                  "{quote}"
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
