import React from "react"; 
import styles from "./McAFeeShop.module.css";
import { assets } from '../../assets/assets';
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Auth from "../Services/Auth"; 

const McAFeeShop = () => {
  const navigate = useNavigate();

  // Map the products to add sale information
  const productsWithSale = assets.products.map(product => {
    const onSale = [1, 7, 8, 9, 10, 11, 13, 14, 15, 16].includes(product.id); 
    return {
      ...product,
      onSale,
      saleText: onSale ? "Sale!" : null
    };
  });

  // Function to handle adding a product to the cart
  const handleAddToCart = async (product) => {
    try {
      const token = Auth.getToken(); 

      if (!token) {
        alert("No authentication token found. Please log in.");
        return;
      }

      // Get the dynamic user_id from the Auth service
      const user_id = Auth.getUserId();  // Fetch user_id from localStorage

      if (!user_id) {
        alert("User is not logged in. Please log in.");
        return;
      }

      // Post the data to the backend
      const response = await axios.post(
        "https://mvsdeals.online/addToCart.php", 
        {
          user_id,  // Send user_id (match DB field)
          product_id: product.id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send the Bearer token
            'Content-Type': 'application/json', // Ensure the request is sent as JSON
          }
        }
      );

      if (response.data.status === "success") {
        navigate("/cart"); // Redirect to the cart page after successful add
      } else {
        console.error("Add to cart failed:", response.data.message);
        alert(response.data.message); // Show error message
      }
    } catch (error) {
      console.error("API error:", error);
      alert("Something went wrong while adding to cart.");
    }
  };

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
                onClick={() => handleAddToCart(product)} // Call the function to add the product to cart
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
              onClick={() => handleAddToCart(product)} // Call the function to add the product to cart
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default McAFeeShop;
