import Link from "next/link"
/* Dependencies */
import { Link2 } from "lucide-react"

export default async function CollectionPage() {
  return (
    <main className="w-full flex-grow p-4">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <div className="flex flex-col items-start">
          <h1 className="font-lora text-3xl">Your Collections</h1>
          <p className="text-xs text-neutral-500">
            A collection is a group of repositories that you can manage together.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href={"/collection/" + "campus"}
            className="flex w-full flex-col items-start gap-2 rounded-lg border border-neutral-800 p-4 hover:border-neutral-500"
          >
            <div className="flex flex-col items-start">
              <h1 className="font-lora text-xl">campus</h1>
              <div className="flex flex-row items-center gap-2 text-neutral-500">
                <Link2 className="h-4 w-4" />
                <p className="text-xs">github.com/aelluminate/campus</p>
              </div>
            </div>
            <div className="text-sm text-neutral-500">
              Campus is a dynamic, student-focused organization dedicated to shaping the next
              generation of computer engineers through collaboration between students and university
              professors.
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export const metadata = {
  title: "Collection",
}
