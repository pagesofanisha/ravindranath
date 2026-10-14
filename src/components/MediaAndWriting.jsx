import React from 'react';
import { MEDIA_AND_WRITING_SECTION } from '../data/content';
import { BookOpen, Radio, Newspaper, FileEdit, Sparkles } from 'lucide-react';

const ICON_MAP = {
  BookOpen: BookOpen,
  Radio: Radio,
  Newspaper: Newspaper,
  FileEdit: FileEdit,
};

export default function MediaAndWriting() {
  return (
    <section id="media" className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#A68335]">
            {MEDIA_AND_WRITING_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight">
            {MEDIA_AND_WRITING_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            {MEDIA_AND_WRITING_SECTION.subtitle}
          </p>
        </div>

        {/* Two-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {MEDIA_AND_WRITING_SECTION.cards.map((card, idx) => {
            const IconComp = ICON_MAP[card.iconName] || BookOpen;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F5] border border-slate-200/80 hover:border-[#C9A24B] rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#C9A24B]/30 text-[#A68335] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-[#0F1F3D] border border-slate-200">
                      {card.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F1F3D] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 font-sans text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#A68335]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Documented Cultural Contribution</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Quote Block */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0F1F3D] via-[#14284d] to-[#0F1F3D] p-8 sm:p-12 text-center text-[#FAF9F5] border border-[#C9A24B]/40 shadow-2xl overflow-hidden">
          {/* Subtle gold line accents */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent" />
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C9A24B]">
              Personal Philosophy
            </span>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic font-bold text-[#FAF9F5] leading-snug">
              "{MEDIA_AND_WRITING_SECTION.quoteBlock.quote}"
            </p>
            <div className="pt-2">
              <p className="font-sans font-semibold text-sm text-[#C9A24B]">
                {MEDIA_AND_WRITING_SECTION.quoteBlock.author}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {MEDIA_AND_WRITING_SECTION.quoteBlock.tagline}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
