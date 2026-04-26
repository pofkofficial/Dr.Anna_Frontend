import React from 'react';
import Picture1 from '/src/assets/HeroImages/Picture1.png'
import Picture2 from '/src/assets/HeroImages/Picture2.png'
import Picture3 from '/src/assets/HeroImages/Picture3.png'
import Picture4 from '/src/assets/HeroImages/Picture4.png'
import Picture5 from '/src/assets/HeroImages/Picture5.png'

const specialties = [
  {
    id: 'clinical',
    img: Picture1,
    title: 'Clinical Psychology',
    tag: 'Healing & Recovery',
    desc: 'Supporting emotional, cognitive, and behavioral challenges. From depression and anxiety to complex trauma, I provide a safe, private space for recovery using over 25 years of clinical insight.',
    details: ['Depression & Mood Disorders', 'Anxiety & Phobias', 'Trauma Recovery', 'Personality Disorders']
  },
  {
    id: 'corporate',
    img: Picture2,
    title: 'Corporate Psychology',
    tag: 'Performance & Wellbeing',
    desc: 'Enhancing executive decision-making and organizational productivity. I help leaders develop resilience and foster healthy work environments that reduce burnout and increase capability.',
    details: ['Leadership Mentoring', 'Conflict Resolution', 'Burnout Prevention', 'Executive Performance']
  },
  {
    id: 'health',
    img: Picture3, 
    title: 'Health Psychology',
    tag: 'Resilience & Vitality',
    desc: 'Focusing on the psychological factors that influence physical health and illness. I help clients navigate chronic conditions, weight management, and lifestyle transitions for long-term vigor.',
    details: ['Stress Management', 'Chronic Pain Support', 'Lifestyle Modification', 'Health Behavior Change']
  },
  {
    id: 'forensic',
    img: Picture4,
    title: 'Forensic Psychology',
    tag: 'Precision & Integrity',
    desc: 'Providing objective, evidence-based psychological evaluations for legal contexts. My focus is on clinical criminology and forensic analysis with total professional integrity.',
    details: ['Legal Evaluations', 'Criminological Analysis', 'Expert Witness Support', 'Behavioral Assessment']
  },
  {
    id: 'spiritual',
    img: Picture5, 
    title: 'Spiritual Psychology',
    tag: 'Purpose & Transcendence',
    desc: 'Addressing the soul’s longing for purpose and meaning. This approach explores the intersection between human psychology and spiritual experience, whether or not faith is explicitly implied.',
    details: ['Existential Inquiry', 'Transpersonal Growth', 'Grief & Soul Transition', 'Purpose-Driven Mentoring']
  }
];

const DetailedSpecialties = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-32">
        {specialties.map((item, index) => (
          <div 
            key={item.id} 
            id={item.id}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
          >
            {/* Visual Side */}
            <div className="w-full md:w-1/2">
              <div className="aspect-video bg-zinc-900 border border-dr-gold/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-dr-gold/5 group-hover:bg-transparent transition-all duration-700" />
                <div className="flex items-center justify-center h-full text-dr-gold/20 font-serif italic text-2xl">
                  {/* If no image, display text placeholder or her Portrait */}
                  <img src= {item.img} className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-dr-gold font-sans text-xs uppercase tracking-[0.3em]">{item.tag}</span>
              <h2 className="text-white font-serif text-4xl">{item.title}</h2>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              <ul className="grid grid-cols-2 gap-4 pt-4">
                {item.details.map((detail, i) => (
                  <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-dr-gold/40 rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedSpecialties;