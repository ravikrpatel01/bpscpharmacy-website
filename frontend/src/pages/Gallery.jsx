import { Helmet } from "react-helmet-async";

import ContactPreview from "../components/ContactPreview";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TopBar from "../components/TopBar";

const Gallery = () => {
  const websiteUrl = "https://bpscollegeofpharmacy.org";

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
      <Helmet>
        {/* Basic SEO */}
        <title>
          Campus Gallery | BPSC College of Pharmacy, Koderma, Jharkhand
        </title>

        <meta
          name="description"
          content="Explore the campus gallery of BPSC College of Pharmacy, Domchanch, Koderma, Jharkhand. View student activities, pharmacy laboratories, classrooms, events, workshops and campus life."
        />

        <meta
          name="keywords"
          content="BPSC College of Pharmacy Gallery, Pharmacy College Campus Koderma, D.Pharm College Photos Jharkhand, Pharmacy Laboratory Photos, Pharmacy Students Activities, College Events Domchanch, Pharmacy College Infrastructure"
        />

        <meta name="author" content="BPSC College of Pharmacy" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Canonical URL */}
        <link rel="canonical" href={`${websiteUrl}/gallery`} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Campus Gallery | BPSC College of Pharmacy"
        />

        <meta
          property="og:description"
          content="Take a look at student activities, laboratories, classrooms, events and campus life at BPSC College of Pharmacy, Domchanch, Koderma."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content={`${websiteUrl}/gallery`} />

        <meta property="og:site_name" content="BPSC College of Pharmacy" />

        <meta property="og:image" content={`${websiteUrl}/pharma1.jpeg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Campus Gallery | BPSC College of Pharmacy"
        />

        <meta
          name="twitter:description"
          content="Explore pharmacy laboratories, student activities, college events and campus life in our gallery."
        />

        <meta name="twitter:image" content={`${websiteUrl}/pharma1.jpeg`} />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Domchanch, Koderma, Jharkhand" />
      </Helmet>

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
