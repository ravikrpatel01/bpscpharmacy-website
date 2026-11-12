import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "D.Pharma", href: "/dpharma" },
    { name: "Faculty", href: "/faculty" },
    { name: "Notices", href: "/notices" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/college_logo.png"
              alt="College Logo"
              className="h-15 w-15 object-contain"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                Baijnath Prasad Snehi
              </h1>
              <p className="text-lg text-slate-500 font-bold">
                College of Pharmacy
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-medium text-slate-700 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Admission Button */}
          <div className="hidden lg:block">
            <Link
              to="/admission"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-3xl text-slate-700"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-5">
            <div className="flex flex-col gap-4 pt-4 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-medium text-slate-700 hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/admission"
                className="bg-blue-600 text-white text-center py-2 rounded-lg"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
