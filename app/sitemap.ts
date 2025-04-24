import { MetadataRoute } from 'next';
import { BlogPosts } from '@/data/blog';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mixmastermilani.com';
  
  const routes = [
    '',
    '/about',
    '/blog',
    '/contact'
  ];

  const staticPages = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const blogPages = BlogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}