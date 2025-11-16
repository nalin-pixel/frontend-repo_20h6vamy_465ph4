import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      {/* Decorative parallax layers */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-20 -left-20 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-violet-700/25 to-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-indigo-700/20 to-fuchsia-500/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
