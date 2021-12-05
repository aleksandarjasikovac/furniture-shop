import { useContext } from "react";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StateContext } from "../App";
import { ShopItem } from "../components/ShopItem";
import { shopItems } from "../data";
import "./Storefront.css";
import { Header } from "../components/Header";

export function Storefront() {
  const [{ shopItems }] = useContext(StateContext);

  return (
    <>
      <Header />
      <div className="container">
        <div className="shop-items-list">
          {shopItems.map((shopItem) => {
            return <ShopItem key={shopItem.id} shopItem={shopItem} />;
          })}
        </div>
      </div>
    </>
  );
}
