'use client';

import React from 'react';
import { Music, Headphones, Wine, Sparkles } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          About MixMasterMilani
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-xl text-gray-300">
              Welcome to my world of curated soundscapes and elevated experiences. As a DJ, I specialize in creating sophisticated musical journeys that perfectly complement the region's renowned hospitality and wine scene.
            </p>
            
            <div className="prose prose-invert max-w-none">
              <p>
                My mission is to enhance every moment with the perfect blend of music, creating an atmosphere that's both refined and engaging. Whether it's a sunset soirée at a prestigious winery, an intimate cocktail hour, or a high-energy private event, I bring a unique mix of expertise and musical intuition.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <Music className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">House & Electronic</h3>
                <p className="text-gray-400">Deep, melodic house mixed with organic elements</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <Headphones className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Lounge & Chill</h3>
                <p className="text-gray-400">Sophisticated downtempo and ambient beats</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <Wine className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Wine Country</h3>
                <p className="text-gray-400">Curated sounds for tasting rooms and events</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Special Events</h3>
                <p className="text-gray-400">Customized sets for memorable occasions</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/mixmastermilani.jpg" 
                  alt="MixMasterMilani performing" 
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">My Vibe</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-purple-400 text-xl">•</span>
                  <p className="text-gray-300">Deep House & Melodic Techno: Creating immersive soundscapes that evolve throughout the evening</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-purple-400 text-xl">•</span>
                  <p className="text-gray-300">Organic House: Incorporating natural elements and world music influences</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-purple-400 text-xl">•</span>
                  <p className="text-gray-300">Downtempo & Ambient: Perfect for creating sophisticated, laid-back atmospheres</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-purple-400 text-xl">•</span>
                  <p className="text-gray-300">Nu Disco & Indie Dance: Adding playful, uplifting elements to keep the energy flowing</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Event Specialties</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Winery Tasting Rooms & Release Parties</li>
                <li>• Upscale Cocktail Hours</li>
                <li>• Private Estate Events</li>
                <li>• Wellness & Yoga Sessions</li>
                <li>• Corporate Functions</li>
                <li>• Art Gallery Openings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;