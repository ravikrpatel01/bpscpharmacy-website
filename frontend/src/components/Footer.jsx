import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* College Info */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Baijnath Prasad Snehi College of Pharmacy
            </h2>

            <p className="text-sm leading-6">
              Providing quality pharmaceutical education with modern
              infrastructure, experienced faculty and industry-oriented learning
              for future healthcare professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="/dpharma" className="hover:text-blue-400 transition">
                  D.Pharma
                </a>
              </li>

              <li>
                <a href="/faculty" className="hover:text-blue-400 transition">
                  Faculty
                </a>
              </li>

              <li>
                <a href="/admission" className="hover:text-blue-400 transition">
                  Admission
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />
                <p className="text-sm">Domchanch, Koderma, Jharkhand</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <p className="text-sm">+91-7061008677 | +91-7061008677</p>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-blue-400 text-lg" />
                <p className="text-sm">info@bpsnehicollege.com</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaYoutube size={20} />
              </a>
            </div>

            <p className="text-sm mt-5 text-gray-400">
              Stay connected for latest notices, admissions and events.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Baijnath Prasad Snehi College of
            Pharmacy. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-400">
            Developed by{" "}
            <span className="font-medium">RAVI KUMAR PATEL 🤍</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
