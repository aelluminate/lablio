import React, { useMemo } from "react"
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table"
import { DataTableProps, HeaderConfig } from "@/types/table"

export default function DataTable<T extends object>({ data, headers }: DataTableProps<T>) {
  const columns = useMemo(
    () =>
      headers.map((header) => {
        if (typeof header === "string") {
          return {
            accessorKey: header,
            header: header.charAt(0).toUpperCase() + header.slice(1),
          }
        } else {
          const headerConfig = header as HeaderConfig<T>
          return {
            accessorKey: headerConfig.name,
            header: headerConfig.header
              ? headerConfig.header
              : String(headerConfig.name).charAt(0).toUpperCase() +
                String(headerConfig.name).slice(1),
            cell: headerConfig.cell,
          }
        }
      }),
    [headers],
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className="min-w-full divide-y divide-neutral-700">
      <thead className="bg-neutral-900">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500"
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="divide-y divide-neutral-700 bg-neutral-900">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="whitespace-nowrap px-6 py-4 text-sm text-neutral-500">
                {cell.column.columnDef.cell
                  ? flexRender(cell.column.columnDef.cell, cell.getContext())
                  : flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
