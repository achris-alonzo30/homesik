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
      <div className="z-50 fixed top-0 flex items-center w-full p-6">
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
      <div className={cn("z-50 fixed top-0 bg-light-color dark:bg-dark-color flex items-center w-full py-6 px-12", scrolled && "border-b shadow-lg")}>
        <Logo withText/>
        <div className="ml-auto justify-end w-full flex items-center gap-x-4">
          {!isAuthenticated ? (
            <>
              <SignInButton mode="modal">
                <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-1 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-stone-50 transform hover:-translate-y-1 transition duration-400'>
                  <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#2266cc_50%,#818cf8_100%)]' />
                  <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-6 py-1 bg-white dark:bg-[#1e1e1e] dark:text-white text-sm font-medium backdrop-blur-3xl'>
                    Sign In
                  </span>
                </button>
              </SignInButton>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" className="transform hover:-translate-y-1 transition duration-400" asChild>
                <Link href="/create-account">
                  Start Moving
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

