import React from "react";
import "./device.css";

const Devices = () => {
  return (
    <div className="device section">
      <div className="title">
        <h1>This is not the end</h1>
        <p>topping from health aura.</p>
      </div>
      <div className="device-container container">
        <div className="boxer">
          <div className="card1 card">
            <h2>Calorie meter</h2>
              <button className="card-btn">Check Now</button>
          </div>
          <div className="card1 card">
            <h2>BMI Report</h2>
            <button className="card-btn">Check Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
