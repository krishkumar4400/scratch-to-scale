import React from "react";
import { useCart } from "./hooks/useCart.js";
import { products } from "./data/products.js";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="w-screen h-screen bg-black text-white">
      <div>
        <header>
          <h1>Shopping Cart</h1>
        </header>
        <main className="">
          <section>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </section>
          <section>
            <Cart
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
              total={total}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
