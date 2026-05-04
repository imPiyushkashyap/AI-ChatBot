import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const DashboardNavbar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4  border-b bg-background px-4">
      <div className="ml-auto flex items-center gap-4">
        <ModeToggle />
      </div>
    </header>
  );
};

export default DashboardNavbar;
