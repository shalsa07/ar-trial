import { buildingDB } from '@/libs/database'
import React from 'react'
// import ExperienceWrapper from '@/components/experience/ExperienceWrapper'
import { url } from '@/libs/libs'
import dynamic from 'next/dynamic'

const ExperienceWrapper=dynamic(() => import('@/components/experience/ExperienceWrapper'))

async function getData(id) {
  const res = await fetch(`${url}/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function page({params}) {
  const {id}=await params
  // const data=getData(id)÷
  const data=buildingDB[0]
  // console.log(data,`${url}/${id}`)
  return (
    <div className='flex h-svh w-full items-center justify-center overflow-hidden'>
      <div className='flex capitalize items-center justify-center absolute top-10 mx-auto cursor-pointer z-20'>
        enter ar
      </div>
      <ExperienceWrapper data={data}/>
    </div>
  )
}
