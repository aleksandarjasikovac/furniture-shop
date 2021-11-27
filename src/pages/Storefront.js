import { ShopItem } from "../components/ShopItem";
import { shopItems } from "../data";
import "./Storefront.css";

export function Storefront() {
    return (
        <div className="container">
            <div className="shop-items-list">

                {shopItems.map((shopItem) => {
                    return (
                        <ShopItem
                            key={shopItem.id}
                            slug={shopItem.slug}
                            name={shopItem.name}
                            description={shopItem.description} />
                    )
                })}
            </div>
        </div>
    );
}