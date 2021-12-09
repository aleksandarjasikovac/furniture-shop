import "./ShopItem.css";
import { Link } from "react-router-dom";
import { StateContext } from "../App";
import { useContext } from "react";

export function ShopItem({ shopItem }) {
  const [, { addToCart }] = useContext(StateContext);
  return (
    <div className="shop-item-container">
      <div className="shop-item-image-container">
        <img className="shop-item-image" src={shopItem.img} alt="" />
      </div>
      <div className="shop-item-content">
        <h3 className="shop-item-product-name">
          <Link to={`/products/${shopItem.slug}`}>{shopItem.name}</Link>
        </h3>
        <p className="shop-item-product-description">{shopItem.description}</p>
        <div className="price-cart">
          <h3 className="item-price">€ {shopItem.price}</h3>
          <button
            type="button"
            className="btn-add"
            onClick={() => addToCart(shopItem)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
