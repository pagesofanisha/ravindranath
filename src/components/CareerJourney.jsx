import React from 'react';
import { CAREER_JOURNEY_SECTION } from '../data/content';
import { Briefcase, Calendar, Building, Info } from 'lucide-react';

export default function CareerJourney() {
  return (
    <section id="career" className="py-24 bg-[#FAF9F5] text-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#A68335]">
            {CAREER_JOURNEY_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight">
            {CAREER_JOURNEY_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            {CAREER_JOURNEY_SECTION.subtitle}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical navy line down the timeline */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-[#0F1F3D]/20 -translate-x-1/2" />

          <div className="space-y-12">
            {CAREER_JOURNEY_SECTION.timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Timeline Dot (Gold dot on Navy line) */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-[#FAF9F5] border-4 border-[#0F1F3D] flex items-center justify-center shadow">
                    <div className="w-2 h-2 rounded-full bg-[#C9A24B]" />
                  </div>

                  {/* Left Column (Desktop) */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                      isEven
                        ? 'md:pr-12 md:text-right order-1'
                        : 'md:order-2 md:pl-12 md:text-left'
                    }`}
                  >
                    <div
                      className={`bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 ${
                        index === 0 ? 'ring-2 ring-[#C9A24B]/40' : ''
                      }`}
                    >
                      {/* Period & Role Tag */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-2 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0F1F3D] text-[#FAF9F5]">
                          <Calendar className="w-3 h-3 text-[#C9A24B]" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#FAF9F5] text-[#A68335] border border-[#C9A24B]/30">
                          {item.badge}
                        </span>
                      </div>

                      {/* Role Title */}
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0F1F3D] mb-1">
                        {item.role}
                      </h3>

                      {/* Organization Name */}
                      <div
                        className={`flex items-center gap-1.5 text-xs font-semibold text-[#A68335] uppercase tracking-wide mb-3 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <Building className="w-3.5 h-3.5" />
                        <span>{item.organization}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty placeholder spacer for the opposite side on desktop */}
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

        {/* Verification banner for timeline notes */}
        <div className="mt-16 p-4 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs flex items-center gap-3 max-w-2xl mx-auto shadow-sm">
          <Info className="w-5 h-5 text-[#C9A24B] shrink-0" />
          <p>
            <span className="font-semibold text-slate-800">Verification note: </span>
            The 2004–2012 company name and 1974 All India Radio start date are logged from the original source scan for final client confirmation.
          </p>
        </div>

      </div>
    </section>
  );
}
