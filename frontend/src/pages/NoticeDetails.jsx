import { Helmet } from "react-helmet-async";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const NoticeDetails = () => {
  const websiteUrl = "https://bpscollegeofpharmacy.org";

  return (
    <>
      <Helmet>
        <title>Notice Details | BPSC College of Pharmacy, Koderma</title>

        <meta
          name="description"
          content="Read the latest official notices, announcements and important updates from BPSC College of Pharmacy, Domchanch, Koderma, Jharkhand."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={`${websiteUrl}/notice`} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Notice Details | BPSC College of Pharmacy"
        />

        <meta
          property="og:description"
          content="Check the latest notices and announcements from BPSC College of Pharmacy, Koderma, Jharkhand."
        />

        <meta property="og:type" content="article" />

        <meta property="og:site_name" content="BPSC College of Pharmacy" />
      </Helmet>

      <TopBar />
      <Navbar />

      {/* Notice details content will be rendered here */}

      <Footer />
    </>
  );
};

export default NoticeDetails;
