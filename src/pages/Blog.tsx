import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';

export interface BlogPost {
  title: string;
  date: string;
  location: string;
  content: string[];
  image: string;
  mixcloudUrl?: string;
  tracklist?: string[];
  isUpcoming?: boolean;
  slug: string;
}

export const BlogPosts: BlogPost[] = [
  {
    title: "Halloween Mocktail Mixer: Napa Valley Yoga Center",
    date: "October 26, 2024",
    location: "Napa Valley Yoga Center",
    content: [
      "Join me for the Halloween Mocktail Mixer—a circus-themed night of music, mocktails, and creative costumes at the Napa Valley Yoga Center. No alcohol required, just good vibes and great energy.",
      "Whether you're sober-curious or just love a good theme party, this event is about connection, music, and creativity."
    ],
    image: "/images/napa-yoga-center.jpg",
    isUpcoming: true,
    slug: "halloween-mocktail-mixer-2024"
  },
  {
    title: "No Love Lost Session: Full Set & House Mix",
    date: "September 25, 2024",
    location: "No Love Lost Winery, Napa",
    content: [
      "This special session at No Love Lost Winery included two unique mixes, each capturing a distinct energy from the evening.",
      "The Full Set kicked off with a blend of soul, funk, R&B, and indie—featuring tracks by Jungle, The Isley Brothers, Talking Heads, and Frank Ocean. It was the perfect start to an engaging and laid-back evening.",
      "The House Mix picked up the tempo, highlighting rhythmic house and electronic tracks from artists like Fred again.., Dombresky, and Floramour. Perfect for late-night energy."
    ],
    image: "/images/no-love-lost-winery-dj-napa.webp",
    mixcloudUrl: "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fno-love-lost-winery-full-set-9-25-2024%2F",
    slug: "no-love-lost-session-september-2024"
  },
  {
    title: "International Yoga Day Vibes",
    date: "June 21, 2024",
    location: "Napa Valley Yoga Center",
    content: [
      "I had the honor of performing a live set during the Napa Valley Yoga Center's International Yoga Day Open House. The event was a celebration of movement, mindfulness, and music—an immersive experience curated for both body and soul.",
      "The set featured a blend of Afro House, Latin grooves, and electronic soundscapes, designed to complement the energy of the yoga practice and spiritual intention."
    ],
    image: "/images/napa-yoga-center-international-yoga-day-dj-2024.png",
    mixcloudUrl: "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Finternational-yoga-day-set-6-21-24%2F",
    tracklist: [
      "CKay – Love Nwantiti Remix",
      "Navdeep – Chandigarh Breeze",
      "Childish Gambino – Feels Like Summer",
      "MALFNKTION – Samsara",
      "Koresma & Richard Houng – Trails",
      "Teno Afrika – Where Are You Now",
      "Angelo Ferreri & TSOS – Jingo",
      "Emmanuel Jal – Kuar (FNX Omar Edit)",
      "Banito – Sigua",
      "Kahani – Rampage",
      "Caso – Pienso En Ti"
    ],
    slug: "international-yoga-day-2024"
  },
  {
    title: "Sunset Vibes at No Love Lost Winery",
    date: "May 25, 2024",
    location: "Downtown Napa, CA",
    content: [
      "I performed a 2.5-hour set at No Love Lost Winery in the heart of downtown Napa. The parklet space on Clinton Street provided a perfect backdrop for a warm evening of music, wine, and good vibes.",
      "As the sun set and the sky turned golden, the crowd gathered to enjoy a carefully curated blend of house, disco, funk, and electronic tracks. It was the ideal soundtrack for a laid-back Napa night."
    ],
    image: "/images/wine-girl-dj-bottlerock-2024.webp",
    mixcloudUrl: "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FMMMilani%2Fno-love-lost-5-10-2024%2F",
    tracklist: [
      "Summer of Nights – Mak (feat. Tzar)",
      "Sete – BLOND, Francis Mercier, Amadou & Mariam",
      "Feel the Way I Do – The Jungle Giants (Remix)",
      "Roland Garros – Revers Gagnant (feat. Darlinn)",
      "Moody Blues – Saison",
      "Drop the Pressure – Claptone & Mylo (Sonny Fodera Remix)",
      "Ocean Drive – Duke Dumont (Purple Disco Machine Extended Mix)",
      "Moondance – Saxsquatch & Half an Orange",
      "Fireworks – Purple Disco Machine (feat. Moss Kena & The Knocks)"
    ],
    slug: "sunset-vibes-no-love-lost-may-2024"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Blog | MixMasterMilani's Latest Events & Mixes</title>
        <meta name="description" content="Explore MixMasterMilani's latest events, mixes, and happenings in the Napa Valley music scene." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Blog
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {BlogPosts.map((post) => (
            <Link 
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={`group bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm transition-transform hover:scale-[1.02] ${
                post.isUpcoming ? 'border-2 border-purple-500/50' : ''
              }`}
            >
              <div className="relative h-[300px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
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

export default Blog;