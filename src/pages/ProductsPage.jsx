import React, { useState, useEffect } from 'react';
import ProductList from '../components/Product/ProductList';
import CategoryFilter from '../components/Product/CategoryFilter';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Derive unique categories from the fetched products
    const categories = [...new Set(products.map(product => product.category))];

    // Filter products based on selected category
    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="page">
            <h1>Products</h1>

            {error && (
                <div className="api-error-state">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="error-icon">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <h2>Something went wrong</h2>
                    <p>{error}</p>
                    <button className="retry-btn" onClick={() => window.location.reload()}>
                        Try Again
                    </button>
                </div>
            )}

            {!loading && !error && (
                <>
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onChange={setSelectedCategory}
                    />
                    <ProductList products={filteredProducts} />
                </>
            )}
        </div>
    );
};

export default ProductsPage;
