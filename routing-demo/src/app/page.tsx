import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link className="underline text-purple-900 " style={{display:"block"}} href={'/products'}>Products</Link>
      <Link className="underline text-purple-900" style={{display:"block"}} href={'/about'}>About</Link>
      <Link className="underline text-purple-900" style={{display:"block"}} href={'/docs'}>Docs</Link>
      <Link className="underline text-purple-900" href={'/blog'}>Blog</Link>
      <Link href={"/articles/breaking-news-123?lang=en"}>Read in English</Link>
      <Link href={"/articles/breaking-news-123?lang=fr"}>Read in French</Link>
    </div>
  )
}
