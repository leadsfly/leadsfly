import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import LineGradient from "../components/LineGradient";
import Contact from "../scenes/Contact";
import DotGroup from "../scenes/DotGroup";
import Landing from "../scenes/Landing";
import MySkills from "../scenes/MySkills";
import Projects from "../scenes/Projects";
import Testimonials from "../scenes/Testimonials";
import { useState, useEffect } from "react";

import styles from "../styles/Home.module.scss";
import AppContext from "../components/AppContext";
export default function AboutUs() {
  const appContext = useContext(AppContext);

  const isinHomePage = appContext?.isinHomePage;
  const setisinHomePage = appContext?.setisinHomePage;

  useEffect(() => {
    // other code
    setisinHomePage(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sse:h-screen   centerCase first-line:  first-line:AnchorLink  	">
      <div
        className="h-auto  text-justify	  mt-20 p-1 sse:m-20  sse:p-3 sse:rounded-2xl	
	"
      >
        {" "}
        The world is brimming with opportunities. Moving to a foreign country is
        never an easy process. Our mission is to support you in building a
        brighter future and achieving your dreams with an affordable,
        high-quality education. We've partnered with reputable universities in
        the UK, Canada, New Zealand, Germany and Europe to help you pave the way
        to a future abroad through your studies. We are a growing EdTech Company
        that assists students in searching and applying to overseas universities
        through our extensive network. We are putting access to global education
        within everyone's grasp, and we are doing it through the online platform
        that makes use of cutting-edge technology while also incorporating a
        personal touch that makes us stand out. We cross international borders
        and help more and more stakeholders use our expertise and market reach
        to meet and surpass their objectives. Our vision is to make a
        revolutionary impact on the Study Abroad Service Sector by connecting
        multiple organisations, recruiters and students around the globe.
      </div>
    </div>
  );
}
