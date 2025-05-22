import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';
import axios from 'axios';
import Auth from '../Services/Auth';
import { FaTrashAlt } from 'react-icons/fa'; 

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
          const itemsWithSubtotal = response.data.cart.map(item => ({
            ...item,
            quantity: parseInt(item.quantity) || 1,
            subtotal: (parseInt(item.quantity) * parseFloat(item.price)).toFixed(2)
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
      item.id === id
        ? {
            ...item,
            quantity: newQuantity,
            subtotal: (newQuantity * parseFloat(item.price)).toFixed(2)
          }
        : item
    );
    setCartItems(updatedCart);
  };

  const handleDeleteItem = async (productId) => {
    const token = Auth.getToken();
    const userId = Auth.getUserId();

    try {
      const response = await axios.post(
        'https://mvsdeals.online/deleteFromCart.php',
        {
          user_id: userId,
          product_id: productId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.status === 'success') {
        setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
      } else {
        alert('Failed to delete item: ' + response.data.message);
      }
    } catch (err) {
      alert('Error deleting item from cart.');
      console.error(err);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout', {
      state: {
        cartItems,
        total: calculateTotal()
      }
    });
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + parseFloat(item.subtotal), 0).toFixed(2);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Cart</h1>

      {cartItems.length > 0 ? (
        <div className={styles.cartTableContainer}>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
<td>
  <img 
    src={`https://mvsdeals.online/images/${item.image}`} 
    alt={item.name} 
    className={styles.cartImage}
    width="100"
    height="100"
  />
</td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className={styles.quantityInput}
                    />
                  </td>
                  <td>${item.subtotal}</td>
                  <td>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDeleteItem(item.product_id)}
                      title="Delete item"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
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
