"use client";

// importing necessary functions
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChromeIcon, GitlabIcon } from "lucide-react";

const Login = () => {
  // extracting data from usesession as session
  const { data: session } = useSession();
  const router = useRouter();

  // checking if sessions exists
  if (session) {
    // navigate to dashboard if logged in
    router.push("/dashboard");
    return null; // ensure the component returns null, not void
  }

  // rendering components for not logged in users
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
        <CardDescription>
          Sign in to your account using your preferred method.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          variant="outline"
          onClick={() => signIn("google")}
          className="flex w-full items-center justify-center gap-2 rounded-md border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          <ChromeIcon className="h-5 w-5" />
          Sign in with Google
        </Button>
        <Button
          variant="outline"
          onClick={() => signIn("github")}
          className="flex w-full items-center justify-center gap-2 rounded-md border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          <GitlabIcon className="h-5 w-5" />
          Sign in with GitHub
        </Button>
      </CardContent>
    </Card>
  );
};

export default Login;
