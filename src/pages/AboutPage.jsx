import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="page about-page">
            <h1 className="about-title">Welcome to MiniStore</h1>

            <section className="about-intro">
                <p className="lead-text">
                    Your destination for modern, curated products and a seamless digital shopping experience. We bring you the best items globally, ensuring quality and style in every catalog addition.
                </p>
            </section>

            <section className="about-mission">
                <h2>Our Mission</h2>
                <p>
                    We believe shopping should be easy, fast, and enjoyable. Our goal is to connect you with the products you love while delivering an uncompromisingly smooth and secure digital platform. Quality, reliability, and excellent user experience reflect everything we do.
                </p>
            </section>

            <section className="about-highlights">
                <div className="highlight-card">
                    <div className="highlight-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <h3>Fast & Reliable</h3>
                    <p>Optimized infrastructure that gets you from browsing to checkout in seconds.</p>
                </div>

                <div className="highlight-card">
                    <div className="highlight-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                    <h3>Curated Quality</h3>
                    <p>Every product physically vetted to meet modern premium standards.</p>
                </div>

                <div className="highlight-card">
                    <div className="highlight-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </div>
                    <h3>Secure Checkout</h3>
                    <p>State-of-the-art encryption guarantees your peace of mind while shopping.</p>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
