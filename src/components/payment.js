import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PaymentForm() {
  return (
    <section className="p-4 p-md-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-5">
          <Card className="rounded-3">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h3>Payment</h3>
              </div>
              <Form>
                <p className="fw-bold mb-4 pb-2">Saved cards:</p>

                {/* Saved Card 1 */}
                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                    alt="Mastercard"
                  />
                  <div className="flex-fill mx-3">
                    <Form.Group controlId="formControlLgXc">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control type="text" value="**** **** **** 3193" />
                    </Form.Group>
                  </div>
                  <a href="#!">Remove card</a>
                </div>

                {/* Saved Card 2 */}
                <div className="d-flex flex-row align-items-center mb-4 pb-1">
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
                </div>

                <p className="fw-bold mb-4">Add new card:</p>

                {/* Cardholder's Name */}
                <Form.Group controlId="formControlLgXsd" className="mb-4">
                  <Form.Label>Cardholder's Name</Form.Label>
                  <Form.Control type="text" value="Anna Doe" />
                </Form.Group>

                <div className="row mb-4">
                  {/* Card Number */}
                  <div className="col-7">
                    <Form.Group controlId="formControlLgXM">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control type="text" value="1234 5678 1234 5678" />
                    </Form.Group>
                  </div>

                  {/* Expiry Date */}
                  <div className="col-3">
                    <Form.Group controlId="formControlLgExpk">
                      <Form.Label>Expire</Form.Label>
                      <Form.Control type="text" placeholder="MM/YYYY" />
                    </Form.Group>
                  </div>

                  {/* CVV */}
                  <div className="col-2">
                    <Form.Group controlId="formControlLgcvv">
                      <Form.Label>Cvv</Form.Label>
                      <Form.Control type="password" placeholder="Cvv" />
                    </Form.Group>
                  </div>
                </div>

                <Button variant="dark" size="lg" block>
                  Add Payment Method
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default PaymentForm;
