import ContactPreview from "../components/ContactPreview";
import DepartmentSection from "../components/DepartmentSection";
import FacultyGrid from "../components/FacultyGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TopBar from "../components/TopBar";

const Faculty = () => {
  const faculties = [
    {
      id: 1,
      name: "Abhinav Anand",
      designation: "Principal",
      degrees: "B.Pharma, D.Pharma",
      experience: "12 Years",
      image_path: "/principal.png",
    },
    {
      id: 2,
      name: "Vibuti Patel",
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
      name: "Rajesh Kr. Thakur",
      designation: "Lecturer",
      degrees: "B.Pharma",
      experience: "5 Years",
      image_path: "/rajesh.jpeg",
    },
  ];
  /*
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
  */

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
