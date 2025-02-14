import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <h4>Go to home page <Link href={'/'}>Click</Link></h4>
    </div>
  )
}
