import React from "react";
import Image from "next/image";

import FB from "/public/assets/icons8-facebook.svg";
import TW from "/public/assets/icons8-twitter.svg";
import IN from "/public/assets/icons8-instagram.svg";
import { motion } from "framer-motion";

function SocialMediaIcons() {
  return (
    <motion.div className="flex justify-between    gap-10 mt-3	  text-2xl text-deep-blue">
      <motion.a
        initial={{ rotate: 360 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 1 }}
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/FlyLeads?t=pG0wGmFUBPKGRCHlzP70Mw&s=09"
        target="_blank"
        rel="noreferrer"
      >
        <TW alt="Picture of the author" width={48} height={48} />
      </motion.a>
      <motion.a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/profile.php?id=100084452387841"
        target="_blank"
        rel="noreferrer"
        initial={{ rotate: 360 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 1 }}
      >
        <FB alt="Picture of the author" width={48} height={48} />
      </motion.a>
      <motion.a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com/leadsflystudyabroad?igshid=YWJhMjlhZTc="
        target="_blank"
        rel="noreferrer"
        initial={{ rotate: 360 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 1 }}
      >
        <IN alt="Picture of the author" width={48} height={48} />
      </motion.a>
    </motion.div>
  );
}

export default SocialMediaIcons;
