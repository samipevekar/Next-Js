import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='absolute z-10 text-white w-full'>
      <nav className="container flex items-center justify-between mx-auto h-14">
        <Link href={'/'} className="font-bold text-xl">Home</Link>
        <div className="flex gap-2">
          <Link href={'/performance'}  >Performance</Link>
          <Link href={'/reliability'}>Reliability</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
