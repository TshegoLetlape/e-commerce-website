import "../sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div
      className="d-flex flex-column flex-shrink-0   side-bar"
      style={{ width: 4.5 + "rem" }}
    >
      <Link
        to="/"
        className="d-block p-3 link-body-emphasis text-decoration-none"
        title="Icon-only"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
      >
        <svg className="bi pe-none" width="40" height="32">
          <use href="#bootstrap" />
        </svg>
        {/* <span className="visually-hidden">Icon-only</span> */}
      </Link>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <Link
            href="#"
            className="nav-link   py-3 border-bottom rounded-0"
            aria-current="page"
            title="Home"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <i class="fa-brands fa-apple fa-lg"></i>
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            title="Dashboard"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <Link
            to="/"
            className="nav-link py-3 border-bottom rounded-0"
            title="Store"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <i class="fa-solid fa-store"></i>
          </Link>
        </li>
        <li>
          <Link
            to="/bag"
            className="nav-link py-3 border-bottom rounded-0"
            title="Bag"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <i class="fa-solid fa-bag-shopping"></i>
            <br />
            {cartItems.length}
          </Link>
        </li>
      </ul>
      <div className=" pb-3 pt-3 border-top">
        <Link
          title="Checkout"
          to="/checkout"
          className="  align-items-center justify-content-center p-3 text-decoration-none "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
