

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



// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Homepage from "./Pages/HomePage/HomePage";
// import AboutUs from "./Pages/AboutUs/AboutUs";
// import ContactUs from "./Pages/ContactUs/ContactUs";
// import MyAccount from "./Pages/MyAccount/MyAccount";
// import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
// import ShippingPolicy from "./Pages/ShippingPolicy/ShippingPolicy";
// import RefundPolicy from "./Pages/RefundPolicy/RefundPolicy";
// import TermsCondition from "./Pages/TermsCondition/TermsCondition";
// import McAfee from "./Pages/McAfee/McAfee";
// import Cart from "./Components/Cart/Cart";
// // import Checkout from "./Pages/Checkout/Checkout";
// import MainNav from "./Components/MainNav/MainNav";
// import Layout from "./Layout/Layout";

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   // Add item to cart or increment quantity if already exists
//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map(item =>
//           item.id === product.id 
//             ? { ...item, quantity: item.quantity + 1 } 
//             : item
//         );
//       }
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   // Remove item from cart completely
//   const removeFromCart = (productId) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
//   };

//   // Update quantity of specific item
//   const updateQuantity = (productId, newQuantity) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   // Calculate total items in cart
//   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <div className="app">
//       <MainNav cartCount={cartCount} />
//       <Layout>
//         <Routes>
//           <Route 
//             path="/" 
//             element={<Homepage addToCart={addToCart} />} 
//           />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/account" element={<MyAccount />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/shipping-policy" element={<ShippingPolicy />} />
//           <Route path="/refund-policy" element={<RefundPolicy />} />
//           <Route path="/terms-conditions" element={<TermsCondition />} />
//           <Route 
//             path="/mcafeeantivirus" 
//             element={<McAfee addToCart={addToCart} />} 
//           />
//           <Route 
//             path="/cart" 
//             element={
//               <Cart 
//                 cartItems={cartItems} 
//                 removeFromCart={removeFromCart}
//                 updateQuantity={updateQuantity}
//               />
//             } 
//           />
//           {/* <Route 
//             path="/checkout" 
//             element={<Checkout cartItems={cartItems} />} 
//           /> */}
//         </Routes>
//       </Layout>
//     </div>
//   );
// };

// export default App;

