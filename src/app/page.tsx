import React from "react";
import TypewriterEffect from "./components/typewriter";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <TypewriterEffect />
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48"></section>
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex  item-center justify-center flex-col items-center  gap-4 md:h-24 md:flex-row">
          <p className="text-center item-center justify-center text-sm leading-loose text-muted-foreground md:text-left">
            Made with ❤️ by Piyush Kashyap
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
