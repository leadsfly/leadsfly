import React, { useEffect } from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "next/image";
import NavHeaderSVG from "../../components/navHeaderSVG";
import { Great_Vibes } from "@next/font/google";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "/public/assets/myicon.svg";

const Link = ({ page, selectedPage, setSelectedPage }: any) => {
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
function Navbg1({
  isTopOfPage,

  selectedPage,
  setSelectedPage,
}: any) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 890px)");
  var navbarBackground = isTopOfPage ? "" : "bg-red";
  return (
    <nav
      className={`${navbarBackground} z-40 w-full fixed top-0 py-1 sme:py-4 md:py-4 h-16`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        {/*         <motion.h4
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{
            opacity: 1,
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          transition={{ delay: 0, duration: 1.5 }}

          className={`${GreatVibes.className} text-3xl font-black `}
        >
          L F
        </motion.h4>*/}
        <Logo></Logo>

        {isAboveMediumScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-lg font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Image
              alt="menu-icon"
              src="/assets/menu-icon.svg"
              width={32}
              height={32}
            />
          </button>
        )}
        {!isAboveMediumScreen && isMenuToggled && (
          <AnimatePresence>
            <motion.div
              initial={{ x: 350 }}
              animate={{ x: 0 }}
              exit={{ x: 350 }}
              transition={{ duration: 1 }}
              className="fixed right-0 bottom-0 h-full bg-blue w-[300px] rounded-l-full border-l-8		"
            >
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Image
                    alt="close-icon"
                    src="/assets/close-icon.svg"
                    width={32}
                    height={32}
                  />
                </button>
              </div>

              <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />

                <Link
                  page="Testimonials"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        {/*
 
  
          
        
       
      

   
 
        */}
      </div>
    </nav>
  );
}

export default Navbg1;
