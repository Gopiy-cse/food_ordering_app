import React from "react";
import Navigation from "./navbar";
import SpecialOffers from "./SpecialOffer";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import burger from "../assets/images/burger.jpg";
import pizza from "../assets/images/pizza.jpg";
import dessert from "../assets/images/dessert.jpg";

function MainPage() {
  return (
    <>
      <div className="container fixed-top">
        <Navigation />
      </div>
      {/* Hero Section */}
      <div className="hero-section text-center text-white py-5" style={{ backgroundColor: "#ff6600" }}>
        <h1 style={{marginTop: '54px'}}>Delicious Meals, Delivered to Your Door!</h1>
        <p>Explore a variety of mouthwatering dishes from the best restaurants near you.</p>
        <Button variant="dark" size="lg">Order Now</Button>
      </div>

      {/* Special Offers Section */}
      <SpecialOffers />

      {/* Categories Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Popular Categories</h2>
        <Row className="text-center">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={burger} style={{ height: "250px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>Juicy Burgers</Card.Title>
                <Card.Text>Savor the taste of freshly grilled, juicy burgers with a variety of toppings.</Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={pizza} style={{ height: "250px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>Cheesy Pizzas</Card.Title>
                <Card.Text>Enjoy crispy, oven-baked pizzas loaded with your favorite toppings.</Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={dessert} style={{ height: "250px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>Sweet Desserts</Card.Title>
                <Card.Text>Indulge in a delightful selection of cakes, pastries, and ice creams.</Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center text-white mt-5 p-4" style={{ backgroundColor: "#333" }}>
        <p>&copy; 2025 FoodOrderingApp | Satisfying Your Cravings</p>
      </footer>
    </>
  );
}

export default MainPage;
