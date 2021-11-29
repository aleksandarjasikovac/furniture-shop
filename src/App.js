import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Storefront } from "./pages/Storefront";
import { Product } from "./pages/Product";
import "./App.css";
import { NotFound } from "./404page";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Storefront />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
