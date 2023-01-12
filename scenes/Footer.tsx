import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Link from "next/link";
import Image from "next/image";
import Navbg3 from "./navCategories/navbg3";
import LineGradient from "../components/LineGradient";
import Navbg4 from "./navCategories/navbg4";
function Footer() {
  return (
    <footer className="flex flex-wrap	 footer-distributed   bg-red pt-3 	 ">
      <div className="w-full	 flex justify-center	justify-items-center">
        <div className=" w-full text-center ">
          <h3 className="mb-2">
            Leads<span>fly</span>
          </h3>
          <p
            className="text-white font-light		leading-5 mb-5
          "
          >
            {" "}
            Leading path to a global future{" "}
            <br className="hidden xs:block "></br>Enable your future
            possibilities and create enduring tales
          </p>

          <div className="mt-10">
            {" "}
            <LineGradient />
          </div>
        </div>
      </div>

      <div className="    w-full		ssf:w-6/12  flex justify-center	justify-items-center content-center	items-start ">
        <div className="w-full">
          <div className=" mb-3 mt-3">
            <div className="text-center  text-2xl	text-fcolor">
              <span>Contact Us</span>
            </div>{" "}
            <Navbg4 />
          </div>

          <div>
            {" "}
            <LineGradient />
          </div>
        </div>
      </div>

      <div className="    w-full		ssf:w-6/12  flex justify-center	justify-items-center content-center	items-start ">
        <div className="w-full">
          <div className=" mb-3 mt-3">
            <div className="text-center  text-2xl	text-fcolor">
              <span>Navigation</span>
            </div>{" "}
            <Navbg3 />
          </div>

          <div>
            {" "}
            <LineGradient />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
