import React from 'react';
import { CLIENT_CONFIG, NAVIGATION } from '../data/content';
import { Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1529] text-slate-300 border-t border-[#C9A24B]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Logo & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-baseline">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Ravindranaath
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#C9A24B] ml-1">
                C
              </span>
            </div>

            <p className="font-serif italic text-lg text-[#C9A24B]">
              “{CLIENT_CONFIG.tagline}”
            </p>

            <p className="text-xs text-slate-400 font-sans max-w-sm">
              CEO &amp; MD, SLR-Industrial Security &amp; Facility Services. Senior insurance, loss prevention, and risk management leadership.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              {NAVIGATION.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[#C9A24B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <a
                  href={`tel:${CLIENT_CONFIG.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  {CLIENT_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <a
                  href={`mailto:${CLIENT_CONFIG.primaryEmail}`}
                  className="hover:text-[#C9A24B] transition-colors"
                >
                  {CLIENT_CONFIG.primaryEmail}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Ravindranaath C. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#C9A24B] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
