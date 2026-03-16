import { motion } from 'framer-motion'

const letters = 'Napoletana'.split('')

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#0E0E0E]
                        flex flex-col items-center justify-center 
                        overflow-hidden text-[#F0EDE6] pt-28 pb-0">

      {/* Glow rosso — aggiunto max-w-[100vw] per evitare overflow su mobile */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                      w-[600px] max-w-[100vw] h-[600px] rounded-full 
                      bg-[#C8102E]/15 blur-[130px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-6"
      >
        <p className="text-[#E8D5B0] uppercase tracking-[0.4em] text-xs mb-4 font-semibold">
          Dal 1987 • Napoli
        </p>

        <h1 className="font-serif font-black uppercase leading-none mb-6"
          style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5rem)' }}>
          La Vera Pizza<br />

          {/* Word slide-up su "Napoletana" */}
          <span className="text-[#C8102E] italic inline-flex overflow-hidden px-4 -mx-4 pb-2">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.045,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        <p className="text-[#F0EDE6]/40 text-lg max-w-md mx-auto mb-8">
          Impasto artigianale, forno a legna,
          ingredienti freschi ogni giorno.
        </p>

        {/* Bottoni principali */}
        <div className="flex gap-3 justify-center flex-wrap mb-5">
          <a href="#menu"
            className="bg-[#C8102E] hover:bg-[#a50d26] text-white 
                px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-sm
                transition-all hover:-translate-y-1 uppercase tracking-widest">
            Scopri il Menu
          </a>
          <a href="#contatti"
            className="border border-[#F0EDE6]/20 hover:border-[#E8D5B0]/60 
                text-[#F0EDE6] px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-sm
                transition-all hover:-translate-y-1 uppercase tracking-widest">
            Prenota un Tavolo
          </a>
        </div>

        {/* Bottoni delivery */}
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="https://deliveroo.it" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#1C1C1C]/80
                border border-[#F0EDE6]/10 hover:border-[#00CCBC]/50
                text-[#F0EDE6] hover:text-[#00CCBC] px-3 py-1.5 md:px-5 md:py-2.5
                rounded-full text-xs font-semibold transition-all hover:-translate-y-0.5">
            <img src="https://www.google.com/s2/favicons?domain=deliveroo.com&sz=32" className="w-4 h-4" />
            Deliveroo
          </a>
          <a href="https://glovoapp.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#1C1C1C]/80
                border border-[#F0EDE6]/10 hover:border-[#FFC244]/50
                text-[#F0EDE6] hover:text-[#FFC244] px-3 py-1.5 md:px-5 md:py-2.5
                rounded-full text-xs font-semibold transition-all hover:-translate-y-0.5">
            <img src="https://www.google.com/s2/favicons?domain=glovoapp.com&sz=32" className="w-4 h-4" />
            Glovo
          </a>
          <a href="https://just-eat.it" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#1C1C1C]/80
                border border-[#F0EDE6]/10 hover:border-[#FF8000]/50
                text-[#F0EDE6] hover:text-[#FF8000] px-3 py-1.5 md:px-5 md:py-2.5
                rounded-full text-xs font-semibold transition-all hover:-translate-y-0.5">
            <img src="https://www.google.com/s2/favicons?domain=just-eat.com&sz=32" className="w-4 h-4" />
            Just Eat
          </a>
        </div>


      </motion.div>

      {/* Pizza */}
      <motion.img
        src="pizza.png"
        alt="Pizza Napoletana"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 mt-10 w-[500px] max-w-[85vw]
                   drop-shadow-[0_-20px_80px_rgba(200,16,46,0.4)]"
        style={{ animation: 'float 5s ease-in-out infinite' }}
      />
    </section>
  )
}
