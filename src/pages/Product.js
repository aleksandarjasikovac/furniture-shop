import { useParams } from "react-router";
import { shopItems } from "../data";


function getShopItemBySlug(slug) {
    return shopItems.find((shopItem) => shopItems.slug === slug);
}
export function Product() {
    const params = useParams();
    const product = getShopItemBySlug(params.productId);

    return (
        <div className="container">
            <div>🗑️</div>
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </div>
        </div>
    )
}