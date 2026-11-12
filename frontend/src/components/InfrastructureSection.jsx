import {
  FaBuilding,
  FaFlask,
  FaBook,
  FaDesktop,
  FaWifi,
  FaBus,
} from "react-icons/fa";

const InfrastructureSection = () => {
  const facilities = [
    {
      icon: <FaBuilding />,
      title: "Modern Campus",
      description:
        "A well-planned campus designed to provide a comfortable and productive learning environment.",
    },
    {
      icon: <FaFlask />,
      title: "Pharmacy Laboratories",
      description:
        "Advanced laboratories equipped for practical pharmaceutical training and experiments.",
    },
    {
      icon: <FaBook />,
      title: "Library",
      description:
        "A comprehensive library with books, journals, and digital resources related to pharmacy and healthcare.",
    },
    {
      icon: <FaDesktop />,
      title: "Computer Lab",
      description:
        "Modern computer facilities with internet access to support academic and research activities.",
    },
    {
      icon: <FaWifi />,
      title: "Wi-Fi Campus",
      description:
        "High-speed internet connectivity available across major academic areas of the campus.",
    },
    {
      icon: <FaBus />,
      title: "Transportation",
      description:
        "Safe and reliable transportation facilities for students from nearby locations.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Infrastructure
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            World-Class Learning Environment
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            Our campus infrastructure is designed to support academic
            excellence, practical learning, and overall student development.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="h-16 w-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
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

        {/* Bottom Highlight */}
        <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold">
            A Campus Built for Future Pharmacists
          </h3>

          <p className="mt-4 text-blue-100 max-w-3xl mx-auto leading-8">
            We continuously invest in infrastructure, laboratories, and learning
            resources to ensure students receive the highest quality education
            and practical exposure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
