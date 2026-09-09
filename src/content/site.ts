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
  title: 'DMPResearch — Two people, AI agents, custom software',
  description:
    'Darius and Dorin run a small studio with AI agents. We build almost any custom software. Agents draft, we decide, you get working software.',
};

export const nav = [
  { label: 'Products', href: '#products' },
  { label: 'Work', href: '#work' },
  { label: 'Method', href: '#method' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  kicker: 'Two builders + AI agents',
  titleLead: 'Two people and a crew of AI agents.',
  titleAccent: 'We build your software.',
  text: 'Darius does product and engineering. Dorin does design. Agents research, draft, and scaffold in parallel while we decide what ships. Sites, products, tools, backends. If you need custom software, we should talk.',
  primary: { label: 'Book a call', href: '#contact' },
  secondary: { label: 'Our products', href: '#products' },
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
    title: 'A website factory for service businesses.',
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
    title: 'A planning companion for trips and base scouting.',
    text: 'Ereno is a conversational tool that pulls research, compares options, and keeps trade-offs where you can see them. It does not book anything. You go to the provider for that.',
    points: [
      'Plan trips and scout bases in one conversation',
      'Sources and trade-offs stay visible',
      'No booking layer. You book directly.',
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
  kicker: 'Client work',
  title: 'Sites we shipped for other people.',
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
  kicker: 'What we think',
  title: 'Agents are fast. Taste is ours.',
  text: "Agents let two people ship at the pace of a bigger team. But they don't know what good looks like. We do. This same setup works for your project too.",
  points: [
    {
      title: 'Agents do the volume',
      text: "Research, first drafts, scaffolding, iteration. They run in parallel and they don't stop.",
    },
    {
      title: 'We make the calls',
      text: 'Architecture, taste, what to cut. Darius and Dorin decide what ships.',
    },
    {
      title: 'You get working software',
      text: 'Not a slide deck. A live product you can use, own, and change.',
    },
  ],
};

export const method = {
  title: 'How we actually build things.',
  text: 'Every project here was built the same way. Agents run research, write first drafts, and scaffold code. We review every decision that matters and read every line before it goes live.',
  loop: ['Agents draft', 'We review', 'It ships', 'We revisit'],
  columns: [
    {
      heading: 'Agents handle',
      items: [
        'Research and pulling sources together',
        'First drafts of copy, layout, and code',
        'Scaffolding, tests, and migrations',
        'Overnight iteration while we sleep',
      ],
    },
    {
      heading: 'We handle',
      items: [
        'What to build and what to skip',
        'Brand, visual quality, and final polish',
        'Architecture and data model choices',
        'Reading everything before it ships',
      ],
    },
  ],
};

export const team = {
  title: 'Two people. You know who decided what.',
  text: 'We met building software for other people and kept noticing the same thing: agents can do in an afternoon what used to take a week, but someone still has to know what good looks like. So we stayed small on purpose.',
  members: [
    {
      name: 'Darius',
      role: 'Product and engineering',
      bio: 'Runs architecture, shipping, and the agent workflows behind Flowstarter and Ereno. Reads what the agents produce and decides what stays.',
      photo: '/images/team/darius.png',
      photoAlt: 'Portrait of Darius',
    },
    {
      name: 'Dorin',
      role: 'Design and craft',
      bio: 'Owns the visual systems, interface work, and the templates clients actually use. Nothing ships until it passes his bar.',
      photo: '/images/team/dorin.jpeg',
      photoAlt: 'Portrait of Dorin',
    },
  ],
  crew: "The rest of the team is AI agents. They research, draft, and scaffold. They don't make decisions.",
};

export const cta = {
  title: 'Tell us what you need built.',
  text: 'We build custom software. Book a call or send us a note. You talk to Darius and Dorin directly, no account managers.',
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
