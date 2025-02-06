import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

// Define paths that require authentication
const protectedPaths = ['/dashboard', '/dashboard/', '/dashboard/*'];

export async function middleware(request: NextRequest) {
    // Only run this middleware for protected paths
    if (!protectedPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
        return NextResponse.next();
    };

    const token = await getToken({ req: request, secret });

    if (!token) {
        // Redirect to login page if not authenticated
        const loginUrl = new URL('/api/auth/signin', request.url);
        loginUrl.searchParams.set('callbackUrl', request.url);
        return NextResponse.redirect(loginUrl);
    }

    // Allow the request to proceed if the user is authenticated
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
};