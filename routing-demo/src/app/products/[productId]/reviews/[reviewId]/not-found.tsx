"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname()

  const productId = pathName.split("/")[2]
  const reviewId = pathName.split("/")[4]

  console.log(productId,reviewId)
  return (
    <div>
      <h2>Review {reviewId} Not Found for product {productId}</h2>
      <h4>Go to home <Link href={'/'}>Click</Link></h4>
    </div>
  )
}
