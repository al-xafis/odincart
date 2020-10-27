import React, { useState } from 'react';
import '../styles/Cart.css';

const Cart = ({retrievedItem, setRetrievedItem}) => {


  return (
      <div className="container">
        <div className="info">
          <div className="description_item">
            <div className="item_name">Nike O' Sonic</div>
            <div className="item_amount">4</div>
          </div>
        </div>
      </div>
  );
};

export default Cart;