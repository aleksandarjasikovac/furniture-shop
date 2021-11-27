import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Storefront } from "./pages/Storefront";
import { Product } from "./pages/Product";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Storefront />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;