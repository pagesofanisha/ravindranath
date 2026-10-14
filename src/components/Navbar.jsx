import React, { useState } from 'react';
import { CLIENT_CONFIG } from '../data/content';
import { Menu, X, ArrowUpRight, Shield, Lock } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "OVERVIEW", href: "#overview" },
    { label: "PRACTICE VECTORS", href: "#vectors" },
    { label: "METRICS", href: "#metrics" },
    { label: "CAREER MANDATES", href: "#mandates" },
    { label: "PUBLICATIONS", href: "#publications" },
    { label: "AFFILIATIONS", href: "#affiliations" },
    { label: "CONTACT", href: "#inquiry" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F8F6] border-b border-[#E5E4DF] shadow-xs">
      
      {/* Top Utility Micro-Bar (Elena Vance style) */}
      <div className="hidden lg:block bg-[#F0EFEA] border-b border-[#E5E4DF] py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] font-mono text-neutral-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[#A3702C] font-semibold">
              [ 01/ EXECUTIVE MANDATE & DOMICILE ]
            </span>
            <span>·</span>
            <span>HYDERABAD & CHENNAI, INDIA</span>
            <span>·</span>
            <a href={`tel:${CLIENT_CONFIG.phone.replace(/\s+/g, '')}`} className="hover:text-[#A3702C] transition-colors">
              {CLIENT_CONFIG.phone}
            </a>
            <span>·</span>
            <a href={`mailto:${CLIENT_CONFIG.primaryEmail}`} className="hover:text-[#A3702C] transition-colors">
              {CLIENT_CONFIG.primaryEmail}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-neutral-500">
              <Shield className="w-3 h-3 text-[#A3702C]" />
              FIDUCIARY ETHICS: PEOPLE'S PERSON
            </span>
            <span className="px-2 py-0.5 bg-[#0D1322] text-white text-[10px] uppercase font-bold tracking-wider">
              ACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Monogram Box */}
          <a href="#overview" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 bg-[#0D1322] text-[#F8F8F6] font-serif font-bold text-lg flex items-center justify-center border border-[#A3702C] shadow-sm group-hover:bg-[#A3702C] transition-colors">
              RC
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-[#0D1322] uppercase group-hover:text-[#A3702C] transition-colors">
                Ravindranaath C
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#A3702C] -mt-0.5">
                Insurance, Risk & Security Advisory
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#A3702C] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A3702C] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#inquiry"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D1322] hover:bg-[#162038] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all shadow hover:shadow-md cursor-pointer border border-[#0D1322]"
            >
              <Lock className="w-3.5 h-3.5 text-[#A3702C]" />
              <span>Confidential Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A3702C]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="#inquiry"
              className="sm:hidden px-3 py-1.5 bg-[#0D1322] text-white text-xs font-mono uppercase font-semibold"
            >
              Inquiry
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#E5E4DF] text-neutral-700 hover:text-[#0D1322] hover:bg-[#F0EFEA]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFFFF] border-b border-[#E5E4DF] px-6 py-5 space-y-3 font-mono text-xs">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 border-b border-neutral-100 text-neutral-800 hover:text-[#A3702C] hover:bg-[#F8F8F6]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#0D1322] text-white text-xs uppercase font-semibold"
              >
                <span>Initiate Confidential Inquiry</span>
                <ArrowUpRight className="w-4 h-4 text-[#A3702C]" />
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
