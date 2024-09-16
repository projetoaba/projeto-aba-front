import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const loggedInRoutes = ["/dashboard"];
const loggedOutRoutes = ["/login", "/register"];


export default async function AuthMiddleware(
  req: NextRequest
): Promise<NextResponse> {
    const myCookie = cookies();
    const {value} = myCookie.get('ticket_management_is_user_logged_in')
    if(value) {
        return NextResponse.next();
    }

    redirect("/login");
}