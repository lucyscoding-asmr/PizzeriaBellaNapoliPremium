import { motion } from 'framer-motion'
import { useCounter } from '../hooks/useCounter'

const reviews = [
  {
    name: 'Marco T.',
    location: 'Napoli',
    rating: 5,
    text: 'La migliore pizza napoletana che abbia mai mangiato fuori Napoli. Impasto perfetto, ingredienti freschi e personale gentilissimo.',
    date: 'Febbraio 2026',
  },
  {
    name: 'Sofia R.',
    location: 'Bologna',
    rating: 5,
    text: 'Posto fantastico! La margherita con bufala era incredibile. Ambiente caldo e accogliente, ci torneremo sicuramente.',
    date: 'Gennaio 2026',
  },
  {
    name: 'Luca M.',
    location: 'Milano',
    rating: 5,
    text: 'Finalmente una pizzeria che rispetta la vera tradizione napoletana. Il babà al rum era da urlo. Consigliato al 100%.',
    date: 'Marzo 2026',
  },
  {
    name: 'Giulia P.',
    location: 'Roma',
    rating: 5,
    text: 'Ambiente bellissimo, pizza cotta a puntino nel forno a legna. Il profumo appena entri ti conquista subito.',
    date: 'Febbraio 2026',
  },
  {
    name: 'Andrea F.',
    location: 'Firenze',
    rating: 5,
    text: 'Ho provato tante pizzerie ma questa è un altro livello. La diavola era perfetta, piccante al punto giusto.',
    date: 'Gennaio 2026',
  },
  {
    name: 'Chiara B.',
    location: 'Torino',
    rating: 5,
    text: 'Serata perfetta! Staff super disponibile e pizza autentica come a Napoli. Il fritto misto era straordinario.',
    date: 'Marzo 2026',
  },
]

// Rilevamento mobile — eseguito una sola volta fuori dal componente
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#E8D5B0]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const rating = useCounter(4.8, { duration: 1200, decimals: 1 })
  const total  = useCounter(340, { duration: 1800, decimals: 0 })

  return (
    <section id="recensioni" className="bg-[#0E0E0E] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Titolo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-6"
        >
          <p className="text-[#E8D5B0] uppercase tracking-[0.4em] text-xs mb-3 font-semibold">
            Cosa Dicono di Noi
          </p>
          <h2 className="text-[#F0EDE6] font-serif font-black uppercase text-5xl md:text-6xl leading-none">
            Recensioni
          </h2>
        </motion.div>

        {/* Rating globale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center gap-2 mb-16"
        >
          <div className="flex items-end gap-3">
            <span
              ref={rating.ref}
              className="text-[#F0EDE6] font-black text-7xl leading-none tabular-nums"
            >
              {rating.count.toFixed(1)}
            </span>
            <div className="pb-2">
              <Stars count={5} />
              <p className="text-[#F0EDE6]/40 text-sm mt-1">
                Basato su{' '}
                <span ref={total.ref} className="tabular-nums">
                  {total.count}
                </span>{' '}
                recensioni Google
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards — animazione disabilitata su mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={isMobile ? false : { opacity: 0, y: 24 }}
              whileInView={isMobile ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true, margin: '-60px' }}
              className="bg-[#F0EDE6]/5 border border-[#F0EDE6]/10 hover:border-[#C8102E]/30
                         rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300
                         hover:bg-[#F0EDE6]/8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C8102E]/20
                                  flex items-center justify-center
                                  text-[#C8102E] font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#F0EDE6] font-semibold text-sm">{r.name}</p>
                    <p className="text-[#F0EDE6]/40 text-xs">{r.location}</p>
                  </div>
                </div>
                <span className="text-[#F0EDE6]/30 text-xs">{r.date}</span>
              </div>

              <Stars count={r.rating} />

              <p className="text-[#F0EDE6]/60 text-sm leading-relaxed italic">
                "{r.text}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
