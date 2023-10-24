import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link

const SideBag = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="side-bag">
      <h2>Bag</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.productName} />
            {item.productName}
          </li>
        ))}
      </ul>
      <Link to="/bag">
        <button>View Bag</button>
      </Link>
    </div>
  );
};

export default SideBag;
