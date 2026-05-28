import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import OpenTo from '@/components/OpenTo'
import HowIWork from '@/components/HowIWork'
import AboutMe from '@/components/AboutMe'
import CareerHighlights from '@/components/CareerHighlights'
import ByTheNumbers from '@/components/ByTheNumbers'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav />
      <main id="main-content">
        <Hero />
        <OpenTo />
        <HowIWork />
        <AboutMe />
        <CareerHighlights />
        <ByTheNumbers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
