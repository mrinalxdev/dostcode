"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";

const SideBanner = () => {
  const [sideBannerList, setSideBannerList] = useState([]);
  useEffect(() => {
    getSideBanners();
  }, []);

  const getSideBanners = () => {
    GlobalApi.getSideBanner().then((resp) => {
      setSideBannerList(resp.sideBanners);
    });
  };
  return (
    <div className="bg-white w-90% h-full mx-5 rounded-xl">
      <div className="m-5 p-5 text-sm">
        <div className="mb-[2rem] text-[23px]">
            Last Changes
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        {sideBannerList.map((item, index) => (
          <div key={index}>
            
            <ol class="relative border-s border-gray-200 dark:border-gray-700">
              <li class="mb-2 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                <h3 class="text-[15px] font-semibold text-gray-900 dark:text-white">
                  {item.updates}
                </h3>

                <p class="mb-4 text-[13px] font-normal text-gray-500 dark:text-gray-400">
                  {item.updateDetails}
                </p>
              </li>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBanner;
