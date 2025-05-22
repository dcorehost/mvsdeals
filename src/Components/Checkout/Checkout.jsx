import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Checkout.module.css";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import axios from "axios";
import Auth from "../Services/Auth";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], total = "0.00" } = location.state || {};

  const [billing, setBilling] = useState({
    first_name: "",
    last_name: "",
    company: "",
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
    const user_id = Auth.getUserId();
    const session_id = Auth.getSessionId();

    // If user is not logged in
    if (!user_id && !session_id) {
      alert("User not logged in");
      return;
    }

    const payload = {
      email: billing.email,
      billing,
      cartItems: cartItems.map((item) => ({
        product_id: item.product_id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        subtotal: item.subtotal,
      })),
      total,
      user_id,
      session_id,
    };

    try {
      // Check if the user exists or register them
      const registerResponse = await axios.post(
        "https://mvsdeals.online/register.php", // Your PHP registration endpoint
        { email: billing.email }
      );

      if (registerResponse.data.success) {
        alert(registerResponse.data.message); // Show message from PHP about user registration

        // Proceed with the order after registration
        const orderResponse = await axios.post(
          "https://mvsdeals.online/checkout.php", // Your PHP checkout endpoint
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (orderResponse.data.success) {
          alert("Order placed successfully!");
          setBilling({
            first_name: "",
            last_name: "",
            company: "",
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

          // Optionally navigate to home or order confirmation page
          navigate("/");
        } else {
          alert("Order failed: " + orderResponse.data.message);
        }
      } else {
        alert("Registration failed: " + registerResponse.data.error);
      }
    } catch (error) {
      alert("Something went wrong during checkout.");
      console.error(error);
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
                Use card number <strong>4111111111111111</strong> with any CVC
                and valid date.
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
                Your personal data will be used to process your order and
                enhance your experience.
              </p>
              <button
                className={styles.placeOrderBtn}
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
