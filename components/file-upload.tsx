"use client";

import "@uploadthing/react/styles.css";
import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";

import Image from "next/image";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"

type FileUploadProps = {
    onChange: (url?: string) => void;
    endpoint: keyof typeof ourFileRouter;
    value: string;
}

export const FileUpload = ({ onChange, endpoint, value }: FileUploadProps) => {
    const { toast } = useToast();
    const fileType = value?.split(".").pop();

    if (value && fileType && endpoint === "profileImageUrl") {
        return (
            <div className="relative h-20 w-20" >
                <Image
                    src={value}
                    fill
                    alt="Upload"
                    className="rounded-full object-cover h-20 w-20"
                />
                <button type="button" className="bg-danger-color text-light-color p-1 rounded-full absolute top-0 right-0 shadow-sm" onClick={() => onChange("")}>
                    <X className="h-4 w-4" />
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center gap-y-2">

            <UploadDropzone
                endpoint={endpoint}
                onClientUploadComplete={(res) => { onChange(res?.[0].url) }}
                onUploadError={(error: Error) => {
                    toast({
                        title: "Error",
                        description: error.message,
                        variant: "destructive",
                    })
                }}
            />
            <Label className="text-sm font-medium text-muted-foreground">
                To uploading multiple files you can select then drag and drop the files here.
            </Label>
        </div>
    )
}