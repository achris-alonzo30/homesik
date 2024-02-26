"use client";

import { formType } from "./buyerTypes";

import { InfoCircledIcon } from "@radix-ui/react-icons";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileUpload } from "@/components/file-upload";

type BasicInformationFormProps = {
    form: formType;
}

export const BasicInformationForm = ({ form }: BasicInformationFormProps) => {
    return (
        <div className="space-y-1 px-2">
            <Label className="text-xl font-bold text-stone-700 dark:text-stone-300 ">Basic Information</Label>
            <p className="text-sm text-muted-foreground font-normal">Please provide your basic information so we can find the best property that is suited for your need. </p>
            <p className="flex items-center gap-x-2 text-[10px] border-0 p-1 rounded-md bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-500">
                <InfoCircledIcon className="w-4 h-4" />
                You can always make changes or update later in your profile.
            </p>
            <div className="space-y-2 pt-10">
                <FormField
                    control={form.control}
                    name="profileImageUrl"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-center mx-auto">
                            <FormLabel className="font-semibold">Profile Picture</FormLabel>
                            <FormControl>
                                <FileUpload endpoint="profileImageUrl" value={field.value} onChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="fName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold">First Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Elon" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Musk" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold">Email Address</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="elon.musk@tesla.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}