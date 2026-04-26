import React from 'react';
import { Award, BookOpen, ShieldCheck } from 'lucide-react';

const Credentials = () => {
  const degrees = [
    { title: "PhD in Clinical Psychology", sub: "United Kingdom" },
    { title: "Clinical Criminology & Forensic Psychology", sub: "Master's Degree, Italy" },
    { title: "Organizational Psychology", sub: "First Honors Degree, Italy" },
    { title: "Behavioral Mental Health", sub: "First Honors Degree, Italy" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-dr-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-dr-gold font-serif text-3xl mb-4">Success Pillars</h2>
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em]">Licensed Expertise & Academic Excellence</p>
        </div>

        {/* Degrees List */}
        <div className="grid grid-cols-1 gap-6 mb-20">
          {degrees.map((item, index) => (
            <div key={index} className="group border border-dr-gold/10 p-8 flex justify-between items-center hover:bg-dr-gold/5 transition-all">
              <div className="flex items-center gap-6">
                <BookOpen className="text-dr-gold/40 group-hover:text-dr-gold transition-colors" size={24} />
                <div>
                  <h3 className="text-white font-serif text-xl">{item.title}</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Licenses Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/5 pt-16">
          <div className="text-center space-y-2">
            <ShieldCheck className="text-dr-gold mx-auto mb-2" size={20} />
            <p className="text-white text-[10px] font-bold uppercase tracking-tighter">Clinical Psychologist</p>
            <p className="text-gray-600 text-[10px]">Licensed Doctor</p>
          </div>
          <div className="text-center space-y-2">
            <ShieldCheck className="text-dr-gold mx-auto mb-2" size={20} />
            <p className="text-white text-[10px] font-bold uppercase tracking-tighter">Mental Health</p>
            <p className="text-gray-600 text-[10px]">Practitioner</p>
          </div>
          <div className="text-center space-y-2">
            <ShieldCheck className="text-dr-gold mx-auto mb-2" size={20} />
            <p className="text-white text-[10px] font-bold uppercase tracking-tighter">Organizational Psych</p>
            <p className="text-gray-600 text-[10px]">Strategic Consultant</p>
          </div>
          <div className="text-center space-y-2">
            <ShieldCheck className="text-dr-gold mx-auto mb-2" size={20} />
            <p className="text-white text-[10px] font-bold uppercase tracking-tighter">Lifestyle & Well-being</p>
            <p className="text-gray-600 text-[10px]">Consultant</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;