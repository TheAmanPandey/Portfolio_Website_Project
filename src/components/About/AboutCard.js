import React from "react";
import Card from "react-bootstrap/Card";

function SkillCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I have a strong grasp of
            <span className="purple"> Data Structures & Algorithms </span>
            and fundamental Computer Science concepts, including 
            <span className="purple"> Operating System</span>,
            <span className="purple"> Database Management System</span>,
            <span className="purple"> Computer Networks</span>,
            <span className="purple"> Object-Oriented Programming, </span> etc.
            <br></br>
            I am particularly passionate about
            <span className="purple"> Full-Stack Web Development </span>and
            <span className="purple"> Artificial Intelligence & Machine Learning </span>specializing in 
            <span className="purple"> Natural Language Processing (NLP) and Generative AI </span>.
            My goal is to combine software engineering and artificial intelligence to create scalable, impactful, and user-centric solutions.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SkillCard;
