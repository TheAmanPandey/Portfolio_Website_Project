import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import diabetes from "../../Assets/Projects/diabetes.png";
import housePrice from "../../Assets/Projects/housePrice.png";
import loginPage from "../../Assets/Projects/loginPage.png";
import skillforge from "../../Assets/Projects/skillforge.png";
import todo from "../../Assets/Projects/todo.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import osShedVis from "../../Assets/Projects/osProcessShedulingVisualizer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="amber">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillforge}
              isBlog={false}
              title="Skillforge AI: Career Intelligence Platform"
              description="This project is an AI-powered career intelligence platform built on real LinkedIn job postings. It goes beyond basic job search by identifying skill gaps, recommending learning resources, estimating time to acquire skills, and providing high-level labor market insights."
              ghLink="https://github.com/TheAmanPandey/Skillforge_Career-Intelligence-Platform_AI-NLP_Project"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={osShedVis}
              isBlog={false}
              title="OS Process Scheduling Visualizer"
              description="An interactive web application for visualizing CPU scheduling algorithms including FCFS, SJF, Round Robin, and Priority Scheduling."
              ghLink="https://github.com/TheAmanPandey/OS_Process_Sheduling_Visualizer_Project"
              demoLink="https://processshedulingvisualizer.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="A modern, responsive personal portfolio website built using React.js to showcase my projects, technical skills, and experiences. This portfolio serves as a central hub to highlight my work, demonstrate my technical capabilities, and provide an easy way to connect."
              ghLink="https://github.com/TheAmanPandey/Skillforge_Career-Intelligence-Platform_AI-NLP_Project"
              demoLink="https://amanpandey-ap.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Pro To-Do"
              description="A modern, full-featured To-Do application built with Node.js, Express, and a beautiful HTML/CSS frontend. This project is perfect for beginners who want to learn about full-stack web development without a database (data is stored in JSON files for simplicity)."
              ghLink="https://github.com/TheAmanPandey/ToDo_Web-Application_Project"
              demoLink="https://to-do-web-application-project.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetes}
              isBlog={false}
              title="Diabetes Predictor Model"
              description="This project focuses on predicting the likelihood of diabetes using various machine learning algorithms. It involves end-to-end implementation including data preprocessing, exploratory data analysis, model building, and performance evaluation."
              ghLink="https://github.com/TheAmanPandey/Diabetes_Prediction_Model_Project"
              //demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={housePrice}
              isBlog={false}
              title="Bengaluru House Price Predictor Model"
              description="This project predicts house prices in Bengaluru based on various features such as: Total area (in square feet), Number of bathrooms, Location, BHK (Bedrooms, Hall, Kitchen). The model is trained using Machine Learning techniques and deployed using joblib for persistence."
              ghLink="https://github.com/TheAmanPandey/Bengaluru_House_Price_Model_Project"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loginPage}
              isBlog={false}
              title="Login Webpage"
              description="This is a simple Login Webpage built using HTML, CSS, and JavaScript. It demonstrates a clean layout with basic form validation on the client side."
              ghLink="https://github.com/TheAmanPandey/Login_Webpage_Project"
              //demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
