
import Link from 'next/link'
import React from 'react'

export default function page() {
  const list=[0,1,2,3]
  return (
    <div className='flex flex-wrap h-svh w-full gap-4 p-10 overflow-y-auto overflow-hidden'>
      {list?.map(i=>
          <div key={i} className='flex min-w-1/2 h-1/3 items-center justify-center'>
              <Link href={`buildings/${i}`} className='flex rounded-lg bg-gray-200 shadow h-full items-center justify-center p-5'>
                {i}
              </Link>
          </div>
        )
      }
    </div>
  )
}
