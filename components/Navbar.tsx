"use client"
import React from 'react'
import Image from 'next/image'
import ActionButton from './ui/ActionButton'
import { Button } from './ui/button'
import {NavBtn} from './ui/NavBtn'
import Link  from 'next/link'

const Navbar = () => {
  return (
    <>
        <div className='flex justify-between items-center px-10 border-b'>
        <Link href="/">

            <div className="flex relative left-2 bottom-1 sm:left-0">       
                 <Image src="/src/thexitingway.png" width={170} height={170} className='relative bottom-4 right-10' alt='The Xiting Way logo' /> 
            <div className="relative top-12 font-bold right-20 text-mdsm:text-lg">The Xiting Way</div></div></Link>
            <div className='visible sm:hidden'>
            <ActionButton />
            </div>
            <div className="hidden sm:flex sm:space-x-4">
                <NavBtn/>
                </div>
            <div className="hidden md:flex md:space-x-4">
                <a href="#contact">
            <Button className="text-md" variant={'ghost'} >
                Contact us
            </Button></a>
            <a href="#services">
            <Button className="text-md bg-purple-500">
                Get started
            </Button></a>
        </div>
        </div>
    </>

  )
}

export default Navbar