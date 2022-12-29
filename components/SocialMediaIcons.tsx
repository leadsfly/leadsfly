import React from "react";
import Image from "next/image";

function SocialMediaIcons() {
  return (
    <div className="flex justify-between    gap-10 mt-3	  text-2xl text-deep-blue">
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/assets/linkedin.png"
          alt="Picture of the author"
          width={32}
          height={32}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/assets/twitter.png"
          alt="Picture of the author"
          width={32}
          height={32}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/assets/facebook.png"
          alt="Picture of the author"
          width={32}
          height={32}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/assets/instagram.png"
          alt="Picture of the author"
          width={32}
          height={32}
        />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
