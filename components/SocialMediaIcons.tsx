import React from "react";
import Image from "next/image";

function SocialMediaIcons() {
  return (
    <div className="flex justify-between    gap-10 mt-3	  text-2xl text-deep-blue">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/FlyLeads?t=pG0wGmFUBPKGRCHlzP70Mw&s=09"
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
        href="https://www.facebook.com/profile.php?id=100084452387841"
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
        href="https://instagram.com/leadsflystudyabroad?igshid=YWJhMjlhZTc="
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
