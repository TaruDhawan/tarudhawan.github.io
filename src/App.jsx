import Nav from './components/Nav'
import Hero from './components/Hero'
import HowIWork from './components/HowIWork'
import AboutMe from './components/AboutMe'
import CareerHighlights from './components/CareerHighlights'
import ByTheNumbers from './components/ByTheNumbers'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ backgroundColor: '#faf7f2', minHeight: '100vh' }}>
      <Nav />
      <main>
        <Hero />
        <HowIWork />
        <AboutMe />
        <CareerHighlights />
        <ByTheNumbers />
      </main>
      <Footer />
    </div>
  )
}
