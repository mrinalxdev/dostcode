import { Button } from "@/components/ui/button";
import React from "react";

const CourseEnroll = () => {
  const membersip = false;
  return (
    <div className="text-center p-3 rounded-sm bg-white flex flex-col gap-3">
      <h2 className="text-[22px] font-bold">Enroll to the course </h2>

      {membersip ? (
        <div className="flex flex-col gap-3">
          <h2>Start building projects to boost up resume !</h2>
          <Button variant="outline">Let's Go !</Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <h2>Get Access to all the courses !</h2>
          <Button variant="outline">Buy Membership !</Button>
        </div>
      )}
    </div>
  );
};

export default CourseEnroll;
