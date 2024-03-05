import { useState, useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Form, Button, Col, Container } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps";
import { savePaymentMethod } from "../../slices/cartSlice";

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("Manual");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <Row style={{minHeight:"400px"}}>

   
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              label="PayPal or Credit Card"
              id="PayPay"
              name="paymentMethod"
              value="PayPal"
              // checked
              disabled
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>

            <Form.Check
                type="radio"
                className="my-2"
                label="Mannual Payment"
                id="MannualPayment"
                name="paymentMethod"
                value="MannualPayment"
                // checked
                onChange={(e) => setPaymentMethod(e.target.value)}>
                </Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
    </Row>
  );
};

export default PaymentScreen;
