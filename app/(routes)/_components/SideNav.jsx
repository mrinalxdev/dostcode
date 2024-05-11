"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BadgeIcon, BookOpen, GraduationCap, User } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const SideNav = () => {
  const path = usePathname();
  const { user } = useUser();

  const menu = [
    {
      if: 4,
      name: "Dashboard",
      icon: User,
      path: "/dashboard",
      auth: user,
    },
    {
      id: 1,
      name: "All Projects",
      icon: BookOpen,
      path: "/courses",
      auth: true,
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
      path: "/member",
      auth: true,
    },
    {
      id: 3,
      name: "Contribute",
      icon: GraduationCap,
      path: "/contribute",
      auth: user,
    },
  ];

  return (
    <div className="p-5 bg-white shadow-sm border rounded-sm h-screen">
      <Link href={"/"} className="cursor-pointer">
        <h1 className="font-bold text-[1.8rem] font-mono">
          Dost
          <span className="bg-yellow-300 rounded-tl-[40px] rounded-xl rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-br-[40px] transition-all duration-100">
            Code
          </span>
        </h1>
      </Link>

      <hr className="mt-7" />
      <div className="mt-14">
        {menu.map(
          (item, index) =>
            item.auth && (
              <Link href={item.path}>
                <div
                  className={`flex gap-3 mt-1 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:text-gray-900 ease-linear duration-100 ${
                    path.includes(item.path) &&
                    "bg-yellow-300 text-black font-semibold rounded-xl"
                  }`}
                >
                  <item.icon />
                  <h2>{item.name}</h2>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default SideNav;
