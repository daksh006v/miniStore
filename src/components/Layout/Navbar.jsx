import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { totalItems } = useContext(CartContext);

    // Theme state initialized from localStorage
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const [isPulsing, setIsPulsing] = useState(false);

    // Apply theme class to body and save preference
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Trigger pulse animation when totalItems changes
    useEffect(() => {
        if (totalItems > 0) {
            setIsPulsing(true);
            const timer = setTimeout(() => setIsPulsing(false), 300);
            return () => clearTimeout(timer);
        }
    }, [totalItems]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    return (
        <nav className="navbar">
            <div className="brand">
                <NavLink to="/" className="brand-link">
                    <div className="brand-logo">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="brand-icon"
                        >
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <h2>MiniStore</h2>
                    </div>
                </NavLink>
            </div>

            <div className="nav-controls">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active cart-link' : 'cart-link')}>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="cart-icon"
                            >
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Cart
                            <span className={`cart-count ${isPulsing ? 'pulse' : ''}`}>{totalItems}</span>
                        </NavLink>
                    </li>
                </ul>

                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {isDarkMode ? (
                        /* Sun Icon for Dark Mode */
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        /* Moon Icon for Light Mode */
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="theme-icon">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
