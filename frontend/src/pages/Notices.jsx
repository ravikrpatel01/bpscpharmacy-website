import { useState } from "react";
import { Helmet } from "react-helmet-async";

import ContactPreview from "../components/ContactPreview";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NoticeFilter from "../components/NoticeFilter";
import NoticeList from "../components/NoticeList";
import PageBanner from "../components/PageBanner";
import TopBar from "../components/TopBar";

const Notices = () => {
  const websiteUrl = "https://bpscollegeofpharmacy.org";

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");

  const notices = [
    {
      id: 1,
      title: "Admission Open for D.Pharma Session 2026-27",
      description:
        "Applications are invited for admission to the D.Pharma program.",
      date: "12 June 2026",
      type: "admission",
      isImportant: true,
    },
    {
      id: 2,
      title: "Practical Examination Schedule Released",
      description:
        "Students are advised to check the practical examination schedule.",
      date: "10 June 2026",
      type: "exam",
      isImportant: false,
    },
    {
      id: 3,
      title: "Orientation Program for New Students",
      description:
        "Orientation program will be conducted for newly admitted students.",
      date: "08 June 2026",
      type: "event",
      isImportant: false,
    },
    {
      id: 4,
      title: "Library Membership Registration",
      description: "Students can now register for library membership.",
      date: "05 June 2026",
      type: "general",
      isImportant: false,
    },
  ];

  const filteredNotices = notices
    .filter((notice) => {
      const matchesSearch = notice.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesType =
        filterType === "all"
          ? true
          : filterType === "important"
            ? notice.isImportant
            : notice.type === filterType;

      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sortOrder === "latest") {
        return b.id - a.id;
      }
      return a.id - b.id;
    });

  return (
    <div>
      <Helmet>
        {/* Basic SEO */}
        <title>
          Latest Notices & Announcements | BPSC College of Pharmacy, Koderma
        </title>

        <meta
          name="description"
          content="Check the latest admission announcements, examination schedules, student notices, events and important updates from BPSC College of Pharmacy, Domchanch, Koderma, Jharkhand."
        />

        <meta
          name="keywords"
          content="BPSC College of Pharmacy Notices, Pharmacy College Latest Notices Koderma, D.Pharm Admission Notice 2026-27, Pharmacy Examination Notice, College Announcements Jharkhand, Pharmacy College Updates Domchanch"
        />

        <meta name="author" content="BPSC College of Pharmacy" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Canonical URL */}
        <link rel="canonical" href={`${websiteUrl}/notices`} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Latest Notices & Announcements | BPSC College of Pharmacy"
        />

        <meta
          property="og:description"
          content="Stay updated with admission notices, examination schedules, events and important announcements from BPSC College of Pharmacy, Koderma."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content={`${websiteUrl}/notices`} />

        <meta property="og:site_name" content="BPSC College of Pharmacy" />

        <meta property="og:image" content={`${websiteUrl}/og-image.jpg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="College Notices | BPSC College of Pharmacy"
        />

        <meta
          name="twitter:description"
          content="Read the latest D.Pharm admission, examination and college announcements from BPSC College of Pharmacy."
        />

        <meta name="twitter:image" content={`${websiteUrl}/og-image.jpg`} />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Domchanch, Koderma, Jharkhand" />
      </Helmet>

      <TopBar />
      <Navbar />

      <PageBanner
        title="Notice Board"
        subtitle="Stay updated with the latest announcements, admissions, examinations, and important notices."
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <NoticeFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterType={filterType}
            setFilterType={setFilterType}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          <NoticeList notices={filteredNotices} />
        </div>
      </section>

      <ContactPreview />
      <Footer />
    </div>
  );
};

export default Notices;
