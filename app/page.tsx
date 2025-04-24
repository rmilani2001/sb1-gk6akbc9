import { Metadata } from 'next';
import HomePage from './components/HomePage';

export const metadata: Metadata = {
  title: "MixMasterMilani | Napa Valley's Premier House DJ",
  description: "Elevating Napa & Sonoma's cocktail hours with sophisticated house vibes. Book MixMasterMilani for your next upscale event."
};

export default function Home() {
  return <HomePage />;
}