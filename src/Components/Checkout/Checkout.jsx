import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import axios from "axios";
import Auth from "../Services/Auth";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], total = "0.00" } = location.state || {};

  const [billing, setBilling] = useState({
    first_name: "", 
    last_name: "",
    company: "",       // <-- UPDATED: all fields present
    country: "India",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBilling((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
  const session_id = Auth.getSessionId();

  if (!session_id) {
    alert("Session expired or invalid.");
    return;
  }

  const requiredFields = [
    "first_name", "last_name", "address", "city",
    "state", "zip", "phone", "email"
  ];

  for (let field of requiredFields) {
    if (!billing[field]) {
      alert(`Please fill in ${field.replace("_", " ")}`);
      return;
    }
  }

  const payload = {
    email: billing.email,
    billing: { ...billing },
    cartItems: cartItems.map((item) => ({
      product_id: item.product_id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      subtotal: item.subtotal,
    })),
    total,
    session_id, // ✅ Only session_id is sent
  };

  try {
    const registerResponse = await axios.post(
      "https://mvsdeals.online/register.php",
      { email: billing.email }
    );

    if (!registerResponse.data.success) {
      const errorMsg = registerResponse.data.error || registerResponse.data.message || "Unknown error";
      alert("Registration failed: " + errorMsg);
      return;
    }

    const paymentResponse = await axios.post(
      "https://mvsdeals.online/create_payment.php",
      payload,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (paymentResponse.data.success && paymentResponse.data.approvalUrl) {
      window.location.href = paymentResponse.data.approvalUrl;
    } else {
      alert("Payment initiation failed.");
    }
  } catch (error) {
    console.error("Checkout error", error);
    if (error.response) {
      console.error("Server said:", error.response.data);
      alert("Error: " + (error.response.data.error || error.response.data.message || "Unknown"));
    } else if (error.request) {
      alert("No response from server.");
    } else {
      alert("Client error: " + error.message);
    }
  }
};

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.pageTitle}>
        <MdOutlineShoppingCart /> Checkout
      </h2>
      <div className={styles.checkoutContent}>
        <div className={styles.leftColumn}>
          <form
            className={styles.billingForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className={styles.sectionTitle}>Billing Details</h3>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label>First name *</label>
                <input
                  type="text"
                  name="first_name"
                  value={billing.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label>Last name *</label>
                <input
                  type="text"
                  name="last_name"
                  value={billing.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label>Company name (optional)</label>
              <input
                type="text"
                name="company"
                value={billing.company}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label>Country / Region *</label>
              <select
                name="country"
                value={billing.country}
                onChange={handleChange}
              >
                <option>India</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Street address *</label>
              <input
                type="text"
                name="address"
                value={billing.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <input
                type="text"
                name="apartment"
                placeholder="Apartment, suite, etc."
                value={billing.apartment}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label>Town / City *</label>
              <input
                type="text"
                name="city"
                value={billing.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label>State *</label>
              <input
                type="text"
                name="state"
                value={billing.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label>ZIP Code *</label>
              <input
                type="text"
                name="zip"
                value={billing.zip}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={billing.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label>Email address *</label>
              <input
                type="email"
                name="email"
                value={billing.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.fieldCheckbox}>
              <input type="checkbox" />
              <span>Create an account?</span>
            </div>
            <div className={styles.field}>
              <label>Order notes (optional)</label>
              <textarea
                name="notes"
                placeholder="Notes about your order"
                value={billing.notes}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.orderSummary}>
            <h3 className={styles.sectionTitle}>Your Order</h3>
            {cartItems.map((item) => (
              <div key={item.product_id} className={styles.orderItem}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${item.subtotal}</span>
              </div>
            ))}
            <div className={styles.orderTotal}>
              <span>Total</span>
              <span>${total}</span>
            </div>

            <div className={styles.paymentSection}>
              <h4>
                <FaCreditCard /> Credit Card
              </h4>
              <p className={styles.testModeNote}>
                TEST MODE ENABLED
                <br />
                Use card number <strong>4111111111111111</strong> with any CVC and valid date.
              </p>
              <div className={styles.field}>
                <label>Card number</label>
                <input type="text" placeholder="**** **** **** ****" />
              </div>
              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label>Expiry (MM/YY)</label>
                  <input type="text" placeholder="MM / YY" />
                </div>
                <div className={styles.field}>
                  <label>Card code</label>
                  <input type="text" placeholder="CVC" />
                </div>
              </div>
              <p className={styles.privacyNote}>
                Your personal data will be used to process your order and enhance your experience.
              </p>
              <button
                className={styles.placeOrderBtn}
                onClick={handlePlaceOrder}
              >
                Pay with PayPal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
