
export default function layout({children}:{
    children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <h2>Featured Product</h2>
    </div>
  )
}
