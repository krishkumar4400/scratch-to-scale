import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';

const ProductCard = ({product, onAddToCart}) => {
  return (
    <div>
      <h3>
        {
            product.name
        }
      </h3>
      <div>
        <p>
            {
                product.price
            }
        </p>
      </div>
      <div>
        <button onClick={() => onAddToCart(product)}>
           <FaShoppingCart/> Add to Cart 
        </button>
      </div>
    </div>
  )
}

export default ProductCard
