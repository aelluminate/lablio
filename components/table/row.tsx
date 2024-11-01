import { cn } from "@/utils/cn"

export default function TableRow(
  props: React.HTMLAttributes<HTMLTableRowElement>,
  ref: React.Ref<HTMLTableRowElement>,
) {
  return (
    <tr
      ref={ref}
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        props.className,
      )}
      {...props}
    />
  )
}
