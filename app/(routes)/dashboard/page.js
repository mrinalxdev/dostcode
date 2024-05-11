"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import WelcomeBannerDash from "./_components/WelcomeBannerDash";
import SideBanner from "../courses/_components/SideBanner";
import InProgressCourseList from "./_components/InProgressCourseList";
import GlobalApi from "@/app/_utils/GlobalApi";

const Dashboard = () => {
  const { user } = useUser();
  const [userEnrolledCourses, setUserEnrolledcourses] = useState([]);

  useEffect(() => {
    user && getUserAllEnrolledCourseList();
  }, [user]);

  const getUserAllEnrolledCourseList = () => {
    GlobalApi.getUserAllEnrolledCourseList(
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      console.log(resp);
      setUserEnrolledcourses(resp.userEnrollCourses);
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5">
      <div className="col-span-3">
        <WelcomeBannerDash user={user} />

        <InProgressCourseList userEnrolledCourses={userEnrolledCourses} />
      </div>
      <div>
        <SideBanner />
      </div>
    </div>
  );
};

export default Dashboard;
