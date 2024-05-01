"use client";

import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import Link from "next/link";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);
  // fetching the list
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      setCourseList(resp?.courseLists);
    });
  };
  return (
    <div className="p-5 bg-white rounded-lg mt-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-sans font-bold text-primary">
          All Courses
        </h2>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Courses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Language Specefic</SelectItem>
            <SelectItem value="system">Frontend Specefic</SelectItem>
            <SelectItem value="system">Backend Specefic</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="m-4 grid grid-cols-2 lg:grid-cols-3 gap-4">
        {courseList?.length > 0
          ? courseList.map((item, index) => (
              <Link href={"/course-preview/" + item.slug}>
                <div key={index}>
                  <CourseItem course={item} />
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              <div
                key={index}
                className="w-full h-[240px] rounded-xl bg-white m-6 animate-pulse"
              ></div>;
            })}
      </div>
    </div>
  );
};

export default CourseList;
