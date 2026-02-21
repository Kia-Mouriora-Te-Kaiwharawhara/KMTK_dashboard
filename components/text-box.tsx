"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function TextBox({
    text,
    children,
    type,
    secondaryText,
    className,
  ...props
}:{ text?: string, type?: string, secondaryText?: string, children?: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
    if (type == null) {
        return (
            <div className={cn(`w-9/10 bg-primary  p-5 h-auto my-3 sm:flex-wrap`, className)} {...props}>
                {text && <span className={cn("text-m text-black")}>{text}</span>}
                {children}
            </div>
        )
    } else if (type == "dark") { 
        return (
            <div
                className={cn(`w-9/10 bg-deep-brown flex-row p-6 h-auto my-3 sm:flex-wrap`, className)} {...props}>
                {secondaryText && <h2 className={cn("text-m text-kowahi-gold font-bold mr-3")}>{secondaryText}</h2>}
                {text && <span className={cn("text-m text-white font-bold")}>{text}</span>}
                {children}
            </div>
        )
    } else if (type == "dark-inline") {
        return (
            <div
                className={cn(` w-auto inline-flex bg-deep-brown flex-row p-6 h-auto my-3 sm:flex-wrap`, className)} {...props}>
                {secondaryText && <h2 className={cn("text-5xl text-kowahi-gold mr-3")}>{secondaryText}</h2>}
                {text && <h2 className={cn("text-5xl text-primary ")}>{text}</h2>}
                {children}
            </div>
        )
    } else if (type == "browns") {
        return (
            <div
                className={cn(`w-fit bg-primary text-left h-auto my-3 p-6 sm:flex-wrap px-10`, className)} {...props}>
                {secondaryText && <h1 className={cn("text-4xl text-left text-deep-brown mr-3")}>{secondaryText}</h1>}
                {text && <span className={cn("text-m text-deep-brown")}>{text}</span>}
                {children}
            </div>
        )
    } else if (type == "blue") {
        return ( 
            <div
                className={cn(`w-fit text-left h-auto my-3 p-6 sm:flex-wrap`, className)} {...props}>
                {secondaryText && <h1 className={cn("text-3xl text-center text-nav-blue font-sans mr-3")}>{secondaryText}</h1>}
                {text && <span className={cn("text-m text-black")}>{text}</span>}
                {children}
            </div>
        )
    }
}

export { TextBox }
