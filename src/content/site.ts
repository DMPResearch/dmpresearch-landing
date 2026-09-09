export const contact = {
  email: 'hello@flowstarter.dev',
  href: 'mailto:hello@flowstarter.dev?subject=Build%20with%20DMPResearch',
  github: 'https://github.com/DMPResearch',
  label: 'Build with us',
};

export const meta = {
  title: 'DMPResearch — Products for the Gretly ecosystem',
  description:
    'DMPResearch is Darius and Dorin. We ship specialized AI products with agents in the loop and humans at the wheel. Flowstarter and Ereno are live. Gretly is the long-term ecosystem.',
};

export const nav = [
  { label: 'Products', href: '#products' },
  { label: 'Gretly', href: '#gretly' },
  { label: 'Method', href: '#method' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  kicker: 'DMPResearch · Gretly ecosystem',
  titleLead: 'Specialized AI products.',
  titleAccent: 'Humans when it matters.',
  text: 'We are Darius and Dorin. Agents research, draft and scaffold. We decide what ships. Flowstarter and Ereno are live. Gretly is the long bet.',
  primary: { label: 'Build with us', href: contact.href },
  secondary: { label: 'See live products', href: '#products' },
  facts: [
    { value: '2', label: 'Live products' },
    { value: '2', label: 'People' },
    { value: '1', label: 'Shared engine vision' },
  ],
};

export interface Product {
  id: string;
  index: string;
  name: string;
  tint: 'blue' | 'olive';
  mark: string;
  image: string;
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
    image: '/images/flowstarter-site.webp',
    imageAlt: 'Screenshot of the Flowstarter website',
    title: 'The virtual software factory for service businesses.',
    text: 'We design and ship a premium site, then hand over a constrained AI editor so the client keeps it current without breaking it. Plan first. Assemble from vetted blocks. Escalate when architecture needs a human.',
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
    image: '/images/ereno-site.webp',
    imageAlt: 'Screenshot of the Ereno website',
    title: 'Trusted planning for trips and base decisions.',
    text: 'Ereno is the Ask Sage travel wedge: research with sources, compare options, hold constraints, and help you choose. Transparent assumptions. No booking promises. You book with the provider.',
    points: [
      'Trips and base scouting in one conversation',
      'Evidence, trade-offs and uncertainty kept visible',
      'Structured briefs that other Gretly products can execute later',
    ],
    link: { label: 'Visit ereno.flowstarter.dev', href: 'https://ereno.flowstarter.dev' },
    facts: [
      { term: 'Status', detail: 'Live' },
      { term: 'Wedge', detail: 'Travel planning' },
      { term: 'Family', detail: 'Ask Sage / Gretly' },
    ],
  },
];

export const gretly = {
  kicker: 'The long game',
  title: 'Gretly is an ecosystem of specialized smart applications.',
  text: 'Not one vague super-app. A family of focused products that share a compounding intelligence layer: the Gretly Engine. Each vertical earns the right to exist before the next one launches.',
  sentence:
    'Gretly turns user intent into trustworthy plans and actions, and brings in qualified people when automation reaches its safe boundary.',
  principles: [
    {
      title: 'Vertical excellence first',
      text: 'Become one of the strongest options in a narrow category before expanding.',
    },
    {
      title: 'Structured AI',
      text: 'Schemas, plans, tools, verification. Not unconstrained improvisation.',
    },
    {
      title: 'Truthful boundaries',
      text: 'Show what is known, inferred, uncertain, and when a human is required.',
    },
    {
      title: 'Human expertise as a layer',
      text: 'Escalation is designed into workflows and pricing, not treated as failure.',
    },
  ],
  products: [
    { name: 'Ask Sage / Ereno', status: 'Live wedge', note: 'Trusted planning' },
    { name: 'Flowstarter', status: 'Live wedge', note: 'Virtual software factory' },
    { name: 'FeelTunes', status: 'Later', note: 'Adaptive music and wellbeing' },
    { name: 'Gretly Learning', status: 'Later', note: 'AI-assisted education' },
    { name: 'Gretly Fitness', status: 'Later', note: 'Coaching with real trainers' },
    { name: 'Gretly Finance', status: 'Later', note: 'Guidance with licensed experts' },
  ],
  engine:
    'The Gretly Engine extracts only after multiple products prove the same primitives: identity, planning, tools, verification, billing, and human escalation.',
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
    },
    {
      name: 'Dorin',
      role: 'Design and craft',
      bio: 'Owns interface craft, visual systems and the templates clients feel. Decides what is good enough to ship.',
    },
  ],
  crew: 'AI agents are the rest of the crew. They draft, research and scaffold around us. They do not decide.',
};

export const cta = {
  title: 'Have a product you need built?',
  text: 'Tell us what you are trying to ship. We will say honestly whether a two-person studio with agents in the loop is the right fit, and how Gretly-shaped thinking would apply.',
};

export const footer = {
  links: [
    { label: 'Flowstarter', href: 'https://flowstarter.net' },
    { label: 'Ereno', href: 'https://ereno.flowstarter.dev' },
    { label: 'GitHub', href: contact.github },
  ],
};
