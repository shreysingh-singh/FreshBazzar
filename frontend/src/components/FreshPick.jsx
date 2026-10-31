import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductsItems from './ProductsItems';

function FreshPick() {
    const { freshFruits } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);



    useEffect(() => {
        setLatestProducts(freshFruits.slice(0,5));
    },[])
    
  return (
    <div className="p-8 bg-gray-100">
      <div>
        <Title
          text1={"Fresh Favourites,loved by you"}
          text2={"The everyday picks that keep our community coming back"}
        />
      </div>

      {/* Rendering Products  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 ">
        {latestProducts.map((items, idx) => (
          <ProductsItems
            key={idx}
            id={items.id}
            name={items.name}
            image={items.image}
            price={items.price}
            originalPrice={items.originalPrice}
            unit={items.unit}
            pieces={items.pieces}
            rating={items.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default FreshPick
