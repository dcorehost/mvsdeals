

// import React, { useState, useEffect } from 'react';
// import styles from './Cart.module.css';
// import axios from 'axios';  
// import Auth from '../Services/Auth';  

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);  
//   const [loading, setLoading] = useState(true);  
//   const [error, setError] = useState(null);  

//   useEffect(() => {
//     const token = Auth.getToken();  // Get the token using the Auth service

//     if (!token) {
//       setError("You are not logged in.");
//       setLoading(false);
//       return;
//     }

//     const userId = Auth.getUserId();  // Get the user_id using the Auth service

//     if (!userId) {
//       setError("User ID not found.");
//       setLoading(false);
//       return;
//     }

//     // Fetch cart data from the API using user_id and token
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get(`https://mvsdeals.online/getCart.php?user_id=${userId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.data.status === 'success') {
//           setCartItems(response.data.cart);  // Update the state with cart items
//         } else {
//           setError("Failed to fetch cart items.");
//         }
//       } catch (error) {
//         setError("An error occurred while fetching the cart.");
//       } finally {
//         setLoading(false);  // Stop loading after the request completes
//       }
//     };

//     fetchCart();  // Call the fetchCart function
//   }, []);  // Run the useEffect only once when the component mounts

//   const handleQuantityChange = (id, newQuantity) => {
//     // Update the cartItems state when quantity changes
//     const updatedCart = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity, subtotal: (newQuantity * parseFloat(item.price)).toFixed(2) } : item
//     );
//     setCartItems(updatedCart);
//   };

//   const handleCheckout = () => {
//     // Handle checkout logic here (e.g., redirect to checkout page or submit order)
//     console.log('Proceeding to checkout with the following cart:', cartItems);
//   };

//   if (loading) {
//     return <div>Loading...</div>;  // Show loading text while data is being fetched
//   }

//   if (error) {
//     return <div>{error}</div>;  // Show error message if an error occurs
//   }

//   const calculateTotal = () => {
//     // Calculate the total price by summing up all the subtotals
//     return cartItems.reduce((total, item) => total + parseFloat(item.subtotal), 0).toFixed(2);
//   };

//   return (
//     <div className={styles.cartContainer}>
//       <h1 className={styles.cartTitle}>Cart</h1>

//       {cartItems.length > 0 ? (
//         <div className={styles.cartTableContainer}>
//           <table className={styles.cartTable}>
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Subtotal</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>${item.price}</td>
//                   <td>
//                     <input
//                       type="number"
//                       value={item.quantity}
//                       min="1"
//                       onChange={(e) => handleQuantityChange(item.id, e.target.value)}
//                       className={styles.quantityInput}
//                     />
//                   </td>
//                   <td>${item.subtotal}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div>Your cart is empty.</div>  
//       )}

//       <div className={styles.couponSection}>
//         <h3 className={styles.couponTitle}>Coupon code</h3>
//         <button className={styles.couponButton}>Apply coupon</button>
//       </div>

//       <div className={styles.divider}></div>

//       <div className={styles.cartTotals}>
//         <h2 className={styles.totalsTitle}>Cart totals</h2>

//         <div className={styles.totalsRow}>
//           <span className={styles.totalsLabel}>Subtotal</span>
//           <span className={styles.totalsValue}>${calculateTotal()}</span>
//         </div>

//         <div className={styles.totalsRow}>
//           <span className={styles.totalsLabel}>Total</span>
//           <span className={styles.totalsValue}>${calculateTotal()}</span>
//         </div>

//         <button className={styles.checkoutButton} onClick={handleCheckout}>
//           Proceed to checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';
import axios from 'axios';  
import Auth from '../Services/Auth';  

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  const navigate = useNavigate();

  useEffect(() => {
    const token = Auth.getToken();
    const userId = Auth.getUserId();

    if (!token || !userId) {
      setError("Please log in to view your cart.");
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await axios.get(`https://mvsdeals.online/getCart.php?user_id=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.data.status === 'success') {
          // Add subtotal to each item if not present
          const itemsWithSubtotal = response.data.cart.map(item => ({
            ...item,
            subtotal: (item.quantity * parseFloat(item.price)).toFixed(2)
          }));
          setCartItems(itemsWithSubtotal);
        } else {
          setError("Failed to fetch cart items.");
        }
      } catch (error) {
        setError("An error occurred while fetching the cart.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { 
        ...item, 
        quantity: newQuantity, 
        subtotal: (newQuantity * parseFloat(item.price)).toFixed(2) 
      } : item
    );
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    // Pass cart items and total to checkout page via state
    navigate('/checkout', { 
      state: { 
        cartItems,
        total: calculateTotal()
      } 
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.subtotal), 0).toFixed(2);
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Cart</h1>

      {cartItems.length > 0 ? (
        <div className={styles.cartTableContainer}>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className={styles.quantityInput}
                    />
                  </td>
                  <td>${item.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Your cart is empty.</div>  
      )}

      <div className={styles.couponSection}>
        <h3 className={styles.couponTitle}>Coupon code</h3>
        <button className={styles.couponButton}>Apply coupon</button>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.cartTotals}>
        <h2 className={styles.totalsTitle}>Cart totals</h2>

        <div className={styles.totalsRow}>
          <span className={styles.totalsLabel}>Subtotal</span>
          <span className={styles.totalsValue}>${calculateTotal()}</span>
        </div>

        <div className={styles.totalsRow}>
          <span className={styles.totalsLabel}>Total</span>
          <span className={styles.totalsValue}>${calculateTotal()}</span>
        </div>

        <button className={styles.checkoutButton} onClick={handleCheckout}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;