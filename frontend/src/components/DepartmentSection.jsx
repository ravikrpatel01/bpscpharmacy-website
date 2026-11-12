import { FaUserGraduate, FaFlask, FaChalkboardTeacher } from "react-icons/fa";

const DepartmentSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Academic Department
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            Department of Pharmacy
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            Our Department of Pharmacy is dedicated to providing quality
            pharmaceutical education through experienced faculty, modern
            laboratories, and practical learning opportunities.
          </p>
        </div>

        {/* Department Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition">
            <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">
              <FaChalkboardTeacher />
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">
              Expert Faculty
            </h3>

            <p className="text-slate-600 mt-3 leading-7">
              Qualified and experienced faculty members committed to academic
              excellence and student development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition">
            <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-2xl">
              <FaFlask />
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">
              Practical Learning
            </h3>

            <p className="text-slate-600 mt-3 leading-7">
              Well-equipped laboratories provide hands-on training and
              real-world pharmaceutical experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition">
            <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
              <FaUserGraduate />
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mt-6">
              Student Success
            </h3>

            <p className="text-slate-600 mt-3 leading-7">
              Focused on building knowledge, skills, and professional ethics
              required for a successful pharmacy career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
