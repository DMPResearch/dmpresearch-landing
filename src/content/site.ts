export const contact = {
  email: 'hello@flowstarter.dev',
  href: 'mailto:hello@flowstarter.dev?subject=Build%20with%20DMPResearch',
  investorHref: 'mailto:hello@flowstarter.dev?subject=Investor%20conversation%20with%20DMPResearch',
  careersHref: 'mailto:hello@flowstarter.dev?subject=Freelance%20%2F%20contract%20with%20DMPResearch',
  sectionHref: '#contact',
  github: 'https://github.com/DMPResearch',
  label: 'Build with us',
  bookLabel: 'Book a call',
  bookFallback: 'Open Calendly in a new tab',
  calendlyUrl: 'https://calendly.com/flowstarter-app/discovery',
};

export const meta = {
  title: 'DMPResearch | Premium apps and digital products',
  description:
    'Automate the mundane. Amplify the human. Premium websites, web apps, and product systems that give people leverage, not a replacement.',
};

export const pages = {
  about: {
    title: 'About | DMPResearch',
    description:
      'We build the apps and websites we wished existed: an easier way to create with AI, without losing human judgment. Led by Darius and Dorin.',
  },
  investors: {
    title: 'Investors | DMPResearch',
    description:
      'A product studio with live apps in market, building toward a connected ecosystem that automates tedious work while people keep judgment. Open to operators and investors who care about durable craft.',
  },
  careers: {
    title: 'Careers and contracting | DMPResearch',
    description:
      'Freelance and contract with DMPResearch. Extend a focused human team shipping real products, not pitch decks.',
  },
};

export const nav = [
  { label: 'Products', href: '/#products' },
  { label: 'Work', href: '/#work' },
  { label: 'Vision', href: '/#vision' },
  { label: 'About', href: '/#about' },
  { label: 'Investors', href: '/#investors' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export const hero = {
  kicker: 'Product studio',
  titleLead: 'Premium apps and digital products',
  titleAccent: 'made for people',
  text: 'Websites, web apps, and the systems behind them. We built what we wished existed: an easy way to create with AI, with people still deciding what ships.',
  primary: { label: 'Book a call', href: '#contact' },
  secondary: { label: 'See our work', href: '/#products' },
};

export interface ProductScreen {
  id: string;
  label: string;
  imageLight: string;
  imageDark: string;
  imageAlt: string;
  chrome: string;
}

export interface Product {
  id: string;
  index: string;
  name: string;
  tint: 'blue' | 'olive';
  mark: string;
  imageLight: string;
  imageDark: string;
  imageAlt: string;
  title: string;
  text: string;
  points: string[];
  link: { label: string; href: string };
  facts: { term: string; detail: string }[];
  screens: ProductScreen[];
  screensLabel: string;
}

export const products: Product[] = [
  {
    id: 'flowstarter',
    index: '01',
    name: 'Flowstarter',
    tint: 'blue',
    mark: '/flowstarter.svg',
    imageLight: '/images/flowstarter-site-light.webp',
    imageDark: '/images/flowstarter-site-dark.webp',
    imageAlt: 'Screenshot of the Flowstarter website',
    title: 'A website factory for service businesses',
    text: 'Mostly self-serve: service businesses start in Flowstarter and shape their site with AI. We step in for polish, clearer wording when messages are ambiguous, and the moments a constrained editor should not decide alone.',
    points: [
      'Self-serve from first draft through a live site',
      'AI helps you update content without breaking the build',
      'We join for polish, ambiguous copy, and hard edges',
    ],
    link: { label: 'Visit flowstarter.net', href: 'https://flowstarter.net' },
    facts: [
      { term: 'Status', detail: 'Live' },
      { term: 'Wedge', detail: 'Professional websites' },
      { term: 'Model', detail: 'Self-serve, with human polish' },
    ],
    screensLabel: 'More from Flowstarter',
    screens: [
      {
        id: 'site',
        label: 'Marketing site',
        imageLight: '/images/flowstarter-site-light.webp',
        imageDark: '/images/flowstarter-site-dark.webp',
        imageAlt: 'Flowstarter marketing site hero',
        chrome: 'flowstarter.net',
      },
      {
        id: 'process',
        label: 'Preview-first process',
        imageLight: '/images/flowstarter-process-light.webp',
        imageDark: '/images/flowstarter-process-dark.webp',
        imageAlt: 'Flowstarter preview-first process section',
        chrome: 'flowstarter.net/#process',
      },
      {
        id: 'editor',
        label: 'Smart editor',
        imageLight: '/images/flowstarter-editor-light.webp',
        imageDark: '/images/flowstarter-editor-dark.webp',
        imageAlt: 'Flowstarter dashboard and smart editor',
        chrome: 'flowstarter.net/#editor-showcase',
      },
    ],
  },
  {
    id: 'ereno',
    index: '02',
    name: 'Ereno',
    tint: 'olive',
    mark: '/ereno.svg',
    imageLight: '/images/ereno-app-light.webp?v=20260911',
    imageDark: '/images/ereno-app-dark.webp?v=20260911',
    imageAlt: 'Screenshot of the Ereno home screen with trip, base, and ask modes',
    title: 'A trip planner that shows its sources',
    text: 'Ereno is a web app for planning trips and scouting places to stay. You describe what you want in plain language. It pulls research, compares options, and keeps the trade-offs visible. It does not book anything. You book with the provider.',
    points: [
      'Plan a trip or compare places to stay in one conversation',
      'Every suggestion links back to its sources',
      'No booking layer. You book directly with the provider.',
    ],
    link: { label: 'Open the Ereno app', href: 'https://ereno.flowstarter.dev/app' },
    facts: [
      { term: 'Status', detail: 'Live' },
      { term: 'Wedge', detail: 'Travel planning' },
      { term: 'Type', detail: 'Web app, built in-house' },
    ],
    screensLabel: 'More from Ereno',
    screens: [
      {
        id: 'app',
        label: 'App home',
        imageLight: '/images/ereno-app-light.webp?v=20260911',
        imageDark: '/images/ereno-app-dark.webp?v=20260911',
        imageAlt: 'Ereno app home with trip, base, and ask modes',
        chrome: 'ereno.flowstarter.dev/app',
      },
      {
        id: 'site',
        label: 'Marketing site',
        imageLight: '/images/ereno-site-light.webp?v=20260911',
        imageDark: '/images/ereno-site-dark.webp?v=20260911',
        imageAlt: 'Ereno marketing site hero',
        chrome: 'ereno.flowstarter.dev',
      },
    ],
  },
];

export const work = {
  kicker: 'Client work',
  title: 'Sites we shipped for other people',
  text: 'Same bar as our own products. Agents draft. We decide. Every link below is live.',
  items: [
    {
      id: 'ux-journey',
      title: 'UX Journey',
      meta: 'Coaching · Live · 2026',
      kicker:
        'Coaching site for a senior UX practitioner. Copy, calendar, and credibility on one domain.',
      image: '/images/work/ux-journey.webp',
      href: 'https://ux-journey.com/',
      hrefLabel: 'ux-journey.com',
    },
    {
      id: 'lebadusul',
      title: 'Lebădușul',
      meta: 'Retail · Live · 2026',
      kicker: 'Tackle shop on the Danube. Catalog and checkout for anglers who know what they want.',
      image: '/images/work/lebadusul.webp',
      href: 'https://lebadusularticoledepescuit.ro/',
      hrefLabel: 'lebadusularticoledepescuit.ro',
    },
    {
      id: 'dorin-portfolio',
      title: 'Creative Portfolio',
      meta: 'Portfolio · Starter · Live',
      kicker:
        "Dorin's portfolio starter from the Flowstarter library. A real starting point, not a demo.",
      image: '/images/work/dorin-portfolio.webp',
      href: 'https://flowstarter.net/library/templates/dorin-portfolio',
      hrefLabel: 'View in Flowstarter library',
    },
  ],
};

export const ambition = {
  kicker: 'Philosophy',
  title: 'Automate the mundane. Amplify the human.',
  text: 'We build technology that amplifies human capability. We automate the repetitive, the logistical, and the computationally heavy so people can focus on judgment, creativity, relationships, and building what matters.',
  points: [
    {
      title: 'Leverage, not replacement',
      text: 'AI should not remove humans from the equation. It should give them leverage.',
    },
    {
      title: 'Automate the mundane',
      text: 'Research, drafting, logistics, and the computationally heavy work. Agents handle volume so people keep the parts that need taste.',
    },
    {
      title: 'Connected, still human',
      text: 'Flowstarter, Ereno, and what comes next should share context and take tedious day-to-day work off people’s plates, without handing judgment to a model.',
    },
  ],
  cta: { label: contact.bookLabel, href: contact.sectionHref },
};

export const investors = {
  kicker: 'For investors',
  title: 'Backing a studio that ships products, then connects them',
  text: 'Live products are already in market. The long game is a connected ecosystem that automates tedious day-to-day work while people keep control. If that thesis fits, we would like to talk.',
  summary:
    'Two live products, client work that funds craft, and a clear path toward a connected ecosystem. Automate the mundane. Amplify the human. Talk with us if that thesis fits.',
  highlights: ['Products in market', 'Ecosystem thesis', 'Humans keep judgment'],
  pageKicker: 'Investors',
  pageTitle: 'Invest in software that ships, then compounds',
  pageLead:
    'Most AI products today are thin chat wrappers with a landing page. We take the opposite bet: ship real apps people open more than once, prove the wedge, then connect those apps so context and automation travel with the user. Flowstarter and Ereno are live. Client work keeps us paid and honest. The long game is a portfolio of specialized tools that take tedious day-to-day work off people’s plates without handing judgment to a model.',
  thesisKicker: 'Thesis',
  thesisTitle: 'What we believe',
  thesis: [
    {
      title: 'Products first',
      text: 'Platform stories without users are fiction. Flowstarter and Ereno are in market now. Client sites pay for taste and speed, and they force us to ship something a stranger will open. Vertical excellence comes before horizontal expansion.',
    },
    {
      title: 'Ecosystem next',
      text: 'Once a few products work, shared identity and shared context matter more than another isolated app. Users should not re-explain their life in every tab. We extract the repeated machinery later, after the products earn it.',
    },
    {
      title: 'Amplify the human',
      text: 'AI should not remove people from the equation. It should give them leverage. We automate the repetitive, the logistical, and the computationally heavy. People keep creativity, relationships, accountability, and the decisions that matter.',
    },
  ],
  today: {
    kicker: 'Today',
    title: 'Where we are today',
    text: 'A small studio with live owned products and paid client work. The ecosystem is the direction. The proof is what you can click today.',
    items: [
      'Flowstarter: a mostly self-serve website factory for service businesses. Preview first, deposit to build, human polish when copy or design gets ambiguous.',
      'Ereno: conversational trip and base planning with research you can check. No booking layer. You book with the provider.',
      'Client work: live sites for other people, same bar as our own products. Agents draft. We decide.',
      'Team: Darius and Dorin lead product, engineering, and design, with a tester, a digital marketer, and a social media specialist. Contractors join when a product needs more hands.',
    ],
  },
  use: {
    kicker: 'Capital',
    title: 'What a conversation is about',
    text: 'We are not posting a raise size on this page. If there is a fit, here is how capital would matter.',
    items: [
      'Speed up the owned products without starving craft: more iterations on Flowstarter and Ereno, clearer distribution, tighter retention loops.',
      'Hire carefully around the core. Keep Darius and Dorin on product decisions. Add hands where shipping is the bottleneck.',
      'Build the shared layer only after products prove the need: identity, context, and automations that span apps instead of a premature platform.',
    ],
  },
  ask: {
    kicker: 'Fit',
    title: 'Who we want to talk to',
    text: 'Operators and investors who prefer durable product craft over narrative. People who have shipped software, sat with users, and know the difference between a demo and a habit. If you want a deck-only story, we are the wrong room. If you want a conversation about products that compound into an ecosystem, book a call or write us.',
  },
  teaserCta: { label: 'Read the investor brief', href: '/investors' },
  talkCta: { label: 'Talk with us', href: '/investors#talk' },
  contact: {
    kicker: 'Talk with us',
    title: 'Interested? Let’s talk',
    text: 'Book a call or send a note. Say you are reaching out about investment. You will talk with Darius and Dorin.',
    bookHint: 'A short call is enough to see if there is a fit.',
    formTitle: 'Prefer email?',
    formText: 'Tell us who you are and what you want to explore. We reply within a day.',
    formSuccess: 'Got it. We will get back to you soon.',
    fields: {
      name: 'Name',
      email: 'Email',
      company: 'Firm or fund (optional)',
      message: 'What would you like to discuss?',
      submit: 'Send message',
      honeypot: 'Leave this field empty',
    },
  },
};

export const about = {
  kicker: 'About',
  title: 'Built for what was missing',
  lead: 'We build technology that amplifies human capability. Darius and Dorin lead product, engineering, and design, with a tester, a digital marketer, and a social media specialist. AI speeds the grind. People keep judgment, creativity, and what ships.',
  summary:
    'Automate the mundane. Amplify the human. We build the products we wished existed, and leave people in charge of what matters.',
  highlights: ['Our philosophy', 'How we work', 'Where we are going'],
  teaserCta: { label: 'More about us', href: '/about' },
  teamCta: { label: 'Meet the team', href: '/#team' },
  story: [
    {
      title: 'Our philosophy',
      text: 'We automate the repetitive, the logistical, and the computationally heavy so people can focus on judgment, creativity, relationships, and building what matters. AI should not remove humans from the equation. It should give them leverage.',
    },
    {
      title: 'How we work',
      text: 'We wanted an easy, trustworthy way to build apps and websites with AI and could not find it done right. So we built Flowstarter, Ereno, and a studio loop: agents draft, we review, it ships, we revisit. You always talk to the people who build.',
    },
    {
      title: 'Where we are going',
      text: 'Toward an ecosystem of connected apps that take tedious day-to-day work off people’s plates and still leave humans in charge. Flowstarter and Ereno are early pieces of that picture.',
    },
  ],
  cta: {
    title: 'Want to build with us?',
    text: 'Book a call, read the investor brief, or apply to contract if you want to freelance with the team.',
    primary: { label: contact.bookLabel },
    secondary: { label: 'Investor brief', href: '/investors' },
    tertiary: { label: 'Careers and contracting', href: '/careers' },
  },
};

export const faq = {
  kicker: 'Q&A',
  title: 'Questions people ask us',
  text: 'Short answers. If yours is not here, write or book a call.',
  items: [
    {
      question: 'What does DMPResearch actually build?',
      answer:
        'Premium websites, web apps, and product systems for businesses, plus our own products like Flowstarter and Ereno. You get working software you can open today, not a slide deck.',
    },
    {
      question: 'Are the agents replacing the team?',
      answer:
        'No. AI should not remove humans from the equation. It should give them leverage. Agents research, draft, and scaffold. Humans lead. People keep judgment, creativity, and what ships.',
    },
    {
      question: 'Who do I talk to if I hire you?',
      answer:
        'You talk to Darius and Dorin. No account managers in the middle. Book a call or email hello@flowstarter.dev.',
    },
    {
      question: 'Do you take freelance or contract help?',
      answer:
        'Yes. We work with freelancers who care about modern stacks and shipping. Apply on the careers page with a portfolio link and what you want to work on.',
    },
    {
      question: 'Are you raising or open to investors?',
      answer:
        'We are open to conversations with operators and investors who care about durable product craft. Read the investor brief for the thesis, where we are today, and what a fit looks like, or send a note through that page.',
    },
    {
      question: 'Where are you based?',
      answer:
        'We build for the EU market and ship online. Reach us anytime at hello@flowstarter.dev.',
    },
  ],
};

export const method = {
  kicker: 'How we build',
  title: 'How we build things',
  loopLabel: 'The loop',
  text: 'Every project on this page follows the same human-centric loop. Agents research, draft, and scaffold. We own the decisions that matter and read the work before it goes live.',
  loop: ['Agents draft', 'We review', 'It ships', 'We revisit'],
  stages: [
    {
      step: 'Agents draft',
      title: 'Agents take the first pass',
      text: 'While we sleep or focus elsewhere, agents pull sources, draft copy and layouts, and scaffold the boring parts of the build.',
      points: [
        'Research and pulling sources together',
        'First drafts of copy, layout, and code',
        'Scaffolding, tests, and migrations',
        'Overnight iteration while we sleep',
      ],
    },
    {
      step: 'We review',
      title: 'Humans keep the judgment',
      text: 'Darius and Dorin decide what ships. Taste, architecture, and risk stay with people. Agents do not get a vote.',
      points: [
        'What to build and what to skip',
        'Brand, visual quality, and final polish',
        'Architecture and data model choices',
        'Reading everything before it ships',
      ],
    },
    {
      step: 'It ships',
      title: 'Working software, not a deck',
      text: 'The loop ends in something live: a site, an app, a change users can touch. That is the only deliverable that counts.',
      points: [
        'A URL you can open today',
        'Scope tight enough to finish',
        'No handoff theatre to juniors',
        'You still talk to the people who built it',
      ],
    },
    {
      step: 'We revisit',
      title: 'Then we come back',
      text: 'Products and client work keep moving. We reopen the loop when the brief changes, the market shifts, or the agents find a better cut.',
      points: [
        'Re-run research when facts change',
        'Tighten what felt rough in production',
        'Extend with freelancers when we need reach',
        'Keep the same people accountable',
      ],
    },
  ],
};

export const team = {
  kicker: 'The team',
  title: 'A focused crew / agents help / people decide',
  text: 'Darius and Dorin lead product, engineering, and design, with a tester, a digital marketer, and a social media specialist. Agents research, draft, and scaffold so the people move faster.',
  members: [
    {
      name: 'Darius',
      role: 'Product and engineering',
      bio: 'Senior full-stack engineer. TypeScript, Next.js, Node, Python, Postgres. Builds SaaS and agentic AI pipelines (routing, embeddings, evaluation). Owns architecture and shipping for Flowstarter and Ereno.',
      photo: '/images/team/darius.png',
      photoAlt: 'Portrait of Darius',
      linkedin: {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/darius-mihai-popescu-346ab680',
      },
    },
    {
      name: 'Dorin',
      role: 'Design and craft',
      bio: 'Senior UX designer for complex digital products. Human-centered systems, UX strategy, research, and interface craft. Owns visual quality and the templates people actually use.',
      photo: '/images/team/dorin.jpeg',
      photoAlt: 'Portrait of Dorin',
      linkedin: {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/dorinux',
      },
    },
  ],
  specialistsKicker: 'Also human',
  specialists: [
    {
      role: 'Tester',
      text: 'Breaks flows before users do. Catches regressions, edge cases, and the quiet bugs that only show up on a real device.',
    },
    {
      role: 'Digital marketer',
      text: 'Positions the products, runs campaigns, and keeps acquisition tied to what we actually ship.',
    },
    {
      role: 'Social media specialist',
      text: 'Owns the public voice across channels so the studio shows up clearly without drowning in content churn.',
    },
  ],
  crewKicker: 'Agent help',
  crew: "AI agents research, draft, and scaffold. They are tools on the floor, not teammates with authority. They don't make product decisions.",
};

export const careers = {
  kicker: 'Work with us',
  title: 'Freelance work on live products',
  text: 'We stay a small team and bring in contractors when a product needs more hands. You work on Flowstarter, Ereno, or client builds, beside people who can decide the same day.',
  pageKicker: 'Contract work',
  pageTitle: 'Contract with us on work that ships',
  pageLead:
    'We are small on purpose, so contractors get real slices of live products rather than busywork. You get the context, a decision maker in the room, and your work in front of users within weeks.',
  fitKicker: 'Who fits',
  fitTitle: 'Who this suits',
  fit: [
    {
      title: 'Curious about new tools',
      text: 'You try agent workflows and new stacks carefully, and you can say plainly where they help and where they fall over.',
    },
    {
      title: 'Steady with ambiguity',
      text: 'Briefs arrive half formed. You ask two sharp questions, pick a direction, and show something small instead of waiting for a spec.',
    },
    {
      title: 'Judgment before output',
      text: 'You read the product, push back when a request is wrong, and treat generated drafts as work you still own.',
    },
  ],
  rolesKicker: 'Open lanes',
  rolesTitle: 'Where we bring people in',
  roles: [
    'Product engineering across TypeScript, Next.js, Node, Python, and data work',
    'Product design and UX for self-serve and conversational flows',
    'QA that breaks real flows on real devices and writes a clear repro',
    'Marketing and writing that explains a product without hype',
  ],
  howKicker: 'How it works',
  howTitle: 'Three steps, no interview panel',
  how: [
    {
      title: 'Say hello with proof',
      text: 'Send a short note and two things you built. Shipped work and repos count for more here than a resume.',
    },
    {
      title: 'Start on a real slice',
      text: 'We scope one small piece of live work, agree the price before you start, and both find out how it goes.',
    },
    {
      title: 'Stay if it fits',
      text: 'Good slices turn into a standing lane with steady work. If the fit is wrong, we pay for what you did and part on good terms.',
    },
  ],
  teaserCta: { label: 'See contract work', href: '/careers' },
  applyCta: { label: 'Apply to contract', href: '/careers#apply' },
  contact: {
    kicker: 'Apply',
    title: 'Tell us what you have shipped',
    text: 'A few lines on what you build, two links, and a CV. We read every note and reply within a week either way.',
    bookHint: 'No need to book a sales call. A clear note with links and a CV is enough.',
    formTitle: 'Apply to contract',
    formText: 'Name, a way to reach you, what you would pick up, and your CV. Links still help.',
    formSuccess: 'Got it. We will read your application and reply within a week.',
    showCalendly: false,
    fields: {
      name: 'Name',
      email: 'Email',
      company: 'Portfolio, GitHub, or LinkedIn',
      message: 'What do you want to work on with us?',
      cv: 'CV / resume',
      cvHint: 'PDF preferred. Max about 8 MB.',
      submit: 'Send application',
      honeypot: 'Leave this field empty',
    },
  },
};

export const cta = {
  kicker: 'Work with us',
  title: "Let's talk about what you need",
  text: 'Need a website, a web app, or a product system your team can actually run? We build with AI speed and human judgment. Book a call or write hello@flowstarter.dev. You talk to Darius and Dorin, not account managers.',
  bookHint: "Thirty minutes is enough to figure out if we're a fit.",
  formTitle: 'Rather write?',
  formText: 'Send a short note. We reply by email, usually within a day.',
  formSuccess: "Got it. We'll get back to you soon.",
  fields: {
    name: 'Name',
    email: 'Email',
    company: 'Company (optional)',
    message: 'What do you want built?',
    submit: 'Send message',
    honeypot: 'Leave this field empty',
  },
};

export const footer = {
  navLabel: 'Footer',
  brand: 'DMPResearch',
  tagline: 'Automate the mundane. Amplify the human.',
  builtWith: {
    label: 'Built with Flowstarter',
    href: 'https://flowstarter.net',
  },
  links: [
    { label: 'About', href: '/about' },
    { label: 'Investors', href: '/investors' },
    { label: 'Careers', href: '/careers' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Flowstarter', href: 'https://flowstarter.net' },
    { label: 'Ereno', href: 'https://ereno.flowstarter.dev' },
    { label: 'GitHub', href: contact.github },
  ],
};
