import { motion } from 'framer-motion'

function RetailSection({ categories, logos, theme = 'dark' }) {
    return (
        <section id="retail" className={`mx-auto max-w-7xl px-6 py-24 md:px-12 ${theme === 'light' ? 'text-slate-900' : ''}`}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
                <p className="text-xs uppercase tracking-[0.2em] text-blueAccent">Retail Environment</p>
                <h2 className={`mt-3 font-display text-4xl md:text-6xl ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>500+ brands. Zero compromises.</h2>
            </motion.div>

            <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-3">
                {categories.map((item) => (
                    <article
                        key={item.name}
                        className={`group min-w-[300px] snap-start overflow-hidden rounded-3xl transition hover:-translate-y-2 hover:shadow-2xl md:min-w-[380px] ${theme === 'light' ? 'border border-slate-200 bg-white/90' : 'border border-white/15 bg-black/40'}`}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            decoding="async"
                            className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        <div className="p-5">
                            <h3 className="font-display text-3xl text-gold">{item.name}</h3>
                            <p className={`mt-2 ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>{item.text}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
                <div className={`grid grid-cols-2 gap-3 rounded-2xl p-4 sm:grid-cols-3 md:grid-cols-5 ${theme === 'light' ? 'border border-slate-200 bg-white/85' : 'border border-white/15 bg-black/35'}`}>
                    {logos.map((logo) => (
                        <div key={logo} className={`grid h-16 place-items-center rounded-xl border text-center text-xs uppercase tracking-widest ${theme === 'light' ? 'border-slate-200 bg-stone-50 text-slate-700' : 'border-white/10 bg-white/5 text-slate-200'}`}>
                            {logo}
                        </div>
                    ))}
                </div>

                <div className={`rounded-2xl border p-6 ${theme === 'light' ? 'border-gold/25 bg-gold/10' : 'border-gold/35 bg-gold/10'}`}>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Leasing Opportunity</p>
                    <p className={`mt-3 text-lg ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>Prime inventory remains for brands ready to scale with unmatched traffic.</p>
                    <a href="#contact" className="mt-6 inline-flex rounded-full bg-gold px-5 py-2 text-sm font-semibold uppercase tracking-wider text-navy transition hover:scale-105">
                        Inquire About Retail Space
                    </a>
                </div>
            </div>
        </section>
    )
}

export default RetailSection
