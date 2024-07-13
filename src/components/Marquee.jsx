import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div className="w-full rounded-t-3xl py-10 bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap">
        <h1 className="text-[15vw] leading-none uppercase mb-5 font-bold">
          We Are ochi
        </h1>
        <h1 className="text-[15vw] leading-none uppercase mb-5 font-bold">
          We Are ochi
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
