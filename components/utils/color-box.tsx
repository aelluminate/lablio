/* Types */
import { ColorBoxProps } from "@/types/utils"

export default function ColorBox({ color }: ColorBoxProps) {
  return (
    <div style={{ backgroundColor: color, width: "20px", height: "20px", borderRadius: "4px" }} />
  )
}
