import { motion } from 'framer-motion'

function SponsorshipModule({ tiers, audience, onExplorePartnership, theme = 'dark' }) {
    return (
        <section id="sponsorship" className={`px-6 py-24 md:px-12 ${theme === 'light' ? 'bg-stone-100 text-slate-900' : 'bg-navy text-white'}`}>
            <motion.div
                className="mx-auto max-w-7xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <p className="text-xs uppercase tracking-[0.2em] text-blueAccent">Sponsorship Module</p>
                <h2 className={`mt-3 font-display text-4xl md:text-6xl ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Own moments at destination scale.</h2>

                <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {tiers.map((tier) => (
                        <article key={tier.name} className={`rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-2xl ${theme === 'light' ? 'border border-slate-200 bg-white' : 'border border-white/15 bg-black/35'}`}>
                            <h3 className="font-display text-3xl text-gold">{tier.name}</h3>
                            <p className={`mt-3 text-sm ${theme === 'light' ? 'text-slate-600' : 'text-slate-200'}`}>{tier.desc}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
                    <div className={`rounded-3xl p-6 ${theme === 'light' ? 'border border-slate-200 bg-white' : 'border border-white/15 bg-black/35'}`}>
                        <p className={`text-xs uppercase tracking-[0.18em] ${theme === 'light' ? 'text-slate-500' : 'text-slate-300'}`}>Audience Data</p>
                        <div className="mt-5 space-y-4">
                            {audience.map((item) => (
                                <div key={item.label}>
                                    <div className={`mb-2 flex justify-between text-sm ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>
                                        <span>{item.label}</span>
                                        <span className="text-blueAccent">{item.value}%</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-white/10">
                                        <div className="h-2 rounded-full bg-blueAccent" style={{ width: `${item.value}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`rounded-3xl border p-6 ${theme === 'light' ? 'border-gold/25 bg-gradient-to-br from-white to-stone-100' : 'border-gold/30 bg-gradient-to-br from-black to-navy'}`}>
                        <p className="text-xs uppercase tracking-[0.18em] text-gold">Activation Zone Map</p>
                        <div className="mt-4 grid h-64 grid-cols-3 gap-2">
                            {['Atrium', 'Water Park', 'Luxury Wing', 'Food Hall', 'Main Promenade', 'Event Plaza'].map((zone) => (
                                <div key={zone} className={`grid place-items-center rounded-xl border p-2 text-center text-xs ${theme === 'light' ? 'border-gold/20 bg-gold/10 text-slate-800' : 'border-gold/20 bg-gold/10 text-slate-100'}`}>
                                    {zone}
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={onExplorePartnership}
                            className="mt-6 rounded-full bg-gold px-6 py-2 text-sm font-semibold uppercase tracking-wider text-navy"
                        >
                            Explore Partnership Opportunities
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default SponsorshipModule
