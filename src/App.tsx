import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-black text-white flex flex-col">
          <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home onBookingClick={() => setIsBookingModalOpen(true)} />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <BookingModal 
            isOpen={isBookingModalOpen} 
            onClose={() => setIsBookingModalOpen(false)} 
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;