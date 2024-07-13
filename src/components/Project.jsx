import React, { useRef, useState } from "react";

const Project = () => {
  const vise = useRef();
  const [isVise, setIsVice] = useState(false);

  const handleVise = () => {
    if (vise) {
      setIsVice(!isVise);
    }
  };
  console.log(isVise);
  return (
    <div>
      <div className="w-full h-full px-20 py-20">
        <h2 className="text-6xl">Featured projects</h2>

        <div className="border-[1px] mt-10 border-zinc-800"></div>
        <div className="grid grid-cols-2 gap-10 my-20">
          <div>
            <div className="flex items-center gap-2 p-2">
              <div className="flex gap-10 bg-white rounded-full size-4"></div>
              <h2>FYDE</h2>
            </div>
            <div className="w-full h-[80vh] bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')] bg-red-500"></div>
          </div>
          <div ref={vise}>
            <div className="flex items-center gap-2 p-2">
              <div className="flex gap-10 bg-white rounded-full size-4"></div>
              <h2>VISE</h2>
            </div>
            <div className="bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')] w-full h-[80vh] bg-red-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
