import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Siful Bappy </span>
            studying in <span className="purple"> Gachon University on Computer Engineering.</span>
            <br />Beside learning Web development, in University I got knowledge <span className="purple"> IOT, Android Application Development, Probablity and  statistics, Computer Vision with OpenCV, Data structure and algoritham </span> etc. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing guiter
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "User interface with attractive design is the heart of web app!"{" "}
          </p>
          <footer className="blockquote-footer">Siful Bappy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
