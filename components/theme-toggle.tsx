"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const buttonClass =
  "h-11 w-11 rounded-full text-muted-foreground hover:bg-muted/60 hover:text-foreground"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Same footprint before hydration so the nav does not shift.
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={buttonClass} disabled>
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const isLight = resolvedTheme === "light"
  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light")
  }

  return (
    <Button variant="ghost" size="icon" className={buttonClass} onClick={toggleTheme}>
      {isLight ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      <span className="sr-only">{isLight ? "Switch to dark theme" : "Switch to light theme"}</span>
    </Button>
  )
}
