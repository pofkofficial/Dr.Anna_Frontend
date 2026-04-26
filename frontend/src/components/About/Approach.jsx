import React from 'react';
import Portrait from "/src/assets/Portrait/portrait.webp" 
const Approach = () => {
  return (
    <section className="py-24 px-6 bg-[#050505] border-y border-dr-gold/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Portrait Side */}
          <div className="w-full lg:w-1/3">
            <div className="relative">
              <img 
                src={Portrait}
                alt="Dr. Anna Portrait" 
                className="w-full border border-dr-gold/20"
              />
              <div className="absolute inset-0 bg-dr-gold/5 mix-blend-overlay" />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-2/3 space-y-12">
            <h2 className="text-white font-serif text-4xl">The Clinical & Soulful Intersection</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-dr-gold font-sans text-xs uppercase tracking-widest font-bold">Scientific Rigor</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Utilizing evidence-based practices and solutions-focused mentoring to deliver 
                  tailored, effective action plans for recovery and organizational growth.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-dr-gold font-sans text-xs uppercase tracking-widest font-bold">Deep Empathy</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  25 years of dedication serving individuals in psychiatric wards, corporate boardrooms, 
                  and private sessions around the world.
                </p>
              </div>
              <div className="space-y-4 md:col-span-2">
                <h4 className="text-dr-gold font-sans text-xs uppercase tracking-widest font-bold">Transpersonal Vision</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Addressing the "wounded soul’s longing" through the lens of spirituality and meaning, 
                  helping people discover purpose whether or not faith is implied in their lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;