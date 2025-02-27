import Link from "next/link"

export default async function page({params}:{
  params:{productId:string}
}) {

  const reviews:number[] = [1,2,3,4,5]

  const productId = (await params).productId
    
  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map((elt)=>(
        <div key={elt}>
          <Link href={`/products/${productId}/reviews/${elt}`} >{elt}</Link>
        </div>
      ))}
    </div>
  )
}
