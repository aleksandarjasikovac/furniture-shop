import { useContext, useState } from "react";
import { StateContext } from "../App";
import { CartItem } from "../components/CartItem";
import { Header } from "../components/Header";
import Popup from "../components/Popup";

export function Cart() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [{ cart }] = useContext(StateContext);
  const cartNumber = cart.length
  const totalPrice = cart.reduce(
    (total, currentValue) => (total = total + currentValue.price),
    0
  );

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="items-list">
          <h3 style={{ paddingBottom: 15 }}>You have {cartNumber} item/s in your cart</h3>
          <div className="container-one">
            <div className="cart-items-container">

              <div className="cart-items-list">
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
              <div className="total-price">
                <p className="total-sm">Total Price:</p>
                <h2>€ {totalPrice}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-form">
          <div className="forms" >
            <form autocomplete="off" method="post" action="">
              <h4>Billing Address</h4>
              <input autocomplete="off" type="text" className="form-control" placeholder="Full Name" />
              <input autocomplete="off" type="text" className="form-control" placeholder="Email" />
              <input autocomplete="off" type="text" className="form-control" placeholder="Address" />
              <h4 style={{ paddingTop: 10 }}>Payment Option</h4>
              <input autocomplete="off" type="text" className="form-control" placeholder="Credit Card Number" />
              <div className="csv-date">
                <input autocomplete="off" type="text" className="form-control " placeholder="CSV" />
                <input autocomplete="off" type="text" className="form-control " placeholder="11/21" />
              </div>
            </form>
            <div className="total-price">
              <p className="total-sm">Total Price:</p>
              <h2>€ {totalPrice}</h2>
            </div>

            <div className="btn sm">
              <button type="submit" onClick={() => setButtonPopup(true)}>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Purchase Confirmation</h3>
        <br />
        <p>Your Total Bill is: € {totalPrice}, are you sure you want to proceed?</p>
        <br />
        <hr />
        <div className="popup-buttons">
          <button className="pu-button" type="submit" onClick={() => setButtonPopup(false)}>Yes, I'm Ok With It!</button>
          <button className="pu-button cancel" onClick={() => setButtonPopup(false)}>No, Go Back To The Cart</button>
        </div>


      </Popup>
    </>
  );
}
