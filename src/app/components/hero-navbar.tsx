import React from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

const HeroNavbar = () => {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4  border-b bg-background px-4">
      <div className="ml-auto flex items-center gap-4">
        <ModeToggle />
        {session ? (
          <Link href="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default HeroNavbar;
