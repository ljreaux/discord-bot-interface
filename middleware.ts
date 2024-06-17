import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
const { orgId = "" } = process.env;

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);
const isAdminRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
    if (!isAdminRoute(request)) {
      auth().protect(() => {
        return auth().orgId === orgId && auth().orgRole === "org:admin";
      });
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
