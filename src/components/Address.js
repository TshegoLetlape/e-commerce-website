import "../address.css";
import { useState } from "react";

const Address = () => {
  return (
    <div className="container">
      <form className="form-group" method="POST">
        <label className="form-label" id="">
          Shopping Name
        </label>
        <input
          className="form-control"
          type="text"
          name=""
          value=""
          placeholder=""
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
          placeholder=""
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
          placeholder=""
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
          placeholder=""
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
          placeholder=""
          required
          id=""
        />
        <input className="form-control" type="checkbox" />
        <label className="form-label">Save this as your default address</label>
        <button>Add Address</button>
      </form>
      <button>Back</button>
      <button>Secure Connection</button>
    </div>
  );
};

export default Address;
