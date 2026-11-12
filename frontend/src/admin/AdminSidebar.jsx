import { NavLink } from "react-router-dom";
import {
  FaTimes,
  FaTachometerAlt,
  FaBullhorn,
  FaCalendarAlt,
  FaImages,
  FaUsers,
  FaUserGraduate,
  FaCog,
  FaUniversity,
} from "react-icons/fa";

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Notices",
      path: "/admin/notices",
      icon: <FaBullhorn />,
    },
    {
      name: "Events",
      path: "/admin/events",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Gallery",
      path: "/admin/gallery",
      icon: <FaImages />,
    },
    {
      name: "Faculty",
      path: "/admin/faculty",
      icon: <FaUsers />,
    },
    {
      name: "Admissions",
      path: "/admin/admissions",
      icon: <FaUserGraduate />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-72 bg-slate-900 text-white
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="h-20 px-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl">
              <FaUniversity />
            </div>

            <div>
              <h2 className="font-bold text-lg">BPSCP</h2>

              <p className="text-xs text-slate-400">Admin Panel</p>
            </div>
          </div>

          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>

              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <div className="bg-slate-800 rounded-xl p-4">
            <h4 className="font-semibold">College CMS</h4>

            <p className="text-xs text-slate-400 mt-1">
              Baijnath Prasad Snehi College of Pharmacy
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
