import { ReactNode } from "react"

export interface TooltipProps {
  content: string
  placement?: "top" | "right" | "bottom" | "left"
  children: ReactNode
  offset?: number
}
