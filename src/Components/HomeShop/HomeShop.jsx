import React from "react";
import styles from "./HomeShop.module.css";
import { assets } from '../../assets/assets';
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Auth from "../Services/Auth";

const HomeShop = () => {
  const navigate = useNavigate();

  // Improved cross-browser session ID generator
  const getSessionId = () => {
    let sessionId = localStorage.getItem("session_id");
    if (!sessionId) {
      if (window.crypto && window.crypto.randomUUID) {
        sessionId = crypto.randomUUID();
      } else {
        sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      }
      localStorage.setItem("session_id", sessionId);
    }
    return sessionId;
  };

  const [loading, setLoading] = React.useState(false);

  const handleAddToCart = async (product) => {
    // Log the product data to ensure it contains id and other properties
    console.log("Product Data:", product);
  
    if (!product || !product.id) {
      console.error("Invalid product data:", product);
      alert("Product data is missing or incomplete.");
      return;
    }

    setLoading(true);
    try {
      const token = Auth.getToken();
      const user_id = Auth.getUserId();
      const session_id = getSessionId();

      // Log the session and user ID to ensure correct values
      console.log("User ID:", user_id, "Session ID:", session_id);

      const payload = {
        product_id: product.id, // Make sure the product has an id
        quantity: 1,
        ...(user_id && token ? { user_id } : { session_id }) // Ensure user_id or session_id is present
      };

      // Log the payload before sending to backend
      console.log("Payload:", payload);

      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const response = await axios.post(
        "https://mvsdeals.online/addToCart.php",
        payload,
        { headers }
      );

      // Log the response from API
      console.log("API Response:", response);

      if (response.data.status === "success") {
        alert("Product added to cart!");
        navigate("/cart");
      } else {
        alert("Failed to add product: " + response.data.message);
      }
    } catch (error) {
      console.error("API error:", error);
      alert("Could not add product to cart.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const productsWithSale = assets.products.map(product => {
    const onSale = [1, 7, 8, 9, 10, 11, 13, 14, 15, 16].includes(product.id);
    return {
      ...product,
      onSale,
      saleText: onSale ? "Sale!" : null
    };
  });

  return (
    <div className={styles.container}>    
      <div className={styles.productGrid}>
        {productsWithSale.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              {product.onSale && (
                <div className={styles.saleBadge}>{product.saleText}</div>
              )}
              <img 
                src={product.image} 
                alt={product.name} 
                className={styles.productImage} 
              />
              <div 
                className={styles.addToCartIcon}
                onClick={() => handleAddToCart(product)} 
              >
                <FaCartPlus />
              </div>
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.productDisplayName}>{product.displayName}</div>
            </div>
            <div className={styles.priceContainer}>
              <span className={styles.cutoffPrice}>{product.cutoffPrice}</span>
              <span className={styles.productPrice}>{product.price}</span>
            </div>
            <button 
              className={styles.addToCartButton}
              onClick={() => handleAddToCart(product)} 
              disabled={loading}
            >
              {loading ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeShop;
