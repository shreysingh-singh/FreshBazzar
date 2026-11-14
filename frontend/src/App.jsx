import { Route, Routes, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import TestPage from "./pages/TestPage";

import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "sonner";

// Layout for normal website pages
const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

// Layout for authentication pages
const AuthLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <Toaster position="top-right" richColors closeButton duration={1000} />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/our-story" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/test" element={<TestPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
