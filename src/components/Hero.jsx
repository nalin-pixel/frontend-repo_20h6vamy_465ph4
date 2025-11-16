import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] pt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(124,58,237,0.25),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(14,165,233,0.25),transparent)]" />

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            PAPERCUT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl"
          >
            An AI-powered creative suite for artists and teams. Design, animate, and prototype in a fluid, futuristic workspace.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 px-5 py-3 text-white font-medium shadow-lg shadow-violet-600/20">
              Start for free
            </a>
            <a href="#showcase" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white backdrop-blur-md border border-white/10">
              View showcase
            </a>
          </motion.div>
        </div>
      </div>

      {/* Parallax orbs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-500/20 blur-2xl" />
    </section>
  )
}
