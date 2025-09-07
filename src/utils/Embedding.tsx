const getCodeExample = (
  framework: string,
  collectionId: string,
  selectedTheme: string
) => {
  const examples = {
    react: `import { Testimonials } from 'testimo-react';

export default function TestimonialsSection() {
  return (
    <Testimonials
      collectionId="${collectionId}"
      theme="${selectedTheme}"
    />
  );
}`,

    nextjs: `
//client components

'use client';

import { Testimonials } from 'testimo-react';

export default function TestimonialsSection() {
  return (
    <Testimonials
      collectionId="${collectionId}"
      theme="${selectedTheme}"
    />
  );
}`,

    remix: `import { Testimonials } from 'testimo-react';

export default function TestimonialsRoute() {
  return (
    <Testimonials
      collectionId="${collectionId}"
      theme="${selectedTheme}"
    />
  );
}`,
  };
  // © 2025 Sagar Yenkure. All Rights Reserved.
  return examples[framework as keyof typeof examples];
};

const getInstallCommand = (framework: string) => {
  const commands = {
    react: "npm install testimo-react@latest",
    nextjs: "npm install testimo-react@latest",
    remix: "npm install @testimonials/react@latest",
    angular:
      "# Coming soon - not yet available\n# Angular support in development",
    vue: "# Coming soon - not yet available\n# Vue.js support in development",
  };
  return commands[framework as keyof typeof commands];
};

export { getCodeExample, getInstallCommand };
