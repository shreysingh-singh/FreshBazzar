import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const ProductsItems = ({
  id,
  name,
  image,
  price,
  originalPrice,
  unit,
  pieces,
  rating = 4.9,
  bestSeller,
  isOrganic,
  discount,
}) => {
  const { currency } = useContext(ShopContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const productImage = Array.isArray(image) ? image[0] : image;

  return (
    <Link to={`/product/${id}`} className="block h-full">
      <div className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Product Image */}
        <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-xl bg-gray-50">
          <img
            src={productImage}
            alt={name}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {/* Bestseller / Organic / Discount */}
          <div className="absolute left-3 top-3">
            {bestSeller && (
              <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
                Bestseller
              </span>
            )}

            {!bestSeller && isOrganic && (
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                Organic
              </span>
            )}

            {!bestSeller && !isOrganic && discount > 0 && (
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                {discount}% OFF
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFavorite((prev) => !prev);
            }}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-red-50"
          >
            <Heart
              size={18}
              className={
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
              }
            />
          </button>
        </div>

        {/* Product Details */}
        <div className="pt-4">
          <h3 className="truncate text-base font-semibold text-gray-800">
            {name}
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            {unit}
            {pieces ? ` · Approx. ${pieces} pieces` : ""}
          </p>

          <div className="mt-2 flex items-center gap-1">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-xs text-gray-500">({rating})</span>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-gray-900">
                {currency}
                {price}
              </span>

              {originalPrice > price && (
                <span className="ml-2 text-sm text-gray-400 line-through">
                  {currency}
                  {originalPrice}
                </span>
              )}
            </div>

            <ShoppingBag size={20} className="text-green-600" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsItems;
