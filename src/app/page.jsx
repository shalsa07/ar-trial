import LandingPageCarousel from '@/components/LandingPageCarousel'
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
      <LandingPageCarousel/>
    </div>
  )
}
