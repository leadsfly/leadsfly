import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <footer className=" footer-distributed h-64 bg-red pt-10 ">
      <div className="footer-left">
        <h3>
          Company<span>logo</span>
        </h3>
        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Testimonials</a>
          <a href="#">Countries</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">Company Name © 2022</p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker" />
          <p>
            <span>444 S. Cedros Ave</span> Leads Fly, Kerala
          </p>
        </div>
        <div>
          <i className="fa fa-phone" />
          <p>+1.555.555.5555</p>
        </div>
        <div>
          <i className="fa fa-envelope" />
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        <div className="footer-icons">
          <Link href="#">
            <i className="fa fa-facebook" />
          </Link>
          <Link href="#">
            <i className="fa fa-twitter" />
          </Link>
          <Link href="#">
            <i className="fa fa-linkedin" />
          </Link>
          <Link href="#">
            <i className="fa fa-github" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
