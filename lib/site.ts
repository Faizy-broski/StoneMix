export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const

/*
 * Images and videos are served from the GitHub repo through the jsDelivr CDN
 * rather than from this app's /public. On Vercel the URLs are pinned to the
 * deployed commit, so they always match the code and jsDelivr caches them
 * permanently; elsewhere they follow `main`. Set NEXT_PUBLIC_ASSET_BASE to
 * override the base, e.g. "" to use the local /public while developing.
 */
const ASSET_BASE =
  process.env.NEXT_PUBLIC_ASSET_BASE ??
  `https://cdn.jsdelivr.net/gh/Faizy-broski/StoneMix@${
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "main"
  }/public`

export const asset = (path: `/${string}`) => `${ASSET_BASE}${path}`

export const ASSETS = {
  logo: asset("/images/logo.svg"),
  hero: asset("/images/hero-bg.svg"),
  heroVideo: asset("/vid/hero-bg.mp4"),
  material: asset("/images/material.svg"),
  materialVideo: asset("/vid/material.mp4"),
  materialBackdrop: asset("/images/material-bg.svg"),
  servicesBackdrop: asset("/images/services-bg.svg"),
  truck: asset("/images/truck.svg"),
  statsVideo: asset("/vid/stats.mp4"),
  chooseVideo: asset("/vid/choose.mp4"),
  // Served from this app's /public until they are pushed for the CDN.
  faqBackdrop: "/images/faq.svg",
  footerBackdrop: "/images/footer-bg.svg",
} as const

// `body` is split where the desktop design breaks the line.
export const REASONS = [
  {
    title: "Quality You Can Rely On",
    body: [
      "We use quality materials and suitable concrete",
      "mixes for residential, commercial and construction projects.",
    ],
  },
  {
    title: "Concrete When You Need It",
    body: [
      "We offer flexible quantities, mix-on-site supply",
      "and pumping options to meet different site requirements.",
    ],
  },
] as const

export const OUTCOMES = [
  { name: "Coastal House", tags: "Ready mix / Pumping", image: asset("/images/outcome1.svg"), width: 1268, height: 828 },
  { name: "Civic Structure", tags: "Supply / Delivery", image: asset("/images/outcome2.svg"), width: 807, height: 810 },
] as const

export const STATS = [
  { value: "15+", label: "Years" },
  { value: "500+", label: "Projects" },
  { value: "30+", label: "Active sites" },
  { value: "04", label: "Locations" },
] as const

export const SERVICES = [
  { title: "Ready Mix Concrete", tags: ["Consistent", "Controlled", "Ready"], image: asset("/images/s1.svg") },
  { title: "Mix on Site", tags: ["Adaptable", "Precise", "Fresh"], image: asset("/images/s2.svg") },
  { title: "Concrete Pumping", tags: ["Reach", "Flow", "Accuracy"], image: asset("/images/s3.svg") },
  { title: "Supply & Delivery", tags: ["Timed", "Tracked", "Reliable"], image: asset("/images/s4.svg") },
] as const

/*
 * Material lab callouts, in design px (1440 frame). `label` is the top-left of
 * the "/ 0N" tag, `line` is [start x, elbow x, y] of the rule, and the rule
 * then runs from the elbow to `dot` on the truck.
 */
export const TRUCK_PARTS = [
  { name: "Drum mixer", label: [195.3, 397.7], line: [192.3, 395.5, 477.1], dot: [430.2, 507.9] },
  { name: "Chute", label: [195.3, 576.1], line: [192.3, 396.6, 655.6], dot: [430.2, 686.4] },
  { name: "Capacity", label: [1044.8, 397.7], line: [1193.6, 1015.3, 477.1], dot: [890.8, 582.3] },
  { name: "Engine", label: [1181.4, 561.8], line: [1296.1, 1128.8, 639], dot: [1093, 670.4] },
] as const

export const MATERIALS = [
  { name: "Stone", label: "Aggregate", share: "55%" },
  { name: "Cement", label: "Cement", share: "15%" },
  { name: "Water", label: "Water", share: "30%" },
] as const

export const REVIEWS = [
  {
    name: "Michael Brown",
    role: "Owner of Urban Events",
    body: "Highly recommended, customer service is their core which is no common nowdays. I had to make changes to my order but it was received with politeness, not frustration.",
  },
  {
    name: "Michael Brown",
    role: "Owner of Urban Events",
    body: "Highly recommended, customer service is their core which is no common nowdays. I had to make changes to my order but it was received with politeness, not frustration.",
  },
  {
    name: "Michael Brown",
    role: "Owner of Urban Events",
    body: "Highly recommended, customer service is their core which is no common nowdays. I had to make changes to my order but it was received with politeness, not frustration.",
  },
] as const

export const FAQS = [
  {
    question: "What concrete services do you provide?",
    answer:
      "We supply ready mix concrete, mix-on-site concrete, liquid and dry screed, and concrete pump services for residential and commercial projects.",
  },
  {
    question: "Do you mix concrete on site?",
    answer:
      "Yes. Our volumetric trucks mix concrete fresh on site, so you get exactly the quantity you need and only pay for what you use.",
  },
  {
    question: "Do you supply both dry and liquid screed?",
    answer:
      "Yes. We supply traditional dry screed and free-flowing liquid screed, suitable for underfloor heating and large floor areas.",
  },
  {
    question: "Do you provide concrete pump hire?",
    answer:
      "Yes. Our concrete pumping service places concrete accurately where trucks can't reach, from back gardens to upper floors.",
  },
  {
    question: "Can you supply concrete for small projects?",
    answer:
      "Absolutely. We offer flexible quantities, so we can deliver for anything from a single footing or patio base to a full site pour.",
  },
] as const

export const AREAS = ["Local Area", "Nearby Areas", "Surrounding Communities", "Residential Areas"] as const

// Placeholder shots until the gallery photos are added to /public/images.
export const GALLERY = [
  { image: asset("/images/s1.svg"), alt: "Ready mix concrete truck" },
  { image: asset("/images/s2.svg"), alt: "Mix on site truck" },
  { image: asset("/images/s3.svg"), alt: "Concrete pumping" },
  { image: asset("/images/s4.svg"), alt: "Supply and delivery" },
  { image: asset("/images/outcome1.svg"), alt: "Coastal house project" },
  { image: asset("/images/outcome2.svg"), alt: "Civic structure project" },
] as const

export const CONTACT = {
  address: "stonemix.uk",
  email: "info@stonemix.co.uk",
  phone: "+44 (0) 123 456 7890",
  phoneHref: "tel:+441234567890",
} as const

export const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const
