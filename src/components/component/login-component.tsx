import React from "react";
import { Button } from "@/components/ui/button";
import { ChromeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // checking if sessions exists
  if (session) {
    // navigate to dashboard if logged in
    router.push("/dashboard");
    return null; // ensure the component returns null, not void
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Login
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              Sign in to your account to continue.
            </p>
          </div>
          <div className="space-y-4">
            <Button
              onClick={() => signIn("google")}
              variant="outline"
              className="w-full py-2 sm:py-3"
            >
              <ChromeIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Sign in with Google</span>
            </Button>
            <Button
              onClick={() => signIn("github")}
              variant="outline"
              className="w-full py-2 sm:py-3"
            >
              <GitHubLogoIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Sign in with Github</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
