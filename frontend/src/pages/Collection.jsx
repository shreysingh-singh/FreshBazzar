import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  SlidersHorizontal,
  RotateCcw,
  ChevronDown,
  LeafIcon,
} from "lucide-react";

import { Slider } from "@/components/ui/slider";
import Title from "../components/Title";
import ProductsItems from "../components/ProductsItems";
import { ShopContext } from "../context/ShopContext";
import Breadcrumb from "../components/Breadcrumb";

function Collection() {
  const {
    search,
    setSearch,
    allProducts = [],
    freshFruits = [],
    freshVegetables = [],
    leafyGreens = [],
    seasonalPicks = [],
    organicGoodness = [],
    dailyEssentials = [],
  } = useContext(ShopContext);

  // 2. Category data
  const categories = useMemo(
    () => [
      { name: "Fresh Fruits", value: "freshFruits", products: freshFruits },
      {
        name: "Fresh Vegetables",
        value: "freshVegetables",
        products: freshVegetables,
      },
      {
        name: "Leafy Greens",
        value: "leafyGreens",
        products: leafyGreens,
      },
      {
        name: "Seasonal Picks",
        value: "seasonalPicks",
        products: seasonalPicks,
      },
      {
        name: "Organic Goodness",
        value: "organicGoodness",
        products: organicGoodness,
      },
      {
        name: "Daily Essentials",
        value: "dailyEssentials",
        products: dailyEssentials,
      },
    ],
    [
      freshFruits,
      freshVegetables,
      leafyGreens,
      seasonalPicks,
      organicGoodness,
      dailyEssentials,
    ],
  );

  // 3. Filter states
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // 4. Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // 5. Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    );

    setCurrentPage(1);
  };

  // 6. Reset all filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setCurrentPage(1);
  };

  // 7. Filter products

  const filteredProducts = useMemo(() => {
    // First apply category filtering
    let products =
      selectedCategories.length === 0
        ? allProducts
        : categories
            .filter((category) => selectedCategories.includes(category.value))
            .flatMap((category) => category.products);

    // Then apply search filtering
    const searchTerm = search.trim().toLowerCase();

    if (searchTerm) {
      products = products.filter((product) =>
        product.name?.toLowerCase().includes(searchTerm),
      );
    }

    return products;
  }, [allProducts, selectedCategories, categories, search]);

  // 8. Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

 

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-[#292d28]">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-4 sm:px-8 lg:px-10">
        {/* Breadcrumb */}
        {/* <div className="mb-5 flex items-center gap-2 text-[10px] text-stone-400">
          <span className="cursor-pointer hover:text-[#48aa2c]">Home</span>

          <span>/</span>

          <span className="cursor-pointer hover:text-[#48aa2c]">Shop</span>

          <span>/</span>

          <span className="text-stone-700">Fresh products</span>
        </div> */}
        <Breadcrumb />

        {/* Page Heading */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <Title
              text1="Fresh products"
              text2="Goodness in every basket. Explore our freshest picks."
            />
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="flex shrink-0 items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-xs font-medium transition hover:border-[#4bb52e] lg:hidden"
          >
            <SlidersHorizontal size={15} />
            Filters
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${
                showFilter ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[170px_minmax(0,1fr)] xl:grid-cols-[205px_minmax(0,1fr)]">
          {/* Sidebar Filters */}
          <aside className={`${showFilter ? "block" : "hidden"} lg:block `}>
            {/* Filter Header */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="text-sm font-semibold">Filters</h2>

              <button
                onClick={resetFilters}
                className="flex cursor-pointer items-center gap-1 text-[10px] text-[#399b25] hover:underline"
              >
                <RotateCcw size={11} />
                Reset all
              </button>
            </div>

            {/* Categories */}
            <section className="border-b border-stone-100 py-3">
              <h3 className="mb-2 text-[11px] font-semibold">Categories</h3>

              {/* All Products */}
              <label className="flex cursor-pointer items-center justify-between py-2 text-[11px] text-stone-600">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.length === 0}
                    onChange={resetFilters}
                    className="h-3.5 w-3.5 cursor-pointer accent-[#4bb52e]"
                  />
                  All products
                </span>

                <span className="text-[10px] text-stone-400">
                  {allProducts.length}
                </span>
              </label>

              {/* Individual Categories */}
              {categories.map((category) => (
                <label
                  key={category.value}
                  className="flex cursor-pointer items-center justify-between py-2 text-[11px] text-stone-600"
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.value)}
                      onChange={() => handleCategoryChange(category.value)}
                      className="h-3.5 w-3.5 cursor-pointer accent-[#4bb52e]"
                    />

                    {category.name}
                  </span>

                  <span className="text-[10px] text-stone-400">
                    {category.products.length}
                  </span>
                </label>
              ))}
            </section>

            {/* Price Range */}
            <section className="border-b border-stone-100">
              <div className="mb-7">
                <p className="border-b border-stone-100 py-3 pl-1 text-sm">
                  Price range
                </p>

                <Slider
                  defaultValue={[75]}
                  max={100}
                  min={0}
                  step={1}
                  className="mx-auto mt-5 w-full max-w-xs [&_[data-slot=slider-track]]:bg-white [&_[data-slot=slider-range]]:bg-[#4bb52e] [&_[data-slot=slider-thumb]]:border-[#4bb52e] [&_[data-slot=slider-thumb]]:bg-[#4bb52e]"
                />

                <div className="mt-5 flex justify-between gap-2">
                  <span className="rounded border border-stone-200 px-6 py-3 text-[10px]">
                    ₹0
                  </span>

                  <span className="rounded border border-stone-200 px-6 py-3 text-[10px]">
                    ₹100
                  </span>
                </div>
              </div>
            </section>

            {/* Freshness Banner */}
            <div className="mt-5 rounded-xl bg-[#f1f8ec] p-4">
              <div className="mb-2 text-xl text-[#4bb52e]">
                <LeafIcon />
              </div>

              <h3 className="text-[12px] font-semibold">
                Freshness you can count on.
              </h3>

              <p className="mt-2 text-[10px] leading-relaxed text-stone-500">
                Carefully picked and packed. Always covered by our freshness
                promise.
              </p>
            </div>
          </aside>

          {/* Products Section */}
          <main className="min-w-0">
            {/* Products Header */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[10px] text-stone-400">
              <span>
                Showing{" "}
                <span className="font-semibold text-stone-700">
                  {filteredProducts.length === 0 ? 0 : indexOfFirstProduct + 1}
                  {" - "}
                  {Math.min(indexOfLastProduct, filteredProducts.length)}
                </span>{" "}
                of {filteredProducts.length} products
              </span>

              <span className="hidden sm:inline">
                Freshly stocked every morning
              </span>
            </div>

            {/* Selected Category */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {selectedCategories.length === 0 ? (
                <button
                  onClick={resetFilters}
                  className="rounded-full bg-[#eff8e9] px-3 py-1.5 text-[10px] text-[#398f25]"
                >
                  All products
                </button>
              ) : (
                <>
                  {selectedCategories.map((value) => {
                    const category = categories.find(
                      (item) => item.value === value,
                    );

                    return (
                      <button
                        key={value}
                        onClick={() => handleCategoryChange(value)}
                        className="rounded-full bg-[#eff8e9] px-3 py-1.5 text-[10px] text-[#398f25] transition hover:bg-[#e2f2d8]"
                      >
                        {category?.name} ×
                      </button>
                    );
                  })}

                  <button
                    onClick={resetFilters}
                    className="text-[10px] text-stone-400 hover:text-red-500"
                  >
                    Clear all
                  </button>
                </>
              )}
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                  {currentProducts.map((item) => (
                    <ProductsItems
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      price={item.price}
                      originalPrice={item.originalPrice}
                      unit={item.unit}
                      pieces={item.pieces}
                      rating={item.rating}
                      bestSeller={item.bestSeller}
                      isOrganic={item.isOrganic}
                      discount={item.discount}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                    {/* Previous Button */}
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-sm text-stone-600 transition hover:border-[#4bb52e] hover:text-[#4bb52e] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      ‹
                    </button>

                    {/* Page Numbers */}
                    {Array.from(
                      { length: totalPages },
                      (_, index) => index + 1,
                    ).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`h-8 min-w-8 rounded-full px-2 text-[11px] transition ${
                          currentPage === page
                            ? "bg-[#4bb52e] text-white"
                            : "bg-stone-50 text-stone-600 hover:bg-[#eff8e9]"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    {/* Next Button */}
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-sm text-stone-600 transition hover:border-[#4bb52e] hover:text-[#4bb52e] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      ›
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-xl border border-dashed border-stone-200 py-16 text-center text-sm text-stone-400">
                No products match these filters.
                <button
                  onClick={resetFilters}
                  className="mx-auto mt-3 block text-xs font-medium text-[#399b25] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Collection;
