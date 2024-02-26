"use client";

import Image from "next/image";
import { formType } from "./buyerTypes";


import { InfoCircledIcon } from "@radix-ui/react-icons";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type ChooseRoleFormProps = {
    form: formType;
}


export const ChooseRoleForm = ({ form }: ChooseRoleFormProps) => {
    return (
        <div className="space-y-1 px-2">
            <Label className="text-xl font-bold text-stone-700 dark:text-stone-300">Buyer | Seller | Renter</Label>
            <p className="text-sm text-muted-foreground font-normal">Choose a role that fits you the best.</p>
            <p className="flex items-center gap-x-2 text-[10px] border-0 p-1 rounded-md bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-500">
                <InfoCircledIcon className="w-4 h-4" />
                Please choose your role carefully, as changing it won&apos;t be possible once you&apos;ve opted for the role.
            </p>
            <div className="space-y-2 pt-10">
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            {field.value && (
                                <Image src={`/${field.value}.jpg`} alt={field.value} width={"400"} height={"400"} className="object-contain aspect-square rounded-md flex mx-auto" />
                            )}
                            <FormLabel>Choose your role</FormLabel>
                            <Select onValueChange={field.onChange} >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your role" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="buyers">Buyer</SelectItem>
                                    <SelectItem value="sellers">Seller</SelectItem>
                                    <SelectItem value="renters">Renter</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}

