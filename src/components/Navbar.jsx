'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import RollOverStateWrapper from './RollOverStateWrapper'
import { settings } from '@/libs/settings'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links=['home',,'about us','projects','services','contacts']
  return (
    <nav className='flex text-white absolute top-0 mx-auto z-50 justify-between w-full h-hit items-center'>
      <Link className='flex flex-1 items-center h-fit' href={'/'}>
        <img className='md:ml-10 ml-4' src="/assets/luyari_home_logo.png" alt="" />
      </Link>

      <div className='md:flex hidden justify-center text-xs flex-2 gap-5'>
        {links?.map((i,index)=>
          <Link key={i} className={`hover:border-b-2 ${settings.luyariBlueBorder} h-5 uppercase`} href={`/${i}`}>{i}</Link>)
        }
      </div>

      <div className='flex-1 flex justify-end'>
        <RollOverStateWrapper src={settings.btnsImages.signin_2}/>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="nabar-popup absolute z-40 top-0 left-0 w-full text-white h-svh bg-black/90 shadow-sm py-6 md:hidden">
          <div className="flex flex-col items-center mt-20 gap-5">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`hover:border-b-4 h-11 ${settings.luyariBlueBorder}text-sm cursor-pointer uppercase py-2`}
                href={`/${link=='home' ? '/' : {link}}`}
                onClick={() => {
                  // setMobileMenuOpen(false);
                  // handlePageClick(link,index)
                  handlePageClick(link,index)
                }}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
