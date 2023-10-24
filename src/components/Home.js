import details from "./Data";
import { useState } from "react";
import "../home.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const [data, setDta] = useState(details);

  console.log(cartItems.length);

  return (
    <div className="container">
      <div className="text-center m-5 d-flex justify-content-center">
        <input className="rounded form-control" type="search" />
        <button className="search">search</button>
        <Link to="./bag">
          {" "}
          <h3>{cartItems.length}</h3>
        </Link>
      </div>
      <div className="items justify-content-center">
        {data.map((item) => (
          <ul key={item.id}>
            <li className=" list-item m-3">
              <img src={item.imageUrl} />
              <h5 className="mt-3">{item.productName}</h5>
              <p className="color">{item.color}</p>
              <p className="p">
                <span className="price">$ {item.price}</span>
                <button
                  onClick={() =>
                    dispatch(
                      addtoCart({
                        id: item.id,
                        productName: item.productName,
                        color: item.color,
                        imageUrl: item.imageUrl,
                        info: item.info,
                        rating: item.rating,
                        price: item.price,
                      })
                    )
                  }
                >
                  <span className="material-symbols-outlined">
                    medical_services
                  </span>
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
