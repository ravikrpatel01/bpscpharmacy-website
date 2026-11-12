import {
  FaHospital,
  FaStore,
  FaIndustry,
  FaCapsules,
  FaUserGraduate,
  FaBriefcaseMedical,
} from "react-icons/fa";

const CareerOpportunities = () => {
  const careers = [
    {
      icon: <FaStore />,
      title: "Retail Pharmacist",
      description:
        "Work in medical stores and pharmacies dispensing medicines and guiding patients.",
    },
    {
      icon: <FaHospital />,
      title: "Hospital Pharmacist",
      description:
        "Manage medicines and support healthcare teams in hospitals and clinics.",
    },
    {
      icon: <FaIndustry />,
      title: "Pharmaceutical Industry",
      description:
        "Opportunities in manufacturing, production, quality control, and packaging.",
    },
    {
      icon: <FaCapsules />,
      title: "Drug Distribution",
      description:
        "Work with pharmaceutical distributors and healthcare supply chains.",
    },
    {
      icon: <FaBriefcaseMedical />,
      title: "Medical Representative",
      description:
        "Promote pharmaceutical products and interact with healthcare professionals.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Higher Education",
      description:
        "Pursue B.Pharma and advanced studies for broader career opportunities.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Career Opportunities
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            Career Paths After D.Pharma
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            The Diploma in Pharmacy program opens doors to various opportunities
            in healthcare, hospitals, pharmaceutical industries, and higher
            education.
          </p>
        </div>

        {/* Career Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="h-16 w-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                {career.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">
                {career.title}
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                {career.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold">
            Build Your Future With Pharmacy Education
          </h3>

          <p className="mt-4 text-blue-100 max-w-3xl mx-auto leading-8">
            Our D.Pharma program equips students with the knowledge, practical
            skills, and professional confidence required to succeed in the
            healthcare and pharmaceutical sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
