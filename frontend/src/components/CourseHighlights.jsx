import {
  FaFlask,
  FaUserMd,
  FaBriefcaseMedical,
  FaCertificate,
  FaHospital,
  FaBookMedical,
} from "react-icons/fa";

const CourseHighlights = () => {
  const highlights = [
    {
      icon: <FaBookMedical />,
      title: "Industry-Oriented Curriculum",
      description:
        "Comprehensive syllabus covering pharmaceutical sciences and healthcare practices.",
    },
    {
      icon: <FaFlask />,
      title: "Modern Laboratories",
      description:
        "Well-equipped labs for practical learning and hands-on experience.",
    },
    {
      icon: <FaUserMd />,
      title: "Experienced Faculty",
      description: "Learn from qualified and experienced pharmacy educators.",
    },
    {
      icon: <FaHospital />,
      title: "Hospital Training",
      description:
        "Exposure to real healthcare environments through practical training.",
    },
    {
      icon: <FaCertificate />,
      title: "PCI Approved Program",
      description: "Recognized program designed as per regulatory standards.",
    },
    {
      icon: <FaBriefcaseMedical />,
      title: "Career Opportunities",
      description:
        "Prepare for careers in retail pharmacy, hospitals, and pharmaceutical industries.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            D.Pharma Highlights
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            Why Choose Our D.Pharma Program?
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            Our Diploma in Pharmacy program combines academic excellence,
            practical training, and professional development to prepare students
            for successful careers in healthcare and pharmaceutical sciences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">
                {item.title}
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
