import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import logo from "../../assets/logo.jpeg";
import google from "./images/Google.png";

import { BsFacebook } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import { MdKeyboardArrowRight} from "react-icons/md";
import {  BsApple } from "react-icons/bs";

import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row className="mb-3">
            <Col className="logoAndParaCont">
              <img src={logo} width="260px" alt="lubick" className="m-2" />
              <p className="appParaFooter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                libero id et, in gravida. Sit diam duis mauris nulla cursus.
                Erat et lectus vel ut sollicitudin elit at amet.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Auctor libero id
                Erat et lectus vel ut sollicitudin elit at amet.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Auctor libero id
                et.
              </p>
            </Col>
          </Row>

         

          <Row >
            <Col md={4}>
              <Link to="/about" className="mainLinks ">
                <h4 className="mainLinksTitle">About Us</h4>
              </Link>

              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={4}>
              <Link to="/policy" className="mainLinks">
                <h4 className="mainLinksTitle">Our Policy</h4>
              </Link>
              <ul>
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Track Your Order</li>
                <li>Corporate & Bulk Purchasing</li>
                <li>Returns & Refunds</li>
              </ul>
            </Col>
            <Col md={4}>
              <Link to="/contact" className="mainLinks">
                <h4 className="mainLinksTitle">Contact Us</h4>
              </Link>

              <ul>
                <li>example example example example example , United States</li>
                <li>Email: example@gmail.com</li>
                <li>Phone: +1 3333 333 333</li>
              </ul>
            </Col>
          </Row>

          {/* <hr /> */}
          <Row className="mt-4 mb-4">
            <h4 className="footerDownload text-center">Download Our App</h4>
            <Col className="text-center">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="downloadLinks"
              >
                 <img src={google} width="60px" alt="google" /> Google Play
                {/* <BsFillPlayFill className="downloadIcons" /> Google Play */}
              </a>
            </Col>
            <Col className="text-center">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="downloadLinks"
              >
                <BsApple className="downloadIcons" /> App Store
              </a>
            </Col>
          </Row>
          <Row  style={{ margin:"10px", borderRadius:"8px", padding:"5px"}} >
            <h4 className="text-center" style={{color:"gray"}}>Social Links</h4>
            <div className="socialCont">
              
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="socialIcons" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="socialIcons" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle className="socialIcons" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="socialIcons" />
              </a>
            </div>
          </Row>
        </Container>
      </footer>

    </>
  );
};

export default Footer;
