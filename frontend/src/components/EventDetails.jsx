import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();

  // API se data aayega
  const event = {
    id,
    title: "Orientation Program 2026",
    description: `
The Orientation Program is designed to welcome newly admitted
students to the D.Pharma program. During the event, students
will interact with faculty members, learn about academic
guidelines, campus facilities, laboratory practices, and
various opportunities available throughout the course.

The program also includes an introduction to the curriculum,
student support services, extracurricular activities, and
career opportunities in the pharmaceutical sector.
    `,
    date: "20 July 2026",
    location: "College Auditorium",
    image: "/images/events/event-1.jpg",
  };

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-blue-600 font-medium mb-8"
        >
          <FaArrowLeft />
          Back to Events
        </Link>

        {/* Event Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          {/* Event Image */}
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-112.5 object-cover"
          />

          {/* Content */}
          <div className="p-8 md:p-10">
            <div className="flex flex-wrap gap-6 text-slate-500 mb-5">
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>{event.location}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-slate-800">{event.title}</h1>

            <div className="mt-8">
              <p className="text-slate-700 leading-8 whitespace-pre-line">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
