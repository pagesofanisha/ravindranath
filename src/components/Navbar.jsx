import React, { useState } from 'react';
import { NAVIGATION } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0F1F3D] shadow-md border-b border-[#0F1F3D]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo at left: "Ravindranaath" in white Playfair Display, "C" in gold */}
          <a href="#" className="flex items-baseline group">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ravindranaath
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#C9A24B] ml-1.5">
              C
            </span>
          </a>

          {/* Links at right in light text (#E8ECF4), turning gold on hover (desktop/tablet >= 800px) */}
          <div className="hidden min-[800px]:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {NAVIGATION.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#E8ECF4] hover:text-[#C9A24B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Gold pill button: "Contact Me" */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide bg-[#C9A24B] text-[#0F1F3D] hover:bg-[#E0C070] shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              {NAVIGATION.ctaButton}
            </a>
          </div>

          {/* Mobile hamburger menu button (< 800px) */}
          <div className="flex min-[800px]:hidden items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#C9A24B] text-[#0F1F3D]"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#E8ECF4] hover:text-[#C9A24B] hover:bg-[#182E56] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu with the same deep navy background (#0F1F3D) */}
      {mobileMenuOpen && (
        <div className="min-[800px]:hidden bg-[#0F1F3D] border-t border-slate-700/50 px-6 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {NAVIGATION.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#E8ECF4] hover:text-[#C9A24B] py-2 px-3 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#C9A24B] text-[#0F1F3D]"
              >
                <span>{NAVIGATION.ctaButton}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
