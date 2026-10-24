import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (products.length === 0) {
    return <div className="empty-products">No products match your search. Try another term or category.</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}