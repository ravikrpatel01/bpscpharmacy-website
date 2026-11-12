import { FaArrowRight, FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdmissionBanner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-blue-700 to-blue-500 py-20">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-24 -translate-y-24" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-32 translate-y-32" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              <FaUserGraduate />
              Admissions Open 2026-27
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mt-6 leading-tight">
              Start Your Journey In
              <span className="block">Diploma In Pharmacy</span>
            </h1>

            <p className="text-blue-100 mt-6 text-lg leading-8 max-w-2xl">
              Join Baijnath Prasad Snehi College of Pharmacy and build a
              successful career in the healthcare and pharmaceutical sector
              through quality education and practical training.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="#admission-form"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-100 transition"
              >
                Apply Now
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-3xl text-center">
              <h3 className="text-3xl font-bold text-white">2 Years</h3>
              <p className="text-blue-100 mt-2">Course Duration</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-3xl text-center">
              <h3 className="text-3xl font-bold text-white">PCI</h3>
              <p className="text-blue-100 mt-2">Approved</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-3xl text-center">
              <h3 className="text-3xl font-bold text-white">10+2</h3>
              <p className="text-blue-100 mt-2">Eligibility</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-3xl text-center">
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-blue-100 mt-2">Practical Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionBanner;
