/**
 * Copy for /gretlybot, the public home of the GretlyBot GitHub App.
 * Every statement here describes how the App behaves today; change the copy
 * when the workflows change, never ahead of them.
 */

export const gretlybotPage = {
  title: 'GretlyBot | DMPResearch',
  description:
    'GretlyBot is the GitHub App that posts DMPResearch’s automated code reviews, check results, QA verdicts and production alerts. It reports; people decide every merge.',
};

export const gretlybotLink = { label: 'GretlyBot', href: '/gretlybot' };

export const gretlybot = {
  hero: {
    kicker: 'GitHub App',
    title: 'GretlyBot',
    lead: 'The GitHub App that posts our automated code reviews, check results, QA verdicts and production alerts on the flowstarter, gretly-builder and Ereno repositories. It reports. People decide.',
    appLink: { label: 'View the App on GitHub', href: 'https://github.com/apps/gretlybot' },
    example: {
      label: 'How every comment starts',
      author: 'gretlybot[bot]',
      badge: 'bot',
      before: 'AI agent · OpenCode (ollama-cloud/kimi-k3) · ',
      link: 'via the gretlybot App',
      after: ' · not a human reply',
      caption:
        'The model in brackets is the one that wrote that comment. The link leads to this page.',
    },
  },

  posts: {
    kicker: 'What it posts',
    title: 'Reviews, checks and alerts',
    lead: 'Everything it writes is a report on work someone else did. None of it changes the code.',
    items: [
      {
        title: 'A second-opinion review',
        text: 'An advisory review on each pull request, written by a model from a different family than the one that wrote the change. OpenCode runs it, today with models such as ollama-cloud/kimi-k3 and glm-5.2.',
      },
      {
        title: 'Quality Gate and E2E Smoke',
        text: 'Two check runs on every commit, so a pull request shows where it stands before anyone reads the diff.',
      },
      {
        title: 'The daily QA verdict',
        text: 'Once a day it opens an issue with the QA verdict for the repository, so the state of the product is written down where the team already works.',
      },
      {
        title: 'Production alerts',
        text: 'When a synthetic check against production fails, it opens a production-alert issue on the repository.',
      },
      {
        title: 'Staging previews',
        text: 'It posts the staging preview link on the pull request, so a reviewer can open the change running instead of imagining it.',
      },
      {
        title: 'Dependabot updates too',
        text: 'Dependency pull requests from Dependabot get the same review as any other change.',
      },
    ],
  },

  never: {
    kicker: 'What it never does',
    title: 'It reports. It does not decide.',
    lead: 'Humans decide every merge. These limits hold on every repository it is installed on.',
    items: [
      {
        title: 'It never merges',
        text: 'Every merge is decided and made by a person on the team.',
      },
      {
        title: 'It never pushes code',
        text: 'It writes comments, check runs and issues. It never pushes to a code branch.',
      },
      {
        title: 'It never approves for you',
        text: 'It does not approve a pull request on a person’s behalf. Approval stays with the people who own the code.',
      },
      {
        title: 'It never holds a token near pull-request code',
        text: 'The review runs in a sandboxed job with a read-only token. Posting happens in a separate job that never checks out the change.',
      },
    ],
  },

  apart: {
    kicker: 'How to tell it apart',
    title: 'Clearly labelled, honest about gaps',
    lead: 'You should never have to guess whether a person or an agent wrote a comment, or how much weight to give it.',
    items: [
      {
        title: 'The banner',
        text: 'Every comment opens with the same line: it names the agent and the model, and says it is not a human reply.',
      },
      {
        title: 'The [bot] suffix',
        text: 'GitHub shows the author as gretlybot[bot] with a bot badge. People on the team post under their own accounts.',
      },
      {
        title: 'Advice, not a ruling',
        text: 'A review is advisory. It is input for the person who decides the merge, not a gate on its own.',
      },
      {
        title: 'It says when it falls back',
        text: 'If the App key is missing, it posts with the workflow token instead and says so in the comment.',
      },
      {
        title: 'It says when it has nothing',
        text: 'If the model fails, the comment reads “No verdict was produced”. It never invents a verdict to fill the gap.',
      },
    ],
  },

  maintainers: {
    kicker: 'For maintainers',
    title: 'Working alongside it',
    items: [
      {
        title: 'Ask for a fresh review',
        text: 'Re-run the workflow that posted the review. A new run reads the change again and posts a new comment.',
      },
      {
        title: 'Report a bad verdict',
        text: 'If a review is wrong or unhelpful, open an issue on that repository, link the comment and add the label',
        code: 'gretlybot',
      },
      {
        title: 'Where it comes from',
        text: 'GretlyBot is part of Gretly, the agent harness DMPResearch builds its products with.',
      },
    ],
  },
};
