import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { RecentSales } from "./recent-sales";

export const ListingViewCount = () => {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Listing View Count</CardTitle>
                <CardDescription>
                    {/* Update how many new views */}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <RecentSales />
            </CardContent>
        </Card>
    )
}