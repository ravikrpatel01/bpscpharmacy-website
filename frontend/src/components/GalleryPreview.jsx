import { Link } from "react-router-dom";
import { FaImages, FaArrowRight } from "react-icons/fa";

const GalleryPreview = () => {
  const images = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Campus Gallery
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-4">
              Explore Our Campus Life
            </h2>

            <p className="text-slate-600 mt-3 max-w-2xl">
              Take a glimpse into our campus, laboratories, academic activities,
              events, and student life through our gallery.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            View Full Gallery
            <FaArrowRight />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            <FaImages />
            Explore Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
