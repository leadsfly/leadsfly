import React, { useEffect } from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "next/image";
import NavHeaderSVG from "../../components/navHeaderSVG";
import { Great_Vibes } from "@next/font/google";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "/public/assets/myicon.svg";
import Link from "next/link";

const LinkC = ({ page, selectedPage, setSelectedPage }: any) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
function Navbg3({
  isTopOfPage,

  selectedPage,
  setSelectedPage,
  isinHomePage,
  setisinHomePage,
}: any) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 890px)");
  var navbarBackground = isTopOfPage ? "" : "bg-red";
  return (
    <>
      {isinHomePage ? (
        <div className="  grid    justify-between justify-items-center	 font-opensans text-lg font-semibold">
          <LinkC
            page="Home"
            className="w-1/3"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <LinkC
            page="Contact"
            className="w-1/3"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <LinkC
            page="Services"
            className="w-1/3"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link href="/aboutUs" className="w-1/3" legacyBehavior>
            <a className="  hover:text-yellow transition duration-500">
              About Us
            </a>
          </Link>
          <LinkC
            page="Testimonials"
            className="w-1/3"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      ) : (
        <div className="  grid justify-items-center	 font-opensans text-lg font-semibold">
          <Link href="/" legacyBehavior>
            <a className="  hover:text-yellow transition duration-500">Home</a>
          </Link>

          <Link href="/#contact" legacyBehavior>
            <a className="  hover:text-yellow transition duration-500">
              Contact
            </a>
          </Link>
          <Link href="/#services" legacyBehavior>
            <a className="  hover:text-yellow transition duration-500">
              Services
            </a>
          </Link>
          <Link href="/aboutUs" className="w-1/3" legacyBehavior>
            <a className="  hover:text-yellow transition duration-500">
              About Us
            </a>
          </Link>
          <Link href="/#testimonials" legacyBehavior>
            <a className="  hover:text-yellow transition duration-500">
              Testimonials
            </a>
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbg3;
