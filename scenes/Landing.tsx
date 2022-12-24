import useMediaQuery from "../hooks/useMediaQuery";

import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import { motion } from "framer-motion";

const Landing = ({ setSelectedPage }: any) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreen ? (
          <div
            className="relative z-0 ml-10 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <Image
              src="/assets/profile-image.png"
              width={320}
              height={400}
              alt="Picture of the author"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 h-full max-h-[400px] md:max-h-[600px]"
            />
          </div>
        ) : (
          <Image
            src="/assets/profile-image.png"
            width={320}
            height={400}
            alt="Picture of the author"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>

      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Leads {""}
            <span
              className="xs:relative xs:text-white xs:font-semibold z-20  
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] xs:before:overflow-hidden xs:before:width	"
            >
              Fly
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Our vision is to make a revolutionary impact on Study Abroad Service
            Sector by connecting multiple organisations, recruiters and students
            around the globe.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
