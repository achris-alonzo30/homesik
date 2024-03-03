"use client";

import { useEffect } from "react"
import { useQuery } from "convex/react";

import { useRouter } from "next/navigation";
import { api } from "@/convex/_generated/api";

import { CreateAccountForm } from "./(forms)/create-account-form";
import { LoadingSpinner } from "@/components/loading-spinner";


const CreateAccountPage = () => {
    const account = useQuery(api.account.getAccount);
    const router = useRouter();

    useEffect(() => {
        if (account?.role === "sellers") {
            router.push(`/s/${account?._id}/dashboard`);
        } else if (account?.role === "buyers") {
            router.push(`/b/${account?._id}`);
        }
    }, [account])

    if (!account) {
        return (
            <div className="flex flex-col mx-auto items-center justify-center py-24">
                <CreateAccountForm />
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center mx-auto pt-45 space-y-2">
            <LoadingSpinner size="icon" />
            <h1 className="text-2xl text-zinc-600 dark:text-zinc-400">Loading...</h1>
        </div>
    )

}

export default CreateAccountPage;