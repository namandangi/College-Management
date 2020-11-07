import React from "react";

function AddBook() {
  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <h2>LIBRARY REPOSITORY</h2>
      <br></br>
      <div class="center-div">
        <h3>ADD A BOOK</h3>
        <br></br>
        <div className="row align-items-end">
          <div className="col-3">
            <label>Book Name: </label>
          </div>
          <div className="col-7">
            <input className="form-control"></input>
          </div>
        </div>
        <br></br>
        <div className="row align-items-end">
          <div className="col-3">
            <label>Book Author: </label>
          </div>
          <div className="col-7">
            <input className="form-control"></input>
          </div>
        </div>
        <br></br>
        <div className="row align-items-end">
          <div className="col-3">
            <label>Book Edition: </label>
          </div>
          <div className="col-7">
            <input className="form-control"></input>
          </div>
        </div>

        <br></br>
        <button class="create-btn">CREATE</button>
      </div>
    </div>
  );
}

export default AddBook;
