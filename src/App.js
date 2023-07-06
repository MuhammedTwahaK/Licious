import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/NavBar/Layout";
import ImgHome from "./Component/NavBar/ImgHome";
import ShopCategories from "./Component/NavBar/ShopCategories";
import Cards from "./Component/Cards";
import Footer from "./Component/NavBar/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ImgHome />} />
          <Route path="ShopCategories" element={<ShopCategories />} />
          <Route path="card" element={<Cards />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
