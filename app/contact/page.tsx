import { Metadata } from 'next';
import ContactPage from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact | MixMasterMilani',
  description: 'Get in touch with MixMasterMilani for your next event in Napa Valley.'
};

export default function Contact() {
  return <ContactPage />;
}