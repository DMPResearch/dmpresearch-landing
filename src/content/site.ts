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
  title: 'DMPResearch — Websites and web apps for EU businesses',
  description:
    'A two-person studio in Europe. We build websites, web apps, and custom software. AI agents help us ship faster.',
};

export const nav = [
  { label: 'Products', href: '#products' },
  { label: 'Work', href: '#work' },
  { label: 'Method', href: '#method' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  kicker: 'A small studio in the EU',
  titleLead: 'Websites and web apps',
  titleAccent: 'for EU businesses.',
  text: 'Darius does product and engineering. Dorin does design. AI agents handle research and first drafts, so two people ship at the pace of a bigger team. Websites, web apps, custom software. If you need something built, we should talk.',
  primary: { label: 'Book a call', href: '#contact' },
  secondary: { label: 'See our work', href: '#products' },
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
  kicker: 'How we think',
  title: 'Small on purpose.',
  text: 'Most studios grow headcount when they get busy. We added agents instead. Darius and Dorin still make every decision about what ships. The agents do volume work. We do the thinking.',
  points: [
    {
      title: 'You work with us directly',
      text: 'No project managers, no handoffs to juniors. When you hire us, you get us.',
    },
    {
      title: 'Agents handle the grind',
      text: "Research, first drafts, scaffolding, iteration. They run in parallel and they don't stop. That's how two people keep up.",
    },
    {
      title: 'You get working software',
      text: 'Not a slide deck. A live site or app you can use, own, and change.',
    },
  ],
};

export const method = {
  title: 'How we build things.',
  text: 'Every project on this page was built the same way. Agents run research, write first drafts, and scaffold code. We review every decision that matters and read every line before it goes live.',
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
  title: "Two people. You know who you're working with.",
  text: 'We met building software for other people and kept noticing the same thing: agents can do in an afternoon what used to take a week. But someone still has to know what good looks like. So we stayed small on purpose.',
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
      bio: 'Owns the visual systems, interface work, and the templates in the Flowstarter library. Nothing ships until it passes his bar.',
      photo: '/images/team/dorin.jpeg',
      photoAlt: 'Portrait of Dorin',
    },
  ],
  crew: "The rest of the team is AI agents. They research, draft, and scaffold. They don't make decisions.",
};

export const cta = {
  title: "Let's talk about what you need.",
  text: 'We build websites and web apps for businesses in Europe. Book a call or send a note to hello@flowstarter.dev. You talk to Darius and Dorin, not account managers.',
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
