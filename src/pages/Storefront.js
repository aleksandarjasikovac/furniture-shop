import { useContext } from "react";
import { StateContext } from "../App";
import { ShopItem } from "../components/ShopItem";
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
