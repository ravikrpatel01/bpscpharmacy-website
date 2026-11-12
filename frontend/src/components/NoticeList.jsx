import NoticeCard from "./NoticeCard";

const NoticeList = ({ notices = [] }) => {
  if (notices.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
        <h3 className="text-2xl font-semibold text-slate-800">
          No Notices Found
        </h3>

        <p className="text-slate-500 mt-3">
          There are currently no notices available.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          id={notice.id}
          title={notice.title}
          description={notice.description}
          date={notice.date}
          isImportant={notice.isImportant}
        />
      ))}
    </div>
  );
};

export default NoticeList;
