"use client";
import React from "react";
import TypewriterEffect from "./components/typewriter";
import RotatingText from "@/components/ui/rotatingText";
import DashboardNavbar from "./components/dashboard-navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className=" top-0 left-0 w-full z-10">
        <DashboardNavbar />
      </div>
      <main className="flex-1">
        <TypewriterEffect />
        <div className="flex flex-row items-center justify-center h-screen">
          <h1 className="text-6xl font-bold mx-6">Tech Stack</h1>
          <RotatingText
            texts={[
              "NextJS",
              "GROQ",
              "Typescript",
              "TailwindCSS",
              "Llama 3.3 70B",
              "Supabase",
              "Langchain",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black text-4xl font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
      </main>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-12">
            Our Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Next.js",
                description:
                  "React framework for building fast and scalable web applications.",
              },
              {
                name: "LangChain",
                description:
                  "Framework for developing applications powered by language models.",
              },
              {
                name: "Vercel AI SDK",
                description:
                  "Toolkit for building AI-powered applications with React and Next.js.",
              },
              {
                name: "TypeScript",
                description:
                  "Typed superset of JavaScript that compiles to plain JavaScript.",
              },
              {
                name: "Tailwind CSS",
                description:
                  "Utility-first CSS framework for rapid UI development.",
              },
              {
                name: "Vercel",
                description:
                  "Cloud platform for static sites and serverless functions.",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
              >
                Image
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex  item-center justify-center flex-col items-center  gap-4 md:h-24 md:flex-row">
          <p className="text-center item-center justify-center text-sm leading-loose text-muted-foreground md:text-left">
            Made with ❤️ by {"This Dude"}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
