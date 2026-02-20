import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    // Calculate the total price of all items in the cart
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="page cart-page">
            <h1>Your Cart</h1>

            {cartItems.length === 0 ? (
                <div className="empty-cart-message">
                    <p>Your cart is currently empty.</p>
                </div>
            ) : (
                <div className="cart-content">
                    <div className="cart-items-list">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-image-container">
                                    <img src={item.image} alt={item.title} className="cart-item-image" />
                                </div>

                                <div className="cart-item-details">
                                    <h3 className="cart-item-title">{item.title}</h3>
                                    <p className="cart-item-category">{item.category}</p>
                                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                </div>

                                <div className="cart-item-actions">
                                    <div className="cart-item-quantity">
                                        <span>Qty: {item.quantity}</span>
                                    </div>
                                    <div className="cart-item-subtotal">
                                        <span>Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row total-row">
                            <span>Total:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button
                            className="clear-cart-btn"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
