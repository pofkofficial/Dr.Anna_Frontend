import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import DirectInquiry from '../components/Contact/DirectInquiry';
import ClinicLocation from '../components/Contact/ClinicLocation';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Dr. Anna | Book a Consultation</title>
        <meta name="description" content="Reach out to Dr. Anna for clinical, corporate, or forensic psychology consultations in Dubai or remotely." />
      </Helmet>

      <div className="pt-24 bg-dr-black min-h-screen">
        {/* Simple Header */}
        <div className="py-20 text-center">
          <h1 className="text-dr-gold font-serif text-4xl md:text-6xl mb-4">Get In Touch</h1>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs">Confidentiality & Care from the First Contact</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-dr-gold/10 border-y border-dr-gold/10">
          <DirectInquiry />
          <ClinicLocation />
        </div>
      </div>
    </>
  );
};

export default Contact;