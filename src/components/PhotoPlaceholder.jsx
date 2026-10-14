import React from 'react';
import { User, Camera, ShieldCheck } from 'lucide-react';

/**
 * PhotoPlaceholder
 * Styled to match the Elena Vance executive portrait card:
 * - Clean border and subtle warm background
 * - Top-right gold badge
 * - Bottom executive metadata tray with principal name, title, and 3-column micro-grid
 */
export default function PhotoPlaceholder({
  label = "[PHOTO: Ravindranaath C – professional portrait]",
  caption = "Senior Insurance & Loss Prevention Specialist",
  aspectRatio = "aspect-[3/4]",
  className = "",
  src = null,
  alt = "Executive Portrait",
  showMetadataTray = true,
  badgeText = "ACTIVE ADVISORY",
  principalName = "RAVINDRANAATH C",
  principalTitle = "CEO & MD, SLR-Industrial Security & Facility Services",
  metadata = [
    { label: "JURISDICTION", value: "HYDERABAD & CHENNAI" },
    { label: "MANAGED SCALE", value: "35,000+ PERSONNEL" },
    { label: "STATUS", value: "ACTIVE" }
  ]
}) {
  return (
    <div className={`relative bg-white border border-[#E5E4DF] shadow-xl overflow-hidden ${className}`}>
      
      {/* Top-Right Gold Ribbon Badge */}
      {badgeText && (
        <div className="absolute top-0 right-0 z-20 bg-[#A3702C] text-white text-[10px] font-mono font-semibold uppercase tracking-widest px-3 py-1 shadow-sm">
          {badgeText}
        </div>
      )}

      {/* Image or Placeholder Area */}
      <div className={`relative w-full ${aspectRatio} bg-[#F4F4F0] flex flex-col items-center justify-center p-6 text-center border-b border-[#E5E4DF]`}>
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Minimalist executive icon */}
            <div className="relative w-24 h-24 rounded-full bg-[#EAE8E1] border border-[#D5D3CB] flex items-center justify-center text-[#7A6237]">
              <User className="w-12 h-12 stroke-[1.2]" />
              <span className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#0D1322] text-[#F8F8F6] flex items-center justify-center">
                <Camera className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Clear bracketed label */}
            <div className="px-3 py-1.5 bg-[#FFFFFF] border border-[#D5D3CB] text-[#1A1A1A] font-mono text-xs font-semibold tracking-wide">
              {label}
            </div>

            {caption && (
              <p className="text-xs text-neutral-500 font-sans max-w-xs">
                {caption}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Bottom Metadata Tray (Elena Vance style) */}
      {showMetadataTray && (
        <div className="p-4 sm:p-5 bg-[#FFFFFF]">
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE8E1]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3702C] font-semibold block">
                PRINCIPAL
              </span>
              <h4 className="font-serif text-lg font-bold tracking-tight text-[#0D1322]">
                {principalName}
              </h4>
            </div>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider border border-[#E5E4DF] px-2 py-0.5">
              EXEC-ID: RC-37
            </span>
          </div>

          <p className="text-xs text-neutral-600 font-sans mt-2 mb-3">
            {principalTitle}
          </p>

          {/* 3-Column Micro Data Grid */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#F0EFEA] text-[10px] font-mono">
            {metadata.map((item, idx) => (
              <div key={idx} className={idx !== 0 ? 'border-l border-[#EAE8E1] pl-2' : ''}>
                <span className="text-neutral-400 block tracking-wider uppercase">
                  {item.label}
                </span>
                <span className="text-[#0D1322] font-semibold block truncate">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
