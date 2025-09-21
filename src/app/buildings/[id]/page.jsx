import { buildingDB } from '@/libs/database'
import React from 'react'
// import ExperienceWrapper from '@/components/experience/ExperienceWrapper'
import { url } from '@/libs/libs'
import dynamic from 'next/dynamic'
import ExperienceContextProvider from '@/libs/contextProviders/experienceContext'

const ExperienceWorld = dynamic(() => import('@/components/experience/ExperienceWorld'))

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
    <ExperienceContextProvider>
      <ExperienceWorld data={data}/>
    </ExperienceContextProvider>
  )
}
