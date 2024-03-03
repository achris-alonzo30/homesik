import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";
import { ListingViewChartOverview } from "./listing-view-chart-overview"

export const ListingViewChart = () => {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Listing View Trend</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
                <ListingViewChartOverview />
            </CardContent>
        </Card>
    )
}