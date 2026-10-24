import { useMemo, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartPanel from "./components/CartPanel";
import { categories, products } from "./data/products";

export default function App() {
  // Local UI state: search text, selected category, and cart panel visibility.
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All products");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Derive the visible products from the current search and category.
  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);
      const matchesCategory =
        selectedCategory === "All products" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchText, selectedCategory]);

  return (
    <div id="home" className="app-shell">
      <div className="announcement">
        <span className="announcement-sparkle">✦</span>
        Smart tech, simple shopping. <strong>Made for everyday life.</strong>
      </div>

      <Header onCartClick={() => setIsCartOpen(true)} />

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-kicker"><span /> THE NEXT-GEN TECH STORE</div>
            <h1>Good tech.<br /><span>Better everyday.</span></h1>
            <p>Discover the devices and accessories that make your everyday a little smarter.</p>
            <a className="hero-button" href="#products">Explore collection <span>↘</span></a>
            <div className="hero-trust">
              <div className="trust-avatars"><span>✦</span><span>✓</span><span>★</span></div>
              <p><strong>Tech made simple</strong><br />Your everyday essentials, all in one place.</p>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration of electronics">
            <div className="hero-glow" />
            <div className="hero-chip chip-top">✦ &nbsp; SMART PICKS</div>
            <div className="hero-device phone-device"><span className="phone-camera" /><span className="phone-screen">D<span>Z</span></span></div>
            <div className="hero-device headphone-device"><span className="headband" /><span className="ear ear-left" /><span className="ear ear-right" /></div>
            <div className="hero-device watch-device"><span className="watch-strap" /><span className="watch-face">10:09<br /><small>MON</small></span></div>
            <div className="hero-chip chip-bottom">DESIGNED FOR YOUR DAY <span>↗</span></div>
            <span className="floating-star star-one">✳</span><span className="floating-star star-two">✦</span>
          </div>
        </section>

        <section className="benefits" aria-label="Store benefits">
          <div><span className="benefit-icon">↗</span><p><strong>Curated tech</strong><small>Everyday essentials</small></p></div>
          <div><span className="benefit-icon">◇</span><p><strong>Quality first</strong><small>Picked with care</small></p></div>
          <div><span className="benefit-icon">♡</span><p><strong>Simple shopping</strong><small>A smoother experience</small></p></div>
        </section>

        <section id="products" className="catalog-section">
          <div className="section-heading">
            <div><p className="eyebrow">THE COLLECTION</p><h2>Find your next <span>favorite.</span></h2></div>
            <p className="section-note">Useful tech. Thoughtful picks.<br />Ready for your everyday.</p>
          </div>

          <div className="catalog-tools">
            <div className="category-tabs" aria-label="Filter products by category">
              {categories.map((category) => (
                <button
                  key={category}
                  className={selectedCategory === category ? "category-tab active" : "category-tab"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <label className="search-box">
              <span>⌕</span>
              <input
                type="search"
                placeholder="Search products..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                aria-label="Search products"
              />
              <kbd>↵</kbd>
            </label>
          </div>

          <p className="results-count">Showing <strong>{filteredProducts.length}</strong> products</p>
          <ProductList products={filteredProducts} />
        </section>

        <section id="about" className="about-strip">
          <div className="about-symbol">D<span>Z</span></div>
          <div><p className="eyebrow">ABOUT DZTECH</p><h2>Technology should feel <span>effortless.</span></h2><p>DzTech Store is a student-built e-commerce demo created to explore React components and Redux state management.</p></div>
          <a href="#products">Browse products ↗</a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">D<span>Z</span></span><span>dztech<span className="brand-light">store</span></span></a>
        <p>Built for learning React + Redux · WAMD TP–TD 02</p>
        <a href="#home">Back to top ↑</a>
      </footer>

      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}