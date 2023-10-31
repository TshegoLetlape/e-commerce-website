import "../address.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAddress } from "../redux/addressSlice";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    street: "",
    city: "",
    province: "",
    country: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || data.name.length < 2) {
      alert("Please enter a valid name");
    } else if (!data.street || data.street.length < 2) {
      alert("Please enter a valid subject");
    } else if (!data.city || data.city.length < 2) {
      alert("please write a valid message");
    } else if (!data.province || data.province.length < 2) {
      alert("please write a valid message");
    } else if (!data.country || data.country.length < 2) {
      alert("please write a valid message");
    } else {
      dispatch(updateAddress(data));
      alert("your data has been saved");
      navigate(-1);
    }
  };
  return (
    <div className="container address   ">
      <form
        className="form-group p-5 mt-5"
        onSubmit={handleSubmit}
        method="POST"
      >
        <label className="form-label" id="name">
          Shopping Name
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={data.name}
          onChange={handleData}
          placeholder="John Maker"
          required
          id=""
        />
        <label className="form-label" id="street">
          Street name
        </label>
        <input
          className="form-control"
          type="text"
          name="street"
          value={data.street}
          onChange={handleData}
          placeholder="123 Plae Ground Street"
          required
          id=""
        />
        <label className="form-label" id="city">
          City
        </label>
        <input
          className="form-control"
          type="text"
          name="city"
          value={data.city}
          onChange={handleData}
          placeholder="Vermont"
          required
          id=""
        />
        <label className="form-label" id="province">
          State/Province
        </label>
        <input
          className="form-control"
          type="text"
          name="province"
          value={data.province}
          onChange={handleData}
          placeholder="California"
          required
          id=""
        />
        <label className="form-label" id="country">
          Country
        </label>
        <input
          className="form-control"
          type="text"
          name="country"
          value={data.country}
          onChange={handleData}
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
