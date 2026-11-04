import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductsItems from './ProductsItems';
import MoveRightComponent from './MoveRight';

function FreshPick() {
    const { freshFruits } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);



    useEffect(() => {
        setLatestProducts(freshFruits.slice(0,5));
    },[])
    
  return (
    <div className="p-8 ">
      <div className="flex  items-center justify-between p-x-4">
        <Title
          text1={"Fresh Favourites,loved by you"}
          text2={"The everyday picks that keep our community coming back"}
        />
        <MoveRightComponent text={"Shop all products"} />
      </div>

      {/* Rendering Products  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 mt-4">
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
