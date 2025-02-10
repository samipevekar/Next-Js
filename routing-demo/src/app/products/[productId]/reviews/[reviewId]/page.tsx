
import { notFound } from "next/navigation"

export default async function Review({params}:{
    params:{productId:string,reviewId:string}
}) {

    const {productId,reviewId} = await params

    if(parseInt(reviewId)>1000){
      return notFound()
    }
  return (
    <div>
      <h1>Review {reviewId} for product {productId}</h1>
    </div>
  )
}
