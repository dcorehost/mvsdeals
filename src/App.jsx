

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
import AddCart from "./Pages/AddCart/AddCart";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import Norton from "./Pages/Norton/Norton";
import AVG from "./Pages/AVG/AVG";
import Avast from "./Pages/Avast/Avast";
import UpdatePassword from "./Pages/UpdatePassword/UpdatePassord";

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
      <Route path="/cart" element={<AddCart />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/nortonantivirus" element={<Norton />} />
      <Route path="/avgantivirus" element={<AVG />} />
      <Route path="/avastantivirus" element={<Avast />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default App;


