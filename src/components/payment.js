import React from "react";

function PaymentForm() {
  return (
    <section className="p-4 p-md-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-5">
          <div className=" card rounded-3">
            <div className=" card-body p-4">
              <div className="text-center mb-4">
                <h3>Payment</h3>
              </div>
              <form>
                <p className="fw-bold mb-4 pb-2">Saved cards:</p>

                {/* Saved Card 1 */}
                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                    alt="Mastercard"
                  />
                  <div className="flex-fill mx-3">
                    <div className="form-group" controlId="formControlLgXc">
                      <label className="form-label">Card Number</label>
                      <input type="text" value="**** **** **** 3193" />
                    </div>
                  </div>
                  <a href="#!">Remove card</a>
                </div>

                {/* Saved Card 2 */}
                {/* <div className="d-flex flex-row align-items-center mb-4 pb-1">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="Visa"
                  />
                  <div className="flex-fill mx-3">
                    <Form.Group controlId="formControlLgXs">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control type="text" value="**** **** **** 4296" />
                    </Form.Group>
                  </div>
                  <a href="#!">Remove card</a>
                </div> */}
                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                    alt="Mastercard"
                  />
                  <div className="flex-fill mx-3">
                    <div className="form-group" controlId="formControlLgXc">
                      <label className="form-label">Card Number</label>
                      <input type="text" value="**** **** **** 3193" />
                    </div>
                  </div>
                  <a href="#!">Remove card</a>
                </div>

                <p className="fw-bold mb-4">Add new card:</p>

                {/* Cardholder's Name */}
                <form controlId="formControlLgXsd" className=" form-group mb-4">
                  <label className="form-label">Cardholder's Name</label>
                  <input
                    className="form-control"
                    type="text"
                    value="Anna Doe"
                  />
                </form>

                <div className="row mb-4">
                  {/* Card Number */}
                  <div className="col-7">
                    <form className="form-group" controlId="formControlLgXM">
                      <label className="form-label">Card Number</label>
                      <input
                        className="form-control"
                        type="text"
                        value="1234 5678 1234 5678"
                      />
                    </form>
                  </div>

                  {/* Expiry Date */}
                  <div className="col-3">
                    <form className="form-group" controlId="formControlLgExpk">
                      <label className="form-label">Expire</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="MM/YYYY"
                      />
                    </form>
                  </div>

                  {/* CVV */}
                  <div className="col-2">
                    <form className="form-group" controlId="formControlLgcvv">
                      <label className="form-label">Cvv</label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Cvv"
                      />
                    </form>
                  </div>
                </div>

                <button className="btn" variant="dark" size="lg" block>
                  Add Payment Method
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentForm;
