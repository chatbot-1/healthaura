import React from "react";
import "./apply.css";
import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <div className="apply section">
      <div className="apply-container container">
        <div className="title apply-title">
          <h1>Fill the below mentioned details correctly.</h1>
        </div>
        <div className="apply-input">
            <input type="text" placeholder="Full Name (as mentioned in the Aadhar card)"/>
            <input type="email" placeholder="Email Address"/>
            <input type="number" placeholder="Mobile Number"/>
            <input type="text" placeholder="Father Name"/>
            <input type="text" placeholder="Temporary Address"/>
            <input type="text" placeholder="Residential Adrress (as per Aadhar card)"/>
            <input type="number" placeholder="Aadhar Card number"/>
            <input type="number" placeholder="Pan Card Number"/>
            <div className="aadhar">
                <label htmlFor="file">upload your Aadhar Card : </label><input type="File"/>
            </div>
            <div className="pan">
                <label htmlFor="file"></label>Upload your Pan Card : <input type="file"/>
            </div>
            <button className="sub-btn">Submit</button>
            <br />
            <br />
        <div className="add-card">
            <p>Already have a health card?</p>
            <Link to="/add-new-card"><button className="add-btn">Add Your card Now</button></Link>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Apply;
