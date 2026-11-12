import {
  FaClipboardCheck,
  FaFileUpload,
  FaUniversity,
  FaUserEdit,
} from "react-icons/fa";

const ApplicationProcess = () => {
  const steps = [
    {
      icon: <FaUserEdit />,
      title: "Fill Application Form",
      description:
        "Complete the online admission form with accurate personal and academic details.",
    },
    {
      icon: <FaFileUpload />,
      title: "Upload Documents",
      description:
        "Upload required documents such as marksheets, certificates, photographs, and identity proof.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Verification Process",
      description:
        "Submitted information and documents will be verified by the admission department.",
    },
    {
      icon: <FaUniversity />,
      title: "Admission Confirmation",
      description:
        "After successful verification and fee submission, admission will be confirmed.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Admission Process
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            Application Process
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            Follow these simple steps to apply for admission to the Diploma in
            Pharmacy (D.Pharma) program.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition"
            >
              {/* Step Number */}
              <div className="absolute top-5 right-5 h-8 w-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="h-16 w-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-800 mt-6">
                {step.title}
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-14 bg-blue-600 rounded-3xl p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl font-bold">
            Start Your Pharmacy Journey Today
          </h3>

          <p className="mt-4 text-blue-100 max-w-3xl mx-auto leading-8">
            Ensure all details are entered correctly and documents are uploaded
            clearly to avoid delays in the admission process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
