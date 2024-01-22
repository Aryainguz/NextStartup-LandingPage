import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Products from '@/components/Products'
import Portfolio from '@/components/Features2'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import CampusLink from '@/components/CampusLink'
import Video from '@/components/CampusLinkVideo'

export default function web() {
  return (
   <>
    <Navbar />
    <Portfolio />
    <Cta />
    <Footer />
   </>
  )
}
