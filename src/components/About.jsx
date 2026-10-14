import React from 'react';
import { CLIENT_CONFIG } from '../data/content';
import PhotoPlaceholder from './PhotoPlaceholder';
import { Check, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#F8F8F6] border-b border-[#E5E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Massive Editorial Callout Quote (Elena Vance Style) */}
        <div className="bg-[#EFEFEA] border-l-4 border-[#A3702C] p-8 sm:p-12 md:p-14 shadow-xs">
          <blockquote className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl text-[#0D1322] leading-[1.3] mb-6">
            “Life is beautiful, if used properly. If We Don't Change, We Don't Grow. If We Don't Grow, We Are Not Living.”
          </blockquote>
          
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-wider text-neutral-600 uppercase border-t border-[#DFDED7] pt-4">
            <span className="font-bold text-[#0D1322]">RAVINDRANAATH C</span>
            <span>·</span>
            <span>CEO &amp; MD, SLR-INDUSTRIAL SECURITY &amp; FACILITY SERVICES</span>
            <span>·</span>
            <span className="text-[#A3702C]">“ALL THE WAY – WITH YOU – YOUR MAN IN INDIA”</span>
          </div>
        </div>

        {/* Narrative Section: Split Biography & Operating Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Photo of Executive Working / Meeting */}
          <div className="lg:col-span-5">
            <PhotoPlaceholder
              label="[PHOTO: Ravindranaath C – working / meeting photo]"
              caption="Executive in consultation & corporate review"
              aspectRatio="aspect-[4/5]"
              showMetadataTray={true}
              badgeText="EXECUTIVE RECORD"
              principalName="RAVINDRANAATH C"
              principalTitle="Service Delivery Leader & Risk Management Advisor"
              metadata={[
                { label: "EXPERIENCE", value: `${CLIENT_CONFIG.yearsOfExperience}+ YEARS` },
                { label: "ORIGIN", value: "HYDERABAD, AP" },
                { label: "FIDUCIARY", value: "CLAIM ADVOCATE" },
              ]}
              className="w-full"
            />
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A3702C]">
              <span>[ 02 / EXECUTIVE DOSSIER &amp; FIDUCIARY ETHIC ]</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#0D1322] tracking-tight leading-tight">
              Guiding You Through Claims, Security &amp; Confidence.
            </h2>

            <div className="w-16 h-0.5 bg-[#A3702C]" />

            <div className="space-y-4 text-neutral-700 font-sans text-base leading-relaxed font-light">
              <p>
                A native of Hyderabad, qualified in General Insurance, who began his distinguished career with <span className="font-medium text-neutral-900">National Insurance Company Ltd (1978–2002)</span> and built a four-decade career in insurance, industrial security, and customer care, including high-stakes leadership roles at <span className="font-medium text-neutral-900">Larsen &amp; Toubro Ltd (2013–2020)</span> and his current role as <span className="font-medium text-neutral-900">CEO &amp; MD of SLR-Industrial Security &amp; Facility Services</span>.
              </p>
              <p>
                Over several decades of executive service, Ravindranaath has spearheaded critical risk management initiatives, navigated high-stakes claim negotiations, and bridged communication across administrative and regulatory tiers.
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-white border border-[#E5E4DF]">
                <div className="w-4 h-4 mt-0.5 bg-[#A3702C]/15 text-[#A3702C] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-semibold text-[#0D1322] uppercase tracking-wide">
                    People's Person Across Hierarchies
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans mt-0.5">
                    "People's person, who is at ease in cutting across hierarchies" — resolving disputes directly between employees, corporate heads, and medical boards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white border border-[#E5E4DF]">
                <div className="w-4 h-4 mt-0.5 bg-[#A3702C]/15 text-[#A3702C] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-semibold text-[#0D1322] uppercase tracking-wide">
                    High-Level Dignitary Interfacing
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans mt-0.5">
                    Documented interactions interfacing with top government officials, ministers, governors, and policymakers on regulatory and institutional safety.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white border border-[#E5E4DF]">
                <div className="w-4 h-4 mt-0.5 bg-[#A3702C]/15 text-[#A3702C] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-semibold text-[#0D1322] uppercase tracking-wide">
                    Dispute Resolution Between Insurers &amp; Hospitals
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans mt-0.5">
                    Personalized advocacy ensuring rightful settlement for employees and claimants facing delayed or denied claims.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
