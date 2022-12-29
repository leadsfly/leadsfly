import useMediaQuery from "../hooks/useMediaQuery";

import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Hero from "../components/background/Hero";

const Landing = ({ setSelectedPage }: any) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="relative z-100 flex justify-between items-center  h-full "
    >
      <div className="absolute w-full z-0     h-full bg-red text-white">
        <Hero />
      </div>
      <div className="z-30 xs:collapse ss:basis-1.5/6 mt-12 "></div>
      <motion.div className="z-30  basis-6/6 ss:basis-3/6 mt-12 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 1, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <motion.p
            animate={{
              scale: 1,
              textShadow: "0px 0px 2px rgb(255,255,255)",
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 1,
              duration: 4,
            }}
            className="text-5xl md:text-6xl font-playfair z-10 text-center md:text-center"
          >
            Leads
            <span
              className="xs:relative xs:text-white xs:font-semibold z-20  
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] xs:before:overflow-hidden xs:before:width	"
            >
              Fly
            </span>
          </motion.p>
          <p className="mt-7 mb-7 text-lg text-center md:text-center pl-3 pr-3 ss:pl-0 ss:pr-0">
            Leading path to a global future<br></br> Enable your future
            possibilities and create enduring tales
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: 13 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </motion.div>
      <div className="z-30 ss:basis-1.5/6 mt-12"></div>
    </section>
  );
};

export default Landing;
