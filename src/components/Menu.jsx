import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  {
    id: 'pizze',
    label: '🍕 Pizze',
    items: [
      { name: 'Margherita', desc: 'Pomodoro San Marzano, fior di latte, basilico fresco', price: '€9' },
      { name: 'Marinara', desc: 'Pomodoro, aglio, origano, olio EVO', price: '€7' },
      { name: 'Diavola', desc: 'Pomodoro, fior di latte, salame piccante', price: '€11' },
      { name: 'Quattro Formaggi', desc: 'Fior di latte, gorgonzola, parmigiano, provola', price: '€12' },
      { name: 'Bufalina', desc: 'Pomodoro, mozzarella di bufala DOP, basilico', price: '€13' },
      { name: 'Capricciosa', desc: 'Pomodoro, fior di latte, prosciutto, funghi, olive', price: '€12' },
    ]
  },
  {
    id: 'antipasti',
    label: '🫒 Antipasti',
    items: [
      { name: 'Bruschetta al Pomodoro', desc: 'Pane casereccio, pomodorini, aglio, basilico', price: '€6' },
      { name: 'Frittura Mista', desc: 'Montanarine, crocchè di patate, zeppoline', price: '€9' },
      { name: 'Burrata Pugliese', desc: 'Burrata fresca con pomodorini e olio EVO', price: '€10' },
      { name: 'Salumi Campani', desc: 'Selezione di salumi artigianali del territorio', price: '€12' },
    ]
  },
  {
    id: 'dolci',
    label: '🍮 Dolci',
    items: [
      { name: 'Tiramisù della Casa', desc: 'Ricetta tradizionale, mascarpone artigianale', price: '€6' },
      { name: 'Babà al Rum', desc: 'Classico napoletano, bagnato al rum invecchiato', price: '€5' },
      { name: 'Sfogliatella', desc: 'Riccia o frolla, ripieno di ricotta e arancia', price: '€4' },
      { name: 'Gelato Artigianale', desc: 'Due gusti a scelta, cialda croccante', price: '€5' },
    ]
  },
  {
    id: 'bevande',
    label: '🥤 Bevande',
    items: [
      { name: 'Acqua Naturale / Frizzante', desc: 'Bottiglia 75cl', price: '€2' },
      { name: 'Birra Artigianale', desc: 'Bionda o rossa, produzione locale', price: '€5' },
      { name: 'Vino della Casa', desc: 'Rosso o bianco, calice o bottiglia', price: '€4 / €14' },
      { name: 'Limonata Fresca', desc: 'Limoni di Amalfi, menta, zucchero di canna', price: '€4' },
    ]
  },
]

export default function Menu() {
  const [active, setActive] = useState('pizze')
  const current = categories.find(c => c.id === active)

  return (
    <section id="menu" className="bg-[#0E0E0E] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Titolo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#E8D5B0] uppercase tracking-[0.4em] text-xs mb-3 font-semibold">
            La Nostra Cucina
          </p>
          <h2 className="text-[#F0EDE6] font-serif font-black uppercase text-5xl md:text-6xl leading-none">
            Il Menù
          </h2>
        </motion.div>

        {/* Tab categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                active === c.id
                  ? 'bg-[#C8102E] text-[#F0EDE6] scale-105'
                  : 'border border-[#F0EDE6]/20 text-[#F0EDE6]/50 hover:border-[#E8D5B0]/50 hover:text-[#E8D5B0]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {current.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="flex justify-between items-start gap-4
                           bg-[#F0EDE6]/5 hover:bg-[#F0EDE6]/10
                           border border-[#F0EDE6]/10 hover:border-[#C8102E]/40
                           rounded-2xl px-6 py-5 transition-all duration-300"
              >
                <div>
                  <h3 className="text-[#F0EDE6] font-bold text-base mb-1">{item.name}</h3>
                  <p className="text-[#F0EDE6]/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-[#C8102E] font-black text-lg whitespace-nowrap">
                  {item.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
