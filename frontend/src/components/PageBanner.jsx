import { FaChevronRight, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageBanner = ({
  title,
  subtitle,
  backgroundImage = "/images/page-banner.jpg",
}) => {
  return (
    <section className="relative h-60 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>

        {subtitle && (
          <p className="text-slate-200 mt-4 max-w-2xl mx-auto">{subtitle}</p>
        )}

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-3 mt-6 text-white">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-blue-300 transition"
          >
            <FaHome />
            Home
          </Link>

          <FaChevronRight className="text-sm" />

          <span className="text-blue-300">{title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
