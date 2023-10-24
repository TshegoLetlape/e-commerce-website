import "../bag.css";
import { useState } from "react";
import iphone from "../images/Iphone-12-01.png";
import data from "./Data";
import { useSelector } from "react-redux";
import Home from "./Home";
import SideBar from "./SideBar";
import SideBag from "./SideBag";

const Bag = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const [itemCounts, setItemCounts] = useState({}); // Initialize an empty object to store item counts

  const add = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };

  const minus = (itemId) => {
    if (itemCounts[itemId] > 1) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [itemId]: prevCounts[itemId] - 1,
      }));
    } else {
      // You can implement item removal logic here if needed
      alert("Item will be removed from your cart.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="" id="content">
        <div class="wrapper d-flex align-items-stretch">
          <nav id="sidebar">
            <div class="p-4 pt-5">
              <a href="#" class="img logo rounded-circle mb-5"></a>
              <ul class="list-unstyled components mb-5">
                <li class="active">
                  <SideBar />
                </li>
              </ul>
            </div>
          </nav>

          <div id="content" class="p-4 p-md-2">
            <div className="container m-2">
              <div className="container bag-items pt-5">
                <h1>REVIEW YOUR BAG</h1>

                {cartItems.map((val) => {
                  return (
                    <div
                      className="container bg-light rounded  pt-3 pb-2 items mt-5"
                      key={val.id}
                    >
                      <div className="col-sm-4 phone">
                        <img
                          className="img-fluid"
                          src={val.imageUrl}
                          alt="item"
                        />
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
                          <i
                            class="fa fa-star-half-o"
                            aria-hidden="true"
                          ></i>{" "}
                          <span>{val.rating}</span>
                        </p>
                        <div className="row pricing">
                          <div className="col-sm-8  col-6">
                            <p>
                              $ {val.price} x
                              <span> {itemCounts[val.id] || 1}</span>
                            </p>
                          </div>
                          <div className="col-sm col-6 qua">
                            <button
                              className="btn minus"
                              onClick={() => minus(val.id)}
                            >
                              <i class="fa fa-minus" aria-hidden="true"></i>
                            </button>
                            <span className="count">
                              {itemCounts[val.id] || 1}
                            </span>
                            <button
                              className="btn plus"
                              onClick={() => add(val.id)}
                            >
                              <i class="fa fa-plus" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
