import { motion } from 'framer-motion'

function WhyThisProperty({ cards, media, theme = 'dark' }) {
    const sectionText = theme === 'light' ? 'text-slate-900' : 'text-white'
    const mutedText = theme === 'light' ? 'text-slate-600' : 'text-slate-200'
    const surface = theme === 'light' ? 'border-slate-200 bg-white/85' : 'border-white/15 bg-black/45'

    return (
        <section id="why" className={`relative overflow-hidden px-6 py-24 md:px-12 ${theme === 'light' ? 'bg-stone-100' : ''}`}>
            <img
                src={media.aerialImage}
                alt="Aerial destination view"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-stone-100/40 to-stone-100' : 'bg-gradient-to-b from-black/70 to-navy'}`} />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="relative mx-auto max-w-7xl"
            >
                <p className="text-xs uppercase tracking-[0.2em] text-blueAccent">Why This Property</p>
                <h2 className={`mt-3 font-display text-4xl md:text-6xl ${sectionText}`}>The Epicenter of Commerce, Culture and Entertainment</h2>
                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card) => (
                        <div key={card.title} className={`rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-2xl ${surface}`}>
                            <p className={`text-xs uppercase tracking-widest ${theme === 'light' ? 'text-slate-500' : 'text-slate-300'}`}>{card.title}</p>
                            <p className="mt-3 font-stat text-4xl text-gold">{card.value}</p>
                            <p className={`mt-2 text-sm ${mutedText}`}>{card.detail}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                    <div className={`rounded-3xl border p-6 ${theme === 'light' ? 'border-slate-200 bg-white/85' : 'border-white/15 bg-black/40'}`}>
                        <p className={`text-sm uppercase tracking-[0.16em] ${theme === 'light' ? 'text-slate-500' : 'text-slate-300'}`}>Drive-Time Radius</p>
                        <div className={`mt-4 h-72 rounded-2xl border p-6 ${theme === 'light' ? 'border-blueAccent/25 bg-gradient-to-tr from-stone-100 via-white to-stone-200' : 'border-blueAccent/40 bg-gradient-to-tr from-navy via-black to-navy'}`}>
                            <div className="relative h-full w-full rounded-full border border-blueAccent/35">
                                <div className="absolute inset-10 rounded-full border border-blueAccent/40 animate-pulse" />
                                <div className="absolute inset-20 rounded-full border border-blueAccent/40" />
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">Manhattan</span>
                                <span className={`absolute right-2 top-6 text-xs ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>American Dream</span>
                                <span className={`absolute left-2 bottom-6 text-xs ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>50M within 1 hour</span>
                            </div>
                        </div>
                    </div>
                    <blockquote className={`rounded-3xl border p-8 text-2xl font-light leading-relaxed ${theme === 'light' ? 'border-gold/25 bg-gold/10 text-slate-900' : 'border-gold/30 bg-gold/10 text-slate-100'}`}>
                        "The only mall in the world where you can ski, skydive, surf, and shop - all before dinner."
                    </blockquote>
                </div>
            </motion.div>
        </section>
    )
}

export default WhyThisProperty
