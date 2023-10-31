import React from "react";
import "../payment.css";
import { Link } from "react-router-dom";

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
                      <input type="text" value="**** **** **** 4511" />
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
                    placeholder="Name On Card"
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
                        placeholder="Card Number"
                        maxlength="19"
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
                        maxlength="5"
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
                      <i
                        className="fa-solid fa-circle-question"
                        title="3 digits at the back of the card"
                        cursor="pointer"
                      ></i>
                    </form>
                  </div>
                  <p>
                    <input type="checkbox" className="deflt" />
                    Save This As Your Default Payment Method
                  </p>
                </div>
                <Link to="/checkout">
                  <button className="btn btn-dark" variant="dark" size="lg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 17.625C2 18.3212 2.27656 18.9889 2.76884 19.4812C3.26113 19.9734 3.92881 20.25 4.625 20.25H20.375C21.0712 20.25 21.7389 19.9734 22.2312 19.4812C22.7234 18.9889 23 18.3212 23 17.625V10.4062H2V17.625ZM5.09375 14.0625C5.09375 13.6895 5.24191 13.3319 5.50563 13.0681C5.76935 12.8044 6.12704 12.6562 6.5 12.6562H8.75C9.12296 12.6562 9.48065 12.8044 9.74437 13.0681C10.0081 13.3319 10.1562 13.6895 10.1562 14.0625V15C10.1562 15.373 10.0081 15.7306 9.74437 15.9944C9.48065 16.2581 9.12296 16.4062 8.75 16.4062H6.5C6.12704 16.4062 5.76935 16.2581 5.50563 15.9944C5.24191 15.7306 5.09375 15.373 5.09375 15V14.0625ZM20.375 3.75H4.625C3.92881 3.75 3.26113 4.02656 2.76884 4.51884C2.27656 5.01113 2 5.67881 2 6.375V7.59375H23V6.375C23 5.67881 22.7234 5.01113 22.2312 4.51884C21.7389 4.02656 21.0712 3.75 20.375 3.75Z"
                        fill="white"
                      />
                    </svg>
                    <div>Add Payment Method</div>
                  </button>{" "}
                </Link>
                <br />
                <br />
                <Link to="/checkout" className="back-btn">
                  Back
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentForm;
