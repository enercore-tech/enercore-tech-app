import React from "react"
import { brandInfo } from "~/modules/common/data/footerData"

export function BrandBlock() {
  return (
    <div className="space-y-4 flex flex-col items-start">
      <h4 className="text-lg font-semibold text-foreground">
        {brandInfo.title}
      </h4>

      <p className="text-sm text-foreground/80 max-w-sm leading-relaxed">
        {brandInfo.description}
      </p>
    </div>
  )
}
