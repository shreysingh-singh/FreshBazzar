import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function ProductsItems({
  id,
  name,
  image,
  price,
  originalPrice,
  unit,
  pieces,
  rating = 4.9,
}) {
  const { currency } = useContext(ShopContext);

  return (
    <div className="bg-gray-100 p-3 rounded-2xl cursor-pointer">
        {/* to={`/product/${id}`} className="group block" */}
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl bg-[#F7F8F4]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full aspect-square object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="pt-3 space-y-1.5">
        {/* Product Name */}
        <h3 className="text-sm font-semibold text-[#263A29] line-clamp-1">
          {name}
        </h3>

        {/* Quantity */}
        <p className="text-xs text-[#777D72]">
          {unit}
          {pieces && ` · Approx. ${pieces} pieces`}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-500 text-xs">★★★★★</span>
          <span className="text-xs text-[#777D72]">({rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-sm font-bold text-[#263A29]">
            {currency}
            {price}
          </span>

          {originalPrice && (
            <span className="text-xs text-[#999999] line-through">
              {currency}
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsItems;
