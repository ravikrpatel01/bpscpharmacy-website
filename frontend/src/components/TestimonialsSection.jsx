import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Kumar",
      role: "D.Pharma Student",
      image: "/user.jpg",
      review:
        "The college provides excellent laboratory facilities and supportive faculty members. The practical exposure helped me gain confidence in pharmaceutical studies.",
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "Alumni",
      image: "/user.jpg",
      review:
        "The learning environment is excellent. Faculty guidance and practical training prepared me for my professional career in healthcare.",
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "D.Pharma Graduate",
      image: "/user.jpg",
      review:
        "Modern infrastructure, experienced teachers, and industry-oriented education make this college a great choice for pharmacy students.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            What Our Students Say
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            Hear from our students and alumni about their learning experience
            and academic journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <FaQuoteLeft className="text-4xl text-blue-100" />

              <p className="text-slate-600 mt-5 leading-7">{item.review}</p>

              <div className="flex gap-1 mt-5 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-slate-800">{item.name}</h4>

                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
