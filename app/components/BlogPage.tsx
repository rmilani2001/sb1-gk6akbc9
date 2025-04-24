'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { BlogPosts } from '@/data/blog';

const BlogPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 gradient-text">
          Blog
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {BlogPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group glass-panel transition-transform hover:scale-[1.02] ${
                post.isUpcoming ? 'border-2 border-purple-500/50' : ''
              }`}
            >
              <div className="relative h-[300px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                  <h2 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{post.title}</h2>
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
              
              <div className="p-6">
                <p className="text-gray-300 line-clamp-2">{post.content[0]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;