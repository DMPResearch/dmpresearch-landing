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
  title: 'DMPResearch | Apps and digital products, human and AI',
  description:
    'A small studio building toward an ecosystem of connected, human-centric apps. TypeScript, Next.js, Node, Python, and UX for complex products. Darius and Dorin steer. Agents handle the grind.',
};

export const pages = {
  about: {
    title: 'About | DMPResearch',
    description:
      'DMPResearch is a human team led by Darius and Dorin, with specialists for testing, marketing, and social. AI agents help with the grind. Read who we are and where we are headed.',
  },
  investors: {
    title: 'Investors | DMPResearch',
    description:
      'Our long-term vision is an ecosystem of connected apps that take tedious day-to-day work off people’s plates, without replacing human judgment. Talk with us if that thesis fits.',
  },
  careers: {
    title: 'Careers and contracting | DMPResearch',
    description:
      'Freelance and contract with DMPResearch. We work with people who are excited about new technology and want to extend a small human team shipping real products.',
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
  kicker: 'A small studio',
  titleLead: 'Apps and digital products',
  titleAccent: 'made for people',
  text: 'We blend human judgment with AI work on TypeScript, Next.js, Node, Python, Postgres, and human-centered UX for complex products. Darius and Dorin decide what ships while agents research, draft, and scaffold so we move faster without losing the craft',
  primary: { label: 'Book a call', href: '#contact' },
  secondary: { label: 'See our work', href: '/#products' },
};

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
    text: "We design and ship a polished site, then hand over a constrained AI editor so you can keep it current without breaking it. When you hit the editor's limits, we step in.",
    points: [
      'We handle discovery through launch',
      "You update content with an AI editor that can't break your site",
      'We step back in when the editor hits its limits',
    ],
    link: { label: 'Visit flowstarter.net', href: 'https://flowstarter.net' },
    facts: [
      { term: 'Status', detail: 'Live' },
      { term: 'Wedge', detail: 'Professional websites' },
      { term: 'Model', detail: 'Build once, then a care plan' },
    ],
  },
  {
    id: 'ereno',
    index: '02',
    name: 'Ereno',
    tint: 'olive',
    mark: '/ereno.svg',
    imageLight: '/images/ereno-app-light.webp',
    imageDark: '/images/ereno-app-dark.webp',
    imageAlt: 'Screenshot of the Ereno web app planning a Lisbon trip',
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
  },
];

export const work = {
  kicker: 'Client work',
  title: 'Sites we shipped for other people',
  text: 'Same process as our own products. Agents draft, we decide. These are all live.',
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
  kicker: 'Long-term vision',
  title: 'An ecosystem of connected apps that stay human',
  text: 'We are building toward products that talk to each other and take tedious day-to-day work off people’s plates. Automation where it earns its keep. People stay in charge of judgment, taste, and the final call.',
  points: [
    {
      title: 'Connected, not siloed',
      text: 'Flowstarter, Ereno, and what comes next should share context so users do not re-enter the same life over and over.',
    },
    {
      title: 'Automate the grind',
      text: 'Research, drafting, booking prep, follow-ups, the chores that eat evenings. Agents handle volume. People decide.',
    },
    {
      title: 'Human-centric by design',
      text: 'No black-box magic. Clear sources, visible trade-offs, and interfaces that respect attention instead of harvesting it.',
    },
  ],
  cta: { label: contact.bookLabel, href: contact.sectionHref },
};

export const investors = {
  kicker: 'For investors',
  title: 'Backing a studio that ships products, then connects them',
  text: 'We are a small team with live products already in market. The long game is an ecosystem of connected apps that automate tedious day-to-day tasks while remaining human-centric. If that thesis interests you, we would like to talk.',
  pageKicker: 'Investors',
  pageTitle: 'Invest in the next layer of everyday software',
  pageLead:
    'Most “AI products” are chat wrappers. We ship real apps people use, then wire them into a coherent ecosystem so the boring parts of life get lighter without people losing control.',
  thesisKicker: 'Thesis',
  thesisTitle: 'What we believe',
  thesis: [
    {
      title: 'Products first',
      text: 'Flowstarter and Ereno are live. Client work funds craft and keeps us honest about what ships.',
    },
    {
      title: 'Ecosystem next',
      text: 'Shared identity, shared context, and automations that span apps. Users stop copy-pasting their life between tabs.',
    },
    {
      title: 'Human judgment stays',
      text: 'Agents draft and execute busywork. People keep taste, ethics, and the decisions that matter.',
    },
  ],
  today: {
    kicker: 'Today',
    title: 'Where we are today',
    text: 'Two owned products in market, plus client work that pays for taste and speed. The ecosystem is the direction, not a slide.',
    items: [
      'Flowstarter: website factory and constrained AI editor for service businesses',
      'Ereno: conversational trip and base planning with visible sources',
      'A studio model that blends paid client work with owned products',
    ],
  },
  ask: {
    kicker: 'Fit',
    title: 'Who we want to talk to',
    text: 'Operators and investors who care about durable product craft, not hype cycles. If you want a conversation about the vision, book a call or write us.',
  },
  teaserCta: { label: 'Full investor brief', href: '/investors' },
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
  title: 'A small studio with humans in charge',
  lead: 'DMPResearch is a human team: Darius and Dorin lead, with a tester, a digital marketer, and a social media specialist. AI agents help with research, drafts, and scaffolding. People decide what ships.',
  story: [
    {
      title: 'Why we exist',
      text: 'We got tired of teams that balloon headcount and lose the plot. A tight crew plus serious agent help can ship more, with clearer taste, if the work is set up right.',
    },
    {
      title: 'How we work',
      text: 'Client projects and our own products run the same loop: agents draft, we review, it ships, we revisit. You always talk to the people who build.',
    },
    {
      title: 'Where we are going',
      text: 'Toward an ecosystem of connected apps that automate tedious day-to-day tasks and stay human-centric. Flowstarter and Ereno are early pieces of that picture.',
    },
  ],
  cta: {
    title: 'Want to build with us?',
    text: 'Book a call, read the investor brief, or apply to contract if you want to freelance with the team.',
    primary: { label: contact.bookLabel },
    secondary: { label: 'Investor brief', href: '/#investors' },
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
        'Apps and digital products for people: our own products like Flowstarter and Ereno, plus client sites and systems. You get working software, not a slide deck.',
    },
    {
      question: 'Are the agents replacing the team?',
      answer:
        'No. Agents research, draft, and scaffold. Humans lead: Darius, Dorin, a tester, a digital marketer, and a social media specialist. People decide what ships.',
    },
    {
      question: 'Who do I talk to if I hire you?',
      answer:
        'You talk to Darius and Dorin. No account managers in the middle. Book a call or email hello@flowstarter.dev.',
    },
    {
      question: 'Do you take freelance or contract help?',
      answer:
        'Yes. We work with freelancers who are excited about new technology. Apply on the careers page with a portfolio link and what you want to work on.',
    },
    {
      question: 'Are you raising or open to investors?',
      answer:
        'We are open to conversations with operators and investors who care about durable product craft. Read the investors section or send a note through the investor brief.',
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
  text: 'Every project on this page was built the same way. Agents run research, write first drafts, and scaffold code. We review every decision that matters and read every line before it goes live.',
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
  title: 'A small human crew / agents help / people decide',
  text: 'Darius and Dorin lead product, engineering, and design. The team also includes a human tester, a digital marketer, and a social media specialist. Separately, AI agents research, draft, and scaffold so the humans move faster.',
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
  kicker: 'Careers and contracting',
  title: 'Freelancers who care about new tech',
  text: 'We extend the studio with contractors who get excited about modern stacks, agent workflows, and shipping real products. Not endless pitch decks. Working software.',
  pageKicker: 'Careers',
  pageTitle: 'Contract with us / bring sharp skills and curiosity',
  pageLead:
    'DMPResearch is a small human team. When we need more reach, we hire freelancers who want to work with new technology, not fight it. You plug into live products and client work beside people who decide and ship.',
  fitKicker: 'Who thrives here',
  fitTitle: 'What we look for',
  fit: [
    {
      title: 'Excited by new tools',
      text: 'TypeScript, modern web stacks, agent-assisted workflows, and whatever comes next. You try things carefully and keep craft high.',
    },
    {
      title: 'Comfortable with ambiguity',
      text: 'Briefs move. Products evolve. You ask good questions, ship in slices, and leave the codebase clearer than you found it.',
    },
    {
      title: 'Human judgment first',
      text: 'Agents can draft. You still own taste, testing, and whether something is ready for a user.',
    },
  ],
  rolesKicker: 'Where help lands',
  rolesTitle: 'Capabilities we often extend',
  roles: [
    'Engineering across TypeScript, Next.js, Node, Python, and data work',
    'UX, interface craft, and design systems',
    'QA and exploratory testing on real devices',
    'Digital marketing and social content that matches the product',
  ],
  howKicker: 'How it works',
  howTitle: 'Contracting, not theatre',
  how: [
    {
      title: 'Say hello with proof',
      text: 'Send a short note, a portfolio or GitHub, and what you want to work on. We reply by email.',
    },
    {
      title: 'Start on a real slice',
      text: 'Paid contract work on a scoped piece of product or client delivery. Clear owner on our side.',
    },
    {
      title: 'Stay if it fits',
      text: 'Good collaborators get more work. We do not run a revolving door of unpaid trials.',
    },
  ],
  teaserCta: { label: 'See open contracting', href: '/careers' },
  applyCta: { label: 'Apply to contract', href: '/careers#apply' },
  contact: {
    kicker: 'Apply',
    title: 'Tell us what you do well',
    text: 'Freelance and contract roles only for now. Write hello@flowstarter.dev or use the form. Mention your stack, availability, and a link to work you are proud of.',
    bookHint: 'No need to book a sales call. A clear note is enough.',
    formTitle: 'Send an application',
    formText: 'Keep it short. We read every message ourselves.',
    formSuccess: 'Got it. We will get back to you if there is a fit.',
    showCalendly: false,
    fields: {
      name: 'Name',
      email: 'Email',
      company: 'Portfolio, GitHub, or LinkedIn',
      message: 'What do you want to work on with us?',
      submit: 'Send application',
      honeypot: 'Leave this field empty',
    },
  },
};

export const cta = {
  kicker: 'Work with us',
  title: "Let's talk about what you need",
  text: 'We build apps and digital products for people, blending human craft with AI speed. Book a call or write hello@flowstarter.dev. You talk to Darius and Dorin, not account managers.',
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
  tagline: 'Apps and digital products made for people',
  builtWith: {
    label: 'Built with Flowstarter',
    href: 'https://flowstarter.net',
  },
  links: [
    { label: 'About', href: '/#about' },
    { label: 'Investors', href: '/#investors' },
    { label: 'Careers', href: '/careers' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Flowstarter', href: 'https://flowstarter.net' },
    { label: 'Ereno', href: 'https://ereno.flowstarter.dev' },
    { label: 'GitHub', href: contact.github },
  ],
};
