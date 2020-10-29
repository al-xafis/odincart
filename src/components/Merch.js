import React, { useState } from 'react';
import '../styles/Shop.css';

const Merch = ({ item, index, totalItem, setTotalItem, retrievedItem, setRetrievedItem }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="card">
      <img src={item.url} alt="cloth pic"/>
      <div className="price">£{item.price}</div>
      <div className="counter">
        <button 
        onClick={() => {
          if (amount !== 0) {
            setAmount(amount - 1)
          }
        }} 
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
      
      <button onClick={() => { 
        if (amount > 0) {
          setTotalItem(totalItem + +amount);
          setRetrievedItem([...retrievedItem, ({item, amount})]); 
        }
      }} 
      className="submit">Add to Cart</button>
    </div>
  );
};

export default Merch;