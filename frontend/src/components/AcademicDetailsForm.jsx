const AcademicDetailsForm = ({ formData, handleChange }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">
        Academic Details
      </h3>

      {/* 10th Details */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-slate-700 mb-4">
          Class 10th Details
        </h4>

        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Board Name *
            </label>

            <input
              type="text"
              name="tenthBoard"
              value={formData.tenthBoard}
              onChange={handleChange}
              placeholder="e.g. BSEB"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Passing Year *
            </label>

            <input
              type="number"
              name="tenthYear"
              value={formData.tenthYear}
              onChange={handleChange}
              placeholder="2024"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Percentage / CGPA *
            </label>

            <input
              type="text"
              name="tenthPercentage"
              value={formData.tenthPercentage}
              onChange={handleChange}
              placeholder="85%"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* 12th Details */}
      <div>
        <h4 className="text-lg font-semibold text-slate-700 mb-4">
          Class 12th Details
        </h4>

        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Board Name *
            </label>

            <input
              type="text"
              name="twelfthBoard"
              value={formData.twelfthBoard}
              onChange={handleChange}
              placeholder="e.g. BSEB / CBSE"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Passing Year *
            </label>

            <input
              type="number"
              name="twelfthYear"
              value={formData.twelfthYear}
              onChange={handleChange}
              placeholder="2026"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Percentage *
            </label>

            <input
              type="text"
              name="twelfthPercentage"
              value={formData.twelfthPercentage}
              onChange={handleChange}
              placeholder="78%"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Physics Marks
            </label>

            <input
              type="text"
              name="physicsMarks"
              value={formData.physicsMarks}
              onChange={handleChange}
              placeholder="Enter marks"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Chemistry Marks
            </label>

            <input
              type="text"
              name="chemistryMarks"
              value={formData.chemistryMarks}
              onChange={handleChange}
              placeholder="Enter marks"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Biology / Mathematics Marks
            </label>

            <input
              type="text"
              name="biologyMathMarks"
              value={formData.biologyMathMarks}
              onChange={handleChange}
              placeholder="Enter marks"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicDetailsForm;
