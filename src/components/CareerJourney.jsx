import React from 'react';
import { CAREER_JOURNEY_SECTION } from '../data/content';
import { ArrowUpRight, Info } from 'lucide-react';

export default function CareerJourney() {
  const mandates = [
    {
      period: "2023 – PRESENT | EXECUTIVE SECURITY",
      organization: "SLR-Industrial Security & Facility Services",
      role: "CEO & Managing Director",
      description: "Executive stewardship of industrial security operations, detective facility services, premises safety, and specialized manpower outsourcing contracts.",
      statNumber: "Active",
      statLabel: "EXECUTIVE RETAINERS",
    },
    {
      period: "2013 – 2020 | CONGLOMERATE ADVISORY",
      organization: "Larsen & Toubro Ltd (L&T Constructions, HQ Chennai)",
      role: "Senior Insurance Coordinator & Service Delivery Leader",
      description: "Risk Management Advisor / Consultant. Coordinated health, accidental, and life insurance benefits for 35,000+ L&T employees across Indian project sites and foreign installations, resolving complex insurer-hospital disputes.",
      statNumber: "35,000+",
      statLabel: "EMPLOYEES COORDINATED",
    },
    {
      period: "2004 – 2012 | EXECUTIVE MANAGEMENT",
      organization: "Industrial Security & Detective Facility Services",
      role: "Director / CEO",
      description: "Led risk management, industrial detective investigations, and facility operations. [Entity legal name from original scan pending client confirmation].",
      statNumber: "8+ Yrs",
      statLabel: "INDUSTRIAL DETECTIVE SVCS",
    },
    {
      period: "1978 – 2002 | PUBLIC SECTOR (GOVT. OF INDIA)",
      organization: "National Insurance Company Ltd (Hyderabad Region)",
      role: "Branch Manager (March 1978 – May 2002)",
      description: "Acknowledged as No. 1 Branch Manager among 44 branches and divisions in the Hyderabad Region. Declared Best Manager among the offices in the region over a 24-year distinguished public tenure.",
      statNumber: "No. 1 / 44",
      statLabel: "REGIONAL BRANCH RANKING",
    },
    {
      period: "1974 – 1978 | BROADCASTING & MEDIA",
      organization: "All India Radio (AIR), Hyderabad",
      role: "Production Assistant, Programmer, Presenter & Writer",
      description: "Broadcast journalism, news reel presentation, and scriptwriting for regional radio programming. [Recorded as 1074 in scan, standardized as 1974].",
      statNumber: "AIR",
      statLabel: "STATEWIDE NEWS REELS",
    },
  ];

  return (
    <section id="mandates" className="py-20 lg:py-24 bg-[#F8F8F6] border-b border-[#E5E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#E5E4DF] gap-4 mb-12">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3702C] font-semibold block mb-2">
              [ RECORD OF PRINCIPAL MANDATES ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0D1322] tracking-tight">
              Selected Mandates &amp; Career Record
            </h2>
          </div>

          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            CHRONOLOGICAL DOSSIER · 1974 TO PRESENT
          </span>
        </div>

        {/* Horizontal Table / Card Rows (Elena Vance Style) */}
        <div className="space-y-4">
          {mandates.map((m, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E4DF] p-6 sm:p-8 hover:border-[#A3702C] transition-colors shadow-xs group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left Column: Dates & Role (4 cols) */}
                <div className="lg:col-span-4 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A3702C] font-semibold block">
                    {m.period}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0D1322] leading-snug">
                    {m.organization}
                  </h3>
                  <p className="text-xs font-mono text-neutral-600 uppercase tracking-wider">
                    {m.role}
                  </p>
                </div>

                {/* Middle Column: Detailed Scope (5 cols) */}
                <div className="lg:col-span-5 text-sm text-neutral-700 font-sans leading-relaxed font-light">
                  <p>{m.description}</p>
                </div>

                {/* Right Column: Stat Highlight (3 cols) */}
                <div className="lg:col-span-3 lg:text-right border-t lg:border-t-0 lg:border-l border-[#F0EFEA] pt-4 lg:pt-0 lg:pl-6">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0D1322] block tracking-tight group-hover:text-[#A3702C] transition-colors">
                    {m.statNumber}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mt-1">
                    {m.statLabel}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-8 p-3.5 bg-[#FFFFFF] border border-[#E5E4DF] text-xs font-mono text-neutral-500 flex items-center gap-3">
          <Info className="w-4 h-4 text-[#A3702C] shrink-0" />
          <span>
            RECORD AUDIT: 2004–2012 company name &amp; AIR 1974 start date are preserved directly from source documentation for client confirmation.
          </span>
        </div>

      </div>
    </section>
  );
}
