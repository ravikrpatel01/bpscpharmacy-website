import { FaBars, FaBell, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const AdminHeader = ({ setSidebarOpen, pageTitle = "Dashboard" }) => {
  const admin = JSON.parse(localStorage.getItem("admin"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    window.location.href = "/admin/login";
  };

  return (
    <header className="h-20 bg-white border-b sticky top-0 border-slate-200 px-6 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="lg:hidden text-slate-600 text-xl"
        >
          <FaBars />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-slate-800">{pageTitle}</h1>

          <p className="text-sm text-slate-500">College Management System</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <button className="relative h-11 w-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition">
          <FaBell />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <h3 className="font-semibold text-slate-800">
              {admin?.name || "Admin"}
            </h3>

            <p className="text-xs text-slate-500">
              {admin?.role || "Administrator"}
            </p>
          </div>

          <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
            <FaUserCircle />
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="h-11 px-4 cursor-pointer border border-red-300 hover:border rounded-xl bg-red-50 text-red-600 hover:bg-red-100 flex items-center gap-1 transition"
        >
          <FaSignOutAlt />
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
