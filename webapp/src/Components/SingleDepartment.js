import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import departmentLogo from "../images/department-lg.png";
import switchOrder from "../images/switch-order-logo.png";
import vector from "../images/Vector.png";

function SingleDepartment() {
  const [action, setAction] = useState(true);

  const displayCourse = () => {
    setAction(false);
  };

  const displayFaculty = () => {
    setAction(true);
  };

  return (
    <div>
      <Row>
        <Col className="leftside" md={2}>
          <p>
            <span className="pageimageholder">
              <img style={{ marginTop: "40px" }} src={departmentLogo} alt="" />
            </span>
          </p>
          <p className="page-title">COMPUTER ENGINEERING</p>
          <p>
            No. of teachers: <b>215</b> <br></br>
            No. of students: <b>215</b> <br></br>
            No. of courses: <b>215</b>
          </p>
        </Col>
        {/* <Col md={1}></Col> */}
        <Col className="rightside" md={8}>
          <Row>
            <Col onClick={displayFaculty} md={1}>
              Faculty
            </Col>
            <Col onClick={displayCourse} className="mr-auto" md={1}>
              Courses
            </Col>

            <input className="search" type="text" placeholder="Search" />
            <buttton>
              {" "}
              <img src={switchOrder} alt=""></img>{" "}
            </buttton>
          </Row>
          <hr></hr>
          {/* FACULTY */}

          {action ? (
            <div id="faculty">
              {/* MAIN */}
              <Row className="homerow justify-content-md-center">
                <Col md={5} className="pagegrid">
                  <Row>
                    <Col md={1}>
                      <span>
                        <img
                          style={{ marginTop: "30px" }}
                          src={vector}
                          alt=""
                        />
                      </span>
                    </Col>
                    <Col>
                      <br></br>
                      <p className="grid-title ">Head Of Department</p>
                      <p className="text-muted float-right mr-4">
                        {" "}
                        - Khushali K.
                      </p>
                    </Col>
                  </Row>
                  <p style={{ position: "absolute", bottom: "0" }}>
                    Contact: meeranav@djsce.co.in
                  </p>
                </Col>
              </Row>
              {/* SECOND */}
              <Row className="homerow ">
                <Col md={5} className="pagegrid">
                  <Row>
                    <Col md={1}>
                      <span>
                        <img
                          style={{ marginTop: "30px" }}
                          src={vector}
                          alt=""
                        />
                      </span>
                    </Col>
                    <Col>
                      <br></br>
                      <p className="grid-title ">Associate Professor</p>
                      <p className="text-muted float-right mr-4">
                        {" "}
                        - Robert Dsouza
                      </p>
                    </Col>
                  </Row>
                  <p style={{ position: "absolute", bottom: "0" }}>
                    Contact: robertd@djsce.co.in
                  </p>
                </Col>
              </Row>
            </div>
          ) : (
            <div id="courses">
              <Row className="homerow justify-content-md-center">
                <Col md={5} className="pagegrid">
                  <Row>
                    <Col md={1}>
                      <span>
                        <img
                          style={{ marginTop: "30px" }}
                          src={vector}
                          alt=""
                        />
                      </span>
                    </Col>
                    <Col>
                      <br></br>
                      <p className="grid-title ">Analysis Of Algorithm</p>
                      <p className="text-muted float-right mr-4">
                        {" "}
                        - Priya Rai
                      </p>
                    </Col>
                  </Row>
                  <p style={{ position: "absolute", bottom: "0" }}>
                    Credits: 4
                  </p>
                </Col>
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default SingleDepartment;
