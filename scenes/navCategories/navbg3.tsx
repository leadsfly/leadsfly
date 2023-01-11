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
      {isAboveMediumScreen ? (
        <div className="flex justify-between gap-2 font-opensans text-lg font-semibold">
          <LinkC
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <LinkC
            page="Services"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <LinkC
            page="Testimonials"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link href="/aboutUs" legacyBehavior>
            <a className="  hover:text-yellow transition duration-500">
              About Us
            </a>
          </Link>

          <LinkC
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      ) : (
        <div className="flex justify-between gap-16 font-opensans text-lg font-semibold">
          <LinkC
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <LinkC
            page="Services"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <LinkC
            page="Testimonials"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link href="/aboutUs" legacyBehavior>
            <a className="  hover:text-yellow transition duration-500">
              About Us
            </a>
          </Link>

          <LinkC
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      )}
    </>
  );
}

export default Navbg3;
