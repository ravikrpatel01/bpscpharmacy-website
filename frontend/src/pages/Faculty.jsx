import { Helmet } from "react-helmet-async";

import ContactPreview from "../components/ContactPreview";
import DepartmentSection from "../components/DepartmentSection";
import FacultyGrid from "../components/FacultyGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TopBar from "../components/TopBar";

const Faculty = () => {
  const websiteUrl = "https://bpscollegeofpharmacy.org";

  const faculties = [
    {
      id: 1,
      name: "Mr. Abhinav Anand",
      designation: "Principal",
      degrees: "B.Pharma, D.Pharma",
      experience: "12 Years",
      image_path: "/principal.png",
    },
    {
      id: 2,
      name: "Mr. Vibhuti Patel",
      designation: "Head of Department",
      degrees: "B.Pharma",
      experience: "8 Years",
      image_path: "/hod.png",
    },
    {
      id: 3,
      name: "Mr. Amit Thakur",
      designation: "Lecturer",
      degrees: "B. Pharma",
      experience: "6 Years",
      image_path: "/amit.png",
    },
    {
      id: 4,
      name: "Mr. Rajesh Kr. Thakur",
      designation: "Lecturer",
      degrees: "B.Pharma",
      experience: "5 Years",
      image_path: "/rajesh.jpeg",
    },
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          Pharmacy Faculty in Koderma, Jharkhand | BPSC College of Pharmacy
        </title>

        <meta
          name="description"
          content="Meet the faculty members of BPSC College of Pharmacy, Domchanch, Koderma, Jharkhand. Know about our Principal, Head of Department and experienced pharmacy lecturers."
        />

        <meta
          name="keywords"
          content="Pharmacy Faculty in Koderma, D.Pharm College Faculty Jharkhand, Pharmacy Teachers in Domchanch, BPSC College Faculty, Pharmacy Lecturer Koderma, Pharmacy College in Jharkhand"
        />

        <meta name="author" content="BPSC College of Pharmacy" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Canonical URL */}
        <link rel="canonical" href={`${websiteUrl}/faculty`} />

        {/* Open Graph SEO */}
        <meta
          property="og:title"
          content="Our Faculty | BPSC College of Pharmacy, Koderma"
        />

        <meta
          property="og:description"
          content="Explore the faculty members of BPSC College of Pharmacy, Domchanch, Koderma, Jharkhand, including our Principal, HOD and pharmacy lecturers."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content={`${websiteUrl}/faculty`} />

        <meta property="og:site_name" content="BPSC College of Pharmacy" />

        <meta property="og:image" content={`${websiteUrl}/principal.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Our Faculty | BPSC College of Pharmacy"
        />

        <meta
          name="twitter:description"
          content="Meet the experienced faculty members of BPSC College of Pharmacy, Domchanch, Koderma, Jharkhand."
        />

        <meta name="twitter:image" content={`${websiteUrl}/principal.png`} />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Domchanch, Koderma, Jharkhand" />
      </Helmet>

      <TopBar />
      <Navbar />

      <PageBanner
        title="Our Faculty"
        subtitle="Meet our experienced and dedicated faculty members who guide students towards academic excellence and professional success."
      />

      <DepartmentSection />

      <FacultyGrid faculties={faculties} />

      <ContactPreview />

      <Footer />
    </>
  );
};

export default Faculty;
