import useMediaQuery from "../hooks/useMediaQuery";

import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";

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
      <div className="z-30 basis-2/5 mt-12 md:mt-32"></div>
    </section>
  );
};

export default Landing;
