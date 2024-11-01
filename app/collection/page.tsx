import { LabelTable } from "./_sections/_index"

export default function CollectionPage() {
  return (
    <main className="w-full flex-grow p-4">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <LabelTable />
      </div>
    </main>
  )
}

export const metadata = {
  title: "Collection",
}
