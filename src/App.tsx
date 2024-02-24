import { Route, Routes } from "react-router-dom";
import "./App.css";

import InfoPage from "./components/cart/InfoPage";

import Layout from "./UI/Layout";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="cart/:id" element={<InfoPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
