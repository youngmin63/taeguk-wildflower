import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail.jsx";
import CategoryLayout from "./components/CategoryLayout";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<CategoryLayout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}
