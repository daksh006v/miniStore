import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { title, price, image, category } = product;
    const { addToCart } = useContext(CartContext);

    // Animation state
    const [isAdding, setIsAdding] = useState(false);

    // Trim title to ~40 characters for consistent card height
    const truncatedTitle = title.length > 40 ? `${title.substring(0, 40)}...` : title;

    const handleAddToCart = () => {
        // Add to cart context
        addToCart(product);

        // Trigger animations
        setIsAdding(true);

        // Reset animation state after duration finishes (matches floatUpFade ~600ms)
        setTimeout(() => {
            setIsAdding(false);
        }, 600);
    };

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={image} alt={title} className="product-image" />
            </div>
            <div className="product-details">
                <span className="product-category">{category}</span>
                <h3 className="product-title" title={title}>{truncatedTitle}</h3>
                <p className="product-price">${price.toFixed(2)}</p>

                <div className="add-to-cart-container">
                    {/* Floating badge renders when isAdding is true */}
                    {isAdding && <span className="floating-badge">+1</span>}

                    <button
                        className={`add-to-cart-btn ${isAdding ? 'added' : ''}`}
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
