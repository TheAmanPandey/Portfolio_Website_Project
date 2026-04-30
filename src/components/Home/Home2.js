import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="amber"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is Aman Pandey and I'm a BTech Computer Science & Engineering (CSE) with strong foundations in Data Structures & Algorithms, 
              Full-Stack Web Development, Databases, and Applied Artificail Intelligence & Machine Learning, with a focus on Natural Language Processing (NLP).
              <br /> 
              I am passionate about exploring new technologies and building scalable, data-driven applications to solve real-world problems.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
