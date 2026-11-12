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
  return (
    <div>
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
