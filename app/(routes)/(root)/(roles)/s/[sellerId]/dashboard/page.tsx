"use client";

import { redirect } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { useConvexAuth, useQuery } from "convex/react";

import { Logo } from "@/components/logo";
import { UserNav } from "./_components/user-nav";
import { Skeleton } from "@/components/ui/skeleton";
import { ModeToggle } from "@/components/theme-toggle";
import { Footer } from "@/app/(routes)/(marketing)/_components/footer";
import { DashboardTab } from "./_components/dashboard-tab/dashboard-tab";
import { DashboardHeader } from "./_components/dashboard-tab/dashboard-header";

const DashboardPage = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  const user = useQuery(api.account.getAccount);
  const userDetails = {
    name: user?.userInformation?.fName + " " + user?.userInformation?.lName,
    email: user?.userInformation?.email,
    profileImageUrl: user?.userInformation?.profileImageUrl,
  }!

  setTimeout(() => {
    if (!isAuthenticated) redirect("/")
  }, 1000)

  if (isLoading) {
    return (
      <>
        <div className="flex flex-col bg-light-color dark:bg-dark-color h-full">
          <UserNav.Skeleton />
          <div className="flex-1 space-y-4 p-8 pt-6">
            <DashboardHeader.Skeleton />
            <DashboardTab.Skeleton />
          </div>
          <Footer.Skeleton />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col bg-light-color dark:bg-dark-color h-full">
          <div className="border-b">
            <div className="flex h-16 items-center px-8">
              <Logo withText/>
              <div className="ml-auto flex items-center space-x-4">
                <UserNav userDetails={userDetails} />
                <ModeToggle />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <DashboardHeader />
            <DashboardTab />
          </div>
          <Footer />
        </div>
      </>
    )
  }



}

export default DashboardPage;
