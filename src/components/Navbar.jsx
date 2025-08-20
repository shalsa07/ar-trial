import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex absolute top-0 mx-auto px-10 justify-between w-full h-16 items-center'>
      <Link href={'/'}>luyari.</Link>
      <div><Link className='capitalize text-sm font-bold' href={'/buildings'}>builings</Link></div>
    </nav>
  )
}
