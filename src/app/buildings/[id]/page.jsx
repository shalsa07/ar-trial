import { buildingDB } from '@/libs/database'
import React from 'react'
// import ExperienceWrapper from '@/components/experience/ExperienceWrapper'
import { url } from '@/libs/libs'
import dynamic from 'next/dynamic'
import ExperienceUI from '@/components/experience/ExperienceUI'
import { ExperienceContext } from '@/libs/contextProviders/experienceContext'

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
  const data=buildingDB[id]
  // console.log(data,`${url}/${id}`)
  return (
    <div className='flex relative h-svh w-full items-center justify-center overflow-hidden'>
      <ExperienceWrapper data={data}/>
      <ExperienceUI data={data}/>
    </div>
  )
}
