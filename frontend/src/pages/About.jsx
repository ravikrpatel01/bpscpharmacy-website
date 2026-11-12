import CollegeOverview from "../components/CollegeOverview";
import ContactPreview from "../components/ContactPreview";
import Footer from "../components/Footer";
import InfrastructureSection from "../components/InfrastructureSection";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TopBar from "../components/TopBar";
import VisionMission from "../components/VisionMission";

const About = () => {
  return (
    <div>
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
