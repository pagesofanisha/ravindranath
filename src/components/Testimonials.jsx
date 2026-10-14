import React from 'react';
import { TESTIMONIALS_SECTION, ACHIEVEMENTS_SECTION } from '../data/content';
import { Quote, Award, Calendar } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-[#F8F8F6] border-b border-[#E5E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#E5E4DF] gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3702C] font-semibold block mb-2">
              [ FIDUCIARY TESTIMONIALS &amp; RECOGNITION ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0D1322] tracking-tight">
              Executive Endorsements &amp; Honors
            </h2>
          </div>

          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            VERBATIM CORPORATE TESTIMONY · L&amp;T LEADERSHIP
          </span>
        </div>

        {/* Two Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_SECTION.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E4DF] p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-[#A3702C] transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-[#A3702C] stroke-[1] mb-6" />
                <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#0D1322] leading-snug mb-8">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#F0EFEA] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#0D1322]">
                    {item.author}
                  </h4>
                  <p className="text-xs font-mono text-[#A3702C] uppercase tracking-wider">
                    {item.designation} · {item.organization}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest border border-[#E5E4DF] px-2.5 py-1">
                  ENDORSED
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dignitaries Interfaced Strip */}
        <div className="bg-white border border-[#E5E4DF] p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#F0EFEA]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3702C] font-semibold block mb-1">
                EXECUTIVE INTERFACE RECORD
              </span>
              <h3 className="font-serif text-xl font-bold text-[#0D1322]">
                High-Level Engagements &amp; Dignitary Interface
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-500">
              Documented interactions across national leadership, state governors &amp; public figures
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-6">
            {ACHIEVEMENTS_SECTION.dignitariesMet.names.map((name, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 bg-[#F8F8F6] border border-[#E5E4DF] text-xs font-mono text-neutral-800"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Chief Guest Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 mt-6 border-t border-[#F0EFEA]">
            {ACHIEVEMENTS_SECTION.chiefGuestHonors.map((h, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs font-mono text-neutral-700">
                <Calendar className="w-4 h-4 text-[#A3702C] shrink-0" />
                <div>
                  <span className="font-semibold text-[#0D1322]">Chief Guest: </span>
                  <span>{h.institution} ({h.occasion}, {h.date})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
