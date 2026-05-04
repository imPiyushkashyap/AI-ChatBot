import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Link from "next/link";

const HeroNavbar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4  border-b bg-background px-4">
      <div className="ml-auto flex items-center gap-4">
        <Link href="https://github.com/imPiyushkashyap/AI-ChatBot">
          <GitHubLogoIcon className="size-6" />
        </Link>

        <ModeToggle />
        <Link href="/dashboard">
          <Button>Get Started</Button>
        </Link>
      </div>
    </header>
  );
};

export default HeroNavbar;
