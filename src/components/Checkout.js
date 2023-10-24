import Bag from "./Bag";

const Checkout = () => {
  return (
    <div className="container">
      <div className="row p-3 mt-3">
        <h1>SHIPPING ADDRESS</h1>
        <p>John Maker</p>
        <p>123 Plae Grond street</p>
        <p>Vermont, Calfornia</p>
        <p>United States of America</p>
      </div>

      <div className="row mt-3 bg-secondary p-3">
        <h1>PAYMENT METHOD</h1>
        <p>JMastercard ending in 1253</p>
        <p>$ 53.21 gift card balance</p>
        <input type="checkbox" />
        <label>Billing Address same as Shipping Address</label>
      </div>

      <div className="mt-5">
        <Bag />
      </div>
    </div>
  );
};

export default Checkout;
