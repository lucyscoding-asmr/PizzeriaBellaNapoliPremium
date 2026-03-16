const items = [
  "🍕 Pizza Napoletana",
  "🔥 Forno a Legna",
  "⭐ 4.8/5 su Google",
  "🛵 Consegna Rapida",
  "🌿 Ingredienti Freschi",
  "🫶 Dal 1987",
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="bg-[#C8102E] py-3 overflow-hidden border-y border-[#F0EDE6]/10">
      <div className="flex gap-16 w-max uppercase font-bold 
                      tracking-widest text-white text-xs
                      animate-[ticker_22s_linear_infinite]">
        {doubled.map((item, i) => (
          <span key={i} className="whitespace-nowrap">{item}</span>
        ))}
      </div>
    </div>
  )
}
