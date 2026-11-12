import { FaArrowRight, FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[84vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full text-sm font-medium">
            <FaUserGraduate />
            Admissions Open 2026-27
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 leading-tight">
            Shape Your Future With
            <span className="block text-blue-400">D.Pharma Education</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 mt-4 max-w-3xl leading-8">
            Join{" "}
            <span className="text-yellow-400 font-bold">
              Baijnath Prasad Snehi College of Pharmacy
            </span>{" "}
            and build a successful career in the pharmaceutical and healthcare
            sector through quality education, practical training, and
            professional guidance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              to="/admission"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
            >
              Apply Now
              <FaArrowRight />
            </Link>

            <Link
              to="/about"
              className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
            >
              Explore College
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div>
              <h3 className="text-4xl font-bold text-white">10+</h3>
              <p className="text-white mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">500+</h3>
              <p className="text-white mt-2">Students</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">20+</h3>
              <p className="text-white mt-2">Faculty Members</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">100%</h3>
              <p className="text-white mt-2">Practical Focus</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" /> */}
    </section>
  );
};

export default HeroSection;
