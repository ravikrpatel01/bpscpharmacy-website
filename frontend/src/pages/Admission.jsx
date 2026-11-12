import AdmissionBanner from "../components/AdmissionBanner";
import AdmissionForm from "../components/AdmissionForm";
import ApplicationProcess from "../components/ApplicationSuccess";
import ContactPreview from "../components/ContactPreview";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const Admission = () => {
  return (
    <>
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
