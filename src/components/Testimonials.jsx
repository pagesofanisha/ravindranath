import React from 'react';
import { TESTIMONIALS_SECTION } from '../data/content';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FAF9F5] text-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#A68335]">
            {TESTIMONIALS_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight">
            {TESTIMONIALS_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            {TESTIMONIALS_SECTION.subtitle}
          </p>
        </div>

        {/* Two Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {TESTIMONIALS_SECTION.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Gold Quote Accent */}
              <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] border border-[#C9A24B]/30 flex items-center justify-center text-[#C9A24B] mb-6">
                <Quote className="w-6 h-6 fill-current" />
              </div>

              {/* Exact Quote */}
              <blockquote className="font-serif text-xl sm:text-2xl text-[#0F1F3D] italic leading-snug mb-8">
                "{item.quote}"
              </blockquote>

              {/* Author & Designation from PDF */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0F1F3D] text-[#C9A24B] font-serif font-bold flex items-center justify-center text-sm shadow">
                  {item.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0F1F3D]">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#A68335] font-semibold">
                    {item.designation}
                  </p>
                  <p className="text-xs text-slate-500 font-sans">
                    {item.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
