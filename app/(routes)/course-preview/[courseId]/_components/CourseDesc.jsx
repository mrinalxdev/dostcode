import { Button } from "@/components/ui/button";
import React from "react";
import Markdown from "react-markdown";

const CourseDesc = ({
  courseInfo,
  activeChapterIndex,
  watchMode = false,
  setChapterCompleted,
}) => {
  if (!courseInfo) {
    return <div>No Course Info here</div>;
  }
  return (
    <div>
      <h2 className="text-[2rem] font-semibold">{courseInfo.name}</h2>
      <h2 className="text-sm text-gray-500">Mentor @{courseInfo.author}</h2>

      <div className="m-4">
        <h2 className="mt-5 text-[17px] font-semibold">
          {watchMode ? (
            <span className="flex justify-between items-center">
              {courseInfo?.chapter[activeChapterIndex]?.name}
              <Button
                variant="outline"
                onClick={() =>
                  setChapterCompleted(
                    courseInfo?.chapter[activeChapterIndex]?.id
                  )
                }
              >
                Mark Complete
              </Button>
            </span>
          ) : (
            <span>New Learning begins</span>
          )}
        </h2>
        {watchMode ? (
          <Markdown className="text-[15px] font-light mt-2 leading-8">
            {courseInfo?.chapter[activeChapterIndex]?.code}
          </Markdown>
        ) : (
          <Markdown className="text-[15px] font-light mt-2 leading-8">
            {courseInfo.description}
          </Markdown>
        )}
      </div>
    </div>
  );
};

export default CourseDesc;
