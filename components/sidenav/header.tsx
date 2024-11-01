import Link from "next/link"
import Image from "next/image"

export default function SideNavHeader() {
  return (
    <div className="flex w-full justify-center text-neutral-50">
      <Link href={"/"} className="flex items-center">
        <Image
          src={"/images/icon.png"}
          width={100}
          height={100}
          alt="icon"
          className="h-10 w-10 rounded-md"
        />
      </Link>
    </div>
  )
}
