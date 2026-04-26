import React, { useState, useEffect } from 'react';

const imageLists = import.meta.glob('../../assets/HeroImages/*.{png,jpg,jpeg,svg,avif,webp}', { eager: true });
const images = Object.values(imageLists).map(module => module.default);

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slideContent = [
    {
      title: 'Clinical Psychology Expertise. Mastery in Recovery.',
      sub: 'With empathy and over 35 years of clinical experience, we support emotional, cognitive, and behavioral challenges in a private, thoughtfully redesigned space.'
    },
    {
      title: 'Corporate Psychology. Wellbeing and Performance, Driven',
      sub: 'We enhance executive decision-making, leadership performance, and organizational wellbeing—boosting both leader capability and employee productivity across the company.'
    },
    {
      title: 'Health Psychology. Wellbeing in Balance.',
      sub: 'We inspire lasting personal growth by fostering self-awareness, self-worth, and purpose—so you can thrive with clarity, resilience, and meaningful achievement.'
    },
    {
      title: 'Forensic Psychology. Precision in Analysis. Integrity in Practice.',
      sub: 'We are committed to evidence-based practice, providing clear psychological evaluations that support objective legal decision-making.'
    },
    {
      title: 'Spiritual Psychology. Depth in Being. Purpose in Existence.',
      sub: 'We foster deep healing, nurturing inner peacefulness by addressing the wounded soul’s longing for transcendent connection.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slideContent.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slideContent.length]);

  return (
    <div className="relative h-screen w-full bg-dr-black overflow-hidden">
      {/* Background Images */}
      {slideContent.map((_, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === current ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Darker overlay for mobile readability */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
        <div key={current} className="animate-fadeIn flex flex-col items-center">
          {/* Responsive Font Sizes: text-3xl on mobile, text-6xl on desktop */}
          <h1 className="text-dr-gold font-serif text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6 max-w-5xl leading-tight tracking-tight">
            {slideContent[current].title}
          </h1>
          
          {/* Responsive Text Sizes: text-sm on small phones, text-xl on desktop */}
          <p className="text-gray-200 font-sans font-light text-sm sm:text-base md:text-xl max-w-2xl mb-8 md:mb-10 tracking-wide leading-relaxed">
            {slideContent[current].sub}
          </p>
          
          <div className="h-[1px] w-16 md:w-24 bg-dr-gold mb-8 md:mb-10" />
          
          {/* Responsive Button Padding */}
          <button className="border border-dr-gold text-dr-gold hover:bg-dr-gold hover:text-black px-6 py-3 md:px-10 md:py-4 font-sans font-bold text-xs md:text-sm tracking-[0.2em] transition-all duration-500 uppercase">
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Responsive Progress Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 md:gap-4">
        {slideContent.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 transition-all duration-500 rounded-full ${
              i === current ? 'w-8 md:w-12 bg-dr-gold' : 'w-4 md:w-6 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;