import { Helmet } from "react-helmet-async";

import CollegeOverview from "../components/CollegeOverview";
import ContactPreview from "../components/ContactPreview";
import Footer from "../components/Footer";
import InfrastructureSection from "../components/InfrastructureSection";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TopBar from "../components/TopBar";
import VisionMission from "../components/VisionMission";

const About = () => {
  const websiteUrl = "https://bpscollegeofpharmacy.org";
  const pageUrl = `${websiteUrl}/about`;

  return (
    <div>
      {/* SEO CONFIGURATION */}
      <Helmet>
        {/* Primary SEO */}
        <title>About Us | BPSC College of Pharmacy, Koderma, Jharkhand</title>

        <meta
          name="description"
          content="Learn about Baijnath Prasad Snehi College of Pharmacy, Domchanch, Koderma, Jharkhand. Explore our institutional vision, mission, infrastructure and commitment to quality Diploma in Pharmacy education."
        />

        <meta
          name="keywords"
          content="About BPSC College of Pharmacy, Baijnath Prasad Snehi College, Pharmacy College in Domchanch, D.Pharm College Koderma, Pharmacy Education Jharkhand, Pharmacy College Infrastructure, D.Pharm Institute Jharkhand"
        />

        <meta
          name="author"
          content="Baijnath Prasad Snehi College of Pharmacy"
        />

        <meta name="robots" content="index, follow" />

        <meta name="language" content="English" />

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="About BPSC College of Pharmacy | Koderma, Jharkhand"
        />

        <meta
          property="og:description"
          content="Discover Baijnath Prasad Snehi College of Pharmacy, Domchanch, Koderma. Learn about our vision, mission, infrastructure and commitment to pharmacy education."
        />

        <meta property="og:url" content={pageUrl} />

        <meta property="og:image" content={`${websiteUrl}/bpsc_logo.png`} />

        <meta
          property="og:site_name"
          content="Baijnath Prasad Snehi College of Pharmacy"
        />

        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="About Us | BPSC College of Pharmacy"
        />

        <meta
          name="twitter:description"
          content="Learn about our institution, vision, mission and infrastructure at Baijnath Prasad Snehi College of Pharmacy, Koderma, Jharkhand."
        />

        <meta name="twitter:image" content={`${websiteUrl}/bpsc_logo.png`} />

        {/* Geographic SEO */}
        <meta name="geo.region" content="IN-JH" />

        <meta name="geo.placename" content="Domchanch, Koderma, Jharkhand" />
      </Helmet>

      {/* WEBSITE CONTENT */}
      <TopBar />
      <Navbar />

      <PageBanner
        title="About Us"
        subtitle="Learn more about our institution, vision, mission, and commitment to quality pharmacy education."
      />

      <CollegeOverview />
      <VisionMission />
      <InfrastructureSection />
      <ContactPreview />
      <Footer />
    </div>
  );
};

export default About;
