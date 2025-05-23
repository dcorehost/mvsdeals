// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import styles from "./ProductDetails.module.css";
// import { assets } from "../../assets/assets";
// import Auth from "../Services/Auth";
// import axios from "axios";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = assets.products.find(p => p.id === parseInt(id));

//   const handleAddToCart = async () => {
//     try {
//       const token = Auth.getToken();
//       const user_id = Auth.getUserId();
//       if (!token || !user_id) return alert("Please log in first.");

//       const res = await axios.post(
//         "https://mvsdeals.online/addToCart.php",
//         { user_id, product_id: product.id, quantity: 1 },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (res.data.status === "success") {
//         navigate("/cart");
//       } else {
//         alert(res.data.message || "Failed to add to cart");
//       }
//     } catch (err) {
//       alert("Error adding to cart");
//     }
//   };

//   if (!product) return <p>Product not found</p>;

//   return (
//     <div className={styles.detailWrapper}>
//       <img src={product.image} alt={product.name} className={styles.detailImage} />
//       <div className={styles.detailContent}>
//         <h2>{product.name}</h2>
//         <p>{product.displayName}</p>
//         <div className={styles.priceSection}>
//           <span className={styles.cutoffPrice}>{product.cutoffPrice}</span>
//           <span className={styles.productPrice}>{product.price}</span>
//         </div>
//         <button className={styles.addToCartButton} onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import styles from "./ProductDetails.module.css";
// import { assets } from "../../assets/assets";
// import Auth from "../Services/Auth";
// import axios from "axios";
// import { FaCartPlus } from "react-icons/fa";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = assets.products.find((p) => p.id === parseInt(id));

//   const handleAddToCart = async () => {
//     try {
//       const token = Auth.getToken();
//       const user_id = Auth.getUserId();
//       if (!token || !user_id) return alert("Please log in first.");

//       const res = await axios.post(
//         "https://mvsdeals.online/addToCart.php",
//         { user_id, product_id: product.id, quantity: 1 },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (res.data.status === "success") {
//         navigate("/cart");
//       } else {
//         alert(res.data.message || "Failed to add to cart");
//       }
//     } catch (err) {
//       alert("Error adding to cart");
//     }
//   };

//   if (!product) return <p className={styles.notFound}>Product not found</p>;

//   // Suggested Products
//   const suggestedProducts = assets.products.filter((p) => p.id !== product.id).slice(0, 6);

//   return (
//     <div className={styles.pageWrapper}>
//       {/* --- Product Preview Section --- */}
//       <div className={styles.detailWrapper}>
//         <div className={styles.imageBox}>
//           <img src={product.image} alt={product.name} />
//         </div>
//         <div className={styles.detailContent}>
//           <h2>{product.name}</h2>
//           <p className={styles.displayName}>{product.displayName}</p>
//           <div className={styles.priceSection}>
//             <span className={styles.cutoffPrice}>{product.cutoffPrice}</span>
//             <span className={styles.productPrice}>{product.price}</span>
//           </div>
//           <button className={styles.addToCartButton} onClick={handleAddToCart}>
//             <FaCartPlus /> Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* --- Suggested Products Section --- */}
//       <div className={styles.suggestedWrapper}>
//         <h3 className={styles.suggestedTitle}>You may also like</h3>
//         <div className={styles.productGrid}>
//           {suggestedProducts.map((item) => (
//             <div key={item.id} className={styles.productCard}>
//               <img src={item.image} alt={item.name} />
//               <h4>{item.name}</h4>
//               <p>{item.price}</p>
//               <button onClick={() => navigate(`/product/${item.id}`)}>
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import styles from "./ProductDetails.module.css";
// import { assets } from "../../assets/assets";
// import Auth from "../Services/Auth";
// import axios from "axios";
// import { FaCartPlus } from "react-icons/fa";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = assets.products.find((p) => p.id === parseInt(id));

//   const handleAddToCart = async () => {
//     try {
//       const token = Auth.getToken();
//       const user_id = Auth.getUserId();
//       if (!token || !user_id) return alert("Please log in first.");

//       const res = await axios.post(
//         "https://mvsdeals.online/addToCart.php",
//         { user_id, product_id: product.id, quantity: 1 },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (res.data.status === "success") {
//         navigate("/cart");
//       } else {
//         alert(res.data.message || "Failed to add to cart");
//       }
//     } catch (err) {
//       alert("Error adding to cart");
//     }
//   };

//   if (!product) return <p className={styles.notFound}>Product not found</p>;

//   const suggestedProducts = assets.products.filter((p) => p.id !== product.id).slice(0, 6);
//   const sidebarProducts = assets.products.filter((p) => p.id !== product.id).slice(6, 12);

//   return (
//     <div className={styles.pageWrapper}>
//       <div className={styles.layout}>
//         {/* --- Left Sidebar Products --- */}
//         <aside className={styles.sidebar}>
//           <h3>Related Items</h3>
//           {sidebarProducts.map((item) => (
//             <div key={item.id} className={styles.sidebarProduct}>
//               <img src={item.image} alt={item.name} onClick={() => navigate(`/product/${item.id}`)} />
//               <p>{item.name}</p>
//               <span>{item.price}</span>
//             </div>
//           ))}
//         </aside>

//         {/* --- Main Product Details --- */}
//         <div className={styles.detailWrapper}>
//           <div className={styles.imageBox}>
//             <img src={product.image} alt={product.name} />
//           </div>
//           <div className={styles.detailContent}>
//             <h2>{product.name}</h2>
//             <p className={styles.displayName}>{product.displayName}</p>
//             <div className={styles.priceSection}>
//               <span className={styles.cutoffPrice}>{product.cutoffPrice}</span>
//               <span className={styles.productPrice}>{product.price}</span>
//             </div>
//             <button className={styles.addToCartButton} onClick={handleAddToCart}>
//               <FaCartPlus /> Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* --- Bottom Suggestions --- */}
//       <div className={styles.suggestedWrapper}>
//         <h3 className={styles.suggestedTitle}>You May Also Like</h3>
//         <div className={styles.productScroll}>
//           {suggestedProducts.map((item) => (
//             <div key={item.id} className={styles.productCard}>
//               <img src={item.image} alt={item.name} />
//               <h4>{item.name}</h4>
//               <p>{item.price}</p>
//               <button onClick={() => navigate(`/product/${item.id}`)}>
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import styles from "./ProductDetails.module.css";
// import { assets } from "../../assets/assets";
// import Auth from "../Services/Auth";
// import axios from "axios";
// import { FaCartPlus } from "react-icons/fa";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = assets.products.find((p) => p.id === parseInt(id));

//   const handleAddToCart = async () => {
//     try {
//       const token = Auth.getToken();
//       const user_id = Auth.getUserId();
//       if (!token || !user_id) return alert("Please log in first.");

//       const res = await axios.post(
//         "https://mvsdeals.online/addToCart.php",
//         { user_id, product_id: product.id, quantity: 1 },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (res.data.status === "success") {
//         navigate("/cart");
//       } else {
//         alert(res.data.message || "Failed to add to cart");
//       }
//     } catch (err) {
//       alert("Error adding to cart");
//     }
//   };

//   if (!product) return <p className={styles.notFound}>Product not found</p>;

//   const suggestedProducts = assets.products.filter(p => p.id !== product.id).slice(0, 6);
//   const sidebarProducts = assets.products.filter(p => p.id !== product.id).slice(6, 12);

//   return (
//     <div className={styles.pageWrapper}>
//       <aside className={styles.sidebar}>
//         {sidebarProducts.map(item => (
//           <div key={item.id} className={styles.sidebarItem} onClick={() => navigate(`/product/${item.id}`)}>
//             <img src={item.image} alt={item.name} />
//             <p>{item.name}</p>
//           </div>
//         ))}
//       </aside>

//       <main className={styles.productMain}>
//         <section className={styles.productSection}>
//           <div className={styles.imageContainer}>
//             <img src={product.image} alt={product.name} />
//           </div>
//           <div className={styles.infoContainer}>
//             <h1>{product.name}</h1>
//             <p>{product.displayName}</p>
//             <div className={styles.priceBox}>
//               <span className={styles.cutoff}>{product.cutoffPrice}</span>
//               <span className={styles.price}>{product.price}</span>
//             </div>
//             <button onClick={handleAddToCart} className={styles.cartBtn}>
//               <FaCartPlus /> Add to Cart
//             </button>
//           </div>
//         </section>

//         <section className={styles.suggestions}>
//           <h2>You May Also Like</h2>
//           <div className={styles.grid}>
//             {suggestedProducts.map(item => (
//               <div key={item.id} className={styles.card} onClick={() => navigate(`/product/${item.id}`)}>
//                 <img src={item.image} alt={item.name} />
//                 <div className={styles.cardText}>
//                   <h4>{item.name}</h4>
//                   <p>{item.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default ProductDetails;



// good but need better


// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import styles from "./ProductDetails.module.css";
// import { assets } from "../../assets/assets";
// import Auth from "../Services/Auth";
// import axios from "axios";
// import { 
//   FaCartPlus, 
//   FaHeart, 
//   FaRegHeart,
//   FaStar,
//   FaChevronLeft,
//   FaChevronRight,
//   FaShare,
//   FaExpand
// } from "react-icons/fa";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = assets.products.find((p) => p.id === parseInt(id));
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showZoom, setShowZoom] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   // For image gallery
//   const productImages = [
//     product.image,
//     ...(product.additionalImages || []),
//   ];

//   const handleAddToCart = async () => {
//     try {
//       const token = Auth.getToken();
//       const user_id = Auth.getUserId();
//       if (!token || !user_id) return alert("Please log in first.");

//       const res = await axios.post(
//         "https://mvsdeals.online/addToCart.php",
//         { user_id, product_id: product.id, quantity },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (res.data.status === "success") {
//         navigate("/cart");
//       } else {
//         alert(res.data.message || "Failed to add to cart");
//       }
//     } catch (err) {
//       alert("Error adding to cart");
//     }
//   };

//   if (!product) return <p className={styles.notFound}>Product not found</p>;

//   const suggestedProducts = assets.products.filter(p => p.id !== product.id).slice(0, 6);
//   const relatedProducts = assets.products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === productImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? productImages.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className={styles.pageWrapper}>
//       {/* Floating Back Button */}
//       <button 
//         className={styles.backButton}
//         onClick={() => navigate(-1)}
//       >
//         <FaChevronLeft /> Back
//       </button>

//       {/* Main Product Section */}
//       <main className={styles.productMain}>
//         <section className={styles.productSection}>
//           {/* Image Gallery */}
//           <div className={styles.imageGallery}>
//             <div 
//               className={styles.mainImage}
//               onMouseEnter={() => setShowZoom(true)}
//               onMouseLeave={() => setShowZoom(false)}
//               onClick={() => setShowZoom(!showZoom)}
//             >
//               <img 
//                 src={productImages[currentImageIndex]} 
//                 alt={product.name} 
//               />
//               {showZoom && (
//                 <div className={styles.zoomIndicator}>
//                   <FaExpand /> Click to zoom
//                 </div>
//               )}
//               <button 
//                 className={styles.navButtonLeft} 
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   prevImage();
//                 }}
//               >
//                 <FaChevronLeft />
//               </button>
//               <button 
//                 className={styles.navButtonRight} 
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   nextImage();
//                 }}
//               >
//                 <FaChevronRight />
//               </button>
//             </div>

//             <div className={styles.thumbnailContainer}>
//               {productImages.map((img, index) => (
//                 <div 
//                   key={index}
//                   className={`${styles.thumbnail} ${currentImageIndex === index ? styles.active : ''}`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 >
//                   <img src={img} alt={`Thumbnail ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className={styles.infoContainer}>
//             <div className={styles.productHeader}>
//               <h1>{product.name}</h1>
//               <button 
//                 className={styles.favoriteButton}
//                 onClick={() => setIsFavorite(!isFavorite)}
//               >
//                 {isFavorite ? <FaHeart className={styles.filled} /> : <FaRegHeart />}
//               </button>
//             </div>

//             <div className={styles.rating}>
//               {[...Array(5)].map((_, i) => (
//                 <FaStar 
//                   key={i} 
//                   className={i < product.rating ? styles.filledStar : styles.emptyStar} 
//                 />
//               ))}
//               <span>({product.reviewCount} reviews)</span>
//             </div>

//             <p className={styles.displayName}>{product.displayName}</p>

//             <div className={styles.priceBox}>
//               <span className={styles.price}>${product.price}</span>
//               {product.cutoffPrice && (
//                 <span className={styles.cutoff}>${product.cutoffPrice}</span>
//               )}
//               {product.discount && (
//                 <span className={styles.discount}>{product.discount}% OFF</span>
//               )}
//             </div>

//             {product.colors && (
//               <div className={styles.colorOptions}>
//                 <h4>Color:</h4>
//                 <div className={styles.colorSwatches}>
//                   {product.colors.map((color, i) => (
//                     <div 
//                       key={i}
//                       className={styles.swatch}
//                       style={{ backgroundColor: color }}
//                       title={color}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className={styles.quantitySelector}>
//               <h4>Quantity:</h4>
//               <div className={styles.quantityControls}>
//                 <button 
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   disabled={quantity <= 1}
//                 >
//                   -
//                 </button>
//                 <span>{quantity}</span>
//                 <button onClick={() => setQuantity(quantity + 1)}>+</button>
//               </div>
//             </div>

//             <div className={styles.buttonGroup}>
//               <button 
//                 onClick={handleAddToCart} 
//                 className={styles.cartBtn}
//               >
//                 <FaCartPlus /> Add to Cart
//               </button>
//               <button className={styles.buyNowBtn}>
//                 Buy Now <IoIosArrowRoundForward />
//               </button>
//               <button className={styles.shareBtn}>
//                 <FaShare /> Share
//               </button>
//             </div>

//             <div className={styles.productDetails}>
//               <h3>Product Details</h3>
//               <p>{product.description}</p>
//               <ul>
//                 {product.features?.map((feature, i) => (
//                   <li key={i}>{feature}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Related Products */}
//         {relatedProducts.length > 0 && (
//           <section className={styles.relatedProducts}>
//             <h2>Related Products</h2>
//             <div className={styles.relatedGrid}>
//               {relatedProducts.map(item => (
//                 <motion.div 
//                   key={item.id} 
//                   className={styles.relatedCard}
//                   whileHover={{ y: -5 }}
//                   onClick={() => navigate(`/product/${item.id}`)}
//                 >
//                   <div className={styles.imageWrapper}>
//                     <img src={item.image} alt={item.name} />
//                     <button className={styles.quickView}>Quick View</button>
//                   </div>
//                   <div className={styles.cardText}>
//                     <h4>{item.name}</h4>
//                     <div className={styles.cardPrice}>
//                       <span>${item.price}</span>
//                       {item.cutoffPrice && (
//                         <span className={styles.originalPrice}>${item.cutoffPrice}</span>
//                       )}
//                     </div>
//                     <div className={styles.cardRating}>
//                       <FaStar className={styles.filledStar} />
//                       <span>{item.rating}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Suggested Products */}
//         <section className={styles.suggestions}>
//           <div className={styles.sectionHeader}>
//             <h2>You May Also Like</h2>
//             <button className={styles.viewAll}>View All <IoIosArrowRoundForward /></button>
//           </div>
//           <div className={styles.grid}>
//             {suggestedProducts.map(item => (
//               <motion.div 
//                 key={item.id} 
//                 className={styles.card}
//                 whileHover={{ scale: 1.03 }}
//                 onClick={() => navigate(`/product/${item.id}`)}
//               >
//                 <div className={styles.cardImage}>
//                   <img src={item.image} alt={item.name} />
//                   <button 
//                     className={styles.wishlistButton}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       // Handle wishlist
//                     }}
//                   >
//                     <FaRegHeart />
//                   </button>
//                 </div>
//                 <div className={styles.cardText}>
//                   <h4>{item.name}</h4>
//                   <div className={styles.priceContainer}>
//                     <span className={styles.price}>${item.price}</span>
//                     {item.cutoffPrice && (
//                       <span className={styles.originalPrice}>${item.cutoffPrice}</span>
//                     )}
//                   </div>
//                   <div className={styles.cardFooter}>
//                     <div className={styles.rating}>
//                       <FaStar className={styles.filledStar} />
//                       <span>{item.rating}</span>
//                     </div>
//                     <button className={styles.addToCartMini}>
//                       <FaCartPlus />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Product Highlights */}
//         <section className={styles.highlights}>
//           <h2>Why You'll Love It</h2>
//           <div className={styles.highlightGrid}>
//             <div className={styles.highlightItem}>
//               <div className={styles.highlightIcon}>🚀</div>
//               <h3>Fast Performance</h3>
//               <p>Optimized for speed and efficiency to handle all your needs.</p>
//             </div>
//             <div className={styles.highlightItem}>
//               <div className={styles.highlightIcon}>🛡️</div>
//               <h3>Premium Quality</h3>
//               <p>Made with high-grade materials for lasting durability.</p>
//             </div>
//             <div className={styles.highlightItem}>
//               <div className={styles.highlightIcon}>🔋</div>
//               <h3>Long Battery Life</h3>
//               <p>Designed to keep up with your busiest days.</p>
//             </div>
//             <div className={styles.highlightItem}>
//               <div className={styles.highlightIcon}>🎨</div>
//               <h3>Sleek Design</h3>
//               <p>Modern aesthetics that complement any style.</p>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Zoom Modal */}
//       <AnimatePresence>
//         {showZoom && (
//           <motion.div 
//             className={styles.zoomModal}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowZoom(false)}
//           >
//             <div className={styles.zoomContent}>
//               <img 
//                 src={productImages[currentImageIndex]} 
//                 alt={product.name} 
//               />
//               <button 
//                 className={styles.closeZoom}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setShowZoom(false);
//                 }}
//               >
//                 &times;
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ProductDetails;

//good but left the related product section
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import styles from "./ProductDetails.module.css";
// import { assets } from "../../assets/assets";
// import Auth from "../Services/Auth";
// import axios from "axios";
// import {
//   FaCartPlus,
//   FaHeart,
//   FaRegHeart,
//   FaStar,
//   FaChevronLeft,
//   FaChevronRight,
//   FaShare,
//   FaExpand
// } from "react-icons/fa";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = assets.products.find((p) => p.id === parseInt(id));
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showZoom, setShowZoom] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   const productImages = [product.image, ...(product.additionalImages || [])];

//   const handleAddToCart = async () => {
//     try {
//       const token = Auth.getToken();
//       const user_id = Auth.getUserId();
//       if (!token || !user_id) return alert("Please log in first.");

//       const res = await axios.post(
//         "https://mvsdeals.online/addToCart.php",
//         { user_id, product_id: product.id, quantity },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (res.data.status === "success") {
//         navigate("/cart");
//       } else {
//         alert(res.data.message || "Failed to add to cart");
//       }
//     } catch (err) {
//       alert("Error adding to cart");
//     }
//   };

//   if (!product) return <p className={styles.notFound}>Product not found</p>;

//   const suggestedProducts = assets.products.filter(p => p.id !== product.id).slice(0, 6);
//   const relatedProducts = assets.products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) =>
//       prev === productImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) =>
//       prev === 0 ? productImages.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className={styles.pageWrapper}>
//       <button className={styles.backButton} onClick={() => navigate(-1)}>
//         <FaChevronLeft /> Back
//       </button>

//       <main className={styles.productMain}>
//         <section className={styles.productSection}>
//           <div className={styles.imageGallery}>
//             <div
//               className={styles.mainImage}
//               onMouseEnter={() => setShowZoom(true)}
//               onMouseLeave={() => setShowZoom(false)}
//               onClick={() => setShowZoom(!showZoom)}
//             >
//               <img src={productImages[currentImageIndex]} alt={product.name} />
//               {showZoom && (
//                 <div className={styles.zoomIndicator}>
//                   <FaExpand /> Click to zoom
//                 </div>
//               )}
//               <button
//                 className={styles.navButtonLeft}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   prevImage();
//                 }}
//               >
//                 <FaChevronLeft />
//               </button>
//               <button
//                 className={styles.navButtonRight}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   nextImage();
//                 }}
//               >
//                 <FaChevronRight />
//               </button>
//             </div>

//             <div className={styles.thumbnailContainer}>
//               {productImages.map((img, index) => (
//                 <div
//                   key={index}
//                   className={`${styles.thumbnail} ${currentImageIndex === index ? styles.active : ""}`}
//                   onClick={() => setCurrentImageIndex(index)}
//                 >
//                   <img src={img} alt={`Thumbnail ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className={styles.infoContainer}>
//             <div className={styles.productHeader}>
//               <h1>{product.name}</h1>
//               <button
//                 className={styles.favoriteButton}
//                 onClick={() => setIsFavorite(!isFavorite)}
//               >
//                 {isFavorite ? (
//                   <FaHeart className={styles.filled} />
//                 ) : (
//                   <FaRegHeart />
//                 )}
//               </button>
//             </div>

//             <div className={styles.rating}>
//               {[...Array(5)].map((_, i) => (
//                 <FaStar
//                   key={i}
//                   className={i < product.rating ? styles.filledStar : styles.emptyStar}
//                 />
//               ))}
//               <span>({product.reviewCount} reviews)</span>
//             </div>

//             <p className={styles.displayName}>{product.displayName}</p>

//             <div className={styles.priceBox}>
//               <span className={styles.price}>${product.price}</span>
//               {product.cutoffPrice && (
//                 <span className={styles.cutoff}>${product.cutoffPrice}</span>
//               )}
//               {product.discount && (
//                 <span className={styles.discount}>{product.discount}% OFF</span>
//               )}
//             </div>

//             {product.colors && (
//               <div className={styles.colorOptions}>
//                 <h4>Color:</h4>
//                 <div className={styles.colorSwatches}>
//                   {product.colors.map((color, i) => (
//                     <div
//                       key={i}
//                       className={styles.swatch}
//                       style={{ backgroundColor: color }}
//                       title={color}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className={styles.quantitySelector}>
//               <h4>Quantity:</h4>
//               <div className={styles.quantityControls}>
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   disabled={quantity <= 1}
//                 >
//                   -
//                 </button>
//                 <span>{quantity}</span>
//                 <button onClick={() => setQuantity(quantity + 1)}>+</button>
//               </div>
//             </div>

//             <div className={styles.buttonGroup}>
//               <button onClick={handleAddToCart} className={styles.cartBtn}>
//                 <FaCartPlus /> Add to Cart
//               </button>
//               <button onClick={handleAddToCart} className={styles.buyNowBtn}>
//                 Buy Now <IoIosArrowRoundForward />
//               </button>
//               <button
//                 className={styles.shareBtn}
//                 onClick={() => {
//                   navigator.clipboard.writeText(window.location.href);
//                   alert("Product link copied to clipboard!");
//                 }}
//               >
//                 <FaShare /> Share
//               </button>
//             </div>

//             <div className={styles.productDetails}>
//               <h3>Product Details</h3>
//               <p>{product.description}</p>
//               <ul>
//                 {product.features?.map((feature, i) => (
//                   <li key={i}>{feature}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </section>

//         <section className={styles.highlights}>
//           <h2>Why You'll Love It</h2>
//           <div className={styles.highlightGrid}>
//             <div className={styles.highlightItem}>
//               <div className={styles.highlightIcon}>🛡️</div>
//               <h3>Real-Time Protection</h3>
//               <p>Guards against viruses, malware, and online threats 24/7.</p>
//             </div>
//             <div className={styles.highlightItem}>
//               <div className={styles.highlightIcon}>⚡</div>
//               <h3>Lightweight & Fast</h3>
//               <p>Designed to keep your system running smoothly without slowing it down.</p>
//             </div>
//             <div className={styles.highlightItem}>
//               <div className={styles.highlightIcon}>🔒</div>
//               <h3>Secure Browsing</h3>
//               <p>Blocks malicious websites and phishing attempts automatically.</p>
//             </div>
//             <div className={styles.highlightItem}>
//               <div className={styles.highlightIcon}>🔁</div>
//               <h3>Automatic Updates</h3>
//               <p>Always up-to-date with the latest virus definitions and features.</p>
//             </div>
//           </div>
//         </section>
//       </main>

//       <AnimatePresence>
//         {showZoom && (
//           <motion.div
//             className={styles.zoomModal}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowZoom(false)}
//           >
//             <div className={styles.zoomContent}>
//               <img src={productImages[currentImageIndex]} alt={product.name} />
//               <button
//                 className={styles.closeZoom}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setShowZoom(false);
//                 }}
//               >
//                 &times;
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ProductDetails;



import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { assets } from "../../assets/assets";
import Auth from "../Services/Auth";
import axios from "axios";
import {
  FaCartPlus,
  FaHeart,
  FaRegHeart,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaShare,
  FaExpand
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = assets.products.find((p) => p.id === parseInt(id));
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showZoom, setShowZoom] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p className={styles.notFound}>Product not found</p>;

  const productImages = [product.image, ...(product.additionalImages || [])];

  const handleAddToCart = async () => {
    try {
      const token = Auth.getToken();
      const user_id = Auth.getUserId();
      if (!token || !user_id) return alert("Please log in first.");

      const res = await axios.post(
        "https://mvsdeals.online/addToCart.php",
        { user_id, product_id: product.id, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.status === "success") {
        navigate("/cart");
      } else {
        alert(res.data.message || "Failed to add to cart");
      }
    } catch (err) {
      alert("Error adding to cart");
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const relatedProducts = assets.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const suggestedProducts = assets.products
    .filter((p) => p.id !== product.id)
    .slice(0, 6);

  return (
    <div className={styles.pageWrapper}>
      {/* Back Button */}
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <FaChevronLeft /> Back
      </button>

      <main className={styles.productMain}>
        <section className={styles.productSection}>
          {/* Image Gallery */}
          <div className={styles.imageGallery}>
            <div
              className={styles.mainImage}
              onMouseEnter={() => setShowZoom(true)}
              onMouseLeave={() => setShowZoom(false)}
              onClick={() => setShowZoom(!showZoom)}
            >
              <img src={productImages[currentImageIndex]} alt={product.name} />
              {showZoom && (
                <div className={styles.zoomIndicator}>
                  <FaExpand /> Click to zoom
                </div>
              )}
              <button
                className={styles.navButtonLeft}
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <FaChevronLeft />
              </button>
              <button
                className={styles.navButtonRight}
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className={styles.thumbnailContainer}>
              {productImages.map((img, index) => (
                <div
                  key={index}
                  className={`${styles.thumbnail} ${
                    currentImageIndex === index ? styles.active : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className={styles.infoContainer}>
            <div className={styles.productHeader}>
              <h1>{product.name}</h1>
              <button
                className={styles.favoriteButton}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {isFavorite ? (
                  <FaHeart className={styles.filled} />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>

            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < product.rating ? styles.filledStar : styles.emptyStar
                  }
                />
              ))}
              <span>({product.reviewCount} reviews)</span>
            </div>

            <p className={styles.displayName}>{product.displayName}</p>

            <div className={styles.priceBox}>
              <span className={styles.price}>${product.price}</span>
              {product.cutoffPrice && (
                <span className={styles.cutoff}>${product.cutoffPrice}</span>
              )}
              {product.discount && (
                <span className={styles.discount}>{product.discount}% OFF</span>
              )}
            </div>

            {product.colors && (
              <div className={styles.colorOptions}>
                <h4>Color:</h4>
                <div className={styles.colorSwatches}>
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className={styles.swatch}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className={styles.quantitySelector}>
              <h4>Quantity:</h4>
              <div className={styles.quantityControls}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <button onClick={handleAddToCart} className={styles.cartBtn}>
                <FaCartPlus /> Add to Cart
              </button>
              <button onClick={handleAddToCart} className={styles.buyNowBtn}>
                Buy Now <IoIosArrowRoundForward />
              </button>
              <button
                className={styles.shareBtn}
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Product link copied to clipboard!");
                }}
              >
                <FaShare /> Share
              </button>
            </div>

            <div className={styles.productDetails}>
              <h3>Product Details</h3>
              <p>{product.description}</p>
              <ul>
                {product.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className={styles.relatedProducts}>
            <h2>Related Products</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((item) => (
                <motion.div
                  key={item.id}
                  className={styles.relatedCard}
                  whileHover={{ y: -5 }}
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <div className={styles.imageWrapper}>
                    <img src={item.image} alt={item.name} />
                    <button className={styles.quickView}>Quick View</button>
                  </div>
                  <div className={styles.cardText}>
                    <h4>{item.name}</h4>
                    <div className={styles.cardPrice}>
                      <span>${item.price}</span>
                      {item.cutoffPrice && (
                        <span className={styles.originalPrice}>
                          ${item.cutoffPrice}
                        </span>
                      )}
                    </div>
                    <div className={styles.cardRating}>
                      <FaStar className={styles.filledStar} />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Suggested Products */}
        {suggestedProducts.length > 0 && (
          <section className={styles.suggestions}>
            <div className={styles.sectionHeader}>
              <h2>You May Also Like</h2>
              <button
                className={styles.viewAll}
                onClick={() => navigate("/products")}
              >
                View All <IoIosArrowRoundForward />
              </button>
            </div>
            <div className={styles.grid}>
              {suggestedProducts.map((item) => (
                <motion.div
                  key={item.id}
                  className={styles.card}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <div className={styles.cardImage}>
                    <img src={item.image} alt={item.name} />
                    <button
                      className={styles.wishlistButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle wishlist action here
                      }}
                    >
                      <FaRegHeart />
                    </button>
                  </div>
                  <div className={styles.cardContent}>
                    <h4>{item.name}</h4>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>${item.price}</span>
                      {item.cutoffPrice && (
                        <span className={styles.cutoff}>${item.cutoffPrice}</span>
                      )}
                    </div>
                    <div className={styles.ratingRow}>
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < item.rating
                              ? styles.filledStar
                              : styles.emptyStar
                          }
                        />
                      ))}
                      <span>({item.reviewCount})</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Why You'll Love It */}
        <section className={styles.highlights}>
          <h2>Why You'll Love It</h2>
          <div className={styles.highlightGrid}>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>🛡️</div>
              <h3>Real-Time Protection</h3>
              <p>Guards against viruses, malware, and online threats 24/7.</p>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>⚡</div>
              <h3>Lightweight & Fast</h3>
              <p>Designed to keep your system running smoothly without slowing it down.</p>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>🔒</div>
              <h3>Secure Browsing</h3>
              <p>Blocks malicious websites and phishing attempts automatically.</p>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>🔁</div>
              <h3>Automatic Updates</h3>
              <p>Always up-to-date with the latest virus definitions and features.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Zoom Modal */}
      <AnimatePresence>
        {showZoom && (
          <motion.div
            className={styles.zoomModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowZoom(false)}
          >
            <div className={styles.zoomContent}>
              <img src={productImages[currentImageIndex]} alt={product.name} />
              <button
                className={styles.closeZoom}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowZoom(false);
                }}
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;

