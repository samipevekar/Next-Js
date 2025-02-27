import Link from "next/link";

export default function Products() {
  const arr:number[] = [1,2,3,4,5,6,7,8,9]
  return (
    <div>
      <h1>Product List</h1>
      {
        arr.map(elt=>(
          <div key={elt}>
            <Link href={`/products/${elt}`} >{elt}</Link>
          </div>
        ))
      }
    </div>
  )
}
