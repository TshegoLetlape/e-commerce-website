import details from "./Data";
import { useState } from "react";
import "../home.css";

const Home = () => {
  const [data, setDta] = useState(details);

  return (
    <div className="container">
      <div className="text-center m-5 d-flex justify-content-center">
        <input className="rounded form-control" type="search" />
        <button className="search">search</button>
      </div>
      <div className="items justify-content-center">
        {data.map((item) => (
          <ul id={item.id}>
            <li className=" list-item m-3">
              <img src={item.imageUrl} />
              <h5 className="mt-3">{item.productName}</h5>
              <p className="color">{item.color}</p>
              <p className="p">
                <span className="price">$ {item.price}</span>
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
