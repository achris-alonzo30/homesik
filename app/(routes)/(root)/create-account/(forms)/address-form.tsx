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
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AddressFormProps = {
    form: formType;
}

export const AddressForm = ({ form }: AddressFormProps) => {
    return (
        <div className="space-y-1 px-2">
            <Label className="text-xl font-bold text-stone-700 dark:text-stone-300 ">Address</Label>
            <p className="text-sm text-muted-foreground font-normal">Providing your address details ensures a smoother and more personalized experience within the app.</p>
            <p className="flex items-center gap-x-2 text-[10px] border-0 p-1 rounded-md bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-500">
                <InfoCircledIcon className="w-4 h-4" />
                You can always make changes or update later in your profile.
            </p>
            <div className="space-y-2 pt-10">
            <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="font-semibold">Address</FormLabel>
                        <FormControl>
                            <Input placeholder="123 Main St, New York, NY 10001" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="font-semibold">Country</FormLabel>
                        <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={""}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your country" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Canada" className="flex flex-row items-center gap-x-2">🇨🇦 Canada</SelectItem>
                                    <SelectItem value="United States" className="flex flex-row items-center gap-x-2">🇺🇸 United States</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input placeholder="New York" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="font-semibold">ZIP/Postal Code</FormLabel>
                        <FormControl>
                            <Input placeholder="10001" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            </div>
        </div>
    )
}