import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
function App() {
  return (
    <HelmetProvider>
      <div className="bg-dr-black min-h-screen flex flex-col selection:bg-dr-gold selection:text-black">
        {/* Navigation - Stays at the top */}
        <Navbar />

        {/* Main Content - Changes based on Route */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirect any unknown paths to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer - Stays at the bottom */}
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;