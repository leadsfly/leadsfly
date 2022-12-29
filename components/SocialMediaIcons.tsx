import React from "react";
import Image from "next/image";

import FB from "/public/assets/icons8-facebook.svg";
import TW from "/public/assets/icons8-twitter.svg";
import IN from "/public/assets/icons8-instagram.svg";

function SocialMediaIcons() {
  return (
    <div className="flex justify-between    gap-10 mt-3	  text-2xl text-deep-blue">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/FlyLeads?t=pG0wGmFUBPKGRCHlzP70Mw&s=09"
        target="_blank"
        rel="noreferrer"
      >
        <TW alt="Picture of the author" width={48} height={48} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/profile.php?id=100084452387841"
        target="_blank"
        rel="noreferrer"
      >
        <FB alt="Picture of the author" width={48} height={48} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com/leadsflystudyabroad?igshid=YWJhMjlhZTc="
        target="_blank"
        rel="noreferrer"
      >
        <IN alt="Picture of the author" width={48} height={48} />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
