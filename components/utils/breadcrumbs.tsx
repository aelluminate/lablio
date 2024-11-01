"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Breadcrumbs() {
  const pathname = usePathname()
  const pathnames = pathname.split("/").filter((x: string) => x)

  const generateLabel = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ")
  }

  return (
    <nav className="w-full border-b border-neutral-800 p-2">
      <ol className="flex gap-2 text-sm">
        {pathnames.length === 0 ? (
          <li>
            <Link
              href={"/"}
              className="flex flex-row items-center gap-1 rounded-lg px-2 py-0.5 text-neutral-50 hover:bg-neutral-800"
            >
              <span>Home</span>
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link
                href={"/"}
                className="flex flex-row items-center gap-1 rounded-lg px-2 py-0.5 text-neutral-50 hover:bg-neutral-800"
              >
                <span>Home</span>
              </Link>
            </li>
            {pathnames.map((value: string, index: number) => {
              const href = `/${pathnames.slice(0, index + 1).join("/")}`
              const isLast = index === pathnames.length - 1
              return (
                <li key={href} className="flex items-center gap-4">
                  <span className="text-neutral-50">/</span>
                  {isLast ? (
                    <span className="text-neutral-400">{generateLabel(value)}</span>
                  ) : (
                    <Link href={href}>
                      <div className="text-neutral-400">{generateLabel(value)}</div>
                    </Link>
                  )}
                </li>
              )
            })}
          </>
        )}
      </ol>
    </nav>
  )
}
