import React from 'react';
import '../styles/Shop.css';
import Merch from './Merch';

const items = [
  {
    url: "https://images.asos-media.com/products/asos-luxe-racer-front-bodysuit-in-white/20276170-1-white?$n_320w$&wid=317&fit=constrain",
    price: "12.00",
  },
  {
    url: "https://images.asos-media.com/products/asos-luxe-mesh-bodysuit-in-black/14856021-1-black?$n_320w$&wid=317&fit=constrain",
    price: "14.00",
  },
  {
    url: "https://images.asos-media.com/products/asos-luxe-top-with-twist-front-in-white/20815302-1-white?$n_320w$&wid=317&fit=constrain",
    price: "12.00",
  },
  {
    url: "https://images.asos-media.com/products/asos-luxe-button-through-cupped-sundress-in-white/14089130-1-white?$n_320w$&wid=317&fit=constrain",
    price: "12.00",
  },
  {
    url: "https://images.asos-media.com/products/asos-luxe-jersey-pencil-midi-skirt-in-black/11589845-1-black?$n_320w$&wid=317&fit=constrain",
    price: "10.00",
  },
  {
    url: "https://images.asos-media.com/products/asos-luxe-kick-flare-leggings/12550727-1-black?$n_320w$&wid=317&fit=constrain",
    price: "16.00",
  },
  {
    url: "https://images.asos-media.com/products/asos-luxe-long-sleeve-lace-up-cut-out-bodycon-mini-dress-in-black/21792945-1-black?$n_320w$&wid=317&fit=constrain",
    price: "15.00",
  },
  {
    url: "https://images.asos-media.com/products/asos-luxe-fluffy-roll-neck-longline-jumper/14732837-1-camel?$n_320w$&wid=317&fit=constrain",
    price: "17.50",
  },
  {
    url: "https://images.asos-media.com/products/asos-luxe-cross-over-bardot-top-with-long-sleeve/12042142-1-black?$n_320w$&wid=317&fit=constrain",
    price: "18.00",
  },
  {
    url: "https://images.asos-media.com/products/asos-luxe-fallen-shoulder-cami-in-white/14962383-1-white?$n_320w$&wid=317&fit=constrain",
    price: "16.00",
  },
  {
    url: "https://images.asos-media.com/products/asos-luxe-tailored-smart-mix-match-cigarette-suit-trousers/12804458-1-blush?$n_320w$&wid=317&fit=constrain",
    price: "18.00",
  },
  {
    url: "https://images.asos-media.com/products/asos-luxe-cotton-mini-shirt-dress-in-white/8320435-1-white?$n_320w$&wid=317&fit=constrain",
    price: "20.00",
  },
];

const Shop = ({ setTotalItem, totalItem, retrievedItem, setRetrievedItem}) => {

  const submitHandler = (e, item) => {
    e.preventDefault();
    setTotalItem(totalItem + +item.amount);
  }

  return (
    <div className="box">
      {items.map((item, index) => {
        return <Merch item={item} index={index} totalItem={totalItem} setTotalItem={setTotalItem} retrievedItem={retrievedItem} setRetrievedItem={setRetrievedItem}/>
      })}
    </div>
  );
};

export default Shop;