import { cn } from "@/utils/cn"

export default function TableHeader(
  props: React.HTMLAttributes<HTMLTableSectionElement>,
  ref: React.Ref<HTMLTableSectionElement>,
) {
  return <thead ref={ref} className={cn("[&_tr]:border-b", props.className)} {...props} />
}
