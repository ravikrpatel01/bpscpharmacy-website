const GoogleMap = () => {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm border border-slate-200">
      <iframe
        title="College Location"
        src="https://www.google.com/maps?q=Domchanch,Koderma&output=embed"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    </div>
  );
};

export default GoogleMap;
