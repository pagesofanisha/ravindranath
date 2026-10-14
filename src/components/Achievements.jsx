import React from 'react';
import { ACHIEVEMENTS_SECTION } from '../data/content';
import { Award, Users, Trophy, Sparkles, Calendar, UserCheck } from 'lucide-react';

const ICON_MAP = [Users, Award, Trophy, Sparkles];

export default function Achievements() {
  return (
    <section className="py-20 lg:py-24 bg-[#0F1F3D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A24B]">
            {ACHIEVEMENTS_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            {ACHIEVEMENTS_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
        </div>

        {/* Four Stat Cards with Gold Numbers in Playfair Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ACHIEVEMENTS_SECTION.stats.map((stat, idx) => {
            const IconComp = ICON_MAP[idx] || Award;
            return (
              <div
                key={idx}
                className="bg-[#182E56]/60 border border-[#C9A24B]/30 hover:border-[#C9A24B] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0F1F3D] border border-[#C9A24B]/30 text-[#C9A24B] flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-[#C9A24B] mb-2 tracking-tight">
                    {stat.number}
                  </div>
                </div>
                <p className="text-sm text-slate-200 font-sans mt-2">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chief Guest Honors Banner */}
        <div className="bg-[#182E56]/40 border border-[#C9A24B]/30 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A24B] mb-4">
            <Calendar className="w-4 h-4" />
            <span>Chief Guest Convocations &amp; Institutional Celebrations</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS_SECTION.chiefGuest.map((cg, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-[#0F1F3D]/80 rounded-xl border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-[#C9A24B]" />
                <span className="text-xs sm:text-sm text-slate-200">{cg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* "Met with" Row of Small Text */}
        <div className="pt-6 border-t border-slate-700/60 text-center">
          <p className="text-xs font-semibold text-[#C9A24B] uppercase tracking-wider mb-3">
            Interacted With Dignitaries &amp; National Leaders:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300">
            {ACHIEVEMENTS_SECTION.metWith.map((person, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-[#182E56]/60 border border-slate-700/60"
              >
                {person}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
