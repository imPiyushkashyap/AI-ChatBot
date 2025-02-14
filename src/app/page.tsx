"use client";
import React from "react";
import TypewriterEffect from "./components/typewriter";
import RotatingText from "@/components/ui/rotatingText";
import Link from "next/link";
import HeroNavbar from "./components/hero-navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className=" top-0 left-0 w-full z-10">
        <HeroNavbar />
      </div>
      <main className="flex-1">
        <TypewriterEffect />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mx-6">
            Tech Stack
          </h1>
          <div className="flex my-10">
            <RotatingText
              texts={[
                "NextJS",
                "GROQ",
                "Typescript",
                "TailwindCSS",
                "Llama 3.3 70B",
                "Supabase",
                "Langchain",
                "Prisma",
                "ShadCN UI",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black text-4xl font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl "
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </main>

      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex  item-center justify-center flex-col items-center  gap-4 md:h-24 md:flex-row">
          <p className="text-center item-center justify-center text-sm leading-loose text-muted-foreground md:text-left">
            Made with ❤️ by
            <Link
              className="underline mx-2"
              href="https://github.com/imPiyushkashyap"
            >
              This Dude
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
