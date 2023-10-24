import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const [count, setCount] = useState();

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
                <button>Chage</button>
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
                <button>Change</button>
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
                          <i
                            class="fa fa-star-half-o"
                            aria-hidden="true"
                          ></i>{" "}
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
                      <small>#76686</small>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <small>Shipping</small>
                    </td>
                    <td>
                      <small>$6.99</small>
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
                      <small>$899.00</small>
                    </td>
                  </tr>
                </table>
                <button className="btn ">Place your Order</button>
                <br />
                <button className="btn" onClick={() => navigate(-1)}>
                  Back
                </button>
                <br />
                <Link to="/">
                  <button className="btn">continue shopping</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
