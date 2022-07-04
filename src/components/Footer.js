import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          To Make an Appointment, Call or Email:
        </p>
        <p className="footer-subscription-text">(555) 359-7685</p>
        <p className="footer-subscription-text">brittanybeaute@gmail.com</p>
        {/* <div className="input-areas">
                    <form>
                        <input type="email"
                            name="email"
                            placeholder="Your Email"
                            className="footer-input"
                        />
                        <Button buttonStyle='btn--outline'>Subsrcribe</Button>
                    </form>
                </div> */}
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">About Brittany</Link>
            <Link to="/services">Services</Link>
            <Link to="/sign-up">Gallery</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="https://www.instagram.com/bridalbeautybybrittany/">
              Instagram
            </Link>
            <Link to="https://www.facebook.com/bridalbeautybybrittanyy/">
              Facebook
            </Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              B3
            </Link>
          </div>
          <small className="website-rights">BBB 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              arial-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              arial-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              arial-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              arial-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
