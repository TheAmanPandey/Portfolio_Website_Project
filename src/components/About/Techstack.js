import React from "react";
import { Col, Row } from "react-bootstrap";
import C from "../../Assets/TechIcons/C.svg";
import Cpp from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Express from "../../Assets/TechIcons/Express.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import ML from "../../Assets/TechIcons/ML.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import NLP from "../../Assets/TechIcons/NLP.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import HTML from "../../Assets/TechIcons/HTML.svg";
import CSS from "../../Assets/TechIcons/CSS.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Linux from "../../Assets/TechIcons/Linux.svg";
import GenAI from "../../Assets/TechIcons/GenAI.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" />
        <div className="tech-icons-text">C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Cpp} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="HTML" />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="Javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Express} alt="express" />
        <div className="tech-icons-text">Express.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="Linux" />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ML} alt="ai/ml" />
        <div className="tech-icons-text">Machine Learning</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={NLP} alt="nlp" />
        <div className="tech-icons-text">Natural Language Processing</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GenAI} alt="GenAI" />
        <div className="tech-icons-text">Generative Artificial Intelligence</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">Oracle (SQL)</div>
      </Col>
    </Row>
  );
}

export default Techstack;
