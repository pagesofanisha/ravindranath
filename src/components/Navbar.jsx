import React, { useState, useEffect } from 'react';
import { NAVIGATION } from '../data/content';
import { Shield, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F1F3D]/95 backdrop-blur-md shadow-lg border-b border-[#C9A24B]/20 py-3.5'
          : 'bg-[#0F1F3D]/70 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with gold icon */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C9A24B] to-[#A68335] flex items-center justify-center text-[#0F1F3D] shadow-md group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#FAF9F5] group-hover:text-[#C9A24B] transition-colors">
                {NAVIGATION.logo.title}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#C9A24B] font-medium -mt-1">
                {NAVIGATION.logo.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAVIGATION.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-[#C9A24B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C9A24B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  // allow smooth scrolling or custom trigger
                }
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#C9A24B] text-[#0F1F3D] hover:bg-[#E0C070] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>{NAVIGATION.ctaButton}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#C9A24B] text-[#0F1F3D]"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-[#C9A24B] hover:bg-[#182E56] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1428] border-b border-[#C9A24B]/20 px-6 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {NAVIGATION.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-[#C9A24B] hover:bg-[#182E56]/40 px-3 py-2 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#C9A24B] text-[#0F1F3D] hover:bg-[#E0C070]"
              >
                <span>{NAVIGATION.ctaButton}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
