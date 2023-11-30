import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description"></Col>
          <Col md={4} className="myAvtar"></Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social"></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
