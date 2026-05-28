"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface CustomSelectProps {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (val: string) => void;
}

function CustomSelect({ value, options, placeholder, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full text-left font-body">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#242018] border border-[#3a3530] rounded-lg p-3 text-white text-sm flex justify-between items-center outline-none focus:border-[#6b5f52] transition-colors duration-250 cursor-pointer"
      >
        <span className={value ? "text-white" : "text-[#666]"}>
          {value || placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-[#888] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-1.5 bg-[#242018] border border-[#3a3530] rounded-lg z-50 overflow-hidden shadow-2xl py-1 max-h-[220px] overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm text-white hover:bg-[#6b5f52]/20 hover:text-white transition-colors duration-200 cursor-pointer ${
                value === option ? "bg-[#6b5f52]/40" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    submitting: boolean;
    msg: string;
    type: 'success' | 'error' | null;
  }>({ submitting: false, msg: '', type: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, msg: '', type: null });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus({
        submitting: false,
        msg: 'Thank you! Your message has been sent successfully.',
        type: 'success'
      });
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      });
    } catch (err: any) {
      console.error(err);
      setStatus({
        submitting: false,
        msg: err.message || 'Failed to send email. Please try again.',
        type: 'error'
      });
    }
  };

  const projectTypes = ["Custom Home", "Renovation", "Interior Design", "Commercial", "Other"];
  const budgetRanges = ["Under ₹50L", "₹50L–1Cr", "₹1Cr–3Cr", "Above ₹3Cr"];

  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '918882675336';

  return (
    <section
      id="contact"
      className="relative bg-[#1a1714] py-20 overflow-hidden border-t border-white/5 scroll-mt-28"
    >
      {/* Structural layout thin grid lines */}
      <div className="absolute inset-0 architect-grid-dark opacity-10 pointer-events-none" />

      {/* Centered Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (45% equivalent -> 5/12 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left h-full">
            <div>
              <span className="font-display font-medium text-xs text-bronze/70 uppercase tracking-widest mb-3 block">
                [06]
              </span>
              <h2 className="font-display font-medium text-3xl text-white mb-4 leading-tight">
                Let's build something remarkable
              </h2>
              <p className="font-body text-sm text-[#888] leading-relaxed mb-10 max-w-sm">
                Tell us about your project and we'll get back to you within 24 hours
              </p>

              {/* Contact Detail Rows */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#888] flex-shrink-0" />
                  <a href="mailto:hello@arko.studio" className="font-body text-[13px] text-[#aaa] hover:text-white transition-colors duration-250">
                    hello@arko.studio
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#888] flex-shrink-0" />
                  <a href={`tel:+${whatsappPhone}`} className="font-body text-[13px] text-[#aaa] hover:text-white transition-colors duration-250">
                    +{whatsappPhone.slice(0,2)} {whatsappPhone.slice(2,7)} {whatsappPhone.slice(7)}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#888] flex-shrink-0" />
                  <span className="font-body text-[13px] text-[#aaa]">
                    New Delhi, India
                  </span>
                </div>
              </div>

              {/* WhatsApp Contact CTA */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href={`https://wa.me/${whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba56] text-white font-display font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all duration-300 shadow-sm cursor-pointer"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.022-.079-.186-.208-.437-.327-.245-.122-1.495-.738-1.723-.822-.227-.084-.393-.128-.559.128-.166.257-.647.822-.793.987-.145.166-.29.186-.535.064-.245-.122-.917-.338-1.748-1.078-.646-.575-1.082-1.287-1.21-1.509-.128-.222-.014-.343.109-.464.113-.11.245-.286.368-.43.122-.145.166-.245.245-.407.084-.166.042-.314-.022-.437-.064-.122-.559-1.343-.768-1.848-.204-.493-.413-.423-.559-.43-.145-.008-.314-.008-.483-.008-.169 0-.443.064-.675.314-.232.252-.89 0-.89 2.158s1.597 4.238 1.82 4.54c.227.3.3.3 3.14 5.378 1.962 1.812 3.018 1.895 3.398 1.934.38.039 1.223-.02 1.495-.314.272-.294.272-.738.272-1.036 0-.294-.022-.38-.044-.458zm-5.466 7.62c-1.95 0-3.87-.52-5.58-1.5l-.4-.24-4.12 1.08 1.1-4.01-.26-.42c-1.07-1.71-1.64-3.71-1.64-5.77 0-5.99 4.87-10.86 10.86-10.86 2.9 0 5.62 1.13 7.67 3.18 2.05 2.05 3.18 4.77 3.18 7.67 0 5.99-4.88 10.87-10.87 10.87zm0-23.77c-7.1 0-12.87 5.77-12.87 12.88 0 2.27.59 4.49 1.72 6.44l-1.83 6.69 6.84-1.79c1.89 1.03 4.02 1.58 6.14 1.58 7.1 0 12.88-5.77 12.88-12.88 0-3.44-1.34-6.68-3.78-9.12-2.44-2.44-5.68-3.79-9.13-3.79z" />
                  </svg>
                  <span>Contact on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (55% equivalent -> 7/12 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#242018] border border-[#3a3530] rounded-lg p-3 text-white text-sm w-full placeholder-[#666] outline-none focus:border-[#6b5f52] focus:ring-0 transition-colors duration-250"
                />
              </div>

              {/* Email Address */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#242018] border border-[#3a3530] rounded-lg p-3 text-white text-sm w-full placeholder-[#666] outline-none focus:border-[#6b5f52] focus:ring-0 transition-colors duration-250"
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#242018] border border-[#3a3530] rounded-lg p-3 text-white text-sm w-full placeholder-[#666] outline-none focus:border-[#6b5f52] focus:ring-0 transition-colors duration-250"
                />
              </div>

              {/* Custom Dropdowns row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Project Type */}
                <CustomSelect
                  value={formData.projectType}
                  options={projectTypes}
                  placeholder="Project Type"
                  onChange={(val) => setFormData({ ...formData, projectType: val })}
                />

                {/* Budget Range */}
                <CustomSelect
                  value={formData.budget}
                  options={budgetRanges}
                  placeholder="Budget Range"
                  onChange={(val) => setFormData({ ...formData, budget: val })}
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vision..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#242018] border border-[#3a3530] rounded-lg p-3 text-white text-sm w-full placeholder-[#666] outline-none focus:border-[#6b5f52] focus:ring-0 transition-colors duration-250 resize-none"
                />
              </div>

              {/* Status Message */}
              {status.msg && (
                <div
                  className={`p-3 rounded-lg text-sm text-left ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                >
                  {status.msg}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-white text-[#1a1714] font-medium text-sm rounded-lg py-3.5 transition-all duration-250 hover:bg-[#f0ece4] cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
              >
                {status.submitting ? 'Sending inquiry...' : 'Send Message →'}
              </button>

              {/* Privacy Note */}
              <p className="text-center text-[11px] text-[#555] mt-1 font-body">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>

        </div>

        {/* Separator / Footer copyright line at the very bottom center */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-[11px] text-[#444] font-body">
            &copy; 2024 ARKO Studio. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}
