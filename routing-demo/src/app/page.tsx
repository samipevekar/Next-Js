import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link className="underline text-purple-900 " style={{display:"block"}} href={'/products'}>Products</Link>
      <Link className="underline text-purple-900" style={{display:"block"}} href={'/about'}>About</Link>
      <Link className="underline text-purple-900" style={{display:"block"}} href={'/docs'}>Docs</Link>
      <Link className="underline text-purple-900" href={'/blog'}>Blog</Link>
    </div>
  )
}
