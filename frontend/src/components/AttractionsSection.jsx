import { motion } from 'framer-motion'

function AttractionsSection({ attractions, theme = 'dark' }) {
    return (
        <section id="attractions" className={`px-6 py-24 md:px-12 ${theme === 'light' ? 'bg-stone-100 text-slate-900' : 'bg-black text-white'}`}>
            <motion.div
                className="mx-auto max-w-7xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <p className="text-xs uppercase tracking-[0.2em] text-blueAccent">Attractions & Entertainment</p>
                <h2 className={`mt-3 font-display text-4xl md:text-7xl ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>No other property on Earth offers this.</h2>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {attractions.map((item) => (
                        <article
                            key={item.name}
                            className={`group relative min-h-[290px] overflow-hidden rounded-3xl ${theme === 'light' ? 'border border-slate-200' : 'border border-white/15'}`}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5">
                                <h3 className="font-display text-3xl text-white">{item.name}</h3>
                                <p className="mt-2 text-sm text-slate-200">{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default AttractionsSection
