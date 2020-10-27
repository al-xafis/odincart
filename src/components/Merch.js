import React, { useState } from 'react';
import '../styles/Shop.css';

const Merch = ({ item, index, totalItem, setTotalItem, retrievedItem, setRetrievedItem }) => {
  const [amount, setAmount] = useState(0);

  console.log(retrievedItem);
  console.log(retrievedItem);

  return (
    <div className="card" key={index}>
      <img src={item.url} />
      <div className="price">£{item.price}</div>
      <div className="counter">
        <button 
        onClick={() => setAmount(amount - 1)} 
        className="minus">
          -
        </button>
        <input className="input" type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button 
        onClick={() => setAmount(amount + 1)} 
        className="plus">
          +
        </button>
      </div>
      
      <button onClick={() => { setTotalItem(totalItem + +amount); setRetrievedItem({item, amount}); } } 
      className="submit">Add to Cart</button>
    </div>
  );
};

export default Merch;