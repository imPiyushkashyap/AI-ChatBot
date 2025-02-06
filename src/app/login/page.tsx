"use client";

// importing necessary functions
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import LoginPage from "@/components/component/login-component";

const Login = () => {
  // extracting data from usesession as session
  const { data: session, status } = useSession();
  const router = useRouter();

  // checking if sessions exists
  if (session) {
    // navigate to dashboard if logged in
    router.push("/dashboard");
    return null; // ensure the component returns null, not void
  }

  // rendering components for not logged in users
  return <LoginPage />;
};

export default Login;
