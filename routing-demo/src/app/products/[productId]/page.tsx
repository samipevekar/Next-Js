import Link from "next/link";

export default async function ProductDetails({params}:{
  params: { productId: string };
}) {

    const productId = (await params).productId

  return (
    <div>
      <h1>Details about product {productId}</h1>
      <Link href={`/products/${productId}/reviews`}>Review</Link>
    </div>
  );
}
