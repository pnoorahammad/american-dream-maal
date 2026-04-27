import { motion } from 'framer-motion'

function EventsSection({ eventTypes, highlights, specs, onBookEvent, theme = 'dark' }) {
    return (
        <section id="events" className={`mx-auto max-w-7xl px-6 py-24 md:px-12 ${theme === 'light' ? 'text-slate-900' : ''}`}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
                <p className="text-xs uppercase tracking-[0.2em] text-blueAccent">Events & Platform</p>
                <h2 className={`mt-3 font-display text-4xl md:text-6xl ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>A global platform, not just a building.</h2>
            </motion.div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {eventTypes.map((type) => (
                    <article key={type} className={`rounded-2xl p-5 transition hover:scale-[1.02] hover:shadow-2xl ${theme === 'light' ? 'border border-slate-200 bg-white' : 'border border-white/15 bg-white/5'}`}>
                        <p className="font-display text-3xl text-gold">{type}</p>
                    </article>
                ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                <div className={`rounded-3xl p-6 ${theme === 'light' ? 'border border-slate-200 bg-white' : 'border border-white/15 bg-black/35'}`}>
                    <p className={`text-xs uppercase tracking-[0.18em] ${theme === 'light' ? 'text-slate-500' : 'text-slate-300'}`}>Highlight Reel</p>
                    <div className="mt-4 space-y-3">
                        {highlights.map((item) => (
                            <div key={item.name} className={`rounded-xl p-4 ${theme === 'light' ? 'border border-slate-200 bg-stone-50' : 'border border-white/10 bg-navy/70'}`}>
                                <p className={`text-lg ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{item.name}</p>
                                <p className={`text-sm ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>{item.scale}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`rounded-3xl border p-6 ${theme === 'light' ? 'border-gold/25 bg-gold/10' : 'border-gold/30 bg-gold/10'}`}>
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">Venue Specs</p>
                    <div className="mt-4 space-y-3">
                        {specs.map((spec) => (
                            <div key={spec.label} className={`flex justify-between border-b border-gold/20 pb-2 text-sm ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>
                                <span>{spec.label}</span>
                                <span className="font-semibold text-gold">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={onBookEvent}
                        className="mt-6 rounded-full bg-gold px-6 py-2 text-sm font-semibold uppercase tracking-wider text-navy transition hover:scale-105"
                    >
                        Book Your Event
                    </button>
                </div>
            </div>
        </section>
    )
}

export default EventsSection
