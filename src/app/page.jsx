import { settings } from '@/libs/settings'
import Link from 'next/link'
import React from 'react'


const getData = async () => {
  try {
    const res=await fetch(`${settings.url}/api/local/buildings`)
    if(!res.ok) return
    const data=await res.json()
    return data
  } catch (error) {
    console.log('failed to reach api end point')
  }
}


export default async function page() {
  const data=await getData()
  console.log('home',data)
  return (
    <div className='flex flex-wrap w-full h-svh items-center justify-center'>
      {data?.buildingDB?.map(i=>{
        <Link 
          href={`${settings.url}/buildings/${i?._id}`} 
          key={i?._id} 
          className='w-full md:w-40 lg:w-80 h-80 p-2 md:p-4'
        >
          {/* {console.log(i?.buildingTitle)} */}
          <div className='flex w-full h-full items-center justify-centerrounded-lg bg-slate-300 shadow'>
            {i?.buildingTitle}
          </div>
        </Link>
      })}
    </div>
  )
}
