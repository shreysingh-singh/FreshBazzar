import { useContext, useMemo } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductsItems from "./ProductsItems";

function BestSeller() {
  const {
    freshFruits,
    freshVegetables,
    leafyGreens,
    seasonalPicks,
    organicGoodness,
    dailyEssentials,
  } = useContext(ShopContext);

  const bestSeller = useMemo(() => {
    // Get bestseller products from each category separately
    const categories = [
      freshFruits ?? [],
      freshVegetables ?? [],
      leafyGreens ?? [],
      seasonalPicks ?? [],
      organicGoodness ?? [],
      dailyEssentials ?? [],
    ].map((category) =>
      category.filter((item) => item.bestSeller === true),
    );

    // Pick products in rotation from each category
    const mixedProducts = [];
    let index = 0;

    while (mixedProducts.length < 5) {
      let foundProduct = false;

      for (const category of categories) {
        if (category[index]) {
          mixedProducts.push(category[index]);
          foundProduct = true;

          if (mixedProducts.length === 5) break;
        }
      }

      if (!foundProduct) break;

      index++;
    }

    return mixedProducts;
  }, [
    freshFruits,
    freshVegetables,
    leafyGreens,
    seasonalPicks,
    organicGoodness,
    dailyEssentials,
  ]);

  return (
    <section className="p-4 sm:p-6 md:p-8">
      <div className="px-4">
        <Title
          text1="BEST SELLERS"
          text2="Discover the fresh favourites our customers love"
        />
      </div>

      {bestSeller.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestSeller.map((item) => (
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
      ) : (
        <p className="text-sm text-gray-500 text-center py-8">
          No bestseller products available right now.
        </p>
      )}
    </section>
  );
}

export default BestSeller;
