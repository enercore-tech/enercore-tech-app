"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@radix-ui/themes"
// import { Button } from "~/components/ui/button"
import { ctaSection } from "../data/tiers"
import { CheckCircle2 } from "lucide-react"


export function CTASection() {
  return (
    <section
      id="cta"
      className="w-full bg-background py-20 border-t border-border scroll-mt-16"
    >
      <div className="container px-4 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">{ctaSection.heading}</h2>
        <p className="text-muted-foreground mb-12">{ctaSection.subheading}</p>

        <div className="border border-border rounded-2xl p-8 bg-muted/20 shadow-sm text-left">
          <ul className="space-y-4 text-sm text-muted-foreground mb-8">
            {ctaSection.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {ctaSection.ctaHref ? (
            <div className="flex justify-center">
              <Button asChild variant="solid" size="3">
                <Link href={ctaSection.ctaHref}>{ctaSection.ctaLabel}</Link>
              </Button>
            </div>
          ) : (
            <div className="flex justify-center">
              <Button size="3" variant="solid" disabled>
                {ctaSection.ctaLabel} (Coming Soon)
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
