import { useNavigate } from "react-router";

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/product/${product.id}`);
      }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-12 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1">
            <span className="text-sm">★</span>
            <span className="text-sm font-semibold text-gray-800">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-auto flex items-center justify-between pt-5">
          <div>
            <p className="text-2xl font-bold text-gray-900">${product.price}</p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-700 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
