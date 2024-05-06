import Image from 'next/image'
import Link from 'next/link'
import Landing from './main/page'
import Navbar from './navbar'
import Footer from './footer'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Landing />
      <Footer/>
    </>
  )
}
