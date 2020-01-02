import React from "react";
import { Style } from "react-style-tag";
const Footer = () => {
  return (
    <footer
      className="page-footer"
      style={{ backgroundColor: "white", padding: "0px 50px" }}
    >
      <div
        className="container"
        style={{
          marginLeft: "0px",
          marginRight: "0px",
          width: "100%",
          color: "grey"
        }}
      >
        <div
          class="row"
          style={{
            borderTop: "1px solid lightgray",
            borderBottom: "1px solid lightgray",
            padding: "15px 0"
          }}
        >
          <div className="grid-example col s2.4">
            <h7>Quick Links</h7>

            <div style={listStyle}>
              <ul>
                <li>
                  <a href="#">Cafe menu</a>
                </li>
                <li>
                  <a href="#">Cafe Finder/ Cafe Locator</a>
                </li>
                <li>
                  <a href="#">Customer Care</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid-example col s2.4">
            <h7>Cafe Menu</h7>
            <ul>
              <li>
                <a href="#">What's New</a>
              </li>
              <li>
                <a href="#">Food</a>
              </li>
              <li>
                <a href="#">Beverages</a>
              </li>
              <li>
                <a href="#">Combos</a>
              </li>
              <li>
                <a href="#">Home Delivery</a>
              </li>
              <li>
                <a href="#">Nutritional info</a>
              </li>
            </ul>
          </div>
          <div className="grid-example col s2.4">
            <h7>Shop</h7>
            <ul>
              <li>
                <a href="#">Coffee Mugs and Cups</a>
              </li>
              <li>
                <a href="#">Coffee Maker & Wakecup</a>
              </li>
              <li>
                <a href="#">Coffee Powders</a>
              </li>
              <li>
                <a href="#">Gifts</a>
              </li>
            </ul>
          </div>
          <div className="grid-example col s2.4">
            <h7>Business</h7>
            <ul>
              <li>
                <a href="#">Lease Enquiry</a>
              </li>
              <li>
                <a href="#">Advertise With Us</a>
              </li>
              <li>
                <a href="#">Coffee Vending Machine</a>
              </li>
              <li>
                <a href="#">Outdoor Catering Service</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="grid-example col s2.4">
            <h7>About Us</h7>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">News and Events</a>
              </li>
              <li>
                <a href="#">Foundations</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="footer-copyright"
        style={{ color: "grey", backgroundColor: "white" }}
      >
        <div class="container" style={{ margin: "0px" }}>
          © easy-coffee. All rights reserved.
        </div>
      </div>
      <style>
        {`
          
          ul li a {
            color: lightgray;
          }
          ul li a:hover{
            color: darkgray;
          }
          .grid-example {
            width: 20%;
          }
        `}
      </style>
    </footer>
  );
};

const listStyle = {
  color: "grey"
};

export default Footer;
