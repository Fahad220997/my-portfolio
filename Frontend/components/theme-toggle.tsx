"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      case "system":
        return <Monitor className="h-4 w-4" />
      default:
        return <Sun className="h-4 w-4" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Switch to dark mode"
      case "dark":
        return "Switch to system theme"
      case "system":
        return "Switch to light mode"
      default:
        return "Toggle theme"
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
      aria-label={getLabel()}
    >
      <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm"></div>
      <div className="relative z-10 transition-transform duration-300 hover:rotate-12">
        {getIcon()}
      </div>
    </Button>
  )
} 