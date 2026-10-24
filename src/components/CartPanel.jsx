import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

export default function CartPanel({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && <button className="cart-backdrop" onClick={onClose} aria-label="Close cart overlay" />}
      <aside className={`cart-panel ${isOpen ? "cart-panel-open" : ""}`} aria-label="Shopping cart" aria-hidden={!isOpen}>
        <div className="cart-heading">
          <div>
            <p className="eyebrow">YOUR SELECTION</p>
            <h2>Shopping cart <span>({totalQuantity})</span></h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <span className="empty-cart-icon">🛍️</span>
            <h3>Your cart is waiting</h3>
            <p>Add something you love from the product catalog.</p>
            <button className="primary-button" onClick={onClose}>Explore products</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className={`cart-item-art ${item.color}`}>{item.icon}</div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.price.toLocaleString("en-US")} DA each</p>
                    <div className="quantity-control">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease ${item.name} quantity`}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase ${item.name} quantity`}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-end">
                    <strong>{(item.price * item.quantity).toLocaleString("en-US")} DA</strong>
                    <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="summary-line"><span>Subtotal</span><strong>{totalPrice.toLocaleString("en-US")} DA</strong></div>
              <div className="summary-line"><span>Delivery</span><span>Calculated later</span></div>
              <div className="summary-line total-line"><span>Total</span><strong>{totalPrice.toLocaleString("en-US")} DA</strong></div>
              <p className="checkout-note">Demo project only — no payment or order is processed.</p>
              <button className="primary-button full-button" onClick={() => window.alert("This is a lab demo. A payment system is not implemented.")}>Continue to checkout</button>
              <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>Clear cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}