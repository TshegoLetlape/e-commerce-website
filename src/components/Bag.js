import "../bag.css";
import { useState } from "react";
import iphone from "../images/Iphone-12-01.png";
import data from "./Data";
import { useSelector } from "react-redux";
import Home from "./Home";

const Bag = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  // const [item] = useState(data);
  const [count, setCount] = useState();
  // const [items, setItems] = useState();

  const add = (id) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const minus = (itemId) => {
    if (count[itemId] > 1) {
      setCount((prevCounts) => ({
        ...prevCounts,
        [itemId]: prevCounts[itemId] - 1,
      }));
    } else {
      alert("it's gone");
      // You can implement item removal logic here if needed
    }
  };

  return (
    <div className="container bag-items pt-5">
      <h1>Check your Bag Items</h1>

      {cartItems.map((val) => {
        return (
          <div className="row  pt-3 pb-2 items mt-5" key={val.id}>
            <div className="col-sm-4 phone">
              <img className="img-fluid" src={val.imageUrl} alt="item" />
            </div>
            <div className="col-sm-7">
              <h3>{val.productName}</h3>
              <p className="color">Gray</p>
              <p>{val.info}</p>
              <p className="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-o" aria-hidden="true"></i>{" "}
                <span>{val.rating}</span>
              </p>
              <div className="row pricing">
                <div className="col-sm-8  col-6">
                  <p>
                    $ {val.price} x<span> {count}</span>
                  </p>
                </div>
                <div className="col-sm col-6 qua">
                  <button className="btn minus">
                    <i class="fa fa-minus" aria-hidden="true"></i>
                  </button>
                  <span className="count">{count}</span>
                  <button className="btn plus">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </button>
                  {/* <button
                    className="btn remove"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bag;
