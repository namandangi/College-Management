import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer ">
        <div className="float-right">
          About | <Link to="/contact">Contact</Link>
        </div>
        <div className="mr-auto">© Dwarkadas J. Sanghvi</div>
      </div>
    );
  }
}

export default Footer;
