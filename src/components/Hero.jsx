import React from 'react';
import { CLIENT_CONFIG } from '../data/content';
import PhotoPlaceholder from './PhotoPlaceholder';
import { ArrowUpRight, ArrowDown, Check, Shield } from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  const capabilities = [
    "MOTOR & VEHICLE CLAIMS",
    "HEALTH & EMPLOYEE BENEFITS",
    "LOSS PREVENTION & COMPENSATION",
    "INDUSTRIAL SECURITY & MANPOWER",
  ];

  return (
    <section id="overview" className="relative pt-12 pb-20 md:py-20 lg:py-24 bg-[#F8F8F6] border-b border-[#E5E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Editorial Headline, Narrative, and Mandate CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Micro-Tag */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#A3702C]">
              <span className="font-semibold">[ 01/ EXECUTIVE MANDATE & DOMICILE ]</span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-600">[ RISK / LOSS / GOVERNANCE ]</span>
            </div>

            {/* Massive Editorial Serif Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-normal text-[#0D1322] leading-[1.08] tracking-tight">
              All The Way – With You at the{' '}
              <span className="font-serif italic font-normal text-[#A3702C] decoration-1">
                threshold
              </span>{' '}
              of enterprise scale &amp; risk stewardship.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed max-w-2xl font-light">
              Independent insurance coordinator, loss prevention specialist, and executive leadership for institutional employees, corporate employers, and infrastructure conglomerates navigating claims disputes, third-party liability, and industrial safety operations with over {CLIENT_CONFIG.yearsOfExperience} years of documented service.
            </p>

            {/* Practice Capabilities Pills (Matching Elena Vance screenshot) */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-2.5">
                DISCIPLINARY FOCUS &amp; PRACTICE VECTORS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-800">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 py-1.5 px-2.5 bg-white border border-[#E5E4DF]">
                    <span className="w-3.5 h-3.5 bg-[#A3702C]/15 text-[#A3702C] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span className="tracking-wide text-[11px]">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two Action Buttons (Elena Vance Style) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <a
                href="#inquiry"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-between sm:justify-center gap-3 px-7 py-4 bg-[#0D1322] hover:bg-[#162038] text-white text-xs font-mono uppercase font-semibold tracking-wider transition-all shadow-md group cursor-pointer border border-[#0D1322]"
              >
                <span>INITIATE CLIENT MANDATE / INQUIRY</span>
                <ArrowUpRight className="w-4 h-4 text-[#A3702C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#mandates"
                className="inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-4 bg-white hover:bg-[#F0EFEA] text-neutral-800 text-xs font-mono uppercase font-medium tracking-wider border border-[#D5D3CB] transition-colors"
              >
                <span>02 / VIEW CAREER RECORD &amp; DOSSIER</span>
                <ArrowDown className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>

            {/* Footnote Micro Strip */}
            <div className="pt-3 text-[11px] font-mono text-neutral-500 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3702C]" />
                Over {CLIENT_CONFIG.yearsOfExperience} Years Documented Experience
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3702C]" />
                Available for Corporate Yearly Retainers
              </span>
            </div>

          </div>

          {/* Right Column: Elena Vance Style Executive Portrait Card */}
          <div className="lg:col-span-5 w-full">
            <PhotoPlaceholder
              label="[PHOTO: Ravindranaath C – professional portrait]"
              caption="CEO & MD, SLR-Industrial Security & Facility Services | Former Service Delivery Leader, L&T"
              aspectRatio="aspect-[4/5]"
              badgeText="ACTIVE ADVISORY"
              principalName="RAVINDRANAATH C"
              principalTitle="CEO & MD, SLR-Industrial Security & Facility Services"
              metadata={[
                { label: "JURISDICTION", value: "HYDERABAD & CHENNAI" },
                { label: "MANAGED SCALE", value: "35,000+ EMPLOYEES" },
                { label: "STATUS", value: "ACTIVE" },
              ]}
              className="w-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
