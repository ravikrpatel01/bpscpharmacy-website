import {
  FaUserGraduate,
  FaPercentage,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const EligibilityCriteria = () => {
  const eligibilityPoints = [
    "Candidate must have passed 10+2 or equivalent examination.",
    "Physics, Chemistry, and Biology/Mathematics should be compulsory subjects.",
    "Minimum qualifying marks as per PCI / State Government norms.",
    "Admission is subject to document verification and eligibility confirmation.",
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Admission Eligibility
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            Eligibility Criteria for D.Pharma
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            Students seeking admission to the Diploma in Pharmacy program must
            fulfill the following eligibility requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Basic Requirements
            </h3>

            <div className="space-y-5">
              {eligibilityPoints.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1" />

                  <p className="text-slate-600 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                <FaUserGraduate />
              </div>

              <h3 className="text-lg font-semibold mt-5">Qualification</h3>

              <p className="text-slate-600 mt-2">10+2 (Science Stream)</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="h-14 w-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                <FaPercentage />
              </div>

              <h3 className="text-lg font-semibold mt-5">Minimum Marks</h3>

              <p className="text-slate-600 mt-2">As Per Government Norms</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="h-14 w-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl">
                <FaCalendarAlt />
              </div>

              <h3 className="text-lg font-semibold mt-5">Admission Session</h3>

              <p className="text-slate-600 mt-2">Academic Year 2026-27</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="h-14 w-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl">
                <FaCheckCircle />
              </div>

              <h3 className="text-lg font-semibold mt-5">Admission Basis</h3>

              <p className="text-slate-600 mt-2">
                Merit / Government Guidelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
