import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

function StatCounter({ label, value, formatter }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => formatter(latest))

    useEffect(() => {
        const controls = animate(count, value, { duration: 1.8, ease: 'easeOut' })
        return () => controls.stop()
    }, [count, value])

    return (
        <div className="rounded-2xl border border-white/15 bg-black/45 px-5 py-4 text-center backdrop-blur">
            <motion.p className="font-display text-4xl leading-none text-gold md:text-5xl">{rounded}</motion.p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-200">{label}</p>
        </div>
    )
}

function Hero({ stats, media, onExplore }) {
    const [muted, setMuted] = useState(true)

    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-24 md:px-12"
            style={{ backgroundImage: `url(${media.heroFallbackImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src={media.heroVideo}
                autoPlay
                loop
                playsInline
                muted={muted}
                preload="metadata"
                poster={media.heroFallbackImage}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-navy/70 to-black" />

            <button
                type="button"
                onClick={() => setMuted((prev) => !prev)}
                className="absolute right-6 top-6 z-20 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs uppercase tracking-widest text-white transition hover:border-gold hover:text-gold"
            >
                {muted ? 'Unmute' : 'Mute'}
            </button>

            <div className="relative z-10 mx-auto w-full max-w-7xl">
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
                >
                    East Rutherford, New Jersey
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.95, delay: 0.12 }}
                    className="font-display text-5xl leading-[0.9] text-white sm:text-7xl lg:text-9xl"
                >
                    AMERICAN DREAM
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.24 }}
                    className="mt-6 max-w-2xl text-base text-slate-100 md:text-2xl"
                >
                    The Most Visited Destination in the Western Hemisphere
                </motion.p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {stats.map((item) => (
                        <StatCounter key={item.label} label={item.label} value={item.value} formatter={item.formatter} />
                    ))}
                </div>

                <motion.button
                    type="button"
                    onClick={onExplore}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-10 rounded-full border border-gold bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-navy transition hover:scale-105 hover:shadow-2xl"
                >
                    Explore the Opportunity
                </motion.button>
            </div>
        </section>
    )
}

export default Hero
