

import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import MyAccount from "./Pages/MyAccount/MyAccount";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ShippingPolicy from "./Pages/ShippingPolicy/ShippingPolicy";
import RefundPolicy from "./Pages/RefundPolicy/RefundPolicy";
import TermsCondition from "./Pages/TermsCondition/TermsCondition";
import McAfee from "./Pages/McAfee/McAfee";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/account" element={<MyAccount />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/terms-conditions" element={<TermsCondition />} />
      <Route path="/mcafeeantivirus" element={<McAfee />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default App;

