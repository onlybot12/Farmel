import { useReveal } from './hooks/useReveal'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Profile } from './components/Profile'
import { Services } from './components/Services'
import { Catalog } from './components/Catalog'
import { Journey } from './components/Journey'
import { Values } from './components/Values'
import { Clients } from './components/Clients'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Services />
        <Catalog />
        <Journey />
        <Values />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
