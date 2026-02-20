import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, selectedCategory, onChange }) => {
    return (
        <div className="category-filter-container">
            <label htmlFor="category-select" className="category-label">
                Filter by Category:
            </label>
            <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => onChange(e.target.value)}
                className="category-select"
            >
                <option value="All">All</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {/* Capitalize the first letter of each category for better UI */}
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;
