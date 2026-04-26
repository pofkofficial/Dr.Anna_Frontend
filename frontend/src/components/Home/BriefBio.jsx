import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BriefBio = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-dr-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: The Image with Decorative Gold Frame */}
        <div className="relative w-full md:w-1/2 group">
          {/* Decorative Background Square */}
          <div className="absolute -top-4 -left-4 w-64 h-64 border-l border-t border-dr-gold/30 -z-0" />
          
          <div className="relative z-10 aspect-[4/5] overflow-hidden border border-dr-gold/20 shadow-2xl">
            <img 
              src="src/assets/Portrait/portrait.webp" 
              alt="Dr. Anna Portrait" 
              className="w-full h-full object-cover  transition-all duration-700"
            />
          </div>

          {/* Decorative Bottom Right Square */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r border-b border-dr-gold/50 z-20" />
        </div>

        {/* Right Side: The Story */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <div className="space-y-2">
            <span className="text-dr-gold font-sans text-xs tracking-[0.3em] uppercase">About Dr. Anna</span>
            <h2 className="text-white font-serif text-4xl md:text-5xl leading-tight">
              A Legacy of <span className="text-dr-gold">Excellence</span> & Empathy
            </h2>
          </div>

          <div className="h-px w-20 bg-dr-gold/50" />

          <p className="text-gray-300 font-sans leading-relaxed text-lg italic">
            "My mission is to support individuals in actualizing their full potential, 
            blending 25 years of international clinical expertise with a deep care for the human soul."
          </p>

          <p className="text-gray-400 font-sans leading-relaxed">
            With a PhD in Clinical Psychology and specialized degrees in Forensic and Organizational Psychology, 
            Dr. Anna provides a multidimensional approach to healing. Her practice is built on the 
            interconnection between evidence-based science and spiritual well-being—helping 
            clients find meaning, resilience, and purpose.
          </p>

          <div className="grid grid-cols-2 gap-4 py-4">
            <div>
              <h4 className="text-dr-gold font-bold text-2xl">25+</h4>
              <p className="text-gray-500 text-xs uppercase tracking-widest">Years Experience</p>
            </div>
            <div>
              <h4 className="text-dr-gold font-bold text-2xl">PhD</h4>
              <h4 className="text-gray-500 text-xs uppercase tracking-widest">Clinical Psychology</h4>
            </div>
          </div>

          <Link to="/about" className="w-fit text-dr-gold border-b border-dr-gold pb-1 hover:text-white hover:border-white transition-all uppercase text-xs tracking-[0.2em] font-bold">
            Explore My Full Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BriefBio;