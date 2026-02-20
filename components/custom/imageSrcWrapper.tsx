import { isValidUrl } from "@/lib/utils";
import React from "react";

interface ImageSrcWrapperProps {
    overlayText?: string;
    overlayClassName?: string;
    wrapperClassName?: string;
    children?: React.ReactNode;
}

export default function ImageSrcWrapper({
    overlayText,
    overlayClassName,
    wrapperClassName,
    children,
}: ImageSrcWrapperProps) {
    return (
        <div className={`relative inline-block ${wrapperClassName ?? ""}`}>
            {children}

            {overlayText && !isValidUrl(overlayText) ? (
                <span
                    className={
                        `absolute left-2 bottom-2 text-[0.5rem] text-primary/90 p-1 rounded pointer-events-none text-wrap bg-takahe/80` +
                        (overlayClassName ? ` ${overlayClassName}` : "")
                    }
                >
                    {overlayText}
                </span>
            ) : <a href={overlayText} target="_blank"
                className={
                    `absolute left-2 bottom-2 text-[0.5rem] text-kaka-60/90 p-1 hover:underline rounded pointer text-wrap bg-takahe/80` +
                    (overlayClassName ? ` ${overlayClassName}` : "")
                }
            >
                Image Source
            </a>}
        </div>
    );
}
