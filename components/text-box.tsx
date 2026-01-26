"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function TextBox({
    text,
    className,
  ...props
}:{ text?: string, } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(`w-full bg-primary-tp text-center p-5 h-auto`, className)} {...props}>
      {text && <span className={cn("text-m text-roto-blue")}>{text}</span>}
    </div>
  )
}

export { TextBox }
