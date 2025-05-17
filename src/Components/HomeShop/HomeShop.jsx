

// import React from "react";
// import styles from "./HomeShop.module.css";
// import { assets } from '../../assets/assets';
// import { FaCartPlus } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const HomeShop = ({ addToCart }) => {
//   const navigate = useNavigate();

//   const productsWithSale = assets.products.map(product => {
//     const onSale = [1, 7, 8, 9, 10, 11, 13, 14, 15, 16].includes(product.id); 
//     return {
//       ...product,
//       onSale,
//       saleText: onSale ? "Sale!" : null
//     };
//   });

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     // remove alert and directly navigate
//     navigate("/cart");
//   };

//   return (
//     <div className={styles.container}>    
//       <div className={styles.productGrid}>
//         {productsWithSale.map((product) => (
//           <div key={product.id} className={styles.productCard}>
//             <div className={styles.imageContainer}>
//               {product.onSale && (
//                 <div className={styles.saleBadge}>{product.saleText}</div>
//               )}
//               <img 
//                 src={product.image} 
//                 alt={product.name} 
//                 className={styles.productImage} 
//               />
//               <div 
//                 className={styles.addToCartIcon}
//                 onClick={() => handleAddToCart(product)}
//               >
//                 <FaCartPlus />
//               </div>
//             </div>
//             <div className={styles.productInfo}>
//               <h3 className={styles.productName}>{product.name}</h3>
//               <div className={styles.productDisplayName}>{product.displayName}</div>
//             </div>
//             <div className={styles.priceContainer}>
//               <span className={styles.cutoffPrice}>{product.cutoffPrice}</span>
//               <span className={styles.productPrice}>{product.price}</span>
//             </div>
//             <button 
//               className={styles.addToCartButton}
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomeShop;

import React from "react";
import axios from "axios";
import styles from "./HomeShop.module.css";
import { assets } from '../../assets/assets';
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Auth from "../Services/Auth"; // adjust the path accordingly

const HomeShop = () => {
  const navigate = useNavigate();

  const productsWithSale = assets.products.map(product => {
    const onSale = [1, 7, 8, 9, 10, 11, 13, 14, 15, 16].includes(product.id); 
    return {
      ...product,
      onSale,
      saleText: onSale ? "Sale!" : null
    };
  });

  const handleAddToCart = async (product) => {
    try {
      // Get user details from Auth module
      const userDetails = Auth.getUserDetails();
      if (!userDetails || !userDetails.token) {
        alert("Please login to add products to the cart.");
        navigate("/login");
        return;
      }

      const userId = userDetails.user_id || 1; // fallback to 1 if no user_id in userDetails

      // Prepare form data
      const formData = new URLSearchParams();
      formData.append('user_id', userId);
      formData.append('product_id', product.id);
      formData.append('quantity', 1); // default quantity 1, update if you want

      // Post data to addToCart API
      const response = await axios.post(
        'https://mvsdeals.online/addToCart.php',
        formData.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // If API requires auth token in header, add here, for example:
            'Authorization': `Bearer ${userDetails.token}`
          }
        }
      );

      console.log('Add to cart response:', response.data);

      if (response.data.status === 'success') {
        // Optionally show success message here
        navigate("/cart"); // Navigate to cart page on success
      } else {
        alert("Failed to add to cart: " + (response.data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Error adding to cart. Please try again.");
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
                style={{ cursor: 'pointer' }}
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
