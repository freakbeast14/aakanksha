import React from "react";
import '../css/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
        <div className="footer-col">
            <p className="footer-topic-heading">AAKANKSHA</p>
            <p className="content-aksha">All over India shipping. We sell more than 100+ brands and of course our domains are awesome.</p>
            <ul>
              <li>
                <a href="#"><i class="fa fa-map-marker"></i>&nbsp;&nbsp;Location</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-phone"></i>&nbsp;&nbsp;1800-345-786</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-globe"></i>&nbsp;&nbsp;www.aakanksha.com</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-topic-heading">company</p>
            <ul>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Terms and Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-topic-heading">Account</p>
            <ul>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
              <li>
                <a href="#">My Cart</a>
              </li>
              <li>
                <a href="#">My Catalog</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-topic-heading">Support</p>
            <ul>
              <li>
                <a href="#">Store Locator</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-topic-heading">stay updated</p>
            <div className="footer-email-input">
              <input type="email" className="footer-email" placeholder="Enter Email Id" />
              <input type="submit" className="footer-submit"value="Subscribe"/>
            </div>
            {/* <p className="footer-topic-heading">follow us</p> */}
            <div className="footer-social-links">
              <a href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
