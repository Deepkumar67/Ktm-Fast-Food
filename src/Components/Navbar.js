import React from "react";
import {useCart} from './Cart.js';


function Navbar() {
  const item = useCart();
  return (
    <React.Fragment>
      <nav className="navbar">
        <a className="navbar-brand" style={{ color: "red" }}> KTM<span style={{ color: "white" }}> Fast Food</span></a>
        <ul>
          <i className="fa fa-shopping-cart cart fa fa-2x" > ( {item} ) </i>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
