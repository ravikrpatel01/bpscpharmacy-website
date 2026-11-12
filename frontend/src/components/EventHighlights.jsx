import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const EventHighlights = () => {
  const events = [
    {
      id: 1,
      title: "World Pharmacist Day 2026",
      description:
        "Community healthcare awareness program organized by pharmacy students.",
      date: "25 September 2026",
      location: "College Auditorium",
      image: "/pharma1.jpeg",
    },
    {
      id: 2,
      title: "Health Awareness Camp",
      description:
        "Community healthcare awareness program organized by pharmacy students.",
      date: "16-25 November 2026",
      location: "Classroom",
      image: "/pharma2.jpeg",
    },
    {
      id: 3,
      title: "Pharmacy Workshop",
      description:
        "Hands-on practical workshop focused on pharmaceutical formulations.",
      date: "25 August 2026",
      location: "Pharmacy Lab",
      image: "/images/events/event-3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Campus Events
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-4">
              Recent & Upcoming Events
            </h2>

            <p className="text-slate-600 mt-3 max-w-2xl">
              Explore academic activities, seminars, workshops, awareness
              programs, and student engagement events.
            </p>
          </div>

          {/* <Link
            to="/events"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            View All Events
            <FaArrowRight />
          </Link> */}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-60 object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FaCalendarAlt />
                  <span>{event.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mt-4">
                  {event.title}
                </h3>

                <p className="text-slate-600 mt-3 line-clamp-3">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 text-slate-500 mt-4">
                  <FaMapMarkerAlt />
                  <span>{event.location}</span>
                </div>

                {/* <Link
                  to={`/events/${event.id}`}
                  className="inline-flex items-center gap-2 mt-6 text-blue-600 font-medium hover:text-blue-700"
                >
                  Read More
                  <FaArrowRight className="text-sm" />
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
