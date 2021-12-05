import { Link } from "react-router-dom";
import "./header.css";
import { BsBagCheck } from "react-icons/bs";
import { useContext } from "react";
import { StateContext } from "../App";



export function Header() {
  const [{ cart }] = useContext(StateContext);
  const cartNumber = cart.length
  return (
    <header>
      <div className="top-message">
        <span className="material-icons md-12">done</span>
        <p>Free delivery over €300</p>
        <span className="material-icons md-12">done</span>
        <p>Return within 30 days</p>
        <span className="material-icons md-12">done</span>
        <p>Free returns</p>
      </div>
      <div className="main-menu">
        <div className="logo">
          <Link to="/">
            <img
              className="logo"
              src="https://www.ikea.com/rs/sr/static/ikea-logo.f7d9229f806b59ec64cb.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="">Proizvodi</a>
            </li>
            <li>
              <a href="">Posebne ponude</a>
            </li>
            <li>
              <a href="">Prostorije</a>
            </li>
            <li>
              <a href="">Novo</a>
            </li>
          </ul>
        </div>
        <div className="search">
          <span className="material-icons">search</span>
        </div>

        <div className="cart">
          <Link to="/checkout">
            <BsBagCheck className="btn-bag" />
          </Link>
          <p className="number-of-items">{cartNumber}</p>
        </div>
      </div>
    </header>
  );
}
