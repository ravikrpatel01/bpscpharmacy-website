import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import AdminRegister from "./admin/AdminRegister";
import Dashboard from "./admin/Dashboard";
import ForgotPassword from "./admin/ForgotPassword";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import Downloads from "./pages/Downloads";
import DPharma from "./pages/DPharma";
import EventDetails from "./pages/EventDetails";
import Events from "./pages/Events";
import Faculty from "./pages/Faculty";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NoticeDetails from "./pages/NoticeDetails";
import Notices from "./pages/Notices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/dpharma" element={<DPharma />} />

        <Route path="/faculty" element={<Faculty />} />

        <Route path="/notices" element={<Notices />} />
        <Route path="/notices/:id" element={<NoticeDetails />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/admission" element={<Admission />} />

        <Route path="/downloads" element={<Downloads />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin/register" element={<AdminRegister />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
