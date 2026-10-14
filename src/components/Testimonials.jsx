import React from 'react';
import { TESTIMONIALS_SECTION } from '../data/content';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] text-[#1E2433]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A24B]">
            {TESTIMONIALS_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight">
            {TESTIMONIALS_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
        </div>

        {/* Two White Cards on Cream */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_SECTION.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C9A24B] mb-5 fill-current opacity-80" />
                <blockquote className="font-serif italic text-xl sm:text-2xl text-[#0F1F3D] leading-snug mb-6">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F1F3D] text-[#C9A24B] font-serif font-bold flex items-center justify-center text-xs">
                  {item.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0F1F3D]">
                    {item.author}
                  </h4>
                  <p className="text-xs font-semibold text-[#C9A24B]">
                    {item.title}
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
