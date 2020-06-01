import React from "react";
//import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <hr />
        <div className="footer-row">
          <div className="footer-left-col">
            <div className="footer-links">
              <div className="link-title">
                <h4>Poducts</h4>
                <small>Our Collection</small>
                <br />
                <small>Editors Choice</small>
                <br />
                <small>CRWN Brand</small>
              </div>
              <div className="link-title">
                <h4>About</h4>
                <small>CRWN Brand</small>
                <br />
                <small>Branding</small>
                <br />
                <small>About Us</small>
              </div>
              <div className="link-title">
                <h4>Support</h4>
                <small>Features</small>
                <br />
                <small>Contact</small>
              </div>
              <div className="link-title">
                <h4>Explore</h4>
                <small>Clothing</small>
                <br />
                <small>Editors Choice</small>
              </div>
            </div>
          </div>
          <div className="footer-right-col">
            <div className="footer-info">
              <div className="copyright">
                <small>support@crwn-clothing.com</small><br/>
                <small>Copyright 2020, CRWN Clothing</small>
              </div>
              <div className="footer-logo">
                <Logo className="logo"/>
                <button className="common-btn">English</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
