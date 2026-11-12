import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  const pageTitleMap = {
    "/admin/dashboard": "Dashboard",
    "/admin/notices": "Manage Notices",
    "/admin/events": "Manage Events",
    "/admin/gallery": "Manage Gallery",
    "/admin/faculty": "Manage Faculty",
    "/admin/admissions": "Admission Applications",
    "/admin/settings": "Website Settings",
  };

  const pageTitle = pageTitleMap[location.pathname] || "Admin Panel";

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Sidebar */}
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Area */}
      <div className="lg:ml-72 min-h-screen flex flex-col">
        {/* Header */}
        <AdminHeader pageTitle={pageTitle} setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
