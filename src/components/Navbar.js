import React from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = ({ totalItem }) => {
  return (
    <nav>
      <div className="brand">Brand</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <Link to="/cart" className="cart"><i className="shopping cart icon"></i> {totalItem}</Link>
    </nav>
  );
};

export default Navbar;