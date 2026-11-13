import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ContactPreview = () => {
  return (
    <section className="py-20 bg-linear-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
              Start Your Journey in Pharmacy Today
            </h2>

            <p className="mt-6 text-blue-100 text-lg leading-8">
              Admissions are now open for the D.Pharma program. Contact us for
              course details, eligibility criteria, fee structure, and admission
              guidance.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/admission"
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition"
              >
                Apply Now
              </Link>

              <Link
                to="/contact"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Info Card */}
          <div className="bg-white text-slate-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 border border-blue-300 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FaPhoneAlt size={25} className="text-blue-600" />
                </div>

                <div>
                  <h4 className="font-semibold">Phone Number</h4>
                  <p className="text-slate-600">
                    +91-7061008677 | +91-6203661279
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 border border-red-300 rounded-xl bg-red-100 flex items-center justify-center">
                  <MdEmail size={25} className="text-red-600 text-xl" />
                </div>

                <div>
                  <h4 className="font-semibold">Email Address</h4>
                  <p className="text-slate-600">vibhuti.bpspc@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 border border-green-300 rounded-xl bg-green-100 flex items-center justify-center">
                  <FaMapMarkerAlt size={25} className="text-green-600" />
                </div>

                <div>
                  <h4 className="font-semibold">College Address</h4>
                  <p className="text-slate-600">
                    Baijnath Prasad Snehi College of Pharmacy, Domchanch <br />
                    <span>Koderma, Jharkhand (825418)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
              >
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
