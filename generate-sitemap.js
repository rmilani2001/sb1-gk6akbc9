import { create } from 'xmlbuilder2';
import { writeFileSync } from 'fs';
import { BlogPosts } from './src/pages/Blog.js';

const baseUrl = 'https://mixmastermilani.com';

// Static routes
const routes = [
  '',
  '/about',
  '/blog',
  '/contact'
];

// Add dynamic blog post routes
BlogPosts.forEach(post => {
  routes.push(`/blog/${post.slug}`);
});

const sitemap = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

routes.forEach(route => {
  sitemap.ele('url')
    .ele('loc').txt(`${baseUrl}${route}`).up()
    .ele('changefreq').txt(route === '' ? 'weekly' : 'monthly').up()
    .ele('priority').txt(route === '' ? '1.0' : '0.8').up();
});

const xml = sitemap.end({ prettyPrint: true });
writeFileSync('./dist/sitemap.xml', xml);