import { useEffect, useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Form,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useDeliverOrderMutation,
  useManualPaymentVerificationMutation,
} from "../../slices/ordersApiSlice";

const OrderScreen = () => {
  const [userPaymentCode, setUserPaymentCode] = useState("");
  const [adminPaymentCode, setAdminPaymentCode] = useState("");
  const { id: orderId } = useParams();
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [verifyPaymentManual, { isLoading: loadingManualpay }] =
    useManualPaymentVerificationMutation();

  
  const deliverOrderHandler = async () => {
    try {
      await deliverOrder(orderId);
      refetch();
      toast.success("Order delivered");
    } catch (err) {
      toast.error(err?.data?.message || err.message);
    }
  };

  const submitAdminVerifactionHandler = async (e) => {
    e.preventDefault();
    try {
      if(adminPaymentCode === ""){
        toast.error("Please enter code");
      }else{
        const details = {
          adminVerificationCode: adminPaymentCode,
        };
        const data = await verifyPaymentManual({
          orderId,
          details, 
        });
        refetch();
        toast.success(data?.data?.message || data?.message);
      }
     
    } catch (error) {
      toast.error(error?.error?.data?.message)

    }
  };

  const submitUserVerifactionHandler = async (e) => {
    e.preventDefault();
    try {
      if(userPaymentCode === ""){
        toast.error("Please enter code");
      }else{

        const details = {
          userVerificationCode: userPaymentCode,
        };
  
        const data = await verifyPaymentManual({
          orderId,
          details,
        });
        refetch();
        toast.success(data?.data.message || data?.message);

      }
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Container className="py-3">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Shipping</h2>
                  <p>
                    <strong>Name:</strong> {order.user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {order.user.email}
                  </p>
                  <p>
                    <strong>Address:</strong> {order.shippingAddress.address},{" "}
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.postalCode},{" "}
                    {order.shippingAddress.country}
                  </p>

                  {/* deliver status */}
                  {order.isDelivered ? (
                    <Message variant="success">
                      Delivered on {order?.deliveredAt}
                    </Message>
                  ) : (
                    <Message variant="danger">Not Delivered</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Payment Method</h2>
                  <p>
                    <strong>Method:</strong> {order.paymentMethod}
                  </p>

                  {/* Paid status */}
                  {order.isPaid ? (
                    <Message variant="success">Paid on {order?.paidAt}</Message>
                  ) : (
                    <Message variant="danger">Not Paid</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Order Items</h2>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = $
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2> Order summary </h2>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Item</Col>
                      <Col>${order.itemsPrice}</Col>
                    </Row>

                    <Row>
                      <Col>Shipping</Col>
                      <Col>${order.shippingPrice}</Col>
                    </Row>

                    <Row>
                      <Col>Tax</Col>
                      <Col>${order.taxPrice}</Col>
                    </Row>

                    <Row>
                      <Col>Total</Col>
                      <Col>${order.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <h4 className="text-center">
                      {" "}
                      Payment Verifictaion Status{" "}
                    </h4>
                    <Row>
                      <Col xs={10}>
                        <p>
                          <span>Admin</span>
                        </p>
                      </Col>

                      <Col xs={2}>
                        {!order.manualPayment.adminVerify.verifyCode ? (
                          <FaTimes style={{ color: "red" }} />
                        ) : (
                          <FaCheck style={{ color: "green" }} />
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={10}>
                        <p>
                          <span>You</span>
                        </p>
                      </Col>

                      <Col xs={2}>
                        {!order.manualPayment.userVerify.verifyCode ? (
                          <FaTimes style={{ color: "red" }} />
                        ) : (
                          <FaCheck style={{ color: "green" }} />
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>


                  {!order.isPaid && userInfo.isAdmin && (
                    <ListGroup.Item>
                      {loadingPay && <Loader />}
                      {/* {isPending ? ( */}
                      {loadingManualpay ? (

                        <Loader />
                      ) : (
                        <Form onSubmit={submitAdminVerifactionHandler}>
                          <Form.Group
                            controlId="setAdminPaymentCode"
                            className="my-3"
                          >
                            <Form.Label>
                              <p>
                                <strong>Role:</strong>
                                {userInfo.isAdmin ? "Admin" : "User"}:
                              </p>
                              Enter Payment code
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter code"
                              value={adminPaymentCode}
                              onChange={(e) =>
                                setAdminPaymentCode(e.target.value)
                              }
                            ></Form.Control>
                          </Form.Group>

                          <Button
                            type="submit"
                            variant="primary"
                            className="mt-2  "
                            disabled={isLoading && order.isPaid}
                          >
                            verify
                          </Button>

                          {isLoading && <Loader />}
                        </Form>
                      )}
                    </ListGroup.Item>
                  )}

                      {!order.isPaid && !userInfo.isAdmin && (
                        <ListGroup.Item>
                          {loadingPay && <Loader />}
                          {/* {isPending ? ( */}
                          {loadingManualpay ? (

                            <Loader />
                          ) : (
                            <Form
                              onSubmit={submitUserVerifactionHandler}
                              className="p-2"
                            >
                              <Form.Group
                                controlId="setUserPaymentCode"
                                className="my-3"
                              >
                                <Form.Label>
                                  <p>
                                    <strong>Role:</strong>
                                    {!userInfo.isAdmin ? "User" : "Admin"}:
                                  </p>
                                  Enter Payment code Provided by admin
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter code"
                                  value={userPaymentCode}
                                  onChange={(e) =>
                                    setUserPaymentCode(e.target.value)
                                  }
                                  disabled={
                                    isLoading ||
                                    order.isPaid ||
                                    order.manualPayment.adminVerify
                                      .verifyCode === ""
                                  }
                                ></Form.Control>
                              </Form.Group>
                              <Button
                        type="submit"
                        variant="primary"
                        className="mt-2"
                        disabled={
                          isLoading ||
                          order.isPaid ||
                          order.manualPayment.adminVerify.verifyCode === ""
                        }
                      >
                        verify
                      </Button>

                      {isLoading && <Loader />}
                            </Form>
                          )}
                        </ListGroup.Item>
                      )}
                     
                  {loadingDeliver && <Loader />}

                  {userInfo &&
                    userInfo.isAdmin &&
                    order.isPaid &&
                    !order.isDelivered && (
                      <ListGroup.Item>
                        <Button
                          type="button"
                          className="btn btn-block"
                          onClick={deliverOrderHandler}
                        >
                          Mark As Delivered
                        </Button>
                      </ListGroup.Item>
                    )}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );

  // return
};

export default OrderScreen;
