import { motion } from 'framer-motion'

function LuxurySection({ features, brands, theme = 'dark' }) {
    return (
        <section id="luxury" className={`px-6 py-24 md:px-12 ${theme === 'light' ? 'bg-stone-100 text-slate-900' : 'bg-luxury text-white'}`}>
            <motion.div
                className="mx-auto max-w-7xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <p className="text-xs uppercase tracking-[0.2em] text-luxuryAccent">Luxury Wing</p>
                <h2 className={`mt-3 font-display text-4xl md:text-6xl ${theme === 'light' ? 'text-slate-900' : 'text-luxuryAccent'}`}>A separate world within the world.</h2>
                <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                    <div className={`space-y-4 rounded-3xl p-8 ${theme === 'light' ? 'border border-slate-200 bg-white' : 'border border-luxuryAccent/30 bg-black/30'}`}>
                        {features.map((item) => (
                            <p key={item} className={`rounded-xl border p-4 ${theme === 'light' ? 'border-gold/20 bg-stone-50 text-slate-800' : 'border-luxuryAccent/20 bg-luxury/80 text-luxuryAccent'}`}>
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {brands.map((brand) => (
                            <article key={brand} className={`rounded-2xl border p-5 transition hover:scale-[1.02] hover:shadow-2xl ${theme === 'light' ? 'border-slate-200 bg-white' : 'border-luxuryAccent/35 bg-gradient-to-b from-luxury to-black'}`}>
                                <p className={`font-display text-3xl ${theme === 'light' ? 'text-slate-900' : 'text-luxuryAccent'}`}>{brand}</p>
                                <p className={`mt-2 text-sm ${theme === 'light' ? 'text-slate-600' : 'text-amber-100/75'}`}>Flagship-ready prestige positioning with VIP-first service layers.</p>
                            </article>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default LuxurySection
