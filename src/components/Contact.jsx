import React, { useState } from 'react';
import { CLIENT_CONFIG } from '../data/content';
import { Shield, Lock, Phone, Mail, ArrowUpRight, CheckCircle2, Building, Scale } from 'lucide-react';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    entity: '',
    phone: '',
    email: '',
    service: preselectedService || 'Motor & Vehicle Insurance Claims',
    message: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="inquiry" className="py-20 lg:py-24 bg-[#F8F8F6] border-b border-[#E5E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Mandate Info (Elena Vance Style) */}
          <div className="lg:col-span-5 space-y-6">
            
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3702C] font-semibold block">
              [ CONFIDENTIAL RETAINER &amp; MANDATE INQUIRY ]
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#0D1322] tracking-tight leading-tight">
              Initiate Direct Mandate Inquiry
            </h2>

            <p className="text-sm text-neutral-600 font-sans leading-relaxed font-light">
              Due to active corporate advisory commitments and specialized case focus, consultations are prioritized for institutional employers, logistics firms, hospitals, and claimants requiring senior-level dispute resolution.
            </p>

            {/* 3 Feature Boxes with Icons */}
            <div className="space-y-4 pt-2">
              
              <div className="p-4 bg-white border border-[#E5E4DF] flex items-start gap-3.5 shadow-2xs">
                <div className="w-8 h-8 bg-[#F8F8F6] border border-[#E5E4DF] text-[#A3702C] flex items-center justify-center shrink-0 mt-0.5">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D1322]">
                    Pre-Cleared Mandates
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans mt-1">
                    Direct personal communication with Ravindranaath C cutting across hierarchies with complete discretion.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E5E4DF] flex items-start gap-3.5 shadow-2xs">
                <div className="w-8 h-8 bg-[#F8F8F6] border border-[#E5E4DF] text-[#A3702C] flex items-center justify-center shrink-0 mt-0.5">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D1322]">
                    Direct Fiduciary Advocacy
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans mt-1">
                    Decisive resolution of insurer-hospital settlement discrepancies, surveyor claims loss assessments, and facility safety audits.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E5E4DF] flex items-start gap-3.5 shadow-2xs">
                <div className="w-8 h-8 bg-[#F8F8F6] border border-[#E5E4DF] text-[#A3702C] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D1322]">
                    Secure Direct Line &amp; Email
                  </h4>
                  <div className="text-xs font-mono text-neutral-700 mt-1 space-y-0.5">
                    <p>Direct: <a href={`tel:${CLIENT_CONFIG.phone.replace(/\s+/g, '')}`} className="font-semibold text-[#0D1322] hover:text-[#A3702C]">{CLIENT_CONFIG.phone}</a></p>
                    <p>Email: <a href={`mailto:${CLIENT_CONFIG.primaryEmail}`} className="font-semibold text-[#0D1322] hover:text-[#A3702C]">{CLIENT_CONFIG.primaryEmail}</a></p>
                  </div>
                </div>
              </div>

            </div>

            {/* Domicile & Locations */}
            <div className="pt-4 border-t border-[#E5E4DF] text-xs font-mono text-neutral-500 space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-[#A3702C] font-semibold">
                PRINCIPAL ADVISORY DOMICILE:
              </p>
              <p className="text-neutral-700 font-medium">
                Operational Domicile: Hyderabad &amp; Chennai, India
              </p>
              <p className="text-neutral-500">
                Registered Office: {CLIENT_CONFIG.officeAddress}
              </p>
            </div>

          </div>

          {/* Right Column: Clean Executive Form (Elena Vance Style) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E5E4DF] p-8 sm:p-10 shadow-sm">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#F8F8F6] border border-[#A3702C] text-[#A3702C] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-[#0D1322]">
                    Mandate Inquiry Transmitted
                  </h3>
                  <p className="text-xs font-mono text-neutral-600 max-w-md mx-auto">
                    Your inquiry has been cataloged. Ravindranaath C will review your mandate details and respond through secure channels.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#0D1322] text-white text-xs font-mono uppercase"
                  >
                    Transmit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  
                  {/* Row 1: Name & Entity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1.5">
                        PRINCIPAL NAME / TITLE *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar, Director"
                        className="w-full px-3.5 py-3 border border-[#E5E4DF] bg-[#F8F8F6] text-[#0D1322] focus:bg-white focus:outline-none focus:border-[#A3702C] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1.5">
                        INSTITUTIONAL ENTITY / COMPANY *
                      </label>
                      <input
                        type="text"
                        name="entity"
                        required
                        value={formData.entity}
                        onChange={handleChange}
                        placeholder="e.g. Logistics / Healthcare Ltd"
                        className="w-full px-3.5 py-3 border border-[#E5E4DF] bg-[#F8F8F6] text-[#0D1322] focus:bg-white focus:outline-none focus:border-[#A3702C] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1.5">
                        CONTACT TELEPHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-3 border border-[#E5E4DF] bg-[#F8F8F6] text-[#0D1322] focus:bg-white focus:outline-none focus:border-[#A3702C] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1.5">
                        CORPORATE EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="principal@institution.com"
                        className="w-full px-3.5 py-3 border border-[#E5E4DF] bg-[#F8F8F6] text-[#0D1322] focus:bg-white focus:outline-none focus:border-[#A3702C] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Mandate Select */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1.5">
                      SELECT ENGAGEMENT MANDATE *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 border border-[#E5E4DF] bg-[#F8F8F6] text-[#0D1322] focus:bg-white focus:outline-none focus:border-[#A3702C] transition-colors"
                    >
                      <option value="Motor & Vehicle Insurance Claims">Motor &amp; Vehicle Insurance Claims (Accidental / 3rd Party)</option>
                      <option value="Health & Life Insurance Benefits">Health &amp; Life Insurance Benefits (Hospital Disputes)</option>
                      <option value="Loss Prevention & Risk Management">Loss Prevention &amp; Risk Management Advisory</option>
                      <option value="Industrial Security & Facility Retainer">Industrial Security &amp; Facility Retainer (SLR-IS &amp; FS)</option>
                      <option value="General Corporate Consultation">General Corporate Consultation / Executive Review</option>
                    </select>
                  </div>

                  {/* Row 4: Message Textarea */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1.5">
                      BRIEF OUTLINE OF MANDATE OR DISPUTE *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline institutional scale, claims dispute summary, or security retainer requirement..."
                      className="w-full px-3.5 py-3 border border-[#E5E4DF] bg-[#F8F8F6] text-[#0D1322] focus:bg-white focus:outline-none focus:border-[#A3702C] transition-colors resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2 pt-1 text-[11px] text-neutral-500">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-0.5"
                    />
                    <label htmlFor="consent">
                      I understand Ravindranaath C acts with full fiduciary confidentiality and direct personal advocacy.
                    </label>
                  </div>

                  {/* Full-width dark button (Elena Vance Style) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-[#0D1322] hover:bg-[#162038] text-white text-xs font-mono uppercase font-semibold tracking-wider transition-all shadow-md group cursor-pointer border border-[#0D1322]"
                    >
                      <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT CONFIDENTIAL INQUIRY'}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#A3702C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
