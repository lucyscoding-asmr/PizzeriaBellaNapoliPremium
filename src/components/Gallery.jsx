import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/32449727/pexels-photo-32449727.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pizza Margherita Napoletana',
    label: 'Margherita',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/29626982/pexels-photo-29626982.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Forno a Legna con Fiamma',
    label: 'Forno a Legna',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/10068752/pexels-photo-10068752.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pizza Napoletana con Basilico',
    label: 'Napoletana',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/10832897/pexels-photo-10832897.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Interno Ristorante',
    label: 'Il Locale',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/9957551/pexels-photo-9957551.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pizza Diavola con Salame',
    label: 'Diavola',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/34413615/pexels-photo-34413615.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Impasto Artigianale',
    label: 'Il Nostro Impasto',
  },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="galleria" className="bg-[#0E0E0E] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Titolo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <p className="text-[#E8D5B0] uppercase tracking-[0.4em] text-xs mb-3 font-semibold">
            Un Assaggio Visivo
          </p>
          <h2 className="text-[#F0EDE6] font-serif font-black uppercase text-5xl md:text-6xl leading-none">
            Galleria
          </h2>
        </motion.div>

        {/* Grid — opacity+scale, NO clipPath */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: '-60px' }}
              onClick={() => setSelected(photo)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
              style={{ willChange: 'transform, opacity' }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform
                           duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[#0E0E0E]/60
                              transition-all duration-300 flex items-end p-4">
                <span className="text-[#F0EDE6] font-bold text-sm uppercase tracking-widest
                                 translate-y-4 opacity-0 group-hover:translate-y-0
                                 group-hover:opacity-100 transition-all duration-300">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-[#0E0E0E]/95 z-50 flex items-center
                       justify-center p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-3xl w-full"
            >
              <img
                src={selected.src}
                alt={selected.alt}
                decoding="async"
                className="w-full rounded-2xl object-cover max-h-[80vh]"
              />
              <p className="text-[#F0EDE6]/60 text-sm text-center mt-3 uppercase tracking-widest">
                {selected.label}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-[#C8102E]
                           hover:bg-[#a50d26] rounded-full text-[#F0EDE6] font-bold
                           flex items-center justify-center transition-colors text-lg"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
