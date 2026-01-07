
import React, { useState } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="px-6 max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="aspect-square bg-white/5 rounded-2xl overflow-hidden shadow-2xl border border-white/5 active:scale-95 transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedImg(img)}
          >
            <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img src={img} alt={`Resultado ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
          </div>
        ))}
      </div>

      {/* Simple Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[200] bg-black/98 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-10 right-10 text-gold-500 p-2 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative p-1 gold-gradient rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.2)]">
            <img 
              src={selectedImg} 
              className="max-w-full max-h-[80vh] rounded-[1.4rem] animate-[zoomIn_0.3s_ease-out]" 
              alt="Resultado Zoom" 
            />
          </div>
        </div>
      )}
      <style>{`
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
