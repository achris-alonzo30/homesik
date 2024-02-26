

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority"
const spinnerVariants = cva(
    "text-primary-color animate-spin",
    {
        variants: {
            size: {
                default: "w-4 h-4",
                sm: "w-2 h-2",
                lg: "w-6 h-6",
                icon: "h-10 w-10",
            }
        },
        defaultVariants: {
            size: "default"
        }
    }
)

type LoadingSpinnerProps = {
    size: VariantProps<typeof spinnerVariants>["size"];
}

export const LoadingSpinner = ({size}: LoadingSpinnerProps) => {
  return (
    <div className="items-center">
        <Loader className={cn(spinnerVariants({size}))} />
    </div>
  )
}
