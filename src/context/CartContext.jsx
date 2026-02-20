import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Initialize state from localStorage or use an empty array if none exists
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cartItems');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Error loading cart from localStorage", error);
            return [];
        }
    });

    // Derived state: Total count of items in the cart
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    // Sync state to localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            // Check if item already exists in the cart
            const existingItem = prevItems.find((item) => item.id === product.id);

            if (existingItem) {
                // Find existing item and increment quantity
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Construct new item with required metadata + quantity 1
                const newItem = {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    category: product.category,
                    quantity: 1
                };
                return [...prevItems, newItem];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                totalItems,
                addToCart,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
