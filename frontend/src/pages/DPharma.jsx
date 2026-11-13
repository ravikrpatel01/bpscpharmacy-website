import { Helmet } from "react-helmet-async";

import PageBanner from "../components/PageBanner";
import ApplicationProcess from "../components/ApplicationSuccess";
import CareerOpportunities from "../components/CareerOpportunities";
import ContactPreview from "../components/ContactPreview";
import CourseDuration from "../components/CourseDuration";
import DPharmaOverview from "../components/DPharmaOverview";
import EligibilityCriteria from "../components/EligibilityCriteria";
import FeeStructure from "../components/FeeStructure";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RequiredDocuments from "../components/RequiredDocuments";
import TopBar from "../components/TopBar";

const DPharma = () => {
  const websiteUrl = "https://bpscollegeofpharmacy.org";

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          D.Pharm Course in Koderma, Jharkhand | Admission & Eligibility
        </title>

        <meta
          name="description"
          content="Explore the Diploma in Pharmacy (D.Pharm) course at BPSC College of Pharmacy, Domchanch, Koderma, Jharkhand. Check course duration, eligibility criteria, fee structure, admission process and career opportunities."
        />

        <meta
          name="keywords"
          content="D.Pharm College in Koderma, D.Pharm Course in Jharkhand, D.Pharm Admission 2026-27, Diploma in Pharmacy Koderma, Pharmacy College in Domchanch, D.Pharm Eligibility, D.Pharm Course Duration, D.Pharm Fee Structure, BPSC College of Pharmacy"
        />

        <meta name="author" content="BPSC College of Pharmacy" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Canonical URL */}
        <link rel="canonical" href={`${websiteUrl}/d-pharma`} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Diploma in Pharmacy (D.Pharm) | BPSC College of Pharmacy"
        />

        <meta
          property="og:description"
          content="Learn about the D.Pharm course at BPSC College of Pharmacy, Domchanch, Koderma. Explore eligibility, duration, fees, admission process and career opportunities."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content={`${websiteUrl}/d-pharma`} />

        <meta property="og:site_name" content="BPSC College of Pharmacy" />

        <meta property="og:image" content={`${websiteUrl}/og-image.jpg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="D.Pharm Course in Koderma | BPSC College of Pharmacy"
        />

        <meta
          name="twitter:description"
          content="Explore D.Pharm course details, eligibility, fees, admission process and career opportunities at BPSC College of Pharmacy, Koderma, Jharkhand."
        />

        <meta name="twitter:image" content={`${websiteUrl}/og-image.jpg`} />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Domchanch, Koderma, Jharkhand" />
      </Helmet>

      <TopBar />
      <Navbar />

      <PageBanner
        title="Diploma in Pharmacy (D.Pharma)"
        subtitle="Build a successful career in healthcare and pharmaceutical sciences through our industry-oriented D.Pharma program."
      />

      <DPharmaOverview />

      <CourseDuration />

      <EligibilityCriteria />

      <FeeStructure />

      <ApplicationProcess />

      <RequiredDocuments />

      <CareerOpportunities />

      <ContactPreview />

      <Footer />
    </>
  );
};

export default DPharma;
