
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="product-card">
      <div className="product-image">{product.emoji}</div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>${product.price.toFixed(2)}</strong>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
