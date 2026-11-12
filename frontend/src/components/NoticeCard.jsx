import { Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const NoticeCard = ({ id, title, description, date, isImportant = false }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <FaCalendarAlt />
          <span>{date}</span>
        </div>

        {isImportant && (
          <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
            Important
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-slate-800 line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 mt-3 line-clamp-3 leading-7">
        {description}
      </p>

      {/* Button */}
      <Link
        to={`/notices/${id}`}
        className="inline-flex items-center gap-2 mt-5 text-blue-600 font-medium hover:text-blue-700"
      >
        Read More
        <FaArrowRight className="text-sm" />
      </Link>
    </div>
  );
};

export default NoticeCard;
