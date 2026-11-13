import { Helmet } from "react-helmet-async";

import AboutPreview from "../components/AboutPreview";
import ContactPreview from "../components/ContactPreview";
import CourseHighlights from "../components/CourseHighlights";
import EventHighlights from "../components/EventHighlights";
import FacilitiesSection from "../components/FacilitiesSection";
import Footer from "../components/Footer";
import GalleryPreview from "../components/GalleryPreview";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import NoticeBoardPreview from "../components/NoticeBoardPreview";
import PrincipalMessage from "../components/PrincipalMessage";
import TestimonialsSection from "../components/TestimonialsSection";
import TopBar from "../components/TopBar";

const Home = () => {
  const websiteUrl = "https://bpscollegeofpharmacy.org";

  return (
    <div>
      {/* SEO CONFIGURATION */}
      <Helmet>
        {/* Primary SEO */}
        <title>
          Best D.Pharm College in Koderma, Jharkhand | BPS College of Pharmacy
        </title>

        <meta
          name="description"
          content="Looking for the best D.Pharm college in Domchanch, Koderma, Jharkhand? Explore Baijnath Prasad Snehi College of Pharmacy for quality pharmacy education, experienced faculty, practical training and career opportunities. Apply for D.Pharm Admission 2026-27."
        />

        <meta
          name="keywords"
          content="Best D.Pharm College in Koderma, Best Pharmacy College in Domchanch, D.Pharm College in Jharkhand, Pharmacy College Koderma, D.Pharm Admission 2026-27, Diploma in Pharmacy, Baijnath Prasad Snehi College of Pharmacy, D.Pharm Course in Koderma"
        />

        <meta
          name="author"
          content="Baijnath Prasad Snehi College of Pharmacy"
        />

        <meta name="robots" content="index, follow" />

        <meta name="language" content="English" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical URL */}
        <link rel="canonical" href={websiteUrl + "/"} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Best D.Pharm College in Koderma, Jharkhand | BPSC College of Pharmacy"
        />

        <meta
          property="og:description"
          content="Build your future in pharmaceutical education at Baijnath Prasad Snehi College of Pharmacy, Domchanch, Koderma, Jharkhand. Explore D.Pharm courses, facilities and admissions."
        />

        <meta property="og:url" content={websiteUrl + "/"} />

        <meta property="og:image" content={websiteUrl + "/bpsc_logo.png"} />

        <meta
          property="og:site_name"
          content="Baijnath Prasad Snehi College of Pharmacy"
        />

        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Best D.Pharm College in Koderma | BPSC College of Pharmacy"
        />

        <meta
          name="twitter:description"
          content="Explore D.Pharm education, practical training and admission opportunities at BPSC College of Pharmacy, Domchanch, Koderma."
        />

        <meta name="twitter:image" content={websiteUrl + "/bpsc_logo.png"} />

        {/* Geographic SEO */}
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Domchanch, Koderma, Jharkhand" />
      </Helmet>

      {/* WEBSITE CONTENT */}
      <TopBar />
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <PrincipalMessage />
      <CourseHighlights />
      <FacilitiesSection />
      <NoticeBoardPreview />
      <EventHighlights />
      <TestimonialsSection />
      <GalleryPreview />
      <ContactPreview />
      <Footer />
    </div>
  );
};

export default Home;
