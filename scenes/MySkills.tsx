import { motion } from "framer-motion";
import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Travel from "/public/assets/travel.svg";
function MySkills() {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const isAboveLarge1 = useMediaQuery("(min-width: 620px)");
  const isAboveLarge2 = false;
  return (
    <section id="services" className="pt-10 pb-10">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            Our <span className="text-red">Services</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-justify">
            We are here to support you in building a brighter future and
            achieving your dreams with an affordable, high-quality education
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0 flex justify-center">
          {isAboveLarge1 ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full  before:z-[-1]"
            >
              <Travel width={512} height={200}></Travel>
            </div>
          ) : (
            <Travel width={200} height={200} className="z-10"></Travel>
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32 text-justify">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 justify">
            Our team consists of experienced persons in this domain. Expertise
            ranges from guiding students regarding university admission,
            assistance in visa application to placement assistance.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Counselling
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Our team of counsellors helps students to identify a course and
            university that is incoherent with their interests, future
            prospects, academic and financial background.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Collaboration
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            We forges partnerships with outstanding academic and other
            institutions across the globe Collaborations with our foreign
            colleagues are essential to the success of our global activities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MySkills;
