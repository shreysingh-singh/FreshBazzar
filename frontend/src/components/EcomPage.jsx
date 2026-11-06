// import { ShopContext } from '@/context/ShopContext';
// import React, { useContext } from 'react'

// function EcomPage() {

//     const { freshFruits } = useContext(ShopContext);

//     // console.log(freshFruits);

//     const product = {
//     name: "Nike Pegasus 41 shoes",
//     category: "Sports",
//     price: 189,
//     offerPrice: 159,
//     rating: 4,
//     images: [
//       "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
//       "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
//       "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
//       "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png",
//     ],
//     description: [
//       "High-quality material",
//       "Comfortable for everyday use",
//       "Available in different sizes",
//     ],
//   };

//   const [thumbnail, setThumbnail] = React.useState(product.images[0]);

//   return (
//     product && (
//       <div className="max-w-6xl w-full px-6">
//         <div className="flex flex-col md:flex-row gap-16 mt-4">
//           <div className="flex gap-3">
//             <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
//               <img
//                 src={thumbnail}
//                 alt="Selected product"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//           {/* text Area  */}
//           <div className="text-sm w-full md:w-1/2">
//             <p className="text-sm font-medium text-green">FRESH.FROM PACK</p>
//             <h1 className="text-3xl font-medium">Green Apple</h1>

//             <div className="flex items-center gap-0.5 mt-1">
//               {Array(5)
//                 .fill("")
//                 .map((_, i) =>
//                   product.rating > i ? (
//                     <svg
//                       key={i}
//                       width="14"
//                       height="13"
//                       viewBox="0 0 18 17"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
//                         fill="#615fff"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       width="14"
//                       height="13"
//                       viewBox="0 0 18 17"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z"
//                         fill="#615fff"
//                         fill-opacity="0.35"
//                       />
//                     </svg>
//                   ),
//                 )}
//               <p className="text-base ml-2">({product.rating})</p>
//             </div>

//             <div className="mt-6">
//               <p className="text-gray-500/70 line-through">
//                 MRP: ${product.price}
//               </p>
//               <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
//               <span className="text-gray-500/70">(inclusive of all taxes)</span>
//             </div>

//             <p className="text-base font-medium mt-6">About Product</p>
//             <ul className="list-disc ml-4 text-gray-500/70">
//               {product.description.map((desc, index) => (
//                 <li key={index}>{desc}</li>
//               ))}
//             </ul>

//             <div className="flex items-center mt-10 gap-4 text-base">
//               <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
//                 Add to Cart
//               </button>
//               <button className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition">
//                 Buy now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   );
// }

// export default EcomPage

import {
  Check,
  Leaf,
  Minus,
  MoveRight,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";
import React, { useState } from "react";

function EcomPage() {
  const product = {
    name: "Nike Pegasus 41 shoes",
    category: "Sports",
    price: 189,
    offerPrice: 159,
    rating: 4,
    images: [
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png",
    ],
    description: [
      "High-quality material",
      "Comfortable for everyday use",
      "Available in different sizes",
    ],
  };

  const [thumbnail, setThumbnail] = React.useState(product.images[0]);
  const [selectedWeight, setSelectedWeight] = useState("1 kg");

  return (
    <div className="h-screen">
      <div className="flex p-9">
        <div className="w-1/2 ">
          <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
            <img
              src={thumbnail}
              alt="Selected product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Text Area  */}
        <div className="w-full flex flex-col">
          {/* Category */}
          <p className="text-[#399b25] tracking-[0.18em] text-[11px] font-semibold uppercase">
            Fresh Fruits <span className="text-gray-300 mx-1">/</span> Farm
            Picked
          </p>

          {/* Rating */}
          <div className="flex items-center gap-4 mt-4 mb-5">
            <div className="flex items-center gap-1 text-amber-400 text-sm tracking-wider">
              ★★★★★
            </div>
            <span className="text-xs text-gray-300">|</span>
            <p className="text-gray-500 text-xs flex items-center gap-1.5">
              <Check size={12} className="text-[#399b25]" />
              <span className="font-medium text-gray-600">In stock</span>
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex items-baseline gap-3">
              <h4 className="font-bold text-2xl tracking-tight text-gray-900">
                $4.99
              </h4>
              <p className="text-sm text-gray-400 line-through">$5.99</p>
            </div>

            <span className="px-3 py-1.5 bg-[#eef7e9] rounded-full text-[#399b25] text-[11px] font-semibold tracking-wide">
              SAVE $1.00
            </span>
          </div>

          {/* Description */}
          <p className="text-[13px] leading-7 text-gray-500 border-b border-gray-100 pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            nihil voluptatibus numquam obcaecati quia laboriosam ratione facilis
            quis porro nobis commodi neque, placeat atque dolore consequuntur,
            mollitia ipsam itaque odit.
          </p>

          {/* Weight */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-800 mb-3">
              Choose Weight
            </p>

            <div className="flex items-center gap-3">
              {["1 kg", "500 g"].map((weight) => (
                <button
                  key={weight}
                  onClick={() => setSelectedWeight(weight)}
                  className={`min-w-24 px-5 py-2.5 text-sm font-semibold rounded-lg
            border transition-all duration-300 cursor-pointer
            ${
              selectedWeight === weight
                ? "bg-[#399b25] text-white border-[#399b25] shadow-sm shadow-green-900/10"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#399b25] hover:text-[#399b25] hover:bg-[#f5faf2]"
            }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {selectedWeight === weight && (
                      <Check size={14} strokeWidth={2.5} />
                    )}
                    {weight}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-400 text-xs mt-4 tracking-wide">
            Approx. 5–6 apples per kg <span className="mx-1">·</span> Price per
            1 kg
          </p>

          {/* Add to Cart */}
          <div className="flex items-center gap-3 mt-6">
            {/* Quantity */}
            <button className="flex items-center justify-between gap-4 border border-gray-200 px-4 py-3 rounded-xl text-gray-700 hover:border-[#399b25] transition-all duration-300">
              <Minus size={13} className="text-gray-500" />
              <span className="text-sm font-semibold">2</span>
              <Plus size={13} className="text-gray-500" />
            </button>

            {/* Cart Button */}
            <button className="flex-1 flex items-center justify-center gap-3 bg-[#399b25] text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[#318820] hover:shadow-lg hover:shadow-green-900/15 transition-all duration-300">
              Update Cart · $9.98
              <ShoppingBag size={19} strokeWidth={1.8} />
            </button>
          </div>

          {/* Basket Information */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs mt-5">
            <p className="flex items-center gap-2 text-[#399b25] font-medium">
              <span className="flex items-center justify-center rounded-full bg-[#eef7e9] p-1">
                <Check size={12} />
              </span>
              2 × 1 kg already in your basket
            </p>

            <button className="flex items-center gap-1.5 text-gray-500 hover:text-[#399b25] transition-colors duration-200">
              View Cart
              <MoveRight size={14} />
            </button>
          </div>

          {/* Delivery Information */}
          <div className="bg-[#f7f9f5] border border-[#edf1e9] flex flex-col p-5 w-full sm:w-[85%] mt-7 gap-4 rounded-xl">
            <p className="flex items-center gap-3 text-xs text-gray-600">
              <Truck size={17} className="text-[#399b25] shrink-0" />
              <span>Delivery tomorrow, Oct 27 · 9 AM–12 PM</span>
            </p>

            <p className="flex items-center gap-3 text-xs text-gray-600">
              <ShieldCheck size={17} className="text-[#399b25] shrink-0" />
              <span>Secure and quality-checked products</span>
            </p>

            <p className="flex items-center gap-3 text-xs text-gray-600">
              <Leaf size={17} className="text-[#399b25] shrink-0" />
              <span>Fresh produce, carefully selected</span>
            </p>
          </div>

          {/* Product Information */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-gray-400 mt-5 pt-4 border-t border-gray-100">
            <p>
              SKU: <span className="text-gray-600 font-medium">FB-FR-001</span>
            </p>
            <p>
              Category:{" "}
              <span className="text-gray-600 font-medium">Fresh Fruits</span>
            </p>
            <p>
              Origin: <span className="text-gray-600 font-medium">USA</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcomPage;
