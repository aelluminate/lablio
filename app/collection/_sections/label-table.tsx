"use client"
import React from "react"
/* Components */
import { DataTable, Content } from "@/components/table/_index"
/* Types */
import { CollectionTableItem, HeaderConfig } from "@/types/table"

export default function LabelTable() {
  const data = React.useMemo<CollectionTableItem[]>(
    () => [
      { id: 1, name: "Item 1", description: "Description 1", color: "#FF4545" },
      { id: 2, name: "Item 2", description: "Description 2", color: "#33FF57" },
      { id: 3, name: "Item 3", description: "Description 3", color: "#3357FF" },
    ],
    [],
  )

  const headers: Array<keyof CollectionTableItem | HeaderConfig<CollectionTableItem>> = [
    "id",
    "name",
    "description",
    {
      name: "color",
      header: "Color (Hex Code)",
      cell: ({ row }) => <Content color={row.original.color} />,
    },
  ]

  return <DataTable data={data} headers={headers} />
}
