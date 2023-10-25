import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../checkout.css";
import { useNavigate } from "react-router-dom";
import { getTotals } from "../redux/cartSlice";
import { useEffect } from "react";
import { clearCart } from "../redux/cartSlice";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

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

  const resetItemCounts = () => {
    setItemCounts({});
  };
  const navigateHome = useNavigate();

  const resetAndNavigate = () => {
    dispatch(clearCart()); // Clear the cart in Redux
    resetItemCounts(); // Reset local state
    navigateHome("/"); // Navigate back to the homepage
  };

  const orderSuccessful = () => {
    alert("Order was successful");
    resetAndNavigate();
  };
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * (itemCounts[item.id] || 1),
    0
  );
  const navigate = useNavigate();

  return (
    <div className="container check-out">
      <div className="row">
        <div className="col col-sm-6 col-md-9 ">
          <div className="row bg-light rounded p-3 mt-3">
            <div className="col-9">
              <h1>SHIPPING ADDRESS</h1>
              <p>John Maker</p>
              <p>123 Plae Grond street</p>
              <p>Vermont, Calfornia</p>
              <p>United States of America</p>
            </div>
            <div className="col">
              <Link to="/address">
                <button className="btn bg">Chage</button>
              </Link>
            </div>
          </div>

          <div className="row mt-3 bg-light rounded p-3">
            <div className="col-9">
              <h1>PAYMENT METHOD</h1>
              <p>Mastercard ending in 1253</p>
              <p>$ 53.21 gift card balance</p>
              <input type="checkbox" />
              <label>Billing Address same as Shipping Address</label>
            </div>
            <div className="col">
              <Link to="/payment">
                <button className="btn bg">Change</button>
              </Link>
            </div>
          </div>

          <div className="mt-5">
            <div id="content" class="p-4 p-md-2">
              <div className="container bag-items pt-5">
                <h1>REVIEW YOUR BAG</h1>

                {cartItems.map((val) => {
                  return (
                    <div
                      className="row mb-5  pt-3 pb-2 items mt-5"
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
                          <i class="fa fa-star-half-o" aria-hidden="true"></i>
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
        <div className="col">
          <div className="mt-5 p-3 rounded cart">
            <h4>Order Summary</h4>
            <div className="row">
              <div className="col">
                <table className="table">
                  <tr>
                    <td>
                      <small>Items</small>
                    </td>
                    <td>
                      <small>${totalAmount}</small>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <small>Shipping</small>
                    </td>
                    <td>
                      <small>$0.00</small>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <small>Gift Card</small>
                    </td>
                    <td>
                      <small>$0.00</small>
                    </td>
                  </tr>
                  <hr />
                  <tr className="total">
                    <td>
                      <small>Order Total</small>
                    </td>
                    <td>
                      <small>${totalAmount}</small>
                    </td>
                  </tr>
                </table>
                <div className="">
                  <button
                    className="btn textcenter bg"
                    onClick={orderSuccessful}
                  >
                    Place your Order
                  </button>
                  <br />
                  <button className="btn mt-4 bck" onClick={() => navigate(-1)}>
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>Back
                  </button>
                  <br />
                  <Link to="/">
                    <button className="btn bck">
                      <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                      continue shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
