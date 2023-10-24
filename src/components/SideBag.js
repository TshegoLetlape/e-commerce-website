// Sidebar.js
import React from "react";
import { useSelector } from "react-redux";

const Sidebag = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="sidebag">
      <h3>Bag</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebag;
