import { MdLocalShipping, MdSafetyDivider } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { GiStamper } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const ServicesScreen = () => {
  const iconStyle = {
    width: "45px",
    height: "45px",
    color: "var(--mainThemeColor)",

  };

  const data = [
    {
      cover: <MdLocalShipping style={iconStyle} />,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <MdSafetyDivider style={iconStyle} />,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <VscWorkspaceTrusted style={iconStyle} />,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <GiStamper style={iconStyle} />,
      title: "Product Authenticity Assurance",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <BsCartFill style={iconStyle} />,
      title: "Instant Order Assistance",
      decs: "We offer competitive prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus pr prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any rangeoduct any range.",
    },
    {
      cover: <BiSupport style={iconStyle} />,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <BsCartFill style={iconStyle} />,
      title: "Instant Order Assistance",
      decs: "We offer competitive prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus product any range  prices on our 100 million plus pr prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any range prices on our 100 million plus product any rangeoduct any range.",
    },
    {
      cover: <BiSupport style={iconStyle} />,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    }
  ];

  return (
    <>
      <Container className="my-5">
     
        <Row className="wrapper">
          <div className="titleParaServices" >
          <h2  className="titleServices">Why Imantiles ?</h2>
          <p  className="paraServices">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta praesentium suscipit fuga, voluptates aut officiis sed assumenda ducimus accusantium modi perspiciatis, molestias, debitis animi impedit excepturi ipsum reiciendis incidunt?</p>
         
          </div>
         {data.map((val, index) => {
            return (
              <Col sm={6} lg={3} className="mt-4" key={index}>
                <div className="showCardCont">
                  <div className="iconCont">{val?.cover}</div>
                  <h4 className="serviceHeading">{val?.title}</h4>
                  <p className="servicePara">{val?.decs}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ServicesScreen;
