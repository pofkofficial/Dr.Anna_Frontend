import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      text: "Thank you for our session. Without your help, I would have remained trapped in my inner chaotic issues. Your guidance was the bridge to my peace.",
      author: "Maria Slivia, 40 yrs",
      context: "Clinical Client"
    },
    {
      text: "Dr. Anna provides a level of insight that is rare to find. Her ability to navigate complex emotional landscapes with empathy and 35 years of clinical mastery is evident from the first session.",
      author: "William Hommes, 48 yrs",
      context: "Corporate Executive"
    },
    {
      text: "The integration of spiritual wisdom and psychological precision has changed my life. I now move through the world with a sense of purpose I didn't think was possible.",
      author: "Minerva White, 50 yrs",
      context: "Lifestyle Consultation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 8000); // Longer time to read the text
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-32 px-6 bg-dr-black relative overflow-hidden border-t border-dr-gold/10">
      {/* Decorative Gold Quotation Mark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
        <span className="text-[250px] text-dr-gold font-serif leading-none">“</span>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 min-h-[350px] flex flex-col justify-center">
        <h2 className="text-dr-gold font-sans text-xs tracking-[0.4em] uppercase mb-16">
          Voices of Transformation
        </h2>
        
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 absolute inset-x-0 mx-auto px-4 ${
              index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <blockquote className="text-white font-serif text-xl md:text-3xl leading-relaxed italic mb-12 max-w-4xl mx-auto">
              "{review.text}"
            </blockquote>

            <div className="flex flex-col items-center gap-4">
              <div className="h-px w-12 bg-dr-gold/50" />
              <div className="flex flex-col items-center">
                <cite className="text-dr-gold font-sans not-italic text-sm tracking-widest uppercase">
                  {review.author}
                </cite>
                <cite className="text-gray-600 text-[10px] uppercase tracking-[0.2em] mt-1">
                  {review.context}
                </cite>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Controls */}
      <div className="flex justify-center gap-3 mt-20">
        {reviews.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              i === current ? 'w-10 bg-dr-gold' : 'w-4 bg-white/10 hover:bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;