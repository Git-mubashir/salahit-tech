// Central place for site copy and structured content.
// Edit the values here to update text across the whole site
// without touching any component or page markup.

export const site = {
  name: "SalahIT Tech",
  tagline: "Innovation | Solutions | Support",
  shortDescription:
    "Software development and IT support services for growing businesses.", // TODO: replace with real positioning statement
  domain: "salahit.tech", // TODO: replace with the real domain once registered

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  contact: {
    email: "hello@example.com", // TODO: real contact email
    phone: "+1 (000) 000-0000", // TODO: real phone number
    address: "Street Address, City, Country", // TODO: real address
  },

  social: [
    // TODO: add real profile URLs, or remove entries you don't use
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "GitHub", href: "#" },
  ],

  hero: {
    headline: "Software and IT support built around how your business actually runs.",
    subheadline:
      "TODO: replace with a sentence on what SalahIT Tech does best and for whom.",
    primaryCta: { label: "Talk to us", href: "/contact" },
    secondaryCta: { label: "See our services", href: "/services" },
  },

  differentiators: [
    {
      title: "Placeholder differentiator one",
      description: "TODO: describe what makes your delivery process different.",
    },
    {
      title: "Placeholder differentiator two",
      description: "TODO: describe your team's experience or specialization.",
    },
    {
      title: "Placeholder differentiator three",
      description: "TODO: describe your support model or responsiveness.",
    },
  ],

  services: [
    {
      slug: "software-development",
      title: "Custom Software Development",
      summary:
        "TODO: describe your approach to building custom web and mobile applications.",
      points: [
        "Web application development",
        "Mobile app development",
        "API and systems integration",
      ],
    },
    {
      slug: "it-support",
      title: "IT Support & Managed Services",
      summary: "TODO: describe your IT support and helpdesk offering.",
      points: [
        "Helpdesk and troubleshooting",
        "Network and infrastructure management",
        "Cybersecurity and monitoring",
      ],
    },
    {
      slug: "cloud-devops",
      title: "Cloud & DevOps",
      summary: "TODO: describe your cloud migration and DevOps services.",
      points: [
        "Cloud migration and architecture",
        "CI/CD pipeline setup",
        "Monitoring and performance tuning",
      ],
    },
  ],

  about: {
    story: [
      "TODO: paragraph one — how and why SalahIT Tech was started.",
      "TODO: paragraph two — what the company focuses on today.",
    ],
    mission:
      "TODO: one or two sentences on the company's mission or reason for existing.",
    values: [
      { title: "Placeholder value one", description: "TODO" },
      { title: "Placeholder value two", description: "TODO" },
      { title: "Placeholder value three", description: "TODO" },
    ],
  },
} as const;

export type SiteService = (typeof site.services)[number];
