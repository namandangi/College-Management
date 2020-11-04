import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import departmentLogo from "../images/department-lg.png";
import switchOrder from "../images/switch-order-logo.png";
import vector from "../images/Vector.png";

class Library extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="leftside" md={2}>
            <p>
              <span className="pageimageholder">
                <img
                  style={{ marginTop: "40px" }}
                  src={departmentLogo}
                  alt=""
                />
              </span>
            </p>
            <p className="page-title">DEPARTMENTS</p>
            <p>
              No. of departments: <b>215</b> <br></br>
              No. of teachers: <b>215</b> <br></br>
              No. of students: <b>215</b>
            </p>
          </Col>
          {/* <Col md={1}></Col> */}
          <Col className="rightside" md={8}>
            <Row>
              <Col md={1}>Name</Col>
              <Col md={1}>H.O.D</Col>
              <Col className="mr-auto" md={1}>
                Strength
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
                      <img style={{ marginTop: "30px" }} src={vector} alt="" />
                    </span>
                  </Col>
                  <Col>
                    <br></br>
                    <p className="grid-title ">Computer Engineering</p>
                    <p className="text-muted float-right mr-4">
                      {" "}
                      - Khushali K.
                    </p>
                  </Col>
                </Row>
                <p style={{ position: "absolute", bottom: "0" }}>
                  Strength: 123
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
