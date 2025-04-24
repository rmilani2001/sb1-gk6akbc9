'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Clock, Music, ArrowLeft } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage = ({ post }: BlogPostPageProps) => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/blog"
          className="inline-flex items-center text-purple-500 hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        <article className={`glass-panel ${
          post.isUpcoming ? 'border-2 border-purple-500/50' : ''
        }`}>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            {post.isUpcoming && (
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold">
                  Upcoming Event
                </span>
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{post.location}</span>
                </div>
                {post.isUpcoming && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>6:00 PM – 9:00 PM</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="prose prose-invert max-w-none">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-gray-300">{paragraph}</p>
              ))}
              
              {post.isUpcoming && (
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold">Event Details:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Live DJ set featuring Halloween-inspired house and electronic tracks</li>
                    <li>Circus and costume-friendly atmosphere</li>
                    <li>Handcrafted zero-proof mocktails</li>
                    <li>Gourmet bites by Chef Peter Hall</li>
                    <li>Tickets: $30 – Available on the Mindbody app</li>
                  </ul>
                </div>
              )}
            </div>
            
            {post.mixcloudUrl && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Music className="w-5 h-5" />
                  Listen to the Set
                </h3>
                <iframe 
                  width="100%" 
                  height="120" 
                  src={post.mixcloudUrl}
                  frameBorder="0"
                  title={post.title}
                  className="rounded-lg"
                />
              </div>
            )}
            
            {post.tracklist && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Tracklist Highlights</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {post.tracklist.map((track, i) => (
                    <li key={i}>{track}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;