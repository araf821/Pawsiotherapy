import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/dashboard", "/feature-animal/"],
};

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}
