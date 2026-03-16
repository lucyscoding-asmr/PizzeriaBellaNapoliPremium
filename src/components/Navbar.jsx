import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Recensioni', href: '#recensioni' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0E0E0E]/90 backdrop-blur-md '
          : 'bg-transparent'
      }`}
    >
      {/* FIX: aggiunto w-full e corretto il padding (px-5 invece di px-6) */}
      <div className="w-full max-w-7xl mx-auto px-5 py-4 flex items-center justify-between box-border">

        {/* Logo */}
        <div className="flex flex-col leading-tight z-50">
          <span className="text-[10px] font-semibold tracking-[0.3em] text-[#E8D5B0] uppercase">
            Ristorante
          </span>
          <span className="text-xl font-bold text-[#F0EDE6] tracking-wide">Bella Napoli</span>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#F0EDE6]/50 hover:text-[#E8D5B0] text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contatti"
          className="hidden md:inline-flex items-center px-5 py-2 
                     bg-[#C8102E] hover:bg-[#a50d26] text-white 
                     text-sm font-bold rounded-full uppercase tracking-widest
                     transition-all hover:-translate-y-0.5"
        >
          Prenota ora
        </a>

        {/* Hamburger - FIX: rimosso margini extra e aggiunto z-50 */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 p-1 mr-1"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#F0EDE6] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#F0EDE6] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#F0EDE6] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#F0EDE6]/10 px-6 py-6 flex flex-col gap-5 shadow-2xl">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F0EDE6]/70 hover:text-[#E8D5B0] text-lg font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={() => setMenuOpen(false)}
            className="text-center px-5 py-3 mt-2 bg-[#C8102E] hover:bg-[#a50d26] 
                       text-white text-sm font-bold rounded-full uppercase tracking-widest
                       transition-all"
          >
            Prenota ora
          </a>
        </div>
      )}
    </header>
  )
}
