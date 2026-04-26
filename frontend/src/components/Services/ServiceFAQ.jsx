import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long is a typical session?",
    answer: "Standard clinical and lifestyle sessions are 50 minutes. However, forensic evaluations and corporate leadership mentoring may require longer, specialized blocks of time which we will determine during our initial consultation."
  },
  {
    question: "Do you offer remote or in-person consultations?",
    answer: "I offer both. In-person sessions are held at my private space in Cluster N, JLT (Dubai). For international clients or those who prefer the comfort of their own environment, I provide secure, confidential video consultations."
  },
  {
    question: "Is my privacy guaranteed?",
    answer: "Absolutely. As a licensed PhD Psychologist, confidentiality is a legal and ethical cornerstone of my practice. Whether it is a clinical session or a sensitive corporate engagement, your data and dialogue remain strictly private."
  },
  {
    question: "Do you work with insurance providers?",
    answer: "I operate as a private practitioner to ensure the highest standard of personalized care. While I provide detailed receipts that you may submit to your provider for reimbursement, I recommend checking your specific coverage for 'Out-of-Network' psychological services."
  },
  {
    question: "How do I know which service is right for me?",
    answer: "The intersection of clinical, spiritual, and corporate needs can be complex. During our first discovery call, we will discuss your current challenges and goals to determine whether a clinical, organizational, or spiritual approach—or a blend of these—is most appropriate."
  }
];

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-dr-gold font-serif text-3xl md:text-4xl mb-4">Common Inquiries</h2>
          <div className="h-px w-12 bg-dr-gold/30 mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-white/5 last:border-none"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex justify-between items-center text-left transition-all group"
              >
                <span className={`font-serif text-lg md:text-xl transition-colors duration-300 ${
                  openIndex === index ? 'text-dr-gold' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {faq.question}
                </span>
                <span className="text-dr-gold ml-4">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-8' : 'max-h-0'
                }`}
              >
                <p className="text-gray-500 font-sans leading-relaxed text-sm md:text-base pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action below FAQ */}
        <div className="mt-20 text-center p-10 border border-dr-gold/10 bg-dr-black">
          <p className="text-white font-serif text-lg mb-6">Have a specific question not listed here?</p>
          <a 
            href="mailto:consultancy@dranna.com"
            className="inline-block border-b border-dr-gold text-dr-gold text-xs tracking-[0.3em] uppercase pb-1 hover:text-white hover:border-white transition-all"
          >
            Message the Clinic Directly
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServiceFAQ;