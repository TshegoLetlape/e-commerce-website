import details from "./Data";
import { useState } from "react";
import "../home.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Home = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const [data, setDta] = useState(details);

  console.log(cartItems.length);

  return (
    <div className="" id="content">
      <div className="text-center m-5 d-flex justify-content-center">
        <input className="rounded form-control" type="search" />
        <button className="search">search</button>
        <Link to="./bag"> </Link>
        <h3>{cartItems.length}</h3>
      </div>
      <SideBar />
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

      {/* //////////////////////////////////////////////////// */}

      <div class="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
          <div class="p-4 pt-5">
            <a href="#" class="img logo rounded-circle mb-5"></a>
            <ul class="list-unstyled components mb-5">
              <li class="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Home
                </a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="#">Home 1</a>
                  </li>
                  <li>
                    <a href="#">Home 2</a>
                  </li>
                  <li>
                    <a href="#">Home 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Pages
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <a href="#">Page 1</a>
                  </li>
                  <li>
                    <a href="#">Page 2</a>
                  </li>
                  <li>
                    <a href="#">Page 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div class="footer">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i class="icon-heart" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib.com
                </a>
              </p>
            </div>
          </div>
        </nav>

        <div id="content" class="p-4 p-md-5">
          <h2 class="mb-4">Sidebar #01</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
