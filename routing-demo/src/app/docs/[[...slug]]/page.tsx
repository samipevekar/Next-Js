import Link from "next/link";

export default async function Doc({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {

  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <>
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
      <Link href={'/docs'}>docs</Link>
      </>
    );
  } else if (slug?.length === 1) {
    const con:number[] = [1,2,3,4,5]
    return (
      <>
        <h1>Viewing docs for feature {slug[0]}</h1>
        <h2>concepts</h2>
        
        {con.map(con=>{
          return (
            <div key={con}>
              <Link  href={`/docs/${slug[0]}/${con}`}>{con}</Link>
            </div>

          )
        })}
      </>
    )

  }

  const arr:number[] = [1,2,3,4,5]
  return (
    <>
      <h1>Docs home page</h1>
      {arr.map(elt=>
        <div key={elt}>
         <Link  href={`/docs/${elt}`}>{elt}</Link>
        </div>
      )}
    </>
    
  )
}