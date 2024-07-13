import React from "react";

const About = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-speed=".95"
        className="w-full  p-20 text-[#212121] font-['verdana'] text-[3vw] leading-[4vw] rounded-t-3xl bg-[#CDEA68]"
      >
        <h1 className="w-[80vw]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h1>
        <div className="border-t-2 flex mt-10 py-10 justify-between text-[#212121] px-24  text-base border-[#B3CC5D]">
          <div>What you can expect:</div>
          <div>
            <div>
              <p className="w-[23vw] leading-2">
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.
              </p>
              <p className="mt-20 w-[23vw] leading-2">
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </p>
            </div>
          </div>
          <div className="mt-48 mb-14">
            S: <br />
            <br /> Instagram <br /> Behance
            <br /> Facebook
            <br /> Linkedin
          </div>
        </div>
        <div
          className="border-t-[1px] max-w-full
         border-black"
        ></div>
        <div
          data-scroll
          data-scroll-speed=".4"
          className="max-sm:flex-col flex justify-between px-0 py-10 "
        >
          <div className="w-1/2">
            <h1>Our approach:</h1>
            <button className="uppercase flex items-center mt-4 justify-between gap-6  bg-zinc-900 text-white text-sm px-8  py-5 rounded-full">
              Read More
              <div className="size-2 rounded-full bg-white"></div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh] ">
            <img
              className="rounded-3xl"
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
