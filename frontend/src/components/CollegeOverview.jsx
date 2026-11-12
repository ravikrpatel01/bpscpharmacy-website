import { FaGraduationCap, FaFlask, FaUsers } from "react-icons/fa";

const CollegeOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="/images/college-building.jpg"
              alt="College Building"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              College Overview
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-5">
              Baijnath Prasad Snehi College of Pharmacy
            </h2>

            <p className="text-slate-600 mt-6 leading-8">
              Baijnath Prasad Snehi College of Pharmacy is dedicated to
              providing quality pharmaceutical education through modern teaching
              methods, practical laboratory training, and experienced faculty
              guidance.
            </p>

            <p className="text-slate-600 mt-4 leading-8">
              Our objective is to prepare competent pharmacy professionals who
              can contribute effectively to the healthcare sector while
              maintaining the highest standards of ethics and professionalism.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-50 p-5 rounded-2xl text-center">
                <FaGraduationCap className="mx-auto text-3xl text-blue-600" />
                <h3 className="text-2xl font-bold mt-3">500+</h3>
                <p className="text-slate-600 text-sm">Students</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl text-center">
                <FaUsers className="mx-auto text-3xl text-green-600" />
                <h3 className="text-2xl font-bold mt-3">20+</h3>
                <p className="text-slate-600 text-sm">Faculty</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl text-center">
                <FaFlask className="mx-auto text-3xl text-purple-600" />
                <h3 className="text-2xl font-bold mt-3">10+</h3>
                <p className="text-slate-600 text-sm">Labs & Facilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeOverview;
