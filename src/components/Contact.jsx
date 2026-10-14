import React, { useState } from 'react';
import { CONTACT_SECTION, CLIENT_CONFIG } from '../data/content';
import { Phone, Mail, MapPin, Building, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: preselectedService || CONTACT_SECTION.enquiryTypes[0],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, enquiryType: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#FAF7F0] text-[#1E2433]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A24B]">
            {CONTACT_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight">
            {CONTACT_SECTION.heading}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
        </div>

        {/* Four White Cards with Gold Top Border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl p-6 border-t-4 border-[#C9A24B] border-x border-b border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#0F1F3D] flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-[#C9A24B]" />
            </div>
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
              Phone
            </p>
            <a
              href={`tel:${CLIENT_CONFIG.phone.replace(/\s+/g, '')}`}
              className="text-base font-bold text-[#0F1F3D] hover:text-[#C9A24B] transition-colors"
            >
              {CLIENT_CONFIG.phone}
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-2xl p-6 border-t-4 border-[#C9A24B] border-x border-b border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#0F1F3D] flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-[#C9A24B]" />
            </div>
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
              Email
            </p>
            <a
              href={`mailto:${CLIENT_CONFIG.primaryEmail}`}
              className="text-sm font-bold text-[#0F1F3D] hover:text-[#C9A24B] transition-colors break-all"
            >
              {CLIENT_CONFIG.primaryEmail}
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white rounded-2xl p-6 border-t-4 border-[#C9A24B] border-x border-b border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#0F1F3D] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-[#C9A24B]" />
            </div>
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
              Location
            </p>
            <p className="text-base font-bold text-[#0F1F3D]">
              {CLIENT_CONFIG.location}
            </p>
          </div>

          {/* Card 4: Office Address */}
          <div className="bg-white rounded-2xl p-6 border-t-4 border-[#C9A24B] border-x border-b border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#0F1F3D] flex items-center justify-center mb-4">
              <Building className="w-5 h-5 text-[#C9A24B]" />
            </div>
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
              Office Address
            </p>
            <p className="text-xs font-mono text-[#6B7280] bg-[#FAF7F0] px-2 py-1 rounded border border-slate-200 mt-1">
              {CLIENT_CONFIG.officeAddress}
            </p>
          </div>

        </div>

        {/* Two-Column Block Below */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white p-8 sm:p-12 rounded-2xl border border-slate-200/90 shadow-md">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#C9A24B]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#C9A24B]">
                Consultations
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1F3D] leading-snug">
              {CONTACT_SECTION.leftTitle}
            </h3>

            <p className="text-base text-[#6B7280] font-sans leading-relaxed">
              {CONTACT_SECTION.leftText}
            </p>

            <div className="p-5 rounded-xl bg-[#FAF7F0] border-l-4 border-[#0F1F3D] text-sm text-[#1E2433]">
              <span className="font-bold text-[#0F1F3D]">Yearly Retainers Available: </span>
              Full-time advisory for hospitals, MNCs, corporate houses, and logistics facilities across India.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-[#0F1F3D]">
                  Thank You for Your Consultation Request
                </h4>
                <p className="text-sm text-[#6B7280] max-w-md mx-auto">
                  Your inquiry regarding <span className="font-semibold text-[#0F1F3D]">{formData.enquiryType}</span> has been noted. Ravindranaath C will review your message and contact you directly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        enquiryType: CONTACT_SECTION.enquiryTypes[0],
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#FAF7F0] text-[#0F1F3D] border border-slate-300 hover:bg-[#0F1F3D] hover:text-white transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E2433] uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-[#FAF7F0]/40 text-[#1E2433] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:border-transparent text-sm transition-all"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E2433] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ramesh@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-[#FAF7F0]/40 text-[#1E2433] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:border-transparent text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1E2433] uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-[#FAF7F0]/40 text-[#1E2433] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:border-transparent text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Enquiry Type Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E2433] uppercase tracking-wider mb-1.5">
                    Enquiry Type
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-[#FAF7F0]/40 text-[#1E2433] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:border-transparent text-sm transition-all"
                  >
                    {CONTACT_SECTION.enquiryTypes.map((type, idx) => (
                      <option key={idx} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E2433] uppercase tracking-wider mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your insurance claim, risk concern, or security contract..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-[#FAF7F0]/40 text-[#1E2433] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:border-transparent text-sm transition-all resize-none"
                  />
                </div>

                {/* Navy "Book a Consultation" Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-[#0F1F3D] text-white hover:bg-[#182E56] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-60"
                  >
                    <Send className="w-4 h-4 text-[#C9A24B]" />
                    <span>{isSubmitting ? 'Sending...' : 'Book a Consultation'}</span>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
