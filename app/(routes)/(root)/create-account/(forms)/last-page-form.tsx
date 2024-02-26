"use client";

import Link from "next/link";

import { CheckCircleIcon } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type LastPageFormProps = {
    userRole: string;
    accountId: string;
}

export const LastPageForm = ({ userRole, accountId }: LastPageFormProps) => {
    let link;
    if (userRole === "buyers" || userRole === "renters") {
        link = <Link href={`/b/${accountId}`}>🚀 Let&apos;s Get Started! 🚀</Link>;
    } else if (userRole === "sellers") {
        link = <Link href={`/s/${accountId}`}>🚀 Let&apos;s Get Started! 🚀</Link>;
    }
    return (
        <div className="space-y-4 px-2">
            <div className="flex flex-col space-y-2 items-center mx-auto justify-center">
                <CheckCircleIcon className="h-40 w-40 text-emerald-500" />
                <Label className="text-lg sm:text-xl font-semibold pb-4">Thank you for taking the time to create your account 😊</Label>
                <Button className="w-full rounded-full bg-primary-color hover:bg-primary-color/90 transform hover:-translate-y-1 transition duration-400" asChild>
                    {link}
                </Button>
            </div>
        </div>
    )
}