import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./comman/ScrollToTop";
import PublicLayout from "./comman/PublicLayout";
import ProtectedRoute from "./comman/ProtectedRoute";
import AdminLayout from "./comman/AdminLayout";

import Home from "./Home";
import Services from "./componets/Services";
import AboutUs from "./componets/AboutUs";
import ContactUs from "./componets/ContactUs";
import Casestudies from "./componets/Casestudies";

import AdminLogin from "./admin/AdminLogin";
import AdminInquiry from "./admin/AdminInquiry";
import PrivacyPolicy from "./comman/PrivacyPolicy";
import LegalLayout from "./comman/LegalLayout";
import TermsConditions from "./comman/TermsConditions";
import Disclaimer from "./comman/Disclaimer";


function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>

        {/* ===== PUBLIC WEBSITE (HEADER + FOOTER) ===== */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/casestudy" element={<Casestudies />} />
          
        </Route>
        <Route element={<LegalLayout />}>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
           
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            {/* <Route path="/cookie-policy" element={<CookiePolicy />} /> */}
          </Route>

        {/* ===== ADMIN ===== */}
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />

        <Route
          path="/admin/login"
          element={
            <AdminLayout>
              <AdminLogin />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/inquiry"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminInquiry />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;
