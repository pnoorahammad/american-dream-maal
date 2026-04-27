import { useState } from 'react'
import { motion } from 'framer-motion'

function LeasingPaths({ tabs, onRequestTour, theme = 'dark' }) {
    const [activeTab, setActiveTab] = useState(tabs[0].key)

    const current = tabs.find((tab) => tab.key === activeTab)

    return (
        <section id="leasing" className={`mx-auto max-w-7xl px-6 py-24 md:px-12 ${theme === 'light' ? 'text-slate-900' : ''}`}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
                <p className="text-xs uppercase tracking-[0.2em] text-blueAccent">Leasing Paths</p>
                <h2 className={`mt-3 font-display text-4xl md:text-6xl ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Find the right path to market.</h2>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        type="button"
                        onClick={() => setActiveTab(tab.key)}
                        className={`rounded-full border px-5 py-2 text-sm uppercase tracking-wider transition ${activeTab === tab.key ? 'border-gold bg-gold text-navy' : 'border-white/20 text-slate-200 hover:border-gold hover:text-gold'
                            }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            <div className={`mt-8 rounded-3xl p-8 ${theme === 'light' ? 'border border-slate-200 bg-white' : 'border border-white/15 bg-black/35'}`}>
                <h3 className="font-display text-4xl text-gold">{current.title}</h3>
                <p className={`mt-4 max-w-3xl ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>{current.copy}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className={`rounded-xl p-4 ${theme === 'light' ? 'border border-slate-200 bg-stone-50' : 'border border-white/15 bg-white/5'}`}>
                        <p className={`text-xs uppercase tracking-[0.15em] ${theme === 'light' ? 'text-slate-500' : 'text-slate-300'}`}>Available Sq Footage</p>
                        <p className="mt-2 font-stat text-3xl text-blueAccent">{current.range}</p>
                    </div>
                    <div className={`rounded-xl p-4 ${theme === 'light' ? 'border border-slate-200 bg-stone-50' : 'border border-white/15 bg-white/5'}`}>
                        <p className={`text-xs uppercase tracking-[0.15em] ${theme === 'light' ? 'text-slate-500' : 'text-slate-300'}`}>Sample Floor Plan</p>
                        <p className={`mt-2 ${theme === 'light' ? 'text-slate-700' : 'text-slate-100'}`}>{current.floorPlan}</p>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={onRequestTour}
                    className="mt-8 rounded-full bg-gold px-6 py-2 text-sm font-semibold uppercase tracking-wider text-navy"
                >
                    Request a Tour
                </button>
            </div>
        </section>
    )
}

export default LeasingPaths
