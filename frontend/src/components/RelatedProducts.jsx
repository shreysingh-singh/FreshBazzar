import { ShopContext } from "@/context/ShopContext";
import { useContext, useMemo } from "react";
import ProductsItems from "./ProductsItems";

function RelatedProducts({ category, productId }) {
  const {
    freshFruits = [],
    freshVegetables = [],
    leafyGreens = [],
    seasonalPicks = [],
    organicGoodness = [],
    dailyEssentials = [],
  } = useContext(ShopContext);

  // Combine all products
  const allProducts = useMemo(
    () => [
      ...freshFruits,
      ...freshVegetables,
      ...leafyGreens,
      ...seasonalPicks,
      ...organicGoodness,
      ...dailyEssentials,
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

  // Find related products
  const related = useMemo(() => {
    return allProducts
      .filter((item) => item.category === category && item.id !== productId)
      .slice(0, 4);
  }, [allProducts, category, productId]);

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Related Products
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          You might also like these products.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {related.map((item) => (
          <ProductsItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
