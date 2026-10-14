import React from 'react';
import { X, Check, ArrowUpRight } from 'lucide-react';

export default function ServiceModal({ service, onClose, onSelectForContact }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1322]/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white border border-[#E5E4DF] p-6 sm:p-8 shadow-2xl text-[#1A1A1A]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 border border-[#E5E4DF] hover:bg-[#F8F8F6] text-neutral-500 hover:text-[#0D1322] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A3702C] font-semibold">
            <span>[ PRACTICE MANDATE SPECIFICATION ]</span>
          </div>

          <h3 className="text-2xl font-serif font-normal text-[#0D1322]">
            {service.title}
          </h3>

          <div className="w-12 h-0.5 bg-[#A3702C]" />

          <p className="text-neutral-700 font-sans text-sm leading-relaxed font-light">
            {service.fullDesc}
          </p>

          <div className="bg-[#F8F8F6] p-4 border border-[#E5E4DF] space-y-2">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D1322]">
              Fiduciary Deliverables:
            </h4>
            <div className="space-y-1.5 text-xs font-mono text-neutral-700">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#A3702C]" />
                <span>Rigorous loss computation and accredited survey audit</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#A3702C]" />
                <span>Executive dispute negotiation between insurers, TPAs &amp; hospitals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#A3702C]" />
                <span>Direct claimant advocacy cutting across corporate tiers</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onSelectForContact(service.title);
                onClose();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#0D1322] hover:bg-[#162038] text-white text-xs font-mono uppercase font-semibold tracking-wider transition-colors"
            >
              <span>Inquire On This Mandate</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A3702C]" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3.5 border border-[#E5E4DF] hover:bg-[#F8F8F6] text-xs font-mono uppercase text-neutral-600 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
