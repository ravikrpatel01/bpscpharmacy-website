import { FaClock, FaUserGraduate, FaUniversity, FaUsers } from "react-icons/fa";

const CourseDuration = () => {
  const courseDetails = [
    {
      icon: <FaClock />,
      title: "Course Duration",
      value: "2 Years",
    },
    {
      icon: <FaUsers />,
      title: "Approved Intake",
      value: "60 Students",
    },
    {
      icon: <FaUniversity />,
      title: "Course Type",
      value: "Full Time",
    },
    {
      icon: <FaUserGraduate />,
      title: "Qualification",
      value: "Diploma",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Course Details
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            D.Pharma Program Overview
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            The Diploma in Pharmacy (D.Pharma) program is designed to provide
            students with strong theoretical knowledge and practical skills
            required in the pharmaceutical field.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-800 mt-5">
                {item.title}
              </h3>

              <p className="text-slate-600 mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDuration;
