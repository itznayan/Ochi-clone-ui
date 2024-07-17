import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".01"
      data-scroll-section
      className=" w-full rounded-t-3xl py-10 bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          className="text-[15vw] leading-none uppercase mb-5 pr-20 font-bold"
        >
          We Are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          className="text-[15vw] leading-none uppercase mb-5 pr-20 font-bold"
        >
          We Are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
