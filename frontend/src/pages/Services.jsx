import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import DetailedSpecialties from '../components/services/DetailedSpecialties';
import ServiceFAQ from '../components/services/ServiceFAQ';

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Specialized Services | Dr. Anna Psychology</title>
      </Helmet>

      <div className="pt-24 bg-dr-black">
        {/* Header Section */}
        <section className="py-20 text-center border-b border-dr-gold/10">
          <h1 className="text-dr-gold font-serif text-4xl md:text-6xl mb-4">Areas of Expertise</h1>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs">Evidence-Based Care & Transpersonal Growth</p>
        </section>

        <DetailedSpecialties />
        
        <div className="bg-[#050505]">
          <ServiceFAQ />
        </div>
      </div>
    </>
  );
};

export default Services;