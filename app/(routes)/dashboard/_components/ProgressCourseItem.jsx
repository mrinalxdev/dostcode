import Image from "next/image";
import React from "react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const ProgressCourseItem = ({ course }) => {
  return (
    <Link href={"/course-preview/"+course.courseList.slug}>
      <div className="border rounded-xl hover:shadow-md cursor-pointer">
        <Image
          src={course?.courseList?.banner?.url}
          width={770}
          height={350}
          className="rounded-t-xl"
        />
        <div className="flex flex-col gap-2 p-2">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">{course.courseList.name}</h2>
            <h2 className="text-[15px] bg-yellow-300 p-2 rounded-2xl">
              {course?.courseList?.free ? "Free" : "Paid"}
            </h2>
          </div>
          <h2 className="text-[12px] text-gray-400">
            Mentor @{course?.courseList?.author}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ProgressCourseItem;
