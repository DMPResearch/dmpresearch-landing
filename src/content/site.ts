export const contact = {
  email: 'hello@flowstarter.dev',
  href: 'mailto:hello@flowstarter.dev?subject=Build%20with%20DMPResearch',
  sectionHref: '#contact',
  github: 'https://github.com/DMPResearch',
  label: 'Build with us',
  bookLabel: 'Book a call',
  calendlyUrl: 'https://calendly.com/flowstarter-app/discovery',
};

export const meta = {
  title: 'DMPResearch — Custom software, built with AI agents',
  description:
    'DMPResearch builds custom software for you. Darius and Dorin use AI agents to ship faster. Book a call or write hello@flowstarter.dev.',
};

export const nav = [
  { label: 'Products', href: '#products' },
  { label: 'Work', href: '#work' },
  { label: 'Method', href: '#method' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  kicker: 'DMPResearch · two-person studio',
  titleLead: 'We make AI work for us.',
  titleAccent: 'You can have that too.',
  text: 'Darius and Dorin ship real products with AI agents in the loop. Agents accelerate the work. We keep the judgment. If you want something built the same way, talk to us.',
  primary: { label: 'Book a call', href: '#contact' },
  secondary: { label: 'See what we shipped', href: '#products' },
  facts: [
    { value: '2', label: 'Live products' },
    { value: '3+', label: 'Client sites' },
    { value: '2', label: 'People' },
  ],
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
    title: 'The virtual software factory for service businesses.',
    text: 'We design and ship a premium site, then hand over a constrained AI editor so the client keeps it current without breaking it.',
    points: [
      'Discovery to a live site, handled by the studio',
      'Constrained AI editing for safe ongoing care',
      'Human escalation when the factory hits its edge',
    ],
    link: { label: 'Visit flowstarter.net', href: 'https://flowstarter.net' },
    facts: [
      { term: 'Status', detail: 'Live' },
      { term: 'Wedge', detail: 'Professional websites' },
      { term: 'Model', detail: 'Build + care subscription' },
    ],
  },
  {
    id: 'ereno',
    index: '02',
    name: 'Ereno',
    tint: 'olive',
    mark: '/ereno.svg',
    imageLight: '/images/ereno-site-light.webp',
    imageDark: '/images/ereno-site-dark.webp',
    imageAlt: 'Screenshot of the Ereno website',
    title: 'Trusted planning for trips and base decisions.',
    text: 'A conversational companion for trip planning and base scouting. Research with sources, compare options, keep trade-offs visible. You book with the provider.',
    points: [
      'Trips and base scouting in one conversation',
      'Evidence and trade-offs kept visible',
      'No booking promises',
    ],
    link: { label: 'Visit ereno.flowstarter.dev', href: 'https://ereno.flowstarter.dev' },
    facts: [
      { term: 'Status', detail: 'Live' },
      { term: 'Wedge', detail: 'Travel planning' },
      { term: 'Studio', detail: 'DMPResearch' },
    ],
  },
];

export const work = {
  kicker: 'Also built',
  title: 'Sites we shipped for real clients.',
  text: 'Beyond our own products, these are live builds from the Flowstarter practice. Same standard: agents accelerate, we sign off.',
  items: [
    {
      id: 'ux-journey',
      title: 'UX Journey',
      meta: 'Coaching · Live · 2026',
      kicker: 'A senior UX coaching practice. Copy, calendar and credibility on one domain.',
      image: '/images/work/ux-journey.webp',
      href: 'https://ux-journey.com/',
      hrefLabel: 'ux-journey.com',
    },
    {
      id: 'lebadusul',
      title: 'Lebădușul',
      meta: 'Retail · Live · 2026',
      kicker: 'A Danube-side tackle shop. Catalog, checkout and logistics copy for serious anglers.',
      image: '/images/work/lebadusul.webp',
      href: 'https://lebadusularticoledepescuit.ro/',
      hrefLabel: 'lebadusularticoledepescuit.ro',
    },
    {
      id: 'dorin-portfolio',
      title: 'Creative Portfolio',
      meta: 'Portfolio · Starter · Live',
      kicker: "Dorin's portfolio starter. Launch something credible fast from the Flowstarter library.",
      image: '/images/work/dorin-portfolio.webp',
      href: 'https://flowstarter.net/library/templates/dorin-portfolio',
      hrefLabel: 'View in Flowstarter library',
    },
  ],
};

export const ambition = {
  kicker: 'What we believe',
  title: 'Make AI work for us. Build products people can feel.',
  text: 'We use agents to research, draft and scaffold so we can ship faster without lowering the bar. The same setup can build your product. Contact us and tell us what you need.',
  points: [
    { title: 'Agents accelerate', text: 'Research, drafts, scaffolding and iteration loops in parallel.' },
    { title: 'We steer', text: 'Taste, architecture and the last mile stay with Darius and Dorin.' },
    { title: 'You get a product', text: 'Not a deck. A live surface you can use, own and improve.' },
  ],
};

export const method = {
  title: 'Agents do the heavy lifting. We steer.',
  text: 'Every product here was built the same way. Agents run research, drafts and scaffolding in parallel. We review every material decision and read every line that ships.',
  loop: ['Agents propose', 'We decide', 'It ships', 'We look again'],
  columns: [
    {
      heading: 'Agents handle',
      items: [
        'Parallel research and source gathering',
        'First drafts of copy, layout and code',
        'Scaffolding, tests and migrations',
        'Iteration loops that run overnight',
      ],
    },
    {
      heading: 'We keep',
      items: [
        'Product shape, and what not to build',
        'Brand, taste and the last mile',
        'Architecture and data decisions',
        'Final review of everything that ships',
      ],
    },
  ],
};

export const team = {
  title: 'Two people. Every decision has a name on it.',
  text: 'We met building software for other people and kept seeing the same gap: agents can do in an afternoon what used to take a team, but someone still has to know what good looks like.',
  members: [
    {
      name: 'Darius',
      role: 'Product and engineering',
      bio: 'Owns architecture, shipping and the systems behind Flowstarter and Ereno. Runs the agent workflows and reads what they produce.',
      photo: '/images/team/darius.png',
      photoAlt: 'Portrait of Darius',
    },
    {
      name: 'Dorin',
      role: 'Design and craft',
      bio: 'Owns interface craft, visual systems and the templates clients feel. Decides what is good enough to ship.',
      photo: '/images/team/dorin.jpeg',
      photoAlt: 'Portrait of Dorin',
    },
  ],
  crew: 'AI agents are the rest of the crew. They draft, research and scaffold around us. They do not decide.',
};

export const cta = {
  title: 'We build custom software for you.',
  text: 'Book a call and tell us what you need. We use AI agents to help ship products faster, with Darius and Dorin steering every material decision.',
  bookHint: 'Pick a time that works. Thirty minutes is enough to see if we are a fit.',
  formTitle: 'Prefer to write?',
  formText: 'Send a short note and we will reply by email.',
  formSuccess: 'Thanks. We got your message and will reply soon.',
  fields: {
    name: 'Name',
    email: 'Email',
    company: 'Company (optional)',
    message: 'What do you want built?',
    submit: 'Send message',
  },
};

export const footer = {
  builtWith: {
    label: 'Built with Flowstarter',
    href: 'https://flowstarter.net',
  },
  links: [
    { label: 'Flowstarter', href: 'https://flowstarter.net' },
    { label: 'Ereno', href: 'https://ereno.flowstarter.dev' },
    { label: 'GitHub', href: contact.github },
  ],
};
