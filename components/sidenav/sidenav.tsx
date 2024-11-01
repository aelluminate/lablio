/* JSON */
import sideNavMenu from "../../data/menu.json"
/* Dependencies */
import * as LucideIcons from "lucide-react"
/* Components */
import { SideNavItem, SideNavHeader } from "@/components/sidenav/_index"
/* Types */
import { SideNavMenuType, SideNavItemType } from "@/types/menu"

export default function Sidenav() {
  const typedSideNavMenu: SideNavMenuType = sideNavMenu.menu.sideNav
  const sections: string[] = Object.keys(typedSideNavMenu)

  return (
    <div className="relative z-50 hidden h-full w-fit flex-shrink-0 flex-col gap-4 border-r border-neutral-800 bg-neutral-900 p-2 font-light text-slate-500 md:flex lg:flex">
      <SideNavHeader />
      <div className="flex flex-grow flex-col items-center">
        {sections.map((section, index) => (
          <div key={section} className="w-full">
            {index > 0 && <hr className="border-0.5 mb-4 w-full border-neutral-800/50" />}
            <ul className="flex w-full flex-col gap-2">
              {typedSideNavMenu[section].map((item: SideNavItemType) => {
                return (
                  <SideNavItem
                    key={item.label}
                    href={item.url}
                    icon={item.icon as keyof typeof LucideIcons}
                    label={item.label}
                  />
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
