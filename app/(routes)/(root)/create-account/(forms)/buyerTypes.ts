import * as z from "zod";
import { UseFormReturn } from "react-hook-form";


export const formSchema = z.object({
  role: z.string(),
  fName: z
    .string()
    .min(1, { message: "Must be at least 1 character" })
    .max(50, { message: "Must be 50 characters or less" }),
  lName: z
    .string()
    .min(1, { message: "Must be at least 1 character" })
    .max(50, { message: "Must be 50 characters or less" }),
  email: z.string().min(1, { message: "Must be at least 1 character" }).email({ message: "Must be a valid email" }),
  profileImageUrl: z.string(),
  address: z.string().min(1, { message: "Must be at least 1 character" }),
  city: z.string().min(1, { message: "Must be at least 1 character" }),
  country: z.string().min(1, { message: "Must be at least 1 character" }),
  zip: z.string().min(5, { message: "Must be at least 5 character" }).max(10, { message: "Must be 10 characters or less" }),
});

export type formType = UseFormReturn<
  {
    role: string;
    fName: string;
    lName: string;
    email: string;
    profileImageUrl: string;
    address: string;
    city: string;
    country: string;
    zip: string;
  },
  any,
  {
    role: string;
    fName: string;
    lName: string;
    email: string;
    profileImageUrl: string;
    address: string;
    city: string;
    country: string;
    zip: string;
  }
>;
