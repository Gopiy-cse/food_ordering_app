import React from "react";
import { Carousel, Container } from "react-bootstrap";
import offer1 from "../assets/images/offer1.jpg";
import offer2 from "../assets/images/offer2.jpg";

function SpecialOffers() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Exclusive Offers & Discounts</h2>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={offer1} alt="Special Offer 1" style={{ height: "300px", objectFit: "cover" }} />
          <div style={{ position: "absolute", bottom: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "15px" }}>
            <h3 style={{ color: "#fff", textAlign: "center" }}>Buy 1 Get 1 Free</h3>
            <p style={{ color: "#ddd", textAlign: "center" }}>Enjoy our special offer on selected meals. Limited time only!</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={offer2} alt="Special Offer 2" style={{ height: "300px", objectFit: "cover" }} />
          <div style={{ position: "absolute", bottom: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "15px" }}>
            <h3 style={{ color: "#fff", textAlign: "center" }}>Flat 50% Off</h3>
            <p style={{ color: "#ddd", textAlign: "center" }}>Get 50% off on your first order. Use code: FIRST50</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default SpecialOffers;
