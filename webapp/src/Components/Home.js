import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import departLogo from "../images/departLogo.png";
import commiteeLogo from "../images/commiteeLogo.png";
import libraryLogo from "../images/libraryLogo.png";
import projectLogo from "../images/projectLogo.png";

class Home extends Component {
  render() {
    return (
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <Row className="homerow justify-content-md-center">
            <Col md={5} className="homegrid">
              <span className="imageholder">
                <img style={{ marginTop: "30px" }} src={departLogo} alt="" />
              </span>
              <Link to="/departments">
                <p>DEPARTMENTS</p>
              </Link>
            </Col>
            <Col md={5} className="homegrid">
              <span className="imageholder">
                <img style={{ marginTop: "30px" }} src={libraryLogo} alt="" />
              </span>

              <Link to="/library">
                <p>LIBRARY</p>
              </Link>
            </Col>
          </Row>
          <Row className="homerow justify-content-md-center">
            <Col md={5} className="homegrid">
              <span className="imageholder">
                <img style={{ marginTop: "30px" }} src={projectLogo} alt="" />
              </span>
              <Link to="/projects">
                <p>PROJECTS</p>
              </Link>
            </Col>
            <Col md={5} className="homegrid">
              <span className="imageholder">
                <img style={{ marginTop: "30px" }} src={commiteeLogo} alt="" />
              </span>
              <Link to="/committees">
                <p>COMMITTEES</p>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Home;
