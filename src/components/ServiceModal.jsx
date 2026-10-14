import React from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ServiceModal({ service, onClose, onSelectForContact }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1428]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-800"
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#C9A24B]/30 text-xs font-semibold text-[#A68335]">
            <ShieldCheck className="w-4 h-4 text-[#C9A24B]" />
            <span>Service Scope</span>
          </div>

          <h3 className="text-2xl font-serif font-bold text-[#0F1F3D]">
            {service.title}
          </h3>

          <div className="w-12 h-0.5 bg-[#C9A24B]" />

          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F1F3D]">
              Key Service Capabilities:
            </h4>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>Expert documentation and claim loss assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>Direct negotiation with insurance authorities & TPAs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>Transparent resolution compliant with Indian insurance norms</span>
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
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F1F3D] text-[#FAF9F5] hover:bg-[#182E56] border border-[#C9A24B]/40 transition-colors"
            >
              <span>Consult On This Service</span>
              <ArrowRight className="w-4 h-4 text-[#C9A24B]" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
