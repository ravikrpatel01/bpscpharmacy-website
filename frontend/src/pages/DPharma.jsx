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
  return (
    <>
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
