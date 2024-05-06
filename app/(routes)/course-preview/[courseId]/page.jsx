"use client";
import React, { useEffect, useState } from "react";
import CourseDesc from "./_components/CourseDesc";
import GlobalApi from "@/app/_utils/GlobalApi";
import CourseEnroll from "./_components/CourseEnroll";
import CourseContent from "./_components/CourseContent";
import { useUser } from "@clerk/nextjs";

const CoursePreview = ({ params }) => {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState();
  const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState();

  useEffect(() => {
    params && getCourseInfoById();
  }, [params]);

  useEffect(() => {
    courseInfo && user && checkUserEnrolledToCourse();
  }, [courseInfo, user]);

  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params?.courseId).then((resp) => {
      setCourseInfo(resp?.courseList);
    });
  };
  const checkUserEnrolledToCourse = () => {
    GlobalApi.checkUserEnrolledToCourse(
      courseInfo.slug,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      if (resp?.userEnrollCourses) {
        console.log(resp);
        setIsUserAlreadyEnrolled(resp?.userEnrollCourses[0]?.id);
      }
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      {/* Title, Video, Description  */}
      <div className="col-span-2 bg-white p-3">
        <CourseDesc courseInfo={courseInfo} />
      </div>

      {/* Course COntent */}
      <div>
        <>
          <CourseEnroll
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          />
          <CourseContent
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          />
        </>
      </div>
    </div>
  );
};

export default CoursePreview;
