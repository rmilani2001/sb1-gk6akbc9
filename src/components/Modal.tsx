import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  iframeSrc?: string; // Optional iframe source
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, iframeSrc }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 bg-black/90 rounded-lg w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto custom-scrollbar">
        <div className="sticky top-0 z-20 flex justify-end bg-black/90 pt-4 px-4">
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          {isLoading && (
            <div className="text-center text-white mb-4">
              Please wait while the content loads...
            </div>
          )}
          {iframeSrc ? (
            <iframe
              src={iframeSrc}
              onLoad={handleIframeLoad}
              className={`w-full h-[70vh] rounded ${isLoading ? 'hidden' : ''}`}
              title="Modal Content"
            />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;