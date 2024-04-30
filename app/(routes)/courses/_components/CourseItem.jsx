import { Book, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

const CourseItem = ({ course }) => {
  return (
    <div className="border rounded-xl hover:shadow-md cursor-pointer">
      <Image
        src={course?.banner.url}
        width={700}
        height={150}
        className="rounded-t-xl"
      />
      <div className="flex flex-col gap-2 p-2">
        <h2 className="font-medium">{course.name}</h2>

        {course?.chapter?.length > 1 ? ( //Logic here : If there are many chapters than add a video explanation to it 
          <div className="flex gap-2">
            <Video />
            <h2 className="text-[14px] text-gray-400">
              Watch video explanation
            </h2>
          </div>
        ) : (
          <div className="flex gap-2">
            <Book />
            <h2 className="text-[14px] text-gray-400">Documentation</h2>
          </div>
        )}

        <h2 className="text-[15px]">{course?.free ? "Free" : "Paid"}</h2>
      </div>
    </div>
  );
};

export default CourseItem;
