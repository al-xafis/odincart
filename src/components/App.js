import React, { useState } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';


const App = () => {
const [totalItem, setTotalItem] = useState(0);
const [retrievedItem, setRetrievedItem] = useState([]);

  return (
    <Router>
      <div>
        <Navbar totalItem={totalItem}/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/shop" exact children={<Shop totalItem={totalItem} setTotalItem={setTotalItem} retrievedItem={retrievedItem} setRetrievedItem={setRetrievedItem} />} />
            <Route path="/cart" exact children={<Cart retrievedItem={retrievedItem} setRetrievedItem={setRetrievedItem} />} />
          </Switch>
      </div>
    </Router>
  );
};

export default App;