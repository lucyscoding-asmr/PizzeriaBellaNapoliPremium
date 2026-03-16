import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import BookingModal from './BookingModal'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Via+Toledo+123+Napoli'

// Carica l'iframe solo quando entra in viewport
function LazyMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="relative w-full h-48 overflow-hidden bg-[#1C1C1C]">
      {isInView && (
        <iframe
          title="Mappa Bella Napoli"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020!2d14.2488!3d40.8400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b08f3b7d3d3d3%3A0x0!2sVia+Toledo%2C+123%2C+Napoli!5e0!3m2!1sit!2sit!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
      <div className="absolute inset-0 bg-[#0E0E0E]/30 pointer-events-none" />
    </div>
  )
}

export default function Footer() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <footer id="contatti" className="relative bg-[#0E0E0E] border-t border-[#F0EDE6]/10 overflow-hidden">

      {/* Aggiunto max-w-[100vw] per evitare overflow su mobile */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[500px] max-w-[100vw] h-[300px]
                      bg-[#C8102E]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24">

        {/* Titolo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-20"
        >
          <p className="text-[#E8D5B0] uppercase tracking-[0.4em] text-xs mb-3 font-semibold">
            Vieni a Trovarci
          </p>
          <h2 className="text-[#F0EDE6] font-serif font-black uppercase leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
            Siamo<br />
            <span className="text-[#C8102E] italic">a Napoli</span>
          </h2>
        </motion.div>

        {/* Layout principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Card indirizzo con mappa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="bg-[#1C1C1C] border border-[#F0EDE6]/10 rounded-3xl overflow-hidden flex flex-col"
          >
            {/* ← LazyMap invece dell'iframe diretto */}
            <LazyMap />

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-7 flex items-center justify-between
                         hover:bg-[#C8102E]/5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-[#C8102E]" fill="none" stroke="currentColor"
                    strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6z" />
                    <circle cx="12" cy="8" r="2" fill="currentColor" stroke="none" />
                  </svg>
                  <span className="text-[#F0EDE6]/30 uppercase tracking-[0.3em] text-xs font-semibold">
                    Indirizzo
                  </span>
                </div>
                <p className="text-[#F0EDE6] font-bold text-xl">Via Toledo, 123</p>
                <p className="text-[#F0EDE6]/40 text-sm mt-0.5">80134 Napoli, NA</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
                  <span className="text-[#F0EDE6]/25 text-xs uppercase tracking-widest">
                    Centro storico · Metro Toledo
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[#F0EDE6]/20
                              group-hover:text-[#C8102E] transition-colors duration-300">
                <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Maps</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </motion.div>

          {/* Colonna destra */}
          <div className="flex flex-col gap-6">

            {/* Orari */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-[#1C1C1C] border border-[#F0EDE6]/10 rounded-3xl p-7 flex-1"
            >
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-4 h-4 text-[#C8102E]" fill="none" stroke="currentColor"
                  strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
                <span className="text-[#F0EDE6]/30 uppercase tracking-[0.3em] text-xs font-semibold">
                  Orari
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#F0EDE6]/50 text-sm">Lun – Ven</span>
                  <span className="text-[#F0EDE6] text-sm font-bold">12:00–15:00 · 19:00–23:00</span>
                </div>
                <div className="w-full h-px bg-[#F0EDE6]/5" />
                <div className="flex justify-between items-center">
                  <span className="text-[#F0EDE6]/50 text-sm">Sab – Dom</span>
                  <span className="text-[#F0EDE6] text-sm font-bold">12:00–23:30</span>
                </div>
                <div className="w-full h-px bg-[#F0EDE6]/5" />
                <div className="flex justify-between items-center">
                  <span className="text-[#F0EDE6]/50 text-sm">Chiuso</span>
                  <span className="text-[#C8102E] text-sm font-bold">Mai 🍕</span>
                </div>
              </div>
            </motion.div>

            {/* Telefono + WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-2 gap-4"
            >
              <a href="tel:+390812345678"
                className="group bg-[#1C1C1C] border border-[#F0EDE6]/10
                            hover:border-[#C8102E]/40 hover:bg-[#C8102E]/5
                            rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300">
                <svg className="w-5 h-5 text-[#F0EDE6]/30 group-hover:text-[#C8102E] transition-colors duration-300"
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-[#F0EDE6]/30 uppercase tracking-[0.2em] text-xs mb-1">Chiamaci</p>
                  <p className="text-[#F0EDE6] font-bold text-sm group-hover:text-[#E8D5B0] transition-colors">
                    081 234 5678
                  </p>
                </div>
              </a>

              <a href="https://wa.me/390812345678"
                className="group bg-[#1C1C1C] border border-[#F0EDE6]/10
                            hover:border-green-500/40 hover:bg-green-500/5
                            rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300">
                <svg className="w-5 h-5 text-[#F0EDE6]/30 group-hover:text-green-400 transition-colors duration-300"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.848L.057 23.704a.75.75 0 00.92.92l5.856-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.932.949-3.658-.235-.376A9.818 9.818 0 1112 21.818z" />
                </svg>
                <div>
                  <p className="text-[#F0EDE6]/30 uppercase tracking-[0.2em] text-xs mb-1">WhatsApp</p>
                  <p className="text-[#F0EDE6] font-bold text-sm group-hover:text-green-400 transition-colors">
                    Scrivici subito
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* CTA full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-80px' }}
          className="relative bg-[#C8102E]/10 border border-[#C8102E]/30
             rounded-3xl p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#C8102E]/5 blur-3xl" />
          <div className="relative z-10">
            <p className="text-[#E8D5B0] uppercase tracking-[0.4em] text-xs mb-3 font-semibold">
              Tavoli limitati ogni sera
            </p>
            <h3 className="text-[#F0EDE6] font-serif font-black text-3xl md:text-4xl mb-8">
              Prenota il tuo posto
            </h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setBookingOpen(true)}
                className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#a50d26] text-[#F0EDE6]
                   px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-sm
                   uppercase tracking-widest transition-all hover:-translate-y-1">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Prenota online
              </button>

              <a href="https://wa.me/390812345678"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white
                    px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-sm
                    uppercase tracking-widest transition-all hover:-translate-y-1">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.848L.057 23.704a.75.75 0 00.92.92l5.856-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.932.949-3.658-.235-.376A9.818 9.818 0 1112 21.818z" />
                </svg>
                Scrivici
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F0EDE6]/10 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row
                        items-center justify-between gap-3">
          <span className="text-[#F0EDE6]/30 text-xs">
            © 2026 Bella Napoli — Tutti i diritti riservati
          </span>
          <span className="text-[#F0EDE6]/20 text-xs">
            Sito demo realizzato da IMLUNAR STUDIO
          </span>
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </footer>
  )
}
