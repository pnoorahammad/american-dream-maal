import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import WhyThisProperty from './components/WhyThisProperty'
import RetailSection from './components/RetailSection'
import LuxurySection from './components/LuxurySection'
import DiningSection from './components/DiningSection'
import AttractionsSection from './components/AttractionsSection'
import EventsSection from './components/EventsSection'
import SponsorshipModule from './components/SponsorshipModule'
import LeasingPaths from './components/LeasingPaths'
import ContactFooter from './components/ContactFooter'
import ContactModal from './components/ContactModal'
import {
  navSections,
  heroStats,
  whyCards,
  retailCategories,
  logoWall,
  luxuryFeatures,
  luxuryBrands,
  diningCards,
  attractions,
  eventTypes,
  highlightEvents,
  venueSpecs,
  partnershipTiers,
  audienceData,
  leasingTabs,
  contactActions,
  media,
} from './data/stats'

function App() {
  const [showHeader, setShowHeader] = useState(false)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [activeModal, setActiveModal] = useState('')
  const [theme, setTheme] = useState(() => localStorage.getItem('deckTheme') || 'dark')

  useEffect(() => {
    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const next = Math.min(100, Math.round((elapsed / 1500) * 100))
      setProgress(next)
      if (elapsed >= 1500) {
        clearInterval(interval)
        setLoading(false)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setShowHeader(window.scrollY > window.innerHeight * 0.55)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('deckTheme', theme)
  }, [theme])

  const scrollToHub = () => {
    const hub = document.getElementById('why')
    hub?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={`theme-shell min-h-screen transition-colors duration-500 ${theme === 'light' ? 'bg-stone-100 text-slate-900' : 'bg-black text-white'
        }`}
    >
      {loading && (
        <div className={`fixed inset-0 z-[70] grid place-items-center ${theme === 'light' ? 'bg-stone-100' : 'bg-navy'}`}>
          <div className="w-full max-w-md px-8 text-center">
            <p className="font-display text-6xl text-gold">AMERICAN DREAM</p>
            <p className={`mt-3 text-xs uppercase tracking-[0.18em] ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
              Preparing Experience
            </p>
            <div className="mt-8 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-gold transition-all duration-200" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      )}

      <NavBar
        sections={navSections}
        isVisible={showHeader}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      />
      <Hero stats={heroStats} media={media} onExplore={scrollToHub} />
      <WhyThisProperty cards={whyCards} media={media} theme={theme} />
      <RetailSection categories={retailCategories} logos={logoWall} theme={theme} />
      <LuxurySection features={luxuryFeatures} brands={luxuryBrands} theme={theme} />
      <DiningSection cards={diningCards} media={media} theme={theme} />
      <AttractionsSection attractions={attractions} theme={theme} />
      <EventsSection
        eventTypes={eventTypes}
        highlights={highlightEvents}
        specs={venueSpecs}
        theme={theme}
        onBookEvent={() => setActiveModal('Events')}
      />
      <SponsorshipModule
        tiers={partnershipTiers}
        audience={audienceData}
        theme={theme}
        onExplorePartnership={() => setActiveModal('Sponsorship')}
      />
      <LeasingPaths tabs={leasingTabs} theme={theme} onRequestTour={() => setActiveModal('Leasing')} />
      <ContactFooter actions={contactActions} media={media} theme={theme} onAction={setActiveModal} />

      <ContactModal
        open={Boolean(activeModal)}
        type={activeModal}
        onClose={() => setActiveModal('')}
        theme={theme}
      />
    </div>
  )
}

export default App
