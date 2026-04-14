'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-foreground text-primary-foreground">
      <div className="container-custom flex items-center justify-center py-2.5 text-sm tracking-wide">
        <p>🕯️ Free shipping on orders over €50 &nbsp;·&nbsp; Use code <strong>GLOW10</strong> for 10% off your first order</p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
