import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function ProductsItems({
  id,
  name,
  image,
  price,
  bestSeller,
  isOrganic,
  discount,
  originalPrice,
  unit,
  pieces,
  rating = 4.9,
}) {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-500 cursor-pointer" to={`/product/${id}`}>
      <div className="bg-[#F5F7F2] border border-gray-200 p-3 rounded-2xl cursor-pointer">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-xl bg-[#F7F8F4]">
          <img
            src={Array.isArray(image) ? image[0] : image}
            alt={name}
            loading="lazy"
            className="w-full aspect-square object-contain transition-transform duration-200 ease-in-out hover:scale-105"
          />

          {/* Product Badges */}
          <div className="absolute top-3 left-3">
            {bestSeller ? (
              <span className="bg-green-100 text-green-600 text-[10px] sm:text-xs px-3 py-1 rounded-2xl">
                Bestseller
              </span>
            ) : isOrganic ? (
              <span className="bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs px-3 py-1 rounded-full">
                Organic
              </span>
            ) : discount > 0 ? (
              <span className="bg-red-100 text-red-500 text-[10px] sm:text-xs px-3 py-1 rounded-full">
                {discount}% OFF
              </span>
            ) : null}
          </div>
        </div>

        {/* Product Details */}
        <div className="pt-3 space-y-1.5">
          <h3 className="text-sm font-semibold text-[#263A29] line-clamp-1">
            {name}
          </h3>

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
          <div className="flex items-center justify-between gap-2 pt-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#263A29]">
                {currency}
                {price}
              </span>

              {originalPrice > price && (
                <span className="text-xs text-gray-400 line-through">
                  {currency}
                  {originalPrice}
                </span>
              )}
            </div>

            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-green-500 hover:bg-green-800 text-white transition-colors">
              <ShoppingBag size={16} strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductsItems;
