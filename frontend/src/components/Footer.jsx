import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import logo from "/src/assets/Logo/logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  // Replace with her actual WhatsApp number (no + or spaces)
  const whatsappNumber = "YOUR_PHONE_NUMBER_HERE"; 
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Cluster+N+Jumeirah+Lake+Towers+Dubai";

  return (
    <footer className="bg-black border-t border-dr-gold/10 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & WhatsApp Column */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex-shrink-0 ml-2">
              <Link to="/" className="text-xl font-bold text-white flex items-center">
                <picture>
                  <source media="(min-width: 768px)" srcSet={logo} />
                  <img 
                    src= {logo}
                    alt="Company Logo" 
                    className="h-10" 
                  />
                </picture>
              </Link>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Bridging clinical mastery with spiritual depth to foster resilience, purpose, and total wellbeing.
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-5 py-3 rounded-sm text-xs font-bold tracking-widest hover:bg-[#25D366] hover:text-white transition-all duration-300 uppercase"
            >
              <MessageCircle size={18} />
              WhatsApp Me
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-sans text-xs uppercase tracking-[0.2em] font-bold">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="/home" className="hover:text-dr-gold transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-dr-gold transition-colors">About My Journey</a></li>
              <li><a href="/services" className="hover:text-dr-gold transition-colors">Areas of Expertise</a></li>
              <li><a href="#booking" className="hover:text-dr-gold transition-colors">Book a Session</a></li>
            </ul>
          </div>

          {/* Clickable Location Column */}
          <div className="space-y-6">
            <h4 className="text-white font-sans text-xs uppercase tracking-[0.2em] font-bold">Location</h4>
            <div className="space-y-4">
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-gray-500 hover:text-dr-gold transition-colors"
              >
                <MapPin size={20} className="text-dr-gold shrink-0 group-hover:animate-bounce" />
                <div>
                  <span className="block font-medium text-gray-300">Cluster N</span>
                  <span>Jumeirah Lake Towers, Dubai</span>
                  <p className="text-[10px] text-dr-gold/60 mt-2 uppercase tracking-widest">Tap to view map →</p>
                </div>
              </a>
              
              <div className="pt-2 border-t border-white/5">
                <p className="text-[10px] text-gray-600 leading-relaxed italic">
                  <strong>Driving Note:</strong> From First Al Khail St, take the service road after Cluster L. Pass Cluster M traffic light, then turn right into Cluster N.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Crisis Column */}
          <div className="space-y-6">
            <h4 className="text-white font-sans text-xs uppercase tracking-[0.2em] font-bold">Inquiries</h4>
            <ul className="space-y-4 text-sm text-gray-500 mb-6">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-dr-gold" />
                <a href="mailto:consultancy@dranna.com" className="hover:text-dr-gold transition-colors">consultancy@dranna.com</a>
              </li>
            </ul>
            
            <div className="p-5 bg-dr-black border border-dr-gold/5 rounded-sm">
              <h4 className="text-dr-gold font-sans text-[10px] uppercase tracking-[0.2em] mb-2">Crisis Notice</h4>
              <p className="text-gray-600 text-[10px] leading-relaxed">
                In a life-threatening crisis, please contact local emergency services immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © 2026 Dr. Anna Psychology. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;