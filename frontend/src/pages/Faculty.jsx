import axios from "axios";
import { useEffect, useState } from "react";
import ContactPreview from "../components/ContactPreview";
import DepartmentSection from "../components/DepartmentSection";
import FacultyGrid from "../components/FacultyGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TopBar from "../components/TopBar";

const Faculty = () => {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/faculties`);
        console.log(response.data);

        setFaculties(response.data);
      } catch (error) {
        console.error("Error fetching faculties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculties();
  }, []);

  return (
    <>
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
