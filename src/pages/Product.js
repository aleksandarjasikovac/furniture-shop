import { useParams } from "react-router";
import { shopItems } from "../data";
import { BsTruck } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";
import "./product.css";

function getShopItemBySlug(slug) {
  return shopItems.find((shopItem) => shopItem.slug === slug);
}

export function Product() {
  const params = useParams();
  const product = getShopItemBySlug(params.productId);
  return (
    <div className="product-page">
      <div className="product-img">
        <img src={product.img} alt="" />
      </div>
      <div className="product-description">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <button className="btn">Add To Cart</button>
        <div className="availability">
          <BsTruck style={{ fontSize: 20, paddingRight: 10 }} />
          <p>
            Dostupno za isporuku ili preuzimanje Opcije isporuke pogledaj pri
            plaćanju
          </p>
        </div>
        <hr style={{ marginTop: 20, marginBottom: 20 }} />
        <div className="warehouse">
          <BsHouse style={{ fontSize: 20, paddingRight: 10 }} />
          <p>
            Proveri stanje zaliha i lokaciju proizvoda u robnoj kući IKEA
            Beograd
          </p>
        </div>
      </div>
    </div>
  );
}
