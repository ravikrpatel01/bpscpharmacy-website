import { FaQuoteLeft } from "react-icons/fa";

const PrincipalMessage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Principal Image */}
          <div className="relative">
            <img
              src="/images/principal.jpg"
              alt="Principal"
              className="w-full max-w-md mx-auto rounded-3xl shadow-xl object-cover"
            />

            <div className="absolute -bottom-6 -right-2 bg-blue-600 text-white p-5 rounded-2xl shadow-lg">
              <FaQuoteLeft className="text-3xl" />
            </div>
          </div>

          {/* Message */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Principal's Message
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-5">
              Welcome to Our College of Pharmacy
            </h2>

            <p className="text-slate-600 mt-6 leading-8">
              It gives me immense pleasure to welcome you to Baijnath Prasad
              Snehi College of Pharmacy. Our institution is committed to
              nurturing future pharmacists through quality education, practical
              training, and ethical values.
            </p>

            <p className="text-slate-600 mt-5 leading-8">
              We strive to create a learning environment that encourages
              innovation, scientific thinking, and professional excellence. With
              dedicated faculty members, modern laboratories, and
              student-focused teaching methods, we prepare our students to meet
              the challenges of the rapidly evolving healthcare sector.
            </p>

            <p className="text-slate-600 mt-5 leading-8">
              I invite aspiring students to become a part of our academic
              community and build a successful career in pharmacy and
              healthcare.
            </p>

            {/* Principal Details */}
            <div className="mt-8 border-l-4 border-blue-600 pl-5">
              <h3 className="text-xl font-bold text-slate-800">
                Dr. Principal Name
              </h3>

              <p className="text-blue-600 font-medium mt-1">Principal</p>

              <p className="text-slate-500 mt-1">
                Baijnath Prasad Snehi College of Pharmacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
