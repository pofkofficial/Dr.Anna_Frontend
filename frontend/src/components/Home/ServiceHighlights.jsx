import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// If you use Lucide React icons, they look very premium
import { Heart, Briefcase, Scale, Sparkles, Activity } from 'lucide-react';

const services = [
  {
    id: 'clinical',
    title: 'Clinical Psychology',
    desc: 'Expert support for emotional and behavioral challenges, fostering recovery through evidence-based practice.',
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: 'corporate',
    title: 'Corporate Psychology',
    desc: 'Strategic leadership mentoring and organizational wellbeing to enhance professional performance.',
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    id: 'health',
    title: 'Health Psychology',
    desc: 'Promoting lifestyle transformation and resilience to achieve a balanced, vigorous state of being.',
    icon: <Activity className="w-8 h-8" />,
  },
  {
    id: 'forensic',
    title: 'Forensic Psychology',
    desc: 'Providing objective evaluations and criminological analysis within international legal frameworks.',
    icon: <Scale className="w-8 h-8" />,
  },
  {
    id: 'spiritual',
    title: 'Spiritual Psychology',
    desc: 'Exploring the interconnection between the human experience and the longing for transcendent meaning.',
    icon: <Sparkles className="w-8 h-8" />,
  },
];

const ServiceHighlights = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-dr-gold font-serif text-3xl md:text-5xl mb-4">Areas of Expertise</h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs">Tailored Psychological Solutions</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-10 bg-dr-black border border-dr-gold/10 hover:border-dr-gold/50 transition-all duration-500 cursor-default"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[15px] border-r-[15px] border-t-transparent border-r-dr-gold/20 group-hover:border-r-dr-gold transition-all" />
              
              <div className="text-dr-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-white font-serif text-2xl mb-4 tracking-wide">
                {service.title}
              </h3>
              
              <p className="text-gray-400 font-sans leading-relaxed text-sm">
                {service.desc}
              </p>

              <Link to={`/services#${service.id}`}>
                <button className="text-dr-gold text-xs tracking-widest uppercase...">
                    Learn More <span>→</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;