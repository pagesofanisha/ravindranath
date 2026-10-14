import React from 'react';
import { ACHIEVEMENTS_SECTION, CLIENT_CONFIG } from '../data/content';

export default function Achievements() {
  const metrics = [
    {
      value: "35,000+",
      title: "L&T Personnel Coordinated",
      description: "Directly managed health, death, accidental claims, and hospital dispute settlements for 35,000+ employees across Indian and overseas project sites.",
    },
    {
      value: "No. 1",
      title: "Branch Manager Ranking",
      description: "Acknowledged as No. 1 Branch Manager among 44 branches and divisions in the Hyderabad Region; declared Best Manager among offices in the region.",
    },
    {
      value: `${CLIENT_CONFIG.yearsOfExperience}+ Yrs`,
      title: "Fiduciary Industry Scale",
      description: "Documented executive career spanning public sector insurance underwriting, conglomerate corporate advisory, and industrial security operations.",
    },
    {
      value: "100%",
      title: "Claimant & Safety Advocacy",
      description: "Recognized as a practical leader and modern writer at ease in cutting across administrative hierarchies to secure rightful benefits.",
    },
  ];

  return (
    <section id="metrics" className="bg-[#0D1322] text-[#F8F8F6] py-16 lg:py-20 border-t border-b border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip (Elena Vance style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#232D42] gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3702C] font-semibold block mb-2">
              [ EMPIRICAL GOVERNANCE &amp; SCALE ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight">
              Quantified Leadership Metrics
            </h2>
          </div>

          <p className="text-xs font-mono text-neutral-400 max-w-md leading-relaxed">
            Empirical performance milestones across four decades of public sector insurance underwriting, corporate conglomerate risk delivery, and industrial facility safety.
          </p>
        </div>

        {/* 4-Column Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {metrics.map((item, idx) => (
            <div key={idx} className="space-y-3">
              {/* Massive Serif Number with Bronze Accent */}
              <div className="text-4xl sm:text-5xl font-serif font-normal tracking-tight text-white flex items-baseline gap-1">
                <span className="text-[#A3702C] font-light"></span>
                <span>{item.value}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-200">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
