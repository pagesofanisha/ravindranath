import React from 'react';
import { CLIENT_CONFIG } from '../data/content';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] text-neutral-600 border-t border-[#E5E4DF] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-[#F0EFEA]">
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0D1322] text-white font-serif font-bold text-sm flex items-center justify-center border border-[#A3702C]">
                RC
              </div>
              <span className="font-serif text-lg font-bold text-[#0D1322] uppercase tracking-wide">
                Ravindranaath C · Insurance &amp; Security Advisory
              </span>
            </div>
            <p className="text-xs font-mono text-neutral-500 max-w-lg">
              Senior Insurance Coordinator, Loss Prevention Specialist, and CEO &amp; MD of SLR-Industrial Security &amp; Facility Services. Serving corporations, institutions, and claimants across India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-700">
            <a href="#overview" className="hover:text-[#A3702C] transition-colors">Overview</a>
            <a href="#vectors" className="hover:text-[#A3702C] transition-colors">Practice Vectors</a>
            <a href="#metrics" className="hover:text-[#A3702C] transition-colors">Metrics</a>
            <a href="#mandates" className="hover:text-[#A3702C] transition-colors">Mandates</a>
            <a href="#publications" className="hover:text-[#A3702C] transition-colors">Publications</a>
            <a href="#inquiry" className="hover:text-[#A3702C] transition-colors">Inquiry</a>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-400">
          <div>
            <p>© 2026 Ravindranaath C. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <span>CONFIDENTIAL FIDUCIARY ADVISORY</span>
            <span>·</span>
            <span>VERIFIED RECORD AUDIT</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#0D1322] hover:text-[#A3702C] transition-colors ml-2 cursor-pointer font-semibold"
            >
              <span>TOP ↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
