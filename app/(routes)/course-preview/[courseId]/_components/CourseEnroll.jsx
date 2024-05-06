"use client";
import { toast } from "sonner";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CourseEnroll = ({ courseInfo, isUserAlreadyEnrolled }) => {
  const membership = true;
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log("User Already Enrolled", isUserAlreadyEnrolled);
  }, []);

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
          description: "User Enrolled",
        });

        //Redirection

        router.push("/watch-course/" + resp.createUserEnrollCourse.id);
      }
    });
  };
  return (
    <div className="text-center p-3 rounded-sm bg-white flex flex-col gap-3">
      <h2 className="text-[22px] font-bold">Enroll to the course </h2>

      {user && (membership || courseInfo?.free) && !isUserAlreadyEnrolled ? (
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
      ) : !isUserAlreadyEnrolled ? (
        <div className="flex flex-col gap-3">
          <h2>Login to amazing projects for your resume !</h2>
          <Link href={"/sign-in"}>
            <Button variant="outline">Let's Go !</Button>
          </Link>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          <h2>Continue building your project</h2>
          <Link href={"/watch-course/" + isUserAlreadyEnrolled}>
            <Button variant="outline">Continue</Button>
          </Link>
        </div>
      )}

      {/* {isUserAlreadyEnrolled && (
        <div className="mt-4 flex flex-col gap-3">
          <h1 className="text-[25px] font-bold">Already Enrolled ?</h1>
          <h2>Continue building your project</h2>
          <Link href={"/watch-course/" + isUserAlreadyEnrolled}>
            <Button variant="outline">Continue</Button>
          </Link>
        </div>
      )} */}
    </div>
  );
};
``;
export default CourseEnroll;
