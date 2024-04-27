import React from "react";
import { menu } from "@/app/constant";

const SideNav = () => {
  return (
    <div className="p-5 bg-white shadow-sm border rounded-sm h-screen">
      <h1 className="font-bold text-[1.8rem] font-mono">
        Dost
        <span className="bg-yellow-300 rounded-tl-[40px] rounded-xl rounded-br-[40px]">
          Code
        </span>
      </h1>

      <hr className="mt-7"/>
      <div className="mt-14">
        {menu.map((item, index) => (
          <div className="flex gap-3 mt-1 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:text-gray-900 ease-linear duration-100">
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
