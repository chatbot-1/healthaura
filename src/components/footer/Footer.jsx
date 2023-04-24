import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-matter">
            <div className="footer-services footer-data">
                <h4>Services</h4>
                <a href="#services"><p>Upload Health Records</p></a>
                <a href="#services"><p>Make a Doctor's Appointment</p></a>
                <a href="#health-card"><p>Get Your Health Card</p></a>
                <a href="#services"><p>Call For Ambulance</p></a>
                <a href="#services"><p>Set Medical Reminders</p></a>
            </div>
            <div className="footer-links footer-data">
                <h4>Navigation</h4>
                <a href="#home"><p>Home</p></a>
                <a href="#about"><p>About</p></a>
                <a href="#services"><p>Services</p></a>
                <a href="#contact"><p>Contact</p></a>
            </div>
            <div className="footer-login footer-data">
                <h4>Login as</h4>
                <a href="#register"><p>User</p></a>
                <a href="#register"><p>Doctor</p></a>
            </div>
            <div className="footer-main footer-data">
                <h4>The Health.Aura</h4>
                <div className="footer-social">
                    <p><i class="uil uil-twitter"></i></p>
                    <p><i class="uil uil-linkedin"></i></p>
                    <p><i class="uil uil-instagram"></i></p>
                    <p><i class="uil uil-facebook"></i></p>
                    <p><i class="uil uil-google"></i></p>
                </div>
            </div>
        </div>

        <hr></hr>

        <div className="footer-below">
            <div className="footer-copyright">
                <p>@{new Date().getFullYear()} copyright. All Rights Reserved</p>
            </div>
            <div className="footer-below-links">
                <a href="#a"><div><p>Terms & Conditions</p></div></a>
                <a href="#a"><div><p>Privacy</p></div></a>
                <a href="#a"><div><p>Security</p></div></a>
            </div>
        </div>

      </div>
      
    </footer>
  );
}
