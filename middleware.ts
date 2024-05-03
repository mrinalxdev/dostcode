import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isPublicRoute = createRouteMatcher(['/', '/courses', '/course-preview/(.*)'])

export default clerkMiddleware((auth, request) => {
  if(!isPublicRoute(request)){
    auth().protect()
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
