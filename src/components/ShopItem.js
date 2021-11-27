import "./ShopItem.css";
import { Link } from "react-router-dom";

export function ShopItem(props) {
    return (
        <div className="shop-item-container">
            <div className="shop-item-image-container">
                <img
                    className="shop-item-image"
                    src="https://via.placeholder.com/300"
                    alt=""
                />
            </div>
            <div className="shop-item-content">

                <h3 className="shop-item-product-name">
                    <Link to={`/products/${props.slug}`}>{props.name}</Link>
                </h3>
                <p className="shop-item-product-description">{props.description}</p>
            </div>
        </div>
    );
}