import { useEffect } from 'react'
import { useAnimationFrame } from 'framer-motion'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

let lenisInstance = null

export default function App() {

  useEffect(() => {
  // Lenis solo su desktop
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  if (isMobile) return

  lenisInstance = new Lenis({
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })
  return () => {
    lenisInstance?.destroy()
    lenisInstance = null
  }
}, [])

  // Sincronizza Lenis con il RAF interno di Framer Motion
  useAnimationFrame((time) => {
    lenisInstance?.raf(time)
  })

  return (
    <main className="relative w-full overflow-x-hidden bg-[#0E0E0E] text-[#F0EDE6] min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
      <Menu />
      <Gallery />
      <Reviews />
      <Footer />
    </main>
  )
}
