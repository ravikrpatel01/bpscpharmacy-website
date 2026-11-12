import { FaLandmark, FaGraduationCap, FaFlask } from "react-icons/fa";

const CollegeHistory = () => {
  const milestones = [
    {
      icon: <FaLandmark />,
      year: "2015",
      title: "Institution Established",
      description:
        "The college was founded with the vision of providing quality pharmaceutical education and creating skilled healthcare professionals.",
    },
    {
      icon: <FaGraduationCap />,
      year: "2018",
      title: "Academic Growth",
      description:
        "Expanded academic resources, strengthened faculty expertise, and enhanced student support systems.",
    },
    {
      icon: <FaFlask />,
      year: "2022",
      title: "Modern Laboratories",
      description:
        "Upgraded laboratory infrastructure to provide advanced practical training and hands-on learning experiences.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Our Journey
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            College History
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            Over the years, our institution has continuously evolved to provide
            quality education, modern infrastructure, and professional
            development opportunities for aspiring pharmacists.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2" />

          <div className="space-y-10">
            {milestones.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2 p-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                        {item.icon}
                      </div>

                      <div>
                        <span className="text-blue-600 font-bold">
                          {item.year}
                        </span>

                        <h3 className="text-xl font-semibold text-slate-800">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-blue-600 border-4 border-white shadow-lg" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeHistory;
