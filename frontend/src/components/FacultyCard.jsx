import { FaGraduationCap, FaBriefcase, FaEnvelope } from "react-icons/fa";

const FacultyCard = ({
  name,
  designation,
  qualification,
  experience,
  email,
  image,
}) => {
  return (
    <div className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
      {/* Faculty Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800">{name}</h3>

        <p className="text-blue-600 font-medium mt-1">{designation}</p>

        <div className="mt-5 space-y-3">
          <div className="flex items-center gap-3 text-slate-600">
            <FaGraduationCap className="text-blue-600" />

            <span className="text-sm">{qualification}</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600">
            <FaBriefcase className="text-green-600" />

            <span className="text-sm">{experience}</span>
          </div>

          {email && (
            <div className="flex items-center gap-3 text-slate-600">
              <FaEnvelope className="text-red-600" />

              <span className="text-sm break-all">{email}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
