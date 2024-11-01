/* Metadata */
import type { Metadata } from "next"

/* Global styles & fonts */
import "../assets/styles/globals.css"
import { lora, lexendDeca } from "@/utils/fonts"

/* Dependencies */
import NextTopLoader from "nextjs-toploader"

/* Site metadata */
import { metadata as SiteMetadata } from "@/config/metadata"
export const metadata: Metadata = SiteMetadata

/* Components */
import { SideNav } from "@/components/sidenav/_index"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={[lora.variable, lexendDeca.variable].join(" ")}>
      <body className="font-lexend-deca bg-neutral-900 font-light text-slate-50 antialiased">
        <NextTopLoader showSpinner={false} color="#eefeff" easing="ease" />
        <div className="flex h-screen">
          <SideNav />
          <div className="relative h-full flex-grow overflow-auto">{children}</div>
        </div>
      </body>
    </html>
  )
}
