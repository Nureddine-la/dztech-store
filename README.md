# DzTech Store — WAMD TP–TD 02

A small responsive e-commerce frontend built with React and Redux Toolkit for the WAMD lab. It uses sample in-memory product data; it has no backend, database, authentication, or real payment processing.

## Technologies
- React and JSX
- JavaScript (ES6+)
- Redux Toolkit and React-Redux
- Vite
- CSS

## Features
- Product catalog with reusable product cards
- Search by product name, description, or category
- Category filters
- Redux-powered shopping cart
- Add and remove products
- Increase/decrease quantities
- Cart item count and subtotal
- Responsive layout

## Run locally
1. Install Node.js (which includes npm).
2. Extract or clone this project and open the `dztech-store` folder in VS Code.
3. Open a terminal in that folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL printed in the terminal (usually `http://localhost:5173`).
7. Check that a production build works:

   ```bash
   npm run build
   ```

## Main React components
- `App.jsx`: page layout, search/filter state, and cart-panel visibility.
- `Header.jsx`: brand/navigation and Redux-powered cart item count.
- `ProductList.jsx`: renders the filtered list of products.
- `ProductCard.jsx`: displays one product and dispatches `addToCart`.
- `CartPanel.jsx`: shows cart items, quantities, totals, and removal controls.

## Redux state
The Redux store has one `cart` slice. Its `items` array contains the products currently in the cart. Each cart item has its product data and a `quantity`.

## Redux actions/reducers
- `addToCart(product)`: adds a new product or increments its quantity.
- `removeFromCart(productId)`: removes a product.
- `increaseQuantity(productId)`: increases quantity.
- `decreaseQuantity(productId)`: decreases quantity, removing the item at quantity 1.
- `clearCart()`: empties the cart.

Redux Toolkit's `createSlice` generates action creators and a reducer. `configureStore` creates the store, and React-Redux's `Provider`, `useSelector`, and `useDispatch` connect React components to it.

## Test checklist
- [ ] The page loads and displays six products.
- [ ] Search filters products as you type.
- [ ] Category buttons filter the catalog.
- [ ] Add the same product twice: its quantity should become 2.
- [ ] The cart badge reflects the total quantity.
- [ ] Increase/decrease buttons update quantity and subtotal.
- [ ] Remove deletes a product from the cart.
- [ ] Clear cart empties the cart.
- [ ] `npm run build` completes without errors.

## Notes
- Product images are represented with emoji-style illustrations to avoid external image dependencies.
- Prices are sample values in Algerian dinars (DA).
- Checkout is only a demonstration; no payment is taken.
