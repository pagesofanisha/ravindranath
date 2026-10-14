import React from 'react';
import { CAREER_JOURNEY_SECTION } from '../data/content';
import { Calendar, Building2, Briefcase } from 'lucide-react';

export default function CareerJourney() {
  return (
    <section id="journey" className="py-20 lg:py-24 bg-[#FAF7F0] text-[#1E2433]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A24B]">
            {CAREER_JOURNEY_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight">
            {CAREER_JOURNEY_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
        </div>

        {/* Vertical Timeline: Gold Dots on a Thin Gold Line on Cream */}
        <div className="relative">
          {/* Thin gold vertical line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-[#C9A24B]/50 -translate-x-1/2" />

          <div className="space-y-10">
            {CAREER_JOURNEY_SECTION.timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Gold Dot on Gold Line */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-[#FAF7F0] border-4 border-[#C9A24B] flex items-center justify-center shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0F1F3D]" />
                  </div>

                  {/* Card Column */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                      isEven
                        ? 'md:pr-12 md:text-right order-1'
                        : 'md:order-2 md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                      
                      {/* Period Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0F1F3D] text-white mb-3 ${
                          isEven ? 'md:ml-auto' : ''
                        }`}
                      >
                        <Calendar className="w-3 h-3 text-[#C9A24B]" />
                        <span>{item.period}</span>
                      </div>

                      {/* Organization & Role */}
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0F1F3D]">
                        {item.organization}
                      </h3>
                      <p className="text-xs font-semibold text-[#C9A24B] uppercase tracking-wider mb-2">
                        {item.role}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for other side on desktop */}
                  <div
                    className={`hidden md:block w-1/2 ${
                      isEven ? 'order-2' : 'order-1'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
