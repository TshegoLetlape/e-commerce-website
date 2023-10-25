import "../address.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Address = () => {
  return (
    <div className="container address   ">
      <form className="form-group p-5 mt-5" method="POST">
        <label className="form-label" id="">
          Shopping Name
        </label>
        <input
          className="form-control"
          type="text"
          name=""
          value=""
          placeholder="John Maker"
          required
          id=""
        />
        <label className="form-label" id="">
          Street name
        </label>
        <input
          className="form-control"
          type="text"
          name=""
          value=""
          placeholder="123 Plae Ground Street"
          required
          id=""
        />
        <label className="form-label" id="">
          City
        </label>
        <input
          className="form-control"
          type="text"
          name=""
          value=""
          placeholder="Vermont"
          required
          id=""
        />
        <label className="form-label" id="">
          State/Province
        </label>
        <input
          className="form-control"
          type="text"
          name=""
          value=""
          placeholder="California"
          required
          id=""
        />
        <label className="form-label" id="">
          Country
        </label>
        <input
          className="form-control"
          type="text"
          name=""
          value=""
          placeholder="United States of America"
          required
          id=""
        />
        <input className="" type="checkbox" />

        <label className="form-label">Save this as your default address</label>
        <button className="btn">Add Address</button>
      </form>
      <Link to="/checkout">
        <button className="btn">Back</button>
      </Link>
      {/* <button className="btn scr">Secure Connection</button> */}
    </div>
  );
};

export default Address;
