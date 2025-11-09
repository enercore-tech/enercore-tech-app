import React from "react"
import { headerData } from "~/modules/common/data/headerData"

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span
      className={`text-lg sm:text-xl font-semibold tracking-tight text-foreground ${className ?? ""}`}
    >
      {headerData.logoText}
    </span>
  )
}