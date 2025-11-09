import React from "react"
import { Linkedin, Instagram } from "lucide-react"
import { socialLinks } from "~/modules/common/data/footerData"

const icons = {
  linkedin: Linkedin,
  instagram: Instagram,
}

export function SocialLinks() {
  if (socialLinks.length === 0) {
    return (
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-foreground">
          Stay Connected
        </h4>
        <p className="text-sm text-foreground/80">
          Social channels coming soon.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h4 className="text-lg font-semibold mb-3 text-foreground">
        Follow On
      </h4>
      <div className="flex gap-4 text-foreground">
        {socialLinks.map((link) => {
          const Icon = icons[link.icon as keyof typeof icons]
          if (!Icon) return null
          return (
            <a
              key={link.icon}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 ring-ring transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
