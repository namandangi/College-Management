import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import projectLogo from "../images/project-lg.png";
import switchOrder from "../images/switch-order-logo.png";
import book from "../images/book.png";

class Library extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="leftside" md={2}>
            <p>
              <span className="pageimageholder">
                <img style={{ marginTop: "30px" }} src={projectLogo} alt="" />
              </span>
            </p>
            <p className="page-title">PROJECTS</p>
            <p>
              No. of projects: <b>215</b> <br></br>
              No. of professor: <b>215</b> <br></br>
              No. of students: <b>215</b>
            </p>
          </Col>
          {/* <Col md={1}></Col> */}
          <Col className="rightside" md={8}>
            <Row>
              <Col md={1}>Projects</Col>
              <Col md={1}>Professor</Col>
              <Col className="mr-auto" md={1}>
                Students
              </Col>

              <input className="search" type="text" placeholder="Search" />
              <buttton>
                {" "}
                <img src={switchOrder} alt=""></img>{" "}
              </buttton>
            </Row>
            <hr></hr>
            {/* MAIN */}
            <Row className="homerow justify-content-md-center">
              <Col md={5} className="pagegrid">
                <Row>
                  <Col md={1}>
                    <span>
                      <img style={{ marginTop: "30px" }} src={book} alt="" />
                    </span>
                  </Col>
                  <Col>
                    <br></br>
                    <p className="text-muted float-right">[Khushali K.]</p>
                    <p className="grid-title ">Farmer's Tech</p>

                    <p>
                      Working on technology to help farmers improve on the
                      efficiency of their farm fields.
                    </p>
                  </Col>
                </Row>
                <p style={{ position: "absolute", bottom: "0" }}>
                  Naman Dangi, Nemil Shah, Nimit Vasavat
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Library;
