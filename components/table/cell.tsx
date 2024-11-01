/* Utility Function */
import { cn } from "@/utils/cn"
/* Types */
import { TableCellProps } from "@/types/table"

export default function TableCell(
  { isWrap = true, ...props }: TableCellProps,
  ref: React.Ref<HTMLTableCellElement>,
) {
  return (
    <td
      ref={ref}
      className={cn(
        "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        { "whitespace-normal": isWrap },
        props.className,
      )}
      {...props}
    />
  )
}
