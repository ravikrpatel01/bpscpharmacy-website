import EventCard from "./EventCard";

const EventList = ({ events = [] }) => {
  if (events.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center">
        <h3 className="text-2xl font-semibold text-slate-800">
          No Events Available
        </h3>

        <p className="text-slate-500 mt-3">
          Upcoming events will be displayed here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          date={event.date}
          location={event.location}
          image={event.image}
        />
      ))}
    </div>
  );
};

export default EventList;
