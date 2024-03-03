"use client";

import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/clerk-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type UserNavProps = {
    userDetails: {
        name: string;
        email: string | undefined;
        profileImageUrl: string | undefined;
    }
}

export const UserNav = ({ userDetails }: UserNavProps) => {
    const { signOut } = useClerk();
    const router = useRouter();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full transform hover:-translate-y-1 transition duration-400">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={userDetails.profileImageUrl!} alt="Avatar" height="32" width="32" className="object-cover aspect-square rounded-full h-8 w-8" />
                        <AvatarFallback className="bg-primary-color rounded-full animate-pulse"/>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{userDetails.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {userDetails.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Overview</DropdownMenuItem>
                    <DropdownMenuItem>Inquiries</DropdownMenuItem>
                    <DropdownMenuItem>Listings</DropdownMenuItem>
                    <DropdownMenuItem>
                        New Team
                        <DropdownMenuShortcut className="border rounded-full p-1 bg-primary-color text-light-color">coming soon ✨</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <button onClick={() => signOut(() => router.push("/"))}>Sign out</button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

UserNav.Skeleton = function UserNavSkeleton() {
    return (
        <div className="border-b">
            <div className="flex items-center justify-between h-16 px-8 ">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-8 w-8 rounded-full bg-stone-300 dark:bg-stone-500" />
                <div className="flex items-center space-x-6">
                  <Skeleton className="h-8 w-16 rounded-md bg-stone-300 dark:bg-stone-500" />
                  <Skeleton className="h-8 w-16 rounded-md bg-stone-300 dark:bg-stone-500" />
                  <Skeleton className="h-8 w-16 rounded-md bg-stone-300 dark:bg-stone-500" />
                  <Skeleton className="h-8 w-16 rounded-md bg-stone-300 dark:bg-stone-500" />
                </div>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <Skeleton className="h-8 w-8 rounded-full bg-stone-300 dark:bg-stone-500" />
                <Skeleton className="h-8 w-8 rounded-full bg-stone-300 dark:bg-stone-500" />
              </div>
            </div>
          </div>
    )
}