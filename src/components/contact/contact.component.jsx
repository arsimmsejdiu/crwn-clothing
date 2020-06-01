import React from "react";

import "./contact.style.scss";
import GoogleMaps from './google-maps.component';

const ContactUs = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <h1>Contact Us</h1>
        <p>
          -- If you have questions, feel free to contact us.Our team is here to
          help --
        </p>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send your request</h3>
            <form>
              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name..." />
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input type="text" placeholder="+33 74 324 722" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" placeholder="example@domain.com...." />
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" placeholder="article..." />
                </div>
              </div>
              <label>Message</label>
              <textarea rows="5" placeholder="Your Message..."></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Reach us at:</h3>
            <table>
              <tbody>
                <tr>
                  <td>Email:</td>
                  <td>someone.somebody@crwn-clothing.com</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>+33 74 543 3244</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>
                    5800 Nevers, France <br /> Carfoure Marches
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="maps">
        {/*<GoogleMaps />*/}
        <GoogleMaps />
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
