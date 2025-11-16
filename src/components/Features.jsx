import { motion } from 'framer-motion'
import { Sparkles, Image, Palette, Shapes, Wand2, Zap } from 'lucide-react'

const items = [
  { icon: Wand2, title: 'AI Assist', desc: 'Generate concepts, refine layouts, and co-create with a smart assistant.' },
  { icon: Palette, title: 'Style Transfer', desc: 'Apply bold art styles across images and videos with one click.' },
  { icon: Image, title: 'Generative Canvas', desc: 'Sketch ideas and watch scenes materialize in real-time.' },
  { icon: Shapes, title: '3D + Motion', desc: 'Animate vectors and 3D assets with buttery interactions.' },
  { icon: Sparkles, title: 'Prompt Engine', desc: 'Reusable prompt recipes tuned for creative workflows.' },
  { icon: Zap, title: 'Fast Export', desc: 'One-tap export to web, socials, and files in rich formats.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(124,58,237,0.12),transparent),radial-gradient(400px_200px_at_90%_20%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          A creative suite built for the future
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-violet-600 to-sky-500 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-1 text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
