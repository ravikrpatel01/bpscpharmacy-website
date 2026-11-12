import ContactPreview from "../components/ContactPreview";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TopBar from "../components/TopBar";

const Gallery = () => {
  const galleryImages = [
    "/STUDENT1.jpeg",
    "/STUDENT2.jpeg",
    "/STUDENT3.jpeg",
    "/STUDENT4.jpeg",
    "/STUDENT5.jpeg",
    "/STUDENT7.jpeg",
    "/pharma1.jpeg",
    "/pharma3.jpeg",
    "/pharma4.jpeg",
    "/hero_img.jpeg",
    "/pharma5.jpeg",
    "/pharma6.jpeg",
    "/pharma7.jpeg",
    "/students.jpeg",
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
