import { ReactNode } from "react"
import { CellContext } from "@tanstack/react-table"

export interface DataTableProps<T extends object> {
  data: T[]
  headers: Array<keyof T | HeaderConfig<T>>
}

export interface CollectionTableItem {
  id: number
  name: string

  description: string
  color: string
}

export interface HeaderConfig<T> {
  name: keyof T
  class?: string
  header?: string
  cell?: (context: CellContext<T, unknown>) => ReactNode
}

export interface ColumnMeta {
  className?: string
}

export interface ContentProps {
  color: string
}
