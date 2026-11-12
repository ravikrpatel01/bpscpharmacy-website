import { useState } from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import AcademicDetailsForm from "./AcademicDetailsForm";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    dob: "",
    mobile: "",
    email: "",
    aadhaar: "",
    address: "",

    // Academic Details
    tenthBoard: "",
    tenthYear: "",
    tenthPercentage: "",

    twelfthBoard: "",
    twelfthYear: "",
    twelfthPercentage: "",

    physicsMarks: "",
    chemistryMarks: "",
    biologyMathMarks: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log(formData);

      // API Call
      // await axios.post("/api/admissions", formData);

      alert("Application submitted successfully!");

      setFormData({
        fullName: "",
        fatherName: "",
        motherName: "",
        gender: "",
        dob: "",
        mobile: "",
        email: "",
        aadhaar: "",
        address: "",

        tenthBoard: "",
        tenthYear: "",
        tenthPercentage: "",

        twelfthBoard: "",
        twelfthYear: "",
        twelfthPercentage: "",

        physicsMarks: "",
        chemistryMarks: "",
        biologyMathMarks: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="admission-form" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Online Admission
          </span>

          <h2 className="text-4xl font-bold text-slate-800 mt-5">
            Apply for D.Pharma Admission
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Fill out the admission form carefully with correct personal and
            academic information.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <PersonalDetailsForm
            formData={formData}
            handleChange={handleChange}
          />

          <AcademicDetailsForm
            formData={formData}
            handleChange={handleChange}
          />

          {/* DocumentUploadForm yaha add hoga */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdmissionForm;
