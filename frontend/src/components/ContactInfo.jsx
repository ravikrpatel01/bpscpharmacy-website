import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
          Contact Information
        </span>

        <h2 className="text-4xl font-bold text-slate-800 mt-4">
          We'd Love to Hear From You
        </h2>

        <p className="text-slate-600 mt-4 leading-7">
          Feel free to contact us for admissions, course details, fee structure,
          facilities, or any other information.
        </p>
      </div>

      {/* Address */}
      <div className="flex items-start gap-4 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
        <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
          <FaMapMarkerAlt className="text-blue-600 text-lg" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-800">College Address</h3>

          <p className="text-slate-600 mt-1">
            Baijnath Prasad Snehi College of Pharmacy, Domchanch, Koderma,
            Jharkhand - 825418
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
        <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
          <FaPhoneAlt className="text-green-600 text-lg" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-800">Phone Number</h3>

          <p className="text-slate-600 mt-1">+91-7061008677 | +91-6203661279</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
        <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center">
          <MdEmail className="text-red-600 text-xl" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-800">Email Address</h3>

          <p className="text-slate-600 mt-1">info@bpsnehicollege.com</p>
        </div>
      </div>

      {/* Timing */}
      <div className="flex items-start gap-4 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
        <div className="h-12 w-12 rounded-xl bg-yellow-100 flex items-center justify-center">
          <IoTime className="text-yellow-600 text-xl" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-800">Office Hours</h3>

          <p className="text-slate-600 mt-1">Monday - Saturday</p>

          <p className="text-slate-600">09:00 AM - 04:00 PM</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-2">
        <h3 className="font-semibold text-slate-800 mb-4">Follow Us</h3>

        <div className="flex gap-4">
          <a
            href="#"
            className="h-11 w-11 rounded-full bg-blue-600 text-white flex items-center justify-center transition"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="#"
            className="h-11 w-11 rounded-full bg-pink-600 text-white flex items-center justify-center transition"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="#"
            className="h-11 w-11 rounded-full bg-red-600 text-white flex items-center justify-center transition"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
