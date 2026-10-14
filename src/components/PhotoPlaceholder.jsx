import React from 'react';
import { User, Camera, Image as ImageIcon } from 'lucide-react';

/**
 * PhotoPlaceholder
 * Renders an executive placeholder matching the WealthBridge consulting aesthetic.
 * When real client photos are ready, pass the `src` prop to display the actual image.
 */
export default function PhotoPlaceholder({
  label,
  caption,
  aspectRatio = "aspect-[4/5]",
  className = "",
  src = null,
  alt = "Photo placeholder",
  shape = "rounded-2xl"
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${shape} shadow-xl border border-[#C9A24B]/30 ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${shape} ${aspectRatio} ${className} bg-gradient-to-b from-[#182E56] via-[#0F1F3D] to-[#0A1428] border-2 border-dashed border-[#C9A24B]/50 p-6 flex flex-col items-center justify-center text-center shadow-2xl group transition-all duration-300 hover:border-[#C9A24B]`}
    >
      {/* Subtle decorative gold corner markers */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C9A24B]" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C9A24B]" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C9A24B]" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C9A24B]" />

      {/* Background subtle radial glow */}
      <div className="absolute inset-0 bg-radial from-[#C9A24B]/10 to-transparent pointer-events-none" />

      {/* Executive Silhouette Icon */}
      <div className="relative mb-4 w-20 h-20 rounded-full bg-[#182E56]/80 border border-[#C9A24B]/40 flex items-center justify-center text-[#C9A24B] shadow-inner group-hover:scale-105 transition-transform">
        <User className="w-10 h-10" />
        <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#C9A24B] text-[#0F1F3D] flex items-center justify-center shadow">
          <Camera className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Clearly labeled bracketed placeholder */}
      <div className="relative z-10 px-3 py-1.5 rounded-md bg-[#0A1428]/90 border border-[#C9A24B]/40 text-[#FAF9F5] font-mono text-xs md:text-sm font-semibold tracking-wide">
        {label}
      </div>

      {caption && (
        <p className="relative z-10 mt-2 text-xs text-slate-300/80 max-w-xs font-sans">
          {caption}
        </p>
      )}

      <div className="relative z-10 mt-3 flex items-center gap-1.5 text-[11px] text-[#C9A24B] uppercase tracking-wider font-medium">
        <ImageIcon className="w-3.5 h-3.5" />
        <span>Executive Photo Slot</span>
      </div>
    </div>
  );
}
