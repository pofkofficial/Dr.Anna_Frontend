import Hero from '../components/Home/Hero';
import BriefBio from '../components/Home/BriefBio';
import ServiceHighlights from '../components/Home/ServiceHighlights';
import Testimonial from '../components/Home/Testimonial';
// Note: As we build the following sections, we will create 
// separate files for them. For now, I am focusing on the Hero and Navbar.

function Home() {
  return (
    <>
      {/* 1. Navigation - Always visible */}
      <Hero />
      <BriefBio />
      <ServiceHighlights />
      <Testimonial />
    </>
  );
}

export default Home;