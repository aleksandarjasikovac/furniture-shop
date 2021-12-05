import { useParams } from "react-router";
import { shopItems } from "../data";
import { BsTruck } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";
import "./product.css";
import { StateContext } from "../App";
import { useContext } from "react";
import { Header } from "../components/Header";

export function Product() {
  const params = useParams();
  const [state, handlers] = useContext(StateContext);
  const { shopItems } = state;

  function getShopItemBySlug(slug) {
    return shopItems.find((shopItem) => shopItem.slug === slug);
  }

  const product = getShopItemBySlug(params.productId);

  return (
    <>
      <Header />
      <div className="product-page">
        <div className="product-img">
          <img src={product.img} alt="" />
        </div>
        <div className="product-description">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h1 style={{ paddingTop: 10 }}>€ {product.price}</h1>
          <button
            type="button"
            className="btn"
            onClick={() => handlers.addToCart(product)}
          >
            Add To Cart
          </button>

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
    </>
  );
}
