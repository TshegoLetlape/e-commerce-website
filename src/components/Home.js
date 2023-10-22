import details from "./Data";
import { useState } from "react";
import "../home.css";

const Home = () => {
  const [data, setDta] = useState(details);

  return (
    <div className="container">
      <div className="text-center m-5">
        <input className="rounded" type="search" />
        <button>search</button>
      </div>
      <div className="items justify-content-center">
        {data.map((item) => (
          <ul id={item.id}>
            <li className=" list-item m-3">
              <img src={item.imageUrl} />
              <h5>{item.productName}</h5>
              <p className="color">{item.color}</p>
              <p>
                <span className="price">${item.price}</span>
                <button>
                  <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                </button>
              </p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Home;
