import "../bag.css";
import { useState } from "react";
import iphone from "../images/Iphone-12-01.png";

const Bag = () => {
  let [count, setCount] = useState(1);

  function add() {
    setCount(count + 1);
  }
  function minus() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("item will be removed from your cart");
      document.getElementById("huh").remove();
    }
  }

  return (
    <div className="container bag-items pt-5">
      <h1>Check your Bag Items</h1>
      <div className="row  pt-3 pb-2 items mt-5" id="huh">
        <div className="col-sm-4 phone">
          <img className="img-fluid" src={iphone} alt="item" />
        </div>
        <div className="col-sm-7">
          <h3>Iphone 12</h3>
          <p className="color">Gray</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet
            imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat,
            tincidunt lorem mi duis. Vitae elementum libero.
          </p>
          <p className="rating">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>{" "}
            <span>4.5/5</span>
          </p>
          <div className="row pricing">
            <div className="col-sm-8  col-6">
              <p>
                $ 699.99 x<span> {count}</span>
              </p>
            </div>
            <div className="col-sm col-6 qua">
              <button className="btn minus" onClick={minus}>
                <i class="fa fa-minus" aria-hidden="true"></i>
              </button>
              <span className="count">{count}</span>
              <button className="btn plus" onClick={add}>
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
