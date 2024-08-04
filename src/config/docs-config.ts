export type DocsConfig = {
  title: string;
  path?: string;
  pages?: DocsConfig[];
};

export const Pages: DocsConfig[] = [
  {
    title: "Docs",
    path: "/docs/introduction",
  },
];

export const docsConfig: DocsConfig[] = [
  {
    title: "Getting Started",
    pages: [
      {
        title: "Introduction",
        path: "/docs/introduction",
      },
    ],
  },
];
