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
              I'm Aman Pandey, a B.Tech Computer Science and Engineering student driven by curiosity and a passion for building innovative solutions. I enjoy learning new technologies, tackling challenging problems, and developing projects that create real-world impact. 
              <br />
              My goal is to grow as a software engineer while contributing to open-source projects.
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
