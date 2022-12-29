import React, { useEffect } from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import NavHeaderSVG from "../components/navHeaderSVG";
import { Great_Vibes } from "@next/font/google";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "/public/assets/myicon.svg";
import Navbg1 from "./navCategories/navbg1";

const GreatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gvibes",
});

export default function Navbar({
  isTopOfPage,

  selectedPage,
  setSelectedPage,
}: any) {
  var navbarBackground = isTopOfPage ? "bg-white" : "bg-yellow";

  return (
    <Navbg1
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    ></Navbg1>
  );
}
