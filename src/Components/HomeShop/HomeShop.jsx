

import React from "react";
import styles from "./HomeShop.module.css";
import { assets } from '../../assets/assets';
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeShop = ({ addToCart }) => {
  const navigate = useNavigate();

  const productsWithSale = assets.products.map(product => {
    const onSale = [1, 7, 8, 9, 10, 11, 13, 14, 15, 16].includes(product.id); 
    return {
      ...product,
      onSale,
      saleText: onSale ? "Sale!" : null
    };
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    // remove alert and directly navigate
    navigate("/cart");
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

export default HomeShop;
