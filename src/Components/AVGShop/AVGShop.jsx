import React from "react"; 
import styles from "./AVGShop.module.css";
import { assets } from '../../assets/assets';
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Auth from "../Services/Auth"; 

const AVGShop = () => {
  const navigate = useNavigate();

  // Map the products to add sale information
  const productsWithSale = assets.products4.map(product => {
    const onSale = [3, 2,1,5,7,9,10,6, 8,].includes(product.id); 
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
          user_id,  
          product_id: product.id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json', 
          }
        }
      );

      if (response.data.status === "success") {
        navigate("/cart"); 
      } else {
        console.error("Add to cart failed:", response.data.message);
        alert(response.data.message); 
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
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AVGShop;
