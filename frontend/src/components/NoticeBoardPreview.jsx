import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import NoticeCard from "./NoticeCard";

const NoticeBoardPreview = () => {
  // API se latest notices aayenge
  const notices = [
    {
      id: 1,
      title: "Admissions Open for D.Pharma Session 2026-27",
      description:
        "Applications are invited for admission to the D.Pharma program for the academic session 2026-27.",
      date: "12 June 2026",
      isImportant: true,
    },
    {
      id: 2,
      title: "Practical Examination Schedule Released",
      description:
        "Students are advised to check the practical examination schedule and report on time.",
      date: "10 June 2026",
      isImportant: false,
    },
    {
      id: 3,
      title: "College Orientation Program",
      description:
        "Orientation program for newly admitted students will be conducted next month.",
      date: "08 June 2026",
      isImportant: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Notice Board
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-4">
              Latest Announcements
            </h2>

            <p className="text-slate-600 mt-3 max-w-2xl">
              Stay updated with the latest admissions, examinations, events, and
              important notices from the college.
            </p>
          </div>

          <Link
            to="/notices"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            View All Notices
            <FaArrowRight />
          </Link>
        </div>

        {/* Notice Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              id={notice.id}
              title={notice.title}
              description={notice.description}
              date={notice.date}
              isImportant={notice.isImportant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeBoardPreview;
