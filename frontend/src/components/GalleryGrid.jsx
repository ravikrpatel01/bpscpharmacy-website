import { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import ImageLightbox from "./ImageLightbox";

const GalleryGrid = ({ images = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <FaSearchPlus className="text-white text-3xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <ImageLightbox
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default GalleryGrid;
