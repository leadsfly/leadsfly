import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import LineGradient from "../components/LineGradient";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const Project = ({ title }: any) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  // const projectTitle = title.split(" ").join("-").toLowerCase();
  //     <motion.div variants={projectVariant} className="relative">
  const projectTitle = title;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 0, scale: 0.8 },
        visible: { opacity: 1, x: 0, scale: 1 },
      }}
      className="relative"
    >
      <div className="bg-yellow  pl-3 pr-3 opacity-65	rounded-t-2xl		  absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
        <p className="text-2xl font-playfair">{title}</p>
      </div>
      <Image
        src={`/assets/${projectTitle}.jpeg`}
        alt="Picture of the author"
        width={400}
        height={400}
        className="z-10"
      />
    </motion.div>
  );
};

function Projects({ title }: any) {
  return (
    <section id="countries" className="pt-10 pb-10 mb-3">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="pb-10">
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">Choose Your Favourite </span>
            Destination!
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className=" hidden sm:flex justify-center text-center items-center  bg-red
          p-5 xs:p-10 max-h-[200px] xs:max-h-[400px]  max-w-[400px]  text-2xl font-playfair font-semibold leading-10	"
          >
            QUALITY <br></br> OF <br></br>EDUCATION
          </div>
          <Project title="UK" />
          <Project title="Germany" />

          {/* ROW 2 */}
          <Project title="Canada" />
          <Project title="Australia" />
          <Project title="France" />

          {/* ROW 3 */}
          <Project title="Ireland" />
          <Project title="Italy" />
          <div
            className="   p-5 xs:p-10 max-h-[200px] xs:max-h-[400px]  flex justify-center text-center items-center  bg-blue
              max-w-[400px]  text-2xl font-playfair font-semibold leading-10	"
          >
            EXPOSURE <br></br> TO <br></br> THE WORLD
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
