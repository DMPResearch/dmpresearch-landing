export const legalController = {
  name: 'DMPResearch',
  email: 'hello@flowstarter.dev',
  mailto: 'mailto:hello@flowstarter.dev?subject=Privacy%20request',
  region: 'European Union',
  hosting: 'Netlify',
  lastUpdated: '10 September 2026',
};

export const legalNav = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Terms', href: '/terms' },
];

export const consentCopy = {
  title: 'Cookies',
  text: 'Necessary storage runs the site. Calendly only if you allow it.',
  acceptAll: 'Accept',
  reject: 'Necessary',
  customize: 'Customize',
  save: 'Save',
  close: 'Close',
  settings: 'Cookie settings',
  privacyLink: { label: 'Privacy', href: '/privacy' },
  cookiesLink: { label: 'Cookies', href: '/cookies' },
  categories: {
    necessary: {
      title: 'Necessary',
      text: 'Always on',
    },
    thirdParty: {
      title: 'Calendly',
      text: 'Embed here, or open in a new tab',
    },
  },
};

export const formPrivacyNote = {
  contact: 'By sending this form you agree we may process your details to reply.',
  investors:
    'By sending this form you agree we may process your details to reply about investment conversations.',
  careers:
    'By sending this form you agree we may process your details to review a freelance or contract application.',
  linkLabel: 'Read our privacy policy',
  href: '/privacy',
};

export const pagesLegal = {
  privacy: {
    title: 'Privacy policy | DMPResearch',
    description:
      'How DMPResearch collects, uses, and protects personal data when you use our website or contact us.',
  },
  cookies: {
    title: 'Cookie policy | DMPResearch',
    description:
      'Which cookies and similar technologies DMPResearch uses, why, and how you can control them.',
  },
  terms: {
    title: 'Terms of use | DMPResearch',
    description: 'Terms that apply when you browse the DMPResearch website.',
  },
};

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export const privacyPage = {
  kicker: 'Legal',
  title: 'Privacy policy',
  lead: `This policy explains how ${legalController.name} handles personal data when you visit dmpresearch.flowstarter.dev or contact us. We sell and build for customers in the EU, so we follow the GDPR.`,
  updated: `Last updated ${legalController.lastUpdated}`,
  sections: [
    {
      title: 'Who is responsible',
      paragraphs: [
        `${legalController.name} is the controller for personal data processed through this website.`,
        `Contact: ${legalController.email}. For privacy requests, email us with enough detail to verify the request.`,
      ],
    },
    {
      title: 'What we collect',
      paragraphs: ['Depending on how you use the site, we may process:'],
      bullets: [
        'Identity and contact data you send (name, email, company, message, portfolio links) through our contact, investor, or careers forms',
        'Technical data created by hosting and security systems (IP address, browser type, rough location derived from IP, timestamps)',
        'Consent choices stored in your browser so we remember cookie preferences',
        'Theme preference stored locally on your device',
      ],
    },
    {
      title: 'Why we process data',
      paragraphs: ['We process personal data for these purposes and legal bases:'],
      bullets: [
        'To reply to enquiries, review freelance applications, and book calls (legitimate interests, and contract steps when you ask us to work together)',
        'To run and secure the website (legitimate interests)',
        'To remember cookie choices and essential preferences (legal obligation / legitimate interests)',
        'To load optional third-party booking tools when you consent (consent)',
      ],
    },
    {
      title: 'Forms and email',
      paragraphs: [
        'Messages sent through Netlify Forms are delivered to us by email so we can respond. Do not send special-category data (health, politics, religion, and similar) through these forms.',
        'We keep enquiry emails only as long as needed to handle the conversation and ordinary business records, then delete or archive them under our normal retention practice.',
      ],
    },
    {
      title: 'Calendly booking',
      paragraphs: [
        'If you book a call, scheduling is handled by Calendly. When you allow third-party embeds, Calendly may set its own cookies and process booking data under its terms and privacy policy. If you refuse those embeds, the book button opens Calendly in a new tab instead of loading it on our site.',
      ],
    },
    {
      title: 'Processors and transfers',
      paragraphs: [
        `This site is hosted by ${legalController.hosting}. Form submissions and site delivery may involve processing in the United States or other countries outside the EEA.`,
        'Where data leaves the EEA, we rely on appropriate safeguards such as the processor’s standard contractual clauses or another lawful transfer tool. Calendly is a separate controller/processor for scheduling data once you use their service.',
      ],
    },
    {
      title: 'How long we keep data',
      paragraphs: [
        'Consent records stay in your browser until you clear site data or change settings.',
        'Enquiry content is kept while the conversation is active and for a limited period afterward for follow-up and accountability, unless a longer period is required by law.',
      ],
    },
    {
      title: 'Your rights',
      paragraphs: [
        'Under the GDPR you can ask to access, rectify, erase, restrict, or port your personal data, and you can object to processing based on legitimate interests. Where we rely on consent, you can withdraw it at any time without affecting earlier lawful processing.',
        `Email ${legalController.email} to exercise these rights. You also have the right to lodge a complaint with your local supervisory authority. In Romania that is the ANSPDCP; if you live elsewhere in the EU, contact your national authority.`,
      ],
    },
    {
      title: 'Children',
      paragraphs: [
        'This website is aimed at adults and businesses. We do not knowingly collect personal data from children.',
      ],
    },
    {
      title: 'Changes',
      paragraphs: [
        'We may update this policy when our practices or the law change. The “last updated” date at the top will change when we do. Material changes will be reflected on this page.',
      ],
    },
  ] satisfies LegalSection[],
};

export const cookiesPage = {
  kicker: 'Legal',
  title: 'Cookie policy',
  lead: 'Cookies and similar technologies help this site work. This page lists what we use and how you can control it.',
  updated: `Last updated ${legalController.lastUpdated}`,
  sections: [
    {
      title: 'What we mean by cookies',
      paragraphs: [
        'Cookies are small text files stored on your device. We also use local storage for the same kinds of jobs: remembering a setting, or recalling that you already chose cookie preferences.',
      ],
    },
    {
      title: 'Strictly necessary',
      paragraphs: [
        'These are needed for the site to work securely and to respect your choices. They do not require opt-in under the ePrivacy rules when they are strictly necessary.',
      ],
      bullets: [
        'dmpr-consent — stores your cookie choice and version so we do not ask on every visit',
        'dmpr-theme — stores light, dark, or auto theme preference',
      ],
    },
    {
      title: 'Third-party embeds (optional)',
      paragraphs: [
        'Only if you accept “Third-party embeds” in the cookie banner do we load Calendly’s script and stylesheet on this domain. Calendly may then set its own cookies to run the scheduler.',
        'If you choose necessary only, we do not load those files here. Booking still works by opening calendly.com in a new tab, where Calendly’s own notices apply.',
      ],
    },
    {
      title: 'Analytics and ads',
      paragraphs: [
        'This marketing site does not currently use analytics pixels, advertising cookies, or social tracking plugs on page load.',
      ],
    },
    {
      title: 'How to change your mind',
      paragraphs: [
        'Use Cookie settings in the site footer, or clear this site’s data in your browser. You can also block cookies in browser settings; some features may then fall back to simpler behaviour.',
      ],
    },
  ] satisfies LegalSection[],
};

export const termsPage = {
  kicker: 'Legal',
  title: 'Terms of use',
  lead: 'These terms cover your use of the DMPResearch marketing website. They are not a client services agreement.',
  updated: `Last updated ${legalController.lastUpdated}`,
  sections: [
    {
      title: 'The site',
      paragraphs: [
        'This website describes DMPResearch, our products, and how to contact us. Content is provided for general information. It may change without notice.',
      ],
    },
    {
      title: 'No professional advice',
      paragraphs: [
        'Nothing on this site is legal, financial, or investment advice. Investor pages are informational only and do not constitute an offer to sell securities.',
      ],
    },
    {
      title: 'Acceptable use',
      paragraphs: [
        'Do not misuse the site: no scraping that harms service, no attempts to break security, and no sending unlawful or abusive content through our forms.',
      ],
    },
    {
      title: 'Third-party services',
      paragraphs: [
        'Links to Flowstarter, Ereno, Calendly, GitHub, LinkedIn, and other sites are subject to those parties’ own terms. We are not responsible for their content or practices.',
      ],
    },
    {
      title: 'Intellectual property',
      paragraphs: [
        'Site design, copy, and marks belong to DMPResearch or their respective owners. You may not copy substantial parts for commercial use without permission.',
      ],
    },
    {
      title: 'Liability',
      paragraphs: [
        'To the extent allowed by mandatory consumer and data-protection law, we provide the site as-is and are not liable for indirect loss arising from use of the public marketing pages.',
      ],
    },
    {
      title: 'Contact',
      paragraphs: [`Questions about these terms: ${legalController.email}.`],
    },
  ] satisfies LegalSection[],
};
