import FacultyCard from "./FacultyCard";

const FacultyGrid = ({ faculties = [] }) => {
  if (faculties.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center">
        <h3 className="text-2xl font-semibold text-slate-800">
          Faculty Information Coming Soon
        </h3>

        <p className="text-slate-500 mt-3">
          Faculty profiles will be available shortly.
        </p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Our Faculty
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            Meet Our Experienced Faculty Members
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            Our faculty members are dedicated to academic excellence, practical
            learning, and student success in pharmaceutical education.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {faculties?.map((faculty) => (
            <FacultyCard
              key={faculty.id}
              id={faculty.id}
              name={faculty.name}
              designation={faculty.designation}
              qualification={faculty.degrees}
              experience={faculty.experience}
              image={faculty.image_path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyGrid;
