"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardNavbar from "../components/dashboard-navbar";
import Chat from "../components/chat";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex items-center select-none animate-pulse justify-center h-screen text-4xl font-semibold">
        AI ChatBot
      </div>
    );
  }

  if (!session) {
    return router.push("/");
  }

  return (
    <div className="flex flex-col h-screen text-white">
      <div className=" top-0 left-0 w-full z-10">
        <DashboardNavbar />
      </div>
      <div className="flex-1 items-end justify-end">
        <Chat />
      </div>
    </div>
  );
};

export default Dashboard;
