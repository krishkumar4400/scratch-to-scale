import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="">
      <div>
        <h4>{item.name}</h4>
        <div>
          <p>{item.price}</p>
        </div>
        <div>
            <button onClick={() => onUpdateQuantity(item.id, item.quantity-1)}>
                <FaMinus />
            </button>
            <span>
                {item.quantity}
            </span>
            <button onClick={() => onUpdateQuantity(item.id, item.quantity+1)}>
                <FaPlus />
            </button>
        </div>
      </div>

      <button onClick={() => onRemove(item.id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
