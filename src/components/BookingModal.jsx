import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const timeSlots = ['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30']

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setStep(2)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => { setStep(1); setForm({ name: '', phone: '', date: '', time: '', guests: '2', notes: '' }) }, 400)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-[#0E0E0E]/90 backdrop-blur-sm z-50
                     flex items-end sm:items-center justify-center p-0 sm:p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.35 }}
            onClick={e => e.stopPropagation()}
            className="bg-[#1C1C1C] border border-[#F0EDE6]/10
                       rounded-t-3xl sm:rounded-3xl
                       w-full sm:max-w-lg
                       max-h-[92dvh] overflow-y-auto"
          >

            {/* Handle bar — solo mobile */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-10 h-1 rounded-full bg-[#F0EDE6]/20" />
            </div>

            {/* Header modale */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-4 sm:pt-8 pb-5
                            border-b border-[#F0EDE6]/10">
              <div>
                <p className="text-[#E8D5B0] uppercase tracking-[0.3em] text-xs font-semibold mb-1">
                  Bella Napoli
                </p>
                <h3 className="text-[#F0EDE6] font-serif font-black text-xl sm:text-2xl">
                  {step === 1 ? 'Prenota un tavolo' : 'Prenotazione inviata'}
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full border border-[#F0EDE6]/10
                           hover:border-[#C8102E]/40 hover:bg-[#C8102E]/10
                           flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 text-[#F0EDE6]/50" fill="none" stroke="currentColor"
                     strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Step 1 — Form */}
            {step === 1 && (
              <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 flex flex-col gap-4">

                {/* Nome e telefono */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#F0EDE6]/40 text-xs uppercase tracking-widest">
                      Nome *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Mario Rossi"
                      className="bg-[#0E0E0E] border border-[#F0EDE6]/10 focus:border-[#C8102E]/50
                                 rounded-xl px-3 py-2.5 text-[#F0EDE6] text-sm placeholder:text-[#F0EDE6]/20
                                 outline-none transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#F0EDE6]/40 text-xs uppercase tracking-widest">
                      Telefono *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+39 333 000 0000"
                      className="bg-[#0E0E0E] border border-[#F0EDE6]/10 focus:border-[#C8102E]/50
                                 rounded-xl px-3 py-2.5 text-[#F0EDE6] text-sm placeholder:text-[#F0EDE6]/20
                                 outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Data e ospiti */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#F0EDE6]/40 text-xs uppercase tracking-widest">
                      Data *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="bg-[#0E0E0E] border border-[#F0EDE6]/10 focus:border-[#C8102E]/50
                                 rounded-xl px-3 py-2.5 text-[#F0EDE6] text-sm
                                 outline-none transition-colors duration-200
                                 [color-scheme:dark]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#F0EDE6]/40 text-xs uppercase tracking-widest">
                      Ospiti *
                    </label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="bg-[#0E0E0E] border border-[#F0EDE6]/10 focus:border-[#C8102E]/50
                                 rounded-xl px-3 py-2.5 text-[#F0EDE6] text-sm
                                 outline-none transition-colors duration-200"
                    >
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'persone'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Orario — pill selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#F0EDE6]/40 text-xs uppercase tracking-widest">
                    Orario *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map(t => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setForm({ ...form, time: t })}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                                   transition-all duration-200 ${
                          form.time === t
                            ? 'bg-[#C8102E] text-[#F0EDE6]'
                            : 'border border-[#F0EDE6]/15 text-[#F0EDE6]/40 hover:border-[#F0EDE6]/30 hover:text-[#F0EDE6]/70'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#F0EDE6]/40 text-xs uppercase tracking-widest">
                    Note (intolleranze, occasioni…)
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Es. celiaco, allergia alle noci, compleanno…"
                    className="bg-[#0E0E0E] border border-[#F0EDE6]/10 focus:border-[#C8102E]/50
                               rounded-xl px-3 py-2.5 text-[#F0EDE6] text-sm placeholder:text-[#F0EDE6]/20
                               outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!form.name || !form.phone || !form.date || !form.time}
                  className="w-full bg-[#C8102E] hover:bg-[#a50d26] disabled:opacity-30
                             disabled:cursor-not-allowed text-[#F0EDE6] font-bold text-sm
                             uppercase tracking-widest py-3.5 rounded-full
                             transition-all duration-200 hover:-translate-y-0.5"
                >
                  Conferma prenotazione
                </button>

                <p className="text-[#F0EDE6]/20 text-xs text-center pb-2">
                  Riceverai una conferma via SMS al numero indicato
                </p>
              </form>
            )}

            {/* Step 2 — Conferma */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="px-6 sm:px-8 py-8 flex flex-col items-center text-center gap-5"
              >
                {/* Check animato */}
                <div className="w-16 h-16 rounded-full bg-[#C8102E]/15 border border-[#C8102E]/30
                                flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#C8102E]" fill="none" stroke="currentColor"
                       strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>

                <div>
                  <h4 className="text-[#F0EDE6] font-serif font-black text-2xl mb-2">
                    Grazie, {form.name.split(' ')[0]}!
                  </h4>
                  <p className="text-[#F0EDE6]/50 text-sm">
                    La tua prenotazione è stata ricevuta.
                  </p>
                </div>

                {/* Riepilogo */}
                <div className="w-full bg-[#0E0E0E] border border-[#F0EDE6]/10 rounded-2xl p-5
                                flex flex-col gap-3 text-left">
                  {[
                    { label: 'Data', value: new Date(form.date).toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' }) },
                    { label: 'Orario', value: form.time },
                    { label: 'Ospiti', value: `${form.guests} ${form.guests === '1' ? 'persona' : 'persone'}` },
                    { label: 'Telefono', value: form.phone },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-[#F0EDE6]/30 text-xs uppercase tracking-widest">{label}</span>
                      <span className="text-[#F0EDE6] text-sm font-bold capitalize">{value}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[#F0EDE6]/30 text-xs">
                  Ti contatteremo al <span className="text-[#E8D5B0]">{form.phone}</span> per confermare
                </p>

                <button
                  onClick={handleClose}
                  className="w-full border border-[#F0EDE6]/15 hover:border-[#F0EDE6]/30
                             text-[#F0EDE6]/60 hover:text-[#F0EDE6] font-bold text-sm
                             uppercase tracking-widest py-3.5 rounded-full transition-all duration-200 mb-2"
                >
                  Chiudi
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
