import { useSelector } from "react-redux";

export default function Header({ onCartClick }) {
  // useSelector reads the shared cart state from the Redux store.
  const itemCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="DzTech Store home">
        <span className="brand-mark">D<span>Z</span></span>
        <span>dztech<span className="brand-light">store</span></span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#products">Shop</a>
        <a href="#about">About</a>
      </nav>

      <button className="cart-button" onClick={onCartClick} aria-label={`Open cart with ${itemCount} items`}>
        <span className="cart-icon">🛍</span>
        <span className="cart-label">My cart</span>
        <span className="cart-count">{itemCount}</span>
      </button>
    </header>
  );
}