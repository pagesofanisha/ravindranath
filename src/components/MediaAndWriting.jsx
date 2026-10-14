import React from 'react';
import { MEDIA_SECTION } from '../data/content';
import { BookOpen, Radio, FileText } from 'lucide-react';

const ICON_MAP = {
  BookOpen: BookOpen,
  Radio: Radio,
  FileText: FileText,
};

export default function MediaAndWriting() {
  return (
    <section id="media" className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A24B]">
            {MEDIA_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight">
            {MEDIA_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {MEDIA_SECTION.cards.map((card, idx) => {
            const IconComp = ICON_MAP[card.icon] || BookOpen;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] border border-[#C9A24B]/30 text-[#C9A24B] flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0F1F3D] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] font-sans leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Block with Gold Left Border */}
        <div className="max-w-3xl mx-auto bg-[#FAF7F0] border-l-4 border-[#C9A24B] p-8 sm:p-10 rounded-r-2xl shadow-sm">
          <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#0F1F3D] leading-snug">
            “{MEDIA_SECTION.quote}”
          </blockquote>
          <p className="text-xs font-semibold tracking-wider text-[#C9A24B] uppercase mt-3">
            — Ravindranaath C · Personal Philosophy
          </p>
        </div>

      </div>
    </section>
  );
}
