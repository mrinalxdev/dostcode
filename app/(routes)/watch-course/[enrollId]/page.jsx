"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import CourseDesc from "../../course-preview/[courseId]/_components/CourseDesc";
import CourseContent from "../../course-preview/[courseId]/_components/CourseContent";

const WatchCourse = ({ params }) => {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState([]);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  useEffect(() => {
    params && user && getUserEnrollCourseDetail();
  }, [params && user]);
  const getUserEnrollCourseDetail = () => {
    GlobalApi.getUserEnrolledCourseDetails(
      params.enrollId,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      setCourseInfo(resp.userEnrollCourses[0].courseList);
    });
  };
  return (
    courseInfo.name && (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
          {/* Title, Video, Description  */}
          <div className="col-span-2 bg-white p-3">
            <CourseDesc
              courseInfo={courseInfo}
              activeChapterIndex={activeChapterIndex}
              watchMode={true}
            />
          </div>

          {/* Course COntent */}
          <div>
            <>
              <CourseContent
                courseInfo={courseInfo}
                isUserAlreadyEnrolled={true}
                watchMode={true}
                setActiveChapterIndex={(index) => setActiveChapterIndex(index)}
              />
            </>
          </div>
        </div>
      </div>
    )
  );
};

export default WatchCourse;
