import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });

    if (!token) {
        // Redirect to login page if not authenticated
        const loginUrl = new URL("/auth/signin", request.url);
        loginUrl.searchParams.set("callbackUrl", request.url);
        return NextResponse.redirect(loginUrl);
    }

    // Allow the request to proceed if the user is authenticated
    return NextResponse.next();
}

// Apply middleware only to /dashboard and its subpaths
export const config = {
    matcher: ["/dashboard/:path*"],
};
