import { cn } from "@/utils/cn"

export default function TableCaption(
  props: React.HTMLAttributes<HTMLTableCaptionElement>,
  ref: React.Ref<HTMLTableCaptionElement>,
) {
  return (
    <caption
      ref={ref}
      className={cn("text-muted-foreground mt-4 text-sm", props.className)}
      {...props}
    />
  )
}
