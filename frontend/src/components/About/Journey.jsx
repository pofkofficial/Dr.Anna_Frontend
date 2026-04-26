import React from 'react';
import Family from "/src/assets/Portrait/Family.png" 
const Journey = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-dr-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Side */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-2">
              <span className="text-dr-gold font-sans text-xs uppercase tracking-[0.4em]">The Narrative</span>
              <h2 className="text-white font-serif text-4xl md:text-5xl">From Sardinia to Global Practice</h2>
            </div>
            
            <div className="space-y-6 text-gray-400 font-sans leading-relaxed">
              <p>
                My story began in 1970 in Cagliari, Sardinia. Growing up by the sea, I was 
                shaped by a community that valued connection and leadership. My parents, 
                Toto and Mariella, instilled in me the foundations of gratitude and service 
                that guide my practice to this day.
              </p>
              <p>
                What started as a natural inclination to mediate and encourage peers in 
                my youth evolved into a rigorous academic pursuit. Today, I bridge those 
                early lessons of empathy with over 25 years of international clinical 
                experience across Italy and the United Kingdom.
              </p>
            </div>
          </div>

          {/* Image Side - Family Photo focus */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] overflow-hidden border border-dr-gold/10">
              {/* Family Picture of her, mom, and dad */}
              <img 
                src= {Family}  
                alt="Dr. Anna with her parents" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 hidden md:block w-48 h-48 border-r border-b border-dr-gold/30 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;