import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="bg-blue-900 text-white hidden md:block">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Left Section */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              <span>+91-7061008677</span>
            </div>

            <div className="flex items-center gap-2">
              <MdEmail className="text-sm" />
              <span>vibhuti.bpspc@gmail.com</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-5">
            <span className="text-xs font-medium bg-yellow-400 text-black px-3 py-1 rounded-full animate-pulse">
              Admissions Open 2026-27
            </span>

            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-yellow-300 transition">
                <FaFacebookF />
              </a>

              <a href="#" className="hover:text-yellow-300 transition">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-yellow-300 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
