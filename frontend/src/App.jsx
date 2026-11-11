// import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Collection from "./pages/Collection";
// import HomePage from "./pages/HomePage";
// import EcomPage from "./components/EcomPage";
// import Cart from "./pages/Cart";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import TestPage from "./pages/TestPage";

// function App() {
//   return (
//     <>
//       {/* <Header />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/collection" element={<Collection />} />
//         <Route path="/shop" element={<EcomPage />} />
//         <Route path='/cart' element={<Cart />} />
//         {/* <Route path="/shop" element={<Collection />} />
//         <Route path="/test" element={<TestPage />} /> */}
//       {/* </Routes> */}

//       {/* // <Footer /> */} */}



//     </>
//   );
// }

// export default App;


function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* I Will Remove test page later  */}
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<HomePage />}/>
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App
