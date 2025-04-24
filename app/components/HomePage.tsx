'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Youtube, Instagram, Music2, Wine, Waves, Sparkles } from 'lucide-react';
import MixcloudIcon from './MixcloudIcon';
import SoundcloudIcon from './SoundcloudIcon';
import Modal from './Modal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-gradient">
            MixMasterMilani
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Elevating Napa & Sonoma's cocktail hours with sophisticated house vibes
          </p>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="primary-button flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Listen Now</span>
              </button>
              <Link 
                href="/contact"
                className="glass-button"
              >
                Book Me
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-8">
              <a
                href="https://www.mixcloud.com/MMMilani/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                title="Mixcloud"
                aria-label="Mixcloud"
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
                aria-label="Soundcloud"
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
                aria-label="YouTube"
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
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 glass-panel">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold gradient-text">
                Crafting Unforgettable Moments Through Music
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in creating immersive musical experiences that perfectly complement your event's atmosphere. From sun-kissed poolside sessions to elegant winery sunsets, each set is thoughtfully curated to enhance the moment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-panel p-6">
                  <Music2 className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Genre Fusion</h3>
                  <p className="text-gray-400">Seamlessly blending house, electronic, and pop into sophisticated soundscapes</p>
                </div>
                <div className="glass-panel p-6">
                  <Wine className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Refined Vibes</h3>
                  <p className="text-gray-400">Perfect for upscale events, from wine tastings to cocktail soirées</p>
                </div>
                <div className="glass-panel p-6">
                  <Waves className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Flow Master</h3>
                  <p className="text-gray-400">Expertly reading the crowd to maintain the perfect energy</p>
                </div>
                <div className="glass-panel p-6">
                  <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Custom Magic</h3>
                  <p className="text-gray-400">Every set tailored to your event's unique atmosphere</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image 
                src="/images/mixmastermilani.jpg"
                alt="MixMasterMilani in action"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Mixes Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Latest Mixes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-6">
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
              </div>
            </div>
            <div className="glass-panel p-6">
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
                  <p className="text-sm text-gray-400 italic">
                    Highlighted segment from a 3 hour live set at No Love Lost
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
                    Best moments from the Summer Release Party
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default HomePage;