import { FaBullseye, FaEye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Our Purpose
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            Vision & Mission
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            We are committed to delivering quality pharmaceutical education and
            developing competent healthcare professionals who contribute
            positively to society and the healthcare industry.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition">
            <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-3xl">
              <FaEye />
            </div>

            <h3 className="text-3xl font-bold text-slate-800 mt-6">
              Our Vision
            </h3>

            <p className="text-slate-600 mt-5 leading-8">
              To become a center of excellence in pharmaceutical education,
              research, and healthcare services by nurturing competent, ethical,
              and socially responsible pharmacy professionals who can meet the
              evolving needs of society and the healthcare sector.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition">
            <div className="h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-3xl">
              <FaBullseye />
            </div>

            <h3 className="text-3xl font-bold text-slate-800 mt-6">
              Our Mission
            </h3>

            <ul className="mt-5 space-y-4 text-slate-600">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                Provide high-quality pharmaceutical education and practical
                training.
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                Develop professional ethics, leadership, and lifelong learning
                skills.
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                Promote research, innovation, and scientific thinking.
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                Prepare students for successful careers in pharmacy and
                healthcare.
              </li>

              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                Contribute to society through healthcare awareness and community
                service.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
