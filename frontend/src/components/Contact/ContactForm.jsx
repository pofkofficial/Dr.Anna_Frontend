import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-dr-black p-8 md:p-16">
      <h2 className="text-white font-serif text-3xl mb-8">Secure Inquiry</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-dr-gold text-[10px] uppercase tracking-widest font-bold">Full Name</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-dr-gold outline-none transition-all" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-dr-gold text-[10px] uppercase tracking-widest font-bold">Email Address</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-dr-gold outline-none transition-all" placeholder="john@example.com" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-dr-gold text-[10px] uppercase tracking-widest font-bold">Area of Interest</label>
          <select className="w-full bg-white/5 border border-white/10 p-4 text-gray-400 focus:border-dr-gold outline-none transition-all appearance-none">
            <option>Clinical Psychology</option>
            <option>Corporate Mentoring</option>
            <option>Forensic Evaluation</option>
            <option>Health & Vitality</option>
            <option>Spiritual Psychology</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-dr-gold text-[10px] uppercase tracking-widest font-bold">Your Message</label>
          <textarea rows="5" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-dr-gold outline-none transition-all" placeholder="How can I assist you?"></textarea>
        </div>

        <button className="w-full bg-dr-gold text-black font-bold uppercase tracking-[0.2em] py-5 hover:bg-white transition-colors duration-500">
          Send Confidential Inquiry
        </button>
      </form>
    </section>
  );
};

export default ContactForm;