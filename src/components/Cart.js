import React from 'react';
import '../styles/Cart.css';

const Cart = ({retrievedItem, setRetrievedItem}) => {

  return (
      <div className="container">
        <div className="info">
          {retrievedItem.map((item, index) => {
            return (
              <div className="description_item" key={index}>
                <div className="item_name">{item.item.name}</div>
                <div className="item_amount">{item.amount}</div>
              </div>
            )
          })}
        </div>
      </div>
  );
};

export default Cart;