export type Book = {
  // Book ID (unique). It will also become the URL slug.
  id: number | string;
  // Photo title
  title: string;
  // Book URL (can be absolute or relative to the public folder)
  url: string;
  // Book description
  description: string;
};

export const books: Book[] = [
  {
    id: 1,
    title: 'Death by JavaScript',
    description:
      "Death by JavaScript: When you're so async, you forget to await your own life.",
    url: '/images/books/the-happiness-project.webp',
  },
  {
    id: 2,
    title: 'Death by JavaScript',
    description:
      'Why did the developer die? They kept trying to destructure the meaning of life and got `undefined`.',
    url: '/images/books/why-men-love-bitches.webp',
  },
  {
    id: 3,
    title: 'Death by JavaScript',
    description:
      'The developer passed away from trying to debug an obfuscated script in production.',
    url: '/images/books/why-we-sleep.webp',
  },
  {
    id: 4,
    title: 'Death by JavaScript',
    description:
      'The developer passed away from trying to debug an obfuscated script in production.',
    url: '/images/books/the-things-you-can-see-only-when-you-slow-down.webp',
  },
  {
    id: 5,
    title: 'Death by JavaScript',
    description:
      "Death by JavaScript: When you're so async, you forget to await your own life.",
    url: '/images/books/the-happiness-project.webp',
  },
  {
    id: 6,
    title: 'Death by JavaScript',
    description:
      'Why did the developer die? They kept trying to destructure the meaning of life and got `undefined`.',
    url: '/images/books/why-men-love-bitches.webp',
  },
  {
    id: 7,
    title: 'Death by JavaScript',
    description:
      'The developer passed away from trying to debug an obfuscated script in production.',
    url: '/images/books/why-we-sleep.webp',
  },
  {
    id: 8,
    title: 'Death by JavaScript',
    description:
      'The developer passed away from trying to debug an obfuscated script in production.',
    url: '/images/books/the-things-you-can-see-only-when-you-slow-down.webp',
  },
];
