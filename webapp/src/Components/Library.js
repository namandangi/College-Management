import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import libraryLogo from "../images/library-lg.png";
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
                <img style={{ marginTop: "30px" }} src={libraryLogo} alt="" />
              </span>
            </p>
            <p className="page-title">LIBRARY</p>
            <p>
              No. of books: <b>215</b> <br></br>
              No. of Authors: <b>215</b> <br></br>
              No. of Editions: <b>215</b>
            </p>
          </Col>
          {/* <Col md={1}></Col> */}
          <Col className="rightside" md={8}>
            <Row>
              <Col md={1}>Name</Col>
              <Col md={1}>Author</Col>
              <Col className="mr-auto" md={1}>
                Edition
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
                    <p className="grid-title ">Rich Dad, Poor Dad</p>
                    <span style={{ float: "right" }}> - Robert Kiyosaki</span>
                  </Col>
                </Row>
                <p style={{ position: "absolute", bottom: "0" }}>Edition 5</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Library;
