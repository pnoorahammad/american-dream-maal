export const navSections = [
  { id: 'hero', label: 'Hero' },
  { id: 'why', label: 'Why This Property' },
  { id: 'retail', label: 'Retail Environment' },
  { id: 'luxury', label: 'Luxury Wing' },
  { id: 'dining', label: 'Dining & Lifestyle' },
  { id: 'attractions', label: 'Attractions' },
  { id: 'events', label: 'Events' },
  { id: 'sponsorship', label: 'Sponsorship' },
  { id: 'leasing', label: 'Leasing Paths' },
  { id: 'contact', label: 'Contact' },
]

export const heroStats = [
  { label: 'sq ft', value: 3000000, suffix: 'M', formatter: (value) => `${(value / 1000000).toFixed(0)}M` },
  { label: 'retailers', value: 500, suffix: '+', formatter: (value) => `${Math.round(value)}+` },
  { label: 'visitors/year', value: 40000000, suffix: 'M', formatter: (value) => `${(value / 1000000).toFixed(0)}M` },
]

export const whyCards = [
  { title: 'Location', value: '2 miles from NYC', detail: 'Instant access from Manhattan and major NJ corridors.' },
  { title: 'Household Income', value: '$120k+ avg HHI', detail: 'Affluent local and destination shoppers.' },
  { title: 'Regional Draw', value: '50M within 1 hour', detail: 'Dense, diverse and high-frequency visitation.' },
  { title: 'Annual Footfall', value: '40M+', detail: 'One of the most heavily trafficked destinations in America.' },
]

export const retailCategories = [
  {
    name: 'Luxury',
    text: 'Flagship-ready storefronts for heritage houses and next-gen prestige brands.',
    image:
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Fashion',
    text: 'High-turn trend retail with strong omnichannel support and footfall adjacency.',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Beauty',
    text: 'Premium beauty clusters anchored by experiential testing and influencer traffic.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Tech',
    text: 'Interactive, demo-first retail built for high engagement and launch moments.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Kids',
    text: 'Family-first retail adjacencies next to destination attractions and dining.',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
  },
]

export const logoWall = [
  'Aritzia',
  'Apple',
  'Hermes',
  'Zara',
  'Sephora',
  'Nike',
  'Primark',
  'Tiffany & Co.',
  'Uniqlo',
  'Gucci',
]

export const luxuryFeatures = [
  'Dedicated luxury corridor with elevated architecture',
  'Private concierge, valet and white-glove guest services',
  'VIP entrances and premium experiential suites',
]

export const luxuryBrands = ['Louis Vuitton', 'Gucci', 'Hermes', 'Dior', 'Rolex']

export const diningCards = [
  { name: 'Skyline Atelier', type: 'Fine Dining', text: 'Chef-led tasting menus with skyline-facing ambiance.' },
  { name: 'Market District', type: 'Quick Bites', text: 'Fast-casual variety for high-volume daypart traffic.' },
  { name: 'Global Table', type: 'International', text: 'Cross-cultural culinary concepts with destination pull.' },
  { name: 'Studio Kitchen', type: 'Celebrity Chef', text: 'Media-friendly signature concepts built for social buzz.' },
  { name: 'Parkside Social', type: 'Lifestyle Bar', text: 'Late-night lounge format extending dwell time into evening.' },
  { name: 'Family Commons', type: 'All-Day Dining', text: 'Broad menu format designed for multi-generational groups.' },
]

export const attractions = [
  {
    name: 'Nickelodeon Universe',
    description: 'The largest indoor theme park in the Western Hemisphere.',
    image:
      'https://images.unsplash.com/photo-1544551763-7ef420d3d0a3?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Big SNOW',
    description: 'Year-round indoor ski and snowboard terrain.',
    image:
      'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'DreamWorks Water Park',
    description: 'All-season indoor water adventures for family audiences.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'The Rink',
    description: 'Premium ice programming for sport and spectacle.',
    image:
      'https://images.unsplash.com/photo-1488866022504-f2584929ca5f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Mini Golf',
    description: 'Immersive family competition and group entertainment.',
    image:
      'https://images.unsplash.com/photo-1508979828023-e95f1d87f976?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Observation Deck',
    description: 'Skyline views engineered for social capture and premium events.',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80',
  },
]

export const eventTypes = [
  'Concerts',
  'Brand Activations',
  'Celebrity Appearances',
  'Product Launches',
  'Corporate Events',
  'Conventions',
]

export const highlightEvents = [
  { name: 'Global Tech Product Reveal', scale: '12,000 attendees · multi-stage production' },
  { name: 'Holiday Spectacle Series', scale: '30-day campaign · 8M impressions' },
  { name: 'Luxury Fashion Weekend', scale: 'VIP-first runway + private shopping suites' },
]

export const venueSpecs = [
  { label: 'Max Capacity', value: '20,000+' },
  { label: 'Flexible Event Space', value: '350,000 sq ft' },
  { label: 'Ceiling Height', value: 'Up to 70 ft' },
  { label: 'Production', value: 'Broadcast-grade AV + rigging' },
]

export const partnershipTiers = [
  {
    name: 'Title Sponsor',
    desc: 'Campus-scale naming presence and marquee placements across key attractions.',
  },
  {
    name: 'Premier Partner',
    desc: 'Omnichannel campaigns with high-traffic media inventory and events access.',
  },
  {
    name: 'Category Partner',
    desc: 'Industry-exclusive positioning inside targeted audience zones.',
  },
  {
    name: 'Activation Partner',
    desc: 'Seasonal pop-ins, immersive takeovers and campaign-ready flexible spaces.',
  },
]

export const audienceData = [
  { label: 'Gen Z / Millennial', value: 46 },
  { label: 'HHI $100k+', value: 58 },
  { label: 'Repeat Monthly Visits', value: 64 },
  { label: 'Family Group Visits', value: 51 },
]

export const leasingTabs = [
  {
    key: 'luxury',
    title: 'Luxury Retail',
    copy: 'Anchor your brand in a curated high-spend corridor built for prestige and private clientele.',
    range: '2,500 to 15,000 sq ft',
    floorPlan: 'Private boutique frontage with VIP circulation paths.',
  },
  {
    key: 'fashion',
    title: 'Fashion & Lifestyle',
    copy: 'Capture trend-forward shoppers through high-visibility storefronts and category adjacencies.',
    range: '1,500 to 12,000 sq ft',
    floorPlan: 'Modular inline units with immersive storefront options.',
  },
  {
    key: 'fb',
    title: 'F&B',
    copy: 'Own high-dwell dining corridors with all-day traffic from attractions and events.',
    range: '800 to 10,000 sq ft',
    floorPlan: 'Utility-ready footprints for fast-casual to chef-driven concepts.',
  },
  {
    key: 'popup',
    title: 'Pop-Up & Experiential',
    copy: 'Launch campaigns fast with high-impact, short-term experiential inventory.',
    range: '300 to 5,000 sq ft',
    floorPlan: 'Flexible activation pads near the highest-traffic nodes.',
  },
]

export const contactActions = [
  { label: 'Lease Space', interest: 'Leasing' },
  { label: 'Become a Sponsor', interest: 'Sponsorship' },
  { label: 'Book a Venue', interest: 'Events' },
]

export const media = {
  heroVideo: 'https://cdn.coverr.co/videos/coverr-modern-shopping-mall-1579/1080p.mp4',
  heroFallbackImage:
    'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1920&q=80',
  aerialImage:
    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2000&q=80',
  diningLoop:
    'https://cdn.coverr.co/videos/coverr-people-eating-at-a-restaurant-1576/1080p.mp4',
  contactBackdrop:
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2000&q=80',
  americanDreamPromo: 'https://www.youtube.com/watch?v=...',
}
