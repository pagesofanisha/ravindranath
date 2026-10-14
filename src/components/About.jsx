import React from 'react';
import { ABOUT_SECTION } from '../data/content';
import { Shield, CheckCircle2, UserCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Placeholder Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl aspect-[4/5] bg-gradient-to-b from-[#182E56] via-[#0F1F3D] to-[#0A1529] border-2 border-[#C9A24B]/40 p-6 flex flex-col items-center justify-center text-center shadow-xl">
              
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C9A24B]" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C9A24B]" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C9A24B]" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C9A24B]" />

              <div className="w-20 h-20 rounded-full bg-[#182E56] border border-[#C9A24B]/40 flex items-center justify-center text-[#C9A24B] mb-4">
                <UserCheck className="w-10 h-10" />
              </div>

              <div className="px-4 py-2 bg-[#0A1529] rounded-lg border border-[#C9A24B]/40 text-white font-mono text-xs sm:text-sm font-semibold">
                {ABOUT_SECTION.placeholder}
              </div>

              <p className="text-xs text-slate-300 mt-3 font-sans">
                Executive in consultation &amp; corporate review
              </p>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#C9A24B]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#C9A24B]">
                {ABOUT_SECTION.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight leading-tight">
              {ABOUT_SECTION.heading}
            </h2>

            <div className="w-16 h-0.5 bg-[#C9A24B]" />

            {/* Paragraphs */}
            <p className="text-base sm:text-lg text-[#1E2433] font-sans leading-relaxed">
              {ABOUT_SECTION.p1}
            </p>

            <p className="text-base sm:text-lg text-[#1E2433] font-sans leading-relaxed">
              {ABOUT_SECTION.p2}
            </p>

            {/* Highlights */}
            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-medium text-[#1E2433]">
                  People's person who is at ease in cutting across hierarchies
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-medium text-[#1E2433]">
                  Interfacing with top government officials, ministers, and policy makers
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-medium text-[#1E2433]">
                  Helping employees with claims disputes between insurers and hospitals
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
