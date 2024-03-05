import { Link, useParams } from "react-router-dom";
import { Carousel, Container, Image } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useGetTopProductsQuery } from "../../slices/productApiSlice";
import { useGetProductsQuery } from "../../slices/productApiSlice";

const ProductCarousel = () => {
  const { pageNumber, keyword } = useParams();
  const { data: products, isLoading, error } = useGetTopProductsQuery();
  const {
    data,
    isLoading: loadingProduct,
    error: errorGetProducts,
  } = useGetProductsQuery({ keyword, pageNumber });
  
  const carouselData = [
    {
      name:"sample 1",
      image:"/images/carousel/carousel-1.png",
      price:"10"
    },
    {
      name:"sample 2",
      image:"/images/carousel/carousel-2.png",
      price:"10"
    },
    {
      name:"sample 3",
      image:"/images/carousel/carousel-3.png",
      price:"3"
    },
    {
      name:"sample 4",
      image:"/images/carousel/carousel-4.jpg",
      price:"3"
    },
    {
      name:"sample 5",
      image:"/images/carousel/carousel-5.png",
      price:"15"
    },
    {
      name:"sample 6",
      image:"/images/carousel/carousel-6.jpg",
      price:"11"
    } 
  ];


  return (
    <>
      {/* {!keyword && !pageNumber ? (
         error ? (
          <Message variant="danger">
            {error?.data?.message || error?.error}
          </Message>
        ) : ( */}
          <Carousel fluid pause="hover" className="bg-primary mb-4" fade>
            {carouselData.map((product, index) => (
              <Carousel.Item
                key={index}
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "87vh",  
                  width: "100%", 
                }}
              >
                <Link to={`/`} className="d-block">
                  <Carousel.Caption className="carousel-caption pt-0">
                    <h2>
                      {product.name} (${product.price})
                    </h2>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        {/* )
      ) : (
        <Container className="mt-3">
          <Link to="/" className="btn btn-light">
            Go Back
          </Link>
        </Container>
      )} */}
    </>
  );
};

export default ProductCarousel;
