import { Link } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const EventCard = ({ id, title, description, date, location, image }) => {
  return (
    <div className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
      {/* Event Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg">
          {date}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 line-clamp-2">
          {title}
        </h3>

        <p className="text-slate-600 mt-3 leading-7 line-clamp-3">
          {description}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 mt-4 text-slate-500">
          <FaMapMarkerAlt className="text-blue-600" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 mt-3 text-slate-500">
          <FaCalendarAlt className="text-green-600" />
          <span className="text-sm">{date}</span>
        </div>

        {/* Read More */}
        <Link
          to={`/events/${id}`}
          className="inline-flex items-center gap-2 mt-6 text-blue-600 font-semibold hover:text-blue-700"
        >
          View Details
          <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
