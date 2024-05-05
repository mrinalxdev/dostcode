"use client";
import { toast } from "sonner"
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const CourseEnroll = ({ courseInfo }) => {
  if (!courseInfo) {
    console.log("No user info");
  } else {
    console.log("There is user");
  }
  const membership = false;
  const { user } = useUser();
  const router = useRouter();

  const courseEnroll = () => {
    // console.log("Course Enrolled")

    GlobalApi.enrollToCourse(
      courseInfo?.slug,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      console.log(resp);
      if (resp) {
        //Toast
        // console.log("There is response");
        toast("Succesfully Logged In", {
          description : "User Enrolled"
        })

        //Redirection

        router.push("/watch-course/" + resp.createUserEnrollCourse.id);
      }
    });
  };
  return (
    <div className="text-center p-3 rounded-sm bg-white flex flex-col gap-3">
      <h2 className="text-[22px] font-bold">Enroll to the course </h2>

      {user && (membership || courseInfo?.free) ? (
        <div className="flex flex-col gap-3">
          <h2>Start building projects to boost up resume !</h2>
          <Button variant="outline" onClick={() => courseEnroll()}>
            Let's Go !
          </Button>
        </div>
      ) : !user ? (
        <div className="flex flex-col gap-3">
          <h2>Login to amazing projects for your resume !</h2>
          <Link href={"/sign-in"}>
            <Button variant="outline">Let's Go !</Button>
          </Link>
        </div>
      ) : !membership ? (
        <div className="flex flex-col gap-3">
          <h2>Get Access to all the courses !</h2>
          <Button variant="outline">Buy Membership !</Button>
        </div>
      ) : (
        <Button variant="outline">Login</Button>
      )}
    </div>
  );
};

export default CourseEnroll;
