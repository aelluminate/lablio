"use client"

import Link from "next/link"
import { ToolTip } from "../utils/_index"
import { usePathname } from "next/navigation"
import * as LucideIcons from "lucide-react"
import { SideNavItemProps } from "@/types/menu"

export default function SideNavItem({ href, icon, label }: SideNavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcons.LucideIcon

  return (
    <li className="flex w-full">
      <ToolTip content={label} placement="right" offset={5}>
        <Link
          href={href}
          className={`w-full rounded-lg border p-2 transition-all duration-300 ease-in-out hover:border hover:border-neutral-700 hover:bg-neutral-800/75 ${isActive ? "border border-neutral-700 bg-neutral-800/75" : "border-transparent"}`}
        >
          <Icon className={`h-5 w-5 ${isActive ? "text-neutral-50" : ""}`} strokeWidth={1} />
        </Link>
      </ToolTip>
    </li>
  )
}
