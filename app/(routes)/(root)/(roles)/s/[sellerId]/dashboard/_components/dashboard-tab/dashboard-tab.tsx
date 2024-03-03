import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { OverviewMetrics } from "../overview-tab/overview-metrics";
import { ListingViewCount } from "../overview-tab/listing-view-count/listing-view-count";
import { ListingViewChart } from "../overview-tab/listing-view-chart/listing-view-chart";


export const DashboardTab = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="inquiries" >
          Inquiries
        </TabsTrigger>
        <TabsTrigger value="listings" >
          Listings
        </TabsTrigger>
        <TabsTrigger value="settings" >
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <OverviewMetrics />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <ListingViewChart />
          <ListingViewCount />
        </div>
      </TabsContent>
    </Tabs>
  )
}

DashboardTab.Skeleton = function DashboardTabSkeleton() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-8 w-24 rounded-md bg-stone-300 dark:bg-stone-500" />
        <Skeleton className="h-8 w-24 rounded-md bg-stone-300 dark:bg-stone-500" />
        <Skeleton className="h-8 w-24 rounded-md bg-stone-300 dark:bg-stone-500" />
        <Skeleton className="h-8 w-24 rounded-md bg-stone-300 dark:bg-stone-500" />
      </div>
      <div className="flex flex-col lg:flex-row space-x-4 items-center">
        <Skeleton className="h-32 w-1/3 rounded-md bg-stone-300 dark:bg-stone-500" />
        <Skeleton className="h-32 w-1/3 rounded-md bg-stone-300 dark:bg-stone-500" />
        <Skeleton className="h-32 w-1/3 rounded-md bg-stone-300 dark:bg-stone-500" />
      </div>
      <div className="flex flex-col lg:flex-row space-x-4 items-center">
        <Skeleton className="h-96 w-2/3 rounded-md bg-stone-300 dark:bg-stone-500" />
        <Skeleton className="h-96 w-1/3 rounded-md bg-stone-300 dark:bg-stone-500" />
      </div>
    </div>
  )
}