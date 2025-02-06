"use client";
import React from "react";
import { useSession } from "next-auth/react";
import DashboardLayout from "../components/dashboard-layout";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    //if user sign out the thow user to home page
    return (
      //loding state will show LOGO
      <div className="flex items-center justify-center h-screen text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold">
        RentWell
      </div>
    );
  }

  if (!session) {
    // Redirect to sign-in page if no session is found
    // You might need to use useRouter for redirection
    return router.push("/");
  }

  return (
    <div className="flex">
      <DashboardLayout />
    </div>
  );
};

export default Dashboard;
