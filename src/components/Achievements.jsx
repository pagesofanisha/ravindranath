import React from 'react';
import { ACHIEVEMENTS_SECTION } from '../data/content';
import { Users, Award, Trophy, Sparkles, Calendar, UserCheck } from 'lucide-react';

const ICON_MAP = {
  Users: Users,
  Award: Award,
  Trophy: Trophy,
  Sparkles: Sparkles,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#0F1F3D] text-[#FAF9F5] relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A24B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#182E56]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A24B]">
            {ACHIEVEMENTS_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF9F5] tracking-tight">
            {ACHIEVEMENTS_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            {ACHIEVEMENTS_SECTION.subtitle}
          </p>
        </div>

        {/* Four Stat / Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ACHIEVEMENTS_SECTION.stats.map((stat, idx) => {
            const IconComp = ICON_MAP[stat.iconName] || Award;
            return (
              <div
                key={idx}
                className="bg-[#132546] border border-[#C9A24B]/30 hover:border-[#C9A24B] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#182E56] border border-[#C9A24B]/30 text-[#C9A24B] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-[#C9A24B] mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-[#FAF9F5] mb-1">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 font-sans mt-3 pt-3 border-t border-slate-700/50">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chief Guest Honors Banner */}
        <div className="bg-[#182E56]/70 border border-[#C9A24B]/40 rounded-3xl p-8 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-700/50">
            <div>
              <span className="text-xs font-semibold text-[#C9A24B] uppercase tracking-wider">
                Distinguished Invitations
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF9F5] mt-1">
                Chief Guest Honors
              </h3>
            </div>
            <div className="text-xs text-slate-300">
              Honored at notable institutional convocations and national day events
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {ACHIEVEMENTS_SECTION.chiefGuestHonors.map((honor, idx) => (
              <div
                key={idx}
                className="bg-[#0F1F3D]/80 p-5 rounded-2xl border border-slate-700/60 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A24B]/20 border border-[#C9A24B]/40 text-[#C9A24B] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#FAF9F5]">
                    {honor.institution}
                  </h4>
                  <p className="text-xs text-[#C9A24B] font-medium mt-0.5">
                    {honor.occasion}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    {honor.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row of "Met With" Dignitaries */}
        <div className="pt-6 border-t border-slate-700/40 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A24B] mb-4">
            <UserCheck className="w-4 h-4 text-[#C9A24B]" />
            <span>{ACHIEVEMENTS_SECTION.dignitariesMet.heading}</span>
          </div>
          <p className="text-xs text-slate-400 mb-5 max-w-2xl mx-auto">
            {ACHIEVEMENTS_SECTION.dignitariesMet.caption}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {ACHIEVEMENTS_SECTION.dignitariesMet.names.map((name, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-[#182E56]/60 text-slate-200 border border-slate-700/60 hover:border-[#C9A24B]/60 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
