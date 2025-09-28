
import React from 'react'
import { buildingDB } from '@/libs/database'
import LinkCard from '@/components/LinkCard'

export default function page() {
  const filteredBuildings=buildingDB
  return (
    <div className='flex bg-slate-300- flex-wrap h-screen w-full overflow-hidden px-10'>
      <div className='flex flex-wrap mt-14 w-full h-10/12 overflow-y-auto overflow-hidden'>
        {filteredBuildings?.map((project, index) =>
          <div 
            className='p-2 h-[460px] w-full md:w-1/3 lg:w-1/4'
            key={index} 
          >
            <LinkCard 
              project={project} 
              index={index} 
            />
          </div>
        )}
      </div>
    </div>
  )
}
