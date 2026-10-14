import React from 'react';
import { MEMBERSHIPS_SECTION } from '../data/content';
import { Shield } from 'lucide-react';

export default function Memberships() {
  return (
    <section className="py-16 bg-white border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A24B]">
            {MEMBERSHIPS_SECTION.eyebrow}
          </p>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1F3D]">
            {MEMBERSHIPS_SECTION.title}
          </h3>
        </div>

        {/* Pill Tags on White */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto">
          {MEMBERSHIPS_SECTION.memberships.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F0] border border-slate-200 text-xs sm:text-sm font-semibold text-[#1E2433] hover:border-[#C9A24B] hover:bg-white shadow-2xs transition-colors"
            >
              <Shield className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
