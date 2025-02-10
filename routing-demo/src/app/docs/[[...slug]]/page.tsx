import Link from "next/link"

export default async function page({params}:{
    params:{slug:string[]}
}) {

  const arr:number[] = [1,2,3,4,5]

    const {slug} = await params


  return (
    <div>
      <h1>Concept</h1>    
      {slug.length==2 && <h1>Viewing docs for feature {slug[0]} and concept {slug[1]} </h1> }
      {slug.length==1 && <h1>Viewsing docs for feature {slug[0]}  </h1> }
      {arr.map(elt=>(
        <div key={elt}>
          <Link href={`/docs/${slug[0]}/${elt}`}>concept {elt}</Link>
        </div>
      ))}

    </div>
  )
}
