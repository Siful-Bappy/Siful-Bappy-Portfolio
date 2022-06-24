import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carService from "../../Assets/Projects/Car service.JPG";
import emotion from "../../Assets/Projects/emotion.jpeg";
import emaJhon from "../../Assets/Projects/Ema JhonJPG.JPG";
import chatify from "../../Assets/Projects/doctors protalJPG.JPG";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Smart Home project.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Doctors Protal"
              description="Doctors Protal is an appointment service app where patients can take appiontment according to validation of time and date as well as view their appintment in the dashboard. In the app there used pament method. "
              link="https://github.com/Siful-Bappy/Doctors-Protal-client-side"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart Home"
              description="Smart Home Application was a group project where used raspberry pi with different different sensors and can control those sensors by the web app. Supports voice command."
              link="https://github.com/Siful-Bappy/smart-home-application"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={emaJhon}
              isBlog={false}
              title="Ema Jhon"
              description="Online shopping build with react.js. Online Editor which supports html, css, and js code with instant view of website. Ema Jhon has building README file which supports GFM, Custom Html tags with toolbar and instant preview.Add item supports auto save of work using Local Storage"
              link="https://github.com/Siful-Bappy/daraz-eCommerce"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={carService}
              isBlog={false}
              title="Genius Car Service"
              description="Genius car service is a service app where customers can search mechanic. In the app use protected route, setisfation level as start etc used. For the backend used node js and for storage data used mongodb database "
              link="https://github.com/Siful-Bappy/Genius-car-services-client-site"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
