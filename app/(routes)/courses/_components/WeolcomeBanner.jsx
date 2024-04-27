import React from "react";

const WeolcomeBanner = () => {
  return (
    <div className="flex gap-5 items-center bg-white p-5 rounded-md">
      <div>
        <h2 className="text-[2rem] font-bold">
          Welcome to{" "}
          <span className="bg-yellow-300 rounded-tl-[100px] rounded-br-[100px]">
            DostCode
          </span>
        </h2>
        <h2 className="text-gray-400">Explore, Learn and build all real life projects</h2>
      </div>
    </div>
  );
};

export default WeolcomeBanner;
