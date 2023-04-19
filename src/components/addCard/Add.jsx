import React from "react";
import "./add.css";
import health from "../../assets/health.png";

const Add = () => {


    // document.querySelector(".number-input").oninput = () =>{
    //     document.querySelector(".card-number").innerHTML = document.querySelector(".number-input").value;
    // }
    // document.querySelector(".holder-input").oninput = () =>{
    //     document.querySelector(".card-name").innerHTML = document.querySelector(".holder-input").value;
    // }
    // document.querySelector(".month-input").oninput = () =>{
    //     document.querySelector(".exp-month").innerHTML = document.querySelector(".month-input").value;
    // }
    // document.querySelector(".year-input").oninput = () =>{
    //     document.querySelector(".exp-year").innerHTML = document.querySelector(".year-input").value;
    // }
    // document.querySelector(".cvv-input").onmouseenter = () =>{
    //     document.querySelector(".front").style.transform = "perspective(1000px) rotateY(180deg)";
    //     document.querySelector(".back").style.transform = "perspective(1000px) rotateY(0deg)";
    // }
    // document.querySelector(".cvv-input").onmouseleave = () =>{
    //     document.querySelector(".front").style.transform = "perspective(1000px) rotateY(0deg)";
    //     document.querySelector(".back").style.transform = "perspective(1000px) rotateY(180deg)";
    // }
    // document.querySelector(".cvv-input").oninput = () =>{
    //     document.querySelector(".cvv-box").innerHTML = document.querySelector(".cvv-input").value;
    // }


  return (
    <div className="add section">
      <div className="add-container container">
        <div className="card-content">

          <div className="front">

            <img src={health} alt="" />
            <div className="card-number">################</div>

            <div className="flex-box">
              <div className="box1">
                <span>Card Holder</span>
                <div className="card-name">full name</div>
              </div>
              <div className="box1">
                <span>Expires</span>
                <div className="expiration">
                  <span className="exp-month">mm</span>
                  <span className="exp-year">yyyy</span>
                </div>
              </div>
            </div>

          </div>

          <div className="back">
            <div className="strip"></div>
            <div className="box1">
                <span>cvv</span>
                <div className="cvv-box"></div>
                <img src={health} alt="" />
            </div>
          </div>

        </div>

        <form action="">
          <div className="input-box">
            <span>card number</span>
            <input type="number" maxLength="16" className="number-input" />
          </div>
          <div className="input-box">
            <span>card holder name</span>
            <input type="text" className="holder-input" />
          </div>
          <div className="flexbox">
            <div className="input-box">
              <span>expiration mm</span>
              <select name="" className="month-input">
                <option value="month" selected disabled>
                  month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="input-box">
              <span>expiration year</span>
              <select name="" className="year-input">
                <option value="year" selected disabled>
                  year
                </option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
            <div className="input-box">
              <span>cvv</span>
              <input type="number" maxLength={4} className="cvv-input" />
            </div>
          </div>
          <input type="submit" value="submit" className="submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default Add;
