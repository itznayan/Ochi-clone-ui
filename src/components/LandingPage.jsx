import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
const LandingPage = () => {
  return (
    <div className="w-full h-screen pt-1 bg-zinc-900">
      <div className="px-20 textstructure mt-52">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => (
          <div
            data-scroll
            data-scroll-speed={".008" * index}
            key={index}
            className="masker"
          >
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div
                  initial={{
                    width: 0,
                    height: "8vh",
                    marginRight: 0,
                  }}
                  animate={{
                    width: [0, 100],
                    height: "8vh",
                    marginRight: 10,
                  }}
                  transition={{ duration: 0.9, type: "spring" }}
                  className=" bg-red-600 rounded-md"
                ></motion.div>
              )}
              <div className="uppercase text-[5vw] leading-[6vw] tracking-[-0.5vw] font-['Verdana'] font-bold">
                {item}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-24"></div>

      <div className="flex justify-between px-20 py-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div className="flex gap-4  ">
          <div className=" flex gap-4 duration-300 justify-center items-center peer hover:bg-white hover:text-black border-[1px] group border-black px-4 rounded-full ">
            Start the project
          </div>
          <div className="border-[1px] flex duration-300 justify-center items-center rounded-full p-2 peer-hover:text-black peer-hover:bg-white border-black ">
            <IoMdArrowBack className="scale-150 rotate-[140deg]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
