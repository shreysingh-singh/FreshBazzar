import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductsItems from "./ProductsItems";
import Title from "./Title";
import { Link } from "react-router-dom";

function RelatedProducts({ category, productId }) {
  const { allProducts = [] } = useContext(ShopContext);

  const relatedProducts = useMemo(() => {
    return allProducts
      .filter(
        (item) =>
          item.category === category &&
          String(item.id) !== String(productId)
      )
      .slice(0, 4);
  }, [allProducts, category, productId]);

  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-9 mb-12">
      <Title
        text1="Related products"
        text2="Discover more fresh products you might like."
      />

      {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
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
        <p className="text-sm text-gray-500 mt-5">
          No related products available.
        </p>
      )}
    </section>
  );
}

export default RelatedProducts;
