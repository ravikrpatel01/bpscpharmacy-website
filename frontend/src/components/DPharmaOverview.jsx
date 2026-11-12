import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const DPharmaOverview = () => {
  const highlights = [
    "PCI Approved Curriculum",
    "2-Year Full-Time Diploma Program",
    "Modern Pharmaceutical Laboratories",
    "Experienced Faculty Members",
    "Hospital & Industry Exposure",
    "Career-Oriented Education",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Diploma in Pharmacy (D.Pharma)
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-5 leading-tight">
              Build a Rewarding Career in the Healthcare & Pharmacy Sector
            </h1>

            <p className="text-slate-600 mt-6 leading-8">
              The Diploma in Pharmacy (D.Pharma) program is designed to provide
              students with comprehensive knowledge of pharmaceutical sciences,
              drug formulation, dispensing practices, patient care, and
              healthcare management. The course combines theoretical learning
              with practical laboratory training to prepare students for
              professional careers in the pharmacy field.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/admission"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-medium transition"
              >
                Apply Now
              </Link>

              <Link
                to="/contact"
                className="border border-slate-300 hover:border-blue-600 hover:text-blue-600 px-7 py-3 rounded-xl font-medium transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/students.jpeg"
              alt="D Pharma Students"
              className="w-full h-125 object-cover rounded-3xl shadow-lg"
            />

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white p-5 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-blue-600">2 Years</h3>

              <p className="text-slate-600">Full-Time Diploma Program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DPharmaOverview;
