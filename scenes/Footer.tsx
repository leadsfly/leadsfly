import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Link from "next/link";
import Image from "next/image";
import Navbg3 from "./navCategories/navbg3";
function Footer() {
  return (
    <footer className="flex footer-distributed h-64 bg-red pt-10 leading-8	 ">
      <div className="footer-left1 w-1/1 sm:w-2/4">
        <h3>
          Leads<span>fly</span>
        </h3>
        <p className="text-white font-light		">
          {" "}
          Leading path to a global future<br></br> Enable your future
          possibilities and create enduring tales
        </p>

        <p className="footer-company-name">Developed by Realmedge©2022</p>
      </div>
      <div className="footer-center1 w-1/1  flex justify-center	justify-items-center sm:w-1/4 ">
        dfdf
      </div>
      <div className="footer-right1 w-1/1 sm:w-1/4 ">
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
