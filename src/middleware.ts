import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";


// const loggedInRoutes = ["/dashboard"];
// const loggedOutRoutes = ["/login", "/register"];

export const config = {
  matcher: [
      '/((?!_next/static|favicon.ico|login|$).*)',
  ]
}

export default async function AuthMiddleware(
  req: NextRequest
): Promise<NextResponse> {
    const myCookie = cookies();    
    const c = myCookie.get('ticket_management_is_user_logged_in')    
    if(c?.value || req.url.includes('login')) {
        return NextResponse.next();
    }    
    const url = process.env.NEXT_PUBLIC_BACKEND_URL || ''
    return NextResponse.redirect(url + '/login');
}