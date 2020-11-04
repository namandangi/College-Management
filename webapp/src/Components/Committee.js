import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import committeeLogo from "../images/commitee-lg.png";
import switchOrder from "../images/switch-order-logo.png";
import bulb from "../images/bulb.png";

class Library extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="leftside" md={2}>
            <p>
              <span className="pageimageholder">
                <img style={{ marginTop: "40px" }} src={committeeLogo} alt="" />
              </span>
            </p>
            <p className="page-title">Committees</p>
            <p>
              No. of committees: <b>215</b> <br></br>
              No. of students: <b>215</b>
              <br></br>
              No. of victories: <b>215</b> <br></br>
              No. of events: <b>215</b>
            </p>
          </Col>
          {/* <Col md={1}></Col> */}
          <Col className="rightside" md={8}>
            <Row>
              <Col md={1}>Name</Col>
              <Col className="mr-5" md={1}>
                Chairperson
              </Col>
              <Col className="mr-auto" md={1}>
                Accolades
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
                  <Col className="mr-3" md={1}>
                    <span>
                      <img style={{ marginTop: "30px" }} src={bulb} alt="" />
                    </span>
                  </Col>
                  <Col>
                    <br></br>
                    <p className="grid-title ">
                      The Association for Computing Machinery
                    </p>
                    <p className="text-muted float-right mr-4">
                      {" "}
                      - Naman Dangi
                    </p>
                  </Col>
                </Row>
                <p style={{ position: "absolute", bottom: "0" }}>
                  Accolade: 123
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
