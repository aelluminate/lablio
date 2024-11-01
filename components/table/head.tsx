import { cn } from "@/utils/cn"

export default function TableHead(
  props: React.ThHTMLAttributes<HTMLTableCellElement>,
  ref: React.Ref<HTMLTableCellElement>,
) {
  return (
    <th
      ref={ref}
      className={cn(
        "text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        props.className,
      )}
      {...props}
    />
  )
}
