import ContactPreview from "../components/ContactPreview";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TopBar from "../components/TopBar";

const Gallery = () => {
  const galleryImages = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
    "/images/gallery/gallery-7.jpg",
    "/images/gallery/gallery-8.jpg",
    "/images/gallery/gallery-9.jpg",
    "/images/gallery/gallery-10.jpg",
    "/images/gallery/gallery-11.jpg",
    "/images/gallery/gallery-12.jpg",
  ];

  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner
        title="Gallery"
        subtitle="Explore our campus, laboratories, academic activities, events, and student life through our gallery."
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Campus Gallery
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-5">
              Moments From Our Campus
            </h2>

            <p className="text-slate-600 mt-4 leading-7">
              Discover our classrooms, laboratories, seminars, workshops,
              cultural programs, and student activities.
            </p>
          </div>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <ContactPreview />
      <Footer />
    </>
  );
};

export default Gallery;
