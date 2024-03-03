"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useConvexAuth } from "convex/react"
import { useScrollTop } from "@/hooks/use-scroll-top";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ModeToggle } from "@/components/theme-toggle";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  if (isLoading) {
    return (
      <div className="z-50 fixed top-0 flex items-center w-full h-12">
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-8 w-8 rounded-full bg-stone-300 dark:bg-stone-500" />
          <Skeleton className="h-8 w-24 rounded-md bg-stone-300 dark:bg-stone-500" />
        </div>
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-4">
          <Skeleton className="h-8 w-16 rounded-md bg-stone-300 dark:bg-stone-500" />
          <Skeleton className="h-8 w-16 rounded-md bg-stone-300 dark:bg-stone-500" />
          <Skeleton className="h-8 w-8 rounded-full bg-stone-300 dark:bg-stone-500" />
        </div>
      </div>
    )
  } else {
    return (
      <div className={cn("z-50 fixed top-0 bg-light-color dark:bg-dark-color flex items-center w-full h-14 px-4 sm:px-12", scrolled && "border-b shadow-lg")}>
        <Logo withText />
        <div className="ml-auto justify-end w-full flex items-center gap-x-4">
          {!isAuthenticated ? (
            <>
              <SignInButton mode="modal">
                <button className="px-5 py-2 text-sm text-light-color rounded-full bg-primary-color hover:bg-primary-color/90 transform hover:-translate-y-1 transition duration-400" >Sign In</button>
              </SignInButton>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" className="transform hover:-translate-y-1 transition duration-400" asChild>
                <Link href="/create-account">
                  Start Exploring
                </Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    )
  }
}

