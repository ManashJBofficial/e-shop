import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

// import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Carousel variant="dark" pause="hover" className="bg-dark" fade>
        {products.map((product) => (
          <Carousel.Item key={product._id} interval={4000}>
            <Link to={`/product/${product._id}`}>
              <Image src={product.image} alt={product.name} fluid />
              <Carousel.Caption className="carousel-caption">
                <h2>
                  {product.name} (${product.price})
                </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </>

    // <>
    //   <div>
    //     <Carousel
    //       autoPlay
    //       showThumbs={false}
    //       swipeable
    //       width="100%"
    //       stopOnHover
    //       infiniteLoop
    //       emulateTouch
    //     >
    //       {products.map((product) => (
    //         <div key={product._id} interval={4000}>
    //           <Link to={`/product/${product._id}`}>
    //             <img src={product.image} alt={product.name} />
    //             <p className="legend">
    //               {product.name} (${product.price})
    //             </p>
    //           </Link>
    //         </div>
    //       ))}
    //     </Carousel>
    //   </div>
    // </>
  );
};

export default ProductCarousel;
