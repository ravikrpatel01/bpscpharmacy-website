import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="/college_building.jpeg"
              alt="College Building"
              className="w-full h-150 rounded-3xl shadow-lg border-3 border-red-700"
            />

            <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              About Our College
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-5 leading-tight">
              Shaping Future Healthcare Professionals Through Quality Pharmacy
              Education
            </h2>

            <p className="text-slate-600 mt-6 leading-8">
              Baijnath Prasad Snehi College of Pharmacy is committed to
              providing high-quality pharmaceutical education and practical
              training. Our mission is to prepare competent healthcare
              professionals equipped with scientific knowledge, ethical values,
              and industry-relevant skills.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>Experienced Faculty</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>Modern Laboratories</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>Practical Training</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>Career Guidance</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>Industry Exposure</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>Student-Centered Learning</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-medium transition"
              >
                Learn More
              </Link>

              <Link
                to="/admission"
                className="border border-slate-300 hover:border-blue-600 hover:text-blue-600 px-7 py-3 rounded-xl font-medium transition"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
