import { useContext } from "react";
import { StateContext } from "../App";
import "./CartItem.css";
import { BsTrash } from "react-icons/bs";

export function CartItem({ cartItem }) {
  const [, { removeFromCart, addToCart }] = useContext(StateContext);

  return (
    <div className="cart-item">
      <div className="product-cart-img">
        <img src={cartItem.img} alt="" />
      </div>

      <div className="product-nm">
        <h4>{cartItem.name}</h4>
        <p>{cartItem.description}</p>
        <p style={{ fontSize: 13, color: "gray" }}>Sku: {cartItem.id}</p>
      </div>
      <div className="product-qty">
        <button
          type="button"
          className="inc-dec"
          onClick={() => removeFromCart(cartItem.id)}
        >
          -
        </button>
        <h4>{cartItem.quantity}</h4>
        <button
          type="button"
          className="inc-dec"
          onClick={() => addToCart(cartItem)}
        >
          +
        </button>
      </div>

      <div className="product-price">
        <h4>€ {cartItem.price}</h4>
      </div>

      <div className="rmv-btn">
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeFromCart(cartItem.id)}
        >
          <BsTrash />
        </button>
      </div>
    </div>
  );
}
