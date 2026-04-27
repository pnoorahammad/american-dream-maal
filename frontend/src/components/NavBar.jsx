import { useMemo, useState } from 'react'

function NavBar({ sections, isVisible, theme, onToggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const links = useMemo(() => sections.filter((section) => section.id !== 'hero'), [sections])

    return (
        <>
            <header
                className={`fixed left-0 right-0 top-0 z-50 border-b px-4 py-3 backdrop-blur transition-all duration-500 ${theme === 'light' ? 'border-slate-200 bg-white/90' : 'border-white/10 bg-navy/90'
                    } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
                    <a href="#hero" className={`font-display text-2xl ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                        American Dream
                    </a>
                    <nav className="hidden items-center gap-5 text-sm lg:flex">
                        {links.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`transition hover:text-gold ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={onToggleTheme}
                            className={`rounded border px-3 py-1 text-[10px] uppercase tracking-widest transition hover:border-gold hover:text-gold ${theme === 'light' ? 'border-slate-300 text-slate-700' : 'border-white/25 text-white'
                                }`}
                        >
                            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        </button>
                        <button
                            type="button"
                            className={`rounded border px-3 py-1 text-xs uppercase tracking-widest lg:hidden ${theme === 'light' ? 'border-slate-300 text-slate-700' : 'border-white/25 text-white'
                                }`}
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            Menu
                        </button>
                    </div>
                </div>
            </header>

            <aside
                className={`fixed right-4 top-1/2 z-40 hidden min-w-[11rem] -translate-y-1/2 flex-col gap-2 rounded-[2rem] border px-3 py-4 text-center backdrop-blur md:flex ${theme === 'light' ? 'border-slate-200 bg-white/85' : 'border-white/20 bg-black/50'
                    }`}
            >
                {links.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`rounded-full px-2 py-1 text-center text-[11px] uppercase tracking-[0.2em] transition hover:bg-gold hover:text-navy ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'
                            }`}
                    >
                        {item.label.split(' ')[0]}
                    </a>
                ))}
            </aside>

            {menuOpen && (
                <div className={`fixed inset-0 z-50 px-8 py-20 lg:hidden ${theme === 'light' ? 'bg-white/95' : 'bg-navy/95'}`}>
                    <button
                        type="button"
                        onClick={() => setMenuOpen(false)}
                        className={`absolute right-6 top-6 rounded border px-3 py-1 text-xs uppercase ${theme === 'light' ? 'border-slate-300 text-slate-700' : 'border-white/30 text-white'
                            }`}
                    >
                        Close
                    </button>
                    <div className="grid gap-5">
                        {links.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setMenuOpen(false)}
                                className={`border-b pb-3 font-display text-3xl ${theme === 'light' ? 'border-slate-200 text-slate-900' : 'border-white/10 text-white'
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <nav
                className={`fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t px-2 py-2 md:hidden ${theme === 'light' ? 'border-slate-200 bg-white/95' : 'border-white/10 bg-black/85'
                    }`}
            >
                {links.slice(0, 5).map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`px-1 text-center text-[10px] uppercase tracking-wide ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'
                            }`}
                    >
                        {item.label.split(' ')[0]}
                    </a>
                ))}
            </nav>
        </>
    )
}

export default NavBar
