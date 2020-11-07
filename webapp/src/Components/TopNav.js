import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import djs from "../images/djs.png";

class TopNav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" style={{maxHeight: "60px"}}>
        <Link to="/">
          <Navbar.Brand href="#home" className="navtitle">
            <img src={djs} alt="" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Form inline>
            <button className="login-btn">Log In</button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNav;
