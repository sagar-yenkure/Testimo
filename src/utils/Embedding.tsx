const getCodeExample = (
  framework: string,
  collectionId: string,
  selectedTheme: string
) => {
  const examples = {
    react: `import { Testimonials } from 'testimonial-hub';

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

import { Testimonials } from 'testimonial-hub';

export default function TestimonialsSection() {
  return (
    <Testimonials
      collectionId="${collectionId}"
      theme="${selectedTheme}"
    />
  );
}`,

    remix: `import { Testimonials } from 'testimonial-hub';

export default function TestimonialsRoute() {
  return (
    <Testimonials
      collectionId="${collectionId}"
      theme="${selectedTheme}"
    />
  );
}`,
  };

  return examples[framework as keyof typeof examples];
};

const getInstallCommand = (framework: string) => {
  const commands = {
    react: "npm install testimonial-hub",
    nextjs: "npm install testimonial-hub",
    remix: "npm install @testimonials/react@latest",
    angular:
      "# Coming soon - not yet available\n# Angular support in development",
    vue: "# Coming soon - not yet available\n# Vue.js support in development",
  };
  return commands[framework as keyof typeof commands];
};

export { getCodeExample, getInstallCommand };
