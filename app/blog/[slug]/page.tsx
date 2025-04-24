import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostPage from '@/app/components/BlogPostPage';
import { BlogPosts } from '@/app/data/blog';

export async function generateStaticParams() {
  return BlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BlogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.content[0],
    openGraph: {
      title: post.title,
      description: post.content[0],
      images: [post.image]
    }
  };
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = BlogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}