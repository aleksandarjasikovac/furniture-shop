import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Storefront } from "./pages/Storefront";
import { Product } from "./pages/Product";
import "./App.css";
import { NotFound } from "./404page";
import { useState } from "react";
import { Cart } from "./pages/Cart";

const defaultState = {
  cart: [],
  shopItems: [
    {
      id: 0,
      quantity: 1,
      price: 308.99,
      img: "https://www.ikea.com/rs/sr/images/products/rodulf-podesivi-pisaci-sto-siva-bela__0799317_pe767519_s5.jpg",
      slug: "songesand",
      name: "Songesand",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },
    {
      id: 1,
      quantity: 1,
      price: 264.99,
      img: "https://www.ikea.com/rs/sr/images/products/metod-maximera-vis-elem-s-izvl-funk-3fi-1vr-2pol-bela-bodbyn-prljavobela__1002769_pe824808_s5.jpg?f=xxs",
      slug: "hovag",
      name: "Hovag",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },

    {
      id: 2,
      quantity: 1,
      price: 124.99,
      img: "https://www.ikea.com/rs/sr/images/products/vimle-trosed-lezaj-s-lenjivcem-sa-sirokim-rukohvatima-saxemara-svetloplava__0952234_pe801652_s5.jpg",
      slug: "troten",
      name: "Trotten",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },

    {
      id: 3,
      quantity: 1,
      price: 323.99,
      img: "https://www.ikea.com/rs/sr/images/products/starkvind-preciscivac-vazduha-bela__0978611_pe814183_s5.jpg",
      slug: "enhet",
      name: "Enhet",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },

    {
      id: 4,
      quantity: 1,
      price: 126.99,
      img: "https://www.ikea.com/rs/sr/images/products/utespelare-gejmerska-stolica-bomstad-siva__0985643_pe816715_s5.jpg",
      slug: "bekant",
      name: "BEKANT",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },

    {
      id: 5,
      quantity: 1,
      price: 201.99,
      img: " https://www.ikea.com/rs/sr/images/products/tertial-radna-lampa-bela__0609308_pe684439_s5.jpg",
      slug: "skarsta",
      name: "SKARSTA",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },
    {
      id: 6,
      quantity: 1,
      price: 412.99,
      img: "https://www.ikea.com/rs/sr/images/products/nymane-zid-lampa-dir-ind-svetl-tr-priklj-bela__0556059_pe660485_s5.jpg",
      slug: "lagkapten",
      name: "LAGKAPTEN",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },

    {
      id: 7,
      quantity: 1,
      price: 328.99,
      img: "https://www.ikea.com/rs/sr/images/products/elloven-stalak-za-monitor-s-fiokom-bela__0955984_pe804426_s5.jpg",
      slug: "metod",
      name: "METOD / MAXIMERA",
      description:
        "Lorem ipsum dolro sit amet. Ne znam sta jos ide, nije ni bitno",
    },
  ],
};

export const StateContext = createContext(defaultState);

export function App() {
  const [state, setState] = useState(defaultState);

  const handlers = {
    addToCart: (shopItem) => {
      setState((prevState) => {
        const updatedCart = [...state.cart];
        const updatedItemIndex = updatedCart.findIndex(
          (item) => item.id === shopItem.id
        );
        if (updatedItemIndex < 0) {
          updatedCart.push({ ...shopItem, quantity: 1 });
        } else {
          const updatedItem = {
            ...updatedCart[updatedItemIndex],
          };
          updatedItem.quantity++;
          updatedCart[updatedItemIndex] = updatedItem;
        }
        console.log(updatedCart);
        return {
          ...state,
          cart: updatedCart,
        };
      });
    },

    removeFromCart: (id) => {
      setState((prevState) => {
        const updatedCart = [...state.cart];
        const updatedItemIndex = updatedCart.findIndex(
          (item) => item.id === id
        );

        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity--;
        if (updatedItem.quantity <= 0) {
          updatedCart.splice(updatedItemIndex, 1);
        } else {
          updatedCart[updatedItemIndex] = updatedItem;
        }

        return { ...state, cart: updatedCart };
      });
    },
  };

  return (
    <StateContext.Provider value={[state, handlers]}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Storefront />} />
          <Route path="/checkout" element={<Cart />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StateContext.Provider>
  );
}

export default App;
