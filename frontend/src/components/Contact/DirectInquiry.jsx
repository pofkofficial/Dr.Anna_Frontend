import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';

const DirectInquiry = () => {
  const [copied, setCopied] = useState(false);
  const email = "consultancy@dranna.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-dr-black p-8 md:p-16 flex flex-col justify-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-white font-serif text-3xl md:text-4xl">Direct Consultation</h2>
          <p className="text-gray-400 font-sans leading-relaxed">
            To ensure the highest level of privacy and a tailored response, Dr. Anna handles 
            all initial inquiries personally. Please send an email detailing your area of 
            interest (Clinical, Corporate, Forensic, or Spiritual).
          </p>
        </div>

        <div className="space-y-6 pt-6">
          {/* Large Email Link */}
          <a 
            href={`mailto:${email}?subject=Consultation Inquiry`}
            className="group block p-8 border border-dr-gold/20 bg-white/[0.02] hover:bg-dr-gold/5 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-2">
              <Mail className="text-dr-gold" size={20} />
              <span className="text-dr-gold text-[10px] uppercase tracking-[0.3em] font-bold">Email the Clinic</span>
            </div>
            <p className="text-white font-serif text-2xl md:text-3xl break-all">
              {email}
            </p>
          </a>

          {/* Copy Button for convenience */}
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest"
          >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
            {copied ? "Address Copied" : "Copy Email Address"}
          </button>
        </div>

        <div className="pt-10">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest leading-loose">
            Expected response time: Within 24-48 business hours.<br />
            All communications are strictly confidential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DirectInquiry;