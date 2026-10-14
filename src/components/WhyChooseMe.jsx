import React from 'react';
import { WHY_CHOOSE_ME_SECTION } from '../data/content';
import PhotoPlaceholder from './PhotoPlaceholder';
import { HeartHandshake, ShieldCheck } from 'lucide-react';

export default function WhyChooseMe() {
  const [firstItem, secondItem] = WHY_CHOOSE_ME_SECTION.items;

  return (
    <section className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#A68335]">
            {WHY_CHOOSE_ME_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight">
            {WHY_CHOOSE_ME_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            {WHY_CHOOSE_ME_SECTION.subtitle}
          </p>
        </div>

        {/* Feature Row 1: Client-Centered Approach (Text Left, Photo Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#C9A24B]/30 text-xs font-semibold text-[#A68335]">
              <HeartHandshake className="w-4 h-4 text-[#C9A24B]" />
              <span>Empathy in Advocacy</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1F3D]">
              {firstItem.title}
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              {firstItem.description}
            </p>
            <div className="p-4 rounded-xl bg-[#FAF9F5] border-l-4 border-[#C9A24B] text-slate-700 text-sm italic font-serif">
              "Dedicated to personal accountability — bridging claimant needs with institutional requirements with dignity and speed."
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <PhotoPlaceholder
              label={firstItem.placeholder.label}
              caption={firstItem.placeholder.caption}
              alt={firstItem.placeholder.alt}
              aspectRatio="aspect-[16/11]"
              shape="rounded-2xl"
              className="w-full"
            />
          </div>
        </div>

        {/* Feature Row 2: Experienced Professional (Photo Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-1">
            <PhotoPlaceholder
              label={secondItem.placeholder.label}
              caption={secondItem.placeholder.caption}
              alt={secondItem.placeholder.alt}
              aspectRatio="aspect-[16/11]"
              shape="rounded-2xl"
              className="w-full"
            />
          </div>
          <div className="lg:col-span-7 space-y-5 order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#C9A24B]/30 text-xs font-semibold text-[#A68335]">
              <ShieldCheck className="w-4 h-4 text-[#C9A24B]" />
              <span>Institutional Competence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1F3D]">
              {secondItem.title}
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              {secondItem.description}
            </p>
            <div className="p-4 rounded-xl bg-[#FAF9F5] border-l-4 border-[#0F1F3D] text-slate-700 text-sm font-sans">
              <span className="font-semibold text-[#0F1F3D]">Proven Track Record: </span>
              Navigated complex claims networks spanning 35,000+ employees across multinational worksites, hospitals, and loss prevention committees.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
