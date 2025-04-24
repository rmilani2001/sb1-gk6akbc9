import { Metadata } from 'next';
import BlogPage from '@/components/BlogPage';

export const metadata: Metadata = {
  title: "Blog | MixMasterMilani's Latest Events & Mixes",
  description: "Explore MixMasterMilani's latest events, mixes, and happenings in the Napa Valley music scene."
};

export default function Blog() {
  return <BlogPage />;
}