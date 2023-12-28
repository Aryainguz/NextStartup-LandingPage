import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const error = () => {
  return (
   <>
   <Navbar />
   <div className="flex justify-center">
   <section className="bg-white mx-auto dark:bg-gray-900 ">
  <div className="container flex items-center min-h-screen px-6 py-12">
    <div>
      <p className="text-lg font-medium text-purple-500 dark:text-purple-400">404 Page Not Found</p>
      <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">We can not find that page</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn not exist.</p>
      <div className="flex items-center mt-6 gap-x-3">
        <br />
        <button className="w-1/2 px-5 py-2 text-lg tracking-wide text-white transition-colors duration-200 bg-purple-500 rounded-lg shrink-0 lg:w-auto hover:bg-purple-600 dark:hover:bg-purple-500 dark:bg-purple-600">
        <Link href={'/'}>
          Return Home</Link>
        </button>
      </div>
    </div>
  </div>
</section>
   </div>

<Footer/>
   </>
  )
}

export default error