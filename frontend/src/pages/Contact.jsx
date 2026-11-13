import { Helmet } from "react-helmet-async";

import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import GoogleMap from "../components/GoogleMap";
import Navbar from "../components/Navbar";
import PageBanner from "../components/PageBanner";
import TopBar from "../components/TopBar";

const Contact = () => {
  const websiteUrl = "https://bpscollegeofpharmacy.org";

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          Contact BPSC College of Pharmacy | Domchanch, Koderma, Jharkhand
        </title>

        <meta
          name="description"
          content="Contact Baijnath Prasad Snehi College of Pharmacy, Domchanch, Koderma, Jharkhand for D.Pharm admission, course details, fee structure and other inquiries. Find our campus location and get in touch with us."
        />

        <meta
          name="keywords"
          content="BPSC College of Pharmacy Contact, Pharmacy College in Domchanch, D.Pharm College Koderma Contact, Pharmacy College Jharkhand Address, D.Pharm Admission Inquiry Koderma, Baijnath Prasad Snehi College of Pharmacy"
        />

        <meta name="author" content="BPSC College of Pharmacy" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Canonical URL */}
        <link rel="canonical" href={`${websiteUrl}/contact`} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Us | BPSC College of Pharmacy, Koderma"
        />

        <meta
          property="og:description"
          content="Get in touch with BPSC College of Pharmacy, Domchanch, Koderma, Jharkhand for admission inquiries, D.Pharm course details and campus information."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content={`${websiteUrl}/contact`} />

        <meta property="og:site_name" content="BPSC College of Pharmacy" />

        <meta property="og:image" content={`${websiteUrl}/og-image.jpg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Contact BPSC College of Pharmacy" />

        <meta
          name="twitter:description"
          content="Contact our college for D.Pharm admissions, fees, course details and other inquiries in Koderma, Jharkhand."
        />

        <meta name="twitter:image" content={`${websiteUrl}/og-image.jpg`} />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Domchanch, Koderma, Jharkhand" />
      </Helmet>

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

          <GoogleMap location="Baijnath Prasad Snehi College of Pharmacy, Domchanch, Koderma, Jharkhand" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
