"use client";
import { Lock, Play } from "lucide-react";
import { comment } from "postcss";
import React, { useState } from "react";

const CourseContent = ({
  courseInfo,
  isUserAlreadyEnrolled,
  watchMode = false,
  setActiveChapterIndex,
  completedCourse,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const checkIsChapterCompleted = (chapterId) => {
    if (typeof completedCourse == "undefined") {
      console.log(completedCourse)
    } else {
      return [completedCourse].find(item => item.chapterId == chapterId)
    }
  };

  if (!courseInfo || !courseInfo.chapter) {
    return <div>Loading ....</div>;
  }
  return (
    <div className="w-[80%] mx-auto bg-white rounded-xl m-3 p-5">
      <h2>Content</h2>

      {courseInfo.chapter.map((item, index) => (
        <div key={index}>
          <h2
            className={`p-2 text-[14px] flex justify-between items-center border rounded-sm px-3 m-2 cursor-pointer hover:shadow-xl ease-linear transition-all duration-100 ${activeIndex === index && "bg-black text-white"
              }
            ${isUserAlreadyEnrolled && "hover:bg-black hover:text-white"}
            ${watchMode && checkIsChapterCompleted(item.id) && "border-green-800 bg-green-100 text-black"
              }`}
            onClick={() => {
              watchMode && setActiveChapterIndex(index);
              watchMode && setActiveIndex(index);
            }}
          >
            {index + 1}. {item.name}{" "}
            {activeIndex === index || isUserAlreadyEnrolled ? (
              <Play className="h-4 w-4" />
            ) : (
              <Lock className="h-4 w-4" />
            )}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
