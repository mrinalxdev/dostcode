import React from "react";

const WelcomeBannerDash = ({ user }) => {
  return (
    <div className="flex gap-5 items-center bg-white p-5 rounded-md">
      <div>
        <h2 className="text-[2rem] font-bold">Welcome Back, {user?.fullName}</h2>
        <h2 className="text-gray-400">
          Its nice to see you building some epic projects !
        </h2>
      </div>
    </div>
  );
};

export default WelcomeBannerDash;
