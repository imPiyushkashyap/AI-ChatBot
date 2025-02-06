import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fadeIn">
                    Modern Way To Find Rooms and PGs
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fadeIn animation-delay-300">
                    Discover comfortable and affordable accommodations tailored
                    to your needs. Simplify your search for the perfect living
                    space with Rentwell.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fadeIn animation-delay-600">
                  <Link
                    href="/login"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/rentwell.jpg"
                  alt="Rentwell accommodations"
                  className="rounded-lg shadow-lg"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Made with ❤️ by Piyush
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Home;
