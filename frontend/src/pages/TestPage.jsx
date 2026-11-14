import React from 'react'

function TestPage() {
     const [isFavorite, setIsFavorite] = useState(false);
  return (
   <div className="max-w-[340px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md font-sans">
      {/* Top Row: Discount Badge & Wishlist Heart */}
      <div className="flex items-center justify-between mb-3">
        <span className="rounded-md bg-[#EAF5E9] px-2.5 py-1 text-xs font-semibold text-[#3B873E]">
          20% OFF
        </span>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Add to wishlist"
          className="text-gray-500 hover:text-red-500 transition-colors"
        >
          <svg
            xmlns="http://w3.org"
            fill={isFavorite ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className={`w-6 h-6 ${isFavorite ? 'text-red-500' : ''}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>

      {/* Selected Region: Product Image Container */}
      <div className="mb-4 flex h-52 w-full items-center justify-center overflow-hidden border-2 border-[#1A73E8] bg-white p-4">
        <img
          src="https://unsplash.com"
          alt="Sweet Corn"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Metadata */}
      <div className="space-y-1">
        <p className="text-sm text-gray-500">Fresh vegetables</p>
        <h3 className="text-xl font-semibold text-gray-900">Sweet Corn</h3>
        <p className="text-sm text-gray-500">2 pieces &middot; approx. 500 g</p>
      </div>

      {/* Star Rating */}
      <div className="mt-2.5 flex items-center gap-1">
        <div className="flex text-[#F59E0B]">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://w3.org"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        <span className="ml-1 text-sm text-gray-600">(4.7)</span>
      </div>

      {/* Bottom Row: Pricing & Add to Cart Button */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900">$1.99</span>
          <span className="text-sm text-gray-400 line-through">$2.49</span>
        </div>

        <button
          aria-label="Add to cart"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF5E9] text-[#3B873E] transition-colors hover:bg-[#d7ecd5]"
        >
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TestPage







