import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function Skill() {
  return (
    <>
      {" "}
      <Container fluid className="Skill-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" ,marginTop: "40px"}}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 className="project-heading" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know My <strong className="amber">Expertise</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading" style={{ paddingBottom: "30px"}}>
            Professional <strong className="amber">Skillset </strong>
          </h1>

          <Techstack />

        </Container>
      </Container>
    </>
  );
}

export default Skill;
