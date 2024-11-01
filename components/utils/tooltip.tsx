import { Tooltip as NextUITooltip } from "@nextui-org/tooltip"
import { TooltipProps } from "@/types/tooltip"

export default function Tooltip({ content, placement, children, offset }: TooltipProps) {
  return (
    <NextUITooltip
      content={content}
      placement={placement}
      classNames={{
        content: "text-slate-50 bg-neutral-800 px-2 py-1 rounded-md text-xs",
      }}
      delay={100}
      closeDelay={100}
      offset={offset}
    >
      {children}
    </NextUITooltip>
  )
}
