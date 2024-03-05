import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import topCategoriesBg1 from "./topCatBg-1.jpg";
import topCategoriesBg2 from "./topCatBg-2.jpg";
import topCategoriesBg3 from "./topCatBg-3.png";
import "./TopCategory.css";

const TopCategoryScreen = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 6000, // Transition speed in milliseconds
    autoplay: true,
    arrows: true,
    autoplaySpeed: 900, // Autoplay speed in milliseconds
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992, // Set a breakpoint for mobile size
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Set a breakpoint for mobile size
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320, // Set a breakpoint for mobile size
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Tdata = [
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-1.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-2.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-3.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-4.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-5.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-6.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-7.jpg",
      orderDetails: "3k orders",
    },
    {
      name: "Product Name",
      image: "/images/topCategories/topCat-product-8.jpg",
      orderDetails: "3k orders",
    },
  ];
  
  return (
    <>
      {/* <Container fluid className="py-5 px-3 "> */}
      {/* <Container className="py-5 px-3 " style={{ minHeight:"450px", padding:"25px", background: `linear-gradient(rgba(29, 20, 205, 0.65), rgba(29, 205, 89, 0.2)), url(${bacImg}) fixed center center`}}> */}
      <Container className="py-5 px-3 " style={{ height:"500px", background: `linear-gradient(rgba(244, 247, 254, 0.9), rgba(244, 247, 254, 0.2)), url(${topCategoriesBg1}) fixed center center`, opacity:".9"}}>
     
      <h2 className="titleTopCategories ">Top Categories</h2>
      <Slider {...settings}>
        {Tdata?.map((value, i) => {
          return (
            <div className="d-flex justify-content-center   topCatContainer">
              <div className="slider my-3" style={{width:"500px"}}>
              <Link to="/">
                <div className="productOrderDetails d-flex  justify-content-between">
                  <span className="orderDetails">{value?.orderDetails}</span>
                </div>
                <div className=" d-flex justify-content-between productName">
                  <span className="name">{value?.name}</span>
                </div>
               
                  <div className="d-flex justify-content-center align-content-center ">
                    <img src={value?.image} alt="img" className="topCateImg w-100" fluid />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
     
      </Container>
    </>
  );
};

export default TopCategoryScreen;
