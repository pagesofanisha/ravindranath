import React, { useState } from 'react';
import { CONTACT_SECTION, CLIENT_CONFIG } from '../data/content';
import { Phone, Mail, MapPin, Building, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || CONTACT_SECTION.form.servicesList[0],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update service if preselectedService changes from parent
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#A68335]">
            {CONTACT_SECTION.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F1F3D] tracking-tight">
            {CONTACT_SECTION.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A24B] mx-auto my-3" />
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            {CONTACT_SECTION.subtitle}
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAF9F5] p-8 rounded-3xl border border-slate-200/90 shadow-md">
              <h3 className="text-2xl font-serif font-bold text-[#0F1F3D] mb-6">
                Direct Communication
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0F1F3D] text-[#C9A24B] flex items-center justify-center shrink-0 shadow">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Mobile & Direct Line
                    </p>
                    <a
                      href={`tel:${CLIENT_CONFIG.phone.replace(/\s+/g, '')}`}
                      className="text-base sm:text-lg font-serif font-bold text-[#0F1F3D] hover:text-[#A68335] transition-colors"
                    >
                      {CLIENT_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0F1F3D] text-[#C9A24B] flex items-center justify-center shrink-0 shadow">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Primary Email Address
                    </p>
                    <a
                      href={`mailto:${CLIENT_CONFIG.primaryEmail}`}
                      className="text-sm sm:text-base font-semibold text-[#0F1F3D] hover:text-[#A68335] transition-colors break-all"
                    >
                      {CLIENT_CONFIG.primaryEmail}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0F1F3D] text-[#C9A24B] flex items-center justify-center shrink-0 shadow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Operating Locations
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-slate-800">
                      {CLIENT_CONFIG.location}
                    </p>
                  </div>
                </div>

                {/* Office Address Placeholder */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0F1F3D] text-[#C9A24B] flex items-center justify-center shrink-0 shadow">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Registered Office
                    </p>
                    <p className="text-xs sm:text-sm font-mono text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200 mt-1">
                      {CLIENT_CONFIG.officeAddress}
                    </p>
                  </div>
                </div>

                {/* Availability Note */}
                <div className="pt-4 border-t border-slate-200/80">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <Clock className="w-4 h-4 text-[#A68335] shrink-0 mt-0.5" />
                    <span>{CLIENT_CONFIG.availabilityNote}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Client Guarantee Card */}
            <div className="bg-[#0F1F3D] text-[#FAF9F5] p-6 rounded-3xl border border-[#C9A24B]/30 shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#182E56] text-[#C9A24B] flex items-center justify-center shrink-0 font-serif font-bold text-lg">
                RA
              </div>
              <div>
                <p className="font-serif font-bold text-base text-[#FAF9F5]">
                  Personal Attention Guarantee
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  "People's person, who is at ease in cutting across hierarchies."
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0F1F3D]">
                    Consultation Request Received
                  </h3>
                  <p className="text-slate-600 font-sans text-sm max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Your inquiry regarding <span className="font-semibold text-slate-800">{formData.service}</span> has been logged. Ravindranaath C will review your inquiry and follow up directly.
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
                          service: CONTACT_SECTION.form.servicesList[0],
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#FAF9F5] text-[#0F1F3D] border border-slate-300 hover:bg-[#0F1F3D] hover:text-[#FAF9F5] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-2">
                    <h3 className="text-2xl font-serif font-bold text-[#0F1F3D]">
                      Schedule a Consultation
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Complete this form for insurance claims support or industrial security advisory.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      {CONTACT_SECTION.form.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-[#FAF9F5]/40 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        {CONTACT_SECTION.form.emailLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ramesh@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-[#FAF9F5]/40 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        {CONTACT_SECTION.form.phoneLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-[#FAF9F5]/40 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      {CONTACT_SECTION.form.serviceLabel}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-[#FAF9F5]/40 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:border-transparent transition-all text-sm"
                    >
                      {CONTACT_SECTION.form.servicesList.map((service, idx) => (
                        <option key={idx} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      {CONTACT_SECTION.form.messageLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please summarize your insurance claim, risk challenge, or security requirement..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-[#FAF9F5]/40 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-[#0F1F3D] text-[#FAF9F5] hover:bg-[#182E56] border border-[#C9A24B]/40 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#C9A24B]" />
                      <span>{isSubmitting ? 'Submitting...' : CONTACT_SECTION.form.submitButton}</span>
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
