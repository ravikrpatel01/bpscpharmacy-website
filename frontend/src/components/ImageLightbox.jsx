import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageLightbox = ({ images, currentIndex, setCurrentIndex, onClose }) => {
  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        <FaTimes />
      </button>

      {/* Previous */}
      <button
        onClick={prevImage}
        className="absolute left-6 text-white text-2xl"
      >
        <FaChevronLeft />
      </button>

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="Gallery"
        className="max-w-[90%] max-h-[85vh] object-contain rounded-xl"
      />

      {/* Next */}
      <button
        onClick={nextImage}
        className="absolute right-6 text-white text-2xl"
      >
        <FaChevronRight />
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageLightbox;
