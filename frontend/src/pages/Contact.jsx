import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import GoogleMap from "../components/GoogleMap";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TopBar from "../components/TopBar";

const Contact = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with us for admissions, course details, fee structure, and other inquiries."
      />

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Find Us
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-4">
              Visit Our Campus
            </h2>

            <p className="text-slate-600 mt-3">
              Locate our campus easily through Google Maps.
            </p>
          </div>

          <GoogleMap location="Baijnath Prasad Snehi College of Pharmacy, Patna, Bihar" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
