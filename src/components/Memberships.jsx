import React from 'react';
import { MEMBERSHIPS_SECTION } from '../data/content';
import { Award, Shield } from 'lucide-react';

export default function Memberships() {
  return (
    <section className="py-20 bg-[#FAF9F5] text-slate-800 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#A68335]">
            {MEMBERSHIPS_SECTION.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0F1F3D]">
            {MEMBERSHIPS_SECTION.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans">
            {MEMBERSHIPS_SECTION.subtitle}
          </p>
        </div>

        {/* Logo-Style Pill Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 max-w-5xl mx-auto">
          {MEMBERSHIPS_SECTION.items.map((item, idx) => (
            <div
              key={idx}
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#C9A24B] hover:bg-[#FAF9F5] transition-all duration-200 cursor-default"
            >
              <div className="w-6 h-6 rounded-full bg-[#FAF9F5] border border-[#C9A24B]/40 group-hover:bg-[#C9A24B] group-hover:text-[#0F1F3D] text-[#A68335] flex items-center justify-center transition-colors">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-[#0F1F3D]">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
