import Link from "next/link"

export default function page() {

    const arr:number[] = [1,2,3,4,5]

  return (
    <div>
      <h1>Docs home pgage</h1>
      <h2>Features</h2>
      {arr.map(elt=>(
        <div key={elt}>
            <Link href={`/docs/${elt}`}>Feature {elt}</Link>
        </div>
      ))}
    </div>
  )
}
