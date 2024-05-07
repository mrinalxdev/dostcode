"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import CourseDesc from "../../course-preview/[courseId]/_components/CourseDesc";
import CourseContent from "../../course-preview/[courseId]/_components/CourseContent";
import { toast } from "sonner";

const WatchCourse = ({ params }) => {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState([]);
  const [completedCourse, setCompletedCourse] = useState([]);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  useEffect(() => {
    params && user && getUserEnrollCourseDetail();
  }, [params && user]);
  const getUserEnrollCourseDetail = () => {
    GlobalApi.getUserEnrolledCourseDetails(
      params.enrollId,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      setCompletedCourse(resp.userEnrollCourses[0].completedCourse);
      setCourseInfo(resp.userEnrollCourses[0].courseList);
    });
  };

  // Saving the id
  const onChapterComplete = (chapterId) => {
    GlobalApi.markChapterCompleted(params.enrollId, chapterId).then((resp) => {
      console.log(resp);
      if (resp) {
        toast("Chapter Marked as Completed");
        getUserEnrollCourseDetail();
      }
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
              setChapterCompleted={(chapterId) => onChapterComplete(chapterId)}
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
                completedCourse={completedCourse}
              />
            </>
          </div>
        </div>
      </div>
    )
  );
};

export default WatchCourse;
