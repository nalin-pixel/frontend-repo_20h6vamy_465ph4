import { motion } from 'framer-motion'

const shots = [
  { id: 1, title: 'Neon Portrait', img: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Digital Waves', img: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Violet Motion', img: 'https://images.unsplash.com/photo-1520975922203-b21e2b2b5334?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Blue Grid', img: 'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?q=80&w=1200&auto=format&fit=crop' },
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Made with PAPERCUT
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shots.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <img src={s.img} alt={s.title} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="p-4">
                <p className="text-white font-medium">{s.title}</p>
                <p className="text-xs text-white/60 mt-1">AI + human collab</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
