import RelatedProducts from "@/components/RelatedProducts";
import { ShopContext } from "@/context/ShopContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Check,
  Minus,
  Plus,
  ShoppingBag,
  MoveRight,
  Truck,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import StoreBenefits from "@/components/StoreBenefits";
import { toast } from "sonner";

function Product() {
  const { productId } = useParams();
  const { allProducts, currency, cartItems, addToCart, updateCartQuantity } =
    useContext(ShopContext);

  const productData = allProducts.find((item) => String(item.id) === productId);

   if (!productData) {
     return <p className="p-10">Product not found.</p>;
   }

  const [thumbnail, setThumbnail] = useState('');
  const [selectedWeight, setSelectedWeight] = useState("500 g");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (productData) {
      const productImage = Array.isArray(productData.image)
        ? productData.image[0]
        : productData.image;

      setThumbnail(productImage || "");
      setSelectedWeight("500 g");
      setQuantity(1);
    }
  }, [productId, productData]);

  return (
    <div className="w-full overflow-hidden">
      {/* Main Product Section */}
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-10 xl:gap-14 p-4 sm:p-6 lg:p-9">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 min-w-0">
          <div className="border border-gray-500/30 w-full max-w-fit mx-auto lg:mx-0 rounded overflow-hidden aspect-square md:p-5 border-none">
            <img
              src={thumbnail}
              alt="Selected product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="w-full lg:w-1/2 min-w-0 flex flex-col">
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
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5">
            <div className="flex items-baseline gap-3">
              <h4 className="font-bold text-2xl tracking-tight text-gray-900">
                {currency}
                {productData.price}
              </h4>

              <p className="text-sm text-gray-400 line-through">
                {currency}5.99
              </p>
            </div>

            <span className="px-3 py-1.5 bg-[#eef7e9] rounded-full text-[#399b25] text-[11px] font-semibold tracking-wide">
              SAVE {currency}1.00
            </span>
          </div>

          {/* Description */}
          <p className="text-[13px] leading-7 text-gray-500 border-b border-gray-100 pb-5">
            {productData.description}
          </p>

          {/* Weight */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-800 mb-3">
              Choose Weight
            </p>

            <div className="flex flex-wrap items-center gap-3">
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

          <p className="text-gray-400 text-xs mt-4 tracking-wide leading-5">
            Approx. 5–6 {productData.name} per kg{" "}
            <span className="mx-1">·</span> Price per 1 kg
          </p>

          {/* Add to Cart */}
          <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3 mt-6">
            {/* Quantity */}
            <button className="w-fit flex items-center justify-between gap-4 border border-gray-200 px-4 py-3 rounded-xl text-gray-700 hover:border-[#399b25] transition-all duration-300">
              <Minus
                size={13}
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                disabled={quantity === 1}
                className="disabled:opacity-30 disabled:cursor-not-allowed text-gray-500"
              />
              <span className="text-sm font-semibold">{quantity}</span>
              <Plus
                size={13}
                onClick={() => setQuantity((prev) => prev + 1)}
                className="text-gray-500"
              />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => {
                addToCart(productData.id, selectedWeight, quantity);

                toast.success(
                  `${quantity} × ${productData.name} added to cart!`,
                );
              }}
              className="flex-1 min-w-0 flex items-center justify-center gap-2 sm:gap-3 bg-[#399b25] text-white px-4 sm:px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[#318820] hover:shadow-lg hover:shadow-green-900/15 transition-all duration-300"
            >
              <span className="truncate">
                Add to Cart · {currency}
                {productData.price * quantity}
              </span>
              <ShoppingBag size={19} className="shrink-0" strokeWidth={1.8} />
            </button>
          </div>

          {/* Basket Information */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs mt-5">
            <p className="flex items-center gap-2 text-[#399b25] font-medium">
              <span className="flex items-center justify-center rounded-full bg-[#eef7e9] p-1 shrink-0">
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
          <div className="bg-[#f7f9f5] border border-[#edf1e9] flex flex-col p-4 sm:p-5 w-full sm:w-[85%] mt-7 gap-4 rounded-xl">
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
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] text-gray-400 mt-5 pt-4 border-t border-gray-100">
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

      {/* Description and Information Section */}
      <div className="w-full px-4 sm:px-6 lg:px-9">
        {/* Tabs */}
        <div className="flex items-center gap-2 sm:gap-5 border-b border-gray-200 overflow-x-auto">
          <button className="shrink-0 text-[#399b25] font-semibold px-4 sm:px-5 py-3 text-sm border-b-2 border-[#399b25]">
            Description
          </button>

          <button className="shrink-0 text-gray-500 hover:text-[#399b25] px-4 sm:px-5 py-3 text-sm transition-colors duration-200">
            Reviews (122)
          </button>

          <button className="shrink-0 text-gray-500 hover:text-[#399b25] px-4 sm:px-5 py-3 text-sm transition-colors duration-200">
            Nutrition & Storage
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 py-6 px-2 sm:px-4">
          {/* Description */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 tracking-tight">
              A crisp little everyday favourite.
            </h4>

            <p className="text-sm text-gray-500 leading-7 text-justify">
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Officiis repellat odit officia
              accusantium repudiandae ipsum voluptatibus quas nesciunt ullam
              earum? Cum a facere illum repellat deserunt labore delectus vel
              aliquam.
            </p>
          </div>

          {/* Good to Know */}
          <div className="flex flex-col pt-1 md:pt-0">
            <h4 className="font-semibold text-sm text-gray-800 mb-1">
              Good to know
            </h4>

            <div className="flex flex-col gap-4 mt-3">
              <div className="flex flex-wrap items-start gap-x-8 gap-y-1 text-sm">
                <p className="text-gray-700 font-medium w-20 shrink-0">Taste</p>
                <p className="text-gray-400">Crisp, juicy & pleasantly tart</p>
              </div>

              <div className="flex flex-wrap items-start gap-x-8 gap-y-1 text-sm">
                <p className="text-gray-700 font-medium w-20 shrink-0">
                  Storage
                </p>
                <p className="text-gray-400">
                  Keep refrigerated for lasting freshness
                </p>
              </div>

              <div className="flex flex-wrap items-start gap-x-8 gap-y-1 text-sm">
                <p className="text-gray-700 font-medium w-20 shrink-0">
                  Best for
                </p>
                <p className="text-gray-400">Snacking, salads & baking</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
       <RelatedProducts
        category={productData.category}
        productId={productData.id}
      />
      <StoreBenefits />
    </div>
  );
}

export default Product;
