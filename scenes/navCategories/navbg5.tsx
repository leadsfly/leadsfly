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
function Navbg5({
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
      <div className="  grid justify-items-center	 font-opensans text-sm		">
        <div>VP Mall</div>
        <div>Melakkam, Ooty Road</div>
        <div>Manjeri Malappuram</div>
        <div> Kerala, 676121</div>
        <div>Mobile 1 - 9207400080 </div>
        <div>Mobile 2 - 7034277964 </div>
        <div>Email - admin@leadsflyedu.com</div>
      </div>
    </>
  );
}

export default Navbg5;
