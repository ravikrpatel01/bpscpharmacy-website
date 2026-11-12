import { FaCalendarAlt, FaDownload } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const NoticeDetails = () => {
  const { id } = useParams();

  // API se data aayega
  const notice = {
    id,
    title: "Admission Open for D.Pharma Session 2026-27",
    description: `
      Applications are invited for admission to the Diploma in Pharmacy
      (D.Pharma) program for the academic session 2026-27.

      Interested candidates are advised to submit their applications
      before the last date. Admission will be granted as per institutional
      and regulatory guidelines.

      For more details, contact the admission office.
    `,
    date: "12 June 2026",
    pdfUrl: "/documents/admission-notice.pdf",
    isImportant: true,
  };

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <Link
          to="/notices"
          className="inline-flex items-center text-blue-600 font-medium mb-6"
        >
          ← Back to Notices
        </Link>

        {/* Notice Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10">
          {/* Badge */}
          {notice.isImportant && (
            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
              Important Notice
            </span>
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold text-slate-800 mt-5">
            {notice.title}
          </h1>

          {/* Date */}
          <div className="flex items-center gap-2 text-slate-500 mt-4">
            <FaCalendarAlt />
            <span>{notice.date}</span>
          </div>

          {/* Content */}
          <div className="mt-8">
            <p className="text-slate-700 leading-8 whitespace-pre-line">
              {notice.description}
            </p>
          </div>

          {/* PDF Download */}
          {notice.pdfUrl && (
            <a
              href={notice.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-10 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
            >
              <FaDownload />
              Download Notice PDF
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default NoticeDetails;
