/* Types */
import { ContentProps } from "@/types/table"

export default function Content({ color }: ContentProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="rounded-md p-2" style={{ backgroundColor: color }}></div>
      <span>{color}</span>
    </div>
  )
}
