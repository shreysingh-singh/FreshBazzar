import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductsItems from "./ProductsItems";
import Title from "./Title";

function RelatedProducts({ category, productId }) {
  const { allProducts = [] } = useContext(ShopContext);

  const relatedProducts = useMemo(() => {
    return allProducts
      .filter(
        (item) =>
          item.category === category && String(item.id) !== String(productId),
      )
      .slice(0, 4);
  }, [allProducts, category, productId]);

  return (
    <section className="mb-12 mt-12 px-4 sm:px-6 lg:px-9">
      <Title
        text1="Related products"
        text2="Discover more fresh products you might like."
      />

      {relatedProducts.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {relatedProducts.map((item) => (
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
        <p className="mt-6 text-center text-sm text-gray-500">
          No related products available.
        </p>
      )}
    </section>
  );
}

export default RelatedProducts;
