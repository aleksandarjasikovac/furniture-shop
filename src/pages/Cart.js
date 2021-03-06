import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../App";
import { CartItem } from "../components/CartItem";
import { Header } from "../components/Header";
import Popup from "../components/Popup";

export function Cart() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [{ cart }] = useContext(StateContext);
  const totalPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  const totalItems = cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);
  return (
    <>
      <Header />

      <div className="cart-container">
        <div className="breadcrumb">
          <Link to="/"> &#8592; Back To Shop</Link>
        </div>
        <div className="items-list">
          {cart.length > 0 ? (
            <h3 style={{ paddingBottom: 15 }}>
              You have {totalItems} item/s in your cart
            </h3>
          ) : (
            <h3 style={{ paddingBottom: 15 }}>
              Your Cart Is Empty, Go Back To Shop
            </h3>
          )}

          <div className="container-one">
            <div className="cart-items-container">
              <div className="cart-items-list">
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
              <div className="total-price">
                <p className="total-sm">Total Price:</p>
                <h2>€ {totalPrice.toFixed(2)}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-form">
          <div className="forms">
            <form autoComplete="off" method="post" action="">
              <h4>Billing Address</h4>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                placeholder="Email"
              />
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                placeholder="Address"
              />
              <h4 style={{ paddingTop: 10 }}>Payment Option</h4>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                placeholder="Credit Card Number"
              />
              <div className="csv-date">
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control "
                  placeholder="CSV"
                />
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control "
                  placeholder="11/21"
                />
              </div>
            </form>
            <div className="total-price">
              <p className="total-sm">Total Price:</p>
              <h2>€ {totalPrice.toFixed(2)}</h2>
            </div>

            <div>
              <button
                className="btn sm"
                type="button"
                onClick={() => setButtonPopup(true)}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Purchase Confirmation</h3>
        <br />
        <p>
          Your Total Bill is: € {totalPrice.toFixed(2)}, are you sure you want
          to proceed?
        </p>
        <br />
        <hr />
        <div className="popup-buttons">
          <button
            className="pu-button"
            type="submit"
            onClick={() => setButtonPopup(false)}
          >
            <Link to="/paymentsuccess" style={{ color: "black" }}>
              {" "}
              I'm Fine With That
            </Link>
          </button>

          <button
            className="pu-button cancel"
            onClick={() => setButtonPopup(false)}
          >
            No, Go Back To The Cart
          </button>
        </div>
      </Popup>
    </>
  );
}
