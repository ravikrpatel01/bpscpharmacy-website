import { Helmet } from "react-helmet-async";

import AdmissionBanner from "../components/AdmissionBanner";
import AdmissionForm from "../components/AdmissionForm";
import ApplicationProcess from "../components/ApplicationSuccess";
import ContactPreview from "../components/ContactPreview";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const Admission = () => {
  const websiteUrl = "https://bpscollegeofpharmacy.org";

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          D.Pharm Admission 2026-27 in Koderma, Jharkhand | Apply Online
        </title>

        <meta
          name="description"
          content="Apply for D.Pharm admission 2026-27 at BPSC College of Pharmacy, Domchanch, Koderma, Jharkhand. Explore the admission process and submit your application for the Diploma in Pharmacy course."
        />

        <meta
          name="keywords"
          content="D.Pharm Admission 2026-27, D.Pharm Admission in Koderma, Pharmacy College Admission Jharkhand, Diploma in Pharmacy Admission, D.Pharm Apply Online, Pharmacy College in Domchanch, BPSC College of Pharmacy Admission"
        />

        <meta name="author" content="BPSC College of Pharmacy" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Canonical URL */}
        <link rel="canonical" href={`${websiteUrl}/admission`} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="D.Pharm Admission 2026-27 | BPSC College of Pharmacy"
        />

        <meta
          property="og:description"
          content="Start your pharmacy education with BPSC College of Pharmacy, Domchanch, Koderma. Check admission details and apply for the D.Pharm course."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content={`${websiteUrl}/admission`} />

        <meta property="og:site_name" content="BPSC College of Pharmacy" />

        <meta property="og:image" content={`${websiteUrl}/og-image.jpg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="D.Pharm Admission 2026-27 | BPSC College of Pharmacy"
        />

        <meta
          name="twitter:description"
          content="Apply for Diploma in Pharmacy at BPSC College of Pharmacy, Domchanch, Koderma, Jharkhand."
        />

        <meta name="twitter:image" content={`${websiteUrl}/og-image.jpg`} />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Domchanch, Koderma, Jharkhand" />
      </Helmet>

      <TopBar />
      <Navbar />

      <AdmissionBanner />

      <ApplicationProcess />

      <AdmissionForm />

      <ContactPreview />

      <Footer />
    </>
  );
};

export default Admission;
