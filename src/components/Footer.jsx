export default function Footer() {
  return (
    <footer id="contact" className="relative py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} PAPERCUT — AI creative suite</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/70 hover:text-white text-sm">Privacy</a>
          <a href="#" className="text-white/70 hover:text-white text-sm">Terms</a>
          <a href="#" className="text-white/70 hover:text-white text-sm">Support</a>
        </div>
      </div>
    </footer>
  )
}
