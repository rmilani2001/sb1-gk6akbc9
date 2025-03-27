import React, { useState } from 'react';
import Modal from './Modal';
import { Loader2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  eventType: string;
  date: string;
  time: string;
  location: string;
  message: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    eventType: '',
    date: '',
    time: '',
    location: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/.netlify/functions/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        const textResponse = await response.text();
        try {
          data = JSON.parse(textResponse);
        } catch (parseError) {
          console.error('Response parsing error:', parseError);
          console.log('Raw response:', textResponse);
          throw new Error('Invalid server response format');
        }
      } catch (error) {
        throw new Error('Failed to read server response');
      }

      if (!response.ok) {
        throw new Error(data?.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        eventType: '',
        date: '',
        time: '',
        location: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      console.error('Form submission error:', error);
    }
  };

  if (status === 'success') {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-300 mb-6">Thank you for your interest. I'll get back to you soon.</p>
          <button
            onClick={() => {
              setStatus('idle');
              onClose();
            }}
            className="px-6 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors"
          >
            Close
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Book MixMasterMilani
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-200">
            Vibe *
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select your vibe</option>
            <option value="sunset-winery">Sunset Soirée at the Winery 🌅</option>
            <option value="poolside">Poolside Paradise Mix 🏊‍♂️</option>
            <option value="cocktail">Upscale Cocktail Hour 🍸</option>
            <option value="garden-party">Garden Party Grooves 🌿</option>
            <option value="private-estate">Private Estate Elegance 🏡</option>
            <option value="rooftop">Rooftop Lounge Vibes 🌆</option>
            <option value="yacht">Yacht Club Beats ⛵</option>
            <option value="other">Custom Vibe (describe below) ✨</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-200">
              Event Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-200">
              Event Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-200">
            Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Venue name or address"
            className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200">
            Tell me about your dream event
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your vision - what kind of atmosphere are you looking to create? Any specific music styles or special moments you want to highlight?"
            className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {status === 'error' && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-4 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Sending...
            </>
          ) : (
            'Send Booking Request'
          )}
        </button>
      </form>
    </Modal>
  );
};

export default BookingModal;