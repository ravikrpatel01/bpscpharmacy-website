import {
  FaFlask,
  FaBook,
  FaChalkboardTeacher,
  FaLaptop,
  FaClinicMedical,
  FaBus,
} from "react-icons/fa";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: <FaFlask />,
      title: "Modern Laboratories",
      description:
        "Well-equipped pharmaceutical laboratories for practical training and research activities.",
    },
    {
      icon: <FaBook />,
      title: "Library",
      description:
        "A rich collection of pharmacy books, journals, and digital learning resources.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Smart Classrooms",
      description:
        "Technology-enabled classrooms designed for interactive and effective learning.",
    },
    {
      icon: <FaLaptop />,
      title: "Computer Lab",
      description:
        "Modern computer facilities with internet access to support academic learning.",
    },
    {
      icon: <FaClinicMedical />,
      title: "Hospital Training",
      description:
        "Practical exposure through healthcare and hospital-based training opportunities.",
    },
    {
      icon: <FaBus />,
      title: "Transportation",
      description:
        "Safe and reliable transport facilities for students from nearby locations.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Campus Facilities
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            Facilities That Support Your Success
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            Our campus is equipped with modern infrastructure and learning
            resources to provide students with a quality educational experience.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="h-16 w-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition">
                {facility.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">
                {facility.title}
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
