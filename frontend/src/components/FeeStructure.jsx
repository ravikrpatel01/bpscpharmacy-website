import { FaIndianRupeeSign, FaReceipt } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const FeeStructure = () => {
  const fees = [
    {
      title: "Tuition Fee",
      amount: "₹ XX,XXX",
    },
    {
      title: "Admission Fee",
      amount: "₹ X,XXX",
    },
    {
      title: "Examination Fee",
      amount: "As Applicable",
    },
    {
      title: "Other Charges",
      amount: "As Per Rules",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Course Fee
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            D.Pharma Fee Structure
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            The fee structure is designed to provide quality education and
            practical training at an affordable cost.
          </p>
        </div>

        {/* Fee Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fees.map((fee, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                <FaIndianRupeeSign />
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">
                {fee.title}
              </h3>

              <p className="text-blue-600 font-bold text-xl mt-3">
                {fee.amount}
              </p>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-12 bg-white border border-blue-200 rounded-3xl p-8">
          <div className="flex items-start gap-4">
            <FaInfoCircle className="text-blue-600 text-2xl mt-1" />

            <div>
              <h3 className="text-xl font-semibold text-slate-800">
                Important Information
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Fee details are subject to revision as per institutional and
                regulatory guidelines. Students are advised to contact the
                admission office for the latest fee structure and payment
                schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;
