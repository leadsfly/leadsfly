import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import LineGradient from "../components/LineGradient";
import Contact from "../scenes/Contact";
import DotGroup from "../scenes/DotGroup";
import Landing from "../scenes/Landing";
import MySkills from "../scenes/MySkills";
import Projects from "../scenes/Projects";
import Testimonials from "../scenes/Testimonials";

import styles from "../styles/Home.module.scss";
import AppContext from "../components/AppContext";
import Hero from "../components/background/Hero";

export default function Home() {
  const appContext = useContext(AppContext);

  const isAboveMediumScreen = appContext?.isAboveMediumScreen;
  const selectedPage = appContext?.selectedPage;
  const setSelectedPage = appContext?.setSelectedPage;
  const isinHomePage = appContext?.isinHomePage;
  const setisinHomePage = appContext?.setisinHomePage;

  useEffect(() => {
    // other code
    setisinHomePage(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  setisinHomePage(true);
  return (
    <div className="relative">
      {" "}
      <div className="relative w-6/6 mx-auto h-screen z-4">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}

        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          // margin="0 0 -200px 0"
          //  amount="all"
          onViewportEnter={() => {
            setSelectedPage("services");
            //   console.log("entry Page  services --> " + selectedPage);
          }}
        >
          <MySkills />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-6/6 xs:w-5/6 mx-auto">
        <motion.div
          //  margin="0 0 -200px 0"
          //  amount="all"

          onViewportEnter={() => {
            setSelectedPage("projects");
            //  console.log("entry Page projects --> " + selectedPage);
          }}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-6/6 xs:w-5/6 mx-auto md:h-full">
        <motion.div
          //  margin="0 0 -200px 0"
          //  amount="all"
          onViewportEnter={() => {
            setSelectedPage("testimonials");
            // console.log("entry Page testimonials --> " + selectedPage);
          }}
        >
          <Testimonials />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          //  margin="0 0 -200px 0"
          //  amount="all"
          onViewportEnter={() => {
            setSelectedPage("contact");
            //  console.log("entry Page contact --> " + selectedPage);
          }}
        >
          <Contact />
        </motion.div>
      </div>
      {/*  
 
     
      
       
 */}
    </div>
  );
}
