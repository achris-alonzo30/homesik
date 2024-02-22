import Image from "next/image"

export const Logo = ({ withText }: { withText?: boolean; }) => {
    return (
        <div className="flex items-center gap-x-2">
            <Image src="/logo.svg" alt="logo" width="32" height="32" />
            {withText && (
                <h1 className="font-semibold text-2xl">homesik</h1>
            )}
        </div>
    )
}