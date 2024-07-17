import { motion, useAnimation } from "framer-motion";
import React, { useRef, useState } from "react";

const Project = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleLeave = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div>
      <div className="w-full h-full px-20 py-20">
        <h2 className="text-6xl">Featured projects</h2>

        <div className="border-[1px] mt-10 border-zinc-800"></div>
        <div className="relative grid grid-cols-2 gap-10 my-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onMouseLeave={() => handleLeave(0)}
          >
            <div className=" flex items-center gap-2 p-2">
              <div className="cardContainer flex gap-10 bg-white rounded-full size-4"></div>
              <h2>FYDE</h2>
              <h1 className=" absolute flex overflow-hidden -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 text-[#EC6234] font-bold text-7xl">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: "backInOut", delay: 0.1 * index }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
            <div className="w-full h-[80vh] bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')] bg-red-500"></div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onMouseLeave={() => handleLeave(1)}
          >
            <div className="  flex items-center gap-2 p-2">
              <div className="cardContainer relative flex gap-10 bg-white rounded-full size-4"></div>
              <h2>VISE</h2>
              <h1 className=" absolute flex overflow-hidden -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 text-[#EC6234] font-bold text-7xl">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: "backInOut", delay: 0.1 * index }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
            <div className="bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')] w-full h-[80vh] bg-red-500"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
