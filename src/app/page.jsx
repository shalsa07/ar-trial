import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-full h-svh'>
      page
      <Link href={'/buildings'}>buildings</Link>
    </div>
  )
}
