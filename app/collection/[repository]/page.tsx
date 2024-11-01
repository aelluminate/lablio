/* Dependencies */
import { Link2 } from "lucide-react"
/* Component */
import { DataTableDemo } from "../ex-data-table"

export default async function RepositoryPage() {
  return (
    <main className="w-full flex-grow p-4">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-col items-start gap-1">
            <h1 className="font-lora text-xl font-medium">Example</h1>
            <div className="flex flex-row items-center gap-2 text-xs text-neutral-500">
              <Link2 className="h-4 w-4" />
              <span>github.com/aelluminate/campus</span>
            </div>
          </div>
          <DataTableDemo />
        </div>
      </div>
    </main>
  )
}

export const metadata = {
  title: "Collection",
}
