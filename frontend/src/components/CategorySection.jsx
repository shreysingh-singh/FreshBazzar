import { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import MoveRightComponent from "./MoveRight";

function CategorySection() {
  const {
    freshFruits,
    freshVegetables,
    leafyGreens,
    seasonalPicks,
    organicGoodness,
    dailyEssentials,
  } = useContext(ShopContext);
  const categories = [
    {
      title: "Fresh fruits",
      count: freshFruits.length,
      image:
        "https://images.pexels.com/photos/4385291/pexels-photo-4385291.jpeg",
    },
    {
      title: "Vegetables",
      count: freshVegetables.length,
      image:
        "https://images.pexels.com/photos/7879834/pexels-photo-7879834.jpeg",
    },
    {
      title: "Leafy greens",
      count: leafyGreens.length,
      image:
        "https://images.unsplash.com/photo-1640958904159-51ae08bd3412?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      title: "Seasonal picks",
      count: seasonalPicks.length,
      image:
        "https://images.pexels.com/photos/7172251/pexels-photo-7172251.jpeg",
    },
    {
      title: "Organic goodness",
      count: organicGoodness.length,
      image:
        "https://plus.unsplash.com/premium_photo-1664527305903-bd7f9b68c51a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      title: "Daily essentials",
      count: dailyEssentials.length,
      image:
        "https://plus.unsplash.com/premium_photo-1664391960037-8aefeab6482b?q=80&w=3163&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
  ];

  return (
    <section className="w-full px-4 py-5">
      <div className="flex items-center justify-between p-5">
        <Title
          text1={"A fresh pick for every aisle"}
          text2={"Good things start with great ingredients"}
        />
        <MoveRightComponent text={"Shop all products"} />
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5 ">
        {categories.map((category) => (
          <div
            key={category.title}
            className="group flex cursor-pointer flex-col items-center text-center"
          >
            {/* Category Image */}
            <div className="flex h-[140px] w-full items-center justify-center overflow-hidden rounded-[14px] bg-[#f7f9f6] p-2.5">
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
                className="h-full w-full bg-[#f7f9f6] rounded-2xl object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Category Name */}
            <h3 className="mt-3 text-[15px] font-medium text-[#242424]">
              {category.title}
            </h3>

            {/* Product Count */}
            <p className="mt-2 text-xs text-[#858b80]">
              {category.count} products
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
