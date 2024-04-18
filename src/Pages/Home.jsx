import React from "react";
import { Header } from "../Components";
import "./pages.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import { Fruites, Vesitables } from "../assets";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Header></Header>
      <Container fluid className="home-background py-5 ">
        <Row>
          <Col md={12} lg={7}>
            <p className="mb-3 color-yellow">100% Organic Foods</p>
            <h1 className="display-home-text mb-5 color-green">
              Organic Veggies & Fruits Foods
            </h1>
            <InputGroup className=" w-75 position-relative home-submit-btn">
              <Form.Control
                className="w-75 py-3 px-4 rounded-pill border-2 border-secondary"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                className="position-absolute rounded-pill text-white h-100 home-submit-btn"
                style={{ right: "0%" }}
              >
                Submit Now
              </Button>
            </InputGroup>
          </Col>
          <Col md={12} lg={5}>
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <Image src={Vesitables}></Image>
                </div>
                <div>
                  <Image src={Fruites}></Image>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
