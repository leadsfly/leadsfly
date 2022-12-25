import "normalize.css/normalize.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Open_Sans } from "@next/font/google";
import { Great_Vibes } from "@next/font/google";
import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Navbar from "../scenes/Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DotGroup from "../scenes/DotGroup";
import Landing from "../scenes/Landing";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Projects from "../scenes/Projects";
import Testimonials from "../scenes/Testimonials";
import Contact from "../scenes/Contact";
import Footer from "../scenes/Footer";
import MySkills from "../scenes/MySkills";
const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-osans",
});

// className={`${OpenSans.variable} font-playfair`}
export default function App({ Component, pageProps }: AppProps) {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={`${OpenSans.variable} font-opensans bg-deep-blue`}>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
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
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills />
        </motion.div>
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
          //  margin="0 0 -200px 0"
          //  amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          //  margin="0 0 -200px 0"
          //  amount="all"
          onViewportEnter={() => setSelectedPage("testimonials")}
        >
          <Testimonials />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          //  margin="0 0 -200px 0"
          //  amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>

      <Component {...pageProps} />

      <Footer></Footer>
    </main>
  );
}
