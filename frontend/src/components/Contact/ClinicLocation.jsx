import React from 'react';
import { MapPin, Globe, Clock, Car } from 'lucide-react';

const ClinicLocation = () => {
  return (
    <section className="bg-[#050505] p-8 md:p-16 flex flex-col justify-between">
      <div className="space-y-12">
        <h2 className="text-white font-serif text-3xl">The Practice</h2>
        
        <div className="space-y-8">
          {/* Physical Location */}
          <div className="flex gap-6">
            <MapPin className="text-dr-gold shrink-0" size={24} />
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Dubai Clinic</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Cluster N, Jumeirah Lake Towers (JLT)<br />
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>

          {/* Remote Option */}
          <div className="flex gap-6">
            <Globe className="text-dr-gold shrink-0" size={24} />
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Global Consultation</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Secure Video Consultations available globally via Zoom/Teams for Clinical and Corporate services.
              </p>
            </div>
          </div>

          {/* Driving Help */}
          <div className="bg-white/5 p-6 border-l-2 border-dr-gold">
            <div className="flex items-center gap-2 mb-3">
              <Car className="text-dr-gold" size={16} />
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">Access & Parking</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed italic">
              Driving from First Al Khail St, take the service road after Cluster L. 
              Pass Cluster M traffic light, then take an immediate right into Cluster N.
            </p>
          </div>
        </div>
      </div>

      {/* Availability Hint */}
      <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4 text-gray-600">
        <Clock size={16} />
        <span className="text-[10px] uppercase tracking-widest font-medium">Standard Hours: Mon — Fri | 09:00 - 18:00 GST</span>
      </div>
    </section>
  );
};

export default ClinicLocation;