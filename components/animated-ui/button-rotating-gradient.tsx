import Link from "next/link";
import { Button } from "@/components/ui/button";

type ButtonRotatingGradientProps = {
    label: string;
    isButton?: boolean;
    route?: string;
}

export const ButtonRotatingGradient = ({ label, isButton, route }: ButtonRotatingGradientProps) => {
    if (!route) return null;
    
    if (isButton) {
        return (
            <Button className='relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-1 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-stone-50 transform hover:-translate-y-1 transition duration-400'>
                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#2266cc_50%,#818cf8_100%)]' />
                <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-6 py-1 bg-white dark:bg-[#1e1e1e] dark:text-white text-sm font-medium backdrop-blur-3xl'>
                    {label}
                </span>
            </Button>
        )
    } else {
        return (
            <Link href={route} className='relative inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-1 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-stone-50 transform hover:-translate-y-1 transition duration-400'>
                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#2266cc_50%,#818cf8_100%)]' />
                <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-6 py-1 bg-white dark:bg-[#1e1e1e] dark:text-white text-base font-normal backdrop-blur-3xl'>
                    {label}
                </span>
            </Link>
        )
    }
}