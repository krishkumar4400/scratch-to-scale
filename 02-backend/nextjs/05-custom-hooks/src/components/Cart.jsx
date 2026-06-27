import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, onUpdateQuantity, onRemove, total }) => {
  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
      <div>
        <h3>
          {" "}
          Total:
          {typeof total === "string" ? total : total.toFixed(2)}
        </h3>
        <button className="py-2">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
