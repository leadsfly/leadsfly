import { motion } from "framer-motion";
import React from "react";
import LineGradient from "../components/LineGradient";

function Testimonials() {
  return (
    <section id="testimonials" className="pt-10 pb-10">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10 pl-2 pr-2 xs:pl-0 xs:pr-0">
          Here's What People are Saying About Leadsfly. Student Satisfaction by
          ensuring the bright future abroad is our motto
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-3">
        <motion.div
          className="mx-auto relative  bg-blue   w-6/6 md:w-2/6   flex flex-col justify-end p-16 pb-2 xs:pb-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Career guidelines from Leadsfly is topnotch and very helpful
            <br /> <br />
            <span className="text-zinc-900	mt-5">Anusree O, Kannur</span>
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red w-6/6 md:w-2/6   flex flex-col justify-end p-16 pb-2 xs:pb-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            For getting proper course information suitable for our aptitude I
            recommend Leadsfly
            <br /> <br />
            <span className="text-zinc-900	mt-5">Devika M , Nilambur</span>
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow w-6/6 md:w-2/6  flex flex-col justify-end p-16 pb-2 xs:pb-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Leadsfly's Counselling regarding part time job and visa application
            procedures is very useful
            <br /> <br />
            <span className="text-zinc-900	mt-5">Jilin Raj A, Thrissur</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
