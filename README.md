# Mini eCommerce App (FakeStore API + Context + Cart)

A production-quality Mini eCommerce Application designed as a responsive storefront. Built rigorously with React functional components, hooks, and Context API. This application fetches product data dynamically using the FakeStore API and implements complete add-to-cart flows, complete with microinteractions, themes, and client-side category filtering. The entire application is styled solely with pure, responsive CSS.

## Features

- **Product Listing:** Seamlessly fetches and displays catalog data from the FakeStore API.
- **Category Filtering:** Smooth client-side item sorting by categorical groups.
- **Global Shopping Cart:** Driven by a robust implementation of the React Context API.
- **Persistent Cart:** State is heavily synchronized with `localStorage` so the user never loses their cart.
- **Dynamic Navbar Badge:** Displays a live, animated count of `totalItems` within exactly synced view states.
- **Add-to-Cart Microinteractions:** Includes subtle CSS animations such as floating badges and bouncy pop interactions.
- **Sticky Order Summary:** Responsive layout keeps the cart total visible as the user scrolls.
- **Themes & Styling:** Ships with a complete Light & Dark Mode toggle system mapping cleanly to CSS variables.
- **Responsive Layouts:** Gracefully collapses layouts across Desktop, Tablet, and Mobile device widths using CSS Grid and Flexbox.
- **Robust Edge Cases:** Hardened against API failures, rapid clicks, empty states, and long title layouts.
- **Brand Story (About Page):** Extends the store’s authenticity with dedicated SVG card grids and copy.

## Tech Stack

- **Framework:** React (Functional Components & Hooks)
- **Routing:** React Router DOM
- **State Management:** Context API
- **Styling:** Pure CSS (CSS Variables, Flexbox, Grid, Keyframes, No UI Libraries)
- **Data Source:** [FakeStore API](https://fakestoreapi.com/)
- **Build Tool:** Vite

## Folder Structure

```text
src/
├── components/
│   ├── Layout/      (Navbar, Page Wrappers)
│   └── Product/     (ProductCard, CategoryFilter)
├── context/         (CartContext.jsx)
├── pages/           (ProductsPage, CartPage, AboutPage)
├── App.jsx
└── index.jsx
```

*(Note: Certain boilerplate hooks or utilities may be folded directly into context or components depending on scale.)*

## Setup & Run Locally

To get this application running locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **View the application:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment

This application is structurally prepared for production. Simply run `npm run build` to generate the Vite production bundle. The resulting `dist/` directory can be instantly deployed to modern static hosting platforms such as Vercel, Netlify, or GitHub Pages.
