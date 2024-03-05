import React from "react";
import { MdFiberNew, MdNewLabel } from "react-icons/md";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./NewProducts.css"


const NewProductsScreen = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };

  const galleryData = [
    {
      image:"/images/newProduct/new-product-1.jpg",
    },
    {
      image:"/images/newProduct/new-product-2.jpg",
    },
    {
      image:"/images/newProduct/new-product-3.jpg",
    },
    {
      image:"/images/newProduct/new-product-4.jpg",
    },
    {
      image:"/images/newProduct/new-product-5.jpg",
    },
    {
      image:"/images/newProduct/new-product-6.jpg",
    },
    {
      image:"/images/newProduct/new-product-7.jpg",
    },
    {
      image:"/images/newProduct/new-product-8.png",
    }
  ];

  return (
    <>
      <Container  className="my-5 pt-5 pb-5 galleryWrapper">
      <h2 className="titleGallery">New Arrivals Collection</h2>
        <Row className="" data-aos="fade-up">
          {galleryData.map((product, index) => (
            <Col xs={6} md={4} lg={3} className=" imageContainer" key={index}>
              <img src={product.image} className="  img-fluid mt-4 newImg" alt="" />
              <MdFiberNew className="newIcon"/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default NewProductsScreen;
