import {
  FaBullhorn,
  FaCalendarAlt,
  FaImages,
  FaPlus,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Notices",
      value: "24",
      icon: <FaBullhorn />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Events",
      value: "12",
      icon: <FaCalendarAlt />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Faculty Members",
      value: "18",
      icon: <FaUsers />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Gallery Images",
      value: "156",
      icon: <FaImages />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Applications",
      value: "89",
      icon: <FaUserGraduate />,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <>
      <div className="p-6 bg-slate-50 min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>

          <p className="text-slate-500 mt-2">Welcome back, Admin 👋</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mb-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
            >
              <div
                className={`h-14 w-14 rounded-2xl flex items-center justify-center text-2xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-slate-500 mt-4 text-sm">{item.title}</h3>

              <p className="text-3xl font-bold text-slate-800 mt-2">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-5">Quick Actions</h2>

          <div className="grid md:grid-cols-4 gap-4">
            <button className="bg-blue-600 text-white p-4 rounded-2xl flex items-center justify-center gap-2">
              <FaPlus />
              Add Notice
            </button>

            <button className="bg-green-600 text-white p-4 rounded-2xl flex items-center justify-center gap-2">
              <FaPlus />
              Add Event
            </button>

            <button className="bg-purple-600 text-white p-4 rounded-2xl flex items-center justify-center gap-2">
              <FaPlus />
              Add Faculty
            </button>

            <button className="bg-orange-600 text-white p-4 rounded-2xl flex items-center justify-center gap-2">
              <FaPlus />
              Upload Image
            </button>
          </div>
        </div>

        {/* Tables */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Admissions */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-5">Recent Applications</h2>

            <div className="space-y-4">
              {["Rahul Kumar", "Aman Singh", "Priya Kumari", "Neha Sharma"].map(
                (name, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <div>
                      <h4 className="font-medium">{name}</h4>

                      <p className="text-sm text-slate-500">
                        D.Pharma Admission
                      </p>
                    </div>

                    <span className="text-green-600 text-sm font-medium">
                      New
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Recent Notices */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-5">Latest Notices</h2>

            <div className="space-y-4">
              {[
                "Admission Open 2026-27",
                "Exam Schedule Released",
                "Library Notice",
                "Orientation Program",
              ].map((notice, index) => (
                <div key={index} className="flex justify-between border-b pb-3">
                  <h4 className="font-medium">{notice}</h4>

                  <span className="text-blue-600 text-sm">View</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
