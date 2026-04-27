import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const defaultForm = {
    name: '',
    company: '',
    email: '',
    interest: 'Leasing',
    message: '',
}

function ContactModal({ open, type, onClose, theme }) {
    const [formData, setFormData] = useState(defaultForm)
    const [status, setStatus] = useState('idle')
    const [feedback, setFeedback] = useState('')

    useEffect(() => {
        if (!open) return
        setFormData((prev) => ({ ...prev, interest: type || 'Leasing' }))
        setStatus('idle')
        setFeedback('')
    }, [open, type])

    const inputClass =
        theme === 'light'
            ? 'rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-500'
            : 'rounded-xl border border-white/20 bg-black/30 px-4 py-3'

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setStatus('submitting')
        setFeedback('')

        const endpoint = import.meta.env.VITE_LEAD_FORM_ENDPOINT
        const payload = {
            ...formData,
            source: 'American Dream Interactive Deck',
            submittedAt: new Date().toISOString(),
        }

        try {
            if (endpoint) {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                })

                if (!response.ok) {
                    throw new Error('Lead submission failed')
                }

                setStatus('success')
                setFeedback('Thanks. Your inquiry is in. Our commercial team will follow up shortly.')
                setFormData((prev) => ({ ...defaultForm, interest: prev.interest }))
                return
            }

            await new Promise((resolve) => setTimeout(resolve, 700))
            setStatus('success')
            setFeedback('Success preview: set VITE_LEAD_FORM_ENDPOINT to connect this form to your CRM endpoint.')
        } catch {
            setStatus('error')
            setFeedback('Submission failed. Please try again or contact the leasing team directly.')
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={(event) => event.stopPropagation()}
                        className={`w-full max-w-2xl rounded-3xl border p-8 shadow-2xl ${theme === 'light'
                                ? 'border-slate-300 bg-white text-slate-900'
                                : 'border-white/20 bg-navy text-white'
                            }`}
                    >
                        <h3 className="font-display text-4xl">{type}</h3>
                        <p className={`mt-2 ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
                            Tell us about your goals and our team will contact you within one business day.
                        </p>
                        <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder="Name"
                                required
                            />
                            <input
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className={inputClass}
                                placeholder="Company"
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`${inputClass} sm:col-span-2`}
                                placeholder="Email"
                                required
                            />
                            <select
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className={`${inputClass} sm:col-span-2`}
                            >
                                <option>Leasing</option>
                                <option>Sponsorship</option>
                                <option>Events</option>
                            </select>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className={`${inputClass} sm:col-span-2`}
                                placeholder="Message"
                                required
                            />
                            {feedback && (
                                <p
                                    className={`sm:col-span-2 text-sm ${status === 'error' ? 'text-red-400' : 'text-green-400'
                                        }`}
                                >
                                    {feedback}
                                </p>
                            )}
                            <div className="sm:col-span-2 flex items-center justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className={`rounded-full border px-5 py-2 text-sm ${theme === 'light' ? 'border-slate-300 text-slate-700' : 'border-white/30'
                                        }`}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="rounded-full bg-gold px-6 py-2 text-sm font-semibold text-navy disabled:opacity-60"
                                >
                                    {status === 'submitting' ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ContactModal
