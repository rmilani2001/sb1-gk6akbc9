import React from 'react';
import Link from 'next/link';
import { Instagram, Youtube, Heart } from 'lucide-react';
import MixcloudIcon from './MixcloudIcon';
import SoundcloudIcon from './SoundcloudIcon';

const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              MixMasterMilani
            </h3>
            <p className="text-gray-400">
              Elevating Napa & Sonoma's cocktail hours with sophisticated house vibes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.mixcloud.com/MMMilani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="Mixcloud"
              >
                <MixcloudIcon className="w-6 h-6" />
              </a>
              <a
                href="https://soundcloud.com/mixmastermilani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="Soundcloud"
              >
                <SoundcloudIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCbitCJi02Q4RtNo1nzN-s-Q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/mixmastermilani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-pink-500" /> in Napa Valley
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;