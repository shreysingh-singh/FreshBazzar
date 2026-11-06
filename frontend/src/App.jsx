import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Collection from "./pages/Collection";
import HomePage from "./pages/HomePage";
import EcomPage from "./components/EcomPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/shop" element={<EcomPage />} />
        {/* <Route path="/shop" element={<Collection />} />
        <Route path="/test" element={<TestPage />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
