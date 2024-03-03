import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDateRangePicker } from "./date-range-picker";

export const DashboardHeader = () => {
    return (
        <div className="flex items-center justify-between space-y-2">
            <h2 className="text-4xl font-bold tracking-tight">
                Dashboard
            </h2>
            <div className="flex items-center space-x-2">
                <Button className="bg-primary-color hover:bg-primary-color/90 rounded-md text-light-color transform hover:-translate-y-1 transition duration-400">Create New Listing</Button>
            </div>
        </div>
    )
}

DashboardHeader.Skeleton = function DashboardHeaderSkeleton() {
    return (
        <div className="flex items-center justify-between space-y-2">
            <Skeleton className="w-40 h-10 rounded-md bg-stone-300 dark:bg-stone-500" />
            <div className="flex items-center space-x-2">
                <Skeleton className="w-40 h-10 rounded-md bg-stone-300 dark:bg-stone-500" />
                <Skeleton className="w-40 h-10 rounded-md bg-stone-300 dark:bg-stone-500" />
            </div>
        </div>
    )
}