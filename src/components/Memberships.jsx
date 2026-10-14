import React from 'react';
import { MEMBERSHIPS_SECTION } from '../data/content';
import { Shield } from 'lucide-react';

export default function Memberships() {
  return (
    <section id="affiliations" className="py-16 bg-[#F8F8F6] border-b border-[#E5E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E5E4DF] gap-4 mb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3702C] font-semibold block mb-1">
              [ ACCREDITATIONS &amp; AFFILIATIONS ]
            </span>
            <h3 className="text-2xl font-serif font-normal text-[#0D1322]">
              Honorary &amp; Professional Memberships
            </h3>
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            CIVIC, LEGAL &amp; LOSS PREVENTION COUNCILS
          </span>
        </div>

        {/* Clean Logo-Style Box Pills */}
        <div className="flex flex-wrap gap-2.5">
          {MEMBERSHIPS_SECTION.items.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E4DF] text-xs font-mono uppercase text-neutral-800 shadow-2xs hover:border-[#A3702C] transition-colors"
            >
              <Shield className="w-3 h-3 text-[#A3702C]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
