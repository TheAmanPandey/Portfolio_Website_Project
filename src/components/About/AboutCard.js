import React from "react";
import Card from "react-bootstrap/Card";

function SkillCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m proficient in 
            <span className="purple"> Data Structures & Algorithm </span>
            and core Computer Science fundamentals like 
            <span className="purple"> Operating System (OS)</span>,
            <span className="purple"> Database Management System (DBMS)</span>,
            <span className="purple"> Computer Networks (CN)</span>,
            <span className="purple"> Object Oriented Programming (OOPs), </span> etc.
            <br></br>
            My key area of interest include
            <span className="purple"> Web Development </span>and
            <span className="purple"> Applied Artificial Intelligence & Machine Learning </span>with a focus on 
            <span className="purple"> Natural Language Processing (NLP) </span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SkillCard;
