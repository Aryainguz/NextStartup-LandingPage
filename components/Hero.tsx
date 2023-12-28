import React from 'react'
import { DialogDemo } from './ui/Dailog' 
import { Link } from 'lucide-react'

const Hero = () => {
  return (
   <section className="pt-20 md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 space-y-10">
    <div className="container mx-auto text-center">
      <div className="text-4xl sm:text-6xl flex justify-center font-bold md:px-20 pb-2 text-gradient bg-gradient-to-r from-purple-500 to-green-300 bg-clip-text text-transparent">
      The Xiting Way 
      </div>
      <h1 className="text-4xl sm:text-6xl flex justify-center font-bold md:px-20 pb-6 text-gradient">
      Software Solutions
      </h1>

      <p className="text-lg md:text-xl md-10 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent font-bold ">
      Revolutionizing Technology for the 21st Century.
      </p>
      <div className="flex gap-4 text-white justify-center pt-10 py-4 rounded-md text-lg font-bold">
        <DialogDemo />
      <a href='https://www.linkedin.com/company/the-xiting-way/?viewAsMember=true' target='_blank'>
        <button className="bg-gray-500 text-lg hover:bg-gray-700 px-4 py-2 rounded-md ">Learn More</button></a>
      </div>
      <br />
      <div >
      <video className="rounded-xl" muted loop autoPlay>
      <source src="/src/herovideo.mp4" type="video/mp4"/>
      </video>
      </div>
    </div>
   </section>
  )
}

export default Hero