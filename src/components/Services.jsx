import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const vectors = [
    {
      number: "01",
      tag: "[ CLAIMS RESOLUTION ]",
      title: "Motor & Vehicle Insurance Advocacy",
      description: "Surgical claim settlement and legal liaison for motor vehicle accidental third-party claims, own-damage, theft, fire, and calamity compensation. Ensuring direct coordination between vehicle owners, accredited surveyors, and insurance underwriters.",
      tags: ["THIRD-PARTY CLAIMS", "DAMAGE AUDIT", "SURVEY LIAISON", "ACCIDENT COMPENSATION"],
      fullDesc: "Specialized advocacy and settlement handling for motor vehicle accidental third-party claims and own-damage claims arising from accidental damage, theft, fire, and natural calamities. Ensuring transparent liaison between vehicle owners, surveyors, and insurance companies.",
    },
    {
      number: "02",
      tag: "[ HEALTH & LIFE STEWARDSHIP ]",
      title: "Health, Life & Employee Benefits",
      description: "End-to-end guidance navigating corporate health coverage, resolving hospital dispute settlements, and safeguarding legitimate employee entitlements. Active liaison bridging corporate HR, TPAs, and hospitals for 35,000+ staff.",
      tags: ["HOSPITAL TPA LIAISON", "DISPUTE SETTLEMENT", "EMPLOYEE BENEFITS", "HEALTH CLAIMS"],
      fullDesc: "End-to-end guidance through complex medical claims and settlements. Resolving disputes between insurers, TPAs, and hospitals to safeguard legitimate medical and life coverage benefits for individuals and corporate employees.",
    },
    {
      number: "03",
      tag: "[ RISK & SECURITY MANDATE ]",
      title: "Loss Prevention & Industrial Security",
      description: "Premises safety coordination, asset risk mitigation, and executive leadership as CEO & MD of SLR-Industrial Security & Facility Services managing protective facility operations and specialized manpower retainers.",
      tags: ["LOSS MITIGATION", "INDUSTRIAL SAFETY", "PREMISES PROTECTION", "MANPOWER OUTSOURCING"],
      fullDesc: "Comprehensive security operations, industrial asset safety, premises protection, and organized manpower outsourcing. Available on yearly corporate retainers for institutions, manufacturing sites, logistics hubs, and hospitals.",
    },
  ];

  return (
    <section id="vectors" className="py-20 lg:py-24 bg-[#F8F8F6] border-b border-[#E5E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#E5E4DF] gap-4 mb-12">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3702C] font-semibold block mb-2">
              [ DISCIPLINARY ARCHITECTURE ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0D1322] tracking-tight">
              Three Practice &amp; Advisory Vectors
            </h2>
          </div>

          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            CORE DISCIPLINARY ARCHITECTURE · REF: 01–03
          </span>
        </div>

        {/* 3-Column White Cards Grid (Elena Vance Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {vectors.map((vec) => (
            <div
              key={vec.number}
              className="bg-white border border-[#E5E4DF] p-8 flex flex-col justify-between shadow-xs hover:border-[#A3702C] transition-colors group"
            >
              <div>
                {/* Number & Tag Row */}
                <div className="flex items-center justify-between pb-6 border-b border-[#F0EFEA] mb-6">
                  <span className="text-2xl font-serif font-bold text-neutral-300 group-hover:text-[#A3702C] transition-colors">
                    {vec.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3702C] font-semibold">
                    {vec.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-normal text-[#0D1322] mb-4 leading-snug">
                  {vec.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 font-sans leading-relaxed mb-8 font-light">
                  {vec.description}
                </p>
              </div>

              {/* Bottom Tag Pills & Action */}
              <div className="pt-6 border-t border-[#F0EFEA]">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {vec.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#F8F8F6] border border-[#E5E4DF] text-[10px] font-mono uppercase text-neutral-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService && onSelectService(vec)}
                  className="w-full flex items-center justify-between py-2 text-xs font-mono uppercase tracking-wider text-[#0D1322] hover:text-[#A3702C] transition-colors cursor-pointer border-t border-neutral-100 pt-3"
                >
                  <span>MANDATE SPECIFICATION</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A3702C]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Retainer Banner */}
        <div className="mt-12 p-4 bg-white border border-[#E5E4DF] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A3702C]" />
            <span className="font-semibold text-[#0D1322]">INSTITUTIONAL ENGAGEMENT:</span>
            <span>Available on full-time yearly contracts with hospitals, MNCs, corporates, and logistics companies.</span>
          </div>
          <a href="#inquiry" className="text-[#A3702C] font-semibold hover:underline shrink-0">
            INQUIRE RETAINER →
          </a>
        </div>

      </div>
    </section>
  );
}
