import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "/src/assets/Logo/logo.png" 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 ${
      isScrolled || isOpen ? 'bg-dr-black border-b border-dr-gold/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        
          {/* Logo */}
          <div className="flex-shrink-0 ml-2">
            <Link to="/" className="text-xl font-bold text-white flex items-center">
              <picture>
                <source media="(min-width: 768px)" srcSet={logo} />
                <img 
                  src= {logo}
                  alt="Company Logo" 
                  className="h-8" 
                />
              </picture>
            </Link>
          </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-white font-sans uppercase text-xs tracking-[0.2em]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="hover:text-dr-gold transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block border border-dr-gold text-dr-gold px-6 py-2 text-xs tracking-widest hover:bg-dr-gold hover:text-black transition-all duration-500 uppercase font-medium">
          Book Session
        </button>

        {/* Hamburger Button */}
        <button 
          className="md:hidden text-dr-gold z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-dr-gold transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-dr-gold transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-0.5 w-full bg-dr-gold transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-dr-black transition-transform duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif tracking-widest hover:text-dr-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setIsOpen(false)}
            className="mt-4 border border-dr-gold text-dr-gold px-10 py-3 tracking-widest hover:bg-dr-gold hover:text-black transition-all font-medium uppercase text-sm"
          >
            Book Session
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;