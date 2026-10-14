import React from 'react';
import { FOOTER_SECTION, CLIENT_CONFIG, NAVIGATION } from '../data/content';
import { Shield, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1428] text-slate-300 border-t border-[#C9A24B]/30 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C9A24B] to-[#A68335] flex items-center justify-center text-[#0F1F3D] shadow">
                <Shield className="w-5 h-5 fill-current" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#FAF9F5]">
                {FOOTER_SECTION.logo}
              </span>
            </div>

            <p className="font-serif italic text-[#C9A24B] text-lg">
              "{FOOTER_SECTION.tagline}"
            </p>

            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
              {FOOTER_SECTION.subTagline}. Providing dedicated advocacy and advisory for claims, loss prevention, and industrial safety.
            </p>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400 border border-slate-700 px-3 py-1.5 rounded-full inline-block">
                CEO & MD – SLR-Industrial Security & Facility Services
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF9F5] border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {NAVIGATION.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C9A24B] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#C9A24B]">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF9F5] border-b border-slate-800 pb-2">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <a
                  href={`tel:${CLIENT_CONFIG.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  {CLIENT_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <a
                  href={`mailto:${CLIENT_CONFIG.primaryEmail}`}
                  className="hover:text-[#C9A24B] transition-colors break-all"
                >
                  {CLIENT_CONFIG.primaryEmail}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                <span>{CLIENT_CONFIG.location}</span>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-slate-400">
              {FOOTER_SECTION.verificationNotice}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>{FOOTER_SECTION.copyright}</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#C9A24B] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
