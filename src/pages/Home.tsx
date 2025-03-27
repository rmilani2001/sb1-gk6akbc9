import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Youtube, Instagram, Music2, Wine, Waves, Sparkles } from 'lucide-react';
import MixcloudIcon from '../components/MixcloudIcon';
import SoundcloudIcon from '../components/SoundcloudIcon';
import Modal from '../components/Modal';

interface HomeProps {
  onBookingClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onBookingClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const drawBackground = (time: number) => {
      const w = canvas.width;
      const h = canvas.height;
      
      // Clear canvas
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, w, h);
      
      // Draw single bold wave
      ctx.beginPath();
      
      // Create smooth wave
      for (let x = 0; x <= w; x += 1) {
        const y = h * 0.5 + Math.sin(x * 0.002 + time * 0.001) * (h * 0.3);
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      // Bold gradient
      const gradient = ctx.createLinearGradient(0, 0, w, 0);
      const hue = (time * 0.05) % 360;
      gradient.addColorStop(0, `hsla(${hue}, 100%, 50%, 0.6)`);
      gradient.addColorStop(0.5, `hsla(${(hue + 60) % 360}, 100%, 60%, 0.8)`);
      gradient.addColorStop(1, `hsla(${(hue + 120) % 360}, 100%, 50%, 0.6)`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = h * 0.3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    };

    const animate = () => {
      time += 16;
      drawBackground(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>MixMasterMilani | Napa Valley's Premier House DJ</title>
        <meta name="description" content="Elevating Napa & Sonoma's cocktail hours with sophisticated house vibes. Book MixMasterMilani for your next upscale event." />
      </Helmet>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              MixMasterMilani
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Elevating Napa & Sonoma's cocktail hours with sophisticated house vibes
            </p>
            <div className="flex flex-col items-center space-y-6">
              <div className="flex space-x-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Listen Now</span>
                </button>
                <button 
                  onClick={onBookingClick}
                  className="px-8 py-3 rounded-full border-2 border-purple-500 text-white font-semibold hover:bg-purple-500/10 transition-colors"
                >
                  Book Me
                </button>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-8">
                <a
                  href="https://www.mixcloud.com/MMMilani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  title="Mixcloud"
                >
                  <MixcloudIcon className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors fill-current" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    Mixcloud
                  </span>
                </a>
                <a
                  href="https://soundcloud.com/mixmastermilani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  title="Soundcloud"
                >
                  <SoundcloudIcon className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors fill-current" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    Soundcloud
                  </span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCbitCJi02Q4RtNo1nzN-s-Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  title="YouTube"
                >
                  <Youtube className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    YouTube
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/mixmastermilani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  title="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Crafting Unforgettable Moments Through Music
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in creating immersive musical experiences that perfectly complement your event's atmosphere. From sun-kissed poolside sessions to elegant winery sunsets, each set is thoughtfully curated to enhance the moment.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                    <Music2 className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Genre Fusion</h3>
                    <p className="text-gray-400">Seamlessly blending house, electronic, and pop into sophisticated soundscapes</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                    <Wine className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Refined Vibes</h3>
                    <p className="text-gray-400">Perfect for upscale events, from wine tastings to cocktail soirées</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                    <Waves className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Flow Master</h3>
                    <p className="text-gray-400">Expertly reading the crowd to maintain the perfect energy</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                    <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Custom Magic</h3>
                    <p className="text-gray-400">Every set tailored to your event's unique atmosphere</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/images/mixmastermilani.jpg"
                  alt="MixMasterMilani in action"
                  className="object-cover w-full h-full rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>

          {/* Listen Now Modal */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="pt-8">
              <h2 className="text-2xl font-bold mb-6 text-center">No Love Lost Summer Release Party</h2>
              <iframe 
                width="100%" 
                height="180" 
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fno-love-lost-summer-release-party-9-5-2024%2F" 
                frameBorder="0"
                title="No Love Lost Summer Release Party"
                className="rounded"
              />
            </div>
          </Modal>

          {/* Mixes Section */}
          <div className="py-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Mixes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Featured Long Sets</h3>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  <iframe 
                    width="100%" 
                    height="120" 
                    src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fno-love-lost-winery-full-set-9-25-2024%2F" 
                    frameBorder="0"
                    title="No Love Lost Winery Full Set"
                    className="rounded"
                  />
                  <iframe 
                    width="100%" 
                    height="120" 
                    src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fno-love-lost-summer-release-party-9-5-2024%2F" 
                    frameBorder="0"
                    title="No Love Lost Summer Release Party"
                    className="rounded"
                  />
                  <iframe 
                    width="100%" 
                    height="120" 
                    src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Finternational-yoga-day-set-6-21-24%2F" 
                    frameBorder="0"
                    title="International Yoga Day Set"
                    className="rounded"
                  />
                  <iframe 
                    width="100%" 
                    height="120" 
                    src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fno-love-lost-5-10-2024%2F" 
                    frameBorder="0"
                    title="No Love Lost May Set"
                    className="rounded"
                  />
                  <iframe 
                    width="100%" 
                    height="120" 
                    src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fdecember-sunset-organic-house-mix-office-session-003%2F" 
                    frameBorder="0"
                    title="December Sunset Organic House Mix"
                    className="rounded"
                  />
                  <iframe 
                    width="100%" 
                    height="120" 
                    src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fbubbly-beats%2F" 
                    frameBorder="0"
                    title="Bubbly Beats"
                    className="rounded"
                  />
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Short Mixes</h3>
                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  <div className="space-y-2">
                    <iframe 
                      width="100%" 
                      height="120" 
                      src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fhouse-vibes-at-no-love-lost-winery-9-22-24%2F" 
                      frameBorder="0"
                      title="House Vibes at No Love Lost Winery"
                      className="rounded"
                    />
                    <p className="text-sm text-gray-400  italic">
                      Highlighted segment from a 3 hour live set I recorded at No Love Lost on 9-22-2024. Full set available on this page.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <iframe 
                      width="100%" 
                      height="120" 
                      src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fmixmaster-theatre-highlights-003%2F" 
                      frameBorder="0"
                      title="MixMaster Theatre Highlights 003"
                      className="rounded"
                    />
                    <p className="text-sm text-gray-400 italic">
                      Highlighted segment from a 3 hour live set I recorded at No Love Lost on 8-5-2024 for their Summer Release Party. Full set available on this page.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <iframe 
                      width="100%" 
                      height="120" 
                      src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fknow-ya-know%2F" 
                      frameBorder="0"
                      title="Know Ya Know"
                      className="rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <iframe 
                      width="100%" 
                      height="120" 
                      src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fmastermix-theatre-episode-001-hip-hip-hop%2F" 
                      frameBorder="0"
                      title="MasterMix Theatre Episode 001"
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;