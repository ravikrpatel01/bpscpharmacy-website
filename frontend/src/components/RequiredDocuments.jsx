import { FaFileAlt, FaIdCard, FaCamera, FaCheckCircle } from "react-icons/fa";

const RequiredDocuments = () => {
  const documents = [
    {
      icon: <FaFileAlt />,
      title: "10th Marksheet & Certificate",
    },
    {
      icon: <FaFileAlt />,
      title: "12th Marksheet & Certificate",
    },
    {
      icon: <FaIdCard />,
      title: "Aadhaar Card",
    },
    {
      icon: <FaCamera />,
      title: "Passport Size Photographs",
    },
    {
      icon: <FaFileAlt />,
      title: "Transfer Certificate (TC)",
    },
    {
      icon: <FaFileAlt />,
      title: "Character Certificate",
    },
    {
      icon: <FaFileAlt />,
      title: "Migration Certificate (If Applicable)",
    },
    {
      icon: <FaFileAlt />,
      title: "Caste Certificate (If Applicable)",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Admission Documents
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            Documents Required for Admission
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            Candidates seeking admission to the D.Pharma program must submit the
            following documents during the admission process.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                {doc.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-800 mt-5">
                {doc.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-3xl p-8">
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-blue-600 text-2xl mt-1" />

            <div>
              <h3 className="text-xl font-semibold text-slate-800">
                Important Note
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Students are advised to bring both original documents and
                photocopies at the time of admission verification. Additional
                documents may be required as per the guidelines of the
                institution or regulatory authorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequiredDocuments;
