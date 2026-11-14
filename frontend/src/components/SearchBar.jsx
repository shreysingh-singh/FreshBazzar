import React, { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowUpRight } from "lucide-react";

function SearchBar() {
  const {
    search,
    setSearch,
    allProducts,
    currency,
    formatPrice,
    setShowSearch,
  } = useContext(ShopContext);

  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter products based on search input
  const filteredProducts = search.trim()
    ? allProducts
        .filter((product) =>
          product.name.toLowerCase().includes(search.trim().toLowerCase()),
        )
        .slice(0, 6)
    : [];

  // Navigate to selected product
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearch("");
    setShowSuggestions(false);
    setShowSearch(false);
  };

  // Search all matching products on Enter or button click
  const handleSearch = (e) => {
    e?.preventDefault();

    if (!search.trim()) return;

    setShowSuggestions(false);
    setShowSearch(true);
    navigate("/collection");
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      {/* Search Input */}
      <form
        onSubmit={handleSearch}
        className="flex h-[46px] w-full items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-white pl-4 transition focus-within:border-[#399b25] focus-within:shadow-sm"
      >
        <Search size={19} className="shrink-0 text-gray-500" />

        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search for fruits, vegetables and more..."
          className="h-full w-full bg-transparent text-xs text-gray-700 outline-none placeholder:text-gray-400 sm:text-sm"
        />

        {search && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setShowSuggestions(false);
            }}
            className="shrink-0 text-gray-400 transition hover:text-red-500"
            aria-label="Clear search"
          >
            <X size={17} />
          </button>
        )}

        <button
          type="submit"
          className="mr-1.5 shrink-0 rounded-full bg-[#399b25] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#318820]"
        >
          Search
        </button>
      </form>

      {/* Live Search Suggestions */}
      {showSuggestions && search.trim() && (
        <div className="absolute left-0 top-[54px] z-50 w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
          {filteredProducts.length > 0 ? (
            <>
              <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                <p className="text-xs font-semibold text-gray-500">
                  Suggested Products
                </p>

                <span className="text-[11px] text-gray-400">
                  {filteredProducts.length} results shown
                </span>
              </div>

              <div className="max-h-[360px] overflow-y-auto p-2">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => handleProductClick(product.id)}
                    className="group flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition hover:bg-[#f4f9f1]"
                  >
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-50">
                      <img
                        src={
                          Array.isArray(product.image)
                            ? product.image[0]
                            : product.image
                        }
                        alt={product.name}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-800">
                        {product.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {product.category} · {product.unit}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-[#399b25]">
                        {formatPrice
                          ? formatPrice(product.price)
                          : `${currency}${product.price}`}
                      </p>

                      <ArrowUpRight
                        size={15}
                        className="text-gray-300 transition group-hover:text-[#399b25]"
                      />
                    </div>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleSearch}
                className="flex w-full items-center justify-center gap-2 border-t border-gray-100 py-3 text-xs font-semibold text-[#399b25] transition hover:bg-[#f4f9f1]"
              >
                View all matching products
                <ArrowUpRight size={14} />
              </button>
            </>
          ) : (
            <div className="px-5 py-8 text-center">
              <Search size={25} className="mx-auto mb-2 text-gray-300" />

              <p className="text-sm font-semibold text-gray-700">
                No products found
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Try searching for another product.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
