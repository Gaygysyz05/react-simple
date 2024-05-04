import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach(el => sum += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="sum">Jemi: {new Intl.NumberFormat().format(sum) }TMT</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Haryt ýok</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)


  return (
    <header>
      <div>
        <span className="logo">Online söwda </span>
        <ul className="nav">
          <li>Login</li>
          <li>Habarlaşmak</li>
          <li>Biz barada</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
