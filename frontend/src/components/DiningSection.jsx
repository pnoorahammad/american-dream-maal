import { motion } from 'framer-motion'

function DiningSection({ cards, media, theme = 'dark' }) {
    return (
        <section id="dining" className={`mx-auto max-w-7xl px-6 py-24 md:px-12 ${theme === 'light' ? 'text-slate-900' : ''}`}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
                <p className="text-xs uppercase tracking-[0.2em] text-blueAccent">Dining & Lifestyle</p>
                <h2 className={`mt-3 font-display text-4xl md:text-6xl ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Food is the reason they stay. And stay. And stay.</h2>
                <p className="mt-3 font-stat text-3xl text-gold">100+ dining concepts across 3 levels</p>
            </motion.div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
                <video
                    src={media.diningLoop}
                    className="h-full min-h-[360px] w-full rounded-3xl object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={media.heroFallbackImage}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                    {cards.map((card) => (
                        <article key={card.name} className={`rounded-2xl p-4 transition hover:-translate-y-1 hover:shadow-2xl ${theme === 'light' ? 'border border-slate-200 bg-white' : 'border border-white/15 bg-black/35'}`}>
                            <span className="rounded-full border border-blueAccent/40 bg-blueAccent/15 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-blueAccent">
                                {card.type}
                            </span>
                            <h3 className={`mt-3 font-display text-2xl ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{card.name}</h3>
                            <p className={`mt-2 text-sm ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>{card.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DiningSection
