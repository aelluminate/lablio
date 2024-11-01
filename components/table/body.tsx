import { cn } from "@/utils/cn"

export default function TableBody(
  props: React.HTMLAttributes<HTMLTableSectionElement>,
  ref: React.Ref<HTMLTableSectionElement>,
) {
  return (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", props.className)} {...props} />
  )
}
