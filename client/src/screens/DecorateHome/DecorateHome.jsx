import { MdOutlineLiving } from "react-icons/md";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaBath } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { FaDoorClosed } from "react-icons/fa";
import bgImage from "./bg-image-1.jpg";
import "./DecorateHome.css";

const DecorateHome = () => {
  const iconStyle = {
    width: "45px",
    height: "45px",
    color: "var(--mainBgColor)",
  };



  const productImage = [
    {
      image: "/images/decorateHome/decorate-product-1.jpg",
    },
    {
      image: "/images/decorateHome/decorate-product-2.jpg",
    },
    {
      image: "/images/decorateHome/decorate-product-3.jpg",
    },
  ];

  const iconData = [
    {
      cover: <FaBath style={iconStyle} />,
      title: "Outdoor",
    },
    {
      cover: <FaKitchenSet style={iconStyle} />,
      title: "Outdoor",
    },
    {
      cover: <FaDoorClosed style={iconStyle} />,
      title: "Outdoor",
    },
    {
      cover: <MdOutlineLiving style={iconStyle} />,
      title: "Outdoor",
    },
  ];
  const sameImageData = [
    {
      image: "/images/decorateHome/decorate-same-image-1.jpg",
    },
    {
      image: "/images/decorateHome/decorate-same-image-2.jpg",
    },
    {
      image: "/images/decorateHome/decorate-same-image-3.jpg",
    },
    {
      image: "/images/decorateHome/decorate-same-image-4.jpg",
    },
  ];
  return (
    
      <Container className="decorateHome">
        <h2 className="titleDecorateHome">Bring Radiant Home</h2>
        <p className="text-center">High Quality Affordable Flooring</p>
        <Row>
          <Col md={6}>
            <Image src={bgImage} alt="background" className="sideImage" fluid />
            <div className="threeImageCont">
              {productImage.map((product, index) => (
                <Image
                  src={product.image}
                  key={index}
                  // src="./images/alexa.jpg"
                  alt="background"
                  className="threeImage"
                  fluid
                />
              ))}
            </div>
            {/* {productImage.map((product, index)=> (
                <div className="threeImageCont" key={index}>
                <Image
                  src={product.image}
                  // src="./images/alexa.jpg"
                  alt="background"
                  className="threeImage"
                  fluid
                />
              </div>
            ))

            } */}
          </Col>
          <Col md={6} className="d-flex">
            <Row>
              {iconData.map((icon, index) => (
                <Col
                  xs={6}
                  key={index}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div className="decorateCardCont">
                    <div className="iconCont">{icon?.cover}</div>
                    <h4 className="decorateCardHeading">{icon?.title}</h4>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="mt-1 mb-5">
          {sameImageData.map((product, index) => (
            <Col md={3} xs={6} className="mt-4" key={index}>
              <Image
                src={product.image}
                alt="background"
                className="sameImagesDecorate"
                fluid
              />
            </Col>
          ))}
        </Row>
      </Container>
  
  );
};

export default DecorateHome;
