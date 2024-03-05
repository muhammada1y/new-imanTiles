import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdOutlineEditLocation } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import "./contact.css";
import { Row, Col } from "react-bootstrap";

const ContactScreen = () => {
  return (
    <>
      <Row className="text-center">
        <h2>Contact</h2>
        <p className="separator contactPara">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </p>
      </Row>

      <Row
        className="justify-content-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Col lg={3} md={4} className=" mb-4">
          <div className="info">
            <div>
              <MdOutlineEditLocation
                style={{ width: "30px", height: "30px", color: "#e98337" }}
              />
              <p>
                A108 Adam Street
                <br />
                New York, NY 535022
              </p>
            </div>
            <div className="email">
              <MdEmail
                style={{ width: "30px", height: "30px", color: "#e98337" }}
              />
              <p>info@example.com</p>
            </div>

            <div>
              <BsFillTelephoneFill
                style={{ width: "30px", height: "30px", color: "#e98337" }}
              />
              <p>+1 5589 55488 55s</p>
            </div>
          </div>
          <div className="social-links form-control">
            <a href="#" className="twitter ">
              <BsFacebook />
            </a>
            <a href="#" className="facebook">
              <AiFillInstagram />
            </a>
            <a href="#" className="instagram">
              <AiFillTwitterCircle />
            </a>
            <a href="#" className="linkedin">
              <AiFillLinkedin />
            </a>
          </div>
        </Col>

        <Col lg={5} md={8}>
          <div className="form">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center ">
                <button className="sendMessageBtn" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ContactScreen;
