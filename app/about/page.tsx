import { Metadata } from 'next';
import AboutPage from '../components/AboutPage';

export const metadata: Metadata = {
  title: 'About MixMasterMilani | Napa Valley DJ & Music Curator',
  description: "Learn about MixMasterMilani's unique approach to curating sophisticated soundscapes for Napa Valley's premier events and venues."
};

export default function About() {
  return <AboutPage />;
}