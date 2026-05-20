export const cv = {
  name: "Alexi Claasen",
  role: "Key Account Manager — Regional Sales",
  edition: "Curriculum Vitae · 2026",
  location: "Pretoria, South Africa",
  phone: "+27 76 511 2868",
  phoneTel: "+27765112868",
  email: "dalexi.claasen@gmail.com",
  tagline:
    "Ten years turning contractor relationships into regional revenue across KwaZulu-Natal and Gauteng — built on quiet follow-through, accurate pricing, and showing up on site.",
  taglineShort:
    "A decade of disciplined key-account management across South Africa's contractor and trade markets.",
  taglineBold:
    "Client relationships are won on follow-through. I've spent ten years proving it across KZN and Gauteng.",
  stats: [
    { num: "10+", label: "Years in\nSales" },
    { num: "02", label: "Regions\nServed" },
    { num: "03", label: "Internal\nPromotions" },
    { num: "01", label: "Long-term\nEmployer" },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Afrikaans", level: "Fluent" },
    { name: "Zulu", level: "Conversational" },
  ],
  education: [
    {
      school: "University of Potchefstroom",
      detail: "First Year — Bachelor's Studies\n(NWU PUKKE) · 2011",
    },
    {
      school: "Hoërskool Secunda",
      detail: "Matriculated with Exemption · 2010",
    },
  ],
  regions: [
    { name: "KwaZulu-Natal", years: "8+ yrs" },
    { name: "Gauteng", years: "3+ yrs" },
  ],
  profileLead:
    "Sales and key account professional with 10+ years in building materials, contractor sales, retail operations, and regional account management across South Africa.",
  profileBody:
    "Skilled in client relationship management, quoting, pricing, order coordination, and stock follow-up across KZN and Gauteng. Known for practical problem-solving, strong follow-through, and managing multiple client requirements in high-pressure environments.",
  skills: [
    { name: "Key Account Management", value: 96 },
    { name: "Order Management & Fulfilment", value: 90 },
    { name: "Client Relationships", value: 94 },
    { name: "Stock Coordination & Delivery", value: 86 },
    { name: "Contractor & Trade Sales", value: 92 },
    { name: "Site Inspections", value: 82 },
    { name: "Quoting & Pricing", value: 90 },
    { name: "Competitive Market Awareness", value: 80 },
    { name: "Retail Sales Operations", value: 82 },
    { name: "Sales Administration", value: 78 },
  ],
  experience: [
    {
      title: "Sales Representative",
      company: "Massbuild",
      period: "Jan 2021 — Present",
      location: "KZN & Gauteng",
      blurb:
        "Promoted internally to manage a larger client base and higher-volume sales activity across multiple regions in South Africa, with expanded ownership of account financials and credit control.",
      bullets: [
        "Manage an expanded portfolio of contractor and trade accounts across KZN and Gauteng, owning the full customer lifecycle from quotation through delivery.",
        "Prepare sales quotations, process orders, and coordinate stock availability and on-site delivery logistics for client-specific requirements.",
        "Collect and control customer funding — managing account balances, payment follow-up, and overdue exposure across an active client base.",
        "Collaborate closely with the pre-legal team on disputed and high-risk accounts to recover funds while protecting long-term client relationships.",
        "Build and maintain long-term client relationships through consistent communication, accurate pricing, and reliable follow-through.",
        "Liaise between clients and internal sales, stock, and delivery teams to ensure accurate, on-time order fulfilment.",
      ],
    },
    {
      title: "Key Account Manager",
      company: "Massbuild",
      period: "Jan 2015 — Dec 2020",
      location: "KZN & Gauteng",
      blurb:
        "Advanced from Sales Co-Ordinator after strong performance, taking ownership of high-value client relationships and regional revenue growth.",
      bullets: [
        "Managed a portfolio of high-value contractor and trade accounts across two key South African regions.",
        "Drove revenue growth through proactive account management, tailored client solutions, and long-term partnership building.",
        "Coordinated client-specific projects end-to-end — from quoting and pricing through order fulfilment and on-site delivery.",
        "Oversaw pricing, buying, and stock orders to ensure accuracy and availability across active client portfolios.",
        "Conducted site inspections to verify delivery requirements, resolve issues, and strengthen client trust.",
        "Built long-term partnerships with key clients, supporting consistent repeat business and regional performance.",
      ],
    },
    {
      title: "Sales Co-Ordinator",
      company: "Massbuild",
      period: "Sep 2014 — Dec 2014",
      location: "Marburg, KZN",
      blurb:
        "Entry role into the business; promoted internally to Key Account Manager based on performance.",
      bullets: [
        "Managed contractor-specific quotes and order coordination for active retail and trade customers.",
        "Coordinated stock deliveries to site, supporting accurate and timely fulfilment.",
        "Handled accounts, pricing, and stock takes within a fast-paced retail operations environment.",
        "Supported day-to-day retail operations, building the commercial foundation for progression into account management.",
      ],
    },
  ],
  references: [
    { name: "Mr. Riaan du Plessis", company: "Massbuild", phone: "+27 39 940 0311" },
    { name: "Mr. Zunaid Habib", company: "Massbuild", phone: "+27 82 893 3503" },
  ],
} as const;

export type ThemeKey = "forest" | "clay" | "ink" | "navy";

export const themes: Record<ThemeKey, { hero: string; paper: string; ink: string; label: string }> = {
  forest: { hero: "#1f5a3b", paper: "#eef0e6", ink: "#14241c", label: "Forest" },
  clay:   { hero: "#a64a26", paper: "#f6efe1", ink: "#15110d", label: "Clay" },
  ink:    { hero: "#d2a35b", paper: "#221d18", ink: "#f1ead9", label: "Ink" },
  navy:   { hero: "#1a3e7c", paper: "#ffffff", ink: "#0c1a36", label: "Navy" },
};
