import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { ShoppingBag } from "lucide-react";

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
    <div className="bg-white p-3 rounded-2xl cursor-pointer">
      {/* to={`/product/${id}`} className="group block" */}
      {/* Product Image */}
      {/* <span class="bg-lime-300 text-neutral-800 text-xs px-2 py-0.5 rounded-full pb-5 overflow-hidden">
        <span class="font-bold">20%</span> off
      </span> */}
      <div className="relative overflow-hidden rounded-xl bg-[#F7F8F4]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full aspect-square object-contain transition-transform duration-200 ease-in-out hover:scale-105"
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
        <div className="flex items-center justify-between gap-2 pt-1">
          <span className="text-sm font-bold text-[#263A29]">
            {currency}
            {price}
          </span>
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-green-500 hover:bg-green-800 text-white">
            <ShoppingBag size={16} strokeWidth={1.8} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsItems;
