import { motion } from 'framer-motion'

function ContactFooter({ actions, media, onAction, theme = 'dark' }) {
    return (
        <section
            id="contact"
            className="relative min-h-screen px-6 py-24 md:px-12"
            style={{ backgroundImage: `url(${media.contactBackdrop})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-navy/70 to-black" />
            <motion.div
                className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <p className="text-xs uppercase tracking-[0.2em] text-blueAccent">Close The Opportunity</p>
                <h2 className="mt-3 font-display text-5xl text-white md:text-8xl">Let&apos;s Build The Next Iconic Presence.</h2>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {actions.map((action) => (
                        <button
                            type="button"
                            key={action.label}
                            onClick={() => onAction(action.interest)}
                            className={`rounded-2xl p-5 text-center text-sm font-semibold uppercase tracking-[0.18em] transition hover:scale-[1.02] hover:border-gold hover:text-gold ${theme === 'light' ? 'border border-slate-200 bg-white text-slate-900' : 'border border-white/25 bg-black/35 text-white'}`}
                        >
                            {action.label}
                        </button>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default ContactFooter
