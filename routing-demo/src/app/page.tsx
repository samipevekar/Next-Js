import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link className="bg-red-600 p-2 " style={{display:"block"}} href={'/products'}>Products</Link>
      <Link className="bg-red-600 p-2" style={{display:"block"}} href={'/about'}>About</Link>
      <Link className="bg-red-600 p-2" style={{display:"block"}} href={'/docs'}>Docs</Link>
      <Link className="bg-red-600 p-2" href={'/blog'}>Blog</Link>
    </div>
  )
}
