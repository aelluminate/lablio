import { cn } from "@/utils/cn"

export default function TableFooter(
  props: React.HTMLAttributes<HTMLTableSectionElement>,
  ref: React.Ref<HTMLTableSectionElement>,
) {
  return (
    <tfoot
      ref={ref}
      className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", props.className)}
      {...props}
    />
  )
}
