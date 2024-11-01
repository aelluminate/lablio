import { cn } from "@/utils/cn"

export default function Table(
  props: React.HTMLAttributes<HTMLTableElement>,
  ref: React.Ref<HTMLTableElement>,
) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", props.className)}
        {...props}
      />
    </div>
  )
}
